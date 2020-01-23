const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const {listStudents, getStudent} = require('./controllers/student-controller.js');

app.use(bodyParser.json());

app.get('/students', listStudents);

app.get('/students/:id', listStudents);

app.get('/students/:search', getStudent);


app.listen(8080, () => {
  console.log("App is running on 8080");
});
