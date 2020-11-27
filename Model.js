const mongoose = require("mongoose")

const Scheem = mongoose.Schema({
    User :{
        type : String,
        required : true
    },
    Interest :{
        type : String,
        required : true
    },
    Email :{
        type : String,
        required : true
    }
}) 

module.exports = mongoose.model("Moddel", Scheem)
