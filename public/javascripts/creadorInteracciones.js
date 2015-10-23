//DEPENDE DE LA LIBRERIA DE OPENLAYERS

var INTERACCIONES = INTERACCIONES || {};

INTERACCIONES.parametros_dibujo = {
	"poligono":{
		type: ('Polygon')
	},
	"caja":{
		type: ('LineString'),		
		geometryFunction: function(coordinates, geometry) {		

	        if (!geometry) {
	          	geometry = new ol.geom.Polygon(null);
	        }
	        var start = coordinates[0];
	        var end = coordinates[1];
	        //save the coords
	        coordi_seleccion = start;
	        coordf_seleccion = end;
	        //set the coordinates to the geometry
	        geometry.setCoordinates([
	          	[start, [start[0], end[1]], end, [end[0], start[1]], start]
	        ]);

	        return geometry;
	    },
		maxPoints: 2
	}
};

INTERACCIONES.crearInteraccionDeDibujo = function(tipo_dibujo,capa){
	//capa debe ser del tipo "ol.layer.Vector"

	interaccion = new ol.interaction.Draw({
		source: capa.getSource(),
		type: INTERACCIONES.parametros_dibujo[tipo_dibujo].type,
		geometryFunction:  INTERACCIONES.parametros_dibujo[tipo_dibujo].geometryFunction,
		maxPoints:  INTERACCIONES.parametros_dibujo[tipo_dibujo].maxPoints
	});	

	return interaccion;
}