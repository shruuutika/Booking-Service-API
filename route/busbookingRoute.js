const {getbus,postbus,putbus,deletebus} = require('../controller/busbookingController')
const auth = require('../middleware/auth')

const route = require('express').Router()

route.get('/',getbus)
route.post('/',auth,postbus)
route.put('/:id',putbus)
route.delete('/:id',deletebus)

module.exports = route
