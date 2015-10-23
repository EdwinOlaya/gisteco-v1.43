var validaciones = require("../modulos/validaciones.js");
var utilidades = require("../modulos/utilidades.js");

function getCoordsByNroSuministro(nro_suministro,res,conx){
	//retorna 'x' y 'y' (en el sistema EPSG:3857)
	var query = "select * from gis.f_buscarcliente_por_num_suministro("+nro_suministro+")";	

	if(!validaciones.esUnNumSuministroValido(nro_suministro)) {
		utilidades.comunicarError(res,"El número de suministro no puede estar vacío, debe tener solo dígitos pero no más de 8");
		return false;
	}

	conx.conexion.query(query,{
		type: conx.Sequelize.QueryTypes.SELECT, //tipo de consulta
		raw: false  //para que retorne un objeto Model conx.Sequelize
	}).then(function(results){
		//results contiene los resultados de la consulta
		res.write(JSON.stringify(results[0]));
		res.end();
	});
}

function getCoordsByCodCatastral(preregion,prezona,presector,premzn,prelote,res,conx){	

	var query = "";

	if(validaciones.esUnCodCatastralValido(preregion,prezona,presector,premzn,prelote)){		
		query = "select * from gis.f_buscarcliente_por_codigo_cat("+
		preregion+","+prezona+","+presector+","+premzn+","+
		prelote+")";	
	}
	else if(validaciones.esUnaManzana(preregion,prezona,presector,premzn,prelote)){
		query = "select * from gis.f_puntos_manzana_to_string("+preregion+","+prezona+","+presector+","+premzn+")";
	}
	
	if(query == ""){
		utilidades.comunicarError(res,"Los parámetros de busqueda son incorrectos o insuficientes");
		return false;
	}

	conx.conexion.query(query,{
		type: conx.Sequelize.QueryTypes.SELECT, 
		raw: false  
	}).then(function(results){		
		res.write(JSON.stringify(results));
		res.end();
	});
}
function verFichaCatastral(id_prov,id_dist,ficha,res,conx,nunjucks){

	var query = " select suministro "+
				" from piura_sig_clientes "+
				" where id_prov = "+id_prov+
				" and id_dist = "+id_dist+
				" and nro_ficha = "+ficha;

	conx.conexion.query(query,{
		type: conx.Sequelize.QueryTypes.SELECT,
		raw: false
	}).then(function(results){

		if(!results[0]){
			utilidades.comunicarError(res,"No se encontraron datos del usuario");
			return false;
		}

		res.write(nunjucks.render("ficha_catastral_piura.html",{
			inscrinro: results[0].suministro,
			id_provincia: id_prov,
			id_distrito: id_dist,
			nro_ficha: ficha			
		}));
		res.end();
	});
}
function verFichaCatastralSuministro(suministro,res,conx,nunjucks){
	var query = "select * from f_getficha_from_suministro("+suministro+")";

	conx.conexion.query(query,{
		type: conx.Sequelize.QueryTypes.SELECT,
		raw: false
	}).then(function(results){

		if(!results[0]){
			utilidades.comunicarError(res,"El usuario no tiene una ficha en la base de datos.");
			return false;
		}

		verFichaCatastral(results[0].id_provincia,results[0].id_distrito,results[0].nro_ficha,res,conx,nunjucks);
	});
}

function verDatosBasicosFichaCat(id_prov,id_dist,ficha,res,conx,nunjucks){

	var query = "";
	
	if (id_prov == '1') {

		switch(id_dist){
			case '1': //piura distrito
				query = "select * from  gis.f_getdatosbasicos_ficha_cat_piura("+ficha+")";
				break;
			case '2': //lomas distrito
				query = "select * from  gis.f_getdatosbasicos_ficha_cat_lomas("+ficha+")";
				break;
			case '5': //catacaos distrito
				query = "select * from  gis.f_getdatosbasicos_ficha_cat_catacaos("+ficha+")";
				break;				
		}
	}

	conx.conexion.query(query,{
		type: conx.Sequelize.QueryTypes.SELECT,
		raw: false
	}).then(function(results){
		if(!results[0]){
			utilidades.comunicarError(res,"No se encontraron datos del usuario");
			return false;
		}		
		res.write(JSON.stringify(results[0]));
		res.end();
	});	
}

