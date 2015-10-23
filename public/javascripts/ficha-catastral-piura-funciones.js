function verDatosBasicosFichaCat(ficha,id_prov,id_dist){
	
	$.ajax({
		url: "/verDatosBasicosFichaCat",
		ifModified: true,
		dataType: 'json',
		data: {
			nro_ficha: ficha,
			id_provincia: id_prov,
			id_distrito: id_dist
		},
		error: function(jqxhr){
			showInfoMessage($("#datos-basicos-ficha-cat"),jqxhr.responseText);
		},
		success: function(data){
			var template = "";

			switch(data.prezona){
				case 1: template = "datos_basicos_ficha_catastral_piura.html";break;
				//las lomas y catacaos usarán el mismo diseño ya que usan el mismo modelo de ficha
				case 2: case 5: template = "datos_basicos_ficha_catastral_catacaos.html";break;
			}

			$("#datos-basicos-ficha-cat").html(
				env.render(template,data)
			);
		}
	});
}

function verDatosPropiedadFichaCat(ficha,id_prov,id_dist){
			
	$.ajax({
		url: "/verDatosPropiedadFichaCat",
		ifModified: true,
		dataType: 'json',
		data: {
			nro_ficha: ficha,
			id_provincia: id_prov,
			id_distrito: id_dist
		},
		error: function(jqxhr){
			showInfoMessage($("#datos-propiedad-ficha-cat"),jqxhr.responseText);
		},
		success: function(data){
			var template = "";

			switch(data.id_distrito){
				case '1': template = "datos_propiedad_ficha_catastral_piura.html";break;				
				case '2': case '5': template = "datos_propiedad_ficha_catastral_catacaos.html";break;
			}

			$("#datos-propiedad-ficha-cat").html(
				env.render(template,data)
			);
		}
	});
}

function verConexAguaFichaCat(ficha,id_prov,id_dist){
			
	$.ajax({
		url: "/verConexAguaFichaCat",
		ifModified: true,
		dataType: 'json',
		data: {
			nro_ficha: ficha,
			id_provincia: id_prov,
			id_distrito: id_dist
		},
		error: function(jqxhr){
			showInfoMessage($("#conexion-agua-ficha-cat"),jqxhr.responseText);
		},
		success: function(data){
			var template = "";
					
			switch(data.id_distrito){
				case '1': template = "conexion_agua_ficha_catastral_piura.html";break;
				case '2': case '5': template = "conexion_agua_ficha_catastral_catacaos.html";break;
			}			
			$("#conexion-agua-ficha-cat").html(				
				env.render(template,data)
			);				
		}
	});
}

function verConexDesagueFichaCat(ficha,id_prov,id_dist){
	
	$.ajax({
		url: "/verConexDesagueFichaCat",
		ifModified: true,
		dataType: 'json',
		data: {
			nro_ficha: ficha,
			id_provincia: id_prov,
			id_distrito: id_dist
		},
		error: function(jqxhr){
			showInfoMessage($("#conexion-desague-ficha-cat"),jqxhr.responseText);
		},
		success: function(data){
			var template = "";
					
			switch(data.id_distrito){
				case '1': template = "conexion_desague_ficha_catastral_piura.html";break;
				case '2': case '5': template = "conexion_desague_ficha_catastral_catacaos.html";break;
			}

			$("#conexion-desague-ficha-cat").html(
				env.render(template,data)
			);				
		}
	});
}

function verValoresMinFichaCat(ficha,id_prov,id_dist){

	$.ajax({
		url: "/verValoresMinFichaCat",
		ifModified: true,
		dataType: 'json',
		data: {
			nro_ficha: ficha,
			id_provincia: id_prov,
			id_distrito: id_dist
		},
		error: function(jqxhr){
			showInfoMessage($("#valores-min-admisibles-ficha-cat"),jqxhr.responseText);
		},
		success: function(data){
			var template = "valores_minimos_ficha_catastral_piura.html";//ambas vistas contiene las mismas características
			//por eso no fue necesario (todavía) crear una vista adicional y escribir un switch
			$("#valores-min-admisibles-ficha-cat").html(
				env.render(template,data)				
			);				
		}
	});
}

function verDatosComplemFichaCat(ficha,id_prov,id_dist){
		
	$.ajax({
		url: "/verDatosComplemFichaCat",
		ifModified: true,
		dataType:'json',
		data: {
			nro_ficha: ficha,
			id_provincia: id_prov,
			id_distrito: id_dist
		},
		error: function(jqxhr){
			showInfoMessage($("#datos-complementarios-ficha-cat"),jqxhr.responseText);
		},
		success: function(data){
			var template = "";
					
			switch(data.id_distrito){
				case '1': template = "datos_complementarios_ficha_catastral_piura.html";break;
				case '2': case '5': template = "datos_complementarios_ficha_catastral_catacaos.html";break;
			}

			$("#datos-complementarios-ficha-cat").html(
				env.render(template,data)
			);				
		}
	});
}

