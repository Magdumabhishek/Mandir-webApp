const mongoose = require("mongoose")
const express = require("express")
const ExpenseRoute = require("./route/expenseRoute")
const InventryRoute = require("./route/InventryRoute")
const DonationRoute = require("./route/donateRoute")
const userRoute = require("./route/userRoute")
const LeadgerRoute = require("./route/leadgerRoute")
const cors = require("cors")

require("dotenv/config")

const app = express()

app.use(express.json())
app.use(cors())

app.get("/",(req,res)=>{
    res.send("Home")
})

app.use("/api/expense",ExpenseRoute)
app.use("/api/inventry",InventryRoute)
app.use("/api/user",userRoute)
app.use("/api/leadger",LeadgerRoute)
app.use("/api/donation",DonationRoute)

app.listen(process.env.PORT)

async function db() {
    try {
        const res = await mongoose.connect(process.env.DB)
        const data = await res.default
        console.log(data.STATES.connected);
    } catch (error) {
        console.log(error.message);
    }
}
db()