const mongoose = require('mongoose')

const busBookingSchema = mongoose.Schema({
    passengerName:{
        type: String,
        require: true
    },
    sit_no:{
        type: Number,
        require:true
    },
    Status:{
        type: String,
        require: true
    },
    craetedAt:{
        type: Date,
        default: Date.now()
    }
})
module.exports = mongoose.model('Busbooking',busBookingSchema)