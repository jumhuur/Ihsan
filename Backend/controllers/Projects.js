const mongoose = require("mongoose");
const ProjectsModule = require("../Models/Projects");

const addProjects = async (req, res) => {
  const { Name, Hadaf, Macluumaad, Tabaruc, Qayb, Sawir, Muuqaal } = req.body;
  try {
    const Projects = await ProjectsModule.Addpro(
      Name,
      Hadaf,
      Macluumaad,
      Tabaruc,
      Qayb,
      Sawir,
      Muuqaal
    );

    // soo celinta
    res.status(200).json(Projects);
  } catch (error) {
    console.log(error);
  }

  //res.status(200).json({Msg: "Sax WEEYAAN"})
};

const GetCaafimaad = async (req, res) => {
  try {
    const Caafimaad = await ProjectsModule.find({ Qayb: "Caafimaad" });
    res.status(200).json(Caafimaad);
  } catch (error) {
    res.status(400).json({ Error: Error.message });
  }

  //res.status(200).json({Msg: "Sax WEEYAAN"})
};

const GetWaxbarasho = async (req, res) => {
  try {
    const Caafimaad = await ProjectsModule.find({ Qayb: "Waxbarasho" }).sort({
      createdAt: -1,
    });
    res.status(200).json(Caafimaad);
  } catch (error) {
    res.status(400).json({ Error: Error.message });
  }

  //res.status(200).json({Msg: "Sax WEEYAAN"})
};

const GetCunto = async (req, res) => {
  try {
    const Caafimaad = await ProjectsModule.find({ Qayb: "Diini" }).sort({
      createdAt: -1,
    });
    res.status(200).json(Caafimaad);
  } catch (error) {
    res.status(400).json({ Error: Error.message });
  }

  //res.status(200).json({Msg: "Sax WEEYAAN"})
};

const GetHoy = async (req, res) => {
  try {
    const Caafimaad = await ProjectsModule.find({ Qayb: "Taageerid" }).sort({
      createdAt: -1,
    });
    res.status(200).json(Caafimaad);
  } catch (error) {
    res.status(400).json({ Error: Error.message });
  }

  //res.status(200).json({Msg: "Sax WEEYAAN"})
};

const GetDaryeel = async (req, res) => {
  try {
    const Caafimaad = await ProjectsModule.find({ Qayb: "Daryeel" }).sort({
      createdAt: -1,
    });
    res.status(200).json(Caafimaad);
  } catch (error) {
    res.status(400).json({ Error: Error.message });
  }

  //res.status(200).json({Msg: "Sax WEEYAAN"})
};

const UpdateOneProject = async (req, res) => {
  const Id = req.params.Id;
  const { Tabaruc } = req.body;
  try {
    if (mongoose.isValidObjectId(Id)) {
      const Update = await ProjectsModule.findOneAndUpdate(
        { _id: Id },
        { Tabaruc }
      );
      res.status(200).json(Update);
    } else {
      res.status(400).json({ Msg: "Update is Not Complited" });
    }
  } catch (Err) {
    res.status(400).json({ Err: Err.message });
  }
};

const GetOneProject = async (req, res) => {
  const Id = req.params.Id;
  try {
    const Pro = await ProjectsModule.findById(Id);
    res.status(200).json(Pro);
  } catch (Err) {
    res.status(400).json({ Err: Err.message });
  }

  //res.status(200).json({Msg:`Good Id is ${Id}`})
};

module.exports = {
  addProjects,
  GetCaafimaad,
  GetWaxbarasho,
  GetCunto,
  GetHoy,
  GetDaryeel,
  UpdateOneProject,
  GetOneProject,
};
