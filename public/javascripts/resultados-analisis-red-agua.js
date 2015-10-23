var env = new nunjucks.Environment(new nunjucks.WebLoader());

function init(){	
	
	var geom = opener.ADMIN_CAPAS.getGeometry(opener.capaSeleccion,0);
	var coords;

	if(geom){
		coords = UTILIDADES.coordenadasToString(geom.getCoordinates()[0]);	
		TRIGGER_ANALYSIS.ejecutarAnalisisEspacial('analisis_red_agua',{
			coordenadas: coords
		});		
	}
	else{
		alert("Ningún área seleccionada");		
	}	

	var teclas_especiales = [8,13];

	$("nav .numeric").keypress(function(evt){
		var key = evt.which || window.event.keyCode;
			
		if(teclas_especiales.indexOf(key) == -1){			
			return opener.DATA_PARSER.numericInputValidation(String.fromCharCode(key)); 
		}
		//se ha presionado enter
		saltarALaPagina('analisis_red_agua',$('#tabla'),$('#controles'));
	});

	//de los botones

	$("#to_excel_btn").click(function(){
			
		toExcel([
			{nombre:"Conservación",id:"conservacion"},
			{nombre:"Diámetro (plg)",id:"diametro_plg"},
			{nombre:"Distancia (m)",id:"distancia"},
			{nombre:"Empalme",id:"empalme"},
			{nombre:"Estado",id:"estado"},
			{nombre:"Función",id:"funcion"},
			{nombre:"Material",id:"material"},
			{nombre:"Terreno",id:"terreno"},
			{nombre:"Tipo",id:"tipo"}
		],$("#main-container .table").data("datos")
		,"Análisis espacial de redes de agua");

	});
}