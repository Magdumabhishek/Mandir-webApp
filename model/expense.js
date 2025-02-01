const mongoose = require("mongoose");

const ExpenseSchema = new mongoose.Schema({
    expense_name: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    userName: {
        type: mongoose.Schema.ObjectId,
        ref: 'user'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Expense", ExpenseSchema);
