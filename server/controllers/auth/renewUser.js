const { response } = require("express");
const generateJWT = require("../../helpers/jwt");

const renewTokenUser = async (req, res = response) => {
  const { _id, username } = req.user;

  const token = await generateJWT(_id, username);
  return res.status(200).json({
    success: true,
    message: "Renew token successfully",
    accessToken: token,
  });
};

module.exports = renewTokenUser;
