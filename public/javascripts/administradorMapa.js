//DEPENDE DE LA EXISTENCIA DE LA VARIABLE MAPA
var ADMIN_MAPA = ADMIN_MAPA || {};

//FUNCIONES

//esta función retorna la URL de la imagen (sección del mapa)
//definida como un rectángulo, definido a su vez por dos puntos en el
//sistema 3857
ADMIN_MAPA.createMapSelectionURL = function(start,end){
	//start and end are coordinates in the EPSG:3857 System

	var start_pixel = mapa.getPixelFromCoordinate(start);
	var end_pixel = mapa.getPixelFromCoordinate(end);
	var aux_coord;

	//prepare coordinates
	var xi = Math.round(start_pixel[0]);
	var yi = Math.round(start_pixel[1]);
	var xf = Math.round(end_pixel[0]);
	var yf = Math.round(end_pixel[1]);
	
	//
	if (xi > xf) {
		aux_coord = xi;
		xi = xf;
		xf = aux_coord;
	}
	if (yi > yf) {
		aux_coord = yi;
		yi = yf;
		yf = aux_coord;
	}

	//calculate width and heigh of the rectangle
	var width = Math.abs(xf-xi);
	var height = Math.abs(yf-yi);

	//get the Image The rectangle (which the coordinates define) keeps
	var canvas_s = document.getElementsByTagName('canvas')[0];
	var ctx_s =  canvas_s.getContext("2d");
	var imgData = ctx_s.getImageData(xi,yi,width,height);

	//repaint the image into a new canvas
	var canvas_t = document.createElement('canvas');
	//set width and height of the canvas target
	canvas_t.width = width;
	canvas_t.height = height;
	//
	var ctx_t = canvas_t.getContext("2d");
	ctx_t.putImageData(imgData,0,0);

	//get the Url of the canvas target where Image live
	var url = canvas_t.toDataURL();
	//$("#export-to-png > a").attr("href",url);	
	return url;
}

//Abre el cuadro de diálogo para imprimir una imagen (definida por su url)
ADMIN_MAPA.imprimirImagen = function(url_imagen){

    var printWindow = window.open('', 'Print Window','height=500,width=750');
    printWindow.document.write('<html><head><title>Print Window</title>');
    printWindow.document.write('</head><body ><img src=\'');
    printWindow.document.write(url_imagen);
    printWindow.document.write('\' /></body></html>');
    printWindow.document.close();
    printWindow.print();

}

//Abre el cuadro de dialogo para imprimir la captura realizada sobre el mapa
ADMIN_MAPA.imprimirCaptura = function(){
	ADMIN_MAPA.imprimirImagen(url_imagen_captura);
}

//
ADMIN_MAPA.realizarCaptura = function(){
	//remove singleclick listener temporarily
	
	capaSeleccion.getSource().clear();	

	document.removeEventListener('keyup',capturaKeyListener);	
	mapa.removeInteraction(dibujoInteraccion);	

	dibujoInteraccion = capturaInteraccion;

	document.addEventListener('keyup',capturaKeyListener);
    mapa.addInteraction(dibujoInteraccion);    

}

ADMIN_MAPA.realizarSeleccion = function(){

	capaSeleccion.getSource().clear();

	document.removeEventListener('keyup',capturaKeyListener);
	mapa.removeInteraction(dibujoInteraccion);

	dibujoInteraccion = analisisObjetosInteraccion;

	document.addEventListener('keyup',capturaKeyListener);
	mapa.addInteraction(dibujoInteraccion);
}

ADMIN_MAPA.getCapasGisActivas = function(){

	var array = [];
	var capas = mapa.getLayers().getArray();
	var m = capas.length;

	for(var i = 0; i < m; i++){

		if(capas[i].getSource() instanceof ol.source.TileWMS && capas[i].getVisible()){
			array[array.length] = capas[i].get("name");
		}
	}

	return array;
}