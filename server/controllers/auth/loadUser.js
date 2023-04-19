const { response } = require("express");

const loadUser = async (req, res = response) => {
  try {
    res.json({ success: true, user: req.user });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

module.exports = loadUser;
