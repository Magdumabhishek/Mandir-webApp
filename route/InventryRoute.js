const {getInventry,postInventry,putInventry,deleteInventry} = require("../controller/inventryController")
const express = require("express")
const auth = require("../Authentication/auth")

const route = require("express").Router()


route.get("/",auth,getInventry)
route.post("/",auth,postInventry)
route.put("/:id",auth,putInventry)
route.delete("/:id",auth,deleteInventry)

module.exports = route