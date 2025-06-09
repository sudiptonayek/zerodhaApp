require("dotenv").config();
const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const token = req.cookies.token;
    
  if (!token) {
    return res.status(401).json({ message: "Unauthorized: No token provided" }); // 401 is more appropriate
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: "Forbidden: Invalid token" }); // use json for consistency
    }

    req.user = decoded;
    next();
  });
};

module.exports = { verifyToken };
