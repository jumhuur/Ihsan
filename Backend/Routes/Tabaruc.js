const express = require("express")
const TabarucRoutes = express.Router()
const {addTabruc,GetTabarucMashruuc} = require("../controllers/Tabaruc")

// add Tabaruc Router

TabarucRoutes.post("/addTabaruc", addTabruc)


// get tabaruc Mashruuc

TabarucRoutes.get("/GetTabarucyo/:Id", GetTabarucMashruuc)



module.exports = TabarucRoutes