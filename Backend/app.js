import express from 'express';
const app = express();
import dotenv  from 'dotenv'
dotenv.config();
import cors from 'cors'
import connectDB from './db/database.js';
import cookieParser from 'cookie-parser'
connectDB();

import booksRouter from './router/books.router.js'
import usersRouter from './router/users.router.js'
import isLoggedin from './middleware/isLoggedin.js';


app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors({
  origin: 'http://localhost:5173', // Your React frontend
  credentials: true
}))
app.use(cookieParser())





// app.use('/', defaultRouter)
// app.use('/admin/', adminRouter)
app.use('/books', booksRouter)
app.use('/users', usersRouter)



app.listen(process.env.PORT || 4000, () => {
  console.log(`Server is running on port ${process.env.PORT || 4000}`);
});