const userModel = require("../models/userModel");
const bcrypt = require("bcryptjs");
const axios = require("axios");

exports.login = async (req, res) => {
  const { username, password, recaptchaToken } = req.body;

  const recaptchaSecret = "6Lf6N1AqAAAAAMwZRJIdRJxqUsk7KZ0FO8ByyL_Q";
  const recaptchaResponse = await axios.post(
    `https://www.google.com/recaptcha/api/siteverify?secret=${recaptchaSecret}&response=${recaptchaToken}`
  );

  console.log(recaptchaResponse.data);

  if (!recaptchaResponse.data.success) {
    console.log(
      "reCAPTCHA error codes:",
      recaptchaResponse.data["error-codes"]
    );
    return res.status(400).send("reCAPTCHA Gagal.");
  }

  const user = await userModel.findUser(username);
  if (user && bcrypt.compareSync(password, user.password)) {
    return res.json({ success: true, message: "LOGIN SUKSES" });
  } else {
    return res.status(400).json({ success: false, message: "LOGIN GAGAL" });
  }
};

exports.addUser = async (req, res) => {
  const { username, password } = req.body;
  await userModel.addUser(username, password);
  res.redirect("/users.html");
};

exports.updateUser = async (req, res) => {
  const { id, username, password } = req.body;
  await userModel.updateUser(id, username, password);
  res.redirect("/users.html");
};

exports.deleteUser = async (req, res) => {
  const { id } = req.params;
  await userModel.deleteUser(id);
  res.redirect("/users.html");
};

exports.getUsers = async (req, res) => {
  const users = await userModel.getUsers();
  res.json(users);
};