function verInformacionGeograficaFichaCat(ficha,id_prov,id_dist){
	
	$.ajax({
		url: "/verInformacionGeograficaFichaCat",
		ifModified: true,
		dataType: 'json',
		data: {
			nro_ficha: ficha,
			id_provincia: id_prov,
			id_distrito: id_dist
		},
		error: function(jqxhr){
			showInfoMessage($("#info-geo-loc-ficha-cat"),jqxhr.responseText);
		},
		success: function(data){
			var template = "informacion_geografica_ficha_catastral_piura.html";//ambas vistas contiene las mismas características
			//por eso no fue necesario (todavía) crear una vista adicional y escribir un switch			
			$("#info-geo-loc-ficha-cat").html(
				env.render(template,data)
			);						
		}
	});
}

function verCroquisFichaCat(ficha,id_prov,id_dist){
		
	$.ajax({
		url: "/verCroquisFichaCat",
		ifModified: true,
		data: {
			nro_ficha: ficha,
			id_provincia: id_prov,
			id_distrito: id_dist
		},
		error: function(jqxhr){
			showInfoMessage($("#croquis-ficha-cat"),jqxhr.responseText);
		},
		success: function(data){
			$("#croquis-ficha-cat").html(data);				
		}
	});
}

//SISGECO
function verDatosBasicosFichaCatSisgeco(){
	var numero_suministro = $("#nro_suministro").val();		
	$.ajax({
		url: "/datosBasicosFichaCatSisgeco",
		ifModified: true,		
		data: {nro_suministro: numero_suministro},
		error: function(jqxhr){
			showInfoMessage($("#datos-basicos-sisgeco"),jqxhr.responseText);
		},
		success: function(data){
			$("#datos-basicos-sisgeco").html(data);
		}
	});
}

function verDatosPropiedadFichaCatSisgeco(){
	var numero_suministro = $("#nro_suministro").val();
	console.log(numero_suministro);		
	$.ajax({
		url: "/datosPropiedadFichaCatSisgeco",
		ifModified: true,		
		data: {nro_suministro: numero_suministro},
		error: function(jqxhr){
			showInfoMessage($("#datos-propiedad-sisgeco"),jqxhr.responseText);
		},		
		success: function(data){
			$("#datos-propiedad-sisgeco").html(data);
		}
	});
}

function verConexionAguaSisgeco(){
	var numero_suministro = $("#nro_suministro").val();		
	$.ajax({
		url: "/verConexionAgua",
		ifModified: true,
		data: {nro_suministro: numero_suministro},
		error: function(jqxhr){
			showInfoMessage($("#conexion-agua-sisgeco"),jqxhr.responseText);
		},
		success: function(data){					
			$("#conexion-agua-sisgeco").html(data);				
		}
	});
}

function verConexionDesagueSisgeco(){
	var numero_suministro = $("#nro_suministro").val();
	$.ajax({
		url: "/verConexionDesague",
		ifModified: true,
		data: {nro_suministro: numero_suministro},
		error: function(jqxhr){
			showInfoMessage($("#conexion-desague-sisgeco"),jqxhr.responseText);
		},
		success: function(data){			
			$("#conexion-desague-sisgeco").html(data);				
		}
	});
}

function verDatosComplemFichaCatSisgeco(){
	var numero_suministro = $("#nro_suministro").val();
	$.ajax({
		url: "/datosComplemFichaCatSisgeco",
		ifModified: true,
		data: {nro_suministro: numero_suministro},
		error: function(jqxhr){
			showInfoMessage($("#datos-complementarios-sisgeco"),jqxhr.responseText);
		},
		success: function(data){			
			$("#datos-complementarios-sisgeco").html(data);				
		}
	});
}

function verDatosMedidorFichaCatSisgeco(){
	var numero_suministro = $("#nro_suministro").val();
	$.ajax({
		url: "/datosMedidorFichaCatSisgeco",
		ifModified: true,
		data: {nro_suministro: numero_suministro},
		error: function(jqxhr){
			showInfoMessage($("#datos-medidor-sisgeco"),jqxhr.responseText);
		},
		success: function(data){			
			$("#datos-medidor-sisgeco").html(data);				
		}
	});
}

function cuentaCorriente(numero_suministro){
	
	$.ajax({
		url: "/verCuentaCorriente",
		ifModified: true,
		data: {
			nro_suministro: numero_suministro			
		},
		beforeSend: startLoadingAnimation($("#cuenta-corriente")),
		success: function(data,msj,jqxhr){
			$("#cuenta-corriente").html(data);			
		}
	});
}

function lecturasCliente(numero_suministro){
	$.ajax({
		url: "/verLecturas",
		ifModified: true,		
		data: {
			nro_suministro: numero_suministro
		},
		beforeSend: startLoadingAnimation($("#lecturas-cliente")),
		success: function(data,msj,jqxhr){
			$("#lecturas-cliente").html(data);			
		}
	});
}

