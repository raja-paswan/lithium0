const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    res.send('My second ever api!')
});

router.get('/students', function (req, res){
    console.log("The path params in the request are : ", req.params)
    let students = ['Sabiha', 'Neha', 'Akash']
    res.send(students)
})


router.get('/profile', function (req, res){
    console.log("The path params in the request are : ", req.params)
    let students = "hi my name is raja"
    res.send(students)
})

router.get('/movies', function (req, res){
    console.log("list of movies", req.params)
    let listofmovies = ['rang de basanti','the sining','lord of ring','batman begins'];
    res.send(listofmovies)
})
// router.get('/movie/:index', function (req, res){
//     console.log("list of movies", req.params)
//     let listofmovie=['rang de basanti','the sining','lord of ring','batman begins'];
//     const index=req.params.index;
//     res.send(listofmovie)
// })

// router.get('/movie/:indexNumber', (req,res) => {
//     let index = req.params.indexNumber
//     if(index>movies.length){
//         res.send('Please use a valid index')
//     }
//     else{
//         res.send(movies[index])
//     }
// })
//2and 3////////////////////////////////////////////////////////////////////
router.get('/movies/:indexNumber',(req,res)=>{
    let index=req.params.indexNumber
    let returnn=''
    let movies=['rang de basanti','the sining','lord of ring','batman begins'];
    returnn=(movies.length>index)?movies[index]:"error : wrong"
    res.send(returnn)
})
///////////////////////////////3///////////////////////////////////
router.get('/films',function(req, res){
    let films=[ {
               'id':1,
               'name':'the shing'},
               {
                'id':2,
                'name':'ince'
               },]
               res.send(films)
            });

// Example 1 for path params
router.get('/students/:studentName', function(req, res){
    // ':' denotes that the following part of route is a variable
    // The value of this variable is what we are sending in the request url after /students
    // This value is set in the form of an object inside req.params
    // The object contain key value pairs
    // key is the variable in the route
    // value is whatever dynamic value sent in the request url
    
    let myParams = req.params

    // params attribute is fixed in a request object
    // params contains the path parameters object
    console.log("The path params in the request are : ", myParams)
    res.send('The full name is ' + myParams.studentName )
})

// Example 2 for path params
router.get('/student-details/:name', function(req, res){
    let requestParams = req.params
    console.log("This is the request ", requestParams)
    let studentName = requestParams.name
    console.log('Name of the student is ', studentName)
    res.send('Dummy response')
})

module.exports = router;