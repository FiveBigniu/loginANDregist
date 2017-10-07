var express = require('express');
var router = express.Router();
var User = require("../models/user.js");
var log4js = require('log4js');
// var bodyParser = require('body-parser');
 
// 创建 application/x-www-form-urlencoded 编码解析
// var urlencodedParser = bodyParser.urlencoded({ extended: false })

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('register', {errMsg:"in register page"});
});


router.post('/', function(req, res) {

  var username = req.body.username;
  var password = req.body.password;

  var newUser = new User({
    username : username,
    userpwd : password
  });
  console.log(newUser.username+"222");
    //检查用户名是否已经存在
    newUser.userNum(newUser.username, function (err, results) {
      console.log("333");
      if (results != null && results[0]['num'] > 0) {
        err = '用户名已存在';
      }

      if (err) {
        res.render('register', {errMsg: err });
        return;
      }
      newUser.userSave(function(err,result){
        if(err){
          res.render('register', {errMsg: err });
          return;
        }
        if(result.insertId > 0){
          res.locals.status = "success";
          res.render('register', {errMsg:'' });
        }
        else{
          res.render('register', {errMsg: err });
        }
      });
    });
  });

module.exports = router;