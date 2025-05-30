const express = require("express");
const router = express.Router();
const { signup } = require("../controllers/authController");

const { sendOTP, verifyOTP } = require('../controllers/authController');

router.post('/send-otp', sendOTP);
router.post('/verify-otp', verifyOTP);
router.post("/signup", signup);
module.exports = router;
