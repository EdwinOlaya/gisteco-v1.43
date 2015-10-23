var Sequelize = require("sequelize");

//parámetros para la conexion
var database = "sisgeco_localhost";
var user = "postgres";
var pass = "epsgrau#2014@.gis_piura";

var conx = new Sequelize(database,user,pass,{
	host: "20.0.10.240",
	dialect: "postgres",
	port: 5434
});

var conexion = {"conexion":conx,"Sequelize":Sequelize};

module.exports.conexion = conexion;
