const Usermodel = require('../models/user-model');
const { v4: uuidV4 } = require('uuid');
const bcrypt = require('bcryptjs');
const nodemailer = require('nodemailer');

exports.signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    let user = await Usermodel.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "Email already registered" });
    }

    const activationCode = uuidV4();

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash("password", salt); // Corrected to use the actual password

    console.log(user);
    user = Usermodel({
      username,
      email,
      password: hashPassword,
      activationCode,
    });

    console.log("update data"+user);

    await user.save();

    const transport = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    const activationLink = `http://localhost:${process.env.PORT}/auth/activate/${activationCode}`;

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: "Please verify your email address",
        text: `Click the below link to verify your email address for Our Expense application: ${activationLink}`,
    };

    transport.sendMail(mailOptions, (err, info) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: 'Cannot send activation link' });
        } else {
            return res.status(200).json({ message: 'Activation link sent successfully' });
        }
    });


  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

exports.activate = async (req, res) => {
  try {
    const { activationCode } = req.params;
    let user = await Usermodel.findOne({ activationCode });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    user.isActivated = true;
    await user.save();

    res.status(200).json({ message: "Account activated successfully" });
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

    if (!user.isActivated) {
      return res.status(400).json({ message: "Account not yet activated. Please activate first to login" });
    }

    return res.status(200).json({ message: "Login successful", user });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Internal server error' });
  }
};
