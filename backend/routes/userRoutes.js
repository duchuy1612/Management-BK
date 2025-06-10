import express from 'express'
import asyncHandler from 'express-async-handler'
import Admin from '../models/adminModel.js'
import Teacher from '../models/teacherModel.js'
import generateToken from '../utils/generateToken.js'
import protect from '../middleware/authMiddleware.js'

const router = express.Router()

router.post(
  '/',
  asyncHandler(async (req, res) => {
    // const students = await Student.find({})
    const { email, password } = req.body
    const user = await Admin.findOne({ email })
    const user_teacher = await Teacher.findOne({ email })
    
    if (user && (await user.matchPassword(password))) {
      return res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        image: user.image,
        token: generateToken(user._id),
      })
    }

    if (user_teacher && (await user_teacher.matchPassword(password))) {
      return res.json({
        _id: user_teacher.teacherId,
        name: user_teacher.teacher_name,
        email: user_teacher.email,
        isTeacher: user_teacher.isTeacher,
        image: user_teacher.image,
        token: generateToken(user_teacher._id),
      })
    }

    res.status(401)
    throw new Error('Invalid email or password')
  })
)

//get logged in user's profile
//may be this route is for fetching information from the token
//stored in the local storge in our browser which is chrome in my case

router.get(
  '/user',
  protect,
  asyncHandler(async (req, res) => {
    const user = await Admin.findById(req.user._id)
    const user_teacher = await Teacher.findById(req.user._id)
    if (user) {
      return res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
      })
    }

    if (user_teacher) {
      return res.json({
        _id: user_teacher.teacherId,
        name: user_teacher.teacher_name,
        email: user_teacher.email,
        isTeacher: user_teacher.isTeacher,
      })
    }

    res.status(404)
    throw new Error('User not found')
  })
)

export default router
