var express = require("express");
var nunjucks = require("nunjucks");
var bodyParser = require("body-parser");//para poder leer los parametros POST
var cliente = require("./modelos/cliente.js");
var sisgeco = require("./modelos/sisgeco.js");
var gisteco = require("./modelos/gisteco.js");
var analisis = require("./modelos/analisis.js");
var filtros = require("./modulos/filtros.js");
var utilidades = require("./modulos/utilidades.js");
var conx = require("./modelos/conexion.js").conexion;
var request = require("request");
var expressSession = require("express-session");

var sesion = expressSession({
	//secret lo usa el servidor para genera un valor aleatoriao que asigna
	//a la cookie de sesion
	secret : "epsgrau@gis_2015.piura",
	// este parametro es el nombre de la cookie de session
	key : "sesionServidor",
	//son para que cree siempre una sesion nueva para el usuario
	resave : true,
	saveUninitialized : true,
	//configuramos el tiempo de la cookie de sesion
	cookie : {
		//max Age es el tiempo que dura la sesion de un usuario (milisegundos)
		//la cookie de sesion dura 30 dias!!!
		maxAge : 1000 * 60 * 15
	}
});

request.defaults({
	strictSSL: false, // allow us to use our self-signed cert for testing
   	rejectUnauthorized: false
});

var env = nunjucks.configure('vistas');//indica donde se encuentran las vistas

//UTILIDADES
env.addFilter("filtro_vacio",filtros.vacio);
env.addFilter("deuda_cond_msj",filtros.deuda_cond_msj);
env.addFilter("recibos_cond_msj",filtros.recibos_cond_msj);
env.addFilter("consumo_cond_msj",filtros.consumo_cond_msj);
env.addFilter("medidor_msj",filtros.medidor_msj);
env.addFilter("tipo_servicio_msj",filtros.tipo_servicio_msj);
env.addFilter("tipo_construccion_msj",filtros.tipo_construccion_msj);
env.addFilter("tipo_propiedad_msj",filtros.tipo_propiedad_msj);
env.addFilter("estado_predio_msj",filtros.estado_predio_msj);
env.addFilter("situacion_conagua_msj",filtros.situacion_conagua_msj);
env.addFilter("conexion_msj",filtros.conexion_msj);
env.addFilter("diametro_conexion_msj",filtros.diametro_conexion_msj);
env.addFilter("material_conexion_msj",filtros.material_conexion_msj);
env.addFilter("estado_conexion_msj",filtros.estado_conexion_msj);
env.addFilter("fecha_conexion_msj",filtros.fecha_conexion_msj);

var app = express();

app.use(express.static('vistas'));
app.use(express.static('public')); //necesario para poder cargar los archivos de estilos y scripts
//que están bajo la carpeta public
app.use(bodyParser.urlencoded({extended: false}));//para poder leer los parametros POST
app.use(sesion);

app.get("/",function(req,res){
	res.write(nunjucks.render("mapa.html"));
	res.end();
});

app.get("/verCliente",function(req,res){
	var nro_suministro = req.query.nro_suministro;
	gisteco.verCliente(nro_suministro,res,nunjucks);
});

//MODELO CLIENTE

app.get("/getCoordsByNroSuministro",function(req,res){
	var nro_suministro = req.query.nro_suministro;
	cliente.getCoordsByNroSuministro(nro_suministro,res,conx);	
});

app.get("/getCoordsByCodCatastral",function(req,res){	
	var preregion = req.query.preregion;
	var prezona = req.query.prezona;
	var presector = req.query.presector;
	var premanzana = req.query.premanzana;
	var prelote = req.query.prelote;
	cliente.getCoordsByCodCatastral(preregion,prezona,
		presector,premanzana,prelote,res,conx);	
});

app.post("/verFichaCatastral",function(req,res){
	var nro_ficha = req.body.nro_ficha;
	var id_provincia = req.body.id_provincia;
	var id_distrito = req.body.id_distrito;
	cliente.verFichaCatastral(id_provincia,id_distrito,nro_ficha,res,conx,nunjucks);
});

