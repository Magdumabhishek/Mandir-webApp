const mongoose = require("mongoose")

const donationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    village: {
        type: String,
        required: true
    },

    pinCode: {
        type: Number,
        required: true
    },

    mobNumber: {
        type: Number,
        required: true
    },

    amount: {
        type: Number,
        required: true
    },

    mop: {
        type: String,
        required: true
    },

    createdAt: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model("donate", donationSchema)