var Sequelize = require("sequelize");
var validaciones = require("../modulos/validaciones.js");
var utilidades = require("../modulos/utilidades.js");

//parámetros para la conexion
var database = "sisgeco_nuevo_seguridad";
var user = "postgres";
var pass = "1234";

var sequelize = new Sequelize(database,user,pass,{
	host: "20.0.10.73",
	dialect: "postgres",
	port: 5434
});


function login(id_usuario){
	var query = "select * from login('"+id_usuario+"')";

	sequelize.query(query, {
		type: sequelize.QueryTypes.SELECT,
		raw: false
	}).then(function(results){
		return results[0];
	});
}

exports.login  = login;