const ProjectsModule = require("../Models/Projects")


const addProjects = async(req,res) => {
    const {Name, Hadaf , Tabaruc,  Qayb , Muuqaal} = req.body
    try {

        const Projects = await ProjectsModule.Addpro(Name, Hadaf,Tabaruc,Qayb,Muuqaal)

        // soo celinta 
        res.status(200).json(Projects)
        
    }catch (error) {
        console.log(error)
    }

    //res.status(200).json({Msg: "Sax WEEYAAN"})
}


const GetCaafimaad = async(req,res) => {

    try {
        const Caafimaad = await ProjectsModule.find({Qayb:"Caafimaad"})
        res.status(200).json(Caafimaad)

    } catch (error) {
        res.status(400).json({Error: Error.message})
    }

   //res.status(200).json({Msg: "Sax WEEYAAN"})

}

const GetWaxbarasho = async(req,res) => {

    try {
        const Caafimaad = await ProjectsModule.find({Qayb:"Waxbarasho"}).sort({createdAt: -1})
        res.status(200).json(Caafimaad)

    } catch (error) {
        res.status(400).json({Error: Error.message})
    }

   //res.status(200).json({Msg: "Sax WEEYAAN"})

}

const GetCunto = async(req,res) => {

    try {
        const Caafimaad = await ProjectsModule.find({Qayb:"Cunto"}).sort({createdAt: -1})
        res.status(200).json(Caafimaad)

    } catch (error) {
        res.status(400).json({Error: Error.message})
    }

   //res.status(200).json({Msg: "Sax WEEYAAN"})

}

const GetHoy = async(req,res) => {

    try {
        const Caafimaad = await ProjectsModule.find({Qayb:"Hoy"}).sort({createdAt: -1})
        res.status(200).json(Caafimaad)

    } catch (error) {
        res.status(400).json({Error: Error.message})
    }

   //res.status(200).json({Msg: "Sax WEEYAAN"})

}

const GetDaryeel = async(req,res) => {

    try {
        const Caafimaad = await ProjectsModule.find({Qayb:"Daryeel"}).sort({createdAt: -1})
        res.status(200).json(Caafimaad)

    } catch (error) {
        res.status(400).json({Error: Error.message})
    }

   //res.status(200).json({Msg: "Sax WEEYAAN"})

}


module.exports = {
    addProjects,
    GetCaafimaad,
    GetWaxbarasho,
    GetCunto,
    GetHoy,
    GetDaryeel,
}