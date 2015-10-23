$(document).ready(function(){
	
	cargarCapas();
	crearListenersEInteracciones();
	verTotalClientesInscritos();
	verTotalDistRedAgua();
	verTotalDistRedDesague();

	$("#leyenda-dialog").dialog({autoOpen: false});
	$("#street-view").dialog({autoOpen: false,width: 650, height: 600,resizable: false});
	$("#opciones-captura").dialog({autoOpen: false, title: "Opciones de descarga",height:114,resizable:false});
	$("#opciones-analisis-objetos").dialog({autoOpen: false, title: "Análisis de objetos"});	
	
	init();
	
	//INTERACCIONES CON EL MENÚ

	$("#ocultar-menu").click(function(event){
		$("#menu-principal").toggle("slide");		
	});

	//INTERACCIONES CON EL MENÚ CAPA BASE

	$("#ver-calles").click(function(){		
		bingCalles.setVisible(true);
		bingAerea.setVisible(false);			
	});
	$("#ver-aerea").click(function(){
		bingCalles.setVisible(false);
		bingAerea.setVisible(true);		
	});
	$("#ver-solo-gis").click(function(){
		bingCalles.setVisible(false);
		bingAerea.setVisible(false);
	});	

	//INTERACCIONES CON EL MENÚ CAPAS GIS

	$("#ver-gis-distritos").click(function(){
		ADMIN_CAPAS.conmutarVisibilidad(distritos);
	});
	$("#ver-gis-sectores").click(function(){
		ADMIN_CAPAS.conmutarVisibilidad(sectores);		
	});
	$("#ver-gis-manzanas").click(function(){
		ADMIN_CAPAS.conmutarVisibilidad(manzanas);		
	});
	$("#ver-gis-urbanismo").click(function(){
		ADMIN_CAPAS.conmutarVisibilidad(urbanismo);		
	});
	$("#ver-gis-clientes").click(function(){
		ADMIN_CAPAS.conmutarVisibilidad(clientes);		
	});
	$("#ver-gis-predios").click(function(){
		ADMIN_CAPAS.conmutarVisibilidad(predios);		
	});
	$("#ver-gis-calles").click(function(){
		ADMIN_CAPAS.conmutarVisibilidad(calles);		
	});
	$("#ver-gis-red-agua").click(function(){
		ADMIN_CAPAS.conmutarVisibilidad(redAgua);		
	});
	$("#ver-gis-red-alcantarillado").click(function(){
		ADMIN_CAPAS.conmutarVisibilidad(redAlcantarillado);		
	});
	$("#ver-gis-accesorios").click(function(){
		ADMIN_CAPAS.conmutarVisibilidad(accesorios);		
	});
	$("#ver-gis-buzones").click(function(){
		ADMIN_CAPAS.conmutarVisibilidad(buzones);		
	});
	$("#ver-gis-curvas-nivel").click(function(){
		ADMIN_CAPAS.conmutarVisibilidad(curvasDeNivel);		
	});
	$("#ver-gis-valvulas").click(function(){
		ADMIN_CAPAS.conmutarVisibilidad(valvulas);		
	});
	$("#ver-gis-pozos").click(function(){
		ADMIN_CAPAS.conmutarVisibilidad(pozos);		
	});
	$("#ver-gis-reservorios").click(function(){
		ADMIN_CAPAS.conmutarVisibilidad(reservorios);		
	});
	$("#ver-gis-ruta-entrega").click(function(){
		ADMIN_CAPAS.conmutarVisibilidad(rutasEntrega);		
	});
	$("#ver-gis-ruta-entrega-camino").click(function(){
		ADMIN_CAPAS.conmutarVisibilidad(caminosRutaEntrega);		
	});
	$("#ver-gis-ruta-lectura").click(function(){
		ADMIN_CAPAS.conmutarVisibilidad(rutasLectura);		
	});
	$("#ver-gis-ruta-lectura-camino").click(function(){
		ADMIN_CAPAS.conmutarVisibilidad(caminosRutaLectura);		
	});

	//INTERACCIONES CON EL MENÚ CONSULTAS

	$("#buscar-cliente").click(function(){		
		$("#modal-contenido").load("buscar_cliente.html",function(){
			$("#myModal .modal-dialog").addClass("modal-sm");
			$("#myModal").on('shown.bs.modal',function(){				
				$("#numero-suministro-input").focus();				
			});	
			$("#myModal").modal('show');
		});		
	});

	$("#buscar-cliente-por-cod-cat").click(function(){		
		$("#modal-contenido").load("buscar_por_cod_cat.html",function(){
			$("#myModal .modal-dialog").addClass("modal-sm");
			$("#myModal").on('shown.bs.modal',function(){
				$("#prezona-input").focus();
			});
			$("#myModal").modal('show');
		});		
	});

	$("#analisis-de-usuarios").click(function(){
		$("#modal-contenido").load("analisis_de_usuarios.html",function(){
			$("#myModal .modal-dialog").addClass("modal-sm");
			$("#myModal").on('shown.bs.modal',function(){
				$("#form-analisis-usuarios .prov-select").focus();
			});			
			$("#myModal").modal('show');
		});
	});

	$("#analisis-de-deudas").click(function(){
		$("#modal-contenido").load("analisis_de_deudas.html",function(){
			$("#myModal .modal-dialog").addClass("modal-sm");
			$("#myModal").on('shown.bs.modal',function(){
				$("#form-analisis-deudas .prov-select").focus();
			});			
			$("#myModal").modal('show');
		});
	});
	
	$("#analisis-por-consumo").click(function(){
		$("#modal-contenido").load("analisis_de_consumos.html",function(){
			$("#myModal .modal-dialog").addClass("modal-sm");		
			$("#myModal").on('shown.bs.modal',function(){
				$("#form-analisis-consumos .prov-select").focus();				
			});			
			$("#myModal").modal('show');			
		});
	});	

	$("#analisis-social").click(function(){
		$("#modal-contenido").load("analisis_social.html",function(){
			$("#myModal .modal-dialog").addClass("modal-sm");
			$("#myModal").on('show.bs.modal',function(){
				$("#form-analisis-social .prov-select").focus();
			});
			$("#myModal").modal('show');
		});
	});

	$("#analisis-conexion").click(function(){
		$("#modal-contenido").load("analisis_conexion.html",function(){
			$("#myModal .modal-dialog").removeClass("modal-sm");
			$("#myModal").on('show.bs.modal',function(){
				$("#form-analisis-conexion .prov-select").focus();
			});
			$("#myModal").modal('show');
		});
	});

	$("#analisis-objetos").click(function(){
		//lamar a la función
		ADMIN_MAPA.realizarSeleccion();
	});

	//INTERACCIONES CON EL MENÚ AYUDA
	$("#ver-leyenda").click(function(){
		$("#leyenda-dialog").dialog("open");
	});

	//INTERACCIONES CON EL MENÚ HERRAMIENTAS
	$("#captura-mapa").click(function(){
		ADMIN_MAPA.realizarCaptura();
	});
	$("#limpiar-mapa").click(function(){
		PINTOR.limpiarMapa();
	});
	//INTERACCIONES CON EL MENÚ ETIQUETAS
	
	$("#ver-etiqueta-manzanas").click(function(){
		var estilo = '';

		if($(this).prop("checked")) estilo = 'gis_manzanas_label';

		ADMIN_CAPAS.cambiarEstiloCapa(manzanas,estilo);
	});

	$("#ver-etiqueta-sectores").click(function(){
		var estilo = '';

		if($(this).prop("checked")) estilo = 'gis_sectores_label';

		ADMIN_CAPAS.cambiarEstiloCapa(sectores,estilo);		
	});

	$("#ver-etiqueta-urbanismo").click(function(){
		var estilo = '';

		if($(this).prop("checked")) estilo = 'gis_urbanismo_label';

		ADMIN_CAPAS.cambiarEstiloCapa(urbanismo,estilo);	
	});

	$("#ver-etiqueta-desague").click(function(){
		var estilo = '';

		if($(this).prop("checked")) estilo = 'gis_red_alcantarillado_flujo';

		ADMIN_CAPAS.cambiarEstiloCapa(redAlcantarillado,estilo);	
	});

	$("#ver-etiqueta-clientes").click(function(){
		var estilo = '';

		if($(this).prop("checked")) estilo = 'gis_clientes_label';

		ADMIN_CAPAS.cambiarEstiloCapa(clientes,estilo);	
	});

	$("#ver-etiqueta-accesorios").click(function(){
		var estilo = '';

		if($(this).prop("checked")) estilo = 'gis_accesorios_label';

		ADMIN_CAPAS.cambiarEstiloCapa(accesorios,estilo);
	});

	$("#ver-etiqueta-valvulas").click(function(){
		var estilo = '';

		if($(this).prop("checked")) estilo = 'gis_valvulas_label';

		ADMIN_CAPAS.cambiarEstiloCapa(valvulas,estilo);
	});

	$("#ver-etiqueta-buzones").click(function(){
		var estilo = '';

		if($(this).prop("checked")) estilo = 'gis_buzones_label';

		ADMIN_CAPAS.cambiarEstiloCapa(buzones,estilo);
	});

	$("#ver-etiqueta-ruta-entrega").click(function(){
		var estilo = '';

		if($(this).prop("checked")) estilo = 'gis_ruta_entrega_label';

		ADMIN_CAPAS.cambiarEstiloCapa(rutasEntrega,estilo);
	});

	$("#ver-etiqueta-ruta-lectura").click(function(){
		var estilo = '';

		if($(this).prop("checked")) estilo = 'gis_ruta_lectura_label';

		ADMIN_CAPAS.cambiarEstiloCapa(rutasLectura,estilo);
	});

	//INTERACCIONES CON LAS CAPAS

	mapa.on("singleclick",singleclickMapListener);

});