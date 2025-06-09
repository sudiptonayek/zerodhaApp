const { SignUpSchema } =require('../Schema/SingUpSchema'); 
 const { model } = require("mongoose");


 const SignUpModel = model("SignUp", SignUpSchema);
 module.exports = {SignUpModel};