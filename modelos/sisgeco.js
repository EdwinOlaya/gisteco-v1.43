var validaciones = require("../modulos/validaciones.js");

function getCantClientesActivos(res,conx){

	var query = "select * from gis.f_getcant_clientes_activos();";
	
	conx.conexion.query(query,{
		type: conx.Sequelize.QueryTypes.SELECT,
		raw: false
	}).then(function(results){
		res.write(results[0].f_getcant_clientes_activos);
		res.end();
	});
}

function distanciaTotalRedAgua(res,conx){
	var query = "select * from gis.f_getdistanciatotal_red_agua()";

	conx.conexion.query(query,{
		type: conx.Sequelize.QueryTypes.SELECT,
		raw: false
	}).then(function(results){
		res.write(JSON.stringify(results[0].f_getdistanciatotal_red_agua));
		res.end();
	});
}

function distanciaTotalRedDesague(res,conx){
	var query = "select * from gis.f_getdistanciatotal_red_desague()";
	
	conx.conexion.query(query,{
		type: conx.Sequelize.QueryTypes.SELECT,
		raw: false
	}).then(function(results){
		res.write(JSON.stringify(results[0].f_getdistanciatotal_red_desague));
		res.end();
	});	
}

function getDistritosFromProvincia(id_provincia,res,conx,nunjucks){

	var query = "select * from f_getdistritos_from_provincia("+id_provincia+")";

	conx.conexion.query(query,{
		type: conx.Sequelize.QueryTypes.SELECT,
		raw: false
	}).then(function(results){
		res.write(nunjucks.render("combo_distritos.html",{distritos:results}));		
		res.end();
	});
}

function build_soa_call(function_name, params){

	data = '<soapenv:Envelope ';
    data += 'xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" ';
    data += 'xmlns:rem="http://remoting.controlador/"> ';
    data += '<soapenv:Header/> ';
    data += '<soapenv:Body>';
    data += '<rem:'+function_name+'> ';   

    for (var i = 0; i < params.length; i++) {
    	data += '<'+params[i].param+'>';
    	data += params[i].value;
    	data += '</'+params[i].param+'>';
    };

    data += '</rem:'+function_name+' > ';
    data += '< /soapenv:Body> ';
    data += '</soapenv:Envelope > ';
    console.log(data);
    console.log("***********************************************");
    return data;       
}

function verCuentaCorriente(numero_inscripcion,res,nunjucks){

	var params = [
		{param:"numInscripcion",value:numero_inscripcion}	
	];

	var request_xml = build_soa_call('buscarCuentaCorrienteSuministro',params);

	var peticion = require("request");

    peticion({
        method: 'POST',
        uri: 'http://199.89.53.23:8553/sisgeco/servicios',
        multipart: [{
                'content-type': 'text/xml',
                'Accept': 'xml',
                body: request_xml
            }
        ]
    }
    , function (error, response, body) {
        if (response.statusCode === 200) {
            var Entities = require('html-entities').XmlEntities, json01, json02;
            entities = new Entities();
            body = body.replace('<?xml version="1.0" ?><S:Envelope xmlns:S="http://schemas.xmlsoap.org/soap/envelope/"><S:Body><ns2:buscarCuentaCorrienteSuministroResponse xmlns:ns2="http://remoting.controlador/"><return>', '');
            body = body.replace('</return></ns2:buscarCuentaCorrienteSuministroResponse></S:Body></S:Envelope>', '');
            body = entities.decode(body);
            json01 = JSON.parse(body);
            
            if (json01.id === 1) {                
                json02 = JSON.parse(json01.data);               
                json03 = json02.data;//movimientos de la cuenta corriente
                var datos = {
					cuentaCorriente: JSON.stringify(json03),
					id: json01.id,
					mensaje: json01.mensaje,
					total_encontrados: json03.length
				};
		
				res.write(nunjucks.render("cuenta_corriente_cliente.html",datos));			
				res.end();

            } else {
                console.log("mensaje->" + json01.mensaje);
            }
            return body;
        } else {
            console.log('ERROR: ' + response.statusCode);
            console.log(body);
        }
    });
}

