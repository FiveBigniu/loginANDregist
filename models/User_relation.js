/*
	用户ct_user对应的关系表 ct_user_relation
 */
var Sequelize = require('sequelize');
var sequelize = require("../config/sql_config.js");

var User = sequelize.define('ct_user_relation', {
    id : {type : Sequelize.INTEGER, autoIncrement : true, primaryKey : true},
    userid : {type : Sequelize.STRING, allowNull : false},//用户id
    frendid : {type : Sequelize.STRING, allowNull : false}//朋友id
},{
    timestamps:false,
    freezeTableName:true
});

module.exports = User;
