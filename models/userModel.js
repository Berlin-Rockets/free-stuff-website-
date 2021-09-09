const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: [true, 'You must provide a username'],
    unique: [true, 'This username is already taken'],
    maxlength: [10, 'A username must have less than or 10 characters'],
    minlength: [3, 'A username must have more than or 3 characters'],
    // validate in Front-End
  },

  email: {
    type: String,
    required: [true, 'You must provide an email'],
    lowercase: true,
    unique: true,
    maxlength: [25, 'An email must have less than or 25 characters'],
    // validate in Front-End
  },
  phone: {
    type: Number,
    required: true,
  },

  password: {
    type: String,
    required: [true, 'You must provide a password'],
    // move to the form in Front-End
    // maxlength: [20, 'A password must have less than or 20 characters'],
  },
  userId: {
    // TBD
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  profilePicture: {
    type: String,
    default:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Crystal_personal.svg/2000px-Crystal_personal.svg.png',
  },
});

const UserModel = mongoose.model('user', userSchema);
module.exports = UserModel;
