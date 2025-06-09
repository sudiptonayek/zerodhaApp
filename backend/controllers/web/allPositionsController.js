const { PositionsModel } = require("../../Model/PositionsModel");

const allpositionsController = async (req, res) => {
  try {
    let allPositions = await PositionsModel.find({});
    res.send(allPositions);
  } catch (err) {
    console.log(err);
    res.status(500).send("Error fetching positions  data");
  }
};

module.exports = { allpositionsController };