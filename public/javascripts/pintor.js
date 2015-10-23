//DEPENDE LA LIBRERÍA DE OPENLAYERS

var PINTOR = PINTOR || {}

//FUNCIONES

//capa tiene que ser instancia de ol.layer.Vector
PINTOR.dibujarMultiLinea = function(capa,puntos,estilo){	

	if(!(capa instanceof ol.layer.Vector)){
		console.log("No se permite hacer dibujos sobre capas que no sean instancias de ol.layer.Vector");
		return false;	
	} 

	var geom = new ol.geom.MultiLineString([]);
	
	for (var i = 0; i < puntos.length-1 ; i++) {		
		geom.appendLineString(new ol.geom.LineString([[puntos[i].x,puntos[i].y],[puntos[i+1].x,puntos[i+1].y]]));
	};

	//hasta aquí el objeto multilinea está creado
	var multilinea = new ol.Feature({
		geometry: geom	
	});	

	//el estilo para el objeto feature
	multilinea.setStyle(estilo);
	
	capa.getSource().addFeature(multilinea);

	return multilinea.getGeometry();
}

//capa tiene que ser instancia de ol.layer.Vector
PINTOR.dibujarCirculo = function(capa,x,y,radio,estilo){

	if(!(capa instanceof ol.layer.Vector)){
		console.log("No se permite hacer dibujos sobre capas que no sean instancias de ol.layer.Vector");
		return false;	
	}

	var circulo = new ol.Feature({
		geometry: new ol.geom.Circle([x,y],radio)		
	});	

	circulo.setStyle(estilo);

	capa.getSource().addFeature(circulo);

	return circulo.getGeometry();
}

//puntos es un objeto JSON
//capa tiene que ser instancia de ol.layer.Vector
PINTOR.dibujarPoligono = function(capa,puntos,estilo){	

	if(!(capa instanceof ol.layer.Vector)){
		console.log("No se permite hacer dibujos sobre capas que no sean instancias de ol.layer.Vector");
		return false;	
	}

	var puntos_aux = [puntos.length];	

	for (var i = 0; i < puntos.length; i++){
		puntos_aux[i] = [puntos[i].x,puntos[i].y];
	}

	var poligono = new ol.Feature({
		geometry: new ol.geom.Polygon([puntos_aux])
	});	

	poligono.setStyle(estilo);

	capa.getSource().addFeature(poligono);	

	return poligono.getGeometry();
}

PINTOR.limpiarCapa = function(capa){

	capa.getSource().clear(false);

}

PINTOR.limpiarMapa = function(){
	
	PINTOR.limpiarCapa(capaSeleccionObjetos);
	PINTOR.limpiarCapa(capaBusquedas);
	PINTOR.limpiarCapa(capaSeleccion);

}