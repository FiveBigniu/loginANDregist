/*
 用户表 ct_user
 */
var Sequelize = require('sequelize');
var sequelize = require("../config/sql_config.js");

var User_like = sequelize.define('ct_user_like', {
    id : {type : Sequelize.INTEGER, autoIncrement : true, primaryKey : true},
    username : {type : Sequelize.STRING, allowNull : false},
    square_id : {type : Sequelize.INTEGER, allowNull : true},
    time : {type : Sequelize.STRING, allowNull : true},
    status : {type : Sequelize.INTEGER, allowNull : true}
},{
    timestamps:false,
    freezeTableName:true
});

module.exports = User_like;
