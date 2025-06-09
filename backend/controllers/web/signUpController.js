require("dotenv").config();
const {SignUpModel} = require("../../Model/SingUpModel");
const jwt = require("jsonwebtoken");
const signUpController = async (req,res)=>{
  //destructuring the request body
  const { email, username, password, confirmPassword } = req.body;

  //checking for empty fields
  if (!email || !username || !password || !confirmPassword) {
    return res.status(400).json({ message: "All fields are required" });
  }

  //checking for valid email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: "Invalid email format" });
  }

  //find existing user
  const existingUser = await SignUpModel.findOne({ email });

  // check if username already exists
  if (existingUser) {
    return res.status(409).json({ message: "User already exists" });
  }

  //check password and confirm password is same?
  if (password !== confirmPassword) {
    return res
      .status(400)
      .json({ message: "Password and Confirm Password must be same" });
  }

  // check password length
  if (password.length < 8) {
    return res
      .status(400)
      .json({ message: "Password must be at least 8 characters" });
  }

  // check username length
  if (username.length < 3 || username.length > 20) {
    return res
      .status(400)
      .json({
        message:
          "Username must be at least 3 characters and at most 20 characters",
      });
  }

  // creating new user
  try {
    let user1 = new SignUpModel({
      email: email,
      username: username,
      password: password,
      
    });

    // saving user
    const NewUser=await user1.save();

   
    res.status(200).json({ message: "registration successful"});

    res.status(201).json({
      message: "User created successfully",
      user: NewUser,
    });

    
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
}

module.exports = {signUpController};