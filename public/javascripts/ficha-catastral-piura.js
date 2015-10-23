//INTERACCIONES CON LOS TABS
var env = new nunjucks.Environment(new nunjucks.WebLoader());

var lectura_consumos_para_grafica;

$(document).ready(function(){

	env.addFilter("filtro_vacio",filtro_vacio);
	env.addFilter("filtro_tiprop",filtro_tiprop);
	env.addFilter("filtro_tipconst",filtro_tipconst);
	env.addFilter("filtro_matconst",filtro_matconst);
	env.addFilter("filtro_tipreser",filtro_tipreser);
	env.addFilter("filtro_si_no",filtro_si_no);
	env.addFilter("filtro_matpista",filtro_matpista);
	env.addFilter("filtro_tipconex",filtro_tipconex);
	env.addFilter("filtro_estcnxag",filtro_estcnxag);
	env.addFilter("filtro_situacion_conexion",filtro_situacion_conexion);
	env.addFilter("filtro_diametro",filtro_diametro);
	env.addFilter("filtro_matcnxag",filtro_matcnxag);
	env.addFilter("filtro_matemtag",filtro_matemtag);
	env.addFilter("filtro_estado_conservacion",filtro_estado_conservacion);
	env.addFilter("filtro_matcajag",filtro_matcajag);
	env.addFilter("filtro_loc_caja",filtro_loc_caja);
	env.addFilter("filtro_fabrican",filtro_fabrican);
	env.addFilter("filtro_estmedid",filtro_estmedid);
	env.addFilter("filtro_diacnxde",filtro_diacnxde);
	env.addFilter("filtro_matemtde",filtro_matemtde);
	env.addFilter("filtro_matcajde",filtro_matcajde);
	env.addFilter("filtro_interno_externo",filtro_interno_externo);
	env.addFilter("filtro_tipabaag",filtro_tipabaag);
	env.addFilter("filtro_tipodesa",filtro_tipodesa);
	env.addFilter("filtro_jardin",filtro_jardin);
	env.addFilter("filtro_llavepas",filtro_llavepas);
	env.addFilter("filtro_nivpresi",filtro_nivpresi);
	//filtros de ficha catastral catacaos
	env.addFilter("filtro_bloque",filtro_bloque);
	env.addFilter("filtro_estcnxag_catacaos",filtro_estcnxag_catacaos);
	env.addFilter("filtro_responsable_catacaos",filtro_responsable_catacaos);
	env.addFilter("filtro_tipdoc",filtro_tipdoc);
	env.addFilter("filtro_tipconst_catacaos",filtro_tipconst_catacaos);
	env.addFilter("filtro_tippred",filtro_tippred);
	env.addFilter("filtro_sitcnxag_catacaos",filtro_sitcnxag_catacaos);
	env.addFilter("filtro_concnxag_catacaos",filtro_concnxag_catacaos);
	env.addFilter("filtro_diacnxag_catacaos",filtro_diacnxag_catacaos);
	env.addFilter("filtro_matcnxag_catacaos",filtro_matcnxag_catacaos);
	env.addFilter("filtro_matemtag_catacaos",filtro_matemtag_catacaos);
	env.addFilter("filtro_matcajag_catacaos",filtro_matcajag_catacaos);
	env.addFilter("filtro_loccajme_catacaos",filtro_loccajme_catacaos);
	env.addFilter("filtro_estmtag_catacaos",filtro_estmtag_catacaos);
	env.addFilter("filtro_diamedid_catacaos",filtro_diamedid_catacaos);
	env.addFilter("filtro_fabrican_catacaos",filtro_fabrican_catacaos);
	env.addFilter("filtro_estmedid_catacaos",filtro_estmedid_catacaos);
	env.addFilter("filtro_segurmed_catacaos",filtro_segurmed_catacaos);
	env.addFilter("filtro_posicmed_catacaos",filtro_posicmed_catacaos);
	env.addFilter("filtro_fuga_catacaos",filtro_fuga_catacaos);
	env.addFilter("filtro_sitcnxde_catacaos",filtro_sitcnxde_catacaos);
	env.addFilter("filtro_diacnxde_catacaos",filtro_diacnxde_catacaos);
	env.addFilter("filtro_matemtde_catacaos",filtro_matemtde_catacaos);
	env.addFilter("filtro_estmtde_catacaos",filtro_estmtde_catacaos);
	env.addFilter("filtro_matcajde_catacaos",filtro_matcajde_catacaos);
	env.addFilter("filtro_loccajde_catacaos",filtro_loccajde_catacaos);
	env.addFilter("filtro_estcajde_catacaos",filtro_estcajde_catacaos);
	env.addFilter("filtro_llavepas_catacaos",filtro_llavepas_catacaos);
	
	verDatosBasicosFichaCat($("#nro_ficha").val(),$("#id_provincia").val(),$("#id_distrito").val());
	
	$("#dialog-div").dialog({autoOpen: false, width:380});

	$("#clienteTabs a[href='#datos-basicos-ficha-cat']").click(function(){
		verDatosBasicosFichaCat($("#nro_ficha").val(),$("#id_provincia").val(),$("#id_distrito").val());		
	});

	$("#clienteTabs a[href='#datos-propiedad-ficha-cat']").click(function(){
		verDatosPropiedadFichaCat($("#nro_ficha").val(),$("#id_provincia").val(),$("#id_distrito").val());
	});

	$("#clienteTabs a[href='#conexion-agua-ficha-cat']").click(function(){
		verConexAguaFichaCat($("#nro_ficha").val(),$("#id_provincia").val(),$("#id_distrito").val());
	});

	$("#clienteTabs a[href='#conexion-desague-ficha-cat']").click(function(){
		verConexDesagueFichaCat($("#nro_ficha").val(),$("#id_provincia").val(),$("#id_distrito").val());
	});

	$("#clienteTabs a[href='#valores-min-admisibles-ficha-cat']").click(function(){
		verValoresMinFichaCat($("#nro_ficha").val(),$("#id_provincia").val(),$("#id_distrito").val());
	});

	$("#clienteTabs a[href='#datos-complementarios-ficha-cat']").click(function(){
		verDatosComplemFichaCat($("#nro_ficha").val(),$("#id_provincia").val(),$("#id_distrito").val());
	});

	$("#clienteTabs a[href='#info-geo-loc-ficha-cat']").click(function(){
		verInformacionGeograficaFichaCat($("#nro_ficha").val(),$("#id_provincia").val(),$("#id_distrito").val());
	});
	
	$("#clienteTabs a[href='#croquis-ficha-cat']").click(function(){
		verCroquisFichaCat($("#nro_ficha").val(),$("#id_provincia").val(),$("#id_distrito").val());
	});	

	$("#clienteTabs a[href='#datos-basicos-sisgeco']").click(function(){
		verDatosBasicosFichaCatSisgeco();
	});

	$("#clienteTabs a[href='#datos-propiedad-sisgeco']").click(function(){
		verDatosPropiedadFichaCatSisgeco();
	});	

	$("#clienteTabs a[href='#conexion-agua-sisgeco']").click(function(){
		verConexionAguaSisgeco();
	});

	$("#clienteTabs a[href='#conexion-desague-sisgeco']").click(function(){
		verConexionDesagueSisgeco();
	});

	$("#clienteTabs a[href='#datos-complementarios-sisgeco']").click(function(){
		verDatosComplemFichaCatSisgeco();
	});

	$("#clienteTabs a[href='#datos-medidor-sisgeco']").click(function(){
		verDatosMedidorFichaCatSisgeco();
	});

	$("#clienteTabs a[href='#cuenta-corriente']").click(function(){
		var numero_suministro = $("#nro_suministro").val();		
		cuentaCorriente(numero_suministro);
	});

	$("#clienteTabs a[href='#lecturas-cliente']").click(function(){
		var numero_suministro = $("#nro_suministro").val();				
		lecturasCliente(numero_suministro);
	});

	$("#clienteTabs a[href='#facturacion-cliente']").click(function(){
		var numero_suministro = $("#nro_suministro").val();		
		facturacionCliente(numero_suministro);
	});
});