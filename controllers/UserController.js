const UserModel = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const jwtkey = require('../config/env').jwtKey;

exports.getAllUsers = async (req, res, next) => {
  try {
    const allUsers = await UserModel.find({});
    res.json({ users: allUsers.length, success: true, data: allUsers });
  } catch (e) {
    console.log(e);
  }
};

exports.postUser = async (req, res, next) => {
  try {
    const user = new UserModel(req.body);
    await user.save();

    res.send({ success: true, data: user });
  } catch (err) {
    console.log(err.message);
    next(err);
  }
};

// Register
exports.signUp = async (req, res, next) => {
  const {
    username,
    password,
    confirmPassword,
    contact: [{ email }],
  } = req.body;
  try {
    const user = await UserModel.findOne({ email });
    if (!user) {
      if (password === confirmPassword) {
        const hashPassword = await bcrypt.hash(password, 10);

        const userData = await new UserModel({
          username,
          contact: [{ email }],
          password: hashPassword,
        }).save();

        const token = jwt.sign(
          {
            contact: [{ email }],
            username,
          },
          jwtkey,
          { expiresIn: 2592000000 }
        );
        res.json({ success: true, token, userId: userData._id });
      } else {
        res.json({ err: 'Please confirm the password' });
      }
    } else {
      res.json({ err: email + 'This email is already registered' });
    }
  } catch (e) {
    next(e);
  }
};

// Login
exports.login = async (req, res, next) => {
  const user = await UserModel.findOne({ email: req.body.email });
  if (!user) {
    res.json({ err: 'Email is incorrect or does not exist' });
  } else {
    let check = bcrypt.compareSync(req.body.password, user.Password);
    console.log('check', check);
    console.log('body', req.body.password);
    console.log('user password', user.password);

    if (!check) {
      next({ err: 'Wrong password' }); // or use next() instead
    } else {
      const token = jwt.sign(
        {
          username: user.username,
          contact: [{ email: user.email }],
          password: user.password,
          id: user._id,
        },
        jwtKey,
        { expiresIn: 2592000000 }
      );
      res.json({ success: true, data: user, userId: user._id, token });
    }
  }
};

// get single user
exports.getUser = async (req, res, next) => {
  const id = req.params.id;
  try {
    const user = await UserModel.findById(id);
    res.json({ success: true, data: user });
  } catch (e) {
    console.log(e);
  }
};
