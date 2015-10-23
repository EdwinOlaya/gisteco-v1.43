//abstracción del área de cobranzas
var COBRANZAS = COBRANZAS || {};

//FUNCTIONES

COBRANZAS.realizarAnalisisDeDeuda = function(id_prov,id_dist,id_primera_cond_deuda,id_segunda_cond_deuda,primer_param_deuda,segundo_param_deuda,operador,min_cant_recibos,max_cant_recibos,anio,mes){

	//VALIDACION
	if(!CONSULTAS_PARSER.validarAnalisisDeudas(id_primera_cond_deuda,id_segunda_cond_deuda,primer_param_deuda,segundo_param_deuda,operador,min_cant_recibos,max_cant_recibos,anio,mes)) {return false;}

	//limpiar posibles mensajes anteriores
	$("#myModal .msj").html("");

	WREF = window.open("/analisisDeudaHtml?id_provincia="+id_prov+"&id_distrito="+
		id_dist+"&primera_condicion_deuda="+id_primera_cond_deuda+"&segunda_condicion_deuda="+id_segunda_cond_deuda+"&primer_parametro_deuda="
		+primer_param_deuda+"&segundo_parametro_deuda="+segundo_param_deuda+"&operador="+operador+"&min_cant_recibos="+min_cant_recibos
		+"&max_cant_recibos="+max_cant_recibos+"&anio="+anio+"&mes="+mes+"","Busqueda",'width='+ancho_ventana_analisis+',height='+alto_ventana_analisis);
    if(!WREF.opener){ WREF.opener = this.window; }
}

