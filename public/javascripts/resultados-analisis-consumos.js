var env = new nunjucks.Environment(new nunjucks.WebLoader());

function init(id_prov,id_dist,f_cond,s_cond,f_param,s_param,ope,anio_p,mes_p,medidor,filtro){

	if(filtro == 0){

		TRIGGER_ANALYSIS.ejecutarAnalisis('analisis_consumos',{
			id_provincia: id_prov,
			id_distrito: id_dist,
			primera_condicion_consumo: f_cond,
			segunda_condicion_consumo: s_cond,
			primer_parametro_consumo: f_param,
			segundo_parametro_consumo: s_param,
			operador: ope,
			anio: anio_p,
			mes: mes_p
		});

	}else{

		TRIGGER_ANALYSIS.ejecutarAnalisis('analisis_consumos_medidor',{
			id_provincia: id_prov,
			id_distrito: id_dist,
			numero_medidor: medidor,
			anio: anio_p,
			mes: mes_p
		});
	}
		

	var teclas_especiales = [8,13];

	$("nav .numeric").keypress(function(evt){
		var key = evt.which || window.event.keyCode;
			
		if(teclas_especiales.indexOf(key) == -1){			
			return opener.DATA_PARSER.numericInputValidation(String.fromCharCode(key)); 
		}
		//se ha presionado enter
		saltarALaPagina('analisis_consumos',$('#tabla'),$('#controles'));
	});

	//de los botones
	$("#to_excel_btn").click(function(){
			
		toExcel([{nombre:"Nro. Inscripción",id:"num_inscripcion"},
			{nombre:"Nombre Titular",id:"nombre_titular"},
			{nombre:"Distrito",id:"distrito"},
			{nombre:"Tipo de servicio",id:"tipo_servicio"},
			{nombre:"Estado (agua)",id:"estado_conexion_agua"},
			{nombre:"Consumo promedio",id:"consumo_promedio"},
			{nombre:"Deuda",id:"deuda"},
			{nombre:"Recibos adeudados",id:"cant_recibos_deuda"}
		],$("#main-container .table").data("datos")
		,"Análisis de consumos");

	});
}