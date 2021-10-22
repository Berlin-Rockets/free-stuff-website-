const ItemModel = require('../models/itemModel');
const cloudinary = require('../utils/cloudinary')
const upload = require('../utils/multer')

// get all sorting Items 
exports.getItems = async (req, res, next) => {
  try {
    const items = await ItemModel.find({}).sort("-createdAt");
    res.json({ success: true,Items: items.length, data: items });

  } catch (err) {
    console.log(err.message);
  }
};

// post item
exports.postItem = async (req, res, next) => {

  try {
    const item = new ItemModel(req.body);
    const result = await cloudinary.uploader.upload(req.file.path)
    item.images=[...item.images,result.secure_url],
    item.cloudinary_id=  result.public_id

    await item.save();

    res.send({ success: true, data: item });
  } catch (err) {
    console.log(err.message);
  }
};

// Filter items by Category or Location
exports.filterByOne = async (req, res, next) => {
  const filterItem = req.params.filter;
  
  try {
    const filterByOneItems = await ItemModel.find({
      $or: [{ category: filterItem }, { location: filterItem }],
    }).sort("-createdAt");
    res.json({
      success: true,
      items: filterByOneItems.length,
      data: filterByOneItems,
    });
  } catch (err) {
    console.log(err.message);
    next(err);
  }
};

// Filter items by Category and Location

exports.filterItems = async (req, res, next) => {
  const secFilterItem = req.params.both;
  const filterItem = req.params.filter;
 
  try {
    const filterItems = await ItemModel.find({
      $or: [
        { $and: [{ category: filterItem }, { location: secFilterItem }] },
        { $and: [{ location: filterItem }, { category: secFilterItem }] },
      ],
    }).sort("-createdAt");
    res.json({ success: true, items: filterItems.length, data: filterItems });
  } catch (err) {
    console.log(err.message);
    next(err);
  }
};

// get Single Item
exports.getSingleItem = async (req, res, next) => {
  const id = req.params.id;
 
  try {
    const item = await ItemModel.findById(id).populate("userId");
    res.json({ success: true, data: item });
  } catch (e) {
    console.log(e);
    next(e);
  }
};

// get specific user Items
exports.userItems = async (req, res, next) => {
  const { id } = req.params;
  
  try {
    const items = await ItemModel.find({ userId: id }).sort("-createdAt");
    res.json(items);
    
  } catch (err) {
    console.log(err.message);
    next(err);
  }
};


// get sold/given Item
exports.givenItem = async (req, res, next) => {
  
  try {
    const givenItems = await ItemModel.find({ soldState: false });
    res.json({ success: true, items: givenItems.length, data: givenItems });
  } catch (err) {
    console.log(err.message);
    next(err);
  }
};

// get needed item - As a user, if I don’t find what I search, then I want to be provided with a suggestion to post my need for a specific item that I’m looking for.
exports.neededItem = async (req, res, next) => {
  
  try {
    const neededItems = await ItemModel.find({ postOrSearch: false });
    res.json({ success: true, items: neededItems.length, data: neededItems });
  } catch (err) {
    console.log(err.message);
    next(err);
  }
};

// Delete Item
exports.deleteItem = async (req, res, next) => {
  const id = req.params.id;
  try {
    await ItemModel.findByIdAndDelete(id);
    res.status(204).json({
      status: 'success',
      // data: null,
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
    next();
  }
};

// post/patch item (edit)
exports.editItem = async (req, res, next) => {
  const id = req.params.id;
  
  try {
    const item = await ItemModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(item);
  } catch (err) {
    console.log(err.message);
    next(err);
  }
};
