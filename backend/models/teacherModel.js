import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'
const teacherSchema = mongoose.Schema(
  {
    
    registered_by: {
      type: String,
      required: true,
      ref: 'Admin',
    },
    teacher_name: {
      type: String,
      required: true,
    },
    teacherId: {
      type: Number,
     
    },
    qualification: {
      type: String,
      required: true,
    },

    address: {
      type: String,
      required: true,
    },

    contact_no: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    previous_school: {
      type: String,
    },
    age: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    isTeacher: {
      type: Boolean,
      required: true,
    },
    estimated_salary: {
      type: Number,
      required: false,
    },
    image: {
      type: String,
      required: false,
    },
    subjectToTeach: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)
//the below is required code for converting the schema to the model
//as per the documentation of mongoose
//any name can be given as a constant in the place of the Student
teacherSchema.methods.matchPassword = async function (enteredPassword){
  return await bcrypt.compare(enteredPassword, this.password)
}
const Teacher = mongoose.model('Teacher', teacherSchema)
//Teacher variable is exported as follow is a ES module.
export default Teacher
