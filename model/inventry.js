const mongoose = require("mongoose")

const inventrySchema = new mongoose.Schema({
    item_name:{
        required:true,
        type:String
    },
    stock:{
        type:Number,
        required:true
    },
    stockUsed:{
        type:Number,
        required:true
    },
    stockRemaining:{
        type:mongoose.Schema.ObjectId,
        ref:'user'
    },
    description:{
        type:String,
        required:true
    },
    CreatedAt:{
        type:Date,
        default:Date.now()
    }
})

module.exports = mongoose.model("inventry",inventrySchema)
