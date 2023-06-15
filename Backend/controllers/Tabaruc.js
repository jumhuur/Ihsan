const TabarucModel = require("../Models/Tabaruc");

// add Tabruc
const addTabruc = async (req, res) => {
  const { Name, Tabaruce, Id, Lacagta, PymentType, Lanbar } = req.body;

  try {
    const Tabaruc = await TabarucModel.AddTabruc(
      Name,
      Tabaruce,
      Id,
      Lacagta,
      PymentType,
      Lanbar
    );

    // soo celinta
    res.status(200).json(Tabaruc);
  } catch (Err) {
    res.status(400).json({ Err: Err.message });
  }
};

// get all tabaruc
const GetTabarucMashruuc = async (req, res) => {
  const Id = req.params.Id;
  try {
    const Tabarucyo = await TabarucModel.find({ Id: Id })
      .sort({ createdAt: -1 })
      .limit(7);
    res.status(200).json(Tabarucyo);
  } catch (Err) {
    console.log(Err);
  }
};

const Total = async (req, res) => {
  const Id = req.params.Id;
  try {
    const Tabarucyo = await TabarucModel.aggregate([
      { $match: { Id: Id } },
      { $group: { _id: null, Lacagta: { $sum: "$Lacagta" } } },
    ]);
    res.status(200).json(Tabarucyo);
  } catch (Err) {
    console.log(Err);
  }
};

// get count tabarucyo

const CountTabaruc = async (req, res) => {
  try {
    const CountTabaruc = await TabarucModel.find().count();
    res.status(200).json(CountTabaruc);
  } catch (Err) {
    console.log(Err);
  }
};

// get isku gaynta lacagaha oo dhan

const TotalTabaruc = async (req, res) => {
  try {
    const TotalTabaruc = await TabarucModel.aggregate([
      { $group: { _id: null, Lacagta: { $sum: "$Lacagta" } } },
    ]);

    res.status(200).json(TotalTabaruc);
  } catch (Err) {
    console.log({ Err: Err.message });
  }
};

// get Project Tabaruc
module.exports = {
  addTabruc,
  GetTabarucMashruuc,
  CountTabaruc,
  TotalTabaruc,
  Total,
};
