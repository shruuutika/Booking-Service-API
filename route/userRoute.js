const {register,login,putuser,deleteuser,getuser} = require('../controller/userController')

const route = require('express').Router()

route.post('/',register)
route.post('/login',login)
route.put('/:id',putuser)
route.delete('/:id',deleteuser)
route.get('/',getuser)

module.exports = route