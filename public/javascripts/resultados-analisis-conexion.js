var env = new nunjucks.Environment(new nunjucks.WebLoader());

function init(id_prov,id_dist,diametro_conagua,material_conagua,situacion_conagua,fechai_conagua,fechaf_conagua,diametro_codesa,material_codesa,situacion_codesa,fechai_codesa,fechaf_codesa){

	TRIGGER_ANALYSIS.ejecutarAnalisis('analisis_conexion',{
		id_provincia: id_prov,
		id_distrito: id_dist,
		id_diametro_conagua: diametro_conagua,
		id_material_conagua: material_conagua,
		id_situacion_conagua: situacion_conagua,
		fechai_conagua: fechai_conagua,
		fechaf_conagua: fechaf_conagua,
		id_diametro_codesa: diametro_codesa,
		id_material_codesa: material_codesa,
		id_situacion_codesa: situacion_codesa,
		fechai_codesa: fechai_codesa,
		fechaf_codesa: fechaf_codesa
	});

	var teclas_especiales = [8,13];

	$("nav .numeric").keypress(function(evt){
		var key = evt.which || window.event.keyCode;
			
		if(teclas_especiales.indexOf(key) == -1){			
			return opener.DATA_PARSER.numericInputValidation(String.fromCharCode(key)); 
		}
		//se ha presionado enter
		saltarALaPagina('analisis_conexion',$('#tabla'),$('#controles'));
	});

	//de los botones
	$("#to_excel_btn").click(function(){
			
		toExcel([{nombre:"Nro. Inscripción",id:"num_inscripcion"},
			{nombre:"Nombre Titular",id:"nombre_titular"},
			{nombre:"Distrito",id:"distrito"},
			{nombre:"Tipo de servicio",id:"tipo_servicio"},
			{nombre:"Estado (agua)",id:"estado_conexion_agua"},		
			{nombre:"Deuda",id:"deuda"},
			{nombre:"Recibos adeudados",id:"cant_recibos_deuda"}
		],$("#main-container .table").data("datos")
		,"Análisis de conexión");

	});
}