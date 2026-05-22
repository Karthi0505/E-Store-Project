const express = require("express");
const productcategories = require("./Routes/ProductCategories");
const app = express();
const cors = require("cors");

app.use(cors());

app.use("/productCategories", productcategories);

const PORT = 5001;

const server = app.listen(PORT, () => {
  console.log("App running on 5001");
});