function facturacionCliente(numero_suministro,pag){
	
	$.ajax({
		url: "/verFacturacion",
		ifModified: true,
		data: {
			nro_suministro: numero_suministro			
		},
		beforeSend: startLoadingAnimation($("#facturacion-cliente")),
		success: function(data){			
			$("#facturacion-cliente").html(data);	
		}
	});
}


function verDetalleFactura(object){

	var num_factura = $(object).text();

	$.ajax({
		url: "/verDetalleFactura",
		ifModified: true,
		data:{id_recfac:num_factura},
		type: "get",
		success: function(data){			
			$("#dialog-div").html(data);
			$("#dialog-div").dialog( "option", "title", "Detalle factura N° "+num_factura);
			$("#dialog-div").dialog("open");
		}
	});
}

function startLoadingAnimation(object){
	object.html("<div class = 'loading-div'>"+
				"<img src='icons/loading.gif'>"+			
				"</div>");
}

function showInfoMessage(object,mensaje){
	object.html("<h3 class = 'info-msj'>"+mensaje+"</h3>");
}

function graficarLecturasConsumos(){

	WREF = window.open("/lienzo.html","Busqueda",'width=750,height=550,resizable=0');
    if(!WREF.opener){ 
    	WREF.opener = this.window;    	
    }

    //darFormatoDataParaGraficoLecturasConsumos(10);
}

//function darFormatoDataParaGraficoLecturasConsumos(data_destino,data_fuente,num_lecturas){
function darFormatoDataParaGraficoLecturasConsumos(num_lecturas){
	//num_lecturas: número de las últimas lecturas a mostrar	
	lectura_consumos_para_grafica = {
		labels: [],
		series: []
	};

	data_fuente = $("#lecturas-cliente .table").data("datos");
	var k = 0;	
	
	if(data_fuente.length < num_lecturas){
		num_lecturas = data_fuente.length;
	}	

	var meds = [];	
	//encontrar los medidores que existen
	for(var i = 0; i < num_lecturas; i++){
			
		if(meds.indexOf(data_fuente[i].id_medidor)==-1 && data_fuente[i].id_medidor!=""){
			meds[meds.length] = data_fuente[i].id_medidor;
		}
	}
	
	//creando las series
	for(var i = 0; i < meds.length; i++){
		lectura_consumos_para_grafica.series[i] = {
			name: meds[i],
			data: []
		}
	}

	//llenando los arrays
	for(var i = 0; i < lectura_consumos_para_grafica.series.length; i++){	

		k = num_lecturas - 1;

		for(var j = 0; j < num_lecturas; j++){

			if(data_fuente[k].id_medidor == meds[i]){
				lectura_consumos_para_grafica.series[i].data[j] = parseInt(data_fuente[k].lectura_actual);
			}
			else{
				lectura_consumos_para_grafica.series[i].data[j] = null;
			}

			k--;
		}
	}

	var impeds = [];
	//encontrar los impedimentos
	for(var i = 0; i < num_lecturas; i++){
		if(impeds.indexOf(data_fuente[i].desc_impedimento) == -1 && data_fuente[i].desc_impedimento!=""){
			impeds[impeds.length] = data_fuente[i].desc_impedimento;
		}
	}
	
	//creando las series
	for(var i = 0; i < impeds.length; i++){
		lectura_consumos_para_grafica.series[lectura_consumos_para_grafica.series.length] = {
			name: impeds[i],
			data: []
		}
	}
	//llenando los arrays	

	for(var i = meds.length, i_impeds = 0; i < lectura_consumos_para_grafica.series.length; i++,i_impeds++){	

		k = num_lecturas - 1;

		for(var j = 0; j < num_lecturas; j++){
			/*console.log("comparación: ");
			console.log(data_fuente[k].desc_impedimento);
			console.log(impeds[i_impeds]);*/
			if(data_fuente[k].desc_impedimento == impeds[i_impeds]){
				lectura_consumos_para_grafica.series[i].data[j] = parseInt(data_fuente[k].lectura_actual);
				console.log("Iguales");
			}
			else{
				lectura_consumos_para_grafica.series[i].data[j] = null;
				console.log("Diferentes");
			}

			k--;
		}
	}


	//lenando labels y consumos
	lectura_consumos_para_grafica.series[lectura_consumos_para_grafica.series.length] = {
		name: "Consumos",
		data: []
	};

	k = num_lecturas - 1;

	for (var i = 0; i < num_lecturas ; i++) {

		lectura_consumos_para_grafica.labels[i] = data_fuente[k].periodo;
				
		lectura_consumos_para_grafica.series[lectura_consumos_para_grafica.series.length-1].data[i] = {
			y: parseInt(data_fuente[k].consumo_agua||0),
			name: data_fuente[k].periodo+' '+data_fuente[k].origen_consumo,
		}

		k--;
	};

	//console.log(lectura_consumos_para_grafica);

}