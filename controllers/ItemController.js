const ItemModel = require('../models/itemModel');

exports.getAllItems = async (req, res, next) => {
  try {
    const queryObj = { ...req.query };
    console.log(queryObj);
    const excludedFields = ['page', 'sort', 'limit', 'fields'];
    excludedFields.forEach((el) => delete queryObj[el]);

    let query = ItemModel.find(queryObj);

    if (req.query.sort) {
      const sortBy = req.query.sort.split(',').join(' ');
      query = query.sort(sortBy); // for our website: always sort by latest items only
      query = query.sort('-createdAt'); // for our website: always sort by latest items only
    }

    // limiting fields - FIX LATER
    if (req.query.fields) {
      const fields = req.query.fields.split(',').join(' ');
      console.log(fields);
      query = query.select(fields);
    }
    // else {
    //   query = query.select('–__v');
    // }

    // Pagination
    const page = req.query.page * 1 || 1;
    const limit = req.query.limit * 1 || 20;
    const skip = (page - 1) * limit;

    query = query.skip(skip).limit(limit);

    // if (req.query.page) {
    //   const numItems = await ItemModel.countDocuments()
    // }

    const items = await query;

    res.json({ success: true, results: items.length, data: items });
  } catch (e) {
    console.log(e);
  }
  next();
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

// get Latest item – review & test later

exports.getLatestItems = async (req, res, next) => {
  try {
    const queryObj = { ...req.query };
    const excludedFields = ['page', 'sort', 'limit', 'fields'];
    excludedFields.forEach((el) => delete queryObj[el]);

    let query = ItemModel.find(queryObj);

    if (req.query.sort) {
      query = query.sort('-createdAt');
    }

    const items = await query;

    res.json({ success: true, results: items.length, data: items });
  } catch (e) {
    console.log(e);
  }
};

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