function verDatosPropiedadFichaCat(id_prov,id_dist,ficha,res,conx,nunjucks){
		
	var query = "";
	
	if (id_prov == '1') {

		switch(id_dist){
			case '1': //piura distrito
				query = "select * from  gis.f_getdatospropiedad_ficha_cat_piura("+ficha+")";
				break;
			case '2': //lomas distrito
				query = "select * from  gis.f_getdatospropiedad_ficha_cat_lomas("+ficha+")";
				break;
			case '5': //catacaos distrito
				query = "select * from  gis.f_getdatospropiedad_ficha_cat_catacaos("+ficha+")";
				break;				
		}
	}

	conx.conexion.query(query,{
		type: conx.Sequelize.QueryTypes.SELECT,
		raw: false
	}).then(function(results){
		if(!results[0]){
			utilidades.comunicarError(res,"No se encontraron datos del usuario");
			return false;
		}
		results[0].id_provincia = id_prov;
		results[0].id_distrito = id_dist;		
		res.write(JSON.stringify(results[0]));
		res.end();
	});
}

function verConexAguaFichaCat(id_prov,id_dist,ficha,res,conx,nunjucks){
		
	var query = "";
	
	if (id_prov == '1') {

		switch(id_dist){
			case '1': //piura distrito
				query = "select * from gis.f_getconexionagua_ficha_cat_piura("+ficha+")";
				break;
			case '2': //limas distrito
				query = "select * from  gis.f_getconexionagua_ficha_cat_lomas("+ficha+")";
				break;
			case '5': //catacaos distrito
				query = "select * from  gis.f_getconexionagua_ficha_cat_catacaos("+ficha+")";
				break;				
		}
	}

	conx.conexion.query(query,{
		type: conx.Sequelize.QueryTypes.SELECT,
		raw: false
	}).then(function(results){
		if(!results[0]){
			utilidades.comunicarError(res,"No se encontraron datos del usuario");
			return false;
		}
		results[0].id_provincia = id_prov;
		results[0].id_distrito = id_dist;
		res.write(JSON.stringify(results[0]));
		res.end();		
	});
}

function verConexDesagueFichaCat(id_prov,id_dist,ficha,res,conx,nunjucks){

	var query = "";

	if (id_prov == '1') {

		switch(id_dist){
			case '1': //piura distrito
				query = "select * from gis.f_getconexiondesague_ficha_cat_piura("+ficha+")";
				break;
			case '2': //lomas distrito
				query = "select * from  gis.f_getconexiondesague_ficha_cat_lomas("+ficha+")";
				break;
			case '5': //catacaos distrito
				query = "select * from  gis.f_getconexiondesague_ficha_cat_catacaos("+ficha+")";
				break;				
		}
	}

	conx.conexion.query(query,{
		type: conx.Sequelize.QueryTypes.SELECT,
		raw: false
	}).then(function(results){
		if(!results[0]){
			utilidades.comunicarError(res,"No se encontraron datos del usuario");
			return false;
		}
		results[0].id_provincia = id_prov;
		results[0].id_distrito = id_dist;
		res.write(JSON.stringify(results[0]));
		res.end();		
	});
}

function verValoresMinFichaCat(id_prov,id_dist,ficha,res,conx,nunjucks){

	var query = "";

	if (id_prov == '1') {

		switch(id_dist){
			case '1': //piura distrito
				query = "select * from gis.f_getvaloresminimos_ficha_cat_piura("+ficha+")";
				break;
			case '2': //lomas distrito
				query = "select * from  gis.f_getvaloresminimos_ficha_cat_lomas("+ficha+")";
				break;
			case '5': //catacaos distrito
				query = "select * from  gis.f_getvaloresminimos_ficha_cat_catacaos("+ficha+")";
				break;				
		}

	}

	conx.conexion.query(query,{
		type: conx.Sequelize.QueryTypes.SELECT,
		raw: false
	}).then(function(results){
		if(!results[0]){
			utilidades.comunicarError(res,"No se encontraron datos del usuario");
			return false;
		}
		results[0].id_provincia = id_prov;
		results[0].id_distrito = id_dist;
		res.write(JSON.stringify(results[0]));
		res.end();
	});
}

