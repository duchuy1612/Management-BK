import bcrypt from "bcryptjs"
const users = [
  {
    name: 'Admin User',
    email: 'admin1@example.com',
    image: '/images/admin.jpg',
    password: bcrypt.hashSync("123456",10),
    isAdmin: true,
  },
  {
    name: 'Sakura Miko',
    email: 'sakuramiko35@gmail.com',
    image: '/images/miko.jpg',
    password: bcrypt.hashSync("123456",10),
    isAdmin: false,
  }
]
export default users