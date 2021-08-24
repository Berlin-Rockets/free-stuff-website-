const ItemModel = require("../models/itemModel");

exports.getAllItems = async (req, res, next) => {
  try {
    const allItems = await ItemModel.find({});
    res.json({ success: true, data: allItems });
  } catch (e) {
    console.log(e);
  }
};

// post item
exports.postItem = async (req, res, next) => {
  
  try{
      const item = new ItemModel(req.body)
      await item.save()

      res.send({success:true, data:item})
  }
  catch(err){
      console.log(err.message)
  
  }

};






// get Latest item



//get given Item



// get need item




//post need Item




// Delete Item



// get category Item 


// get Location Item



// get Single Item




// post/patch item (edit)