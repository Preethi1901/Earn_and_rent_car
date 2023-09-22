const mongoose = require("mongoose");

const ownerSchema = new mongoose.Schema({
     ownerid: {type:String , required: true},
     username : {type:String , required: true},
     
     Email:{type:String , required: true},
     password : {type:String , required: true},
     
     
})

const ownerModel = mongoose.model('owners' , ownerSchema)   // owners collection in db

module.exports = ownerModel