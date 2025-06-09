 
 const {model}= require('mongoose');

 // Holdings Schema
 const { HoldingsSchema } = require('../Schema/HoldingsSchema');
 const  HoldingsModel = model('Holdings', HoldingsSchema);

 module.exports = {HoldingsModel};