const express = require("express")
const TabarucRoutes = express.Router()
const {addTabruc,GetTabarucMashruuc, CountTabaruc, TotalTabaruc, Total} = require("../controllers/Tabaruc")

// add Tabaruc Router

TabarucRoutes.post("/addTabaruc", addTabruc)


// get tabaruc Mashruuc

TabarucRoutes.get("/GetTabarucyo/:Id", GetTabarucMashruuc)

TabarucRoutes.get("/GetTotal/:Id", Total)

// get count tabaruc 

TabarucRoutes.get("/countTabaruc", CountTabaruc)


// get total 

TabarucRoutes.get("/Total", TotalTabaruc)


module.exports = TabarucRoutes