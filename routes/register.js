var express = require('express');
var router = express.Router();
var log4js = require('log4js');
var User = require("../models/User.js");
var bodyParser = require('body-parser');//使用Express接收form表单的submit(提交格式为www-form-urlencoded)需要 body-parse 插件支持
 
router.get('/', function(req, res, next) {
  res.render('register', {errMsg:"in register page11"});
  // res.redirect("http://www.example.com");//网址重定向
});

router.post('/', function(req, res, next) {
  var username = req.body.username;
  var password = req.body.password;
	User.findAll({
		where:{
			user : username
		}
	}).then(function(data){
		if(data.length > 0){
			res.json({status:'已经有相同的名字了'});
			// console.log('已经有相同的名字了');
		}else{
		  User.create({
		  	user : username,
		  	password : password
		  }).then(function (p){
		  	if(p){
		  		console.log('create success');
		  		res.json({status:1});
		  		res.end();
		  	}else{
		  		console.log('create faild');
		  		res.json({status:0});
		  		res.end();
		  	}
		  }).catch(function (err){

		  	console.log('err'+err);

		  });
		}
	}).catch(function(err){
		console.log('err'+ err);
	});

    // res.end();
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