 const express = require("express");
 const ItemRoute = express.Router();

 const {
 getAllItems,
 getSingleItem,
 postItem,
 filterByOne,
 filterItems,
 givenItem,
 neededItem,
 editItem,
 deleteItem
 } = require("../controllers/ItemController");



 ItemRoute.get("/", getAllItems);
 ItemRoute.get("/singleItem/:id",getSingleItem);
 ItemRoute.post("/", postItem);
 ItemRoute.get("/filter/:filter", filterByOne);
 ItemRoute.get("/filter/:filter/:both", filterItems);
 ItemRoute.get("/given", givenItem );
 ItemRoute.get("/needed", neededItem);
 ItemRoute.patch("/:id", editItem );
 ItemRoute.delete("/:id", deleteItem);




 module.exports = ItemRoute;
