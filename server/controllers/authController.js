const User = require("../../database/model/user.model");
const jwt = require("jsonwebtoken");
const validator = require("email-validator");

const signin = async (req, res) => {
  let { email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (!user) {
        return res.status(400).send('email does not exist');
    }

    user.comparePassword(password, (err, match) => {
        if (!match || err ) return res.status(400).send('password does not match');
        let token = jwt.sign({ _id: user._id }, 'usertokenstring', { expiresIn: '1h'});
        res.status(200).send({
            token,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            id: user._id,
            createdAt: user.createdAt,
            updatedAt: user.updatedAt
    })
    })
  } catch (error) {
    return res.status(400).send('Login failed');
  }
};

const register = async (req, res) => {
  console.log(req.body, 'req');
  const { email, password, firstName, lastName } = req.body;
  try {
    if (!firstName) return res.status(400).send("First Name is required");
    
    if (!lastName) return res.status(400).send("Last Name is required");

    if (!email) return res.status(400).send("Email is required");

    if (!validator.validate(email)) {
      return res.status(400).send("Please enter a valid email address");
    }

    if (!password || password.length < 6) {
      return res.status(400).send("Please valid password");
    }

    const userExist = await User.findOne({ email: email });
    if (userExist) {
      return res.status(400).send("Email is taken. Please use another email");
    }
    const user = await new User({ email, firstName, lastName, password });
    await user.save();
    return res.status(200).send('User added successfully.')
  } catch (err) {
    return res, statusbar(400).send("Error creating user");
  }
};

module.exports = {
  signin,
  register,
}