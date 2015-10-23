//DEPENDE DE LA LIBRERIA DE OPENLAYERS
var OBSERVADOR = OBSERVADOR || {};


OBSERVADOR.enfocar = function (x,y,zoom){	
	if(!x || !y){return false;}	
	vista.setCenter([x,y]);
	vista.setZoom(zoom);	
}

OBSERVADOR.verCliente = function (x,y,zoom){
	PINTOR.limpiarCapa(capaSeleccionObjetos);
	PINTOR.dibujarCirculo(capaSeleccionObjetos,x,y,4,cliente_seleccionado);		
	OBSERVADOR.enfocar(x,y,zoom);
	clientes.setVisible(true);
	$("#ver-gis-clientes").prop("checked",true);
}

OBSERVADOR.verManzana = function(coords,zoom){
	
	PINTOR.limpiarCapa(capaSeleccionObjetos);
	manzana = PINTOR.dibujarPoligono(capaSeleccionObjetos,coords,manzana_sombreada);
	extent = manzana.getExtent();
	OBSERVADOR.enfocar((extent[0]+extent[2])/2,(extent[1]+extent[3])/2,zoom);	
	manzanas.setVisible(true);
	$("#ver-gis-manzanas").prop("checked",true);
}