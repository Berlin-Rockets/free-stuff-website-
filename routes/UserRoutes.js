const express = require("express");
const UserRoute = express.Router();

const {
getAllUsers,
postUser ,
 signUp,

} = require("../controllers/UserController");

UserRoute.get("/", getAllUsers);
UserRoute.post("/", postUser);
UserRoute.post("/register", signUp);


module.exports = UserRoute;