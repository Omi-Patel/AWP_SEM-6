const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  bookName: String,
  author: String,
  description: String,
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