function verDatosComplemFichaCat(id_prov,id_dist,ficha,res,conx,nunjucks){
	
	var query = "";

	if (id_prov == '1') {

		switch(id_dist){
			case '1': //piura distrito
				query = "select * from gis.f_getdatoscomplem_ficha_cat_piura("+ficha+")";
				break;
			case '2': //lomas distrito
				query = "select * from  gis.f_getdatoscomplem_ficha_cat_lomas("+ficha+")";
				break;
			case '5': //catacaos distrito
				query = "select * from  gis.f_getdatoscomplem_ficha_cat_catacaos("+ficha+")";
				break;				
		}
	}

	conx.conexion.query(query,{
		type: conx.Sequelize.QueryTypes.SELECT,
		raw: false
	}).then(function(results){
		if(!results[0]){
			utilidades.comunicarError(res,"No se encontraron datos del usuario");
			return false;
		}
		results[0].id_provincia = id_prov;
		results[0].id_distrito = id_dist;
		res.write(JSON.stringify(results[0]));
		res.end();
	});
}

function verInformacionGeograficaFichaCat(id_prov,id_dist,ficha,res,conx,nunjucks){
	
	var query = "";

	if (id_prov == '1') {

		switch(id_dist){
			case '1': //piura distrito
				query = "select * from gis.f_getinformaciongeografica_ficha_cat_piura("+ficha+")";
				break;
			case '2': //lomas distrito
				query = "select * from  gis.f_getinformaciongeografica_ficha_cat_lomas("+ficha+")";
				break;
			case '5': //catacaos distrito
				query = "select * from  gis.f_getinformaciongeografica_ficha_cat_catacaos("+ficha+")";
				break;				
		}
	}

	conx.conexion.query(query,{
		type: conx.Sequelize.QueryTypes.SELECT,
		raw: false
	}).then(function(results){
		if(!results[0]){
			utilidades.comunicarError(res,"No se encontraron datos del usuario");
			return false;
		}
		results[0].id_provincia = id_prov;
		results[0].id_distrito = id_dist;		
		res.write(JSON.stringify(results[0]));
		res.end();
	});
}

function verCroquisFichaCat(id_prov,id_dist,ficha,res,conx,nunjucks){
		
	var query = "";

	if (id_prov == '1') {

		switch(id_dist){
			case '1': //piura distrito
				query = "select * from gis.f_getcallespredio_ficha_cat_piura("+ficha+")";
				break;
			case '2': //lomas distrito
				query = "select * from  gis.f_getcallespredio_ficha_cat_lomas("+ficha+")";
				break;
			case '5': //catacaos distrito
				query = "select * from  gis.f_getcallespredio_ficha_cat_catacaos("+ficha+")";
				break;		
		}
	}

	conx.conexion.query(query,{
		type: conx.Sequelize.QueryTypes.SELECT,
		raw: false
	}).then(function(results){
		if(!results[0]){
			utilidades.comunicarError(res,"No se encontraron datos del usuario");
			return false;
		}	
		res.write(nunjucks.render("croquis_ficha_catastral_piura.html",results[0]));//usamos la misma vista
		//ya que no cambiaría para diferentes distritos		
		res.end();
	});
}

function verDetalleFactura(id_recfac,res,conx,nunjucks){

	var query = "select * from f_getdetalle_factura_cliente('"+id_recfac+"')";
	console.log(id_recfac);
	conx.conexion.query(query,{
		type: conx.Sequelize.QueryTypes.SELECT,
		raw: false
	}).then(function(results){
		res.write(nunjucks.render("detalle_factura_cliente.html",{detalle_factura:results}));			
		res.end();
	});
}

function analisisUsuarios(id_provincia,id_distrito,nombre_tit,suministro,filtro,res,conx,nunjucks){

	//VALIDACION
	var rpta = validaciones.analisisUsuariosValidacion(nombre_tit,suministro,filtro);
	if(rpta != 'OK'){
		utilidades.comunicarError(res,rpta);
		return false;
	}
	//SE ANULAN LOS PARAMETROS QUE NO DEBERÁN SER CONSIDERADOS PARA LA CONSULTA
	if(filtro == '0'){				
		suministro = null;
	}	
	else{						
		nombre_tit = '';
	}

	var query = "select * from public.f_analisis_usuarios("+id_provincia+","+id_distrito+",'"+nombre_tit+"',"+suministro+")";

	conx.conexion.query(query,{
		type: conx.Sequelize.QueryTypes.SELECT,
		raw: false
	}).then(function(results){		
		res.write(JSON.stringify(results));
		res.end();
	});
}

