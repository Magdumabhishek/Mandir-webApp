const mongoose = require("mongoose")

const leadgerSchema = new mongoose.Schema({
    totAmount: {
        type: Number,
        required: true
    },

    expAmount: {
        type: Number,
        required: true
    },

    createdAt: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model("leadger", leadgerSchema)