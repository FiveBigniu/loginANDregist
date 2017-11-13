/*
 用户表 ct_square
 */
var Sequelize = require('sequelize');
var sequelize = require("../config/sql_config.js");

var User_square = sequelize.define('ct_user_square', {
    // id : {type : Sequelize.INTEGER, autoIncrement : true, primaryKey : true},
    id : {type : Sequelize.INTEGER, allowNull : true},//id
    message : {type : Sequelize.STRING, allowNull : false},//content
    time : {type : Sequelize.INTEGER, allowNull : false},//time
    userid : {type : Sequelize.INTEGER, autoIncrement : true, primaryKey : true}//用户userid
},{
    timestamps:false,
    freezeTableName:true
});

module.exports = User_square;
