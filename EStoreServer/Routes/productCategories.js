const express = require("express");
const productcategories = express.Router();
const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "Karthi(0505)",
  database: "eStore",
  port: 3306,
  multipleStatements: true,
});

productcategories.get("/", (req, res) => {
  let categoryData;

  pool.query("SELECT * FROM Categories", (err, Categories) => {
    if (err) {
      categoryData = err;
      res.status(500).send(categoryData);
    } else {
      categoryData = Categories;
      res.status(200).send(categoryData);
    }
  });
});

productcategories.get("/getProducts", (req, res) => {
  let productData;

  pool.query("SELECT * FROM products", (err, rows ) => {
    if (err) {
      res.status(500).send(err);
    } else {
      productData = rows;
      res.status(200).send(productData);
    }
  });
});

module.exports = productcategories;