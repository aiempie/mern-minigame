const { response } = require("express");
const bcrypt = require("bcryptjs");
const User = require("../../models/Users");
const generateJWT = require("../../helpers/jwt");

const registerUser = async (req, res = response) => {
  let { username, password, email } = req.body;
  // check validate
  if (!username || !password) {
    return res.status(400).json({
      success: false,
      message: "Missing username and/or password",
    });
  }
  username = username.toUpperCase();
  try {
    // Search user
    const user = await User.findOne({ username });
    if (user) {
      return res.status(400).json({
        success: false,
        message: "Username is available",
      });
    }

    // encrypt password
    const salt = bcrypt.genSaltSync();
    const hashPass = bcrypt.hashSync(password, salt);
    const newUser = new User({ username, password: hashPass, email });
    //save user
    await newUser.save();
    // generate token with JWT
    const token = await generateJWT(newUser._id, newUser.name);
    res.json({
      success: true,
      message: "Account create successfully",
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

module.exports = registerUser;
