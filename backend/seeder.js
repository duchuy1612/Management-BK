import mongoose from 'mongoose'
import dotenv from 'dotenv'
//following users is for who can insert into the database.

import users from './data/users.js'
import items from './data/data.js'
import students from './data/studentData.js'
import teachers from './data/teacherData.js'	
import Teacher from './models/teacherModel.js'
import Student from './models/studentModel.js'
import Dashboard from './models/dashboardModel.js'
import Admin from './models/adminModel.js'

dotenv.config()
import connectDB from './config/db.js'
connectDB()
const importData = async () => {
  try {
    await Admin.deleteMany()
    await Student.deleteMany()
    await Teacher.deleteMany()
    await Dashboard.deleteMany()
    const createdUsers = await Admin.insertMany(users)
    console.log('inserted users')
    const adminUser = createdUsers[0]._id

    const sampleStudents = students.map((student) => {
      return { ...student, user: adminUser }
    })

    const sampleTeachers = teachers.map((teacher) => {
      return { ...teacher, user: adminUser }
    })

    await Dashboard.insertMany(items)
    await Student.insertMany(sampleStudents)
    await Teacher.insertMany(sampleTeachers)

    console.log('Data imported.')
    process.exit()
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

const exportData = async () => {
  try {
    await Student.deleteMany()
    await Dashboard.deleteMany()
    await Admin.deleteMany()
    
    console.log('Data destroyed.')
    process.exit()
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

if (process.argv[2] === '-d') {
  destroyData()
} else {
  importData()
}
