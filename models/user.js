/*
 用户表 ct_user
 */
var Sequelize = require('sequelize');
var sequelize = require("../config/sql_config.js");

var User = sequelize.define('ct_user', {
    // id : {type : Sequelize.INTEGER, autoIncrement : true, primaryKey : true},
    username : {type : Sequelize.STRING, allowNull : false},//用户名
    password : {type : Sequelize.STRING, allowNull : false},//密码
    details : {type : Sequelize.STRING, allowNull : true},//简介
    head_thumb : {type : Sequelize.STRING, allowNull : true},//头像
    gender : {type : Sequelize.STRING, allowNull : true},//性别
    nickname : {type : Sequelize.STRING, allowNull : true},//昵称
    userid : {type : Sequelize.INTEGER, autoIncrement : true, primaryKey : true}//用户类型id
},{
    timestamps:false,
    freezeTableName:true
});

module.exports = User;