app.post("/verFichaCatastralSuministro",function(req,res){
	var suministro = req.body.nro_suministro;	
	cliente.verFichaCatastralSuministro(suministro,res,conx,nunjucks);
});

app.get("/verDatosBasicosFichaCat",function(req,res){
	var nro_ficha = req.query.nro_ficha;
	var id_provincia = req.query.id_provincia;
	var id_distrito = req.query.id_distrito;	
	cliente.verDatosBasicosFichaCat(id_provincia,id_distrito,nro_ficha,res,conx,nunjucks);
});

app.get("/verDatosPropiedadFichaCat",function(req,res){
	var nro_ficha = req.query.nro_ficha;
	var id_provincia = req.query.id_provincia;
	var id_distrito = req.query.id_distrito;
	cliente.verDatosPropiedadFichaCat(id_provincia,id_distrito,nro_ficha,res,conx,nunjucks);
});

app.get("/verConexAguaFichaCat",function(req,res){
	var nro_ficha = req.query.nro_ficha;
	var id_provincia = req.query.id_provincia;
	var id_distrito = req.query.id_distrito;
	cliente.verConexAguaFichaCat(id_provincia,id_distrito,nro_ficha,res,conx,nunjucks);
});

app.get("/verConexDesagueFichaCat",function(req,res){
	var nro_ficha = req.query.nro_ficha;
	var id_provincia = req.query.id_provincia;
	var id_distrito = req.query.id_distrito;
	cliente.verConexDesagueFichaCat(id_provincia,id_distrito,nro_ficha,res,conx,nunjucks);
});

app.get("/verValoresMinFichaCat",function(req,res){
	var nro_ficha = req.query.nro_ficha;
	var id_provincia = req.query.id_provincia;
	var id_distrito = req.query.id_distrito;
	cliente.verValoresMinFichaCat(id_provincia,id_distrito,nro_ficha,res,conx,nunjucks);
});

app.get("/verDatosComplemFichaCat",function(req,res){
	var nro_ficha = req.query.nro_ficha;
	var id_provincia = req.query.id_provincia;
	var id_distrito = req.query.id_distrito;
	cliente.verDatosComplemFichaCat(id_provincia,id_distrito,nro_ficha,res,conx,nunjucks);
});

app.get("/verInformacionGeograficaFichaCat",function(req,res){
	var nro_ficha = req.query.nro_ficha;
	var id_provincia = req.query.id_provincia;
	var id_distrito = req.query.id_distrito;
	cliente.verInformacionGeograficaFichaCat(id_provincia,id_distrito,nro_ficha,res,conx,nunjucks);
});

app.get("/verCroquisFichaCat",function(req,res){
	var nro_ficha = req.query.nro_ficha;
	var id_provincia = req.query.id_provincia;
	var id_distrito = req.query.id_distrito;
	cliente.verCroquisFichaCat(id_provincia,id_distrito,nro_ficha,res,conx,nunjucks);
});

app.get("/verCuentaCorriente",function(req,res){
	var nro_suministro = req.query.nro_suministro;	
	sisgeco.getCuentaCorriente(nro_suministro,res,conx,nunjucks);
});

app.get("/verLecturas",function(req,res){
	var nro_suministro = req.query.nro_suministro;	
	sisgeco.getLecturasConsumos(nro_suministro,res,conx,nunjucks);
});

app.get("/verFacturacion",function(req,res){
	var nro_suministro = req.query.nro_suministro;	
	sisgeco.verFacturacion(nro_suministro,res,nunjucks);
});

app.get("/verDetalleFactura",function(req,res){
	var id_recfac = req.query.id_recfac;
	console.log(id_recfac);
	cliente.verDetalleFactura(id_recfac,res,conx,nunjucks);
});

