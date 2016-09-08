/**
 * Created by zhangsha on 16-9-7.
 */
let express = require('express');
let bodyParser = require('body-parser');
let Student = require('./server/Student');
let mongoose = require('mongoose');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));

mongoose.connect('mongodb://localhost/student');


app.get('/query', (req, res) => {
  Student
    .where({student_id: req.query.id})
    .findOne((err, student) => {
      if(student){
        res.send({'success': true, 'msg': `${student.name}学生信息已查询到`});
      }else {
        res.send({'success': false, 'msg': '没有找到该员工'});
      }
    });
});

app.post('/build', (req, res) => {
  let id = req.body.id;
  let name = req.body.name;
  let sex = req.body.sex;
  let chinese = req.body.chinese;
  let math = req.body.math;
  if(id === '' || name === '' || sex === '' || chinese === '' || math === ''){
    res.send({'success': false, 'msg': '输入信息不完整'});
  }else {
    new Student({
      student_id: id,
      name: name,
      sex: sex,
      chinese: chinese,
      math: math
    })
      .save((err, student) => {

        res.send({'success': true, 'msg': `${student.name}信息保存成功`});
      });
  }
});

app.listen(3000, ()=> {
  console.log('Server start at http://localhost:3000');
});