const express = require("express");
const app = express();
const morgan = require("morgan");
const logger = require("./logger");
const authorize = require("./authorize");

// app.use([logger, authorize]);
// app.use(express.static("./public"));
app.use(morgan("tiny"));

app.get("/", (req, res) => {
  res.send("Home");
});

app.get("/about", (req, res) => {
  res.send("About");
});

app.get("/api/products/", (req, res) => {
  res.send("Products");
});

app.get("/api/items/", (req, res) => {
  console.log(req.user);
  res.send("Items");
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000...");
});
