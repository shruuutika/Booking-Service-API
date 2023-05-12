const Busbooking = require('../models/busBooking')

exports.getbus = async (req,res)=>{
    try {
        const data = await Busbooking.find()
        return res.json({errors:false,data:data})
    } catch (error) {
      return res.status(400).json({errors:true,message:error.message})  
    }
}

exports.postbus = async (req,res)=>{
    try {
        const data = await Busbooking.create(req.body)
        return res.json({errors:false,data:data})
    } catch (error) {
      return res.status(400).json({errors:true,message:error.message})  
    }
}


exports.putbus = async (req,res)=>{
    try {
        const data = await Busbooking.findByIdAndUpdate(req.params.id,req.body,{new:true})
        return res.json({errors:false,data:data})
    } catch (error) {
      return res.status(400).json({errors:true,message:error.message})  
    }
}

exports.deletebus = async (req,res)=>{
    try {
        const data = await Busbooking.findByIdAndDelete(req.params.id)
        return res.json({errors:false,data:data})
    } catch (error) {
      return res.status(400).json({errors:true,message:error.message})  
    }
}