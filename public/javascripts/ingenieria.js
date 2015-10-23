//DEPENDE DE LAS LIBRERIAS DE OPENLAYERS

var INGENIERIA = INGENIERIA || {};

INGENIERIA.realizarAnalisisRedAgua = function(){	

	WREF = window.open("/analisisRedAguaHTML","Análisis",'width='+ancho_ventana_analisis+',height='+alto_ventana_analisis);
    if(!WREF.opener){ WREF.opener = this.window; }

}
