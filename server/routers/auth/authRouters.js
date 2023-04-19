const express = require("express");
const router = express.Router();
const verifyToken = require("../../middlewares/checkToken");
const loadUser = require("../../controllers/auth/loadUser");
const loginUser = require("../../controllers/auth/loginUser");
const renewUser = require("../../controllers/auth/renewUser");
const registerUser = require("../../controllers/auth/registerUser");

router.get("/", verifyToken, loadUser);
router.post("/login", loginUser);
router.get("/renew", verifyToken, renewUser);
router.post("/register", registerUser);

module.exports = router;
