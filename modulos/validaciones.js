function esUnNumSuministroValido(nro_suministro){

	var regex = /^\d{1,8}$/;

	//la validacion
	return regex.test(nro_suministro);	
}

function esUnCodCatastralValido(preregion,prezona,presector,premzn,prelote){

	var regex = /^\d{1,6}$/;

	//la validación

	return regex.test(preregion) && regex.test(prezona) && regex.test(presector) && regex.test(premzn) && regex.test(prelote);

}
function esUnaManzana(preregion,prezona,presector,premzn,prelote){
	var regex = /^\d{1,6}$/;

	//la validación

	return regex.test(preregion) && regex.test(prezona) && regex.test(presector) && regex.test(premzn) && prelote == "";
}
function esUnNombreValido(nombre){
	var regex = /^([^\x00-\x7F]|[A-Za-z])+(( ){1}([^\x00-\x7F]|[A-Za-z])*)*$/;
	return regex.test(nombre);
}
function esEntero(numero){
	var regex = /^\d+$/;
	return regex.test(numero);
}
function esReal(numero){
	var regex = /^\d+((.)\d{1,})?$/;
	return regex.test(numero);
}
function analisisUsuariosValidacion(nombre_tit,suministro,filtro){
	//VALIDACIONES

	//VALIDACIONES DE ACUERDO A UNA CONSULTA POR NOMBRE
	if(filtro == '0'){
		if(nombre_tit.length == 0){
			return "El campo nombre no puede estar vació";			
		}
		if(!esUnNombreValido(nombre_tit)){
			return "El nombre es incorrecto. Asegurese de que no tenga espacios en blancos al inicio o al final";			
		}
		return "OK";
	}
	//VALIDACIONES DE ACUERDO A UNA CONSULTA POR NUMERO DE SUMINISTRO
	else{		
		if(suministro.length == 0){
			return "El campo número de inscripción no puede estar vació";			
		}
		if(!esUnNumSuministroValido(suministro)) {		
			return "El número de suministro debe tener solo dígitos, pero no más de 8";			
		}
		return "OK";
	}
}

function analisisDeudaValidacion(id_primera_cond_deuda,id_segunda_cond_deuda,primer_param_deuda,segundo_param_deuda,min_cant_recibos,max_cant_recibos){

	if(max_cant_recibos.length == 0 && min_cant_recibos.length == 0 &&
		id_primera_cond_deuda == 0 && id_segunda_cond_deuda == 0){
		return "Debe elegir al menos una condición para realizar la consulta";		
	}

	//VALIDACION DE LAS CONDICIONES DE DEUDAS
	if(id_primera_cond_deuda!=0){
		if(primer_param_deuda.length == 0){
			return "Falta el valor de la primera condición";
		}
		if(!esReal(primer_param_deuda)){
			return "El valor de la primera condición debe ser un número";
		}
	}

	if(id_segunda_cond_deuda!=0){
		if(segundo_param_deuda.length == 0){
			return "Falta el valor de la segunda condición";
		}
		if(!esReal(segundo_param_deuda)){
			return "El valor de la segunda condición debe ser un número";
		}
	}	

	if(id_primera_cond_deuda == 0 && id_segunda_cond_deuda != 0){
		return "Error en el formato del filtro de deuda. No puede elegir la segunda condición sin elegir la primera";
	}	
	
	//VALIDACION DEL FORMATO DE LA CANTIDAD DE RECIBOS
	if(min_cant_recibos.length!=0 && !esEntero(min_cant_recibos)){
		return "La cantidad mínima de recibos debe ser un número entero";
	}

	if(max_cant_recibos.length!=0 && !esEntero(max_cant_recibos)){
		return "La cantidad máxima de recibos debe ser un número entero";
	}

	return "OK";
}

function analisisConsumosValidacion(id_primera_cond_consumo,id_segunda_cond_consumo,primer_param_consumo,segundo_param_consumo,anio,mes){

	if(id_primera_cond_consumo ==0 && id_segunda_cond_consumo == 0){
		return "No se pueden hacer consultas sin hacer al menos una restricción";
	}
	if(id_primera_cond_consumo!=0){
		if(primer_param_consumo.length == 0){
			return "Falta el valor de la primera condición";
		}
		if(!esEntero(primer_param_consumo)){
			return "El valor de la primera condición debe ser un número";
		}
	}
		
	if(id_segunda_cond_consumo!=0){
		if(segundo_param_consumo.length == 0){
			return "Falta el valor de la segunda condición";
		}
		if(!esEntero(segundo_param_consumo)){
			return "El valor de la segunda condición debe ser un número";
		}
	}

	if(id_primera_cond_consumo == 0 && id_segunda_cond_consumo != 0){
		return "Error en el formato del filtro de consumo. No puede elegir la segunda condición sin elegir la primera";
	}

	if(!anio || !mes){
		return "Los campos año y mes no pueden estar vacíos";
	}

	if(!esEntero(anio) || !esEntero(mes)){
		return "Por favor, Ingrese valores correctos para año y mes";
	}

	return "OK";
}

function analisisConsumosMedidorValidacion(numero_medidor,anio,mes){
	if(numero_medidor.length == 0){
		return "El campo número medidor no puede estar vació";
	}
	
	if(!anio || !mes){
		return "Los campos año y mes no pueden estar vacíos";
	}

	if(!esEntero(anio) || !esEntero(mes)){
		return "Por favor, Ingrese valores correctos para año y mes";
	}
	return "OK";
}

module.exports.esUnNumSuministroValido = esUnNumSuministroValido;
module.exports.esUnCodCatastralValido = esUnCodCatastralValido;
module.exports.esUnNombreValido = esUnNombreValido;
module.exports.analisisUsuariosValidacion = analisisUsuariosValidacion;
module.exports.analisisDeudaValidacion = analisisDeudaValidacion;
module.exports.analisisConsumosValidacion = analisisConsumosValidacion;
module.exports.analisisConsumosMedidorValidacion = analisisConsumosMedidorValidacion;
module.exports.esUnaManzana = esUnaManzana;