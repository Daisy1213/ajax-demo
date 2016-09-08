/**
 * Created by zhangsha on 16-9-7.
 */
let mongoose = require('mongoose');

const Student = mongoose.model('Student', {
  student_id: String,
  name: String,
  sex: String,
  chinese: Number,
  math: Number
});

module.exports = Student;
