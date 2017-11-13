let express = require('express');
let router = express.Router();
let log4js = require('log4js');
let User_square = require("../models/User_square");
let User_like = require("../models/User_like");

/*
 * 设置列表
 * talkMsg内容  userid用户
 */
router.post('/setSquareList', function(req, res, next) {
	let message = req.body.talkMsg;
	let userid = req.body.userid;
	User_square.create({
		message: message,
		userid: userid,
		time: 123
	}).then(function(data) {
		console.log(JSON.stringify(data));
		res.json({
			status: 1,
			msg: '发送成功'
		});
	}).catch(function(err) {
		console.log('err' + err);
	});

});

/*
 * 获取square列表
 */
router.get('/getSquareList', function(req, res, next) {
	User_square.findAndCountAll({ //会返回count 总数
		'limit': 8, //限制数量为多少
		'offset': 0, //位移 从第几个开始查
		'order': [
			['id', 'DESC'] //按id降序排序
		]
	}).then(function(data) {
		console.log(JSON.stringify(data));
		res.json({
			status: 1,
			msg: data
		});
	}).catch(function(err) {
		console.log('err' + err);
	});

});

/*
 * 点赞设置
 * userid用户 status点赞或评论  square_id文章
 */
router.post('/setLike', function(req, res, next) {
	let username = req.body.username;
	let status = req.body.status;
	let square_id = req.body.square_id;
	User_like.findAll({
		where: {
			username: username,
			square_id: square_id,
			status: status
		}
	}).then(data => {
		if(data.length > 0){
			User_like.destroy({
				where:{
					username:username,
					square_id:square_id,
					status:status,					
				}
			}).then(data =>{
				res.json({status:'取消成功'});
				res.end();
			}).catch(function(err){
				console.log('err'+err);
			})
		}else{
			User_like.create({
				username:username,
				square_id:square_id,
				status:status,
				time:1
			}).then(data =>{
				let status = JSON.stringify(data).length>0?'点赞成功':'点赞失败';
				res.json({status:status});
				res.end();
			}).catch(function(err){
				console.log('err'+err);
			})				
		}
			
	}).catch(function(err) {
		console.log('err' + err);
	});
});

module.exports = router;