const express = require('express');
const UserRoute = express.Router();

const {
  getAllUsers,
  postUser,
  signUp,
  getUser,
  login,
  googlelogin,
  facebooklogin,
} = require('../controllers/UserController');

UserRoute.get('/', getAllUsers);
// UserRoute.post('/', postUser);
UserRoute.post('/register', signUp);
UserRoute.get('/:id', getUser);
UserRoute.post('/login', login);
UserRoute.post('/googlelogin', googlelogin);
UserRoute.post('/facebooklogin', facebooklogin);

module.exports = UserRoute;