function verLecturas(numero_inscripcion,res,nunjucks){

	/*var params = [
		{param:"numInscripcion",value:numero_inscripcion}	
	];

	var request_xml = build_soa_call('pendiente',params);

	var peticion = require("request");

    peticion({
        method: 'POST',
        uri: 'http://sisgecoserversoap:8553/sisgeco/servicios',
        multipart: [{
                'content-type': 'text/xml',
                'Accept': 'xml',
                body: request_xml
            }
        ]
    }
    , function (error, response, body) {
        if (response.statusCode === 200) {
            var Entities = require('html-entities').XmlEntities, json01, json02;
            entities = new Entities();
            body = body.replace('<?xml version="1.0" ?><S:Envelope xmlns:S="http://schemas.xmlsoap.org/soap/envelope/"><S:Body><ns2:buscarCuentaCorrienteSuministroResponse xmlns:ns2="http://remoting.controlador/"><return>', '');
            body = body.replace('</return></ns2:buscarCuentaCorrienteSuministroResponse></S:Body></S:Envelope>', '');
            body = entities.decode(body);
            json01 = JSON.parse(body);
            
            if (json01.id === 1) {                
                json02 = JSON.parse(json01.data);               
                json03 = json02.data;//movimientos de la cuenta corriente
                var datos = {
					cuentaCorriente: JSON.stringify(json03),
					id: json01.id,
					mensaje: json01.mensaje,
					total_encontrados: json03.length
				};*/
				var data = [{"consumo_agua":9,"consumo_desague":9,"descImpedimento":"","descLectura":"Medición Normal","descObservacion":"","idMedidor":"9500826","lectura_actual":70,"lectura_anterior":61,"num_inscripcion":10164337,"origen_consumo":"DIF.  LECTURAS","periodo":"2015 - Setiembre","periodo_anio":2015,"periodo_mes":9},{"consumo_agua":8,"consumo_desague":8,"descImpedimento":"","descLectura":"Medición Normal","descObservacion":"","idMedidor":"9500826","lectura_actual":61,"lectura_anterior":53,"num_inscripcion":10164337,"origen_consumo":"DIF.  LECTURAS","periodo":"2015 - Agosto","periodo_anio":2015,"periodo_mes":8},{"consumo_agua":7,"consumo_desague":7,"descImpedimento":"","descLectura":"Medición Normal","descObservacion":"","idMedidor":"9500826","lectura_actual":53,"lectura_anterior":46,"num_inscripcion":10164337,"origen_consumo":"DIF.  LECTURAS","periodo":"2015 - Julio","periodo_anio":2015,"periodo_mes":7},{"consumo_agua":9,"consumo_desague":9,"descImpedimento":"","descLectura":"Medición Normal","descObservacion":"","idMedidor":"9500826","lectura_actual":46,"lectura_anterior":37,"num_inscripcion":10164337,"origen_consumo":"DIF.  LECTURAS","periodo":"2015 - Junio","periodo_anio":2015,"periodo_mes":6},{"consumo_agua":9,"consumo_desague":9,"descImpedimento":"","descLectura":"Medición Normal","descObservacion":"","idMedidor":"9500826","lectura_actual":37,"lectura_anterior":28,"num_inscripcion":10164337,"origen_consumo":"DIF.  LECTURAS","periodo":"2015 - Mayo","periodo_anio":2015,"periodo_mes":5},{"consumo_agua":9,"consumo_desague":9,"descImpedimento":"","descLectura":"Medición Normal","descObservacion":"","idMedidor":"9500826","lectura_actual":28,"lectura_anterior":19,"num_inscripcion":10164337,"origen_consumo":"DIF.  LECTURAS","periodo":"2015 - Abril","periodo_anio":2015,"periodo_mes":4},{"consumo_agua":6,"consumo_desague":6,"descImpedimento":"Sin Medidor(retirado)","descLectura":"","descObservacion":"","idMedidor":"8AA108806","lectura_actual":0,"lectura_anterior":0,"num_inscripcion":10164337,"origen_consumo":"PROM. CONSUMOS","periodo":"2015 - Marzo","periodo_anio":2015,"periodo_mes":3},{"consumo_agua":6,"consumo_desague":6,"descImpedimento":"Sin Medidor(retirado)","descLectura":"","descObservacion":"","idMedidor":"8AA108806","lectura_actual":0,"lectura_anterior":0,"num_inscripcion":10164337,"origen_consumo":"PROM. CONSUMOS","periodo":"2015 - Febrero","periodo_anio":2015,"periodo_mes":2},{"consumo_agua":6,"consumo_desague":6,"descImpedimento":"Sin Medidor(retirado)","descLectura":"","descObservacion":"","idMedidor":"8AA108806","lectura_actual":0,"lectura_anterior":0,"num_inscripcion":10164337,"origen_consumo":"PROM. CONSUMOS","periodo":"2015 - Enero","periodo_anio":2015,"periodo_mes":1},{"consumo_agua":6,"consumo_desague":6,"descImpedimento":"Sin Medidor(retirado)","descLectura":"","descObservacion":"","idMedidor":"8AA108806","lectura_actual":0,"lectura_anterior":0,"num_inscripcion":10164337,"origen_consumo":"PROM. CONSUMOS","periodo":"2014 - Diciembre","periodo_anio":2014,"periodo_mes":12},{"consumo_agua":6,"consumo_desague":6,"descImpedimento":"Sin Medidor(retirado)","descLectura":"","descObservacion":"","idMedidor":"8AA108806","lectura_actual":0,"lectura_anterior":0,"num_inscripcion":10164337,"origen_consumo":"PROM. CONSUMOS","periodo":"2014 - Noviembre","periodo_anio":2014,"periodo_mes":11},{"consumo_agua":6,"consumo_desague":6,"descImpedimento":"Sin Medidor(retirado)","descLectura":"","descObservacion":"","idMedidor":"8AA108806","lectura_actual":0,"lectura_anterior":0,"num_inscripcion":10164337,"origen_consumo":"PROM. CONSUMOS","periodo":"2014 - Octubre","periodo_anio":2014,"periodo_mes":10},{"consumo_agua":6,"consumo_desague":6,"descImpedimento":"Sin Medidor(retirado)","descLectura":"","descObservacion":"","idMedidor":"8AA108806","lectura_actual":0,"lectura_anterior":0,"num_inscripcion":10164337,"origen_consumo":"PROM. CONSUMOS","periodo":"2014 - Setiembre","periodo_anio":2014,"periodo_mes":9},{"consumo_agua":6,"consumo_desague":6,"descImpedimento":"Sin Medidor(retirado)","descLectura":"","descObservacion":"","idMedidor":"8AA108806","lectura_actual":0,"lectura_anterior":0,"num_inscripcion":10164337,"origen_consumo":"PROM. CONSUMOS","periodo":"2014 - Agosto","periodo_anio":2014,"periodo_mes":8},{"consumo_agua":6,"consumo_desague":6,"descImpedimento":"Sin Medidor(retirado)","descLectura":"","descObservacion":"","idMedidor":"8AA108806","lectura_actual":0,"lectura_anterior":0,"num_inscripcion":10164337,"origen_consumo":"PROM. CONSUMOS","periodo":"2014 - Julio","periodo_anio":2014,"periodo_mes":7},{"consumo_agua":6,"consumo_desague":6,"descImpedimento":"Sin Medidor(retirado)","descLectura":"","descObservacion":"","idMedidor":"8AA108806","lectura_actual":0,"lectura_anterior":0,"num_inscripcion":10164337,"origen_consumo":"PROM. CONSUMOS","periodo":"2014 - Junio","periodo_anio":2014,"periodo_mes":6},{"consumo_agua":6,"consumo_desague":6,"descImpedimento":"Sin Medidor(retirado)","descLectura":"","descObservacion":"","idMedidor":"8AA108806","lectura_actual":0,"lectura_anterior":0,"num_inscripcion":10164337,"origen_consumo":"PROM. CONSUMOS","periodo":"2014 - Mayo","periodo_anio":2014,"periodo_mes":5},{"consumo_agua":6,"consumo_desague":6,"descImpedimento":"Sin Medidor(retirado)","descLectura":"","descObservacion":"","idMedidor":"8AA108806","lectura_actual":0,"lectura_anterior":234,"num_inscripcion":10164337,"origen_consumo":"PROM. CONSUMOS","periodo":"2014 - Abril","periodo_anio":2014,"periodo_mes":4},{"consumo_agua":0,"consumo_desague":0,"descImpedimento":"","descLectura":"Medición Normal","descObservacion":"Sin Habitante","idMedidor":"8AA108806","lectura_actual":234,"lectura_anterior":234,"num_inscripcion":10164337,"origen_consumo":"DIF.  LECTURAS","periodo":"2014 - Marzo","periodo_anio":2014,"periodo_mes":3},{"consumo_agua":0,"consumo_desague":0,"descImpedimento":"","descLectura":"Medición Normal","descObservacion":"Sin Habitante","idMedidor":"8AA108806","lectura_actual":234,"lectura_anterior":234,"num_inscripcion":10164337,"origen_consumo":"DIF.  LECTURAS","periodo":"2014 - Febrero","periodo_anio":2014,"periodo_mes":2},{"consumo_agua":0,"consumo_desague":0,"descImpedimento":"","descLectura":"Medición Normal","descObservacion":"Sin Habitante","idMedidor":"8AA108806","lectura_actual":234,"lectura_anterior":234,"num_inscripcion":10164337,"origen_consumo":"DIF.  LECTURAS","periodo":"2014 - Enero","periodo_anio":2014,"periodo_mes":1},{"consumo_agua":0,"consumo_desague":0,"descImpedimento":"","descLectura":"Medición Normal","descObservacion":"Sin Habitante","idMedidor":"8AA108806","lectura_actual":234,"lectura_anterior":234,"num_inscripcion":10164337,"origen_consumo":"DIF.  LECTURAS","periodo":"2013 - Diciembre","periodo_anio":2013,"periodo_mes":12},{"consumo_agua":0,"consumo_desague":0,"descImpedimento":"","descLectura":"Medición Normal","descObservacion":"","idMedidor":"8AA108806","lectura_actual":234,"lectura_anterior":234,"num_inscripcion":10164337,"origen_consumo":"DIF.  LECTURAS","periodo":"2013 - Noviembre","periodo_anio":2013,"periodo_mes":11},{"consumo_agua":0,"consumo_desague":0,"descImpedimento":"","descLectura":"Medición Normal","descObservacion":"Sin Habitante","idMedidor":"8AA108806","lectura_actual":234,"lectura_anterior":234,"num_inscripcion":10164337,"origen_consumo":"DIF.  LECTURAS","periodo":"2013 - Octubre","periodo_anio":2013,"periodo_mes":10},{"consumo_agua":0,"consumo_desague":0,"descImpedimento":"","descLectura":"Medición Normal","descObservacion":"Sin Habitante","idMedidor":"8AA108806","lectura_actual":234,"lectura_anterior":234,"num_inscripcion":10164337,"origen_consumo":"DIF.  LECTURAS","periodo":"2013 - Setiembre","periodo_anio":2013,"periodo_mes":9},{"consumo_agua":0,"consumo_desague":0,"descImpedimento":"","descLectura":"Medición Normal","descObservacion":"Sin Habitante","idMedidor":"8AA108806","lectura_actual":234,"lectura_anterior":234,"num_inscripcion":10164337,"origen_consumo":"PROM. CONSUMOS","periodo":"2013 - Agosto","periodo_anio":2013,"periodo_mes":8},{"consumo_agua":0,"consumo_desague":0,"descImpedimento":"","descLectura":"Medición Normal","descObservacion":"Sin Habitante","idMedidor":"8AA108806","lectura_actual":234,"lectura_anterior":234,"num_inscripcion":10164337,"origen_consumo":"DIF.  LECTURAS","periodo":"2013 - Julio","periodo_anio":2013,"periodo_mes":7},{"consumo_agua":0,"consumo_desague":0,"descImpedimento":"","descLectura":"Medición Normal","descObservacion":"Sin Habitante","idMedidor":"8AA108806","lectura_actual":234,"lectura_anterior":234,"num_inscripcion":10164337,"origen_consumo":"DIF.  LECTURAS","periodo":"2013 - Junio","periodo_anio":2013,"periodo_mes":6},{"consumo_agua":0,"consumo_desague":0,"descImpedimento":"","descLectura":"Medición Normal","descObservacion":"Sin Habitante","idMedidor":"8AA108806","lectura_actual":234,"lectura_anterior":234,"num_inscripcion":10164337,"origen_consumo":"DIF.  LECTURAS","periodo":"2013 - Mayo","periodo_anio":2013,"periodo_mes":5},{"consumo_agua":0,"consumo_desague":0,"descImpedimento":"","descLectura":"Medición Normal","descObservacion":"Sin Habitante","idMedidor":"8AA108806","lectura_actual":234,"lectura_anterior":234,"num_inscripcion":10164337,"origen_consumo":"DIF.  LECTURAS","periodo":"2013 - Abril","periodo_anio":2013,"periodo_mes":4},{"consumo_agua":0,"consumo_desague":0,"descImpedimento":"","descLectura":"Medición Normal","descObservacion":"","idMedidor":"8AA108806","lectura_actual":234,"lectura_anterior":234,"num_inscripcion":10164337,"origen_consumo":"DIF.  LECTURAS","periodo":"2013 - Marzo","periodo_anio":2013,"periodo_mes":3},{"consumo_agua":1,"consumo_desague":1,"descImpedimento":"","descLectura":"Medición Normal","descObservacion":"","idMedidor":"8AA108806","lectura_actual":234,"lectura_anterior":233,"num_inscripcion":10164337,"origen_consumo":"DIF.  LECTURAS","periodo":"2013 - Febrero","periodo_anio":2013,"periodo_mes":2},{"consumo_agua":1,"consumo_desague":1,"descImpedimento":"","descLectura":"Medición Normal","descObservacion":"","idMedidor":"8AA108806","lectura_actual":233,"lectura_anterior":232,"num_inscripcion":10164337,"origen_consumo":"DIF.  LECTURAS","periodo":"2013 - Enero","periodo_anio":2013,"periodo_mes":1}];
				var datos = {
					lecturas: JSON.stringify(data),
					id: 1,
					mensaje: "HISTORICO DE CONSUMOS DEL SUMINISTRO 10164337 ENCONTRADOS",
					total_encontrados: data.length
				};
				res.write(nunjucks.render("lecturas_cliente.html",datos));			
				res.end();
/*
            } else {
                console.log("mensaje->" + json01.mensaje);
            }
            return body;
        } else {
            console.log('ERROR: ' + response.statusCode);
            console.log(body);
        }
    });*/
}

