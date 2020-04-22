//use mongoose
const mongoose = require('mongoose')
const path = require('path')
const coverImageBasePath = 'uploads/bookCovers'

const bookSchema = new mongoose.Schema({
    title: {
        type: String,  
        required: true
    },
    description: {
        type: String        
    },
    publishDate: {
        type: Date,
        required: true
    },
    pageCount: {
        type: Number, 
        required: true
    },
    createdAt: {
        type: Date,
        required: true, 
        default: Date.now   
    },
    coverImageName: {
        type: String, 
        required: true
    },
    author: {
        // references another object (the author object)
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Author'
    }
})


bookSchema.virtual('coverImagePath').get(function (){
    if (this.coverImageBasePath != null){
        return path.join('/', coverImageBasePath, this.coverImageName)

    }

})

//Book is defininig the name of the table in mongoose
module.exports = mongoose.model('Book', bookSchema)

module.exports.coverImageBasePath = coverImageBasePath