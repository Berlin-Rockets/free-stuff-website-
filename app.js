const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { port, mongoURL } = require("./config/env");
const userRoute = require('./routes/UserRoutes')
const itemRoute = require('./routes/ItemRoutes')


mongoose.connect(mongoURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const app = express();

app.use(cors({ origin: '*', exposedHeaders: 'token' }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/users", userRoute);
app.use("/items", itemRoute);

app.listen(port, () => {
  console.log('====================================');
  console.log('Server start with port: ' + port);
  console.log('====================================');
});
