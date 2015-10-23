//DEPENDE DE LA EXISTENCIA DE DATA_PARSER

var CONSULTAS_PARSER = CONSULTAS_PARSER || {};

CONSULTAS_PARSER.validarAnalisisSocial = function(id_tipserv,id_tipconst,id_tipprop,id_estpre,id_sitcnag){

	var sum = parseFloat(id_tipserv)+parseFloat(id_tipconst)+parseFloat(id_tipprop)+parseFloat(id_estpre)+parseFloat(id_sitcnag);
	
	if(sum == 0){
		COMUNICADOR.mostrarAvisoDeAdvertencia("No se pueden hacer consultas sin elegir al menos un criterio");
		return false;
	}

	return true;
}

CONSULTAS_PARSER.validarAnalisisConsumos = function(id_primera_cond_consumo,id_segunda_cond_consumo,primer_param_consumo,segundo_param_consumo,operador,anio,mes,numero_medidor,filtro){

	if(filtro == '0'){

		if(id_primera_cond_consumo ==0 && id_segunda_cond_consumo == 0){
			COMUNICADOR.mostrarAvisoDeAdvertencia("No se pueden hacer consultas sin hacer al menos una restricción");
			return false;
		}
		if(id_primera_cond_consumo!=0){
			if(primer_param_consumo.length == 0){
				COMUNICADOR.mostrarAvisoDeAdvertencia("Falta el valor de la primera condición");
				return false;
			}
			if(!DATA_PARSER.esEntero(primer_param_consumo)){
				COMUNICADOR.mostrarAvisoDeAdvertencia("El valor de la primera condición debe ser un número");
				return false;
			}
		}
		
		if(id_segunda_cond_consumo!=0){
			if(segundo_param_consumo.length == 0){
				COMUNICADOR.mostrarAvisoDeAdvertencia("Falta el valor de la segunda condición");
				return false;
			}
			if(!DATA_PARSER.esEntero(segundo_param_consumo)){
				COMUNICADOR.mostrarAvisoDeAdvertencia("El valor de la segunda condición debe ser un número");
				return false;
			}
		}
		

		if(id_primera_cond_consumo == 0 && id_segunda_cond_consumo != 0){
			COMUNICADOR.mostrarAvisoDeAdvertencia("Error en el formato del filtro de consumo. No puede elegir la segunda condición sin elegir la primera");
			return false;
		}
	
	}
	//VALIDACIÓN DE ACUERDO A UNA CONSULTA POR NUMERO DE MEDIDOR
	else{		

		if(numero_medidor.length == 0){
			COMUNICADOR.mostrarAvisoDeAdvertencia("El campo número medidor no puede estar vació");
			return false;
		}		
	}

	if(anio.length == 0 || mes.length == 0 ){
		COMUNICADOR.mostrarAvisoDeAdvertencia("Los campos año y mes no pueden estar vacíos");
		return false;
	}

	if(!DATA_PARSER.esEntero(anio) || !DATA_PARSER.esEntero(mes)){
		COMUNICADOR.mostrarAvisoDeAdvertencia("Por favor, Ingrese valores correctos para año y mes");
		return false;
	}

	return true;
}

