const express = require("express");
const ItemRoute = express.Router();

const {
getAllItems,
postItem,
fItemByCategory
} = require("../controllers/ItemController");



ItemRoute.get("/", getAllItems);
ItemRoute.get("/category", fItemByCategory);
ItemRoute.post("/", postItem);



module.exports = ItemRoute;