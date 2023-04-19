const { response } = require("express");
const bcrypt = require("bcryptjs");
const User = require("../../models/Users");
const generateJWT = require("../../helpers/jwt");

const loginUser = async (req, res = response) => {
  let { username, password } = req.body;

  // Check validate
  if (!username || !password) {
    return res.status(400).json({
      success: false,
      message: "Missing username and/or password",
    });
  }
  username = username.toUpperCase();
  try {
    //check for exsting user
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Incorrect username or password",
      });
    }
    //check password
    const passValidate = await bcrypt.compareSync(password, user.password);
    if (!passValidate) {
      return res.status(400).json({
        success: false,
        message: "Incorrect username or password",
      });
    }
    // generate token with JWT
    const token = await generateJWT(user._id, user.username);

    res.json({
      success: true,
      message: "Login successfully",
      accessToken: token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

module.exports = loginUser;
