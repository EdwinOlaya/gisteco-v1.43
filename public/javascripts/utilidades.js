var UTILIDADES = UTILIDADES || {};

function calcularNumPags(totalItems, itemsXPag){

	var numPags = Math.trunc(totalItems/itemsXPag);
	if (totalItems%itemsXPag != 0) { numPags = numPags + 1; }
	return numPags;

}

UTILIDADES.coordenadasToString = function(coords){

	//var coords = poligono.getCoordinates()[0];
	var output = "";
	var m = coords.length;

	for(var i = 0; i < m; i++){

		output = output.concat("{");		
		output = output.concat(coords[i][0].toString());
		output = output.concat(",");
		output = output.concat(coords[i][1].toString());
		output = output.concat("}");

		if((i + 1) < m) output = output.concat(","); 
	}

	output = "{"+output+"}";

	return output;
}