
const mongoose = require('mongoose');
const { Schema } = mongoose;


const HoldingsSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  qty: {
    type: Number,
    required: true,
  },
  avg: {
    type: Number,
    required: true,
  },
  price:{
    type: Number,
    required: true,
  },
  
  net:{
    type: String,
    required: true,
  },
  day: {
    type: String,
    required: true,
  },
});

module.exports = {HoldingsSchema}