function analisisUsuariosHtml(id_provincia,id_distrito,nombre_tit,suministro,filtro,res,conx,nunjucks){	
	
	//VALIDACION
	var rpta = validaciones.analisisUsuariosValidacion(nombre_tit,suministro,filtro);
	if(rpta != 'OK'){
		utilidades.comunicarError(res,rpta);
		return false;
	}

	//SE ANULAN LOS PARAMETROS QUE NO DEBERÁN SER CONSIDERADOS PARA LA CONSULTA
	if(filtro == '0'){		
		suministro = null;
	}	
	else{		
		nombre_tit = '';
	}

	//CONSULTA A LA BASE DE DATOS
	var query = "select f_getprovincia("+id_provincia+") as provincia,"+
	" f_getdistrito("+id_provincia+","+id_distrito+") as distrito ";

	conx.conexion.query(query,{
		type: conx.Sequelize.QueryTypes.SELECT,
		raw: false
	}).then(function(results){
		//RENDERIZACION Y ENVIÓ DE RESULTADOS
		res.write(nunjucks.render("resultados_analisis_de_usuarios.html",{
			provincia:results[0].provincia,
			distrito:results[0].distrito,
			id_prov: id_provincia,
			id_dist: id_distrito,
			nombre_titular: nombre_tit,
			nro_suministro: suministro,
			filtro: filtro		
		}));		
		res.end();
	});
}

function analisisDeuda(id_provincia,id_distrito,first_cond,second_cond,first_param,second_param,op,min_c_recibos,max_c_recibos,anio,mes,res,conx,nunjucks){

	//VALIDACION
	var rpta = validaciones.analisisDeudaValidacion(first_cond,second_cond,first_param,second_param,min_c_recibos,max_c_recibos);
	if(rpta != 'OK'){
		utilidades.comunicarError(res,rpta);
		return false;
	}

	//SE DA FORMATO A ALGUNOS PARÁMETROS PARA Q TENGAN EL ADECUADO ANTES DE HACER LA CONSULTA
	if(!anio) anio = null;
	if(!mes) mes = null;
	if(!min_c_recibos) 	min_c_recibos = null;			
	if(!max_c_recibos)	max_c_recibos = null;
	if(!first_param)	first_param = null;
	if(!second_param)	second_param = null;

	var query = "SELECT * FROM f_analisis_deudas("+id_provincia+","+id_distrito+","+first_cond
		+","+second_cond+","+first_param+","+second_param+","+
		op+","+min_c_recibos+","+max_c_recibos+","+anio+","+mes+")";

	conx.conexion.query(query,{
		type: conx.Sequelize.QueryTypes.SELECT,
		raw: false
	}).then(function(results){		
		res.write(JSON.stringify(results));		
		res.end();
	});

}

function analisisDeudaHtml(id_provincia,id_distrito,first_cond,second_cond,first_param,second_param,op,min_c_recibos,max_c_recibos,anio,mes,res,conx,nunjucks){

	//VALIDACION
	var rpta = validaciones.analisisDeudaValidacion(first_cond,second_cond,first_param,second_param,min_c_recibos,max_c_recibos);
	if(rpta != 'OK'){
		utilidades.comunicarError(res,rpta);
		return false;
	}

	var query = "select f_getprovincia("+id_provincia+") as provincia,"+
	" f_getdistrito("+id_provincia+","+id_distrito+") as distrito ";

	conx.conexion.query(query,{
		type: conx.Sequelize.QueryTypes.SELECT,
		raw: false
	}).then(function(results){

		var datos = {
			provincia:results[0].provincia,
			distrito:results[0].distrito,
			id_prov: id_provincia,
			id_dist: id_distrito,
			f_cond: first_cond,
			s_cond: second_cond,
			f_param: first_param,
			s_param: second_param,
			ope: op,
			min_cant_recibos: min_c_recibos,
			max_cant_recibos: max_c_recibos,
			anio: anio,
			mes:mes
		};		
		res.write(nunjucks.render("resultados_analisis_de_deudas.html",datos));		
		res.end();
	});

}

