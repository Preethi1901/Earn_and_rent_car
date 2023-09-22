const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({

    name : {type : String} ,
    image : {type : String , required : true} , 
    capacity : {type : Number , required : true},
    fuelType : {type : String } , 
    bookedTimeSlots : [
        {
            from : {type : String , required : true},
            to : {type : String , required : true}
        }
    ] , 
   
    carno : {type : String ,required:true},
    rentPerHour : {type : Number , required : true},
    ownerid:{type:String , required:true},
    address:{type :String , required:true},
     area:{type :String , required:true}


}, {timestamps : true}

)
const carModel = mongoose.model('cars' , carSchema)
module.exports = carModel