var templates = {
	"cuenta_corriente":"cuenta_corriente_cliente_tabla.html",
	"facturacion": "facturacion_cliente_tabla.html",
	"lecturas":"lecturas_cliente_tabla.html",
	"analisis_usuarios":"resultados_analisis_de_usuarios_tabla.html",
	"analisis_deudas":"resultados_analisis_de_deudas_tabla.html",
	"analisis_consumos":"resultados_analisis_de_consumos_tabla.html",
	"analisis_consumos_medidor":"resultados_analisis_de_consumos_tabla.html",
	"analisis_social":"resultados_analisis_social_tabla.html",
	"analisis_conexion":"resultados_analisis_conexion_tabla.html",
	"analisis_red_agua":"resultados_analisis_red_agua_tabla.html",
	"analisis_espacial_usuarios":"resultados_analisis_espacial_usuarios_tabla.html"
};

function renderizarDatosTabla (data,pag,itemsXPag,tipo_datos){

	var item_i = (pag-1)*itemsXPag;

	var html = "";
	//uniformizar resultados_analisis_xxx_tabla.html
	html = env.render(templates[tipo_datos],{datos:data,inicio: item_i,itemsxpag: itemsXPag});
	
	return html;
}

function verPagina(pagina,tipo_datos,tabla,pag_bar){

	var data = "";
	var numpags = "";
	var itemsxpag = "";
	var pagina_actual = 0;


	data = $(".table",tabla).data("datos");
	numpags = $(".table",tabla).data("num_pags");
	itemsxpag = $(".table",tabla).data("itemsxpag");
	pagina_actual = $("nav .pag-actual",pag_bar).text();

	if(!pagina || pagina < 1 ||  pagina > numpags || pagina == pagina_actual){
		return false;
	}	

	$(".responsive-table tbody",tabla).html(renderizarDatosTabla(data,pagina,itemsxpag,tipo_datos));
	$("nav .pag-actual",pag_bar).text(pagina);
}

function verPaginaSigHandler(tipo_datos,tabla,pag_bar){
	
	var pag = 0;	

	pag = $("nav .pag-actual",pag_bar).text();

	verPagina(parseInt(pag)+1,tipo_datos,tabla,pag_bar);	

}

function verPaginaAntHandler(tipo_datos,tabla,pag_bar){

	var pag = 0;

	pag = $("nav .pag-actual",pag_bar).text();

	verPagina(parseInt(pag)-1,tipo_datos,tabla,pag_bar);

}

function saltarALaPagina(tipo_datos,tabla,pag_bar){

	var pag = 0;	

	pag = $("nav .num-pag",pag_bar).val();

	verPagina(parseInt(pag),tipo_datos,tabla,pag_bar);
}

function verPaginaFinalHandler(tipo_datos,tabla,pag_bar){

	var pag = 0;	

	pag = $("nav .tot-pags",pag_bar).text();

	verPagina(parseInt(pag),tipo_datos,tabla,pag_bar);
}