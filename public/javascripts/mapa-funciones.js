function cargarCapas(){	

	vista = new ol.View({			
		center: new ol.proj.transform([-80.6480952, -5.195992], 'EPSG:4326','EPSG:3857'),
		zoom: 14,
		maxZoom: 21
	});

	mapa = new ol.Map({
		target: "mapa",
		view: vista,
		controls: ol.control.defaults()
	});	

	//Bing será la capa pase
	//aparentemente Bing usa el sistema EPSG: 3857
	bingCallesSource =  new ol.source.BingMaps({
		key: 'Ak-dzM4wZjSqTlzveKz5u0d4IQ4bRzVI309GxmkgSVr1ewS6iPSrOvOKhA-CJlm3', 
		imagerySet: 'Road',			
		maxZoom: 20
	});

	bingCalles = new ol.layer.Tile({
		source: bingCallesSource	
	});		

	bingAereaSource = new ol.source.BingMaps({
		key: 'Ak-dzM4wZjSqTlzveKz5u0d4IQ4bRzVI309GxmkgSVr1ewS6iPSrOvOKhA-CJlm3', 
		imagerySet: 'AerialWithLabels',
		maxZoom: 20
	})

	bingAerea = new ol.layer.Tile({
		visible: false,
		source: bingAereaSource
	});	

	//CAPA DISTRITOS	
	distritos = ADMIN_CAPAS.crearCapaWMS("distritos","sig_distritos");	

	//CAPA SECTORES
	sectores = ADMIN_CAPAS.crearCapaWMS("sectores","sig_sectores");

	//CAPA MANZANAS
	manzanas = ADMIN_CAPAS.crearCapaWMS("manzanas","sig_manzanas");			

	//CAPA PREDIOS
	predios = ADMIN_CAPAS.crearCapaWMS("predios","sig_predios");

	//CAPA RUTA ENTREGA
	rutasEntrega = ADMIN_CAPAS.crearCapaWMS("ruta_entrega","sig_ruta_entrega");

	//CAPA RUTA ENTREGA CAMINO
	caminosRutaEntrega = ADMIN_CAPAS.crearCapaWMS("ruta_entrega_camino","sig_ruta_entrega_camino");	

	//CAPA RUTA LECTURA
	rutasLectura = ADMIN_CAPAS.crearCapaWMS("ruta_lectura","sig_ruta_lectura");

	//CAPA RUTA LECTURA CAMINO
	caminosRutaLectura = ADMIN_CAPAS.crearCapaWMS("ruta_lectura_camino","sig_ruta_lectura_camino");	

	//CAPA CLIENTES
	clientes = ADMIN_CAPAS.crearCapaWMS("clientes","sig_clientes_sql");
	
	//CAPA CALLES
	calles = ADMIN_CAPAS.crearCapaWMS("calles","sig_calles");

	//CAPA RED DE AGUA
	redAgua = ADMIN_CAPAS.crearCapaWMS("red_agua","sig_red_agua_sql");	

	//CAPA RED DE ALCANTARILLADO
	redAlcantarillado = ADMIN_CAPAS.crearCapaWMS("red_alcantarillado","sig_red_alcantarillado_sql");

	//CAPA ACCESORIOS
	accesorios = ADMIN_CAPAS.crearCapaWMS("accesorios","sig_accesorios_sql");

	//CAPA BUZONES
	buzones = ADMIN_CAPAS.crearCapaWMS("buzones","sig_buzones");

	//CAPA RESERVORIOS
	reservorios = ADMIN_CAPAS.crearCapaWMS("reservorios","sig_reservorios");

	//CAPA CURVAS DE NIVEL
	curvasDeNivel = ADMIN_CAPAS.crearCapaWMS("curvas_nivel","sig_curvas_nivel");

	//CAPA VALVULAS
	valvulas = ADMIN_CAPAS.crearCapaWMS("valvulas","sig_valvulas_sql");

	//CAPA POZOS
	pozos = ADMIN_CAPAS.crearCapaWMS("pozos","sig_pozos_sql");

	//CAPA URBANISMO
	urbanismo = ADMIN_CAPAS.crearCapaWMS("urbanismo","sig_urbanismo");

	//OVERLAY PARA MOSTRAR INFORMACIÓN
	infoContent = document.getElementById("info-popup");

	infoOverlay = new ol.Overlay({
		element: infoContent		
	});

	//CAPA PARA PINTAR TRAMO RED DE AGUA U OTROS
	capaSeleccionObjetos = new ol.layer.Vector({		
		source: new ol.source.Vector()
	});

	//CAPA PARA BUSQUEDAS MASIVAS
	capaBusquedas = new ol.layer.Vector({
		source: new ol.source.Vector()
	});

	//CAPA PARA HACER UNA SELECCION
	capaSeleccion = new ol.layer.Vector({
		source: new ol.source.Vector({wrapX: false}),
	  	style: new ol.style.Style({	  	  	
		    stroke: new ol.style.Stroke({
		    	color: '#ffcc33',
		      	width: 2
		    }),
		    image: new ol.style.Circle({
		      	radius: 7,
		      	fill: new ol.style.Fill({
		        	color: '#ffcc33'
		      	})
		    })
	  	})
	});

	//las capas se superponen en el orden en que se agregan

	ADMIN_CAPAS.agregarCapa(bingCalles);	
	ADMIN_CAPAS.agregarCapa(bingAerea);
	ADMIN_CAPAS.agregarCapa(distritos);
	ADMIN_CAPAS.agregarCapa(sectores);
	ADMIN_CAPAS.agregarCapa(urbanismo);		
	ADMIN_CAPAS.agregarCapa(rutasEntrega);
	ADMIN_CAPAS.agregarCapa(rutasLectura);
	ADMIN_CAPAS.agregarCapa(manzanas);
	ADMIN_CAPAS.agregarCapa(predios);
	ADMIN_CAPAS.agregarCapa(caminosRutaEntrega);
	ADMIN_CAPAS.agregarCapa(caminosRutaLectura);
	ADMIN_CAPAS.agregarCapa(calles);	
	ADMIN_CAPAS.agregarCapa(curvasDeNivel);
	ADMIN_CAPAS.agregarCapa(redAlcantarillado);	
	ADMIN_CAPAS.agregarCapa(redAgua);
	ADMIN_CAPAS.agregarCapa(accesorios);
	ADMIN_CAPAS.agregarCapa(valvulas);
	ADMIN_CAPAS.agregarCapa(buzones);
	ADMIN_CAPAS.agregarCapa(clientes);
	ADMIN_CAPAS.agregarCapa(pozos);
	ADMIN_CAPAS.agregarCapa(reservorios);
	mapa.addOverlay(infoOverlay);
	ADMIN_CAPAS.agregarCapa(capaSeleccionObjetos);
	ADMIN_CAPAS.agregarCapa(capaBusquedas);
	ADMIN_CAPAS.agregarCapa(capaSeleccion);	

	//olMapDiv.parentNode.removeChild(olMapDiv);
	//$(olMapDiv).remove();
	/*gmap.controls[google.maps.ControlPosition.TOP_LEFT].push(olMapDiv);*/
	
}

