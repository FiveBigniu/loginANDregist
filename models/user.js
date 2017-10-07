var mysql  = require('mysql');  
var DB_NAME = 'nodedb';
 
var pool = mysql.createConnection({     
  host     : 'localhost',       
  user     : 'root',              
  password : '',       
  port: '3306',                   
  database: 'sheila'
}); 

//可以监听connection事件，并设置session值
pool.on('connnection',function(connection){
  console.log("pool on");
  connection.query('SET SESSION auto_increment_increment=1')
});


function User(user){
  this.username = user.username;
  this.userpwd = user.userpwd;
}

User.prototype.userSave = function save(callback){
  var user = {
    username : this.username,
    userpwd : this.userpwd
  };
  var INSERT_USER= "INSERT INTO USERINFO (USERID,USERNAME,USERPWD) VALUES (0,?,?)";
  pool.getConnection(function(err,connection){
    connection.query(INSERT_User,[user.username,user.userpwd],function(err,result){
      if(err){
        console.log("INSERT_USER Error: " + err.message);
        return;
      }
      connection.release();
      callback(err,result);
    });
  });
};

//根据用户名得到用户数量
User.prototype.userNum = function(username, callback) {
  console.log("enter connection");
  // pool.connect(function(err){
  //   if(err){
  //     console.log('连接失败');
  //   }else{
  //     console.log('连接成功');
  //   }
  // });
  pool.getConnection(function(err,connection){
    console.log("getConnection");
    console.log("getUserNumByName");
    var SELECT_NUM = "SELECT COUNT(1) AS num FROM USERINFO WHERE USERNAME = ?";
    connection.query(QUERY_Num, [username], function (err, result) {
      if (err) {
        console.log("SELECT_NUM Error: " + err.message);
        return;
      }
      connection.release();
      callback(err,result);
    });
  });
};

User.prototype.userInfo = function(callback){
  var user = {
    username : this.username,
    userpwd : this.userpwd
  };
  var SELECT_LOGIN ="SELECT * FROM USERINFO WHERE USERNAME = ?";
  pool.getConnection(function(err,connection){
    connection.query(QUERY_LOGIN,[user.username],function(err,result){
      if (err) {
        console.log("SELECT_LOGIN Error: " + err.message);
        return;
      }
      connection.release();
      callback(err,result);
    });
  });
};
module.exports = User;