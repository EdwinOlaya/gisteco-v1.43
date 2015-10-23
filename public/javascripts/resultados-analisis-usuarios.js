var env = new nunjucks.Environment(new nunjucks.WebLoader());

function init(id_prov,id_dist,nom_titular,suministro,filtro){

	TRIGGER_ANALYSIS.ejecutarAnalisis('analisis_usuarios',{
		id_provincia: id_prov,
		id_distrito: id_dist,
		nombre_titular: nom_titular,
		nro_suministro: suministro,
		filtro: filtro
	});


	var teclas_especiales = [8,13];

	$("nav .numeric").keypress(function(evt){
		var key = evt.which || window.event.keyCode;

		if(teclas_especiales.indexOf(key) == -1){			
			return opener.DATA_PARSER.numericInputValidation(String.fromCharCode(key)); 
		}
		//se ha presionado enter
		saltarALaPagina('analisis_usuarios',$('#tabla'),$('#controles'));
	});	

	//de los botones
	$("#to_excel_btn").click(function(){

		toExcel([{nombre:"Nro. Inscripción",id:"num_inscripcion"},
			{nombre:"Nombre Titular",id:"nombre_titular"},
			{nombre:"Distrito",id:"distrito"},
			{nombre:"Tipo de servicio",id:"tipo_servicio"},
			{nombre:"Estado (agua)",id:"estado_conexion_agua"},
			{nombre:"Deuda",id:"mora"},
			{nombre:"Recibos adeudados",id:"cant_recibos_mora"}
		],$("#main-container .table").data("datos")
		,"Análisis de usuarios");

	});

}