function verFacturacion(numero_inscripcion,res,nunjucks){

	/*var params = [
		{param:"numInscripcion",value:numero_inscripcion}	
	];

	var request_xml = build_soa_call('pendiente',params);

	var peticion = require("request");

    peticion({
        method: 'POST',
        uri: 'http://sisgecoserversoap:8553/sisgeco/servicios',
        multipart: [{
                'content-type': 'text/xml',
                'Accept': 'xml',
                body: request_xml
            }
        ]
    }
    , function (error, response, body) {
        if (response.statusCode === 200) {
            var Entities = require('html-entities').XmlEntities, json01, json02;
            entities = new Entities();
            body = body.replace('<?xml version="1.0" ?><S:Envelope xmlns:S="http://schemas.xmlsoap.org/soap/envelope/"><S:Body><ns2:buscarCuentaCorrienteSuministroResponse xmlns:ns2="http://remoting.controlador/"><return>', '');
            body = body.replace('</return></ns2:buscarCuentaCorrienteSuministroResponse></S:Body></S:Envelope>', '');
            body = entities.decode(body);
            json01 = JSON.parse(body);
            
            if (json01.id === 1) {                
                json02 = JSON.parse(json01.data);               
                json03 = json02.data;//movimientos de la cuenta corriente
                var datos = {
					cuentaCorriente: JSON.stringify(json03),
					id: json01.id,
					mensaje: json01.mensaje,
					total_encontrados: json03.length
				};*/
				var data = {"nombre":"CHUICA ARCA NILO","habilitado":true,"direccion":"CALL. 2 MZ A   LT-1 - CHB. MICAELA BASTIDAS I ETAPA","cod_catastral":"1.1.5.2.100.1","listaCategorias":[{"descripcion":"DOMESTICA 2","id":"2","tipo":"DOM-2"}],"data":[{"id_corr_recfac":4719322,"id_recibo":"001-90530028-01","vencimiento":"21/09/2015","cancelado":"","total":26.55,"estado":"PENDIENTE","cod_nota":"","total_pendiente":26.55,"volumen_facturado":9,"tipo_consumo":"DIF.  LECTURAS","lectura_anterior":"61","lectura_actual":"70"},{"id_corr_recfac":3670506,"id_recibo":"001-90395562-01","vencimiento":"20/08/2015","cancelado":"13/08/2015","total":23.75,"estado":"CANCELADO","cod_nota":"","total_pendiente":0,"volumen_facturado":8,"tipo_consumo":"DIF.  LECTURAS","lectura_anterior":"53","lectura_actual":"61"},{"id_corr_recfac":3558082,"id_recibo":"001-90283138-01","vencimiento":"20/07/2015","cancelado":"24/07/2015","total":21.1,"estado":"CANCELADO","cod_nota":"","total_pendiente":0,"volumen_facturado":7,"tipo_consumo":"DIF.  LECTURAS","lectura_anterior":"46","lectura_actual":"53"},{"id_corr_recfac":2933414,"id_recibo":"001-90170249-01","vencimiento":"21/06/2015","cancelado":"26/06/2015","total":26.55,"estado":"CANCELADO","cod_nota":"","total_pendiente":0,"volumen_facturado":9,"tipo_consumo":"DIF.  LECTURAS","lectura_anterior":"37","lectura_actual":"46"},{"id_corr_recfac":1346014,"id_recibo":"001-09998277-30","vencimiento":"21/05/2015","cancelado":"21/05/2015","total":26.6,"estado":"CANCELADO","cod_nota":"","total_pendiente":0,"volumen_facturado":9,"tipo_consumo":"DIF.  LECTURAS","lectura_anterior":"28","lectura_actual":"37"},{"id_corr_recfac":1346013,"id_recibo":"001-09923619-78","vencimiento":"22/04/2015","cancelado":"28/04/2015","total":26.55,"estado":"CANCELADO","cod_nota":"","total_pendiente":0,"volumen_facturado":9,"tipo_consumo":"DIF.  LECTURAS","lectura_anterior":"19","lectura_actual":"28"},{"id_corr_recfac":1346012,"id_recibo":"001-09849282-49","vencimiento":"20/03/2015","cancelado":"24/03/2015","total":18.45,"estado":"CANCELADO","cod_nota":"","total_pendiente":0,"volumen_facturado":6,"tipo_consumo":"PROM. CONSUMOS","lectura_anterior":"0","lectura_actual":"0"},{"id_corr_recfac":1346011,"id_recibo":"001-09775199-57","vencimiento":"20/02/2015","cancelado":"23/02/2015","total":18.45,"estado":"CANCELADO","cod_nota":"","total_pendiente":0,"volumen_facturado":6,"tipo_consumo":"PROM. CONSUMOS","lectura_anterior":"0","lectura_actual":"0"},{"id_corr_recfac":1346010,"id_recibo":"001-09701755-54","vencimiento":"22/01/2015","cancelado":"12/01/2015","total":18.45,"estado":"CANCELADO","cod_nota":"","total_pendiente":0,"volumen_facturado":6,"tipo_consumo":"PROM. CONSUMOS","lectura_anterior":"0","lectura_actual":"0"},{"id_corr_recfac":1346009,"id_recibo":"001-09628816-74","vencimiento":"22/12/2014","cancelado":"26/12/2014","total":18.45,"estado":"CANCELADO","cod_nota":"","total_pendiente":0,"volumen_facturado":6,"tipo_consumo":"PROM. CONSUMOS","lectura_anterior":"0","lectura_actual":"0"},{"id_corr_recfac":1346008,"id_recibo":"001-09555616-36","vencimiento":"21/11/2014","cancelado":"18/11/2014","total":17.85,"estado":"CANCELADO","cod_nota":"","total_pendiente":0,"volumen_facturado":6,"tipo_consumo":"PROM. CONSUMOS","lectura_anterior":"0","lectura_actual":"0"},{"id_corr_recfac":1346007,"id_recibo":"001-09483978-58","vencimiento":"22/10/2014","cancelado":"24/10/2014","total":17.85,"estado":"CANCELADO","cod_nota":"","total_pendiente":0,"volumen_facturado":6,"tipo_consumo":"PROM. CONSUMOS","lectura_anterior":"0","lectura_actual":"0"},{"id_corr_recfac":1346006,"id_recibo":"001-09412441-97","vencimiento":"22/09/2014","cancelado":"29/09/2014","total":17.85,"estado":"CANCELADO","cod_nota":"","total_pendiente":0,"volumen_facturado":6,"tipo_consumo":"PROM. CONSUMOS","lectura_anterior":"0","lectura_actual":"0"},{"id_corr_recfac":1346005,"id_recibo":"001-09340157-27","vencimiento":"21/08/2014","cancelado":"26/08/2014","total":17.85,"estado":"CANCELADO","cod_nota":"","total_pendiente":0,"volumen_facturado":6,"tipo_consumo":"PROM. CONSUMOS","lectura_anterior":"0","lectura_actual":"0"},{"id_corr_recfac":1346004,"id_recibo":"001-09270275-09","vencimiento":"21/07/2014","cancelado":"16/07/2014","total":17.9,"estado":"CANCELADO","cod_nota":"","total_pendiente":0,"volumen_facturado":6,"tipo_consumo":"PROM. CONSUMOS","lectura_anterior":"0","lectura_actual":"0"},{"id_corr_recfac":1346003,"id_recibo":"001-09199827-76","vencimiento":"20/06/2014","cancelado":"30/06/2014","total":16.8,"estado":"CANCELADO","cod_nota":"","total_pendiente":0,"volumen_facturado":6,"tipo_consumo":"PROM. CONSUMOS","lectura_anterior":"0","lectura_actual":"0"},{"id_corr_recfac":1346002,"id_recibo":"001-09154116-27","vencimiento":"21/05/2014","cancelado":"29/05/2014","total":16.75,"estado":"CANCELADO","cod_nota":"","total_pendiente":0,"volumen_facturado":6,"tipo_consumo":"PROM. CONSUMOS","lectura_anterior":"0","lectura_actual":"0"},{"id_corr_recfac":1346001,"id_recibo":"001-09083786-08","vencimiento":"22/04/2014","cancelado":"11/04/2014","total":16.75,"estado":"CANCELADO","cod_nota":"","total_pendiente":0,"volumen_facturado":6,"tipo_consumo":"PROM. CONSUMOS","lectura_anterior":"234","lectura_actual":"0"},{"id_corr_recfac":1346000,"id_recibo":"001-09012719-01","vencimiento":"01/03/2014","cancelado":"07/03/2014","total":2.6,"estado":"CANCELADO","cod_nota":"","total_pendiente":0,"volumen_facturado":0,"tipo_consumo":"SIN CONSUMO GENERADO","lectura_anterior":"SIN LECTURA","lectura_actual":"SIN LECTURA"},{"id_corr_recfac":1345999,"id_recibo":"001-08944232-29","vencimiento":"14/02/2014","cancelado":"07/03/2014","total":2.6,"estado":"CANCELADO","cod_nota":"","total_pendiente":0,"volumen_facturado":0,"tipo_consumo":"SIN CONSUMO GENERADO","lectura_anterior":"SIN LECTURA","lectura_actual":"SIN LECTURA"},{"id_corr_recfac":1345998,"id_recibo":"001-08874666-88","vencimiento":"22/01/2014","cancelado":"07/03/2014","total":2.6,"estado":"CANCELADO","cod_nota":"","total_pendiente":0,"volumen_facturado":0,"tipo_consumo":"SIN CONSUMO GENERADO","lectura_anterior":"SIN LECTURA","lectura_actual":"SIN LECTURA"},{"id_corr_recfac":1345997,"id_recibo":"001-08806600-92","vencimiento":"12/12/2013","cancelado":"30/12/2013","total":2.6,"estado":"CANCELADO","cod_nota":"","total_pendiente":0,"volumen_facturado":0,"tipo_consumo":"SIN CONSUMO GENERADO","lectura_anterior":"SIN LECTURA","lectura_actual":"SIN LECTURA"},{"id_corr_recfac":1345996,"id_recibo":"001-08738775-87","vencimiento":"19/11/2013","cancelado":"30/12/2013","total":2.6,"estado":"CANCELADO","cod_nota":"","total_pendiente":0,"volumen_facturado":0,"tipo_consumo":"SIN CONSUMO GENERADO","lectura_anterior":"SIN LECTURA","lectura_actual":"SIN LECTURA"},{"id_corr_recfac":1345995,"id_recibo":"001-08671229-43","vencimiento":"01/10/2013","cancelado":"16/10/2013","total":2.6,"estado":"CANCELADO","cod_nota":"","total_pendiente":0,"volumen_facturado":0,"tipo_consumo":"SIN CONSUMO GENERADO","lectura_anterior":"SIN LECTURA","lectura_actual":"SIN LECTURA"},{"id_corr_recfac":1345994,"id_recibo":"001-08602935-78","vencimiento":"12/09/2013","cancelado":"16/10/2013","total":2.6,"estado":"CANCELADO","cod_nota":"","total_pendiente":0,"volumen_facturado":0,"tipo_consumo":"SIN CONSUMO GENERADO","lectura_anterior":"SIN LECTURA","lectura_actual":"SIN LECTURA"},{"id_corr_recfac":1345993,"id_recibo":"001-08536719-57","vencimiento":"19/08/2013","cancelado":"16/10/2013","total":2.6,"estado":"CANCELADO","cod_nota":"","total_pendiente":0,"volumen_facturado":0,"tipo_consumo":"SIN CONSUMO GENERADO","lectura_anterior":"SIN LECTURA","lectura_actual":"SIN LECTURA"},{"id_corr_recfac":1345992,"id_recibo":"001-08470565-80","vencimiento":"01/07/2013","cancelado":"04/07/2013","total":2.7,"estado":"CANCELADO","cod_nota":"","total_pendiente":0,"volumen_facturado":0,"tipo_consumo":"SIN CONSUMO GENERADO","lectura_anterior":"SIN LECTURA","lectura_actual":"SIN LECTURA"},{"id_corr_recfac":1345991,"id_recibo":"001-08385484-55","vencimiento":"01/06/2013","cancelado":"04/07/2013","total":2.6,"estado":"CANCELADO","cod_nota":"","total_pendiente":0,"volumen_facturado":0,"tipo_consumo":"SIN CONSUMO GENERADO","lectura_anterior":"SIN LECTURA","lectura_actual":"SIN LECTURA"},{"id_corr_recfac":1345990,"id_recibo":"001-08338134-39","vencimiento":"15/05/2013","cancelado":"04/07/2013","total":2.6,"estado":"CANCELADO","cod_nota":"","total_pendiente":0,"volumen_facturado":0,"tipo_consumo":"SIN CONSUMO GENERADO","lectura_anterior":"SIN LECTURA","lectura_actual":"SIN LECTURA"},{"id_corr_recfac":1345989,"id_recibo":"001-08273103-08","vencimiento":"22/04/2013","cancelado":"04/07/2013","total":2.6,"estado":"CANCELADO","cod_nota":"","total_pendiente":0,"volumen_facturado":0,"tipo_consumo":"SIN CONSUMO GENERADO","lectura_anterior":"SIN LECTURA","lectura_actual":"SIN LECTURA"},{"id_corr_recfac":1345988,"id_recibo":"001-08207865-04","vencimiento":"22/03/2013","cancelado":"15/03/2013","total":2.6,"estado":"CANCELADO","cod_nota":"","total_pendiente":0,"volumen_facturado":0,"tipo_consumo":"SIN CONSUMO GENERADO","lectura_anterior":"SIN LECTURA","lectura_actual":"SIN LECTURA"},{"id_corr_recfac":1345987,"id_recibo":"001-08142316-85","vencimiento":"22/02/2013","cancelado":"19/02/2013","total":4.95,"estado":"CANCELADO","cod_nota":"","total_pendiente":0,"volumen_facturado":1,"tipo_consumo":"DIF.  LECTURAS","lectura_anterior":"233","lectura_actual":"234"},{"id_corr_recfac":1345986,"id_recibo":"001-08058717-50","vencimiento":"01/01/2013","cancelado":"11/01/2013","total":5.25,"estado":"CANCELADO","cod_nota":"","total_pendiente":0,"volumen_facturado":1,"tipo_consumo":"DIF.  LECTURAS","lectura_anterior":"232","lectura_actual":"233"}]};
				var jsondata = data.data;
				var datos = {
					recibos: JSON.stringify(jsondata),
					id: 1,
					mensaje: "HISTORICO DE CONSUMOS DEL SUMINISTRO 10164337 ENCONTRADOS",
					total_encontrados: jsondata.length
				};
				res.write(nunjucks.render("facturacion_cliente.html",datos));			
				res.end();
/*
            } else {
                console.log("mensaje->" + json01.mensaje);
            }
            return body;
        } else {
            console.log('ERROR: ' + response.statusCode);
            console.log(body);
        }
    });*/
}

