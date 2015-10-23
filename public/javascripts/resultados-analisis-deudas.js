var env = new nunjucks.Environment(new nunjucks.WebLoader());

function init(id_prov,id_dist,f_cond,s_cond,f_param,s_param,ope,min_cant_rec,max_cant_rec,anio,mes){

	env.addFilter("sumar",function(num1,num2){
		if (num1) num1 = parseFloat(num1);
		if (num2) num2 = parseFloat(num2);
		return (num1 + num2).toFixed(2);
	});
		
	TRIGGER_ANALYSIS.ejecutarAnalisis('analisis_deudas',{
		id_provincia: id_prov,
		id_distrito: id_dist,
		primera_condicion_deuda: f_cond,
		segunda_condicion_deuda: s_cond,
		primer_parametro_deuda: f_param,
		segundo_parametro_deuda: s_param,
		operador: ope,
		min_cant_recibos: min_cant_rec,
		max_cant_recibos: max_cant_rec,
		anio: anio,
		mes: mes
	});

	var teclas_especiales = [8,13];

	$("nav .numeric").keypress(function(evt){
		var key = evt.which || window.event.keyCode;
			
		if(teclas_especiales.indexOf(key) == -1){			
			return opener.DATA_PARSER.numericInputValidation(String.fromCharCode(key)); 
		}
		//se ha presionado enter
		saltarALaPagina('analisis_deudas',$('#tabla'),$('#controles'));
	});

	//de los botones
	$("#to_excel_btn").click(function(){
			
		toExcel([
			{nombre:"Nro. Inscripción",id:"num_inscripcion"},
			{nombre:"Nombre Titular",id:"nombre_titular"},
			{nombre:"Distrito",id:"distrito"},
			{nombre:"Tipo de servicio",id:"tipo_servicio"},
			{nombre:"Estado (agua)",id:"estado_conexion_agua"},
			{nombre:"Deuda por facturas",id:"deuda_de_facturas"},
			{nombre:"Deuda por convenios",id:"deuda_en_convenio"},
			{nombre:"Recibos adeudados",id:"cant_recibos_deuda"}
		],$("#main-container .table").data("datos")
		,"Análisis de deudas");

	});
}