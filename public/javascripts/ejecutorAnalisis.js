var TRIGGER_ANALYSIS = TRIGGER_ANALYSIS || {};

var urls = {
	"analisis_usuarios":"/analisisUsuarios",
	"analisis_deudas":"/analisisDeuda",
	"analisis_consumos":"/analisisConsumos",
	"analisis_consumos_medidor":"/analisisConsumosMedidor",
	"analisis_social":"/analisisSocial",
	"analisis_conexion":"/analisisConexion",
	"analisis_red_agua":"/analisisRedAgua",
	"analisis_espacial_usuarios":"/analisisEspacialClientes"
};

TRIGGER_ANALYSIS.ejecutarAnalisis = function(tipo_analisis,data_query){

	$.ajax({
		url: urls[tipo_analisis],
		data: data_query,
		dataType: 'json',
		beforeSend: TRIGGER_ANALYSIS.startLoadingAnimation(),
		success: function(data){
			//data contiene la información de todos los clientes que 
			//coinciden con la busqueda realizada								

			//escribir en la vista el total de clientes encontrados
			$("#desc-consulta .tot").text(data.length);

			//calcula el número de páginas			
			var numpags = calcularNumPags(data.length,10);
			$("#main-container .responsive-pagination nav .pag-actual").text(1);
			$("#main-container .responsive-pagination nav .tot-pags").text(numpags);
			
			//almacenar la data de los recibos
			$("#main-container .table").data({
				datos: data,
				num_pags: numpags,
				itemsxpag: 10
			});

			//renderizar la primera página
			$("#main-container .responsive-table tbody").html(renderizarDatosTabla(data,1,10,tipo_analisis));
			$("#main-container .responsive-pagination nav .pag-actual").text(1);

			//Dibujar los resultados (SOLO PARA ANALISIS GRÁFICO)
			opener.PINTOR.limpiarCapa(opener.capaBusquedas);
			opener.capaBusquedas.set("name","Clientes");

			for (var i = 0; i < data.length; i++) {
				opener.PINTOR.dibujarCirculo(opener.capaBusquedas,data[i].x,data[i].y,4,opener.cliente_sombreado);
			};
		}
	});
}

TRIGGER_ANALYSIS.ejecutarAnalisisEspacial = function(tipo_analisis,data_query){

	$.ajax({
		url: urls[tipo_analisis],
		data: data_query,
		dataType: 'json',
		beforeSend: TRIGGER_ANALYSIS.startLoadingAnimation(),
		success: function(data){
			//data contiene la información de todos los clientes que 
			//coinciden con la busqueda realizada								

			//escribir en la vista el total de clientes encontrados
			$("#desc-consulta .tot").text(data.length);

			//calcula el número de páginas			
			var numpags = calcularNumPags(data.length,10);
			$("#main-container .responsive-pagination nav .pag-actual").text(1);
			$("#main-container .responsive-pagination nav .tot-pags").text(numpags);
			
			//almacenar la data de los recibos
			$("#main-container .table").data({
				datos: data,
				num_pags: numpags,
				itemsxpag: 10
			});

			//renderizar la primera página
			$("#main-container .responsive-table tbody").html(renderizarDatosTabla(data,1,10,tipo_analisis));
			$("#main-container .responsive-pagination nav .pag-actual").text(1);
			
			//imprimir reporte
			$("#desc-consulta").append(REPORTER.reporteToHTML(REPORTER.reporte1RedesDeAgua($("#main-container .table").data("datos"))));		
		}
	});
}



TRIGGER_ANALYSIS.verFichaCatastral = function(nro_suministro){
	$("#nro_suministro").val(nro_suministro);
	$("form").submit();
}
TRIGGER_ANALYSIS.startLoadingAnimation = function(){
	$(".responsive-table tbody").html("<tr class = 'fila'>"+
		"<th colspan='12' class = 'loading-div'>"+
		"<img src='icons/loading.gif'></th>"+
		"</tr>");
}