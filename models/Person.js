module.exports = function (db, cb){
	//define的第一个参数为表名
	db.define('sheila', {
		innerid: {type:'serial', key:true},//主键
		user:String,
		password:String
	});
	return cb();
}