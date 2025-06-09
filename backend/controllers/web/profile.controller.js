
const {SignUpModel} = require("../../Model/SingUpModel");

const profileController = async (req, res) => {
    console.log("Profile route accessed by user:", req.user);
    const { id, email  } = req.user;
    if (!id || !email) {
      return res.status(400).json({ message: "User data is incomplete" });
    }
    const user = await SignUpModel.findById(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const { username } = user;
     res.json({ username, email, id });
  };

  module.exports = {
    profileController
  };