function analisisConsumosHtml(id_provincia,id_distrito,first_cond,second_cond,first_param,second_param,op,anio_p,mes_p,num_medidor,filtro,res,conx,nunjucks){
	
	//VALIDACION
	var rpta = "";

	if(filtro == '0'){
		var rpta = validaciones.analisisConsumosValidacion(first_cond,second_cond,first_param,second_param,anio_p,mes_p);
	}
	else{
		var rpta = validaciones.analisisConsumosMedidorValidacion(num_medidor,anio_p,mes_p);
	}

	if(rpta != 'OK'){
		utilidades.comunicarError(res,rpta);
		return false;
	}

	var query = "select f_getprovincia("+id_provincia+") as provincia,"+
	" f_getdistrito("+id_provincia+","+id_distrito+") as distrito ";

	conx.conexion.query(query,{
		type: conx.Sequelize.QueryTypes.SELECT,
		raw: false
	}).then(function(results){

		var datos = {
			provincia:results[0].provincia,
			distrito:results[0].distrito,
			id_prov: id_provincia,
			id_dist: id_distrito,
			f_cond: first_cond,
			s_cond: second_cond,
			f_param: first_param,
			s_param: second_param,
			ope: op,
			anio:anio_p,
			mes:mes_p,
			medidor: num_medidor,
			filtro: filtro
		};		
		res.write(nunjucks.render("resultados_analisis_de_consumos.html",datos));		
		res.end();
	});	
}

function analisisConsumos(id_provincia,id_distrito,first_cond,second_cond,first_param,second_param,op,anio,mes,res,conx,nunjucks){
	
	//VALIDACION

	var rpta = validaciones.analisisConsumosValidacion(first_cond,second_cond,first_param,second_param,anio,mes);
	if(rpta != 'OK'){
		utilidades.comunicarError(res,rpta);
		return false;
	}
	//SE DA FORMATO A ALGUNOS PARÁMETROS PARA Q TENGAN EL ADECUADO ANTES DE HACER LA CONSULTA
	if(!first_param)	first_param = null;
	if(!second_param)	second_param = null;

	var query = "select * from public.f_analisis_consumos("+id_provincia+","+
		id_distrito+","+first_cond+","+second_cond+","+first_param+","+second_param+","+op+","+anio+","+mes+")";

	conx.conexion.query(query,{
		type: conx.Sequelize.QueryTypes.SELECT,
		raw: false
	}).then(function(results){
		res.write(JSON.stringify(results));		
		res.end();
	});
}

function analisisConsumosMedidor(id_provincia,id_distrito,num_medidor,anio,mes,res,conx,nunjucks){
	//VALIDACION
	var rpta = validaciones.analisisConsumosMedidorValidacion(num_medidor,anio,mes);
	if(rpta != 'OK'){
		utilidades.comunicarError(res,rpta);
		return false;
	}
	//CONSULTA
	var query = "select * from public.f_analisis_consumos_medidor("+id_provincia+","+
		id_distrito+",'"+num_medidor+"',"+anio+","+mes+")";

	conx.conexion.query(query,{
		type: conx.Sequelize.QueryTypes.SELECT,
		raw: false
	}).then(function(results){
		//ENVIO DE DATOS AL CLIENTE
		res.write(JSON.stringify(results));		
		res.end();
	});
}

function analisisSocialHtml(id_provincia,id_distrito,id_tipserv,id_tipconst,id_tipprop,id_estpre,id_sitcnag,res,conx,nunjucks){

	//VALIDACION
	var sum = id_tipserv+id_tipconst+id_tipprop+id_estpre+id_sitcnag;
	if(sum == 0){
		utilidades.comunicarError(res,"No se pueden hacer consultas sin elegir al menos un criterio");
		return false;
	} 

	var query = "select f_getprovincia("+id_provincia+") as provincia,f_getdistrito("+id_provincia+","+id_distrito+") as distrito,"+
	"f_getdescobjeto_descampo('"+id_tipserv+"','id_tipo_servicio_t') as tipserv,"+
	"f_getdescobjeto_descampo('"+id_tipconst+"','id_tipo_construccion_t') as tipconst,"+
	"f_getdescobjeto_descampo('"+id_tipprop+"','id_tipo_propiedad_t') as tipprop,"+
	"f_getdescobjeto_descampo('"+id_estpre+"','id_estado_predio_t') as estpre,"+
	"f_getdescobjeto_descampo('"+id_sitcnag+"','id_situacion_conagua_t') as sitconag";

	conx.conexion.query(query,{
		type: conx.Sequelize.QueryTypes.SELECT,
		raw: false
	}).then(function(results){

		var datos = {
			provincia:results[0].provincia,
			distrito:results[0].distrito,
			tipo_servicio: results[0].tipserv,
			tipo_construccion: results[0].tipconst,
			tipo_propiedad: results[0].tipprop,
			estado_predio: results[0].estpre,
			situacion_conagua: results[0].sitconag,
			id_prov: id_provincia,
			id_dist: id_distrito,
			id_tipo_servicio: id_tipserv,
			id_tipo_construccion: id_tipconst,
			id_tipo_propiedad: id_tipprop,
			id_estado_predio: id_estpre,
			id_situacion_conagua: id_sitcnag			
		};		
		res.write(nunjucks.render("resultados_analisis_social.html",datos));		
		res.end();
	});
}

