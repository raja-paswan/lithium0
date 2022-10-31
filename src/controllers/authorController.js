const AuthorModel= require("../models/newAuthorModel")

// Q. - Write a POST api that creates an author from the details in request body ?


const  createAuthor = async function (req, res) {
    let Data = req.body
    let authorCreated = await AuthorModel.create(Data)
    res.send({data: authorCreated})
}


module.exports.createAuthor= createAuthor