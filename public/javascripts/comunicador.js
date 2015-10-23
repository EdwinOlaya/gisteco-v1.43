//
var COMUNICADOR = COMUNICADOR || {};

//
COMUNICADOR.mostrarMensajeDeEspera = function(){
	$("#myModal .msj").html("<img src='icons/loading.gif' class = 'loading-gif'><span>Cargando...</span>");	
}
COMUNICADOR.quitarMensajeDeEspera = function(){
	$("#myModal .msj").html("");
}
COMUNICADOR.mostrarAviso = function(mensaje){
	$("#myModal .msj").html("<p>"+mensaje+"</p>");
}
COMUNICADOR.mostrarAvisoDeAdvertencia = function(mensaje){
	$("#myModal .msj").html("<p class = 'advertencia-msj'>"+mensaje+"</p>");
}