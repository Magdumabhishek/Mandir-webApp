const auth = require("../Authentication/auth")
const {getExpense,postExpense,putExpense,deleteExpense} = require("../controller/expenseController")

const route = require("express").Router()

route.get("/",auth,getExpense)
route.post("/",auth,postExpense)
route.put("/:id",auth,putExpense)
route.delete("/:id",auth,deleteExpense)

module.exports = route