function mapear(val,index){
	if(val == index){
		return "checked";
	}
	return "";
}

function comunicarError(res,mensaje){
	res.writeHead(400,{'Content-type':'text/plain'});
	res.write(mensaje);
	res.end();
}

module.exports.mapear = mapear;
module.exports.comunicarError = comunicarError;