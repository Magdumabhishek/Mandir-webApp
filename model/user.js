
const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: true
    },

    laname: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    mobNumber:{
        type:Number,
        required:true
    },

    password: {
        type: String,
        required: true
    },

    isAdmin: {
        type: Boolean,
        default: false
    },

    isActive: { 
        type: Boolean,
        default: false
    },

    createdAt: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model("user", userSchema)