var validaciones = require("../modulos/validaciones.js");
var utilidades = require("../modulos/utilidades.js");

function verCliente(numero_suministro,res,nunjucks){
		

	if(!validaciones.esUnNumSuministroValido(numero_suministro)) {		
		utilidades.comunicarError(res,"El número de suministro no puede estar vacío y debe tener solo dígitos, pero no más de 8");
		return false;
	}
	
	res.write(nunjucks.render("service.html",{nro_suministro:'"'+numero_suministro+'"'}));
	res.end();

}

module.exports.verCliente = verCliente;