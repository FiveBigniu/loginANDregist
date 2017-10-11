var Sequelize = require('sequelize');
var mysql  = require('mysql'); 

var config = {
	database:'sheila',
	username:'root',
	password:'',
	host:'localhost',
	port:3306
};

var sequelize = new Sequelize(config.database, config.username, config.password, {
  host:config.host,
  dialect:'mysql',
  pool: {
        max: 5,
        min: 0,
        idle: 30000
   }
});

var User = sequelize.define('userinfo', {
    id : {type : Sequelize.INTEGER, autoIncrement : true, primaryKey : true},
    user : {type : Sequelize.STRING, allowNull : false},
    password : {type : Sequelize.STRING, allowNull : false},
},{
    timestamps:false,
    freezeTableName:true
});

module.exports = User;
