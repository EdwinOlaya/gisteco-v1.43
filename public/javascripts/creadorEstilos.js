//DEPENDE DE LA LIBRERÍA DE OPENLAYERS

var CREADOR_ESTILOS = CREADOR_ESTILOS || {}; //NAMESPACE

//FUNCIONES

//color_border es un string en exadecimal
//ancho_border es un entero
//color_relleno es un string hexadecimal
CREADOR_ESTILOS.crearEstiloBasico1 = function(color_borde,ancho_borde,color_relleno,alpha){

	var estilo = null;
	var borde = CREADOR_ESTILOS.hexToRGB(color_borde);
	var relleno = CREADOR_ESTILOS.hexToRGB(color_relleno);

	estilo = new ol.style.Style({
		stroke: new ol.style.Stroke({
			color: [borde.r,borde.g,borde.b,alpha],
			width: ancho_borde
		}),
		fill: new ol.style.Fill({
			color: [relleno.r,relleno.g,relleno.b,alpha]
		})
	});	
	return estilo;

}

CREADOR_ESTILOS.crearEstiloBasico2 = function(color_borde,ancho_borde,alpha){

	var estilo = null;
	var borde = CREADOR_ESTILOS.hexToRGB(color_borde);

	estilo = new ol.style.Style({
		stroke: new ol.style.Stroke({
			color: [borde.r,borde.g,borde.b,alpha],
			width: ancho_borde
		})
	});
	return estilo;
}

CREADOR_ESTILOS.crearEstiloMultiLinea = function(color,ancho){	

	return crearEstiloBasico2(color,ancho);
}

CREADOR_ESTILOS.hexToRGB = function(hex){

	var color = {};
	color.r = parseInt(hex.substring(1,3),16);
	color.g = parseInt(hex.substring(3,5),16);
	color.b = parseInt(hex.substring(5,7),16);

	return color;
}