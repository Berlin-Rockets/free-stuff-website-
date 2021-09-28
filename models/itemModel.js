const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
  postOrSearch: {
    type: Boolean,
    default: true, // by default, user posts an item he wants to give away. If false, user searches an item
  },
  name: {
    type: String,
    required: true,
    maxlength: 20,
    minlength: 2,
  },
  category: {
    type: String,
    required: true,
  },
  createdAt: {
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
  cloudinary_id:{
   type: String 
  },
  usedState: {
    type: Boolean,
    default: true,
  },
  location: {
    type:String,
    require:true
  }, // radius: need to get geolocation and publish it in form of radius instead of precise location


  views: {
    type: Number,
    default: 0,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'user',
  },
});

const ItemModel = mongoose.model('item', itemSchema);

module.exports = ItemModel;
