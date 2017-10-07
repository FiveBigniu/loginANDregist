var mysql = require('mysql');

var connection = mysql.createConnection({
	host:'localhost',
	user:'root',
	password:'',
	port:'3306',
	database:'sheila'
});

connection.connect(function(err){
	if(err){
		console.log('连接失败');
	}else{
		console.log('连接成功');
		// connection.query("CREATE TABLE person(id int,user varchar(255),password varchar(255))", function(err, result){
		// 	if(err) {
		// 		throw err
		// 	}else {
		// 		console.log('创建表成功');
		// 	}
		// })
	}
});
//关闭connection
connection.end(function(err){
    if(err){       
        return;
    }
    console.log('[connection end] succeed!');
});