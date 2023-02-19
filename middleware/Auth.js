const Users = require("../models/userModel");
const createError = require("http-errors");
const jwt = require("jsonwebtoken");
const jwtKey = require("../config/env").jwtKey;

const auth = async (req, res, next) => {
  const token = req.header("Authorization");
  const decoded = jwt.verify(token, jwtKey);

  try {
    if (decoded) {
      console.log('decoded id is ',decoded.id);
      const user = await Users.findById(decoded.id);
      if (!user) throw new createError.NotFound('Invalid token');
      req.user = user;
      req.token = token;
    } else {
      throw new createError.NotFound();
    }
  } catch (e) {
    next(e);
  }

  // console.log("AUTH ==>", token);
  // console.log("decoded ==>", decoded);

  next();
};

module.exports = auth;