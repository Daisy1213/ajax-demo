/**
 * Created by zhangsha on 16-9-7.
 */
let express = require('express');
let bodyParser = require('body-parser');
let Student = require('./server/Student');
let mongoose = require('mongoose');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
mongoose.connect('mongodb://localhost/student');


app.get('/query', (req, res) => {
  Student
    .where({student_id: req.query.id})
    .findOne((err, student) => {
      res.send(student)
    });
});

app.post('/build', (req, res) => {
  new Student({
    student_id: req.body.id,
    name: req.body.name,
    sex: req.body.sex,
    chinese: req.body.chinese,
    math: req.body.math
  })
    .save((err, student) => {
      res.send(student);
    });
});

app.listen(3000, ()=> {
  console.log('Server start at http://localhost:3000');
});