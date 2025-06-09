const nodemailer = require("nodemailer");
const bcrypt = require("bcrypt");
const { SignUpModel } = require("../../Model/SingUpModel");
const jwt = require("jsonwebtoken");

const forgotPasswordController = async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }

    const oldUser = await SignUpModel.findOne({ email });
    if (!oldUser) {
      return res.status(404).json({ message: "User not found" });
    }
    const secret = process.env.JWT_SECRET + oldUser.password;
    const token = jwt.sign({ email: oldUser.email, id: oldUser._id }, secret, {
      expiresIn: "5m",
    });
    const link = `${process.env.FRONTEND_URL}/${oldUser._id}/${token}`;
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "nayeksudipto58@gmail.com",
        pass: "pheuayxfmlhrtwwz",
      },
    });
    const mailOptions = {
      from: "nayeksudipto58@gmail.com",
      to: oldUser.email,
      subject: "Password Reset Link",
      text: link,
    };
    const result = await transporter.sendMail(mailOptions);
    if (result) {
      return res
        .status(200)
        .json({ message: "Check your email for reset link" });
    }
    return res.status(500).json({ message: "Error sending email" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server Error" });
  }
};

// get /api/reset-password/:id/:token
const getResetPasswordController = async (req,res)=>{
    try{
        const {id, token} = req.params;
        console.log(id, token);
        const oldUser = await SignUpModel.findOne({_id:id});
        if(!oldUser){
            return res.status(404).json({message:"User not found"});
        }
        const secret = process.env.JWT_SECRET + oldUser.password;
        const verifyToken = jwt.verify(token, secret);
        if(verifyToken){
            return res.status(200).json({message:"Token is valid"});
        }else{
            return res.status(400).json({message:"Invalid Token"});
        }
        
    }catch(err){
        console.log(err);
        res.status(500).json({message:"Server Error"});
    }
}

// post /api/reset-password/:id/:token
const PostResetPasswordController = async (req, res) => {
  const { id, token } = req.params;
  console.log("Reset Password ID:",req.params);
  const { password } = req.body;

  try {
    const user = await SignUpModel.findById(id);
    if (!user) return res.status(404).json({ message: "User not found" });

    const secret = process.env.JWT_SECRET + user.password;
    jwt.verify(token, secret);

    user.password = password;

    await user.save();

    res.json({ message: "Password reset successful!" });
  } catch (err) {
    console.error("Password reset error:", err);
    res.status(400).json({ message: "Invalid or expired token" });
  }
}; 

module.exports = {
  forgotPasswordController,
  getResetPasswordController,
  PostResetPasswordController,
};