CONSULTAS_PARSER.validarAnalisisDeudas = function(id_primera_cond_deuda,id_segunda_cond_deuda,primer_param_deuda,segundo_param_deuda,operador,min_cant_recibos,max_cant_recibos,anio,mes){

	if(max_cant_recibos.length == 0 && min_cant_recibos.length == 0 &&
		id_primera_cond_deuda == 0 && id_segunda_cond_deuda == 0){
		COMUNICADOR.mostrarAvisoDeAdvertencia("Debe elegir al menos una condición para realizar la consulta");
		return false;
	}

	//VALIDACION DE LAS CONDICIONES DE DEUDAS
	if(id_primera_cond_deuda!=0){
		if(primer_param_deuda.length == 0){
			COMUNICADOR.mostrarAvisoDeAdvertencia("Falta el valor de la primera condición");
			return false;
		}
		if(!DATA_PARSER.esReal(primer_param_deuda)){
			COMUNICADOR.mostrarAvisoDeAdvertencia("El valor de la primera condición debe ser un número");
			return false;
		}
	}

	if(id_segunda_cond_deuda!=0){
		if(segundo_param_deuda.length == 0){
			COMUNICADOR.mostrarAvisoDeAdvertencia("Falta el valor de la segunda condición");
			return false;
		}
		if(!DATA_PARSER.esReal(segundo_param_deuda)){
			COMUNICADOR.mostrarAvisoDeAdvertencia("El valor de la segunda condición debe ser un número");
			return false;
		}
	}	

	if(id_primera_cond_deuda == 0 && id_segunda_cond_deuda != 0){
		COMUNICADOR.mostrarAvisoDeAdvertencia("Error en el formato del filtro de deuda. No puede elegir la segunda condición sin elegir la primera");
		return false;
	}	
	
	//VALIDACION DEL FORMATO DE LA CANTIDAD DE RECIBOS
	if(min_cant_recibos.length!=0 && !DATA_PARSER.esEntero(min_cant_recibos)){
		COMUNICADOR.mostrarAvisoDeAdvertencia("La cantidad mínima de recibos debe ser un número entero");
		return false;
	}

	if(max_cant_recibos.length!=0 && !DATA_PARSER.esEntero(max_cant_recibos)){
		COMUNICADOR.mostrarAvisoDeAdvertencia("La cantidad máxima de recibos debe ser un número entero");
		return false;
	}

	//VALIDACION DEL FORMATO DEL AÑO Y MES
	if(anio.length != 0 && !DATA_PARSER.esAnio(anio)){
		COMUNICADOR.mostrarAvisoDeAdvertencia("El año ingresado tiene un formato incorrecto");
		return false;
	}
	if(mes.length != 0 && !DATA_PARSER.esMes(mes)){
		COMUNICADOR.mostrarAvisoDeAdvertencia("El mes ingresado es incorrecto");
		return false;
	}

	return true;
}

CONSULTAS_PARSER.validarAnalisisUsuarios = function(nombre_tit,numero_suministro,filtro){


	if(filtro == 0) {

		if(nombre_tit.length == 0){
			COMUNICADOR.mostrarAvisoDeAdvertencia("El campo nombre no puede estar vació");
			return false;
		}
		if(!DATA_PARSER.esUnNombreValido(nombre_tit)){
			COMUNICADOR.mostrarAvisoDeAdvertencia("El nombre es incorrecto. Asegurese de que no tenga espacios en blancos al inicio o al final");
			return false;
		}
		return true;		
	}
	//VALIDACION DE ACUERDO A UNA CONSULTA POR NUMERO DE SUMINISTRO
	else{

		if(numero_suministro.length == 0){
			COMUNICADOR.mostrarAvisoDeAdvertencia("El campo número de inscripción no puede estar vació");
			return false;
		}

		if(!DATA_PARSER.esUnNumSuministroValido(numero_suministro)){
			COMUNICADOR.mostrarAvisoDeAdvertencia("El número de suministro debe tener solo dígitos, pero no más de 8");
			return false;
		}

		return true;
	}
}

CONSULTAS_PARSER.validarAnalisisConexion = function(id_diconagua,id_matconagua,id_sitconagua,feci_conagua,fecf_conagua,id_dicodesa,id_matcodesa,id_sitcodesa,feci_codesa,fecf_codesa){

	var sum = parseFloat(id_diconagua)+parseFloat(id_matconagua)+parseFloat(id_sitconagua)+
		parseFloat(id_dicodesa)+parseFloat(id_matcodesa)+parseFloat(id_sitcodesa);

	if(sum == 0 && feci_conagua.length == 0 && fecf_conagua.length == 0 && feci_codesa.length == 0 && fecf_codesa.length == 0){
		COMUNICADOR.mostrarAvisoDeAdvertencia("No se pueden hacer consultas sin elegir al menos una condición de busqueda");
		return false;
	}
	return true;
}