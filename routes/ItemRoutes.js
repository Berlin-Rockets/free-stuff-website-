const express = require("express");
const ItemRoute = express.Router();

const {
getAllItems,
postItem,
} = require("../controllers/ItemController");



ItemRoute.get("/", getAllItems);
ItemRoute.post("/", postItem);



module.exports = ItemRoute;