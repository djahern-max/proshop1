import mongoose from 'mongoose'

// const connectDB = async () => {
//   try {
//     const conn = await mongoose.connect(
//       'mongodb+srv://Dane123:12345@beachbums.rcxa7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
//       {
//         useUnifiedTopology: true,
//         useNewUrlParser: true,
//         useCreateIndex: true,
//       }
//     )

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    })

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
  } catch (error) {
    console.error(`Error: ${error.message}`.red.underline.bold)
    process.exit(1)
  }
}

export default connectDB
