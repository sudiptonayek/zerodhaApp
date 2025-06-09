const { HoldingsModel } = require("../../Model/HoldingsModel");

const allHolding =async (req,res)=>{
  try {
    let allHoldings = await HoldingsModel.find({});
    res.send(allHoldings);
  }catch (err){
    console.log(err);
    res.status(500).send("Error fetching holdings data",err);
  }

}

module.exports = {allHolding};
