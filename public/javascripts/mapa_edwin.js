$(document).ready(function(){
	

	//$("#contenidoInformacionCatastral").setVisible(false);
	$("#btnInformacionCatastro").click(function(){
		//contenidoInformacionCatastral.append("hola a todos");
		//("#contenidoInformacionCatastral").setVisible(true);
		//alert("hola a todos");
		//$("#contenidoInformacionCatastral").text("hola a todos");

		$.ajax({
		url: "/informacionCatastral",
		type: "get",
		success: function(results){			
			$("#contenidoInformacionCatastral").html("Clientes Activos: "+   + " Dist. Red Agua: " +  +  " Dist. Red Alcantarillado:"+);
		}
	});
	});
})