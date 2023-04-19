const jwt = require("jsonwebtoken");

const generateJWT = (id, username) => {
  return new Promise((resolve, reject) => {
    const payload = { userId: id, username };

    jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "1w" }, (e, token) => {
      if (e) {
        reject(new Error("Error generating token"));
      }
      resolve(token);
    });
  });
};

module.exports = generateJWT;
