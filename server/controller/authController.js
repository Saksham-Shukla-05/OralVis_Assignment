const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const register = async (req, res) => {
  try {
    res.send("register up");
  } catch (error) {}
};

const login = async (req, res) => {
  try {
    res.send("login up");
  } catch (error) {}
};

const logout = async (req, res) => {
  try {
    res.send("logout up");
  } catch (error) {}
};

module.exports = { login, register, logout };
