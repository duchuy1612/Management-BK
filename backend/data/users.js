import bcrypt from "bcryptjs"
const users = [
  {
    name: 'Admin User',
    email: 'admin1@example.com',
    image: '/images/admin.jpg',
    password: bcrypt.hashSync("123456",10),
    isAdmin: true,
  }
]
export default users