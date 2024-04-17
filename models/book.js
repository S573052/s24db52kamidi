const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
  book_title: {
    type: String,
    required: true, // Ensure the field is required
    minlength: [3, 'Book title must be at least 3 characters'],
    maxlength: [25, 'Book title must be at most 25 characters'],
    trim: true // Trim whitespace from the input
  },
  book_author: {
    type: String,
    required: true, // Ensure the field is required
    minlength: [6, 'Book title must be at least 5 characters'],
    maxlength: [20, 'Book title must be at most 20 characters'],
    trim: true // Trim whitespace from the input
  },
  book_rating: Number
});

module.exports = mongoose.model("book", bookSchema);
