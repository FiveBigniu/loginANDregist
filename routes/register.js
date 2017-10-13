var express = require('express');
var router = express.Router();
var log4js = require('log4js');
var User = require("../models/User.js");
var bodyParser = require('body-parser');//使用Express接收form表单的submit(提交格式为www-form-urlencoded)需要 body-parse 插件支持

router.get('/registPage', function(req, res, next) {
  res.render('register', {errMsg:"我返回了注册按钮"});
  // res.redirect("http://www.example.com");//网址重定向
});

router.post('/register', function(req, res, next) {
  var username = req.body.username;
  var password = req.body.password;
	User.findAll({
		where:{
			username : username
		}
	}).then(function(data){
		if(data.length > 0){
			res.json({status:'已经有相同的名字了'});
		}else{
		  User.create({
		  	username : username,
		  	password : password
		  }).then(function (p){
		  	if(p){
		  		res.json({status:1});
		  		res.end();
		  	}else{
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

module.exports = router;