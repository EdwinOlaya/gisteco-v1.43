var env = new nunjucks.Environment(new nunjucks.WebLoader());

function init(id_prov,id_dist,tipo_servicio,tipo_construccion,tipo_propiedad,estado_predio,situacion_conagua){

	TRIGGER_ANALYSIS.ejecutarAnalisis('analisis_social',{
		id_provincia: id_prov,
		id_distrito: id_dist,
		id_tipo_servicio: tipo_servicio,
		id_tipo_construccion: tipo_construccion,
		id_tipo_propiedad: tipo_propiedad,
		id_estado_predio: estado_predio,
		id_situacion_conagua: situacion_conagua
	});

	var teclas_especiales = [8,13];

	$("nav .numeric").keypress(function(evt){
		var key = evt.which || window.event.keyCode;

		if(teclas_especiales.indexOf(key) == -1){			
			return opener.DATA_PARSER.numericInputValidation(String.fromCharCode(key)); 
		}
		//se ha presionado enter
		saltarALaPagina('analisis_social',$('#tabla'),$('#controles'));
	});	

		//de los botones
	$("#to_excel_btn").click(function(){
			
		toExcel([
			{nombre:"Nro. Inscripción",id:"num_inscripcion"},
			{nombre:"Nombre Titular",id:"nombre_titular"},
			{nombre:"Distrito",id:"distrito"},
			{nombre:"Tipo de servicio",id:"tipo_servicio"},
			{nombre:"Estado (agua)",id:"estado_conexion_agua"},		
			{nombre:"Deuda",id:"mora"},
			{nombre:"Recibos adeudados",id:"cant_recibos_mora"}
		],$("#main-container .table").data("datos")
		,"Análisis social");

	});
}