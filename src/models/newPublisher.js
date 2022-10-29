const mongoose = require('mongoose');

const newPublirsheSchema = new mongoose.Schema( {
    name:String,
    author_id: {
        type: ObjectId,
        ref: "xy"
    }, 
    price: Number,
    ratings: Number

    name: “Penguin”,
headQuarte



}, { timestamps: true });

module.exports = mongoose.model('newPublisher', newPublirsheSchema)