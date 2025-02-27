const users = require("../models/usersSchema");
const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");

exports.signup = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: "Please fill all the fields" });
  }
  const userExist = await users.findOne({ email: req.body.email });
  if (userExist) {
    return res.status(400).json({ message: "User already exist" });
  }
  if (password.length < 8) {
    return res
      .status(400)
      .json({ message: "Password should be atleast 8 characters" });
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new users({
    name,
    email,
    password: hashedPassword,
  });
  try {
    await user.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await users.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    res.status(200).json({ message: "User logged in successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
