const express = require('express');
const UserRoute = express.Router();
const multer = require('multer');
const {
  getAllUsers,
  postUser,
  signUp,
  getUser,
  login,
  googlelogin,
  facebooklogin,
} = require('../controllers/UserController');

let storage = multer.diskStorage({
  destination: "images/",
  filename: function (req, file, cb) {
    let picName = file.originalname.split('.')[0] + "-" + Date.now() + "." + file.mimetype.split('/')[1];
    cb(null, picName);
    req.picName = picName
  
  }
});

let upload = multer({storage: storage})

UserRoute.get('/', getAllUsers);
// UserRoute.post('/', postUser);
UserRoute.post('/register', upload.single("file"), signUp);
UserRoute.get('/:id', getUser);
UserRoute.post('/login', login);
UserRoute.post('/googlelogin', googlelogin);
UserRoute.post('/facebooklogin', facebooklogin);

module.exports = UserRoute;
