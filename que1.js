var express = require('express');
var app = express();

var employeesController=function (req, res) {
  console.log("CAlling rest api");
  var employees=[
            {Id:101,Name:'Richa Sharma',Salary:35000,Location:"pune"},
            {Id:102,Name:'Monika Saxena',Salary:70000,Location:"mumbai"},
            {Id:103,Name:'Sneha Singh',Salary:45000,Location:"chennai"},
            {Id:104,Name:'Krishna Joshi',Salary:65000,Location:"delhi"},
            {Id:105,Name:'Kriti Khanna',Salary:60000,Location:"banglore"},
      ];
  res.send(employees);
};

app.get('/employees',employeesController );

var server = app.listen(8088, function () {
  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://localhost:8088", host, port)
})