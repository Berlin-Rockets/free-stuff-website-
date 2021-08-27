const express = require('express');
const ItemRoute = express.Router();

const {
  getAllItems,
  getItem,
  postItem,
  editItem,
  deleteItem,
  fItemByCategory,
  fItemByLocation,
} = require('../controllers/ItemController');

ItemRoute.get('/', getAllItems);
ItemRoute.get('/:id', getItem);
ItemRoute.patch('/:id', editItem);
ItemRoute.delete('/:id', deleteItem);
ItemRoute.get('/:filter', fItemByCategory);
ItemRoute.get('/location/:city', fItemByLocation);
ItemRoute.post('/', postItem);

module.exports = ItemRoute;
