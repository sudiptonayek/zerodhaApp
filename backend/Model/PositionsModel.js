 const {model} = require('mongoose');
 const {PositionSchema} = require('../Schema/PositionsSchema');

 const PositionsModel = model('Position', PositionSchema);

 module.exports = {PositionsModel};