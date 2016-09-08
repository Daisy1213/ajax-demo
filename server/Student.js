/**
 * Created by zhangsha on 16-9-7.
 */
let mongoose = require('mongoose');

const Students = mongoose.model('Students', {
  student_id: String,
  name: String,
  sex: String,
  chinese: Number,
  math: Number
});

module.exports = Students;
