const mongoose = require('mongoose')

const foodSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    orderDay:{
        type: Date,
        required: true,
        default: Date.now
    },
    orderChannel:{
        type: String,
        required: true,
    }
})

module.exports = mongoose.model('Food', foodSchema)