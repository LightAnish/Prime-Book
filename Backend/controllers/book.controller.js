import bookModel from "../models/book.model.js";





export const createBook = async (req, res) => {
  try {
    const { title, author, description, genre, price, category, image } = req.body;

    const book = await bookModel.create({title, author, description, genre, price, category, image});
    res.status(201).json(book);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export const  getAllBooks = async (req, res) => {
  try {
    if (!req.user) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    const books = await bookModel.find();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getFreeBooks = async (req, res) => {
  try {
      const books = await bookModel.find({category: 'free'});
      res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// const getBookById = async (req, res) => {
//   try {
//     const book = await Book.findById(req.params.id)
//     if (book) {
//       res.status(200).json(book)
//     } else {
//       res.status(404).json({ message: 'Book not found' })
//     }
//   } catch (error) {
//     res.status(500).json({ message: error.message })
//   }
// }


