const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { port, mongoURL } = require("./config/env");
const userRoute = require("./routes/UserRoutes");
const itemRoute = require("./routes/ItemRoutes");
const core = require("./middleware/security");

mongoose.connect(mongoURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const app = express();



app.use(core);
app.use(cors({ origin: "*", exposedHeaders: "token" }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/users", userRoute);
app.use("/api/items", itemRoute);

if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
app.use((error, req, res, next) => {
  res.json(error.toString());
});

app.listen(port || 4000, () => {
  console.log("====================================");
  console.log("Server start with port: " + port);
  console.log("====================================");
});
