const jwt = require("jsonwebtoken");

const User = require("../models/Users");

const verifyToken = (req, res, next) => {
  const authHeader = req.header("Authorization");
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({
      success: false,
      message: "AccessToken not found",
    });
  }
  try {
    const checkToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    User.findOne({ _id: checkToken.userId })
      .select("-password")
      .then((data) => {
        if (data) {
          req.user = data;
          next();
        } else {
          return res.status(400).json({
            success: false,
            message: "AccessToken is wrong",
          });
        }
      })
      .catch((error) => {
        console.log(error);
        res.status(500).json({
          success: false,
          message: "AccessToken is wrong",
        });
      });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

module.exports = verifyToken;
