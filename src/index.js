const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require('cors');
const expressCallBack = require("./express-callback/index.js");
const {
  listStudents,
  getStudent
} = require("./controllers/student-controller.js");
app.use(cors());
app.use(bodyParser.json());

app.get("/students", expressCallBack(listStudents));

app.get("/students/:id", expressCallBack(listStudents));

app.get("/students/search/:search", expressCallBack(getStudent));

app.listen(8080, () => {
  console.log("App is running on 8080");
});
