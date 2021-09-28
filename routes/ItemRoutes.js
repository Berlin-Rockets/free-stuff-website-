const express = require("express");
const ItemRoute = express.Router();
// const multer = require("multer");
const  auth  = require("../middleware/Auth");

const {
  getItems,
  getAllItems,
  getSingleItem,
  userItems,
  postItem,
  filterByOne,
  filterItems,
  givenItem,
  neededItem,
  editItem,
  deleteItem,
  // postItemCloudinary
} = require("../controllers/ItemController");
const upload = require('../utils/multer')

ItemRoute.get("/", getItems);
ItemRoute.get("/singleItem/:id", getSingleItem);
ItemRoute.get("/userItem/:id", userItems);
ItemRoute.post("/", upload.single("image"), postItem);
ItemRoute.get("/:filter", filterByOne);
ItemRoute.get("/filter/:filter/:both", filterItems);
ItemRoute.get("/given", givenItem);
ItemRoute.get("/needed", neededItem);
ItemRoute.patch("/:id",auth, editItem);
ItemRoute.delete("/:id",auth, deleteItem);

module.exports = ItemRoute;
