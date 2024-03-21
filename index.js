const express = require("express");
require("dotenv").config();

const app = express();
const port = 3000;

const mongoose = require("mongoose");
const productRoutes = require("./routes/product.route");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/products", productRoutes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

mongoose
  .connect(process.env.URL)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  })
  .catch((err) => {
    console.log("Error: ", err);
  });
