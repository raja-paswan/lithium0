const { models } = require("mongoose")
const BookModel= require("../models/bookModel")

// 1-
const createBook = async function (req, res) {
    let data = req.body
   let saveData= await BookModel.create(data)
    res.send({msz: saveData})
}

//2-
const bookList =  async function (req, res) {
    let books = await BookModel.find().select( {
        bookName:1, authorName:1 , _id: 0
    })
    res.send({msz: books})
}

//3-
const getBooksInYear = async function (req, res) {
    let saveData= await BookModel.find({year:2000})
     res.send({msz: saveData})
 }

//4-
const getParticularBooks = async function (req, res) {
    let tofind = req.body
    console.log(tofind)
    let allbooks= await BookModel.find(tofind)
    res.send({msg: allbooks})
}

//5-
const getXINRBooks = async function (req, res) {
    let saveData= await BookModel.find( {'prices.indianPrice': {$in:[100,200,500]} } )
     res.send({msz: saveData})
 }

 //6-
 const getRandomBooks =  async function (req, res) {
    let books = await BookModel.find( {
        $or: [ {stockAvailable:true},{totalPages: {$gte:500}}]
    })
    res.send({msz: books})
}

module.exports.createBook= createBook
module.exports.bookList=  bookList
module.exports.getBooksInYear= getBooksInYear
module.exports.getParticularBooks= getParticularBooks
module.exports.getXINRBooks= getXINRBooks
module.exports.getRandomBooks= getRandomBooks

