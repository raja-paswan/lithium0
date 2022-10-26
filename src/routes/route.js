const express = require('express');
const router = express.Router();
const BookController= require("../controllers/bookController")
const BookModel = require("../models/bookModel")

// First Assignment ->

router.post("/create-Book",BookController.createBook)

// Second Assignment ->

router.get("/book-List",BookController.bookList )

// Third Assignment ->

router.post("/get-BooksInYear",BookController.getBooksInYear)

// Fourth Assignment ->

router.post("/get-ParticularBooks",BookController.getParticularBooks)

// Fifth Assignment ->

router.get("/get-XINRBooks",BookController.getXINRBooks)

// Sixth Assignment -> 

router.get("/get-RandomBooks",BookController.getRandomBooks)



module.exports = router;


