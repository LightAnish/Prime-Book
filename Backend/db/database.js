import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI,{
    })

    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error.message);
  }
}

// second way to connect to database
// connect to MongoDB using mongoose
// mongoose.connect(process.env.MONGODB_URI).then(()=>console.log('Connected to MongoDB')).catch(err => console.log(err));


export default connectDB;