function analisisSocial(id_provincia,id_distrito,id_tipserv,id_tipconst,id_tipprop,id_estpre,id_sitcnag,res,conx,nunjucks){

	//VALIDACION
	var sum = id_tipserv+id_tipconst+id_tipprop+id_estpre+id_sitcnag;
	if(sum == 0){
		utilidades.comunicarError(res,"No se pueden hacer consultas sin elegir al menos un criterio");
		return false;
	}

	//CONSULTA
	var query = "select * from public.f_analisis_social("+id_provincia+","+id_distrito+","+id_tipserv+","+
		id_tipconst+","+id_tipprop+","+id_estpre+","+id_sitcnag+")";

	conx.conexion.query(query,{
		type: conx.Sequelize.QueryTypes.SELECT,
		raw: false
	}).then(function(results){
		//ENVÍO DE RESULTADOS
		res.write(JSON.stringify(results));		
		res.end();
	});
}

function analisisConexionHtml(id_provincia,id_distrito,id_diconagua,id_matconagua,id_sitconagua,feci_conagua,fecf_conagua,
	id_dicodesa,id_matcodesa,id_sitcodesa,feci_codesa,fecf_codesa,res,conx,nunjucks){

	//VALIDACION
	var sum = id_diconagua+id_matconagua+id_sitconagua+id_dicodesa+id_matcodesa+id_sitcodesa;

	if(sum == 0 && feci_conagua.length == 0 && fecf_conagua.length == 0 && feci_codesa.length == 0 && fecf_codesa.length == 0){
		utilidades.comunicarError(res,"No se pueden hacer consultas sin elegir al menos una condición de busqueda");
		return false;
	}	

	//CONSULTA
	var query = "select f_getprovincia("+id_provincia+") as provincia,f_getdistrito("+id_provincia+","+id_distrito+") as distrito,"
	+"f_getdescobjeto_descampo('"+id_diconagua+"','id_diametro_conagua_t') as diconagua,"
	+"f_getdescobjeto_descampo('"+id_matconagua+"','id_material_conagua_t') as matconagua,"
	+"f_getdescobjeto_descampo('"+id_sitconagua+"','id_situacion_conagua_t') as sitconagua,"
	+"f_getdescobjeto_descampo('"+id_dicodesa+"','id_diametro_codesa_t') as dicodesa,"
	+"f_getdescobjeto_descampo('"+id_matcodesa+"','id_material_condesa_t') as matcodesa,"
	+"f_getdescobjeto_descampo('"+id_sitcodesa+"','id_situacion_conagua_t') as sitcodesa";

	conx.conexion.query(query,{
		type: conx.Sequelize.QueryTypes.SELECT,
		raw: false
	}).then(function(results){

		var datos = {
			provincia:results[0].provincia,
			distrito:results[0].distrito,
			diametro_conagua: results[0].diconagua,
			material_conagua: results[0].matconagua,
			situacion_conagua: results[0].sitconagua,
			id_diametro_conagua: id_diconagua,
			id_material_conagua: id_matconagua,
			id_situacion_conagua: id_sitconagua,
			fechai_conagua: feci_conagua,
			fechaf_conagua: fecf_conagua,
			diametro_codesa: results[0].dicodesa,
			material_codesa: results[0].matcodesa,
			situacion_codesa: results[0].sitcodesa,
			id_diametro_codesa: id_dicodesa,
			id_material_codesa: id_matcodesa,
			id_situacion_codesa: id_sitcodesa,
			fechai_codesa:feci_codesa,
			fechaf_codesa:fecf_codesa,
			id_prov: id_provincia,
			id_dist: id_distrito		
		};		
		res.write(nunjucks.render("resultados_analisis_conexion.html",datos));		
		res.end();
	});

}

