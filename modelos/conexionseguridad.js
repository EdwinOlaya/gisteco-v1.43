var Sequelize = require("sequelize");

var database = "";
var user = "postgres";
var pass = "1234";


var sequelizeSeguridad = new Sequelize(database,user,pass,{
	host: "20.0.10.73",
	dialect: "postgres",
	port: 5434
});	

exports.sequelizeSeguridad = sequelizeSeguridad;
