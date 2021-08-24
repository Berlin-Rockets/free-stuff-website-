const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
  name: {
    type: String,
    required: true,
    maxlength: 20,
    minlength: 3,
  },
  category: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  description: {
    type: String,
    maxlength: 500,
  },
  images: {
    type: Array,
    required: true,
  },
  usedState: {
    type: Boolean,
    default: true,
  },
  location: {}, // radius: need to get geolocation and publish it in form of radius instead of precise location
  pickUp: {
    type: Boolean,
    default: true,
  }, // pick-up or delivery
  soldState: {
    type: Boolean,
    default: false,
  },
  views: {
    type: Number,
    default: 0,
  },
});

const ItemModel = mongoose.model('item', itemSchema);

module.exports = ItemModel;