function analisisConexion(id_provincia,id_distrito,id_diconagua,id_matconagua,id_sitconagua,feci_conagua,fecf_conagua,
	id_dicodesa,id_matcodesa,id_sitcodesa,feci_codesa,fecf_codesa,res,conx,nunjucks){

	//VALIDACION
	var sum = id_diconagua+id_matconagua+id_sitconagua+id_dicodesa+id_matcodesa+id_sitcodesa;

	if(sum == 0 && feci_conagua.length == 0 && fecf_conagua.length == 0 && feci_codesa.length == 0 && fecf_codesa.length == 0){
		utilidades.comunicarError(res,"No se pueden hacer consultas sin elegir al menos una condición de busqueda");
		return false;
	}

	//SE DA FORMATO A ALGUNOS PARÁMETROS PARA Q TENGAN EL ADECUADO ANTES DE HACER LA CONSULTA
	if(!feci_conagua) feci_conagua = '';
	if(!fecf_conagua) fecf_conagua = '';
	if(!feci_codesa) feci_codesa = '';
	if(!fecf_codesa) fecf_codesa = '';

	//CONSULTA
	var query = "select * from public.f_analisis_conexion("+id_provincia+", "+id_distrito+", "+id_diconagua+", "+id_matconagua+", "+
		id_sitconagua+", '"+feci_conagua+"', '"+fecf_conagua+"', "+id_dicodesa+", "+id_matcodesa+", "+id_sitcodesa+", '"+feci_codesa+"', '"+
		fecf_codesa+"')";

	conx.conexion.query(query,{
		type: conx.Sequelize.QueryTypes.SELECT,
		raw: false
	}).then(function(results){
		//ENVÍO DE RESULTADOS		
		res.write(JSON.stringify(results));		
		res.end();
	});
}

function analisisConexionCoords(id_provincia,id_distrito,id_diconagua,id_matconagua,id_sitconagua,feci_conagua,fecf_conagua,
	id_dicodesa,id_matcodesa,id_sitcodesa,feci_codesa,fecf_codesa,res,conx,nunjucks){

	//VALIDACION
	var sum = id_diconagua+id_matconagua+id_sitconagua+id_dicodesa+id_matcodesa+id_sitcodesa;

	if(sum == 0 && feci_conagua.length == 0 && fecf_conagua.length == 0 && feci_codesa.length == 0 && fecf_codesa.length == 0){
		utilidades.comunicarError(res,"No se pueden hacer consultas sin elegir al menos una condición de busqueda");
		return false;
	}

	//SE DA FORMATO A ALGUNOS PARÁMETROS PARA Q TENGAN EL ADECUADO ANTES DE HACER LA CONSULTA
	if(!feci_conagua) feci_conagua = '';
	if(!fecf_conagua) fecf_conagua = '';
	if(!feci_codesa) feci_codesa = '';
	if(!fecf_codesa) fecf_codesa = '';

	//CONSULTA
	var query = "select * from public.f_analisis_conexion_coords("+id_provincia+", "+id_distrito+", "+id_diconagua+", "+id_matconagua+", "+
		id_sitconagua+", '"+feci_conagua+"', '"+fecf_conagua+"', "+id_dicodesa+", "+id_matcodesa+", "+id_sitcodesa+", '"+feci_codesa+"', '"+
		fecf_codesa+"')";

	conx.conexion.query(query,{
		type: conx.Sequelize.QueryTypes.SELECT,
		raw: false
	}).then(function(results){
		//ENVÍO DE RESULTADOS		
		res.write(JSON.stringify(results));		
		res.end();
	});
}

//CONSULTAS A LAS TABLAS DE SISGECO
function datosBasicosFichaCatSisgeco(nro_suministro,res,conx,nunjucks){

	var query = "select * from public.f_getdatosbasicos_ficha_cat_sisgeco("+nro_suministro+")";

	conx.conexion.query(query,{
		type: conx.Sequelize.QueryTypes.SELECT,
		raw: false
	}).then(function(results){
		if(!results[0]){
			utilidades.comunicarError(res,"No se encontraron datos del usuario");
			return false;
		}
		res.write(nunjucks.render("datos_basicos_ficha_catastral_sisgeco.html",results[0]));			
		res.end();
	});
}

function datosPropiedadFichaCatSisgeco(nro_suministro,res,conx,nunjucks){

	var query = "select * from public.f_getdatospropiedad_ficha_cat_sisgeco("+nro_suministro+")";

	conx.conexion.query(query,{
		type: conx.Sequelize.QueryTypes.SELECT,
		raw: false
	}).then(function(results){
		if(!results[0]){
			utilidades.comunicarError(res,"No se encontraron datos del usuario");
			return false;
		}	
		res.write(nunjucks.render("datos_propiedad_ficha_catastral_sisgeco.html",results[0]));			
		res.end();
	});
}

