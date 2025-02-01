const Inventry = require("../model/inventry")

exports.getInventry = async (req,res) => {
    try {
        const data = await Inventry.find()
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}

exports.postInventry = async (req,res) => {
    try {
        const data = await Inventry.create(req.body)
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}

exports.putInventry = async (req,res) => {
    try {
        const data = await Inventry.findByIdAndUpdate(req.params.id,req.body,{new:true})
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
        
    }
}

exports.deleteInventry = async (req,res) => {
    try {
        const data = await Inventry.findByIdAndDelete(req.params.id)
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}