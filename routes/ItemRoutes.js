const express = require("express");
const ItemRoute = express.Router();
const multer = require("multer");

const {
  getItems,
  getAllItems,
  getSingleItem,
  postItem,
  filterByOne,
  filterItems,
  givenItem,
  neededItem,
  editItem,
  deleteItem,
} = require("../controllers/ItemController");

let storage = multer.diskStorage({
  destination: "images/",
  filename: function (req, file, cb) {
    let picName =
      file.originalname.split(".")[0] +
      "-" +
      Date.now() +
      "." +
      file.mimetype.split("/")[1];
    cb(null, picName);
    req.picName = picName;
  },
});

let upload = multer({ storage: storage });

ItemRoute.get("/", getItems);
// ItemRoute.get("/", getAllItems);
ItemRoute.get("/singleItem/:id", getSingleItem);
ItemRoute.post("/", upload.array("file"), postItem);
ItemRoute.get("/:filter", filterByOne);
ItemRoute.get("/filter/:filter/:both", filterItems);
ItemRoute.get("/given", givenItem);
ItemRoute.get("/needed", neededItem);
ItemRoute.patch("/:id", editItem);
ItemRoute.delete("/:id", deleteItem);

module.exports = ItemRoute;
