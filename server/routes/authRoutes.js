// routes/authRoutes.js
const express = require('express');
const authController = require('../contoller/authController.js');
const router = express.Router();

router.post('/register', authController.registerUser);
router.post('/login', authController.loginUser);

module.exports = router;
