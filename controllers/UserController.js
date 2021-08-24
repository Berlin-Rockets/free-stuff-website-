const UserModel = require("../model/UserSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const jwtkey = require("../config/env").jwtKey;

exports.getAllUsers = async (res, req, next) => {
  try {
    const allUsers = await UserModel.find({});
    res.json({ success: true, data: allUsers });
  } catch (e) {
    console.log(e);
  }
};

//Register
exports.signUp = async (res, req, next) => {
  const { username, password, confirmPassword, email } = req.body;
  try {
    const user = await UserModel.findOne({ email });
    if (!user) {
      if (password === confirmPassword) {
        const hashPassword = await bcrypt.hash(password, 10);

        new UserModel({
          username,
          email,
          password: hashPassword,
        }).save((err, userData) => {
          if (err) console.log(err);
          const token = jwt.sign(
            {
              email,
              username,
            },
            jwtkey,
            { expiresIn: 2592000000 }
          );
          res.json({ token, userId: userData._id });
        });
      } else {
        res.json({ err: "Please confirm the password" });
      }
    } else {
      res.json({ err: email + "This email is already registered" });
    }
  } catch (e) {
    console.log(e);
  }
};