//INFORMACIÓN DE SISGECO
app.get("/datosBasicosFichaCatSisgeco",function(req,res){
	var nro_suministro = req.query.nro_suministro;
	cliente.datosBasicosFichaCatSisgeco(nro_suministro,res,conx,nunjucks);
});

app.get("/datosPropiedadFichaCatSisgeco",function(req,res){
	var nro_suministro = req.query.nro_suministro;
	cliente.datosPropiedadFichaCatSisgeco(nro_suministro,res,conx,nunjucks);
});

app.get("/verConexionAgua",function(req,res){
	var nro_suministro = req.query.nro_suministro;
	cliente.verConexionAgua(nro_suministro,res,conx,nunjucks);
});

app.get("/verConexionDesague",function(req,res){
	var nro_suministro = req.query.nro_suministro;
	cliente.verConexionDesague(nro_suministro,res,conx,nunjucks);
});

app.get("/datosComplemFichaCatSisgeco",function(req,res){
	var nro_suministro = req.query.nro_suministro;
	cliente.datosComplemFichaCatSisgeco(nro_suministro,res,conx,nunjucks);
});

app.get("/datosMedidorFichaCatSisgeco",function(req,res){
	var nro_suministro = req.query.nro_suministro;
	cliente.datosMedidorFichaCatSisgeco(nro_suministro,res,conx,nunjucks);
});

app.get("/analisisUsuarios",function(req,res){
	var id_provincia = req.query.id_provincia;
	var id_distrito = req.query.id_distrito;
	var nombre_titular = req.query.nombre_titular;
	var nro_suministro = req.query.nro_suministro;
	var filtro = req.query.filtro;
	cliente.analisisUsuarios(id_provincia,id_distrito,nombre_titular,nro_suministro,filtro,res,conx,nunjucks);
});

app.get("/analisisUsuariosHtml",function(req,res){
	var id_provincia = req.query.id_provincia;
	var id_distrito = req.query.id_distrito;
	var nombre_titular = req.query.nombre_titular;
	var nro_suministro = req.query.nro_suministro;
	var filtro = req.query.filtro;
	cliente.analisisUsuariosHtml(id_provincia,id_distrito,nombre_titular,nro_suministro,filtro,res,conx,nunjucks);
});

app.get("/analisisDeuda",function(req,res){
	var id_prov = req.query.id_provincia;
	var id_dist = req.query.id_distrito;
	var f_cond = req.query.primera_condicion_deuda;
	var s_cond = req.query.segunda_condicion_deuda;
	var f_param = req.query.primer_parametro_deuda;
	var s_param = req.query.segundo_parametro_deuda;
	var ope = req.query.operador;
	var min_c_recibos = req.query.min_cant_recibos;
	var max_c_recibos = req.query.max_cant_recibos;
	var anio = req.query.anio;
	var mes = req.query.mes;
	cliente.analisisDeuda(id_prov,id_dist,f_cond,s_cond,f_param,s_param,ope,min_c_recibos,max_c_recibos,anio,mes,res,conx,nunjucks);
});

app.get("/analisisDeudaHtml",function(req,res){
	var id_prov = req.query.id_provincia;
	var id_dist = req.query.id_distrito;
	var f_cond = req.query.primera_condicion_deuda;
	var s_cond = req.query.segunda_condicion_deuda;
	var f_param = req.query.primer_parametro_deuda;
	var s_param = req.query.segundo_parametro_deuda;
	var ope = req.query.operador;
	var min_c_recibos = req.query.min_cant_recibos;
	var max_c_recibos = req.query.max_cant_recibos;
	var anio = req.query.anio;
	var mes = req.query.mes;
	cliente.analisisDeudaHtml(id_prov,id_dist,f_cond,s_cond,f_param,s_param,ope,min_c_recibos,max_c_recibos,anio,mes,res,conx,nunjucks);
});

