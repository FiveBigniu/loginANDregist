var mysql  = require('mysql');  
var DB_NAME = 'nodedb';
 
var pool = mysql.createConnection({     
  host     : 'localhost',       
  user     : 'root',              
  password : '',       
  port: '3306',                   
  database: 'sheila'
}); 


function select(sql) {
  // console.log("enter");    
    var promise = new Promise(function(resolve,reject) {
        var result = null;

        var connection = mysql.createConnection({     
            host     : 'localhost',       
            user     : 'root',              
            password : '',       
            port: '3306',                   
            database: 'sheila'
          });

        connection.connect();
        // connection.query("USE test");
        console.log("enter。。。。。。");                                                                                                   
        connection.query(sql, function (err, results, fields) { 
            if (err) { 
                console.log("err");
                reject(err); 
            }else {
                console.log(results);
                if(results.length > 0) {
                    resolve({status: 99999});
                }else {
                    resolve({status: 00000});
                }           
            } 
          } 
        );
        connection.end(); 
    });
    return promise; 
}

// function User(user){
//   this.username = user.username;
//   this.userpwd = user.userpwd;
// }

// User.prototype.userSave = function save(callback){
//   var user = {
//     username : this.username,
//     userpwd : this.userpwd
//   };
//   var INSERT_USER= "INSERT INTO USERINFO (USERID,USERNAME,USERPWD) VALUES (0,?,?)"; 

//   pool.getConnection(function(err,connection){
//     connection.query(INSERT_User,[user.username,user.userpwd],function(err,result){
//       if(err){
//         console.log("INSERT_USER Error: " + err.message);
//         return;
//       }
//       connection.release();
//       callback(err,result);
//     });
//   });
// };

//根据用户名得到用户数量
// User.prototype.userNum = function(username, callback) {
//     console.log("enter connection");
//     pool.connection();

//     var SELECT_NUM = "SELECT COUNT(1) AS num FROM USERINFO WHERE USERNAME = ?";
//     pool.query(SELECT_NUM, [username], function (err, result) {
//       if (err) {
//         console.log("SELECT_NUM Error: " + err.message);
//         return;
//       }
//       console.log("enter connection1");
//       pool.release();
//       callback(err,result);
//     });
// };

// User.prototype.userInfo = function(callback){
//   var user = {
//     username : this.username,
//     userpwd : this.userpwd
//   };
//   var SELECT_LOGIN ="SELECT * FROM USERINFO WHERE USERNAME = ?";
//   pool.getConnection(function(err,connection){
//     connection.query(QUERY_LOGIN,[user.username],function(err,result){
//       if (err) {
//         console.log("SELECT_LOGIN Error: " + err.message);
//         return;
//       }
//       connection.release();
//       callback(err,result);
//     });
//   });
// };
module.exports = select;