function verConexionAgua(nro_suministro,res,conx,nunjucks){

	var query = "select * from public.f_getconexionagua_ficha_cat_sisgeco("+nro_suministro+")";

	conx.conexion.query(query,{
		type: conx.Sequelize.QueryTypes.SELECT,
		raw: false
	}).then(function(results){
		if(!results[0]){
			utilidades.comunicarError(res,"No se encontraron datos del usuario");
			return false;
		}
		res.write(nunjucks.render("conexion_agua_ficha_catastral_sisgeco.html",results[0]));			
		res.end();
	});
}

function verConexionDesague(nro_suministro,res,conx,nunjucks){
	var query = "select * from public.f_getconexiondesague_ficha_cat_sisgeco("+nro_suministro+")";

	conx.conexion.query(query,{
		type: conx.Sequelize.QueryTypes.SELECT,
		raw: false
	}).then(function(results){
		if(!results[0]){
			utilidades.comunicarError(res,"No se encontraron datos del usuario");
			return false;
		}
		res.write(nunjucks.render("conexion_desague_ficha_catastral_sisgeco.html",results[0]));			
		res.end();
	});
}

function datosComplemFichaCatSisgeco(nro_suministro,res,conx,nunjucks){
	var query = "select * from public.f_getdatoscomplem_ficha_cat_sisgeco("+nro_suministro+")";

	conx.conexion.query(query,{
		type: conx.Sequelize.QueryTypes.SELECT,
		raw: false
	}).then(function(results){
		if(!results[0]){
			utilidades.comunicarError(res,"No se encontraron datos del usuario");
			return false;
		}
		res.write(nunjucks.render("datos_complementarios_ficha_catastral_sisgeco.html",results[0]));			
		res.end();
	});
}

function datosMedidorFichaCatSisgeco(nro_suministro,res,conx,nunjucks){

	var query = "select * from public.f_getdatosmedidor_ficha_cat_sisgeco("+nro_suministro+")";

	conx.conexion.query(query,{
		type: conx.Sequelize.QueryTypes.SELECT,
		raw: false
	}).then(function(results){
		if(!results[0]){
			utilidades.comunicarError(res,"No se encontraron datos del usuario");
			return false;
		}
		res.write(nunjucks.render("datos_medidor_ficha_catastral_sisgeco.html",results[0]));			
		res.end();
	});
}

module.exports.getCoordsByNroSuministro = getCoordsByNroSuministro;
module.exports.verFichaCatastral = verFichaCatastral;
module.exports.verDatosBasicosFichaCat = verDatosBasicosFichaCat;
module.exports.verDatosPropiedadFichaCat = verDatosPropiedadFichaCat;
module.exports.verConexAguaFichaCat = verConexAguaFichaCat;
module.exports.verConexDesagueFichaCat = verConexDesagueFichaCat;
module.exports.verValoresMinFichaCat = verValoresMinFichaCat;
module.exports.verDatosComplemFichaCat = verDatosComplemFichaCat;
module.exports.verInformacionGeograficaFichaCat = verInformacionGeograficaFichaCat;
module.exports.verCroquisFichaCat = verCroquisFichaCat;
module.exports.verConexionAgua = verConexionAgua;
module.exports.verConexionDesague = verConexionDesague;
module.exports.getCoordsByCodCatastral = getCoordsByCodCatastral;
module.exports.verDetalleFactura = verDetalleFactura;
module.exports.analisisUsuarios = analisisUsuarios;
module.exports.analisisUsuariosHtml = analisisUsuariosHtml;
module.exports.analisisDeudaHtml = analisisDeudaHtml;
module.exports.analisisDeuda = analisisDeuda;
module.exports.analisisConsumosHtml = analisisConsumosHtml;
module.exports.analisisConsumos = analisisConsumos;
module.exports.analisisConsumosMedidor = analisisConsumosMedidor;
module.exports.datosBasicosFichaCatSisgeco = datosBasicosFichaCatSisgeco;
module.exports.verFichaCatastralSuministro = verFichaCatastralSuministro;
module.exports.datosPropiedadFichaCatSisgeco = datosPropiedadFichaCatSisgeco;
module.exports.datosComplemFichaCatSisgeco = datosComplemFichaCatSisgeco;
module.exports.datosMedidorFichaCatSisgeco = datosMedidorFichaCatSisgeco;
module.exports.analisisSocialHtml = analisisSocialHtml;
module.exports.analisisSocial = analisisSocial;
module.exports.analisisConexionHtml = analisisConexionHtml;
module.exports.analisisConexion = analisisConexion;