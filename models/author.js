//use mongoose
const mongoose = require('mongoose')

const authorSchema = new mongoose.Schema({
    name: {
        type: String,  
        required: true
        
    }
})

//Author is defininig the name of the table in mongoose
module.exports = mongoose.model('Author', authorSchema)