function crearListenersEInteracciones(){

	//Interacción para la opción de captura
	capturaInteraccion = INTERACCIONES.crearInteraccionDeDibujo('caja',capaSeleccion);

    capturaInteraccion.on("drawend",function(evt){

    	mapa.removeInteraction(capturaInteraccion);
    	/*
    	Mostrar ventana con dos opciones:
    	1.- Guardar imagen
    	2.- Imprimir
    	*/
    	$("#opciones-captura").load("opciones_captura.html",function(){
    		url_imagen_captura = ADMIN_MAPA.createMapSelectionURL(coordi_seleccion,coordf_seleccion)
    		$("#download-capture-link",this).attr("href",url_imagen_captura);
    	});

    	$("#opciones-captura").dialog("open");
    	$("#opciones-captura").on("dialogclose",function(evt,ui){
    		capaSeleccion.getSource().clear();
    	});    	
    });    

    //analisis de objetos Interacción    

    analisisObjetosInteraccion = INTERACCIONES.crearInteraccionDeDibujo('poligono',capaSeleccion);

    analisisObjetosInteraccion.on("drawend",function(evt){

    	mapa.removeInteraction(analisisObjetosInteraccion);
    	/*
    	Mostrar información de los objetos
    	*/
    	$("#opciones-analisis-objetos").html("<p>Seleccione la capa sobre la cual quiere realizar el análisis</p><ul></ul>");

    	var capas = ADMIN_MAPA.getCapasGisActivas();
    	var m = capas.length;    	
    	
    	for(var i = 0; i < m; i++){
    		if(analisisEspacialDeObjetos_funciones[capas[i]]){
    			$("#opciones-analisis-objetos ul").append("<li><a style = 'cursor:pointer' onclick = '"+analisisEspacialDeObjetos_funciones[capas[i]]+"'>"+capas[i]+"</a></li>");
    		}    		
    	}

    	/*$("#opciones-analisis-objetos").html("<p>Seleccione la capa sobre la cual quiere realizar el análisis</p><ul>"+
    		"<li><a onclick = 'INGENIERIA.realizarAnalisisRedAgua()'>Redes de Agua</a></li>"+
    		"<li><a onclick = 'CATASTRO.realizarAnalisisEspacialUsuarios()'>Clientes</a></li></ul>");*/

    	$("#opciones-analisis-objetos").dialog("open");
    	$("#opciones-analisis-objetos").on("dialogclose",function(evt,ui){
    		capaSeleccion.getSource().clear();
    	});

    });

    //keyboard listener para la opción de captura
    capturaKeyListener = function(evt){
    	var key = evt.which || window.event.keyCode;
    	if(key == 27) {//cuando se presione la tecla ESC se cancelará la función
    		mapa.removeInteraction(dibujoInteraccion);
    		capaSeleccion.getSource().clear();
    	}
    }
}

