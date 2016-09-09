/**
 * Created by zhangsha on 16-9-9.
 */
let mongoose = require('mongoose');
let rawData = require('./raw-data');
let Student = require('./Student');

mongoose.connect('mongodb://localhost/student');

const modelMap = {
  Student
};

let docs = Object.keys(rawData);

Object.keys(rawData)
  .forEach(v => {
    modelMap[v].remove(() => {
      modelMap[v].create(rawData[v], () => { //每次插入一个表，然后docs这个数组的表名就少一个，
        docs = docs.filter(doc => doc !== v);
        if (docs.length === 0) { // 直到docs长度为零，即数据刷新完毕
          console.log('All data refreshed!');
          process.exit(0);
        }
      })
    })
  });