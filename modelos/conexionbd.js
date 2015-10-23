var Sequelize = require("sequelize");

var sequelize="";
var datadase="";
var user ="";
var pass="";
var host_bd="";
var dialect = "";
var port_bd="";

function conectarbd(database,user,pass,host_bd,dialect,port_bd){
	this.datadase = datadase;
	this.user = user;
	this.pass= pass;
	this.host_bd = host_bd;
	this.dialect = dialect;
	this.port_bd = port_bd;

	sequelize = new Sequelize(database,user,pass,{
		host_bd: host_bd,
		dialect: dialect,
		port_bd: port_bd
	});
}

exports.conectarbd = conectarbd;
exports.sequelize = sequelize;
