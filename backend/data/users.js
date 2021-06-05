import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Dane',
    email: 'dane@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Claire',
    email: 'claire@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users
