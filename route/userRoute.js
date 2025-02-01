const {getUser,login,putUser,deleteUser, Register} = require("../controller/userController")
const auth = require("../Authentication/auth")
const route = require("express").Router()

route.get("/",getUser)
route.post("/",Register)
route.post("/login",login)
route.put("/:id",auth,putUser)
route.delete("/:id",auth,deleteUser)

module.exports = route