const express = require("express");
const ItemRoute = express.Router();

const {
getAllItems,
postItem,
catefilterItem,
locfilterItem,
filterByOne,
filterItems,
givenItem 
} = require("../controllers/ItemController");



ItemRoute.get("/", getAllItems);
ItemRoute.get("/sort", givenItem );
ItemRoute.get("/:filter", filterByOne);
ItemRoute.get("/:filter/:both", filterItems);
// ItemRoute.get("/category/:category", catefilterItem );
// ItemRoute.get("/location/:location", locfilterItem );
ItemRoute.post("/", postItem);



module.exports = ItemRoute;