function singleclickMapListener(evt){
		//Detectar sobre que capa se ha dado click				
		var pixel = mapa.getEventPixel(evt.originalEvent);
		
		var capaSeleccionada = mapa.forEachLayerAtPixel(pixel, function(layer){			
			
			if(layer && (layer.getSource() instanceof ol.source.TileWMS)){				
				return layer;
			}

		});
		
		//preguntas si es layer Wms o Vector ATENCIÓN!

		if(!capaSeleccionada){
			return false; //si no se ha dado click sobre ninguna capa, no hacer nada y salir
		}		
		//obtener la URL donde se encuentra la información de dicha capa
		var url = ADMIN_CAPAS.getFeatureInfoURL(capaSeleccionada,evt.coordinate);		
		
		if(!url){
			return false;// si no es posible obtener la URL no hacer nada
		}		
		//mostrar los datos		
		showLayerDataFromUrl(capaSeleccionada,url,evt.coordinate);		
} 

function cerrarPopup(){
	$(infoContent).popover("destroy");
}

function showLayerDataFromUrl(layer,url,coords){
	$.ajax({				
		url: url,
        dataType: 'jsonp',
        jsonpCallback: 'parseResponse',
		success: function(data){						
			var propiedades = data.features[0].properties;
			var html = renderDataFromLayer(layer,propiedades);																			
			showMessageOverPopup(html,coords);
			drawAditionalFeatures(layer,propiedades);
		}
	});
}

function showMessageOverPopup(html,coords){
	//html puede ser contenido html o simplemente texto plano
	//pero de preferencia debe ser html
	infoOverlay.setPosition(coords);					

	cerrarPopup(); // cerrar el popup anterior

	$(infoContent).popover({
		animation: false,
		html: true,
		content: html,
		placement: 'top',						
		toggle: "popover"
	});

	$(infoContent).popover('show');
}

