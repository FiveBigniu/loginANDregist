var express = require('express');
var router = express.Router();
var User = require("../models/User.js");
var User_relation = require("../models/User_relation.js");
var Sequelize = require('sequelize');

router.post('/contact', function(req, res, next) {
	
	var userid = req.body.userid;
	console.log(userid);
	User.findOne({
		include:[{
			model:User_relation,
			as:'userid'
		}]
	}).then(function(data){
		console.log(data);
	}).catch(function(err){
		console.log('err'+ err);
	});

    // res.end();
});

module.exports = router;