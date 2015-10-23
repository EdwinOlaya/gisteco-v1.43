var validaciones = require("../modulos/validaciones.js");
var utilidades = require("../modulos/utilidades.js");

function analisisRedAguaHTML(res,conx,nunjucks){

	res.write(nunjucks.render("resultados_analisis_red_agua.html"));		
	res.end();
}

function analisisRedAgua(coords,res,conx,nunjucks){
	
	var query = "select * from public.v_redes_geom_interseccion('"+coords+"')";

	conx.conexion.query(query,{
		type: conx.Sequelize.QueryTypes.SELECT, //tipo de consulta
		raw: false  //para que retorne un objeto Model conx.Sequelize
	}).then(function(results){
		//results contiene los resultados de la consulta
		res.write(JSON.stringify(results));		
		res.end();
	});	
}

function analisisEspacialClientesHTML(res,conx,nunjucks){

	res.write(nunjucks.render("resultados_analisis_espacial_usuarios.html"));		
	res.end();
}

function analisisEspacialClientes(coords,res,conx,nunjucks){
	
	var query = "select * from public.v_get_clientes_dentro_geom('"+coords+"')";

	conx.conexion.query(query,{
		type: conx.Sequelize.QueryTypes.SELECT, //tipo de consulta
		raw: false  //para que retorne un objeto Model conx.Sequelize
	}).then(function(results){
		//results contiene los resultados de la consulta
		res.write(JSON.stringify(results));		
		res.end();
	});	
}

module.exports.analisisRedAgua = analisisRedAgua;
module.exports.analisisRedAguaHTML = analisisRedAguaHTML;
module.exports.analisisEspacialClientes = analisisEspacialClientes;
module.exports.analisisEspacialClientesHTML = analisisEspacialClientesHTML;