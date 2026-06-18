const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({

    title : {
        type : String,
        required : true,
    },

    note : {
        type : String,
        default : "",
    },

    category : {
        type : String,
        required : true
    },

    status : {
        type : String,
        required : true
    },

    todo : {
        type : String,
        default : ""
    }


})

const postModel = mongoose.model("post", postSchema)

module.exports = postModel