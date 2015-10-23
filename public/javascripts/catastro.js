var CATASTRO = CATASTRO || {};

//ANALISIS ESPACIALES

CATASTRO.realizarAnalisisEspacialUsuarios = function(){	

	WREF = window.open("/analisisEspacialClientesHTML","Análisis",'width='+ancho_ventana_analisis+',height='+alto_ventana_analisis);
    if(!WREF.opener){ WREF.opener = this.window; }

}

//FUNCIONES

CATASTRO.realizarAnalisisComercialSocial = function(id_prov,id_dist,id_tipserv,id_tipconst,id_tipprop,id_estpre,id_sitcnag){

	if(!CONSULTAS_PARSER.validarAnalisisSocial(id_tipserv,id_tipconst,id_tipprop,id_estpre,id_sitcnag)) {return false;}
	//limpiar posibles mensajes anteriores
	$("#myModal .msj").html("");

	WREF = window.open("/analisisSocialHtml?id_provincia="+id_prov+"&id_distrito="+
		id_dist+"&id_tipo_servicio="+id_tipserv+"&id_tipo_construccion="+id_tipconst+"&id_tipo_propiedad="
		+id_tipprop+"&id_estado_predio="+id_estpre+"&id_situacion_conagua="+id_sitcnag+"","Busqueda",'width='+ancho_ventana_analisis+',height='+alto_ventana_analisis);
    if(!WREF.opener){ WREF.opener = this.window; }
}

CATASTRO.realizarAnalisisDeConexion = function(id_prov,id_dist,id_diconagua,id_matconagua,id_sitconagua,feci_conagua,fecf_conagua,id_dicodesa,id_matcodesa,id_sitcodesa,feci_codesa,fecf_codesa){

	if(!CONSULTAS_PARSER.validarAnalisisConexion(id_diconagua,id_matconagua,id_sitconagua,feci_conagua,fecf_conagua,id_dicodesa,id_matcodesa,id_sitcodesa,feci_codesa,fecf_codesa)) {return false;}

	//limpiar posibles mensajes anteriores
	$("#myModal .msj").html("");
	
	WREF = window.open("/analisisConexionHtml?id_provincia="+id_prov+"&id_distrito="+
		id_dist+"&id_diametro_conagua="+id_diconagua+"&id_material_conagua="+id_matconagua+"&id_situacion_conagua="
		+id_sitconagua+"&fechai_conagua="+feci_conagua+"&fechaf_conagua="+fecf_conagua+"&id_diametro_codesa="+id_dicodesa
		+"&id_material_codesa="+id_matcodesa+"&id_situacion_codesa="+id_sitcodesa+"&fechai_codesa="+feci_codesa
		+"&fechaf_codesa="+fecf_codesa+"","Busqueda",'width='+ancho_ventana_analisis+',height='+alto_ventana_analisis);
    if(!WREF.opener){ WREF.opener = this.window; }
}

CATASTRO.realizarAnalisisDeUsuarios = function(id_prov,id_dist,nombre_tit,numero_suministro,filtro){	
	
	//VALIDACIONES
	if(!CONSULTAS_PARSER.validarAnalisisUsuarios(nombre_tit,numero_suministro,filtro)) {return false;}

	//LIMPIAR LOS POSIBLES MENSAJES ANTERIORES
	$("#myModal .msj").html("");

	WREF = window.open("/analisisUsuariosHtml?id_provincia="+id_prov+"&id_distrito="+
		id_dist+"&filtro="+filtro+"&nombre_titular="+nombre_tit+"&nro_suministro="+numero_suministro+"","Busqueda",'width='+ancho_ventana_analisis+',height='+alto_ventana_analisis);
    if(!WREF.opener){ WREF.opener = this.window; }
}

//busqueda y ubicación en el mapa de un cliente según número de suministro
CATASTRO.ubicarCliente = function(numero_suministro){
	//esta función busca un cliente por su número de ficha
	//y lo muestra en el mapa	

	if(!DATA_PARSER.esUnNumSuministroValido(numero_suministro)){
		COMUNICADOR.mostrarAvisoDeAdvertencia("El número de suministro no puede estar vacío, debe tener solo dígitos pero no más de 8");
		return true;
	}

	$.ajax({
		url: "/getCoordsByNroSuministro",
		data: {nro_suministro:numero_suministro},
		dataType: "json",
		beforeSend: COMUNICADOR.mostrarMensajeDeEspera,
		error: function(jqxhr){
			COMUNICADOR.mostrarAvisoDeAdvertencia(jqxhr.responseText);
		},
		success: function(data){
			COMUNICADOR.quitarMensajeDeEspera();

			if(!data.x){
				COMUNICADOR.mostrarAviso("No se encontró ningún cliente");
				return true;
			}	

			$("#myModal").modal('hide');
			
			OBSERVADOR.verCliente(data.x,data.y,19);//coordenadas y zoom

		}
	});
}
//búsqueda y ubicación del mapa de objeto (que puede ser cliente o manzana)
//según código catastral
CATASTRO.busquedaPorCodCat = function(pre_region,pre_zona,pre_sector,pre_manzana,pre_lote){
	//esta función busca un cliente por su numero de ficha
	//y lo muestra en el mapa

	if(!DATA_PARSER.esUnCodCatastralValido(pre_region,pre_zona,pre_sector,pre_manzana,pre_lote)){

		if(!DATA_PARSER.esUnaManzana(pre_region,pre_zona,pre_sector,pre_manzana,pre_lote)){
			mostrarAvisoDeAdvertencia("Los parámetros de busqueda son incorrectos o insuficientes");
			return false;
		}			
	}

	$.ajax({
		url: "/getCoordsByCodCatastral",
		data: {
			preregion:pre_region,
			prezona:pre_zona,
			presector:pre_sector,
			premanzana:pre_manzana,
			prelote:pre_lote
		},
		dataType: "json",
		beforeSend:	COMUNICADOR.mostrarMensajeDeEspera,
		error: function(jqxhr){
				COMUNICADOR.mostrarAvisoDeAdvertencia(jqxhr.responseText);
		},
		success: function(data){					
			COMUNICADOR.quitarMensajeDeEspera();
			
			if(!data[0].puntos && !data[0].x){
				COMUNICADOR.mostrarAviso("No se encontraron resultados. Intente una busqueda por número de suministro");
				return false;
			}

			$("#myModal").modal('hide');
			
			if(data[0].puntos){				
				//manzana
				var ptos = JSON.parse(data[0].puntos);
				OBSERVADOR.verManzana(ptos,17);
			}
			else if(data[0].x){				
				//es un cliente
				OBSERVADOR.verCliente(data[0].x,data[0].y,19);
			}	
		}
	});
}