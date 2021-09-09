const UserModel = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const jwtkey = require('../config/env').jwtKey;
const createError = require('http-errors');

const { OAuth2Client } = require('google-auth-library');
const fetch = (...args) =>
  import('node-fetch').then(({ default: fetch }) => fetch(...args));

const client = new OAuth2Client(
  '353102265666-7892m1a66n2nim7n9alca66ctocb62bf.apps.googleusercontent.com'
);

exports.getAllUsers = async (req, res, next) => {
  try {
    const allUsers = await UserModel.find({});
    res.json({ users: allUsers.length, success: true, data: allUsers });
  } catch (e) {
    console.log(e);
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

// Register
exports.signUp = async (req, res, next) => {
  const { name, password, confirmPassword, email, phone } = req.body;
  try {
    const user = await UserModel.findOne({ email });
    if (!user) {
      if (password === confirmPassword) {
        const hashPassword = await bcrypt.hash(password, 10);

        const userData = await new UserModel({
          name,
          email,
          password: hashPassword,
          phone,
        }).save();

        const token = jwt.sign(
          {
            email,
            name,
          },
          jwtkey,
          { expiresIn: 2592000000 }
        );
        res.json({ success: true, token, userId: userData._id });
      } else {
        res.json({ err: 'Please confirm the password' });
      }
    } else {
      res.json({ err: email + ' ' + 'This email is already registered' });
    }
  } catch (e) {
    next(e);
  }
};

// Login
exports.login = async (req, res, next) => {
  console.log(req.body);
  const user = await UserModel.findOne({ email: req.body.email });
  // const user = await UserModel.findOne({contact:[{email:req.body.email}] });
  console.log('user', user);
  if (!user) {
    res.json({ error: 'Email is incorrect or does not exist' });
    // next(new createError.NotFound('Email is incorrect or does not exist'))
  } else {
    let check = bcrypt.compareSync(req.body.password, user.password);
    console.log('check', check);
    console.log('body', req.body.password);
    console.log('user password', user.password);

    if (!check) {
      next(new createError.NotFound('Wrong password')); // or use next() instead
    } else {
      const token = jwt.sign(
        {
          name: user.name,
          email: user.email,
          password: user.password,
          id: user._id,
        },
        jwtkey,
        { expiresIn: 2592000000 }
      );
      res.json({ success: true, data: user, userId: user._id, token });
    }
  }
};

exports.googlelogin = (req, res, next) => {
  const { tokenId } = req.body;

  client
    .verifyIdToken({
      idToken: tokenId,
      audience:
        '353102265666-7892m1a66n2nim7n9alca66ctocb62bf.apps.googleusercontent.com',
    })
    .then((response) => {
      const { email_verified, name, email } = response.payload;
      // console.log(response.payload);
      if (email_verified) {
        UserModel.findOne({ email }).exec((err, user) => {
          if (err) {
            return res.json({ error: 'something went wrong ...' });
          } else {
            if (user) {
              const token = jwt.sign(
                {
                  id: user._id,
                },
                jwtkey,
                { expiresIn: 2592000000 }
              );
              const { name, email, password } = user;
              res.json({ success: true, data: user, userId: user._id, token });
            } else {
              let userPassword = email + '123';

              let password = bcrypt.hashSync(userPassword, 10);
              // let phone = '12345678'
              let newUser = new UserModel({
                name,
                email,
                password,
              });
              newUser.save();

              console.log('new user', newUser);
              const token = jwt.sign(
                {
                  id: newUser._id,
                },
                jwtkey,
                { expiresIn: 2592000000 }
              );
              res.json({
                success: true,
                data: newUser,
                userId: newUser._id,
                token,
              });
              next();
            }
          }
        });
      }
    });
};

exports.facebooklogin = (req, res, next) => {
  const { accessToken, userID } = req.body;

  let urlGraphFacebook = `https://graph.facebook.com/v2.11/${userID}/?fields=id,name,email&access_token=${accessToken}`;
  fetch(urlGraphFacebook, {
    method: 'GET',
  })
    .then((response) => response.json())
    .then((response) => {
      console.log('responseeeee facebook', response);
      const { email, name } = response;
      UserModel.findOne({ email }).exec((err, user) => {
        if (err) {
          return response.json({
            error: 'something went wrong .....',
          });
        } else {
          if (user) {
            const token = jwt.sign(
              {
                id: user._id,
              },
              jwtkey,
              { expiresIn: 2592000000 }
            );
            const { name, email, password } = user;
            res.json({ success: true, data: user, userId: user._id, token });
          } else {
            let userPassword = email + '123';

            let password = bcrypt.hashSync(userPassword, 10);
            // let phone = '12345678'
            let newUser = new UserModel({
              name,
              email,
              password,
            });
            newUser.save();

            console.log('new user', newUser);
            const token = jwt.sign(
              {
                id: newUser._id,
              },
              jwtkey,
              { expiresIn: 2592000000 }
            );
            res.json({
              success: true,
              data: newUser,
              userId: newUser._id,
              token,
            });
            next();
          }
        }
      });
    });
};
