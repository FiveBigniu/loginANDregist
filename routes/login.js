var express = require('express');
var router = express.Router();
var log4js = require('log4js');
var User = require("../models/User.js");
var bodyParser = require('body-parser');//使用Express接收form表单的submit(提交格式为www-form-urlencoded)需要 body-parse 插件支持
var fs = require('fs');

router.post('/login', function(req, res, next) {
      var username = req.body.username;
      var password = req.body.password;
        User.findAll({
            where:{
                username : username,
                password : password
            }
        }).then(function(data){
            if(data.length){
                // var html = fs.readFile('views/home.html', 'utf8', function(err, data){
                //     if(err){
                //         console.log(err);
                //     }else{
                //         res.writeHead(200, {'Content-Type':'text/html;charset=utf-8'});
                //         res.end(data);
                //     }
                // });
//              res.render('home', {Welcome:"我返回了注册按钮"});
                res.json({status:1, msg:'登录成功'});
                res.end();
               
            }else{
                res.json({status:0, msg:'用户名或密码不正确'});
                res.end();
            }
        }).catch(function(err){
            console.log('err'+ err);
        });

});

module.exports = router;