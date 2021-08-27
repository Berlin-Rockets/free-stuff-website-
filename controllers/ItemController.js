const ItemModel = require('../models/itemModel');

exports.getAllItems = async (req, res, next) => {
  try {
    const allItems = await ItemModel.find();
    res.json({ success: true, results: allItems.length, data: allItems });
  } catch (e) {
    console.log(e);
  }
};

// get Single Item
exports.getItem = async (req, res, next) => {
  const id = req.params.id;
  console.log(id);
  try {
    const item = await ItemModel.findById(id);
    res.json({ success: true, data: item });
  } catch (e) {
    console.log(e);
    next(e);
  }
};

// post item
exports.postItem = async (req, res, next) => {
  try {
    const item = new ItemModel(req.body);
    await item.save();

    res.send({ success: true, data: item });
  } catch (err) {
    console.log(err.message);
  }
};

// FILTER ITEMS BY CATEGORY & CITY
exports.fItemByCategory = async (req, res, next) => {
  const filterItem = req.params.filter;
  console.log(req.params);

  try {
    const items = await ItemModel.find({
      category: filterItem,
    });

    res.json(items);
  } catch (err) {
    console.log(err.message);
    next(err);
  }
};

exports.fItemByLocation = async (req, res, next) => {
  const filterItem = req.params.city;
  console.log(req.params.city);

  try {
    const items = await ItemModel.find({
      location: filterItem,
    });

    res.json(items);
  } catch (err) {
    console.log(err.message);
    next(err);
  }
};

// get Location

// get Latest item

// get given Item

// get need item

// post need Item

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
  console.log(req.params.id);

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
