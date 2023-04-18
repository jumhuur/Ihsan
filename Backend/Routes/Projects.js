const express = require("express")
const ProjectRouter = express.Router()
const {addProjects, GetCaafimaad, GetWaxbarasho, GetCunto, GetHoy, GetDaryeel , UpdateOneProject} = require("../controllers/Projects")



// get part Projects 
ProjectRouter.get("/Caafimaad", GetCaafimaad)
ProjectRouter.get("/Waxbarasho", GetWaxbarasho)
ProjectRouter.get("/Cunto", GetCunto)
ProjectRouter.get("/Hoy", GetHoy)
ProjectRouter.get("/Daryeel", GetDaryeel)



// add projec

ProjectRouter.post("/add",addProjects)


// update Project

ProjectRouter.patch("/Update/:Id", UpdateOneProject)




module.exports = ProjectRouter





