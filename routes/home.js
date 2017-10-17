var express = require('express');
var router = express.Router();
var User = require("../models/User.js");
var User_relation = require("../models/User_relation.js");
var Sequelize = require('sequelize');

router.post('/contact', function(req, res, next) {
	
	var userid = req.body.userid;
	console.log(userid);
	User.findAll({
		include:[{
			model:User_relation,
			'where':{
				'userid':userid
			}
		}]
	}).then(function(data){
		console.log(data);
		if(data.length){
			res.json({list:data});
		}else{
		  	console.log("no frends");
		}
		res.end();
		// console.log(JSON.stringify(data));

	}).catch(function(err){
		console.log('err'+ err);
	});

    // res.end();
});

module.exports = router;