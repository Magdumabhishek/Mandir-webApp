const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const User = require("../model/user")

exports.getUser = async (req, res) => {
    try {
        const data = await User.find()
        return res.json({ errors: true, data: data })
    } catch (error) {
        return res.status(400).json({ errors: false, message: error.message })
    }
}

exports.putUser = async (req, res) => {
    try {
        const data = await User.findByIdAndUpdate(req.params.id, req.body, { new: true })
        return res.json({ errors: false, data: data,message:"Changes saved successfully" })
    } catch (error) {
        return res.status(400).json({ errors: true, message: error.message })
    }
}

exports.deleteUser = async (req, res) => {
    try {
        const data = await User.findByIdAndDelete(req.params.id)
        return res.json({ errors: false, data: data ,message:"user deleted successfully"})
    } catch (error) {
        return res.status(400).json({ errors: true, message: error.message })
    }
}

exports.Register = async (req, res) => {
    try {
        const userExist = await User.findOne({ email: req.body.email })
        if (userExist) return res.status(400).json({ errors: true, message: "user Already exits" })
        req.body.password = await bcrypt.hash(req.body.password, 10)

        const data = await User.create(req.body)
        return res.json({ error: false, data: data })
    } catch (error) {
        console.log(error.message);
    }
}

exports.login = async (req, res) => {
    try {
        const userExists = await User.findOne({ email: req.body.email })
        if (!userExists) return res.json({ error: true, message: "invalid username or password" })
        const comparePassword = await bcrypt.compare(req.body.password, userExists.password)

        if (!comparePassword) return res.json({ errors: true, message: "invalid username or password" })
        const token = await jwt.sign({ _id: userExists._id }, process.env.SEC)

        return res.json({ error: false, data: userExists, token: token })
    } catch (error) {
        return res.status(400).json({ error: true, message: error.message })
    }
}