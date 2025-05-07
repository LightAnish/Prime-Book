import express from 'express';
const router = express.Router();

// Importing the BookController
import { getAllBooks, getFreeBooks } from '../controllers/book.controller.js';
import { createBook } from '../controllers/book.controller.js';
import isLoggedin from '../middleware/isLoggedin.js';

// Route to get all books
// router.get('/',getAllBooks);
router.get('/',isLoggedin,getAllBooks)
router.get('/freebook',getFreeBooks)
router.post('/create',createBook)


export default router;