function vacio(str){
	if (str==0) return "";
	return str;
}

function deuda_cond_m(opt,value){

	value = "<span>".concat(value);
	value = value.concat("</span>");

	switch(opt){
		case '0': return "";break;
		case '1': return " igual ".concat(String(value));break;
		case '2': return " diferente de ".concat(String(value));break;
		case '3': return " > ".concat(String(value));break;
		case '4': return " >= ".concat(String(value));break;
		case '5': return " < ".concat(String(value));break;
		case '6': return " <= ".concat(String(value));break;
	}
}

function deuda_ope_msj(ope){
	switch(ope){
		case '0': return " y "; break;
		case '1': return " o "; break;
	}
}

function deuda_cond_msj(f_cond,s_cond,f_param,s_param,ope){
	var f_cond_msj = deuda_cond_m(f_cond,f_param);
	var s_cond_msj = deuda_cond_m(s_cond,s_param);
	var ope_msj = deuda_ope_msj(ope);
	var msj = "";

	if(f_cond_msj!=""){
		f_cond_msj = "cuya deuda fue".concat(String(f_cond_msj));
	}

	if(s_cond_msj != ""){
		if(f_cond_msj!=""){
			s_cond_msj = ope_msj.concat(String(s_cond_msj));
		}
		else{
			s_cond_msj = "cuya deuda fue".concat(String(s_cond_msj));
		}
	}

	msj = f_cond_msj.concat(s_cond_msj);
	return msj;
}

function recibos_cond_msj(min_c,max_c){
	var min_c_msj = "";
	var max_c_msj = "";
	min_c_str = "<span>".concat(min_c);
	min_c_str = min_c_str.concat("</span>");
	max_c_str = "<span>".concat(max_c);
	max_c_str = max_c_str.concat("</span>");
	var msj = "";

	if(min_c){
		min_c_msj = "con cantidad de recibos vencidos > ".concat(min_c_str);
	}

	if(max_c){
		if(min_c){
			max_c_msj = " y < ".concat(max_c_str);
		}
		else{
			max_c_msj = "con cantidad de recibos vencidos < ".concat(max_c_str);
		}
	}
	msj = min_c_msj.concat(max_c_msj);
	return msj;
}

function consumo_cond_msj(f_cond,s_cond,f_param,s_param,ope){
	var f_cond_msj = deuda_cond_m(f_cond,f_param);
	var s_cond_msj = deuda_cond_m(s_cond,s_param);
	var ope_msj = deuda_ope_msj(ope);
	var msj = "";

	if(f_cond_msj!=""){
		f_cond_msj = "cuyo consumo fue".concat(String(f_cond_msj));
	}

	if(s_cond_msj != ""){
		if(f_cond_msj!=""){
			s_cond_msj = ope_msj.concat(String(s_cond_msj));
		}
		else{
			s_cond_msj = "cuyo consumo fue".concat(String(s_cond_msj));
		}
	}	

	msj = f_cond_msj.concat(s_cond_msj);

	if(msj!="") {
		msj = "<p>".concat(msj);
		msj = msj.concat("</p>");
	}

	return msj;
}

function medidor_msj (num_medidor) {
	var msj = "";
	if(num_medidor){
		msj = "<p>cuyo medidor fue: <span>".concat(num_medidor);
		msj = msj.concat("</span></p>");
	}
	return msj;
}

function tipo_servicio_msj(val){
	if(!val || val=="") return "";
	return "<p>con servicio de: <span>".concat(String(val).concat("</span></p>"));
}
function tipo_construccion_msj(val){
	if(!val || val=="") return "";
	return "<p>cuyo tipo de construccion: <span>".concat(String(val).concat("</span></p>"));
}
function tipo_propiedad_msj(val){
	if(!val || val=="") return "";
	return "<p>con tipo de propiedad: <span>".concat(String(val).concat("</span></p>"));
}
function estado_predio_msj(val){
	if(!val || val=="") return "";
	return "<p>cuyo estado del predio sea: <span>".concat(String(val).concat("</span></p>"));
}
function situacion_conagua_msj(val){
	if(!val || val=="") return "";
	return "<p>con situación de la conexión como: <span>".concat(String(val).concat("</span></p>"));
}

function conexion_msj(diam,mat,est,fechai,fechaj,tipconx){
	var msj = "";
	var diam_msj = diametro_conexion_msj(diam);
	var mat_msj = material_conexion_msj(mat);
	var est_msj = estado_conexion_msj(est);
	var fecha_msj = fecha_conexion_msj(fechai,fechaj);
	msj = msj.concat(diam_msj.concat(mat_msj));
	msj = msj.concat(est_msj.concat(fecha_msj));
	if(msj == "") return "";	

	if(tipconx == 0) return "<p>Cuya conexión de agua tiene las siguientes características:".concat(msj.concat("</p>"));
	else if(tipconx == 1) return "<p>Cuya conexión de desague tiene las siguientes características:".concat(msj.concat("</p>"));
}
function diametro_conexion_msj(val){
	if(!val || val =="") return "";
	return " Diámetro: <span>".concat(String(val).concat("</span>"));
}
function material_conexion_msj(val){
	if(!val || val =="") return "";
	return " Material: <span>".concat(String(val).concat("</span>"));
}
function estado_conexion_msj(val){
	if(!val || val =="") return "";
	return " Estado: <span>".concat(String(val).concat("</span>"));
}
function fecha_conexion_msj(fechai,fechaj){
	var msj = "";

	if(!fechai || fechai == ""){
		
		if(!fechaj || fechaj == ""){
			msj = "";
		}
		else{
			msj = " Desde el inicio de los tiempos";
			msj = msj.concat(" Hasta el: <span>".concat(fechaj.concat("</span>")));
		}
		return msj;
	}		
	else{
		msj = " Desde el : <span>".concat(fechai.concat("</span>"));
		if(!fechaj || fechaj == ""){
			msj = msj.concat(" Hasta hoy");
		}			
		else{
			msj = msj.concat(" Hasta el: <span>".concat(fechaj.concat("</span>")));
		}			
		return msj;
	}		
}

module.exports.vacio = vacio;
module.exports.deuda_cond_msj = deuda_cond_msj;
module.exports.recibos_cond_msj = recibos_cond_msj;
module.exports.consumo_cond_msj = consumo_cond_msj;
module.exports.medidor_msj = medidor_msj;
module.exports.tipo_servicio_msj = tipo_servicio_msj;
module.exports.tipo_construccion_msj = tipo_construccion_msj;
module.exports.tipo_propiedad_msj = tipo_propiedad_msj;
module.exports.estado_predio_msj = estado_predio_msj;
module.exports.situacion_conagua_msj = situacion_conagua_msj;
module.exports.conexion_msj = conexion_msj;
module.exports.diametro_conexion_msj = diametro_conexion_msj;
module.exports.material_conexion_msj = material_conexion_msj;
module.exports.estado_conexion_msj = estado_conexion_msj;
module.exports.fecha_conexion_msj = fecha_conexion_msj;