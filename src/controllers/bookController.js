const AuthorModel = require("../models/newAuthorModel")
const PublisherModel = require("../models/newPublisherModel")
const BookModel = require("../models/newBookModel")

// Q.-  Write a POST api that creates a publisher from the details in the request body
// 3. Write a POST api that creates a book from the details in the request body. The api takes both the author and publisher from the request body. 
// In this api, you have to write a logic that validates the following :
// The authorId is present in the request body. If absent send an error message that this detail is required
// If present, make sure the authorId is a valid ObjectId in the author collection. If not then send an error message that the author is not present.
// The publisherId is present in the request body. If absent send an error message that this detail is required
// If present, make sure the publisherId is a valid ObjectId in the publisher collection. If not then send an error message that the publisher is not present.


const createBook = async function (req, res) {
    let book = req.body
    let id1 = req.body.author_id
    let authorid = await AuthorModel.find({ _id: id1 }).select({ _id: 1 })
    let id2 = req.body.Publisher_id
    let publisherid = await PublisherModel.find({ _id: id2 })
    if (!id1) {
        res.send("author id is require")
    } else if (authorid.length == 0) {
        res.send("This Author is not present")
    } else if (!id2) {
        res.send("Publisher id is require")
    } else if (publisherid.length == 0) {
        res.send("This publisher is not present")
    } else {
        let bookCreated = await BookModel.create(book)
        res.send({ data: bookCreated })
    }

}

const getBooksData = async function (req, res) {
    let books = await BookModel.find()
    res.send({ data: books })
}

// Q. 4 -  Write a GET api that fetches all the books along with their author details (you have to populate for this) as well the publisher details (you have to populate for this) 

const getBooksWithAuthorDetails = async function (req, res) {
    let findBook = await BookModel.find().populate('author_id').populate('Publisher_id')
    res.send({ data: findBook })
}


// Q - 5- // b- 

const UpdatePrice  = async function (req, res) {
    let incresear = await AuthorModel.find({rating:{$gt: 3.5} })
    let newincresear=[]
    for(i of incresear){
        abc=i._id
      
       let tosend= await BookModel.findOneAndUpdate(
            {author_id:abc},
            {$inc:{"price":10}},
            {new:true} 
        )
        newincresear.push(tosend)
       }
       res.send({mess:newincresear})
}


module.exports.createBook = createBook
module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
module.exports.UpdatePrice = UpdatePrice