const { getDonation, postDonation, putDonation, deleteDonation } = require("../controller/donationController")

const route = require("express").Router()
const auth = require("../Authentication/auth")

route.get("/",auth, getDonation)
route.post("/",auth, postDonation)
route.put("/:id",auth, putDonation)
route.delete("/:id",auth, deleteDonation)

module.exports = route 