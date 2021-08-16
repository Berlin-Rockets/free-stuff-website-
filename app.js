const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const port = 4000





const app = express();

app.use(cors({ origin: "*", exposedHeaders: "token" }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



app.listen(port, () => {
  console.log("====================================");
  console.log("Server start with port: " + port);
  console.log("====================================");
});