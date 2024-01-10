// Import necessary modules and models
const User = require("../../database/model/user.model");
const jwt = require("jsonwebtoken");
const validator = require("email-validator");

// User sign-in endpoint
const signin = async (req, res) => {
  // Extract email and password from the request body
  let { email, password } = req.body;

  try {
    // Find a user in the database by their email
    let user = await User.findOne({ email });

    // If the user does not exist, return an error response
    if (!user) {
      return res.status(400).send("Email does not exist");
    }

    // Compare the entered password with the hashed password in the database
    user.comparePassword(password, (err, match) => {
      // If passwords do not match or an error occurs, return an error response
      if (!match || err) return res.status(400).send("Password does not match");

      // If authentication is successful, generate a JWT token with a 1-hour expiration
      let token = jwt.sign({ _id: user._id }, "usertokenstring", {
        expiresIn: "1h",
      });

      // Return a success response with user information and the generated token
      res.status(200).send({
        token,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        id: user._id,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
      });
    });
  } catch (error) {
    // Return an error response if an exception occurs during the sign-in process
    return res.status(400).send("Login failed");
  }
};

// User registration endpoint
const register = async (req, res) => {

  // Extract user registration information from the request body
  const { email, password, firstName, lastName } = req.body;

  try {
    // Validate user input: Check for required fields, valid email, and password length
    if (!firstName) return res.status(400).send("First Name is required");
    if (!lastName) return res.status(400).send("Last Name is required");
    if (!email) return res.status(400).send("Email is required");
    if (!validator.validate(email)) {
      return res.status(400).send("Please enter a valid email address");
    }
    if (!password || password.length < 6) {
      return res
        .status(400)
        .send("Please provide a valid password (minimum 6 characters)");
    }

    // Check if the email is already taken
    const userExist = await User.findOne({ email: email });
    if (userExist) {
      return res.status(400).send("Email is taken. Please use another email");
    }

    // Create a new user instance and save it to the database
    const user = await new User({ email, firstName, lastName, password });
    await user.save();

    // Return a success response after user registration
    return res.status(200).send("User added successfully.");
  } catch (err) {
    // Return an error response if an exception occurs during user registration
    return res.status(400).send("Error creating user");
  }
};

module.exports = {
  signin,
  register,
};
