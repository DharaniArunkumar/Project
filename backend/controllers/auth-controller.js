const Usermodel = require('../models/user-model');
const { v4: uuidV4 } = require('uuid');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')

exports.signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    let user = await Usermodel.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "Email already registered" });
    }


    const hashPassword = await bcrypt.hash(password, 10);

    const newUser = await Usermodel.create({
      ...req.body,
      password: hashPassword
    })

    const token = jwt.sign({ _id: newUser._id }, "secretkey123", { expiresIn: "1d" })

    res.status(200).json({
      status: "success",
      message: "User register",
      token,
      user: {
        _id: newUser._id,
        name: newUser.name,
        email: newUser.email
      }
    })


  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Internal server error' });
  }
};


exports.signin = async (req, res) => {
  try {
    const { email, password } = req.body;
    let user = await Usermodel.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "Email not found" });
    }

    const isMatching = await bcrypt.compare(password, user.password);
    if (!isMatching) {
      return res.status(400).json({ message: "Incorrect password" });
    }

    const token = jwt.sign({ _id: user._id }, "secretkey123", { expiresIn: "1d" })

    res.status(200).json({
      status: "success",
      message: "User login",
      token,
      user: {
        _id: user._id,
        name: user.name,
        email: user.email
      }
    })

  } catch (err) {
    return res.status(500).json({ message: 'Internal server error' });

  }
}