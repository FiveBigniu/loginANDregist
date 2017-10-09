var express = require('express');
var router = express.Router();
var select = require("../models/user.js");
var log4js = require('log4js');
var orm = require('orm');
var select = require("../config/config.js");
var sequelize = require('sequelize');
// var bodyParser = require('body-parser');
 
// 创建 application/x-www-form-urlencoded 编码解析
// var urlencodedParser = bodyParser.urlencoded({ extended: false })
var seq = new sequelize(config.database, config.username, config.password, {
	host:config.host,
	dialect:'mysql',
	pool:{
		max:5,
		min:0,
		idle:3000
	}
})
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('register', {errMsg:"in register page11"});
});

router.post('/', function(req, res, next) {
  console.log(1);
  req.models.person.find({ user: "test" }, "user", function (err, people) {
    console.log(2);
    console.log(err);
    console.log(people);
  });
});
// router.post('/', function(req, res) {

//   var username = req.body.username;
//   var password = req.body.password;

//   console.log(username+password);
//     select('SELECT * FROM userinfo WHERE user = "'+ username + '";')
//         .then(function(data) {
//             if(data.status == 99999) {
//               console.log("hehe")
//                 console.log("已有此用户名")
//                 res.json({status:00000});
//                 res.end();
//             }else {
//               console.log("ixix")
//                 select('INSERT INTO userinfo(user,password) VALUES ("'+username+'", "'+password+'");')
//                 .then(function(data) {  
//                     res.json({status:99999});
//                     res.end();
//                 }).catch(function(err){})
//             }           
//         }).catch(function(err){

//         });
//   });

module.exports = router;