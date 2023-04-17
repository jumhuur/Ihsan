const express = require("express")
const UserRoutes = express.Router()
const {Login, Register}  = require("../controllers/Users")


// Login 
UserRoutes.post("/Login", Login)

// sing up 

UserRoutes.post('/Register',Register)




module.exports = UserRoutes
