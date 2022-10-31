
const mongoose = require('mongoose');
// const ObjectId = mongoose.Schema.Types.ObjectId


const PublisherSchema = new mongoose.Schema({
        Name:String,
        HeadQuarter:String,
},{timestamps:true})

module.exports = mongoose.model("NewPublisher",PublisherSchema)