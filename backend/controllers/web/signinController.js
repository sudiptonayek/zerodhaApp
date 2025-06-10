require("dotenv").config();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { SignUpModel } = require("../../Model/SingUpModel");

const SigninController = async (req, res) => {
  try {
    // Destructure the request body
    const { email, password } = req.body;
    console.log(req.body);

    // Input validation
    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }
    
    // Find the user
    const user = await SignUpModel.findOne({ email }).select("+password");;
    console.log(user);


    // Check if user exists
    if (!user) {
      return res
        .status(400)
        .json({ message: "User not found, please sign up" });
    }

    // Check password 
    const isMatch = await bcrypt.compare(password, user.password);
    console.log(isMatch);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Create token
    const token = jwt.sign({id: user._id,email:user.email}, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
   
    // Set cookie
    res.cookie("token", token, {
      httpOnly: true,
      
      secure: true, 
      sameSite: "none", // Use 'none' for cross-site cookies
      maxAge:  60 * 60 * 1000, // 1 hour
      domain:".onrender.com" 
    });

    // Respond with token
    res.status(200).json({ message: "Login successful", token:token });

  } catch (err) {
    console.log(err);
    res.status(500).send("Server error");
  }
};

module.exports = { SigninController };