app.get("/analisisConsumosHtml",function(req,res){
	var id_prov = req.query.id_provincia;
	var id_dist = req.query.id_distrito;
	var f_cond = req.query.primera_condicion_consumo;
	var s_cond = req.query.segunda_condicion_consumo;
	var f_param = req.query.primer_parametro_consumo;
	var s_param = req.query.segundo_parametro_consumo;
	var ope = req.query.operador;
	var anio = req.query.anio;
	var mes = req.query.mes;
	var medidor = req.query.numero_medidor;
	var filtro = req.query.filtro;	
	cliente.analisisConsumosHtml(id_prov,id_dist,f_cond,s_cond,f_param,s_param,ope,anio,mes,medidor,filtro,res,conx,nunjucks);
});

app.get("/analisisConsumos",function(req,res){
	var id_prov = req.query.id_provincia;
	var id_dist = req.query.id_distrito;
	var f_cond = req.query.primera_condicion_consumo;
	var s_cond = req.query.segunda_condicion_consumo;
	var f_param = req.query.primer_parametro_consumo;
	var s_param = req.query.segundo_parametro_consumo;
	var ope = req.query.operador;
	var anio = req.query.anio;
	var mes = req.query.mes;	
	cliente.analisisConsumos(id_prov,id_dist,f_cond,s_cond,f_param,s_param,ope,anio,mes,res,conx,nunjucks); 
});

app.get("/analisisConsumosMedidor",function(req,res){
	var id_prov = req.query.id_provincia;
	var id_dist = req.query.id_distrito;	
	var medidor = req.query.numero_medidor;
	var anio = req.query.anio;
	var mes = req.query.mes;	
	cliente.analisisConsumosMedidor(id_prov,id_dist,medidor,anio,mes,res,conx,nunjucks); 
});

app.get("/analisisSocialHtml",function(req,res){
	var id_prov = req.query.id_provincia;
	var id_dist = req.query.id_distrito;
	var id_tipserv = req.query.id_tipo_servicio;
	var id_tipconst = req.query.id_tipo_construccion;
	var id_tipprop = req.query.id_tipo_propiedad;
	var id_estpre = req.query.id_estado_predio;
	var id_sitcnag = req.query.id_situacion_conagua;
	cliente.analisisSocialHtml(id_prov,id_dist,id_tipserv,id_tipconst,id_tipprop,id_estpre,id_sitcnag,res,conx,nunjucks);
});

app.get("/analisisSocial",function(req,res){
	var id_prov = req.query.id_provincia;
	var id_dist = req.query.id_distrito;
	var id_tipserv = req.query.id_tipo_servicio;
	var id_tipconst = req.query.id_tipo_construccion;
	var id_tipprop = req.query.id_tipo_propiedad;
	var id_estpre = req.query.id_estado_predio;
	var id_sitcnag = req.query.id_situacion_conagua;
	cliente.analisisSocial(id_prov,id_dist,id_tipserv,id_tipconst,id_tipprop,id_estpre,id_sitcnag,res,conx,nunjucks);
});

app.get("/analisisConexionHtml",function(req,res){
	var id_prov = req.query.id_provincia;
	var id_dist = req.query.id_distrito;
	var id_diconagua = req.query.id_diametro_conagua;
	var id_matconagua = req.query.id_material_conagua;
	var id_sitconagua = req.query.id_situacion_conagua;
	var feci_conagua = req.query.fechai_conagua;
	var fecf_conagua = req.query.fechaf_conagua;
	var id_dicodesa = req.query.id_diametro_codesa;
	var id_matcodesa = req.query.id_material_codesa;
	var id_sitcodesa = req.query.id_situacion_codesa;
	var feci_codesa = req.query.fechai_codesa;
	var fecf_codesa = req.query.fechaf_codesa;
	cliente.analisisConexionHtml(id_prov,id_dist,id_diconagua,id_matconagua,id_sitconagua,feci_conagua,fecf_conagua,
	id_dicodesa,id_matcodesa,id_sitcodesa,feci_codesa,fecf_codesa,res,conx,nunjucks);
});

