// Import necessary modules
const express = require("express");
const router = express.Router();

// Import authentication controller containing signin and register functions
const authController = require("../controllers/authController");

// Define routes for user authentication
router.route("/signin").post(authController.signin); // POST request to handle user sign-in
router.route("/register").post(authController.register); // POST request to handle user registration

module.exports = router;
