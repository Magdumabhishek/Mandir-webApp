const Leadger = require("../model/leadger")

exports.getLeadger = async (req, res) => {
    try {
        const data = await Leadger.find()
        return res.json({ errors: false, data: data })
    } catch (error) {
        return res.status(400).json({ errors: true, message: error.message })
    }
}

exports.postLeadger = async (req, res) => {
    try {
        const data = await Leadger.create(req.body)
        return res.json({ errors: false, data: data })
    } catch (error) {
        return res.status(400).json({ errors: true, message: error.message })
    }
}

exports.putLeadger = async (req, res) => {
    try {
        const data = await Leadger.findByIdAndUpdate(req.params.id, req.body, { new: true })
        return res.json({ errors: false, data: data })
    } catch (error) {
        return res.status(400).json({ errors: true, message: error.message })
    }
}

exports.deleteLeadger = async (req, res) => {
    try {
        const data = await Leadger.findByIdAndDelete(req.params.id)
        return res.json({ errors: false, data: data })
    } catch (error) {
        return res.status(400).json({ errors: true, message: error.message })
    }
}