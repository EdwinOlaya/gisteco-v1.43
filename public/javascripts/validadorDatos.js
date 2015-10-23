//
var DATA_PARSER = DATA_PARSER || {};

//FUNCTION
DATA_PARSER.esUnNumSuministroValido = function(nro_suministro){

	var regex = /^\d{1,8}$/;

	return regex.test(nro_suministro);	
}

DATA_PARSER.esUnCodCatastralValido = function(preregion,prezona,presector,premzn,prelote){

	var regex = /^\d{1,6}$/;

	return regex.test(preregion) && regex.test(prezona) && regex.test(presector) && regex.test(premzn) && regex.test(prelote);
}
DATA_PARSER.esUnaManzana = function(preregion,prezona,presector,premzn,prelote){
	var regex = /^\d{1,6}$/;

	return regex.test(preregion) && regex.test(prezona) && regex.test(presector) && regex.test(premzn) && prelote == "";
}
DATA_PARSER.esReal = function(numero){
	var regex = /^\d+((.)\d{1,})?$/;
	return regex.test(numero);
}
DATA_PARSER.esEntero = function(numero){
	var regex = /^\d+$/;
	return regex.test(numero);
}
DATA_PARSER.esAnio = function(anio){
	var regex = /^\d{4}$/;
	return regex.test(anio);
}
DATA_PARSER.esMes = function(mes){
	var regex = /^(([1][0-2]?)|[0-9])$/;
	return regex.test(mes);
}
DATA_PARSER.esUnNombreValido = function(nombre){	
	var regex = /^([^\x00-\x7F]|[A-Za-z])+(( ){1}([^\x00-\x7F]|[A-Za-z])*)*$/;
	return regex.test(nombre);
}
DATA_PARSER.numericInputValidation = function(charStr){
	return /\d/.test(charStr);
}
DATA_PARSER.textInputValidation = function(charStr){	
	return /([^\x00-\x7F]|[A-Za-z ])/.test(charStr);
}
DATA_PARSER.alfaNumericInputValidation = function(charStr) {
	return /\d|[A-Za-z]/.test(charStr);
}