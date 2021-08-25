const mongoose = require("mongoose");
const Item = require("../models/itemModel");
const mongoURL = require("../config/env").mongoURL;

mongoose.connect(
  mongoURL,
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
  () => console.log("connected to Free-stuff DB")
);

async function seedData() {
  try {
    await User.deleteMany({});

    const items = Array()
      .fill(null)
      .map(() => {
        const item = new Item({
          username: faker.name.userName(),
          email: faker.internet.email(),
          password: faker.internet.password(),
        });
        return item.save();
      });

  
    await Promise.all(items);
  } catch (err) {
    console.log(err.message);
  }
  mongoose.connection.close();
}

seedData();