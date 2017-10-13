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
            if(data.length > 0){

                var html = fs.readFile('views/home.html', 'utf-8', function(err, data){
                    if(err){
                        console.log(err);
                    }else{
                        res.writeHead(200, {'Content-Type':'text/html'});
                        res.end(data);
                        // res.render('login', {welcome:"哈喽沃德"});
                    }
                });

            }else{
                res.json({status:'用户名或者密码不对'});
                res.end();
            }
        }).catch(function(err){
            console.log('err'+ err);
        });

});

module.exports = router;