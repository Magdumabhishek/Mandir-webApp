const { getLeadger, postLeadger, putLeadger, deleteLeadger } = require("../Controller/leadgerController")
const auth = require("../Authentication/auth")

const route = require("express").Router()

route.get("/",auth, getLeadger)
route.post("/",auth, postLeadger)
route.put("/:id",auth, putLeadger)
route.delete("/:id",auth, deleteLeadger)

module.exports = route