function renderDataFromLayer(layer,data){
	
	var layerName = layer.get("name");
	var template = '',html = '';

	switch(layerName){
		case 'red_agua': template = 'info_red_agua.html'; break;
		case 'red_alcantarillado': template = 'info_red_alcantarillado.html'; break;
		case 'valvulas': template = 'info_valvula.html'; break;
		case 'accesorios': template = 'info_accesorio.html'; break;
		case 'buzones': template = 'info_buzon.html'; break;
		case 'pozos': template = 'info_pozo.html'; break;
		case 'clientes': template = 'info_cliente.html'; break;
		case 'reservorios': template = 'info_reservorio.html'; break;		
		default: return false;
	}

	html = nunjucks.render(template,data);

	return html;
}

function drawAditionalFeatures(layer,data){

	var layerName = layer.get("name");
	PINTOR.limpiarCapa(capaSeleccionObjetos);

	switch(layerName){
		case 'red_agua':
			capaSeleccionObjetos.set("name","tramo red agua");		
			PINTOR.dibujarMultiLinea(capaSeleccionObjetos,JSON.parse(data.puntos),red_seleccionada);
			break;
		case 'red_alcantarillado':
			capaSeleccionObjetos.set("name","tramo red alcantarillado");
			PINTOR.dibujarMultiLinea(capaSeleccionObjetos,JSON.parse(data.puntos),red_seleccionada);
			break;
		case 'clientes':
			capaSeleccionObjetos.set("name","cliente");					
			PINTOR.dibujarCirculo(capaSeleccionObjetos,data.x,data.y,4,cliente_seleccionado);
			break;
		default: 
			return false;
	}
}

//INFORMACIÓN GENERAL

function verTotalClientesInscritos(){
	$.ajax({
		url: "/getCantClientesActivos",
		type: "get",
		success: function(total_clientes_activos){
			$("#total-clientes-activos").html(total_clientes_activos);
		}
	});
}

function verTotalDistRedAgua(){
	$.ajax({
		url: "/distanciaTotalRedAgua",
		type: "get",
		success: function(dt_red_agua){			
			$("#dt-red-agua").html(dt_red_agua+" m");
		}
	});
}

function verTotalDistRedDesague(){
	$.ajax({
		url: "/distanciaTotalRedDesague",
		type: "get",
		success: function(dt_red_desague){			
			$("#dt-red-desague").html(dt_red_desague+" m");
		}
	});
}

function verEnStreetViewHandler(x,y){
	//x y y están en el sistema EPSG:3857
	var lonlat = ol.proj.toLonLat([x,y],'EPSG:3857');
	verEnStreetView(lonlat[0],lonlat[1]);
}

function verEnStreetView(longitud,latitud){	
	
	var latlong = new google.maps.LatLng(latitud, longitud);

  	// Note: constructed panorama objects have visible: true  -8976268.310401026,-575627.807721036
  	// set by default.  	
		
	if(!gmap) {
		
		gmap = new google.maps.Map(document.getElementById('gmap'), {
		    center: latlong,
		    zoom: 17
		});

		streetViewPanorama = new google.maps.StreetViewPanorama(
		    document.getElementById('pano'), {
			position: latlong,
		    pov: {
		        heading: 34,
		       	pitch: 10
		    }
		});
		gmap.setStreetView(streetViewPanorama);

	}else {		
		gmap.setCenter(latlong);
		streetViewPanorama.setPosition(latlong);
	}

	$("#street-view").dialog("open");

}

function init() {	
	
	/*var lonlat = new ol.proj.toLonLat([-80.6480952, -5.195992],'EPSG:4326');


	streetViewPanorama = new google.maps.StreetViewPanorama(
		document.getElementById('pano'), {
		position: new google.maps.LatLng(lonlat[1],lonlat[0]),
		pov: {
		    heading: 34,
		  	pitch: 10
		}
	});

	gmap.setStreetView(streetViewPanorama);*/
}