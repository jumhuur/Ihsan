const express = require("express")
const TabarucRoutes = express.Router()
const {addTabruc,GetTabarucMashruuc, CountTabaruc} = require("../controllers/Tabaruc")

// add Tabaruc Router

TabarucRoutes.post("/addTabaruc", addTabruc)


// get tabaruc Mashruuc

TabarucRoutes.get("/GetTabarucyo/:Id", GetTabarucMashruuc)

// get count tabaruc 

TabarucRoutes.get("/countTabaruc", CountTabaruc)


module.exports = TabarucRoutes