function getLecturasConsumos(nro_suministro,res,conx,nunjucks){

    var query = "select * from public.f_getlecturas_cliente("+nro_suministro+")"; 

    if(!validaciones.esUnNumSuministroValido(nro_suministro)) {
        utilidades.comunicarError(res,"El número de suministro no puede estar vacío, debe tener solo dígitos pero no más de 8");
        return false;
    }

    conx.conexion.query(query,{
        type: conx.Sequelize.QueryTypes.SELECT, //tipo de consulta
        raw: false  //para que retorne un objeto Model conx.Sequelize
    }).then(function(results){
        //results contiene los resultados de la consulta
        var datos = {
            lecturas: JSON.stringify(results),
            total_encontrados: results.length
        }

        res.write(nunjucks.render("lecturas_cliente.html",datos));
        res.end();
    });
}

function getCuentaCorriente(nro_suministro,res,conx,nunjucks){

    var query = "select * from public.f_getdetallecuentacorriente_cliente("+nro_suministro+")"; 

    if(!validaciones.esUnNumSuministroValido(nro_suministro)) {
        utilidades.comunicarError(res,"El número de suministro no puede estar vacío, debe tener solo dígitos pero no más de 8");
        return false;
    }

    conx.conexion.query(query,{
        type: conx.Sequelize.QueryTypes.SELECT, //tipo de consulta
        raw: false  //para que retorne un objeto Model conx.Sequelize
    }).then(function(results){
        //results contiene los resultados de la consulta
        var datos = {
            cuentaCorriente: JSON.stringify(results),
            total_encontrados: results.length
        }

        res.write(nunjucks.render("cuenta_corriente_cliente.html",datos));
        res.end();
    });

}


module.exports.getDistritosFromProvincia = getDistritosFromProvincia;
module.exports.distanciaTotalRedAgua = distanciaTotalRedAgua;
module.exports.distanciaTotalRedDesague = distanciaTotalRedDesague;
module.exports.getCantClientesActivos = getCantClientesActivos;
module.exports.verCuentaCorriente = verCuentaCorriente;
module.exports.verLecturas = verLecturas;
module.exports.verFacturacion = verFacturacion;

module.exports.getLecturasConsumos = getLecturasConsumos;
module.exports.getCuentaCorriente = getCuentaCorriente;