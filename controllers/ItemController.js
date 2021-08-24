const ItemModel = require("../model/ItemSchema");

exports.getAllItems = async (req, res, next) => {
  try {
    const allItems = await ItemModel.find({});
    res.json({ success: true, data: allItems });
  } catch (e) {
    console.log(e);
  }
};
