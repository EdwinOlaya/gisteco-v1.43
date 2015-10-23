var REPORTER = REPORTER || {};

REPORTER.mostrarReporteRedesDeAgua = function(data){

	var m = data.length;
	var red_agua_reporte = {
		estado_conservacion:{
			"BUENO":0,
			"REGULAR":0,
			"MALO":0
		},
		material:{
			"PVC":0,
			"AC":0,
			"FF":0,
			"HD":0
		},
		estado:{
			"OPERATIVO":0
		},
		funcion:{
			"IMPULSION":0,
			"CONDUCCION":0,
			"DISTRIBUCION":0
		},
		tipo:{
			"PRIMARIA":0,
			"SECUNDARIA":0
		}
	};


	for(var i = 0; i < m; i++){


	}

}
/*
**** ESTRUCTURA DEL OBJETO PARA HACER EL FILTRO ****

var query = {
	estado_conservacion:"BUENO",
	material:"PVC",
	estado:"OPERATIVO",
	funcion: "DISTRIBUCION",
	tipo: "PRIMARIA"
};

*/

//data --> $("#tabla .table").data("datos");
//conds --> query

REPORTER.filtroReporteRedesDeAgua = function(conds,data){

	var m = data.length;
	var output = [];

	for(var i = 0 ; i < m; i++){

		if(conds.estado_conservacion && data[i].conservacion != conds.estado_conservacion) continue;
		if(conds.material && data[i].material != conds.material) continue;
		if(conds.estado && data[i].estado != conds.estado) continue;
		if(conds.funcion && data[i].funcion != conds.funcion) continue;
		if(conds.tipo && data[i].tipo != conds.tipo) continue;		
		output.push(data[i]);

	}

	return output; //array con las filas que cumplen las condiciones
}

REPORTER.sumarPropiedad = function(propiedad,data){

	var m = data.length;
	var output = 0;

	for( var i = 0; i < m; i++){
		output = output + parseFloat(data[i][propiedad]);
	}

	return output.toFixed(2);
}

REPORTER.reporte1RedesDeAgua = function(data){

	var queries = [{
		desc: "<span>{{metros}} m</span> de tuberías <span>PRIMARIAS</span> - <span>{{cantidad}}</span> tubería(s)",
		query:{
			tipo: "PRIMARIA"
		}
	},{	
		desc: "<span><span>{{metros}} m</span></span> de tuberías <span>SECUNDARIAS</span> - <span>{{cantidad}}</span> tubería(s)",
		query:{
			tipo: "SECUNDARIA"
		}
	},{
		desc: "<span>{{metros}} m</span> de tuberías <span>PRIMARIAS</span> de <span>PVC</span> - <span>{{cantidad}}</span> tubería(s)",
		query:{
			tipo: "PRIMARIA",
			material:"PVC"
		}
	},{
		desc: "<span>{{metros}} m</span> de tuberías <span>SECUNDARIAS</span> de <span>PVC</span> - <span>{{cantidad}}</span> tubería(s)",
		query:{
			tipo:"SECUNDARIA",
			material:"PVC"
		}
	},{
		desc: "<span>{{metros}} m</span> de tuberías <span>PRIMARIAS</span> de <span>AC</span> - <span>{{cantidad}}</span> tubería(s)",
		query:{
			tipo: "PRIMARIA",
			material:"AC"
		}
	},{
		desc: "<span>{{metros}} m</span> de tuberías <span>SECUNDARIAS</span> de <span>AC</span> - <span>{{cantidad}}</span> tubería(s)",
		query:{
			tipo:"SECUNDARIA",
			material:"AC"
		}
	},{
		desc: "<span>{{metros}} m</span> de tuberías de <span>DISTRIBUCIÓN</span> - <span>{{cantidad}}</span> tubería(s)",
		query:{			
			funcion: "DISTRIBUCION"
		}
	},{
		desc: "<span>{{metros}} m</span> de tuberías de <span>IMPULSION</span> - <span>{{cantidad}}</span> tubería(s)",
		query:{			
			funcion: "IMPULSION"
		}
	},{
		desc: "<span>{{metros}} m</span> de tuberías de <span>CONDUCCION</span> - <span>{{cantidad}}</span> tubería(s)",
		query:{			
			funcion: "CONDUCCION"
		}
	}];

	var reporte = [];
	var aux;

	var m = queries.length;

	for( var i = 0; i < m; i++ ){

		aux = REPORTER.filtroReporteRedesDeAgua(queries[i].query,data);
		if(aux.length!=0){
			reporte[reporte.length] = env.renderString(queries[i].desc,{metros:REPORTER.sumarPropiedad("distancia",aux),cantidad:aux.length});
		}

	}

	return reporte;
}

REPORTER.reporteToHTML = function(reporte){

	var m = reporte.length;
	var html = "";

	for(var i = 0; i < m; i++){
		html = html.concat("<p>".concat(reporte[i]));
		html = html.concat("</p>");
	}

	return html;
}

