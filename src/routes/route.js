const express = require('express');
const router = express.Router();
const AuthorModel = require("../models/newAuthorModel")
const PublisherModel = require("../models/newPublisherModel")
const BookModel = require("../models/newBookModel")

const a = require("../controllers/authorController")
const b = require("../controllers/publisherController")
const c = require("../controllers/bookController")



// Assignment Question 1 ->

router.post("/createAuthor",a.createAuthor)

// Assignment Question 2 ->

router.post("/createPublisher", b.createPublisher)


// Assignment Question 3 -> 

router.post("/createBook", c.createBook)


// Assignment Question 4 -> 


router.get("/getBooksWithAuthorDetails",c.getBooksWithAuthorDetails)


// Assignment Question 5 -> 
// a -> 

// router.put("/updateKey",async (req,res)=>{
//     let author= await PublisherModel.find({$or:[{Name:"Penguin"},{
//         Name:"HarperCollins"}]}).select({_id:1})
    
//         let a = author.map(x=>x._id)
    
//         let updatedbooks = await BookModel.updateMany({$or:[{Publisher_id:a[0]},{Publisher_id:a[1]}]},{$set:{isHardCover:true}},{new:true})
    
    
//     let booksWithTrue = await BookModel.find({isHardCover:true})
    
//     res.send({booksWithTrue})
//     } )




// b ->


router.put("/UpdatePrice", c.UpdatePrice)


module.exports = router; 