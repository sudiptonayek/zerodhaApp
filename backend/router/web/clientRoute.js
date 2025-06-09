const express=require('express');
const route= express.Router();
const jwt = require('jsonwebtoken');

const { signUpController } = require('../../controllers/web/signUpController');
const { SigninController } = require('../../controllers/web/signinController');
const { allHolding } = require('../../controllers/web/allHolding');
const { allpositionsController } = require('../../controllers/web/allPositionsController');
const {verifyToken} = require('../../middleware/authMiddleware');
const { verifyController } = require('../../controllers/web/verifyController');
const { logoutController } = require('../../controllers/web/logoutController');
const { forgotPasswordController, getResetPasswordController, PostResetPasswordController } = require('../../controllers/web/Passsword.controller');
const { profileController } = require('../../controllers/web/profile.controller');
  //Sign Up Route ----------------------------------------------------------

  route.post("/signup", signUpController);


//Sign In Route ----------------------------------------------------------
route.post("/signin", SigninController);

//forget Password Route ----------------------------------------------------------
route.post("/forget-password", forgotPasswordController);

route.get("/reset-password/:id/:token", getResetPasswordController);

// POST /api/reset-password/:id/:token

route.post("/reset-password/:id/:token", PostResetPasswordController);


  //profile Route ----------------------------------------------------------
  route.get("/profile", verifyToken, profileController);

//Holding Route ----------------------------------------------------------
route.get("/allHoldings",allHolding);

//Positions Route ----------------------------------------------------------
route.get("/allPositions",allpositionsController);

route.get("/verify", verifyToken, verifyController);

route.post("/logout", logoutController);


module.exports=route;