app.get("/analisisConexion",function(req,res){
	var id_prov = req.query.id_provincia;
	var id_dist = req.query.id_distrito;
	var id_diconagua = req.query.id_diametro_conagua;
	var id_matconagua = req.query.id_material_conagua;
	var id_sitconagua = req.query.id_situacion_conagua;
	var feci_conagua = req.query.fechai_conagua;
	var fecf_conagua = req.query.fechaf_conagua;
	var id_dicodesa = req.query.id_diametro_codesa;
	var id_matcodesa = req.query.id_material_codesa;
	var id_sitcodesa = req.query.id_situacion_codesa;
	var feci_codesa = req.query.fechai_codesa;
	var fecf_codesa = req.query.fechaf_codesa;
	cliente.analisisConexion(id_prov,id_dist,id_diconagua,id_matconagua,id_sitconagua,feci_conagua,fecf_conagua,
	id_dicodesa,id_matcodesa,id_sitcodesa,feci_codesa,fecf_codesa,res,conx,nunjucks);
});

//AUXILIAR

app.get("/vista",function(req,res){
	res.write(nunjucks.render("vista_actual.html"));
	res.end();
});

//MODELO SISGECO

app.get("/getCantClientesActivos",function(req,res){
	sisgeco.getCantClientesActivos(res,conx);
});

app.get("/distanciaTotalRedAgua",function(req,res){
	sisgeco.distanciaTotalRedAgua(res,conx);
});

app.get("/distanciaTotalRedDesague",function(req,res){
	sisgeco.distanciaTotalRedDesague(res,conx);
});

//ANALISIS

app.get("/analisisRedAgua",function(req,res){
	var coords = req.query.coordenadas;
	analisis.analisisRedAgua(coords,res,conx,nunjucks);
});

app.get("/analisisRedAguaHTML",function(req,res){	
	analisis.analisisRedAguaHTML(res,conx,nunjucks);
});

app.get("/analisisEspacialClientes",function(req,res){
	var coords = req.query.coordenadas;
	analisis.analisisEspacialClientes(coords,res,conx,nunjucks);
});

app.get("/analisisEspacialClientesHTML",function(req,res){	
	analisis.analisisEspacialClientesHTML(res,conx,nunjucks);
});

//OTRAS FUNCIONALIDADES

app.get("/getDistritosFromProvincia",function(req,res){
	var id_provincia = req.query.id_provincia;
	sisgeco.getDistritosFromProvincia(id_provincia,res,conx,nunjucks);
});

app.get("/login", function(req, res){
	res.write(nunjucks.render("login.html"));
	res.end();
});

app.post("/autenticar",function(req, res){
	var usuario = req.body.usuario;
	var password =  req.body.password;
	if(usuario=="edwin"  && password=="eroo_eroo_luana"){
		//si el usuario existe creamos una session usuarioLogeado
		req.session.usuarioLogeado = {
			id: usuario,
			password: password
		};
		res.send("<a href='/vista'>vista</a>");
		
	}
	else{
		res.write(nunjucks.render("login.html",{error:true}));
		res.end();
	}

});

function validarSesion(req, res, siguienteFuncion) {
	
	//keyword es de javascript y de hecho les sirve para javascript
	//del lado web como del lado de node.js
	//SIRVE PARA MARCAR BREAKPOINTS
	debugger;

	//console.log("validando sesion del usuario");
	//protegemos rutas checando si existe en la sesion el objeto
	//usuarioLogeado
	//tenemos que usar un keyword de javscript que se llama typeof
	if ( typeof req.session.usuarioLogeado === "undefined") {
		//SI EL USUARIO NO SE A LOGEADO NO LO DEJAMOS PASAR
		//Y LO REENVIAMOS A /login
		res.redirect("/login");
	} else {
		//SI YA ESTA LOGEADO
		siguienteFuncion();
	}
}

var server = app.listen(7777, function(){
	var host = server.address().address;
	var port = server.address().port;
	console.log("El servidor ha sido iniciado en http://%s:%s",host,port);
});