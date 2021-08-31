const ItemModel = require("../models/itemModel");

exports.getAllItems = async (req, res, next) => {
  try {
    const allItems = await ItemModel.find({});
    res.json({ success: true, Items: allItems.length, data: allItems });
  } catch (e) {
    console.log(e);
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

// Filter items by Category or Location
exports.filterByOne = async (req, res, next) => {
  console.log("start filter by one");
  const filterItem = req.params.filter;
  console.log(filterItem);
  try {
    const catItems = await ItemModel.find({
      $or: [{ category: filterItem }, { location: filterItem }],
    });
    res.json({ success: true, items: catItems.length, catItems });
  } catch (err) {
    console.log(err.message);
    next(err);
  }
};

// Filter items by Category and Location

 exports.filterItems = async (req, res, next) => {
  const secFilterItem= req.params.both
  const filterItem= req.params.filter
  console.log(filterItem);
  console.log(secFilterItem);
   try {
     const catItems = await ItemModel.find({$or:[
      {$and: [  {'category': filterItem}, {'location':secFilterItem} ] },
       {$and: [  {'location':filterItem},{'category': secFilterItem}  ] }

     ]});
     res.json({success:true,items: catItems.length,catItems});
   } catch (err) {
     console.log(err.message);
     next(err);
   }
 };

// FILTER ITEMS BY CATEGORY
// exports.catefilterItem = async (req, res, next) => {
//  const cateFilterItem= req.params.category
//   try {
//     const catItems = await ItemModel.find({category:cateFilterItem});
//     res.json(catItems);
//   } catch (err) {
//     console.log(err.message);
//     next(err);
//   }
// };

// // get Location
// exports.locfilterItem = async (req, res, next) => {
//   const locFilterItem= req.params.location
//    try {
//      const locItems = await ItemModel.find({location:locFilterItem});
//      console.log(locItems);
//      res.json(locItems);

//    } catch (err) {
//      console.log(err.message);
//      next(err);
//    }
//  };

//get sold/given Item
exports.givenItem = async (req, res, next) => {

   try {
     const givenItems = await ItemModel.find({soldState:false});
     res.json({success:true,items: givenItems.length,givenItems});
   } catch (err) {
     console.log(err.message);
     next(err);
   }
 };

// get need item

// Delete Item

// get Single Item

// post/patch item (edit)
