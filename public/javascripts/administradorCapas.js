//DEPENDE DE LAS LIBRERÍA DE OPENLAYERS
//DEPENDE DE INICIALIZACION.JS
var ADMIN_CAPAS = ADMIN_CAPAS || {};

//FUNCIONES

ADMIN_CAPAS.encenderCapa = function(capa){
	capa.setVisible(true);
}
ADMIN_CAPAS.apagarCapa = function(capa){
	capa.setVisible(false);
}
ADMIN_CAPAS.conmutarVisibilidad = function(capa){
	capa.setVisible(!capa.getVisible());
}
//estilo es String
//capa es del tipo WMS
ADMIN_CAPAS.cambiarEstiloCapa = function(capa,estilo){
	capa.getSource().updateParams({
		'STYLES': estilo								
	});	
}
//crear capas WMS
ADMIN_CAPAS.crearCapaWMS = function(nombre,nombre_capa){

	var nueva_capa = null;	

	nueva_capa = new ol.layer.Tile({
		name: nombre,
		visible: false,		
		source: new ol.source.TileWMS({
			preload: Infinity,
			url: wms_url,//variable global
			serverType: "geoserver",
			params: {
				'LAYERS':'eps_piuragis:'+nombre_capa,
				'TILED':true
			},
			crossOrigin: true
		})
	});

	return nueva_capa;
}
//agregar capas (de cualquier tipo)
ADMIN_CAPAS.agregarCapa = function(capa){
	mapa.addLayer(capa);
}
//capa debe ser del tipo TileWMS
ADMIN_CAPAS.getFeatureInfoURL = function(capa,coordenadas){

	var nombre = capa.get("name");
	var source = capa.getSource();
	var properties = '';
	switch(nombre){
		case 'red_agua': properties = 'node1,node2,dn_plg,material,hab_urbana,puntos'; break;
		case 'red_alcantarillado': properties = 'node1,node2,dn_plg,material,hab_urbana,tipo,puntos'; break;
		case 'valvulas': properties = 'dc_id,dn_plg,funcion,hab_urbana'; break;
		case 'accesorios': properties = 'dc_id,diametro,hab_urbana'; break;
		case 'buzones': properties = 'buzon,mat_buzon,tipo_buzon,hab_urbana'; break;
		case 'pozos': properties = 'dc_id,nombre,dim_total,material,estado_ope'; break;//
		case 'clientes': properties = 'nro_ficha,suministro,id_prov,id_dist,x,y'; break;//retornar la URL pasando las coordenadas
		case 'reservorios': properties = 'nombre,cap_actual';break;
		default: return false;
	}
	var url = source.getGetFeatureInfoUrl(coordenadas,
		vista.getResolution(),vista.getProjection(),{
			//GetFeatureInfo params
			'INFO_FORMAT': 'text/javascript', 
			'propertyName': properties//las propiedades que se van a retornar
	});
	return url;
}

ADMIN_CAPAS.getGeometry = function(capa,indice){

	var s,f,g;
    s = capaSeleccion.getSource();
    f = s.getFeatures()[0];

    if(f) {g = f.getGeometry();}

    return g;
}