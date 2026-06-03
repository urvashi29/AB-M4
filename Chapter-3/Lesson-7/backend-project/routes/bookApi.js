const express = require("express");
const Book = require("../models/books");
const routes = express.Router();

// create a new book
routes.post("/books", async (req, res) => {
  try {
    const newBook = req.body;
    console.log(req.body);
    if (newBook.title.length <= 3 || newBook.title.length == 0) {
      throw Error("no data from client!");
    }
    const book = new Book(newBook); //creating a document(object)
    await book.save(); //save the document in the database
    res.status(201).json(book);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// get the book data
routes.get("/books", async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json({ book: books });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

routes.delete("/books/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const book = await Book.findByIdAndDelete(id);
    if (!book) {
      res.status(400).json({ error: "Book not found" });
    }
    res.json({ message: "Book Delete successfully!" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
module.exports = routes;

