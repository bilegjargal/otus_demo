const express = require("express");
const dbConnection = require("../database/db");
const parser = require("body-parser");
const app = express();

console.log();

app.use(dbConnection());

app.listen(8080, () => {
  console.log("App is running on 8080");
});
