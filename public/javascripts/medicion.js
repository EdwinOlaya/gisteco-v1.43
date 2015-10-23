//
var MEDICION = MEDICION || {};

//FUNCIONES
MEDICION.realizarAnalisisDeConsumos = function(id_prov,id_dist,id_primera_cond_consumo,id_segunda_cond_consumo,primer_param_consumo,segundo_param_consumo,operador,anio,mes,numero_medidor,filtro){
	
	//VALIDACION ACORDE A UNA CONSULTA POR CONSUMO
	if(!CONSULTAS_PARSER.validarAnalisisConsumos(id_primera_cond_consumo,id_segunda_cond_consumo,primer_param_consumo,segundo_param_consumo,operador,anio,mes,numero_medidor,filtro)) {return false;}

	//limpiar posibles mensajes anteriores
	$("#myModal .msj").html("");

	WREF = window.open("/analisisConsumosHtml?id_provincia="+id_prov+"&id_distrito="+
		id_dist+"&primera_condicion_consumo="+id_primera_cond_consumo+"&segunda_condicion_consumo="+id_segunda_cond_consumo+"&primer_parametro_consumo="
		+primer_param_consumo+"&segundo_parametro_consumo="+segundo_param_consumo+"&operador="+operador+
		"&anio="+anio+"&mes="+mes+"&numero_medidor="+numero_medidor
		+"&filtro="+filtro+"","Busqueda",'width='+ancho_ventana_analisis+',height='+alto_ventana_analisis);
    if(!WREF.opener){ WREF.opener = this.window; }
}