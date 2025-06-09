

const mongoose = require('mongoose');
const {Schema}= mongoose;


const OrdersSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  qty:{
    type: Number,
    required: true,
  },
  mode: {
    type: String,
    required: true,
  },
});

module.exports = {OrdersSchema};