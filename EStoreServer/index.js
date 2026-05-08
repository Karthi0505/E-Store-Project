const express = require("express");
const app = express();
const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "Karthi(0505)",
  database: "eStore",
  port: 3306,
  multipleStatements: true,
});

app.get("/", (req, res) => {
  let categoryData;

  pool.query("SELECT * FROM Categories", (err, Categories) => {
    if (err) {
      categoryData = error;
      res.status(500).send(categoryData);
    } else {
      categoryData = Categories;
      res.status(200).send(categoryData);
    }
  });
});

const PORT = 5001;

const server = app.listen(PORT, () => {
  console.log("App running on 5001");
});
