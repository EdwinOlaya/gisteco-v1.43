(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["analisis_conexion.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<script type=\"text/javascript\">\r\n$(document).ready(function(){\r\n\r\n\t//CONFIGURACIONES PARA EL DATEPICKER\r\n\t$.datepicker.regional.es = {\r\n\t\tcloseText: \"Cerrar\",\r\n\t\tprevText: \"&#x3C;Ant\",\r\n\t\tnextText: \"Sig&#x3E;\",\r\n\t\tcurrentText: \"Hoy\",\r\n\t\tmonthNames: [ \"enero\",\"febrero\",\"marzo\",\"abril\",\"mayo\",\"junio\",\r\n\t\t\"julio\",\"agosto\",\"septiembre\",\"octubre\",\"noviembre\",\"diciembre\" ],\r\n\t\tmonthNamesShort: [ \"ene\",\"feb\",\"mar\",\"abr\",\"may\",\"jun\",\r\n\t\t\"jul\",\"ago\",\"sep\",\"oct\",\"nov\",\"dic\" ],\r\n\t\tdayNames: [ \"domingo\",\"lunes\",\"martes\",\"miércoles\",\"jueves\",\"viernes\",\"sábado\" ],\r\n\t\tdayNamesShort: [ \"dom\",\"lun\",\"mar\",\"mié\",\"jue\",\"vie\",\"sáb\" ],\r\n\t\tdayNamesMin: [ \"D\",\"L\",\"M\",\"M\",\"J\",\"V\",\"S\" ],\r\n\t\tweekHeader: \"Sm\",\r\n\t\tdateFormat: \"yy-mm-dd\",\r\n\t\tfirstDay: 1,\r\n\t\tisRTL: false,\r\n\t\tshowMonthAfterYear: false,\r\n\t\tyearSuffix: \"\" \r\n\t};\r\n\t$.datepicker.setDefaults( $.datepicker.regional[ \"es\" ]);\r\n\t$(\".fechai-agua\").datepicker({\t\t\t\r\n\t\tautoSize: true,\r\n\t\tchangeMonth: true,\r\n    \tchangeYear: true,\r\n\t\tonSelect: function(date){\r\n\t\t\tvar min_date = new Date(date);\r\n\t\t\tmin_date.setDate(min_date.getDate()+2);\r\n\t\t\t$(\".fechaf-agua\").datepicker(\"option\",\"minDate\",min_date);\r\n\t\t}\r\n\t});\r\n\t$(\".fechaf-agua\").datepicker({\r\n\t\tchangeMonth: true,\r\n    \tchangeYear: true,\r\n    \tautoSize: true      \t\t\r\n\t});\r\n\t$(\".fechai-desa\").datepicker({\t\t\t\r\n\t\tchangeMonth: true,\r\n    \tchangeYear: true,\r\n    \tautoSize: true,\r\n\t\tonSelect: function(date){\r\n\t\t\tvar min_date = new Date(date);\r\n\t\t\tmin_date.setDate(min_date.getDate()+2);\r\n\t\t\t$(\".fechaf-desa\").datepicker(\"option\",\"minDate\",min_date);\r\n\t\t}\r\n\t});\r\n\t$(\".fechaf-desa\").datepicker({\t\t\t\r\n\t\tchangeMonth: true,\r\n    \tchangeYear: true,\r\n    \tautoSize: true\r\n\t});\r\n\r\n\t//FIN DATEPICKER\r\n\r\n\tvar teclas_especiales = [8,13];\r\n\t$(\"#form-analisis-conexion .prov-select\").change(function(){\r\n\t\tvar selected = $(this).val();\r\n\t\t\t$.ajax({\r\n\t\t\turl: \"/getDistritosFromProvincia\",\r\n\t\tdata: {id_provincia:selected},\r\n\t\t\tsuccess: function (data){\r\n\t\t\t\t$(\"#form-analisis-conexion .dist-select\").html(data);\r\n\t\t\t}\r\n\t\t});\r\n\t});\t\r\n\r\n\t$(\"#analisis-conexion-btn\").click(function(){\r\n\t\tanalisisConexionCall();\r\n\t});\t\r\n});\r\n\r\nfunction analisisConexionCall(){\r\n\tCATASTRO.realizarAnalisisDeConexion($(\"#form-analisis-conexion .prov-select\").val(),\r\n\t\t$(\"#form-analisis-conexion .dist-select\").val(),\r\n\t\t$(\"#form-analisis-conexion .diameagua-select\").val(),\r\n\t\t$(\"#form-analisis-conexion .mateagua-select\").val(),\r\n\t\t$(\"#form-analisis-conexion .sitagua-select\").val(),\r\n\t\t$(\"#form-analisis-conexion .fechai-agua\").val(),\r\n\t\t$(\"#form-analisis-conexion .fechaf-agua\").val(),\r\n\t\t$(\"#form-analisis-conexion .diamedesa-select\").val(),\r\n\t\t$(\"#form-analisis-conexion .matedesa-select\").val(),\r\n\t\t$(\"#form-analisis-conexion .sitdesa-select\").val(),\r\n\t\t$(\"#form-analisis-conexion .fechai-desa\").val(),\r\n\t\t$(\"#form-analisis-conexion .fechaf-desa\").val()\r\n\t\t);\r\n}\r\n</script>\r\n\r\n<div class = \"modal-header\">\r\n\t<h4 class = \"modal-title\">Análisis de conexión</h4>\r\n</div>\r\n<div class = \"modal-body\">\r\n\t<form action = \"/analisisConexionHtml\" method = \"POST\" target = \"_blank\" id = \"form-analisis-conexion\">\r\n\t\t<div>\r\n\t\t\t<div>\r\n\t\t\t\t<div class = 'izq'>\r\n\t\t\t\t\t<label>Provincia:</label>\r\n\t\t\t\t\t<select name = \"id_provincia\" class = 'prov-select'>\r\n\t\t\t\t\t\t<option value = '0'>TODAS</option>\r\n\t\t\t\t\t\t<option value = '1'>PIURA</option>\r\n\t\t\t\t\t\t<option value = '4'>MORROPON</option>\r\n\t\t\t\t\t\t<option value = '5'>PAITA</option>\r\n\t\t\t\t\t\t<option value = '6'>SULLANA</option>\r\n\t\t\t\t\t\t<option value = '7'>TALARA</option>\r\n\t\t\t\t\t</select>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class = 'der'>\r\n\t\t\t\t\t<label>Distrito:</label>\r\n\t\t\t\t\t<select name = \"id_distrito\" class = 'dist-select'>\r\n\t\t\t\t\t\t<option value = '0'>TODOS</option>\r\n\t\t\t\t\t</select>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div>\r\n\t\t\t\t<div class = 'izq'>\r\n\t\t\t\t\t<h4>Conexión Agua</h4>\r\n\t\t\t\t\t<label>Diámetro:</label>\r\n\t\t\t\t\t<select name = \"id_diametro_conagua\" class = 'diameagua-select'>\r\n\t\t\t\t\t\t<option value = '0'>Elija una opción</option>\r\n\t\t\t\t\t\t<option value = '1'>1/2 \"</option>\r\n\t\t\t\t\t\t<option value = '2'>3/4 \"</option>\r\n\t\t\t\t\t\t<option value = '3'>1 \"</option>\r\n\t\t\t\t\t\t<option value = '4'>1 1/2 \"</option>\r\n\t\t\t\t\t\t<option value = '5'>2 \"</option>\r\n\t\t\t\t\t\t<option value = '6'>3 \"</option>\r\n\t\t\t\t\t\t<option value = '7'>4 \"</option>\r\n\t\t\t\t\t\t<option value = '8'>6 \"</option>\r\n\t\t\t\t\t\t<option value = '9'>8 \"</option>\r\n\t\t\t\t\t\t<option value = '10'>10 \"</option>\r\n\t\t\t\t\t\t<option value = '11'>12 \"</option>\r\n\t\t\t\t\t\t<option value = '90'>NO TIENE</option>\r\n\t\t\t\t\t\t<option value = '91'>DESCONOCIDO</option>\r\n\t\t\t\t\t</select>\r\n\t\t\t\t\t<label>Material</label>\r\n\t\t\t\t\t<select name = \"id_material_conagua\" class = 'mateagua-select'>\r\n\t\t\t\t\t\t<option value = '0'>Elija una opción</option>\r\n\t\t\t\t\t\t<option value = '1'>F.G.</option>\r\n\t\t\t\t\t\t<option value = '2'>P.V.C.</option>\r\n\t\t\t\t\t\t<option value = '3'>PLOMO</option>\r\n\t\t\t\t\t\t<option value = '4'>C.S.N.</option>\r\n\t\t\t\t\t\t<option value = '5'>CONCRETO</option>\r\n\t\t\t\t\t\t<option value = '6'>METAL.</option>\r\n\t\t\t\t\t\t<option value = '7'>LADRILLO</option>\r\n\t\t\t\t\t\t<option value = '8'>OTROS</option>\r\n\t\t\t\t\t\t<option value = '9'>TERMOPLAST</option>\r\n\t\t\t\t\t</select>\r\n\t\t\t\t\t<label>Estado</label>\r\n\t\t\t\t\t<select name = \"id_situacion_conagua\" class = 'sitagua-select'>\r\n\t\t\t\t\t\t<option value = '0'>Elija una opción</option>\r\n\t\t\t\t\t\t<option value = '1'>ACTIVA</option>\r\n\t\t\t\t\t\t<option value = '2'>CORTADA</option>\r\n\t\t\t\t\t\t<option value = '3'>CLAUSURADA</option>\r\n\t\t\t\t\t\t<option value = '4'>LEVANTADA</option>\r\n\t\t\t\t\t</select>\r\n\t\t\t\t\t<label>Fecha Instalación</label>\r\n\t\t\t\t\t<div>\r\n\t\t\t\t\t\t<span>Desde </span><input type = \"text\" name = \"fechai_conagua\" class = 'fechai-agua'>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div>\r\n\t\t\t\t\t\t<span>Hasta </span><input type = \"text\" name = \"fechaf_conagua\" class = 'fechaf-agua'>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class = 'der'>\r\n\t\t\t\t\t<h4>Conexión Desague</h4>\r\n\t\t\t\t\t<label>Diámetro:</label>\r\n\t\t\t\t\t<select name = \"id_diametro_codesa\" class = 'diamedesa-select'>\r\n\t\t\t\t\t\t<option value = '0'>Elija una opción</option>\r\n\t\t\t\t\t\t<option value = '1'>4 \"</option>\r\n\t\t\t\t\t\t<option value = '2'>6 \"</option>\r\n\t\t\t\t\t\t<option value = '3'>8 \"</option>\r\n\t\t\t\t\t\t<option value = '4'>10 \"</option>\r\n\t\t\t\t\t\t<option value = '5'>12 \"</option>\r\n\t\t\t\t\t\t<option value = '6'>14 \"</option>\r\n\t\t\t\t\t\t<option value = '7'>15 \"</option>\r\n\t\t\t\t\t\t<option value = '8'>20 \"</option>\r\n\t\t\t\t\t\t<option value = '9'>25 \"</option>\r\n\t\t\t\t\t\t<option value = '90'>NO TIENE</option>\r\n\t\t\t\t\t\t<option value = '91'>DESCONOCIDO</option>\r\n\t\t\t\t\t</select>\r\n\t\t\t\t\t<label>Material</label>\r\n\t\t\t\t\t<select name = \"id_material_codesa\" class = 'matedesa-select'>\r\n\t\t\t\t\t\t<option value = '0'>Elija una opción</option>\r\n\t\t\t\t\t\t<option value = '1'>F.G.</option>\r\n\t\t\t\t\t\t<option value = '2'>P.V.C.</option>\r\n\t\t\t\t\t\t<option value = '3'>PLOMO</option>\r\n\t\t\t\t\t\t<option value = '4'>C.S.N.</option>\r\n\t\t\t\t\t\t<option value = '5'>CONCRETO</option>\r\n\t\t\t\t\t\t<option value = '6'>METAL.</option>\r\n\t\t\t\t\t\t<option value = '7'>LADRILLO</option>\r\n\t\t\t\t\t\t<option value = '8'>OTROS</option>\r\n\t\t\t\t\t\t<option value = '9'>TERMOPLAST</option>\r\n\t\t\t\t\t</select>\r\n\t\t\t\t\t<label>Estado</label>\r\n\t\t\t\t\t<select name = \"id_situacion_codesa\" class = 'sitdesa-select'>\r\n\t\t\t\t\t\t<option value = '0'>Elija una opción</option>\r\n\t\t\t\t\t\t<option value = '1'>ACTIVA</option>\r\n\t\t\t\t\t\t<option value = '2'>CORTADA</option>\r\n\t\t\t\t\t\t<option value = '3'>CLAUSURADA</option>\r\n\t\t\t\t\t\t<option value = '4'>LEVANTADA</option>\r\n\t\t\t\t\t</select>\r\n\t\t\t\t\t<label>Fecha Alta</label>\r\n\t\t\t\t\t<div>\r\n\t\t\t\t\t\t<span>Desde </span><input type = \"text\" name = \"fechai_codesa\" class = 'fechai-desa'>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div>\r\n\t\t\t\t\t\t<span>Hasta </span><input type = \"text\" name = \"fechaf_codesa\" class = 'fechaf-desa'>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</form>\r\n\t<div class = 'msj'></div>\r\n</div>\r\n<div class = \"modal-footer\">\r\n\t<input type = \"button\" value = \"Consultar\" id = \"analisis-conexion-btn\" class = 'myButton'>\r\n\t<input type = \"button\" value = \"Cancelar\" data-dismiss = \"modal\" class = 'myButton'>\r\n</div>";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["analisis_de_consumos.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<script type=\"text/javascript\">\r\n$(document).ready(function(){\r\n\tvar teclas_especiales = [8,13];\r\n\t$(\"#form-analisis-consumos .prov-select\").change(function(){\r\n\t\tvar selected = $(this).val();\r\n\t\t\t$.ajax({\r\n\t\t\turl: \"/getDistritosFromProvincia\",\r\n\t\tdata: {id_provincia:selected},\r\n\t\t\tsuccess: function (data){\r\n\t\t\t\t$(\"#form-analisis-consumos .dist-select\").html(data);\r\n\t\t\t}\r\n\t\t});\r\n\t});\r\n\t$(\"#form-analisis-consumos .numeric\").keypress(function(evt){\t\t\r\n\t\tvar key = evt.which || window.event.keyCode;\r\n\t\tif(teclas_especiales.indexOf(key) == -1){\t\t\t\r\n\t\t\treturn DATA_PARSER.numericInputValidation(String.fromCharCode(key)); \r\n\t\t}\r\n\t});\r\n\t$(\"#form-analisis-consumos .numero-medidor\").keypress(function(evt){\t\t\r\n\t\tvar key = evt.which || window.event.keyCode;\r\n\t\tif(teclas_especiales.indexOf(key) == -1){\t\t\t\r\n\t\t\treturn DATA_PARSER.alfaNumericInputValidation(String.fromCharCode(key)); \r\n\t\t}\r\n\t});\r\n\r\n\t$(\"#analisis-consumos-btn\").click(function(){\r\n\t\tanalisisConsumosCall();\r\n\t});\t\r\n});\r\n\r\nfunction analisisConsumosCall(){\r\n\tMEDICION.realizarAnalisisDeConsumos($(\"#form-analisis-consumos .prov-select\").val(),\r\n\t\t$(\"#form-analisis-consumos .dist-select\").val(),\r\n\t\t$(\"#form-analisis-consumos .primera-cond-consumo-select\").val(),\r\n\t\t$(\"#form-analisis-consumos .segunda-cond-consumo-select\").val(),\r\n\t\t$(\"#form-analisis-consumos .primer-param-consumo\").val(),\r\n\t\t$(\"#form-analisis-consumos .segundo-param-consumo\").val(),\r\n\t\t$(\"#form-analisis-consumos .operador-radio:checked\").val(),\r\n\t\t$(\"#form-analisis-consumos .anio\").val(),\r\n\t\t$(\"#form-analisis-consumos .mes\").val(),\r\n\t\t$(\"#form-analisis-consumos .numero-medidor\").val(),\r\n\t\t$(\"#form-analisis-consumos input[name='filtro']:checked\").val()\r\n\t\t);\r\n}\r\n</script>\r\n\r\n<div class = \"modal-header\">\r\n\t<h4 class = \"modal-title\">Análisis de consumos</h4>\r\n</div>\r\n<div class = \"modal-body\">\r\n\t<form action = \"/analisisConsumosHtml\" method = \"POST\" target = \"_blank\" id = \"form-analisis-consumos\">\t\r\n\t\t<div>\r\n\t\t\t<label>Provincia:</label>\r\n\t\t\t<select name = \"id_provincia\" class = 'prov-select'>\r\n\t\t\t\t<option value = '0'>TODAS</option>\r\n\t\t\t\t<option value = '1'>PIURA</option>\r\n\t\t\t\t<option value = '4'>MORROPON</option>\r\n\t\t\t\t<option value = '5'>PAITA</option>\r\n\t\t\t\t<option value = '6'>SULLANA</option>\r\n\t\t\t\t<option value = '7'>TALARA</option>\r\n\t\t\t</select>\r\n\t\t\t<label>Distrito:</label>\r\n\t\t\t<select name = \"id_distrito\" class = 'dist-select'>\r\n\t\t\t\t<option value = '0'>TODOS</option>\r\n\t\t\t</select>\r\n\t\t\t<label><input type = 'radio' class = 'consumo-opt' name = 'filtro' value = '0' checked>Consumo</label>\r\n\t\t\t<div>\r\n\t\t\t\t<select name = 'primera_condicion_consumo' class = 'primera-cond-consumo-select'>\r\n\t\t\t\t\t<option value = '0'></option>\r\n\t\t\t\t\t<option value = '1'>Es igual a</option>\r\n\t\t\t\t\t<option value = '2'>No es igual a</option>\r\n\t\t\t\t\t<option value = '3'>Es mayor que</option>\r\n\t\t\t\t\t<option value = '4'>Es mayor o igual que</option>\r\n\t\t\t\t\t<option value = '5'>Es menor que</option>\r\n\t\t\t\t\t<option value = '6'>Es menor o igual que</option>\r\n\t\t\t\t</select>\r\n\t\t\t\t<input type = 'text' name = 'primer_parametro_consumo' class = 'primer-param-consumo numeric'>\r\n\t\t\t</div>\r\n\t\t\tY <input type = 'radio' name = 'operador' value = '0' class = 'operador-radio' checked> O <input type = 'radio' name = 'operador' value = '1' class = 'operador-radio'>\r\n\t\t\t<div>\r\n\t\t\t\t<select name = 'segunda_condicion_consumo' class = 'segunda-cond-consumo-select'>\r\n\t\t\t\t\t<option value = '0'></option>\r\n\t\t\t\t\t<option value = '1'>Es igual a</option>\r\n\t\t\t\t\t<option value = '2'>No es igual a</option>\r\n\t\t\t\t\t<option value = '3'>Es mayor que</option>\r\n\t\t\t\t\t<option value = '4'>Es mayor o igual que</option>\r\n\t\t\t\t\t<option value = '5'>Es menor que</option>\r\n\t\t\t\t\t<option value = '6'>Es menor o igual que</option>\r\n\t\t\t\t</select>\r\n\t\t\t\t<input type = 'text' name = 'segundo_parametro_consumo' class = 'segundo-param-consumo numeric'>\r\n\t\t\t</div>\t\t\t\r\n\t\t\t<div>\r\n\t\t\t\t<label><input type = 'radio' class = 'medidor-opt' name = 'filtro' value = '1'>Nro. Medidor</label>\r\n\t\t\t\t<input type = 'text' name = 'numero_medidor' class = 'numero-medidor'>\r\n\t\t\t</div>\r\n\t\t\t<label>Período</label>\r\n\t\t\t<div class = 'periodo'>\r\n\t\t\t\t<div class = 'anio-div'>\r\n\t\t\t\t\t<label>Año</label>\r\n\t\t\t\t\t<input type = 'text' name = 'anio' class = 'anio numeric'>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class = 'mes-div'>\r\n\t\t\t\t\t<label>Mes</label>\r\n\t\t\t\t\t<input type = 'text' name = 'mes' class = 'mes numeric'>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</form>\r\n\t<div class = 'msj'></div>\r\n</div>\r\n<div class = \"modal-footer\">\r\n\t<input type = \"button\" value = \"Consultar\" id = \"analisis-consumos-btn\" class = 'myButton'>\r\n\t<input type = \"button\" value = \"Cancelar\" data-dismiss = \"modal\" class = 'myButton'>\r\n</div>";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["analisis_de_deudas.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<script type=\"text/javascript\">\r\n\t$(document).ready(function(){\r\n\r\n\t\tvar teclas_especiales = [8,13];\r\n\r\n\t\t$(\"#form-analisis-deudas .prov-select\").change(function(){\r\n\t\t\tvar selected = $(this).val();\r\n\r\n\t\t\t$.ajax({\r\n\t\t\t\turl: \"/getDistritosFromProvincia\",\r\n\t\t\t\tdata: {id_provincia:selected},\r\n\t\t\t\tsuccess: function (data){\r\n\t\t\t\t\t$(\"#form-analisis-deudas .dist-select\").html(data);\r\n\t\t\t\t}\r\n\t\t\t});\r\n\t\t});\r\n\r\n\t\t$(\"#form-analisis-deudas .real\").keypress(function(evt){\t\t\r\n\t\t\tvar key = evt.which || window.event.keyCode;\r\n\r\n\t\t\tif(!(teclas_especiales.indexOf(key) != -1 || key == 46)){\t\t\t\r\n\t\t\t\treturn DATA_PARSER.numericInputValidation(String.fromCharCode(key)); \r\n\t\t\t}\r\n\t\t});\r\n\r\n\t\t$(\"#form-analisis-deudas .numeric\").keypress(function(evt){\t\t\r\n\t\t\tvar key = evt.which || window.event.keyCode;\r\n\r\n\t\t\tif(teclas_especiales.indexOf(key) == -1){\t\t\t\r\n\t\t\t\treturn DATA_PARSER.numericInputValidation(String.fromCharCode(key)); \r\n\t\t\t}\r\n\t\t});\r\n\r\n\t\t$(\"#analisis-deudas-btn\").click(function(){\t\t\r\n\t\t\tanalisisDeudasCall();\t\t\t\r\n\t\t});\r\n\t});\r\n\r\nfunction analisisDeudasCall(){\r\n\tCOBRANZAS.realizarAnalisisDeDeuda($(\"#form-analisis-deudas .prov-select\").val(),\r\n\t\t$(\"#form-analisis-deudas .dist-select\").val(),\r\n\t\t$(\"#form-analisis-deudas .primera-cond-deuda-select\").val(),\r\n\t\t$(\"#form-analisis-deudas .segunda-cond-deuda-select\").val(),\r\n\t\t$(\"#form-analisis-deudas .primer-param-deuda\").val(),\r\n\t\t$(\"#form-analisis-deudas .segundo-param-deuda\").val(),\r\n\t\t$(\"#form-analisis-deudas .operador-radio:checked\").val(),\r\n\t\t$(\"#form-analisis-deudas .min-cant-recibos\").val(),\r\n\t\t$(\"#form-analisis-deudas .max-cant-recibos\").val(),\r\n\t\t$(\"#form-analisis-deudas .anio\").val(),\r\n\t\t$(\"#form-analisis-deudas .mes\").val());\r\n}\r\n</script>\r\n\r\n<div class = \"modal-header\">\r\n\t<h4 class = \"modal-title\">Análisis de deudas</h4>\r\n</div>\r\n<div class = \"modal-body\">\r\n\t<form action = \"/analisisDeudaHtml\" method = \"POST\" target = \"_blank\" id = \"form-analisis-deudas\">\r\n\t<div>\t\t\r\n\t\t<label>Provincia:</label>\r\n\t\t<select name = \"id_provincia\" class = 'prov-select'>\r\n\t\t\t<option value = '0'>TODAS</option>\r\n\t\t\t<option value = '1'>PIURA</option>\r\n\t\t\t<option value = '4'>MORROPON</option>\r\n\t\t\t<option value = '5'>PAITA</option>\r\n\t\t\t<option value = '6'>SULLANA</option>\r\n\t\t\t<option value = '7'>TALARA</option>\r\n\t\t</select>\r\n\t\t<label>Distrito:</label>\r\n\t\t<select name = \"id_distrito\" class = 'dist-select'>\r\n\t\t\t<option value = '0'>TODOS</option>\r\n\t\t</select>\t\t\r\n\t\t<label>Deuda</label>\r\n\t\t<div>\r\n\t\t\t<select name = \"primera_condicion_deuda\" class = 'primera-cond-deuda-select'>\r\n\t\t\t\t<option value = '0'></option>\r\n\t\t\t\t<option value = '1'>Es igual a</option>\r\n\t\t\t\t<option value = '2'>No es igual a</option>\r\n\t\t\t\t<option value = '3'>Es mayor que</option>\r\n\t\t\t\t<option value = '4'>Es mayor o igual que</option>\r\n\t\t\t\t<option value = '5'>Es menor que</option>\r\n\t\t\t\t<option value = '6'>Es menor o igual que</option>\r\n\t\t\t</select>\r\n\t\t\t<input type = 'text' name = \"primer_parametro_deuda\" class = 'primer-param-deuda real'>\r\n\t\t</div>\r\n\t\tY <input type = 'radio' name = 'operador' value = '0' class = 'operador-radio' checked> O <input type = 'radio' name = 'operador' value = '1' class = 'operador-radio'>\r\n\t\t<div>\r\n\t\t\t<select name = \"segunda_condicion_deuda\" class = 'segunda-cond-deuda-select'>\r\n\t\t\t\t<option value = '0'></option>\r\n\t\t\t\t<option value = '1'>Es igual a</option>\r\n\t\t\t\t<option value = '2'>No es igual a</option>\r\n\t\t\t\t<option value = '3'>Es mayor que</option>\r\n\t\t\t\t<option value = '4'>Es mayor o igual que</option>\r\n\t\t\t\t<option value = '5'>Es menor que</option>\r\n\t\t\t\t<option value = '6'>Es menor o igual que</option>\r\n\t\t\t</select>\r\n\t\t\t<input type = 'text' name = \"segundo_parametro_deuda\" class = 'segundo-param-deuda real'>\r\n\t\t</div>\r\n\t\t<label>Cantidad de recibos vencidos</label>\r\n\t\t<div class = 'cant-recibos'>\r\n\t\t\t<div class = 'min-cant-div'>\r\n\t\t\t\t<label>Mayor a</label>\r\n\t\t\t\t<input type = 'text' name = 'min_cant_recibos' class = 'min-cant-recibos numeric'>\r\n\t\t\t</div>\r\n\t\t\t<div class = 'max-cant-div'>\r\n\t\t\t\t<label>Menor a</label>\r\n\t\t\t\t<input type = 'text' name = 'max_cant_recibos' class = 'max-cant-recibos numeric'>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<label>Período</label>\r\n\t\t<div class = 'periodo'>\r\n\t\t\t<div class = 'anio-div'>\r\n\t\t\t\t<label>Año</label>\r\n\t\t\t\t<input type = 'text' name = 'anio' class = 'anio numeric'>\r\n\t\t\t</div>\r\n\t\t\t<div class = 'mes-div'>\r\n\t\t\t\t<label>Mes</label>\r\n\t\t\t\t<input type = 'text' name = 'mes' class = 'mes numeric'>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\t\t\r\n\t</form>\r\n\t<div class = 'msj'></div>\r\n</div>\r\n<div class = \"modal-footer\">\r\n\t<input type = \"button\" value = \"Consultar\" id = \"analisis-deudas-btn\" class = 'myButton'>\r\n\t<input type = \"button\" value = \"Cancelar\" data-dismiss = \"modal\" class = 'myButton'>\r\n</div>\r\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["analisis_de_usuarios.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<script type=\"text/javascript\">\r\n$(document).ready(function(){\r\n\r\n\tvar teclas_especiales = [8,13];\r\n\r\n\t$(\"#form-analisis-usuarios .prov-select\").change(function(){\r\n\t\tvar selected = $(this).val();\r\n\r\n\t\t$.ajax({\r\n\t\t\turl: \"/getDistritosFromProvincia\",\r\n\t\t\tdata: {id_provincia:selected},\r\n\t\t\tsuccess: function (data){\r\n\t\t\t\t$(\"#form-analisis-usuarios .dist-select\").html(data);\r\n\t\t\t}\r\n\t\t});\r\n\t});\r\n\r\n\t$(\"#form-analisis-usuarios .numeric\").keypress(function(evt){\t\t\r\n\t\tvar key = evt.which || window.event.keyCode;\r\n\r\n\t\tif(teclas_especiales.indexOf(key) == -1){\t\t\t\r\n\t\t\treturn DATA_PARSER.numericInputValidation(String.fromCharCode(key)); \r\n\t\t}\r\n\r\n\t\tif(key == 13){analisisUsuariosCall();}\r\n\t});\r\n\r\n\t$(\"#form-analisis-usuarios .text\").keypress(function(evt){\r\n\t\tvar key = evt.which || window.event.keyCode;\r\n\t\t//console.log(\"código de tecla presionada: \"+key+\" caracter: \"+String.fromCharCode(key));//ELIMINAR\r\n\t\tif(teclas_especiales.indexOf(key) == -1){\r\n\t\t\treturn DATA_PARSER.textInputValidation(String.fromCharCode(key));\r\n\t\t}\r\n\r\n\t\tif(key == 13){\r\n\t\t\tanalisisUsuariosCall();\r\n\t\t}\r\n\t});\r\n\r\n\t$(\"#analisis-clientes-btn\").click(function(){\r\n\t\tanalisisUsuariosCall();\r\n\t});\r\n});\r\n\r\nfunction analisisUsuariosCall(){\r\n\tCATASTRO.realizarAnalisisDeUsuarios($(\"#form-analisis-usuarios .prov-select\").val(),\r\n\t\t\t$(\"#form-analisis-usuarios .dist-select\").val(),\r\n\t\t\t$(\"#form-analisis-usuarios .nombre-cliente-input\").val(),\r\n\t\t\t$(\"#form-analisis-usuarios .nro-inscr-input\").val(),\r\n\t\t\t$(\"#form-analisis-usuarios input[name='filtro']:checked\").val());\r\n}\r\n\r\n</script>\r\n\r\n<div class = \"modal-header\">\r\n\t<h4 class = \"modal-title\">Análisis de usuarios</h4>\r\n</div>\r\n<div class = \"modal-body\">\r\n\t<form action = \"/analisisUsuariosHtml\" method = \"POST\" target = \"_blank\" id = \"form-analisis-usuarios\">\r\n\t\t<div>\t\t\r\n\t\t\t<label>Provincia:</label>\r\n\t\t\t<select name = \"id_provincia\" class = 'prov-select'>\r\n\t\t\t\t<option value = '0'>TODAS</option>\r\n\t\t\t\t<option value = '1'>PIURA</option>\r\n\t\t\t\t<option value = '4'>MORROPON</option>\r\n\t\t\t\t<option value = '5'>PAITA</option>\r\n\t\t\t\t<option value = '6'>SULLANA</option>\r\n\t\t\t\t<option value = '7'>TALARA</option>\r\n\t\t\t</select>\r\n\t\t\t<label>Distrito:</label>\r\n\t\t\t<select name = \"id_distrito\" class = 'dist-select'>\r\n\t\t\t\t<option value = '0'>TODOS</option>\r\n\t\t\t</select>\t\t\r\n\t\t\t<label><input type = 'radio' name = 'filtro' value = '0' class = 'nombre_opt' checked> <span>Nombre:</span></label>\r\n\t\t\t<input type = 'text' name = \"nombre_titular\" class = 'nombre-cliente-input text'>\r\n\t\t\t<label><input type = 'radio' name = 'filtro' value = '1' class = 'suministro_opt'> <span>Nro. de inscripción:</span></label>\r\n\t\t\t<input type = 'text' name = \"nro_suministro\" class = 'nro-inscr-input numeric'>\r\n\t\t</div>\t\t\r\n\t</form>\r\n\t<div class = 'msj'></div>\r\n</div>\r\n<div class = \"modal-footer\">\r\n\t<input type = \"button\" value = \"Buscar\" id = \"analisis-clientes-btn\" class = 'myButton'>\r\n\t<input type = \"button\" value = \"Cancelar\" data-dismiss = \"modal\" class = 'myButton'>\r\n</div>";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["analisis_social.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<script type=\"text/javascript\">\r\n$(document).ready(function(){\r\n\t\r\n\t$(\"#form-analisis-social .prov-select\").change(function(){\r\n\t\tvar selected = $(this).val();\r\n\t\t\t$.ajax({\r\n\t\t\turl: \"/getDistritosFromProvincia\",\r\n\t\tdata: {id_provincia:selected},\r\n\t\t\tsuccess: function (data){\r\n\t\t\t\t$(\"#form-analisis-social .dist-select\").html(data);\r\n\t\t\t}\r\n\t\t});\r\n\t});\r\n\r\n\t\r\n\t$(\"#analisis-social-btn\").click(function(){\r\n\t\tanalisisSocialCall();\r\n\t});\r\n});\r\n\r\nfunction analisisSocialCall(){\r\n\tCATASTRO.realizarAnalisisComercialSocial($(\"#form-analisis-social .prov-select\").val(),\r\n\t\t$(\"#form-analisis-social .dist-select\").val(),\r\n\t\t$(\"#form-analisis-social .tipserv-select\").val(),\r\n\t\t$(\"#form-analisis-social .tipconst-select\").val(),\r\n\t\t$(\"#form-analisis-social .tipprop-select\").val(),\r\n\t\t$(\"#form-analisis-social .estpre-select\").val(),\r\n\t\t$(\"#form-analisis-social .sitcnxag-select\").val()\r\n\t\t);\r\n}\r\n</script>\r\n\r\n<div class = \"modal-header\">\r\n\t<h4 class = \"modal-title\">Análisis Comercial y Social</h4>\r\n</div>\r\n<div class = \"modal-body\">\r\n\t<form action = \"/analisisSocialHtml\" method = \"POST\" target = \"_blank\" id = \"form-analisis-social\">\r\n\t\t<div>\t\t\t\r\n\t\t\t<label>Provincia:</label>\r\n\t\t\t<select name = \"id_provincia\" class = 'prov-select'>\r\n\t\t\t\t<option value = '0'>TODAS</option>\r\n\t\t\t\t<option value = '1'>PIURA</option>\r\n\t\t\t\t<option value = '4'>MORROPON</option>\r\n\t\t\t\t<option value = '5'>PAITA</option>\r\n\t\t\t\t<option value = '6'>SULLANA</option>\r\n\t\t\t\t<option value = '7'>TALARA</option>\r\n\t\t\t</select>\r\n\t\t\t<label>Distrito:</label>\r\n\t\t\t<select name = \"id_distrito\" class = 'dist-select'>\r\n\t\t\t\t<option value = '0'>TODOS</option>\r\n\t\t\t</select>\r\n\t\t\t<label>Tipo de servicio:</label>\r\n\t\t\t<select name = \"id_tipo_servicio\" class = 'tipserv-select'>\r\n\t\t\t\t<option value = '0'>Elija una opción</option>\r\n\t\t\t\t<option value = '1'>AGUA Y DESAGUE</option>\r\n\t\t\t\t<option value = '2'>AGUA</option>\r\n\t\t\t\t<option value = '3'>DESAGUE</option>\r\n\t\t\t</select>\r\n\t\t\t<label>Tipo de construcción</label>\r\n\t\t\t<select name = \"id_tipo_construccion\" class = 'tipconst-select'>\r\n\t\t\t\t<option value = '0'>Elija una opción</option>\r\n\t\t\t\t<option value = '1'>SIN CONSTRUIR</option>\r\n\t\t\t\t<option value = '2'>CASA O VIVIENDA</option>\r\n\t\t\t\t<option value = '3'>EDIFCIO</option>\r\n\t\t\t\t<option value = '4'>VIVIENDA EN EDIFICIO</option>\r\n\t\t\t</select>\r\n\t\t\t<label>tipo de inmueble</label>\r\n\t\t\t<select name = \"id_tipo_propiedad\" class = 'tipprop-select'>\r\n\t\t\t\t<option value = '0'>Elija una opción</option>\r\n\t\t\t\t<option value = '1'>PRIVADA</option>\r\n\t\t\t\t<option value = '2'>PUBLICA</option>\r\n\t\t\t\t<option value = '3'>MIXTA</option>\r\n\t\t\t</select>\r\n\t\t\t<label>Estado del predio</label>\r\n\t\t\t<select name = \"id_estado_predio\" class = 'estpre-select'>\r\n\t\t\t\t<option value = '0'>Elija una opción</option>\r\n\t\t\t\t<option value = '1'>REAL</option>\r\n\t\t\t\t<option value = '2'>FACTIBLE</option>\r\n\t\t\t\t<option value = '3'>POTENCIAL</option>\r\n\t\t\t\t<option value = '4'>ANULADA</option>\r\n\t\t\t</select>\r\n\t\t\t<label>Estado del servicio</label>\r\n\t\t\t<select name = \"id_situacion_conagua\" class = 'sitcnxag-select'>\r\n\t\t\t\t<option value = '0'>Elija una opción</option>\r\n\t\t\t\t<option value = '1'>ACTIVA</option>\r\n\t\t\t\t<option value = '2'>CORTADA</option>\r\n\t\t\t\t<option value = '3'>CLAUSURADA</option>\r\n\t\t\t\t<option value = '4'>LEVANTADA</option>\r\n\t\t\t</select>\r\n\t\t</div>\r\n\t</form>\r\n\t<div class = 'msj'></div>\r\n</div>\r\n<div class = \"modal-footer\">\r\n\t<input type = \"button\" value = \"Consultar\" id = \"analisis-social-btn\" class = 'myButton'>\r\n\t<input type = \"button\" value = \"Cancelar\" data-dismiss = \"modal\" class = 'myButton'>\r\n</div>";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["bienvenida.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<label>id_usuario:</label><label>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "id_usuario"), env.opts.autoescape);
output += "</label><br/>\r\n<label>apellido_paterno:</label><label>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "apellido_paterno"), env.opts.autoescape);
output += "</label><br/>\r\n<label>apellido_materno:</label><label>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "apellido_materno"), env.opts.autoescape);
output += "</label><br/>\r\n<label>nombre:</label><label>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "nombres"), env.opts.autoescape);
output += "</label><br/>";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["buscar_cliente.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<script type=\"text/javascript\">\r\n$(document).ready(function(){\r\n\r\n\tvar teclas_especiales = [8,13];\t\r\n\r\n\t$(\"#numero-suministro-input\").keypress(function(evt){\r\n\t\t\r\n\t\tvar key = evt.which || window.event.keyCode;\r\n\t\t\r\n\t\tif(teclas_especiales.indexOf(key) == -1){\t\t\t\r\n\t\t\treturn DATA_PARSER.numericInputValidation(String.fromCharCode(key)); \r\n\t\t}\r\n\t\t//se ha presionado enter\r\n\t\tif (key == 13) {ubicarClienteCall();}\r\n\t});\r\n\r\n\t$(\"#buscar-cliente-nro-suministro-btn\").click(function(){\t\t\r\n\t\tubicarClienteCall();\r\n\t});\r\n\r\n});\r\n\r\nfunction ubicarClienteCall(){\r\n\tCATASTRO.ubicarCliente($('#numero-suministro-input').val());\r\n}\r\n</script>\r\n\r\n<div class = \"modal-header\">\r\n\t<h4 class = \"modal-title\">Buscar Cliente</h4>\r\n</div>\r\n<div class = \"modal-body\">\r\n\t<span>Ingrese número de suministro</span>\r\n\t<input type = \"text\" id = \"numero-suministro-input\" >\r\n\t<div class = 'msj'></div>\r\n</div>\r\n<div class = \"modal-footer\">\r\n\t<input type = \"button\" value = \"Buscar\" id = \"buscar-cliente-nro-suministro-btn\" class = 'myButton'></input>\r\n\t<input type = \"button\" value = \"Cancelar\" data-dismiss = \"modal\" class = 'myButton'>\r\n</div>";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["buscar_por_cod_cat.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<script type=\"text/javascript\">\r\n$(document).ready(function(){\r\n\r\n\tvar teclas_especiales = [8,13];\r\n\r\n\t$(\"#buscar-cliente-por-cod-cat-div .numeric\").keypress(function(evt){\r\n\r\n\t\tvar key = evt.which || window.event.keyCode;\r\n\r\n\t\tif(teclas_especiales.indexOf(key) == -1){\t\t\t\r\n\t\t\treturn DATA_PARSER.numericInputValidation(String.fromCharCode(key)); \r\n\t\t}\r\n\r\n\t\tif (key == 13) {busquedaPorCodCatCall();}\r\n\t});\r\n\r\n\t$(\"#buscar-cliente-cod-cat-btn\").click(function(){\r\n\t\tbusquedaPorCodCatCall();\r\n\t});\r\n\r\n});\r\n\r\nfunction busquedaPorCodCatCall(){\r\n\tCATASTRO.busquedaPorCodCat($('#preregion-input').val(),\r\n\t\t\t$('#prezona-input').val(),\r\n\t\t\t$('#presector-input').val(),\r\n\t\t\t$('#premanzana-input').val(),\r\n\t\t\t$('#prelote-input').val()\r\n\t\t);\r\n}\r\n</script>\r\n\r\n<div class = \"modal-header\">\r\n\t<h4 class = \"modal-title\">Buscar Cliente</h4>\r\n</div>\r\n<div class = \"modal-body\">\r\n\t<div id = \"buscar-cliente-por-cod-cat-div\">\r\n\t\t<div>\r\n\t\t\t<span>región</span>\r\n\t\t\t<input type = \"text\" class = 'numeric' id = \"preregion-input\" value = \"1\">\r\n\t\t</div>\r\n\t\t<div>\r\n\t\t\t<span>zona</span>\r\n\t\t\t<input type = \"text\" class = 'numeric' id = \"prezona-input\">\r\n\t\t</div>\r\n\t\t<div>\r\n\t\t\t<span>sector</span>\r\n\t\t\t<input type = \"text\" class = 'numeric' id = \"presector-input\">\r\n\t\t</div>\r\n\t\t<div>\t\r\n\t\t\t<span>mz</span>\r\n\t\t\t<input type = \"text\" class = 'numeric' id = \"premanzana-input\">\r\n\t\t</div>\r\n\t\t<div>\r\n\t\t\t<span>lote</span>\r\n\t\t\t<input type = \"text\" class = 'numeric' id = \"prelote-input\">\r\n\t\t</div>\r\n\t</div>\r\n\t<div class = 'msj'></div>\r\n</div>\r\n<div class = \"modal-footer\">\r\n\t<input type = \"button\" value = \"Buscar\" id = \"buscar-cliente-cod-cat-btn\" class = 'myButton'>\r\n\t<input type = \"button\" value = \"Cancelar\" data-dismiss = \"modal\" class = 'myButton'>\r\n</div>";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["combo_distritos.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<option value = '0'>TODOS</option>\r\n";
frame = frame.push();
var t_3 = runtime.contextOrFrameLookup(context, frame, "distritos");
if(t_3) {var t_2 = t_3.length;
for(var t_1=0; t_1 < t_3.length; t_1++) {
var t_4 = t_3[t_1];
frame.set("item", t_4);
frame.set("loop.index", t_1 + 1);
frame.set("loop.index0", t_1);
frame.set("loop.revindex", t_2 - t_1);
frame.set("loop.revindex0", t_2 - t_1 - 1);
frame.set("loop.first", t_1 === 0);
frame.set("loop.last", t_1 === t_2 - 1);
frame.set("loop.length", t_2);
output += "\r\n<option value = '";
output += runtime.suppressValue(runtime.memberLookup((t_4),"id_distrito", env.opts.autoescape), env.opts.autoescape);
output += "'>";
output += runtime.suppressValue(runtime.memberLookup((t_4),"nombre_distrito", env.opts.autoescape), env.opts.autoescape);
output += "</option>\r\n";
;
}
}
frame = frame.pop();
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["conexion_agua_ficha_catastral_catacaos.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<h3 class = 'title-sec'><span class = 'subrayado'>Conexión de agua</span></h3>\r\n<div>\r\n\t<div class = 'izq'>\t\t\r\n\t\t<p class = 'dato-izq'><label>Situación:</label> <span class = 'dato'>";
output += runtime.suppressValue(env.getFilter("filtro_sitcnxag_catacaos").call(context, runtime.contextOrFrameLookup(context, frame, "sitcnxag")), env.opts.autoescape);
output += "</span></p>\r\n\t\t<p class = 'dato-der'><label>Estado de la conexión:</label> <span class = 'dato'>";
output += runtime.suppressValue(env.getFilter("filtro_concnxag_catacaos").call(context, runtime.contextOrFrameLookup(context, frame, "concnxag")), env.opts.autoescape);
output += "</span></p>\r\n\t</div>\r\n\t<div class = 'der'>\r\n\t\t<p class = 'dato-izq'><label>Diámetro conexión:</label> <span class = 'dato'>";
output += runtime.suppressValue(env.getFilter("filtro_diacnxag_catacaos").call(context, runtime.contextOrFrameLookup(context, frame, "diacnxag")), env.opts.autoescape);
output += "</span></p>\r\n\t\t<p class = 'dato-der'><label>Material conexión:</label> <span class = 'dato'>";
output += runtime.suppressValue(env.getFilter("filtro_matcnxag_catacaos").call(context, runtime.contextOrFrameLookup(context, frame, "matcnxag")), env.opts.autoescape);
output += "</span></p>\r\n\t</div>\t\t\r\n</div>\r\n<div>\t\t\r\n\t<div class = 'izq'>\r\n\t\t<p class = 'dato-izq'><label>Marco/Tapa:</label> <span class = 'dato'>";
output += runtime.suppressValue(env.getFilter("filtro_si_no").call(context, runtime.contextOrFrameLookup(context, frame, "martapag")), env.opts.autoescape);
output += "</span></p>\r\n\t\t<p class = 'dato-der'><label>Material Mco Tapa:</label> <span class = 'dato'>";
output += runtime.suppressValue(env.getFilter("filtro_matemtag_catacaos").call(context, runtime.contextOrFrameLookup(context, frame, "matemtag")), env.opts.autoescape);
output += "</span></p>\r\n\t</div>\r\n\t<div class = 'der'>\r\n\t\t<p class = 'dato-izq'><label>Conservación Mco y Tapa:</label> <span class = 'dato'>";
output += runtime.suppressValue(env.getFilter("filtro_estmtag_catacaos").call(context, runtime.contextOrFrameLookup(context, frame, "estmtag")), env.opts.autoescape);
output += "</span></p>\t\r\n\t</div>\r\n</div>\r\n<div>\r\n\t<div class = 'izq'>\t\t\t\r\n\t\t<p class = 'dato-izq'><label>Caja:</label> <span class = 'dato'>";
output += runtime.suppressValue(env.getFilter("filtro_si_no").call(context, runtime.contextOrFrameLookup(context, frame, "cajcnxag")), env.opts.autoescape);
output += "</span></p>\t\r\n\t\t<p class = 'dato-der'><label>Material caja:</label> <span class = 'dato'>";
output += runtime.suppressValue(env.getFilter("filtro_matcajag_catacaos").call(context, runtime.contextOrFrameLookup(context, frame, "matcajag")), env.opts.autoescape);
output += "</span></p>\r\n\t</div>\r\n\t<div class = 'der'>\r\n\t\t<p class = 'dato-izq'><label>Estado conservación caja:</label> <span class = 'dato'>";
output += runtime.suppressValue(env.getFilter("filtro_estado_conservacion").call(context, runtime.contextOrFrameLookup(context, frame, "estcajag")), env.opts.autoescape);
output += "</span></p>\r\n\t\t<p class = 'dato-der'><label>Localización caja medidor:</label> <span class = 'dato'>";
output += runtime.suppressValue(env.getFilter("filtro_loccajme_catacaos").call(context, runtime.contextOrFrameLookup(context, frame, "loccajme")), env.opts.autoescape);
output += "</span></p>\r\n\t</div>\r\n</div>\r\n<div>\r\n\t<div class = 'izq'>\r\n\t\t<p class = 'dato-izq'><label>Medidor Instalado:</label> <span class = 'dato'>";
output += runtime.suppressValue(env.getFilter("filtro_si_no").call(context, runtime.contextOrFrameLookup(context, frame, "medidor")), env.opts.autoescape);
output += "</span></p>\r\n\t\t<p class = 'dato-der'><label>Diámetro medidor:</label> <span class = 'dato'>";
output += runtime.suppressValue(env.getFilter("filtro_diamedid_catacaos").call(context, runtime.contextOrFrameLookup(context, frame, "diamedid")), env.opts.autoescape);
output += "</span></p>\r\n\t</div>\r\n\t<div class = 'der'>\t\t\t\t\r\n\t\t<p class = 'dato-izq'><label>Fabricante:</label> <span class = 'dato'>";
output += runtime.suppressValue(env.getFilter("filtro_fabrican_catacaos").call(context, runtime.contextOrFrameLookup(context, frame, "fabrican"),runtime.contextOrFrameLookup(context, frame, "otfabrican")), env.opts.autoescape);
output += "</span></p>\r\n\t\t<p class = 'dato-der'><label>Estado del medidor:</label> <span class = 'dato'>";
output += runtime.suppressValue(env.getFilter("filtro_estmedid_catacaos").call(context, runtime.contextOrFrameLookup(context, frame, "estmedid")), env.opts.autoescape);
output += "</span></p>\r\n\t</div>\r\n</div>\r\n<div>\r\n\t<div class = 'izq'>\r\n\t\t<p class = 'dato-izq'><label>N° de serie:</label> <span class = 'dato'>";
output += runtime.suppressValue(env.getFilter("filtro_vacio").call(context, runtime.contextOrFrameLookup(context, frame, "nroserie")), env.opts.autoescape);
output += "</span></p>\r\n\t\t<p class = 'dato-der'><label>N° de lectura:</label> <span class = 'dato'>";
output += runtime.suppressValue(env.getFilter("filtro_vacio").call(context, runtime.contextOrFrameLookup(context, frame, "lectura")), env.opts.autoescape);
output += "</span></p>\r\n\t</div>\r\n\t<div class = 'der'>\r\n\t\t<p class = 'dato-izq'><label>Seguridad medidor:</label> <span class = 'dato'>";
output += runtime.suppressValue(env.getFilter("filtro_segurmed_catacaos").call(context, runtime.contextOrFrameLookup(context, frame, "segurmed")), env.opts.autoescape);
output += "</span></p>\r\n\t\t<p class = 'dato-der'><label>Posición medidor:</label> <span class = 'dato'>";
output += runtime.suppressValue(env.getFilter("filtro_posicmed_catacaos").call(context, runtime.contextOrFrameLookup(context, frame, "posicmed")), env.opts.autoescape);
output += "</span></p>\r\n\t</div>\r\n</div>\r\n<p><label>Fuga: </label> <span class = 'dato'>";
output += runtime.suppressValue(env.getFilter("filtro_fuga_catacaos").call(context, runtime.contextOrFrameLookup(context, frame, "fuga"),runtime.contextOrFrameLookup(context, frame, "lugarfuga")), env.opts.autoescape);
output += "</span></p>";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["conexion_agua_ficha_catastral_piura.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<h3 class = 'title-sec'><span class = 'subrayado'>Conexión de agua</span></h3>\r\n<div>\r\n\t<div class = 'izq'>\t\t\r\n\t\t<p class = 'dato-izq'><label>Situación de la conexión:</label> <span class = 'dato'>";
output += runtime.suppressValue(env.getFilter("filtro_situacion_conexion").call(context, runtime.contextOrFrameLookup(context, frame, "sitcnzag")), env.opts.autoescape);
output += "</span></p>\r\n\t\t<p class = 'dato-der'><label>Diámetro:</label> <span class = 'dato'>";
output += runtime.suppressValue(env.getFilter("filtro_diametro").call(context, runtime.contextOrFrameLookup(context, frame, "diacnxag")), env.opts.autoescape);
output += "</span></p>\r\n\t</div>\t\t\r\n\t<div class = 'der'>\t\t\r\n\t\t<p class = 'dato-izq'><label>Material conexión:</label> <span class = 'dato'>";
output += runtime.suppressValue(env.getFilter("filtro_matcnxag").call(context, runtime.contextOrFrameLookup(context, frame, "matcnxag")), env.opts.autoescape);
output += "</span></p>\r\n\t</div>\t\t\r\n</div>\r\n<div>\t\t\r\n\t<div class = 'izq'>\r\n\t\t<p class = 'dato-izq'><label>Marco/Tapa:</label> <span class = 'dato'>";
output += runtime.suppressValue(env.getFilter("filtro_si_no").call(context, runtime.contextOrFrameLookup(context, frame, "martapag")), env.opts.autoescape);
output += "</span></p>\r\n\t\t<p class = 'dato-der'><label>Material Mco Tapa:</label> <span class = 'dato'>";
output += runtime.suppressValue(env.getFilter("filtro_matemtag").call(context, runtime.contextOrFrameLookup(context, frame, "matemtag")), env.opts.autoescape);
output += "</span></p>\r\n\t</div>\r\n\t<div class = 'der'>\r\n\t\t<p class = 'dato-izq'><label>Conservación Mco y Tapa:</label> <span class = 'dato'>";
output += runtime.suppressValue(env.getFilter("filtro_estado_conservacion").call(context, runtime.contextOrFrameLookup(context, frame, "estmtag")), env.opts.autoescape);
output += "</span></p>\t\r\n\t</div>\r\n</div>\r\n<div>\r\n\t<div class = 'izq'>\t\t\t\r\n\t\t<p class = 'dato-izq'><label>Caja:</label> <span class = 'dato'>";
output += runtime.suppressValue(env.getFilter("filtro_si_no").call(context, runtime.contextOrFrameLookup(context, frame, "cajcnxag")), env.opts.autoescape);
output += "</span></p>\t\r\n\t\t<p class = 'dato-der'><label>Material caja:</label> <span class = 'dato'>";
output += runtime.suppressValue(env.getFilter("filtro_matcajag").call(context, runtime.contextOrFrameLookup(context, frame, "matcajag")), env.opts.autoescape);
output += "</span></p>\r\n\t</div>\r\n\t<div class = 'der'>\r\n\t\t<p class = 'dato-izq'><label>Estado conservación caja:</label> <span class = 'dato'>";
output += runtime.suppressValue(env.getFilter("filtro_estado_conservacion").call(context, runtime.contextOrFrameLookup(context, frame, "estcajag")), env.opts.autoescape);
output += "</span></p>\r\n\t\t<p class = 'dato-der'><label>Localización caja medidor:</label> <span class = 'dato'>";
output += runtime.suppressValue(env.getFilter("filtro_loc_caja").call(context, runtime.contextOrFrameLookup(context, frame, "loccajme")), env.opts.autoescape);
output += "</span></p>\r\n\t</div>\r\n</div>\r\n<div>\r\n\t<div class = 'izq'>\r\n\t\t<p class = 'dato-izq'><label>Medidor Instalado:</label> <span class = 'dato'>";
output += runtime.suppressValue(env.getFilter("filtro_si_no").call(context, runtime.contextOrFrameLookup(context, frame, "medidor")), env.opts.autoescape);
output += "</span></p>\r\n\t\t<p class = 'dato-der'><label>Diámetro:</label> <span class = 'dato'>";
output += runtime.suppressValue(env.getFilter("filtro_diametro").call(context, runtime.contextOrFrameLookup(context, frame, "diamedid")), env.opts.autoescape);
output += "</span></p>\r\n\t</div>\r\n\t<div class = 'der'>\r\n\t\t<p class = 'dato-izq'><label>N° de serie:</label> <span class = 'dato'>";
output += runtime.suppressValue(env.getFilter("filtro_vacio").call(context, runtime.contextOrFrameLookup(context, frame, "nroserie")), env.opts.autoescape);
output += "</span></p>\r\n\t\t<p class = 'dato-der'><label>N° de lectura:</label> <span class = 'dato'>";
output += runtime.suppressValue(env.getFilter("filtro_vacio").call(context, runtime.contextOrFrameLookup(context, frame, "lectura")), env.opts.autoescape);
output += "</span></p>\r\n\t</div>\r\n</div>\r\n<div>\r\n\t<div class = 'izq'>\r\n\t\t<p class = 'dato-izq'><label>Fabricante:</label> <span class = 'dato'>";
output += runtime.suppressValue(env.getFilter("filtro_fabrican").call(context, runtime.contextOrFrameLookup(context, frame, "fabrican")), env.opts.autoescape);
output += "</span></p>\r\n\t\t<p class = 'dato-der'><label>Estado de conservación:</label> <span class = 'dato'>";
output += runtime.suppressValue(env.getFilter("filtro_estmedid").call(context, runtime.contextOrFrameLookup(context, frame, "estmedid")), env.opts.autoescape);
output += "</span></p>\r\n\t</div>\r\n</div>";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["conexion_agua_ficha_catastral_sisgeco.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<h3 class = 'title-sec'><span class = 'subrayado'>Conexión de agua</span></h3>\r\n<div>\r\n\t<div class = 'izq'>\r\n\t\t<p class = 'dato-izq'><label>Fecha conexión:</label> <span class = 'dato'>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "fecha_conagua"), env.opts.autoescape);
output += "</span></p>\r\n\t\t<p class = 'dato-der'><label>Situación:</label> <span class = 'dato'>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "situacion"), env.opts.autoescape);
output += "</span></p>\r\n\t</div>\r\n\t<div class = 'der'>\r\n\t\t<p class = 'dato-izq'><label>Característica:</label> <span class = 'dato'>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "caracteristica"), env.opts.autoescape);
output += "</span></p>\r\n\t\t<p class = 'dato-der'><label>Material:</label> <span class = 'dato'>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "material_conexion"), env.opts.autoescape);
output += "</span></p>\r\n\t</div>\r\n</div>\r\n<div>\r\n\t<div class = 'izq'>\r\n\t\t<p class = 'dato-izq'><label>Diámetro red:</label> <span class = 'dato'>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "diametro_red"), env.opts.autoescape);
output += "</span></p>\r\n\t\t<p class = 'dato-der'><label>Longitud conexión:</label> <span class = 'dato'>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "longitud_conexion"), env.opts.autoescape);
output += "</span></p>\r\n\t</div>\r\n\t<div class = 'der'>\r\n\t\t<p class = 'dato-izq'><label>Material caja:</label> <span class = 'dato'>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "material_caja"), env.opts.autoescape);
output += "</span></p>\r\n\t\t<p class = 'dato-der'><label>Ubicación caja:</label> <span class = 'dato'>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "ubicacion_caja"), env.opts.autoescape);
output += "</span></p>\r\n\t</div>\r\n</div>\r\n<div>\r\n\t<div class = 'izq'>\r\n\t\t<p class = 'dato-izq'><label>Diámetro conexión:</label> <span class = 'dato'>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "diametro_conexion"), env.opts.autoescape);
output += "</span></p>\r\n\t\t<p class = 'dato-der'><label>Tipo de abastecimiento:</label> <span class = 'dato'>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "tipo_abastecimiento"), env.opts.autoescape);
output += "</span></p>\r\n\t</div>\r\n\t<div class = 'der'>\r\n\t\t<p class = 'dato-izq'><label>Entidad ejecutora:</label> <span class = 'dato'>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "entidad_ejecutora"), env.opts.autoescape);
output += "</span></p>\r\n\t\t<p class = 'dato-der'><label>Material marco/tapa:</label> <span class = 'dato'>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "material_marco_tapa"), env.opts.autoescape);
output += "</span></p>\r\n\t</div>\r\n</div>\r\n<p><label>Origen conexión física:</label> <span class = 'dato'>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "origen_conexion_fisica"), env.opts.autoescape);
output += "</span></p>";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["conexion_desague_ficha_catastral_catacaos.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<h3 class = 'title-sec'><span class = 'subrayado'>Conexión de desague</span></h3>\r\n<div>\r\n\t<div class = 'izq'>\r\n\t\t<p class = 'dato-izq'><label>Situación conexión:</label> <span class = 'dato'>";
output += runtime.suppressValue(env.getFilter("filtro_sitcnxde_catacaos").call(context, runtime.contextOrFrameLookup(context, frame, "sitcnxde")), env.opts.autoescape);
output += "</span></p>\r\n\t\t<p class = 'dato-der'><label>Marco/Tapa:</label> <span class = 'dato'>";
output += runtime.suppressValue(env.getFilter("filtro_si_no").call(context, runtime.contextOrFrameLookup(context, frame, "martapde")), env.opts.autoescape);
output += "</span></p>\r\n\t</div>\t\t\r\n\t<div class = 'der'>\r\n\t\t<p class = 'dato-izq'><label>Diámetro conexión:</label> <span class = 'dato'>";
output += runtime.suppressValue(env.getFilter("filtro_diacnxde_catacaos").call(context, runtime.contextOrFrameLookup(context, frame, "diacnxde")), env.opts.autoescape);
output += "</span></p>\r\n\t\t<p class = 'dato-der'><label>Material Mco./Tapa:</label> <span class = 'dato'>";
output += runtime.suppressValue(env.getFilter("filtro_matemtde_catacaos").call(context, runtime.contextOrFrameLookup(context, frame, "matemtde")), env.opts.autoescape);
output += "</span></p>\r\n\t</div>\t\t\r\n</div>\r\n<div>\t\t\r\n\t<div class = 'izq'>\r\n\t\t<p class = 'dato-izq'><label>Conserv. Mco./Tapa:</label> <span class = 'dato'>";
output += runtime.suppressValue(env.getFilter("filtro_estmtde_catacaos").call(context, runtime.contextOrFrameLookup(context, frame, "estmtde")), env.opts.autoescape);
output += "</span></p>\r\n\t\t<p class = 'dato-der'><label>Caja:</label> <span class = 'dato'>";
output += runtime.suppressValue(env.getFilter("filtro_si_no").call(context, runtime.contextOrFrameLookup(context, frame, "cajadesa")), env.opts.autoescape);
output += "</span></p>\r\n\t</div>\r\n\t<div class = 'der'>\r\n\t\t<p class = 'dato-izq'><label>Material caja:</label> <span class = 'dato'>";
output += runtime.suppressValue(env.getFilter("filtro_matcajde_catacaos").call(context, runtime.contextOrFrameLookup(context, frame, "matcajde")), env.opts.autoescape);
output += "</span></p>\r\n\t\t<p class = 'dato-der'><label>Localiz. caja:</label> <span class = 'dato'>";
output += runtime.suppressValue(env.getFilter("filtro_loccajde_catacaos").call(context, runtime.contextOrFrameLookup(context, frame, "loccajde")), env.opts.autoescape);
output += "</span></p>\t\r\n\t</div>\r\n</div>\r\n<div>\r\n\t<div class = 'izq'>\r\n\t\t<p class = 'dato-izq'><label>Estado caja:</label> <span class = 'dato'>";
output += runtime.suppressValue(env.getFilter("filtro_estcajde_catacaos").call(context, runtime.contextOrFrameLookup(context, frame, "estcajde")), env.opts.autoescape);
output += "</span></p>\r\n\t\t<p class = 'dato-der'><label>Fuga:</label> <span class = 'dato'>";
output += runtime.suppressValue(env.getFilter("filtro_si_no").call(context, runtime.contextOrFrameLookup(context, frame, "fugas")), env.opts.autoescape);
output += "</span></p>\r\n\t</div>\r\n</div>";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["conexion_desague_ficha_catastral_piura.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<h3 class = 'title-sec'><span class = 'subrayado'>Conexión de desague</span></h3>\r\n<div>\r\n\t<div class = 'izq'>\r\n\t\t<p class = 'dato-izq'><label>Situación conexión:</label> <span class = 'dato'>";
output += runtime.suppressValue(env.getFilter("filtro_situacion_conexion").call(context, runtime.contextOrFrameLookup(context, frame, "sitcnxde")), env.opts.autoescape);
output += "</span></p>\r\n\t\t<p class = 'dato-der'><label>Marco/Tapa:</label> <span class = 'dato'>";
output += runtime.suppressValue(env.getFilter("filtro_si_no").call(context, runtime.contextOrFrameLookup(context, frame, "martapde")), env.opts.autoescape);
output += "</span></p>\r\n\t</div>\t\t\r\n\t<div class = 'der'>\r\n\t\t<p class = 'dato-izq'><label>Diámetro:</label> <span class = 'dato'>";
output += runtime.suppressValue(env.getFilter("filtro_diacnxde").call(context, runtime.contextOrFrameLookup(context, frame, "diacnxde")), env.opts.autoescape);
output += "</span></p>\r\n\t\t<p class = 'dato-der'><label>Material Mco./Tapa:</label> <span class = 'dato'>";
output += runtime.suppressValue(env.getFilter("filtro_matemtde").call(context, runtime.contextOrFrameLookup(context, frame, "matemtde")), env.opts.autoescape);
output += "</span></p>\r\n\t</div>\t\t\r\n</div>\r\n<div>\t\t\r\n\t<div class = 'izq'>\r\n\t\t<p class = 'dato-izq'><label>Conserv. Mco./Tapa:</label> <span class = 'dato'>";
output += runtime.suppressValue(env.getFilter("filtro_estado_conservacion").call(context, runtime.contextOrFrameLookup(context, frame, "estmtde")), env.opts.autoescape);
output += "</span></p>\r\n\t\t<p class = 'dato-der'><label>Caja desague:</label> <span class = 'dato'>";
output += runtime.suppressValue(env.getFilter("filtro_si_no").call(context, runtime.contextOrFrameLookup(context, frame, "cajadesa")), env.opts.autoescape);
output += "</span></p>\r\n\t</div>\r\n\t<div class = 'der'>\r\n\t\t<p class = 'dato-izq'><label>Material caja desague:</label> <span class = 'dato'>";
output += runtime.suppressValue(env.getFilter("filtro_matcajde").call(context, runtime.contextOrFrameLookup(context, frame, "matcajde")), env.opts.autoescape);
output += "</span></p>\r\n\t\t<p class = 'dato-der'><label>Localiz. caja desague:</label> <span class = 'dato'>";
output += runtime.suppressValue(env.getFilter("filtro_loc_caja").call(context, runtime.contextOrFrameLookup(context, frame, "loccajde")), env.opts.autoescape);
output += "</span></p>\t\r\n\t</div>\r\n</div>";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["conexion_desague_ficha_catastral_sisgeco.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<h3 class = 'title-sec'><span class = 'subrayado'>Conexión de desague</span></h3>\r\n<div>\r\n\t<div class = 'izq'>\r\n\t\t<p class = 'dato-izq'><label>Fecha conexión:</label> <span class = 'dato'>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "fecha_codesa"), env.opts.autoescape);
output += "</span></p>\r\n\t\t<p class = 'dato-der'><label>Situación:</label> <span class = 'dato'>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "situacion"), env.opts.autoescape);
output += "</span></p>\r\n\t</div>\r\n\t<div class = 'der'>\r\n\t\t<p class = 'dato-izq'><label>Característica:</label> <span class = 'dato'>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "caracteristica"), env.opts.autoescape);
output += "</span></p>\r\n\t\t<p class = 'dato-der'><label>Material:</label> <span class = 'dato'>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "material_conexion"), env.opts.autoescape);
output += "</span></p>\r\n\t</div>\r\n</div>\r\n<div>\r\n\t<div class = 'izq'>\r\n\t\t<p class = 'dato-izq'><label>Diámetro red:</label> <span class = 'dato'>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "diametro_red"), env.opts.autoescape);
output += "</span></p>\r\n\t\t<p class = 'dato-der'><label>Longitud conexión:</label> <span class = 'dato'>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "longitud_conexion"), env.opts.autoescape);
output += "</span></p>\r\n\t</div>\r\n\t<div class = 'der'>\r\n\t\t<p class = 'dato-izq'><label>Material caja:</label> <span class = 'dato'>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "material_caja"), env.opts.autoescape);
output += "</span></p>\r\n\t\t<p class = 'dato-der'><label>Ubicación caja:</label> <span class = 'dato'>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "ubicacion_caja"), env.opts.autoescape);
output += "</span></p>\r\n\t</div>\r\n</div>\r\n<div>\r\n\t<div class = 'izq'>\r\n\t\t<p class = 'dato-izq'><label>Tipo caja:</label> <span class = 'dato'>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "tipo_caja"), env.opts.autoescape);
output += "</span></p>\r\n\t\t<p class = 'dato-der'><label>Estado caja:</label> <span class = 'dato'>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "estado_caja"), env.opts.autoescape);
output += "</span></p>\r\n\t</div>\r\n\t<div class = 'der'>\r\n\t\t<p class = 'dato-izq'><label>Diámetro conexión:</label> <span class = 'dato'>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "diametro_conexion"), env.opts.autoescape);
output += "</span></p>\r\n\t\t<p class = 'dato-der'><label>Material marco/tapa:</label> <span class = 'dato'>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "material_marco_tapa"), env.opts.autoescape);
output += "</span></p>\r\n\t</div>\r\n</div>\r\n<div>\r\n\t<div class = 'izq'>\r\n\t\t<p class = 'dato-izq'><label>Tipo de desague:</label> <span class = 'dato'>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "tipo_desague"), env.opts.autoescape);
output += "</span></p>\r\n\t\t<p class = 'dato-der'><label>Tipo de desecho:</label> <span class = 'dato'>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "tipo_desecho"), env.opts.autoescape);
output += "</span></p>\t\t\t\t\r\n\t</div>\r\n\t<div class = 'der'>\r\n\t\t<p class = 'dato-izq'><label>Entidad ejecutora:</label> <span class = 'dato'>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "entidad_ejecutora"), env.opts.autoescape);
output += "</span></p>\r\n\t\t<p class = 'dato-der'><label>Origen conexión física:</label> <span class = 'dato'>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "origen_conexion_fisica"), env.opts.autoescape);
output += "</span></p>\r\n\t</div>\r\n</div>\r\n<p><label>Trampa de grasa:</label> <span class = 'dato'>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "trampa_grasa"), env.opts.autoescape);
output += "</span></p>";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["croquis_ficha_catastral_piura.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "\t<h3 class = 'title-sec'><span class = 'subrayado'>Croquis</span></h3>\r\n\t<canvas id = \"myCanvas\"></canvas>\r\n\t<script>\r\n\t\tvar canvas = document.getElementById(\"myCanvas\");\r\n\t\tcanvas.width = $(\"#myCanvas\").width();\r\n\t\tcanvas.height = $(\"#myCanvas\").height();\t\t\t\t\r\n\t\tvar width = canvas.width;\r\n\t\tvar height = canvas.height;\r\n\t\tvar context = canvas.getContext(\"2d\");\t\t\t\t\r\n\r\n\t\t//rectángulo base\r\n\t\t/*context.beginPath();\r\n\t\tcontext.rect(0,0,canvas.width,canvas.height);\r\n\t\tcontext.fillStyle = \"#CCC\";\r\n\t\tcontext.fill();*/\r\n\r\n\t\t//parametros del dibujo\r\n\t\txi = width*0.25;//coord x de la esquina sup izq del predio\r\n\t\tyi = height*0.18;//coord y de la esquina sup izq del predio\r\n\t\tpredioWidth = 0.5*width;//ancho del predio\r\n\t\tpredioHeight = 0.64*height;//alto del predio\r\n\t\tmargin = 10;//margin del predio respecto de las calles\r\n\r\n\t\t//rectángulo - predio\r\n\t\tcontext.beginPath();\r\n\t\tcontext.rect(xi,yi,predioWidth,predioHeight);\r\n\t\tcontext.fillStyle = 'yellow';\r\n\t\tcontext.fill();\r\n\t\tcontext.lineWidth = 1;\r\n\t\tcontext.stroke();\t\t\t\t\r\n\t\t\t\t\r\n\t\t//Texto - calle 1\r\n\t\tcontext.beginPath();\r\n\t\tcontext.translate(xi-margin,yi+0.5*predioHeight);\t\r\n\t\tcontext.rotate(-Math.PI/2);\r\n\t\tcontext.font = '20px Calibri';\r\n\t\tcontext.fillStyle = 'black';\r\n\t\tcontext.textAlign = 'center';\t\t\t\r\n\t\tcontext.fillText('";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "calle1"), env.opts.autoescape);
output += "',0,0);\r\n\r\n\t\t//reset transform\r\n\t\tcontext.setTransform(1, 0, 0, 1, 0, 0);\r\n\r\n\t\t//Texto - calle 2\r\n\t\tcontext.beginPath();\t\t\t\t\t\t\t\r\n\t\tcontext.fillText('";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "calle2"), env.opts.autoescape);
output += "',xi+0.5*predioWidth,yi-margin);\t\t\t\t\r\n\t\t\t\t\r\n\t\t//Texto - calle 3\r\n\t\tcontext.beginPath();\r\n\t\tcontext.translate(xi+predioWidth+margin,yi+0.5*predioHeight);\t\r\n\t\tcontext.rotate(Math.PI/2);\r\n\t\tcontext.font = '20px Calibri';\r\n\t\tcontext.fillStyle = 'black';\r\n\t\tcontext.textAlign = 'center';\t\t\t\r\n\t\tcontext.fillText('";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "calle3"), env.opts.autoescape);
output += "',0,0);\r\n\r\n\t\t//reset transform\r\n\t\tcontext.setTransform(1, 0, 0, 1, 0, 0);\r\n\r\n\t\t//Texto - calle 4\r\n\t\tcontext.beginPath();\t\t\t\t\t\t\t\r\n\t\tcontext.fillText('";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "calle4"), env.opts.autoescape);
output += "',xi+0.5*predioWidth,yi+predioHeight+2*margin);\r\n\r\n\t\t</script>";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["cuenta_corriente_cliente.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<script type=\"text/javascript\">\r\n\t$(document).ready(function(){\r\n\t\t\r\n\t\tvar teclas_especiales = [8,13];\r\n\t\t\r\n\t\tvar cuenta_corriente = ";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "cuentaCorriente"), env.opts.autoescape);
output += ";\t\t\r\n\r\n\t\t//calcular el número de páginas\r\n\t\tvar numpags = calcularNumPags(cuenta_corriente.length,10);\r\n\t\t$(\"#cuenta-corriente .responsive-pagination nav .pag-actual\").text(1);\r\n\t\t$(\"#cuenta-corriente .responsive-pagination nav .tot-pags\").text(numpags);\r\n\t\t\r\n\t\t//almacenar los resultados de la cuenta corriente\r\n\t\t$(\"#cuenta-corriente .table\").data({\t\t\t\r\n\t\t\tdatos: cuenta_corriente,\r\n\t\t\tnum_pags: numpags,\r\n\t\t\titemsxpag: 10\r\n\t\t}); \r\n\t\t\r\n\t\t//renderizar la primera página\r\n\t\t$(\"#cuenta-corriente .responsive-table tbody\").html(renderizarDatosTabla(cuenta_corriente,1,10,'cuenta_corriente'));\r\n\t\t$(\"#cuenta-corriente .responsive-pagination nav .pag-actual\").text(1);\r\n\r\n\t\t//validación de solo escritura numérica\r\n\t\t$(\"nav .num-pag\").keypress(function(evt){\r\n\t\t\tvar key = evt.which || window.event.keyCode;\r\n\r\n\t\t\tif(teclas_especiales.indexOf(key) == -1){\t\t\t\r\n\t\t\t\treturn DATA_PARSER.numericInputValidation(String.fromCharCode(key)); \r\n\t\t\t}\r\n\r\n\t\t\tif(key == 13){\r\n\t\t\t\t//se ha presionado enter\r\n\t\t\t\tsaltarALaPagina('cuenta_corriente',$('#cuenta-corriente #tabla'),$('#cuenta-corriente #controles'));\r\n\t\t\t}\t\t\t\r\n\t\t});\r\n\t});\r\n</script>\r\n\r\n<div id = \"header\">\r\n\t<h3 class = 'title-sec'>Movimientos cuenta corriente</h3>\r\n</div>\r\n<div id = \"desc-consulta\">\t\t\t\r\n\t<h4><span class = 'tot'>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "total_encontrados"), env.opts.autoescape);
output += "</span> ítems(s) encontrado(s)</h4>\r\n</div>\r\n<div id = \"tabla\">\t\t\t\r\n\t<table class = 'table responsive-table'>\r\n\t\t<thead>\t\t\r\n\t\t\t<tr class = 'captions'>\r\n\t\t\t\t<th>N° Item</th>\r\n\t\t\t\t<th>Fecha</th>\r\n\t\t\t\t<th>Nro. Serie</th>\r\n\t\t\t\t<th>Operación</th>\r\n\t\t\t\t<th>Estado</th>\r\n\t\t\t\t<th>Cargo</th>\r\n\t\t\t\t<th>Abono</th>\r\n\t\t\t\t<th>Saldo</th>\r\n\t\t\t</tr>\r\n\t\t</thead>\r\n\t\t<tbody>\r\n\r\n\t\t</tbody>\r\n\t</table>\r\n</div>\t\t\r\n\t\t\r\n<div id = \"controles\" class = 'responsive-pagination'>\r\n\t<nav>\t\t\t\r\n\t\t<span>Página <span class = 'pag-actual'></span> de <span class = 'tot-pags'></span>. Ir a: <input type = \"text\" class = 'num-pag numeric'></span>\r\n\t\t<ul class=\"pagination\">\r\n\t\t\t<li>\r\n\t\t   \t\t<a title = \"Ir a la página\" onclick = \"saltarALaPagina('cuenta_corriente',$('#cuenta-corriente #tabla'),$('#cuenta-corriente #controles'))\"><span class = \"glyphicon glyphicon-search\"></span></a>\r\n\t\t   \t</li>\r\n\t\t   \t<li>\r\n\t\t   \t\t<a title = \"Ir al inicio\" onclick = \"verPagina(1,'cuenta_corriente',$('#cuenta-corriente #tabla'),$('#cuenta-corriente #controles'))\"><span class = \"glyphicon glyphicon-step-backward\"></span></a>\r\n\t\t   \t</li>\r\n\t\t   \t<li>\r\n\t\t   \t\t<a title = \"Anterior\" onclick = \"verPaginaAntHandler('cuenta_corriente',$('#cuenta-corriente #tabla'),$('#cuenta-corriente #controles'))\"><span class = \"glyphicon glyphicon-triangle-left\"></span></a>\r\n\t\t   \t</li>\r\n\t\t   \t<li>\r\n\t\t   \t\t<a title = \"Siguiente\" onclick = \"verPaginaSigHandler('cuenta_corriente',$('#cuenta-corriente #tabla'),$('#cuenta-corriente #controles'))\"><span class = \"glyphicon glyphicon-triangle-right\"></span></a>\r\n\t\t  \t</li>\r\n\t\t   \t<li>\r\n\t\t   \t\t<a title = \"Ir al final\" onclick = \"verPaginaFinalHandler('cuenta_corriente',$('#cuenta-corriente #tabla'),$('#cuenta-corriente #controles'))\"><span class = \"glyphicon glyphicon-step-forward\"></span></a>\r\n\t\t   \t</li>    \t \r\n\t\t</ul>\t\t  \t\r\n\t</nav>\r\n</div>";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["cuenta_corriente_cliente_tabla.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var t_1;
t_1 = runtime.contextOrFrameLookup(context, frame, "inicio") + runtime.contextOrFrameLookup(context, frame, "itemsxpag");
frame.set("fin", t_1, true);
if(!frame.parent) {
context.setVariable("fin", t_1);
context.addExport("fin");
}
output += "\r\n\r\n";
if(runtime.contextOrFrameLookup(context, frame, "fin") > runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "datos")),"length", env.opts.autoescape)) {
output += "\r\n\t";
var t_2;
t_2 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "datos")),"length", env.opts.autoescape);
frame.set("fin", t_2, true);
if(!frame.parent) {
context.setVariable("fin", t_2);
context.addExport("fin");
}
output += "\r\n";
;
}
output += "\r\n\r\n";
frame = frame.push();
var t_5 = (lineno = 6, colno = 16, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "range"), "range", [runtime.contextOrFrameLookup(context, frame, "inicio"),runtime.contextOrFrameLookup(context, frame, "fin")]));
if(t_5) {var t_4 = t_5.length;
for(var t_3=0; t_3 < t_5.length; t_3++) {
var t_6 = t_5[t_3];
frame.set("i", t_6);
frame.set("loop.index", t_3 + 1);
frame.set("loop.index0", t_3);
frame.set("loop.revindex", t_4 - t_3);
frame.set("loop.revindex0", t_4 - t_3 - 1);
frame.set("loop.first", t_3 === 0);
frame.set("loop.last", t_3 === t_4 - 1);
frame.set("loop.length", t_4);
output += "\r\n<tr class = 'fila'>\r\n\t<th class = 'num-item primero'><span>N° Item</span>";
output += runtime.suppressValue(t_6 + 1, env.opts.autoescape);
output += "</th>\t\t\r\n\t<th><span>Fecha</span>";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "datos")),t_6, env.opts.autoescape)),"fecha", env.opts.autoescape), env.opts.autoescape);
output += "</th>\r\n\t<th><span>Nro. Serie</span>";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "datos")),t_6, env.opts.autoescape)),"id_anexo", env.opts.autoescape), env.opts.autoescape);
output += "</th>\r\n\t<th><span>Operación</span>";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "datos")),t_6, env.opts.autoescape)),"concepto_cuenta", env.opts.autoescape), env.opts.autoescape);
output += "</th>\r\n\t<th><span>Estado</span>";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "datos")),t_6, env.opts.autoescape)),"estado_anexo", env.opts.autoescape), env.opts.autoescape);
output += "</th>\r\n\t<th><span>Cargo</span>";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "datos")),t_6, env.opts.autoescape)),"cargo", env.opts.autoescape), env.opts.autoescape);
output += "</th>\r\n\t<th><span>Abono</span>";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "datos")),t_6, env.opts.autoescape)),"abono", env.opts.autoescape), env.opts.autoescape);
output += "</th>\r\n\t<th><span>Saldo</span>";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "datos")),t_6, env.opts.autoescape)),"saldo", env.opts.autoescape), env.opts.autoescape);
output += "</th>\r\n</tr>\r\n";
;
}
}
frame = frame.pop();
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["datos_basicos_ficha_catastral_catacaos.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<h3 class = 'title-sec'><span class = 'subrayado'>Datos Básicos</span></h3>\r\n<div>\r\n\t<div class = 'izq'>\r\n\t\t<p class = 'dato-izq'><label>Cod. Encuestador:</label> <span class = 'dato'>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "codencue"), env.opts.autoescape);
output += "</span></p>\r\n\t\t<p class = 'dato-der'><label>Fecha:</label> <span class = 'dato'>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "fechareg"), env.opts.autoescape);
output += "</span></p>\r\n\t</div>\r\n\t<div class = 'der'>\r\n\t\t<p class = 'dato-izq'><label>Estado conexión:</label> <span class = 'dato'>";
output += runtime.suppressValue(env.getFilter("filtro_estcnxag_catacaos").call(context, runtime.contextOrFrameLookup(context, frame, "estado_conexion")), env.opts.autoescape);
output += "</span></p>\r\n\t\t<p class = 'dato-der'><label>Ciudad:</label> <span class = 'dato'>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "ciudad"), env.opts.autoescape);
output += "</span></p>\r\n\t</div>\r\n</div>\r\n<div>\r\n\t<div class = 'izq'>\r\n\t\t<p class = 'dato-izq full'><label>Antiguo cod-Catastral:</label> <span class = 'dato'>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "preregion_ant"), env.opts.autoescape);
output += "-";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "prezona_ant"), env.opts.autoescape);
output += "-";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "presector_ant"), env.opts.autoescape);
output += "-";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "premzn_ant"), env.opts.autoescape);
output += "-";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "prelote_ant"), env.opts.autoescape);
output += "-";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "presulote_ant"), env.opts.autoescape);
output += "</span></p>\t\t\t\t\t\t\r\n\t</div>\r\n\t<div class = 'der'>\r\n\t\t<p class = 'dato-izq'><label>Nuevo cod-Catastral:</label> <span class = 'dato'>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "preregion"), env.opts.autoescape);
output += "-";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "prezona"), env.opts.autoescape);
output += "-";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "presector"), env.opts.autoescape);
output += "-";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "premzn"), env.opts.autoescape);
output += "-";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "prelote"), env.opts.autoescape);
output += "-";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "presublote"), env.opts.autoescape);
output += "</span></p>\r\n\t\t<p class = 'dato-der'><label>Ciclo:</label> <span class = 'dato'>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "ciclo"), env.opts.autoescape);
output += "</span></p>\t\t\t\t\t\t\r\n\t</div>\r\n</div>\r\n<div>\r\n\t<div class = 'izq'>\r\n\t\t<p class = 'dato-izq'><label>Ruta lectura:</label> <span class = 'dato'>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "ruta_lectura"), env.opts.autoescape);
output += "</span></p>\r\n\t\t<p class = 'dato-der'><label>Sector ruta lectura:</label> <span class = 'dato'>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "sec_ruta_lectura"), env.opts.autoescape);
output += "</span></p>\r\n\t</div>\r\n\t<div class = 'der'>\r\n\t\t<p class = 'dato-izq'><label>Ruta reparto:</label> <span class = 'dato'>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "ruta_reparto"), env.opts.autoescape);
output += "</span></p>\r\n\t\t<p class = 'dato-der'><label>Sector ruta reparto:</label> <span class = 'dato'>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "sec_ruta_reparto"), env.opts.autoescape);
output += "</span></p>\r\n\t</div>\r\n</div>\r\n<div>\r\n\t<div class = 'izq'>\r\n\t\t<p class = 'dato-izq'><label>Categoría conexión:</label> <span class = 'dato'>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "categoria_conexion"), env.opts.autoescape);
output += "</span></p>\r\n\t</div>\r\n\t<div class = 'der'>\r\n\t\t<p class = 'dato-izq'><label>Responsable:</label> <span class = 'dato'>";
output += runtime.suppressValue(env.getFilter("filtro_responsable_catacaos").call(context, runtime.contextOrFrameLookup(context, frame, "responsable")), env.opts.autoescape);
output += "</span></p>\r\n\t\t<p class = 'dato-der'><label>Nro. Habitantes:</label> <span class = 'dato'>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "habitantes"), env.opts.autoescape);
output += "</span></p>\r\n\t</div>\r\n</div>\r\n<p><label>Dirección:</label> <span class = 'dato'>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "tipo_habilitacion"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "nombre_habilitacion"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "nro_mzna"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "nro_lote"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "tipo_via"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "nombre_via"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue(env.getFilter("filtro_vacio").call(context, runtime.contextOrFrameLookup(context, frame, "nro_municipal")), env.opts.autoescape);
output += " ";
output += runtime.suppressValue(env.getFilter("filtro_bloque").call(context, runtime.contextOrFrameLookup(context, frame, "block")), env.opts.autoescape);
output += " ";
output += runtime.suppressValue(env.getFilter("filtro_vacio").call(context, runtime.contextOrFrameLookup(context, frame, "piso")), env.opts.autoescape);
output += " ";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "complemento"), env.opts.autoescape);
output += "</span></p>\r\n<p><label>Nombre:</label> <span class = 'dato'>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "nombre"), env.opts.autoescape);
output += "</span></p>\r\n<div>\r\n\t<div class = 'izq'>\r\n\t\t<p class = 'dato-izq'><label>";
output += runtime.suppressValue(env.getFilter("filtro_tipdoc").call(context, runtime.contextOrFrameLookup(context, frame, "tipo_doc")), env.opts.autoescape);
output += ":</label> <span class = 'dato'>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "nro_doc"), env.opts.autoescape);
output += "</span></p>\r\n\t\t<p class = 'dato-der'><label>Teléfono:</label> <span class = 'dato'>";
output += runtime.suppressValue(env.getFilter("filtro_vacio").call(context, runtime.contextOrFrameLookup(context, frame, "telefono")), env.opts.autoescape);
output += "</span></p>\r\n\t</div>\r\n\t<div class = 'der'>\r\n\t\t<p class = 'dato-izq'><label>Correo:</label> <span class = 'dato'>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "email"), env.opts.autoescape);
output += "</span></p>\t\t\r\n\t</div>\r\n</div>";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["datos_basicos_ficha_catastral_piura.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<h3 class = 'title-sec'><span class = 'subrayado'>Datos Básicos</span></h3>\r\n<div>\r\n\t<div class = 'izq'>\t\r\n\t\t<p class = 'dato-izq'><label>Nro. Ficha Madre:</label> <span class = 'dato'>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "fichamad"), env.opts.autoescape);
output += "</span></p>\r\n\t\t<p class = 'dato-der'><label>Cod. Encuestador:</label> <span class = 'dato'>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "codencue"), env.opts.autoescape);
output += "</span></p>\r\n\t</div>\r\n\t<div class = 'der'>\r\n\t\t<p class = 'dato-izq'><label>Fecha:</label> <span class = 'dato'>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "fechareg"), env.opts.autoescape);
output += "</span></p>\r\n\t\t<p class = 'dato-der'><label>Estado de la conexión:</label> <span class = 'dato'>";
output += runtime.suppressValue(env.getFilter("filtro_estcnxag").call(context, runtime.contextOrFrameLookup(context, frame, "estcnxag")), env.opts.autoescape);
output += "</span></p>\r\n\t</div>\r\n</div>\r\n<div>\t\r\n\t<div class = 'izq'>\r\n\t\t<p class = 'dato-izq full'><label>Cod-Catastral:</label> <span class = 'dato'>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "preregion"), env.opts.autoescape);
output += "-";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "prezona"), env.opts.autoescape);
output += "-";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "presector"), env.opts.autoescape);
output += "-";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "premzn"), env.opts.autoescape);
output += "-";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "prelote"), env.opts.autoescape);
output += "-";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "presulote"), env.opts.autoescape);
output += "</span></p>\t\t\r\n\t</div>\r\n\t<div class = 'der'>\r\n\t\t<p class = 'dato-izq'><label>Ciclo:</label> <span class = 'dato'>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "ciclo"), env.opts.autoescape);
output += "</span></p>\r\n\t\t<p class = 'dato-der'><label>Ciudad:</label> <span class = 'dato'>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "ciudad"), env.opts.autoescape);
output += "</span></p>\t\t\r\n\t</div>\t\r\n</div>\r\n<p><label>Dirección:</label> <span class = 'dato'>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "tipourba"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "urban"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "complem"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "tipocalle"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "direccion"), env.opts.autoescape);
output += "</span></p>\r\n<p><label>Nombre:</label> <span class = 'dato'>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "nombre"), env.opts.autoescape);
output += "</span></p>\r\n<div>\r\n\t<div class = 'izq'>\r\n\t\t<p class = 'dato-izq'><label>DNI:</label> <span class = 'dato'>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "dni"), env.opts.autoescape);
output += "</span></p>\r\n\t\t<p class = 'dato-der'><label>RUC:</label> <span class = 'dato'>";
output += runtime.suppressValue(env.getFilter("filtro_vacio").call(context, runtime.contextOrFrameLookup(context, frame, "ruc")), env.opts.autoescape);
output += "</span></p>\r\n\t</div>\r\n\t<div class = 'der'>\r\n\t\t<p class = 'dato-izq'><label>Teléfono:</label> <span class = 'dato'>";
output += runtime.suppressValue(env.getFilter("filtro_vacio").call(context, runtime.contextOrFrameLookup(context, frame, "telef")), env.opts.autoescape);
output += "</span></p>\r\n\t\t<p class = 'dato-der'><label>Correo:</label> <span class = 'dato'>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "email"), env.opts.autoescape);
output += "</span></p>\r\n\t</div>\t\t\t\r\n</div>";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["datos_basicos_ficha_catastral_sisgeco.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<h3 class = 'title-sec'><span class = 'subrayado'>Datos Básicos</span></h3>\r\n<div>\t\r\n\t<div class = 'izq'>\r\n\t\t<p class = 'dato-izq'><label>Cod-Catastral:</label> <span class = 'dato'>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "id_provincia"), env.opts.autoescape);
output += "-";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "id_distrito"), env.opts.autoescape);
output += "-";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "id_sector"), env.opts.autoescape);
output += "-";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "id_manzana"), env.opts.autoescape);
output += "-";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "lote"), env.opts.autoescape);
output += "-";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "sublote"), env.opts.autoescape);
output += "</span></p>\t\t\r\n\t</div>\r\n\t<div class = 'der'>\r\n\t\t<p class = 'dato-izq'><label>Ciclo:</label> <span class = 'dato'>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "ciclo"), env.opts.autoescape);
output += "</span></p>\r\n\t\t<p class = 'dato-der'><label>Ciudad:</label> <span class = 'dato'>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "distrito"), env.opts.autoescape);
output += "</span></p>\t\r\n\t</div>\t\r\n</div>\r\n<p><label>Dirección:</label> <span class = 'dato'>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "tipozona"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "zona"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue(env.getFilter("filtro_vacio").call(context, runtime.contextOrFrameLookup(context, frame, "numero")), env.opts.autoescape);
output += " - ";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "manzana"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "tipo_via"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "via"), env.opts.autoescape);
output += "</span></p>\r\n<p><label>Dirección de reparto:</label> <span class = 'dato'>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "dir_reparto"), env.opts.autoescape);
output += "</span></p>\r\n<p><label>Nombre:</label> <span class = 'dato'>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "nombre_cliente"), env.opts.autoescape);
output += "</span></p>\r\n<div>\t\t\r\n\t<div class = 'izq'>\r\n\t\t<p class = 'dato-izq'><label>DNI:</label> <span class = 'dato'>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "dni"), env.opts.autoescape);
output += "</span></p>\r\n\t\t<p class = 'dato-der'><label>RUC:</label> <span class = 'dato'>";
output += runtime.suppressValue(env.getFilter("filtro_vacio").call(context, runtime.contextOrFrameLookup(context, frame, "ruc")), env.opts.autoescape);
output += "</span></p>\r\n\t</div>\r\n\t<div class = 'der'>\r\n\t\t<p class = 'dato-izq'><label>Teléfono:</label> <span class = 'dato'>";
output += runtime.suppressValue(env.getFilter("filtro_vacio").call(context, runtime.contextOrFrameLookup(context, frame, "telefono")), env.opts.autoescape);
output += "</span></p>\r\n\t</div>\r\n</div>";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["datos_complementarios_ficha_catastral_catacaos.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<h3 class = 'title-sec'><span class = 'subrayado'>Datos complementarios</span></h3>\r\n<div>\r\n\t<div class = 'izq'>\r\n\t\t<p class = 'dato-izq'><label>Tipo Abast. Agua:</label> <span class = 'dato'>";
output += runtime.suppressValue(env.getFilter("filtro_tipabaag").call(context, runtime.contextOrFrameLookup(context, frame, "tipabaag")), env.opts.autoescape);
output += "</span></p>\r\n\t\t<p class = 'dato-der'><label>Sector de agua:</label> <span class = 'dato'>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "sectagua"), env.opts.autoescape);
output += "</span></p>\r\n\t</div>\r\n\t<div class = 'der'>\r\n\t\t<p class = 'dato-izq'><label>Sector de desague:</label> <span class = 'dato'>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "sectdesa"), env.opts.autoescape);
output += "</span></p>\r\n\t\t<p class = 'dato-der'><label>Tipo de desague:</label> <span class = 'dato'>";
output += runtime.suppressValue(env.getFilter("filtro_tipodesa").call(context, runtime.contextOrFrameLookup(context, frame, "tipodesa")), env.opts.autoescape);
output += "</span></p>\r\n\t</div>\r\n</div>\r\n<div>\r\n\t<div class = 'izq'>\r\n\t\t<p class = 'dato-izq'><label>Huerto/Jardín:</label> <span class = 'dato'>";
output += runtime.suppressValue(env.getFilter("filtro_jardin").call(context, runtime.contextOrFrameLookup(context, frame, "jardin")), env.opts.autoescape);
output += "</span></p>\r\n\t\t<p class = 'dato-der'><label>Llaves de paso del medidor:</label> <span class = 'dato'>";
output += runtime.suppressValue(env.getFilter("filtro_llavepas_catacaos").call(context, runtime.contextOrFrameLookup(context, frame, "llavepas")), env.opts.autoescape);
output += "</span></p>\r\n\t</div>\r\n</div>\r\n<p><label>Conexión de agua potable externa conectada al interior:</label> <span class = 'dato'>";
output += runtime.suppressValue(env.getFilter("filtro_si_no").call(context, runtime.contextOrFrameLookup(context, frame, "cnxagint")), env.opts.autoescape);
output += "</span></p>\r\n<p><label>Conexión de desague externa conectada al interior:</label> <span class = 'dato'>";
output += runtime.suppressValue(env.getFilter("filtro_si_no").call(context, runtime.contextOrFrameLookup(context, frame, "cnxdeint")), env.opts.autoescape);
output += "</span></p>\r\n<p><label>Casa u hogar se usa también para negocio:</label> <span class = 'dato'>";
output += runtime.suppressValue(env.getFilter("filtro_si_no").call(context, runtime.contextOrFrameLookup(context, frame, "casanego")), env.opts.autoescape);
output += "</span></p>\r\n<p><label>El área donde está el negocio tiene punto de agua:</label> <span class = 'dato'>";
output += runtime.suppressValue(env.getFilter("filtro_si_no").call(context, runtime.contextOrFrameLookup(context, frame, "areapto")), env.opts.autoescape);
output += "</span></p>";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["datos_complementarios_ficha_catastral_piura.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<h3 class = 'title-sec'><span class = 'subrayado'>Datos complementarios</span></h3>\r\n<div>\r\n\t<div class = 'izq'>\r\n\t\t<p class = 'dato-izq'><label>Tipo Abast. Agua:</label> <span class = 'dato'>";
output += runtime.suppressValue(env.getFilter("filtro_tipabaag").call(context, runtime.contextOrFrameLookup(context, frame, "tipabaag")), env.opts.autoescape);
output += "</span></p>\r\n\t\t<p class = 'dato-der'><label>Sector de agua:</label> <span class = 'dato'>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "sectagua"), env.opts.autoescape);
output += "</span></p>\r\n\t</div>\r\n\t<div class = 'der'>\r\n\t\t<p class = 'dato-izq'><label>Sector de desague:</label> <span class = 'dato'>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "sectdesa"), env.opts.autoescape);
output += "</span></p>\r\n\t\t<p class = 'dato-der'><label>Tipo de desague:</label> <span class = 'dato'>";
output += runtime.suppressValue(env.getFilter("filtro_tipodesa").call(context, runtime.contextOrFrameLookup(context, frame, "tipodesa")), env.opts.autoescape);
output += "</span></p>\r\n\t</div>\r\n</div>\r\n<div>\r\n\t<div class = 'izq'>\r\n\t\t<p class = 'dato-izq'><label>Huerto/Jardín:</label> <span class = 'dato'>";
output += runtime.suppressValue(env.getFilter("filtro_jardin").call(context, runtime.contextOrFrameLookup(context, frame, "jardin")), env.opts.autoescape);
output += "</span></p>\r\n\t\t<p class = 'dato-der'><label>Llaves de paso del medidor:</label> <span class = 'dato'>";
output += runtime.suppressValue(env.getFilter("filtro_llavepas").call(context, runtime.contextOrFrameLookup(context, frame, "llavepas")), env.opts.autoescape);
output += "</span></p>\r\n\t</div>\r\n</div>\r\n<p><label>Conexión de agua potable externa conectada al interior:</label> <span class = 'dato'>";
output += runtime.suppressValue(env.getFilter("filtro_si_no").call(context, runtime.contextOrFrameLookup(context, frame, "cnxagint")), env.opts.autoescape);
output += "</span></p>\r\n<p><label>Conexión de desague externa conectada al interior:</label> <span class = 'dato'>";
output += runtime.suppressValue(env.getFilter("filtro_si_no").call(context, runtime.contextOrFrameLookup(context, frame, "cnxdeint")), env.opts.autoescape);
output += "</span></p>\r\n<p><label>Casa u hogar se usa también para negocio:</label> <span class = 'dato'>";
output += runtime.suppressValue(env.getFilter("filtro_si_no").call(context, runtime.contextOrFrameLookup(context, frame, "casanego")), env.opts.autoescape);
output += "</span></p>\r\n<p><label>El área donde está el negocio tiene punto de agua:</label> <span class = 'dato'>";
output += runtime.suppressValue(env.getFilter("filtro_si_no").call(context, runtime.contextOrFrameLookup(context, frame, "areapto")), env.opts.autoescape);
output += "</span></p>";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["datos_complementarios_ficha_catastral_sisgeco.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<h3 class = 'title-sec'><span class = 'subrayado'>Datos complementarios</span></h3>\r\n<div>\r\n\t<div class = 'izq'>\r\n\t\t<p class = 'dato-izq'><label>Tipo Abast. Agua:</label> <span class = 'dato'>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "tipabaag"), env.opts.autoescape);
output += "</span></p>\r\n\t\t<p class = 'dato-der'><label>Sector de agua:</label> <span class = 'dato'>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "sectagua"), env.opts.autoescape);
output += "</span></p>\r\n\t</div>\r\n\t<div class = 'der'>\r\n\t\t<p class = 'dato-izq'><label>Sector de desague:</label> <span class = 'dato'>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "sectdesa"), env.opts.autoescape);
output += "</span></p>\r\n\t\t<p class = 'dato-der'><label>Tipo de desague:</label> <span class = 'dato'>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "tipodesa"), env.opts.autoescape);
output += "</span></p>\r\n\t</div>\r\n</div>";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["datos_medidor_ficha_catastral_sisgeco.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<h3 class = 'title-sec'><span class = 'subrayado'>Medidor</span></h3>\r\n<div>\r\n\t<div class = 'izq'>\t\t\r\n\t\t<p class = 'dato-izq'><label>Id medidor:</label> <span class = 'dato'>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "id_medidor"), env.opts.autoescape);
output += "</span></p>\r\n\t\t<p class = 'dato-der'><label>Capacidad:</label> <span class = 'dato'>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "capacidad"), env.opts.autoescape);
output += "</span></p>\r\n\t</div>\r\n\t<div class = 'der'>\r\n\t\t<p class = 'dato-izq'><label>Diámetro:</label> <span class = 'dato'>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "diametro"), env.opts.autoescape);
output += "</span></p>\r\n\t\t<p class = 'dato-der'><label>Fecha:</label> <span class = 'dato'>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "fecha_instalacion"), env.opts.autoescape);
output += "</span></p>\r\n\t</div>\t\t\r\n</div>\r\n<div>\t\t\r\n\t<div class = 'izq'>\r\n\t\t<p class = 'dato-izq'><label>Estado conservación:</label> <span class = 'dato'>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "estado_conservacion"), env.opts.autoescape);
output += "</span></p>\r\n\t\t<p class = 'dato-der'><label>Fabricante:</label> <span class = 'dato'>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "marca"), env.opts.autoescape);
output += "</span></p>\r\n\t</div>\r\n</div>";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["datos_propiedad_ficha_catastral_catacaos.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<h3 class = 'title-sec'><span class = 'subrayado'>Datos de la propiedad</span></h3>\r\n<div>\r\n\t<div class = 'izq'>\t\t\t\r\n\t\t<p class = 'dato-izq'><label>Tipo propiedad:</label> <span class = 'dato'>";
output += runtime.suppressValue(env.getFilter("filtro_tiprop").call(context, runtime.contextOrFrameLookup(context, frame, "tiprop"),runtime.contextOrFrameLookup(context, frame, "ottprop")), env.opts.autoescape);
output += "</span></p>\r\n\t\t<p class = 'dato-der'><label>Tipo construcción:</label> <span class = 'dato'>";
output += runtime.suppressValue(env.getFilter("filtro_tipconst_catacaos").call(context, runtime.contextOrFrameLookup(context, frame, "tipconst")), env.opts.autoescape);
output += "</span></p>\r\n\t</div>\t\r\n\t<div class = 'der'>\r\n\t\t<p class = 'dato-izq'><label>Material de construcción</label>: <span class = 'dato'>";
output += runtime.suppressValue(env.getFilter("filtro_matconst").call(context, runtime.contextOrFrameLookup(context, frame, "matconst")), env.opts.autoescape);
output += "</span></p>\r\n\t\t<p class = 'dato-der'><label>Tipo reservorio:</label> <span class = 'dato'>";
output += runtime.suppressValue(env.getFilter("filtro_tipreser").call(context, runtime.contextOrFrameLookup(context, frame, "tipreser"),runtime.contextOrFrameLookup(context, frame, "ottreser")), env.opts.autoescape);
output += "</span></p>\t\r\n\t</div>\r\n</div>\r\n<div>\r\n\t<div class = 'izq'>\r\n\t\t<p class = 'dato-izq'><label>N° pisos:</label> <span class = 'dato'>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "nropisos"), env.opts.autoescape);
output += "</span></p>\r\n\t\t<p class = 'dato-der'><label>Vereda:</label> <span class = 'dato'>";
output += runtime.suppressValue(env.getFilter("filtro_si_no").call(context, runtime.contextOrFrameLookup(context, frame, "vereda")), env.opts.autoescape);
output += "</span></p>\r\n\t</div>\t\t\t\t\r\n\t<div class = 'der'>\r\n\t\t<p class = 'dato-izq'><label>Pista:</label> <span class = 'dato'>";
output += runtime.suppressValue(env.getFilter("filtro_si_no").call(context, runtime.contextOrFrameLookup(context, frame, "pista")), env.opts.autoescape);
output += "</span></p>\r\n\t\t<p class = 'dato-der'><label>Mat. Pista:</label> <span class = 'dato'>";
output += runtime.suppressValue(env.getFilter("filtro_matpista").call(context, runtime.contextOrFrameLookup(context, frame, "matpista")), env.opts.autoescape);
output += "</span></p>\r\n\t</div>\r\n</div>\r\n<div>\r\n\t<div class = 'izq'>\r\n\t\t<p class = 'dato-izq'><label>Piscina:</label> <span class = 'dato'>";
output += runtime.suppressValue(env.getFilter("filtro_si_no").call(context, runtime.contextOrFrameLookup(context, frame, "piscina")), env.opts.autoescape);
output += "</span></p>\r\n\t\t<p class = 'dato-der'><label>Frontera:</label> <span class = 'dato'>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "frontera"), env.opts.autoescape);
output += " m</span></p>\r\n\t</div>\r\n\t<div class = 'der'>\r\n\t\t<p class = 'dato-izq'><label>Area lote:</label> <span class = 'dato'>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "arealt"), env.opts.autoescape);
output += " m</span></p>\r\n\t\t<p class = 'dato-der'><label>Area construida:</label> <span class = 'dato'>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "areaconst"), env.opts.autoescape);
output += " m</span></p>\r\n\t</div>\r\n</div>\r\n<div>\r\n\t<div class = 'izq'>\r\n\t\t<p class ='dato-izq'><label>Tipo conexion:</label> <span class = 'dato'>";
output += runtime.suppressValue(env.getFilter("filtro_tipconex").call(context, runtime.contextOrFrameLookup(context, frame, "tipconex")), env.opts.autoescape);
output += "</span></p>\r\n\t\t<p class = 'dato-der'><label>Tipo predio:</label> <span class = 'dato'>";
output += runtime.suppressValue(env.getFilter("filtro_tippred").call(context, runtime.contextOrFrameLookup(context, frame, "tippred")), env.opts.autoescape);
output += "</span></p>\r\n\t</div>\r\n\t<div class = 'der'>\r\n\t\t<p class ='dato-izq'><label>Habitado:</label> <span class = 'dato'>";
output += runtime.suppressValue(env.getFilter("filtro_si_no").call(context, runtime.contextOrFrameLookup(context, frame, "habilitado")), env.opts.autoescape);
output += "</span></p>\r\n\t</div>\r\n</div>";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["datos_propiedad_ficha_catastral_piura.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<h3 class = 'title-sec'><span class = 'subrayado'>Datos de la propiedad</span></h3>\r\n<div>\r\n\t<div class = 'izq'>\t\t\t\r\n\t\t<p class = 'dato-izq'><label>Tipo propiedad:</label> <span class = 'dato'>";
output += runtime.suppressValue(env.getFilter("filtro_tiprop").call(context, runtime.contextOrFrameLookup(context, frame, "tiprop"),runtime.contextOrFrameLookup(context, frame, "ottprop")), env.opts.autoescape);
output += "</span></p>\r\n\t\t<p class = 'dato-der'><label>Tipo construcción:</label> <span class = 'dato'>";
output += runtime.suppressValue(env.getFilter("filtro_tipconst").call(context, runtime.contextOrFrameLookup(context, frame, "tipconst"),runtime.contextOrFrameLookup(context, frame, "ottconst")), env.opts.autoescape);
output += "</span></p>\r\n\t</div>\t\r\n\t<div class = 'der'>\r\n\t\t<p class = 'dato-izq'><label>Material de construcción</label>: <span class = 'dato'>";
output += runtime.suppressValue(env.getFilter("filtro_matconst").call(context, runtime.contextOrFrameLookup(context, frame, "matconst")), env.opts.autoescape);
output += "</span></p>\r\n\t\t<p class = 'dato-der'><label>Tipo reservorio:</label> <span class = 'dato'>";
output += runtime.suppressValue(env.getFilter("filtro_tipreser").call(context, runtime.contextOrFrameLookup(context, frame, "tipreser"),runtime.contextOrFrameLookup(context, frame, "ottreser")), env.opts.autoescape);
output += "</span></p>\r\n\t</div>\r\n</div>\r\n<div>\r\n\t<div class = 'izq'>\r\n\t\t<p class = 'dato-izq'><label>N° pisos:</label> <span class = 'dato'>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "nropisos"), env.opts.autoescape);
output += "</span></p>\r\n\t\t<p class = 'dato-der'><label>Vereda:</label> <span class = 'dato'>";
output += runtime.suppressValue(env.getFilter("filtro_si_no").call(context, runtime.contextOrFrameLookup(context, frame, "vereda")), env.opts.autoescape);
output += "</span></p>\r\n\t</div>\t\t\t\t\r\n\t<div class = 'der'>\r\n\t\t<p class = 'dato-izq'><label>Pista:</label> <span class = 'dato'>";
output += runtime.suppressValue(env.getFilter("filtro_si_no").call(context, runtime.contextOrFrameLookup(context, frame, "pista")), env.opts.autoescape);
output += "</span></p>\r\n\t\t<p class = 'dato-der'><label>Mat. Pista:</label> <span class = 'dato'>";
output += runtime.suppressValue(env.getFilter("filtro_matpista").call(context, runtime.contextOrFrameLookup(context, frame, "matpista")), env.opts.autoescape);
output += "</span></p>\r\n\t</div>\r\n</div>\r\n<div>\r\n\t<div class = 'izq'>\r\n\t\t<p class = 'dato-izq'><label>Piscina:</label> <span class = 'dato'>";
output += runtime.suppressValue(env.getFilter("filtro_si_no").call(context, runtime.contextOrFrameLookup(context, frame, "piscina")), env.opts.autoescape);
output += "</span></p>\r\n\t\t<p class = 'dato-der'><label>Frontera:</label> <span class = 'dato'>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "frontera"), env.opts.autoescape);
output += " m</span></p>\r\n\t</div>\r\n\t<div class = 'der'>\r\n\t\t<p class = 'dato-izq'><label>Area lote:</label> <span class = 'dato'>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "arealt"), env.opts.autoescape);
output += " m</span></p>\r\n\t\t<p class = 'dato-der'><label>Area construida:</label> <span class = 'dato'>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "areaconst"), env.opts.autoescape);
output += " m</span></p>\r\n\t</div>\r\n</div>\r\n<div>\r\n\t<div class = 'izq'>\r\n\t\t<p class = 'dato-izq full'><label>Tipo conexion:</label> <span class = 'dato'>";
output += runtime.suppressValue(env.getFilter("filtro_tipconex").call(context, runtime.contextOrFrameLookup(context, frame, "tipconex")), env.opts.autoescape);
output += "</span></p>\t\t\r\n\t</div>\t\r\n\t<div class = 'der'>\r\n\t\t<p class = 'dato-izq'><label>Habitado:</label> <span class = 'dato'>";
output += runtime.suppressValue(env.getFilter("filtro_si_no").call(context, runtime.contextOrFrameLookup(context, frame, "habilitado")), env.opts.autoescape);
output += "</span></p>\r\n\t</div>\r\n</div>\r\n<p><label>Punto de agua interno:</label> <span class = 'dato'>";
output += runtime.suppressValue(env.getFilter("filtro_si_no").call(context, runtime.contextOrFrameLookup(context, frame, "ptoagint")), env.opts.autoescape);
output += "</span></p>";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["datos_propiedad_ficha_catastral_sisgeco.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<h3 class = 'title-sec'><span class = 'subrayado'>Datos de la propiedad</span></h3>\r\n<div>\r\n\t<div class = 'izq'>\t\t\t\r\n\t\t<p class = 'dato-izq'><label>Tipo propiedad:</label> <span class = 'dato'>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "tiprop"), env.opts.autoescape);
output += "</span></p>\r\n\t\t<p class = 'dato-der'><label>Tipo construcción:</label> <span class = 'dato'>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "tipconst"), env.opts.autoescape);
output += "</span></p>\r\n\t</div>\t\r\n\t<div class = 'der'>\r\n\t\t<p class = 'dato-izq'><label>Material de construcción</label>: <span class = 'dato'>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "matconst"), env.opts.autoescape);
output += "</span></p>\r\n\t\t<p class = 'dato-der'><label>Tipo reservorio:</label> <span class = 'dato'>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "tipreser"), env.opts.autoescape);
output += "</span></p>\r\n\t</div>\r\n</div>\r\n<div>\r\n\t<div class = 'izq'>\r\n\t\t<p class = 'dato-izq'><label>Piscina:</label> <span class = 'dato'>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "piscina"), env.opts.autoescape);
output += "</span></p>\r\n\t\t<p class = 'dato-der'><label>Frontera:</label> <span class = 'dato'>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "frontera"), env.opts.autoescape);
output += " m</span></p>\r\n\t</div>\r\n\t<div class = 'der'>\r\n\t\t<p class = 'dato-izq'><label>Area lote:</label> <span class = 'dato'>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "arealt"), env.opts.autoescape);
output += " m</span></p>\r\n\t\t<p class = 'dato-der'><label>Area construida:</label> <span class = 'dato'>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "areaconst"), env.opts.autoescape);
output += " m</span></p>\r\n\t</div>\r\n</div>\r\n<div>\t\t\r\n\t<div class = 'izq'>\r\n\t\t<p class = 'dato-izq'><label>N° pisos:</label> <span class = 'dato'>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "nropisos"), env.opts.autoescape);
output += "</span></p>\t\t\r\n\t\t<p class = 'dato-der full'><label>Tipo conexion:</label> <span class = 'dato'>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "tipconex"), env.opts.autoescape);
output += "</span></p>\t\t\r\n\t</div>\t\t\r\n</div>";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["detalle_factura_cliente.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<div class = 'table-responsive'>\r\n    <table class = 'table'>\r\n    \t<tr>\r\n\t\t\t<th>Volumen</th>\r\n\t\t\t<th>Concepto</th>\r\n\t\t\t<th>Importe</th>\r\n\t\t</tr>\r\n\t\t";
frame = frame.push();
var t_3 = runtime.contextOrFrameLookup(context, frame, "detalle_factura");
if(t_3) {var t_2 = t_3.length;
for(var t_1=0; t_1 < t_3.length; t_1++) {
var t_4 = t_3[t_1];
frame.set("item", t_4);
frame.set("loop.index", t_1 + 1);
frame.set("loop.index0", t_1);
frame.set("loop.revindex", t_2 - t_1);
frame.set("loop.revindex0", t_2 - t_1 - 1);
frame.set("loop.first", t_1 === 0);
frame.set("loop.last", t_1 === t_2 - 1);
frame.set("loop.length", t_2);
output += "\r\n\t\t<tr>\t\t\t\r\n\t\t\t<td>\r\n\t\t\t\t";
if(runtime.memberLookup((t_4),"volumen_desague", env.opts.autoescape)) {
output += "\r\n\t\t\t\t\t";
output += runtime.suppressValue(runtime.memberLookup((t_4),"volumen_desague", env.opts.autoescape), env.opts.autoescape);
output += "\r\n\t\t\t\t";
;
}
else {
output += "\r\n\t\t\t\t\t";
output += runtime.suppressValue(runtime.memberLookup((t_4),"volumen_agua", env.opts.autoescape), env.opts.autoescape);
output += "\r\n\t\t\t\t";
;
}
output += "\r\n\t\t\t</td>\r\n\t\t\t<td>";
output += runtime.suppressValue(runtime.memberLookup((t_4),"concepto", env.opts.autoescape), env.opts.autoescape);
output += "</td>\r\n\t\t\t<td>";
output += runtime.suppressValue(runtime.memberLookup((t_4),"importe", env.opts.autoescape), env.opts.autoescape);
output += "</td>\t\t\t\t\r\n\t\t</tr>\r\n\t\t";
;
}
}
frame = frame.pop();
output += "\r\n    </table>\r\n</div>";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["facturacion_cliente.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<script type=\"text/javascript\">\r\n\t$(document).ready(function(){\r\n\t\t\r\n\t\tvar teclas_especiales = [8,13];\r\n\t\t\r\n\t\tvar recibos_ = ";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "recibos"), env.opts.autoescape);
output += ";\t\r\n\r\n\t\t//calcula el número de páginas\r\n\t\tvar numpags = calcularNumPags(recibos_.length,10);\r\n\t\t$(\"#facturacion-cliente .responsive-pagination nav .pag-actual\").text(1);\r\n\t\t$(\"#facturacion-cliente .responsive-pagination nav .tot-pags\").text(numpags);\r\n\t\t\r\n\t\t//almacenar la data de los recibos\r\n\t\t$(\"#facturacion-cliente .table\").data({\t\t\t\r\n\t\t\tdatos: recibos_,\r\n\t\t\tnum_pags: numpags,\r\n\t\t\titemsxpag: 10\r\n\t\t});\r\n\r\n\t\t//renderizar la primera página\r\n\t\t$(\"#facturacion-cliente .responsive-table tbody\").html(renderizarDatosTabla(recibos_,1,10,'facturacion'));\r\n\t\t$(\"#facturacion-cliente .responsive-pagination nav .pag-actual\").text(1);\r\n\r\n\t\t//validación de solo escritura numérica\r\n\t\t$(\"nav .num-pag\").keypress(function(evt){\r\n\t\t\tvar key = evt.which || window.event.keyCode;\r\n\r\n\t\t\tif(teclas_especiales.indexOf(key) == -1){\t\t\t\r\n\t\t\t\treturn DATA_PARSER.numericInputValidation(String.fromCharCode(key)); \r\n\t\t\t}\r\n\r\n\t\t\tif(key == 13){\r\n\t\t\t\t//se ha presionado enter\r\n\t\t\t\tsaltarALaPagina('facturacion',$('#facturacion-cliente #tabla'),$('#facturacion-cliente #controles'));\r\n\t\t\t}\t\t\t\r\n\t\t});\r\n\t});\r\n</script>\r\n\r\n<div id = \"header\">\r\n\t<h3 class = 'title-sec'>Facturación</h3>\r\n</div>\r\n<div id = \"desc-consulta\">\t\t\t\r\n\t<h4><span class = 'tot'>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "total_encontrados"), env.opts.autoescape);
output += "</span> ítems(s) encontrado(s)</h4>\r\n</div>\r\n<div id = \"tabla\">\t\t\t\r\n\t<table class = 'table responsive-table'>\r\n\t\t<thead>\t\t\r\n\t\t   \t<tr class = 'captions'>\r\n\t\t\t\t<th>N°. Item</th>\r\n\t\t\t\t<th>N°. Factura</th>\t\t\t\t\r\n\t\t\t\t<th>Fecha Vencimiento</th>\r\n\t\t\t\t<th>Fecha Pago</th>\r\n\t\t\t\t<th>Volumen Facturado</th>\r\n\t\t\t\t<th>Monto total</th>\r\n\t\t\t\t<th>Monto pendiente</th>\t\t\t\t\r\n\t\t\t\t<th>Estado</th>\r\n\t\t\t\t<th>Tipo consumo</th>\r\n\t\t\t\t<th>Lectura anterior</th>\r\n\t\t\t\t<th>Lectura actual</th>\r\n\t\t\t</tr>\r\n\t\t</thead>\r\n\t\t<tbody>\r\n\t\t\t\r\n\t\t</tbody>\r\n\t</table>\r\n</div>\t\t\r\n\t\t\r\n<div id = \"controles\" class = 'responsive-pagination'>\r\n\t<nav>\t\t\t\r\n\t\t<span>Página <span class = 'pag-actual'></span> de <span class = 'tot-pags'></span>. Ir a: <input type = \"text\" class = 'num-pag numeric'></span>\r\n\t\t<ul class=\"pagination\">\r\n\t\t\t<li>\r\n\t\t   \t\t<a title = \"Ir a la página\" onclick = \"saltarALaPagina('facturacion',$('#facturacion-cliente #tabla'),$('#facturacion-cliente #controles'))\"><span class = \"glyphicon glyphicon-search\"></span></a>\r\n\t\t   \t</li>\r\n\t\t   \t<li>\r\n\t\t   \t\t<a title = \"Ir al inicio\" onclick = \"verPagina(1,'facturacion',$('#facturacion-cliente #tabla'),$('#facturacion-cliente #controles'))\"><span class = \"glyphicon glyphicon-step-backward\"></span></a>\r\n\t\t   \t</li>\r\n\t\t   \t<li>\r\n\t\t   \t\t<a title = \"Anterior\" onclick = \"verPaginaAntHandler('facturacion',$('#facturacion-cliente #tabla'),$('#facturacion-cliente #controles'))\"><span class = \"glyphicon glyphicon-triangle-left\"></span></a>\r\n\t\t   \t</li>\r\n\t\t   \t<li>\r\n\t\t   \t\t<a title = \"Siguiente\" onclick = \"verPaginaSigHandler('facturacion',$('#facturacion-cliente #tabla'),$('#facturacion-cliente #controles'))\"><span class = \"glyphicon glyphicon-triangle-right\"></span></a>\r\n\t\t  \t</li>\r\n\t\t   \t<li>\r\n\t\t   \t\t<a title = \"Ir al final\" onclick = \"verPaginaFinalHandler('facturacion',$('#facturacion-cliente #tabla'),$('#facturacion-cliente #controles')0.)\"><span class = \"glyphicon glyphicon-step-forward\"></span></a>\r\n\t\t   \t</li>    \t \r\n\t\t</ul>\t\t  \t\r\n\t</nav>\r\n</div>";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["facturacion_cliente_tabla.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "\t";
var t_1;
t_1 = runtime.contextOrFrameLookup(context, frame, "inicio") + runtime.contextOrFrameLookup(context, frame, "itemsxpag");
frame.set("fin", t_1, true);
if(!frame.parent) {
context.setVariable("fin", t_1);
context.addExport("fin");
}
output += "\r\n\r\n\t";
if(runtime.contextOrFrameLookup(context, frame, "fin") > runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "datos")),"length", env.opts.autoescape)) {
output += "\r\n\t\t";
var t_2;
t_2 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "datos")),"length", env.opts.autoescape);
frame.set("fin", t_2, true);
if(!frame.parent) {
context.setVariable("fin", t_2);
context.addExport("fin");
}
output += "\r\n\t";
;
}
output += "\r\n\r\n\t";
frame = frame.push();
var t_5 = (lineno = 6, colno = 17, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "range"), "range", [runtime.contextOrFrameLookup(context, frame, "inicio"),runtime.contextOrFrameLookup(context, frame, "fin")]));
if(t_5) {var t_4 = t_5.length;
for(var t_3=0; t_3 < t_5.length; t_3++) {
var t_6 = t_5[t_3];
frame.set("i", t_6);
frame.set("loop.index", t_3 + 1);
frame.set("loop.index0", t_3);
frame.set("loop.revindex", t_4 - t_3);
frame.set("loop.revindex0", t_4 - t_3 - 1);
frame.set("loop.first", t_3 === 0);
frame.set("loop.last", t_3 === t_4 - 1);
frame.set("loop.length", t_4);
output += "\r\n\t<tr class = 'fila'>\r\n\t\t<th class = 'num-item primero'><span>N° Item</span>";
output += runtime.suppressValue(t_6 + 1, env.opts.autoescape);
output += "</th>\r\n\t\t<th><span>N° Factura</span><a onclick = \"verDetalleFactura(this)\" title = \"Click para ver detalle de la factura\">";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "datos")),t_6, env.opts.autoescape)),"id_recibo", env.opts.autoescape), env.opts.autoescape);
output += "</a></th>\r\n\t\t<th><span>Fecha Vencimiento</span>";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "datos")),t_6, env.opts.autoescape)),"vencimiento", env.opts.autoescape), env.opts.autoescape);
output += "</th>\r\n\t\t<th><span>Fecha Pago</span>";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "datos")),t_6, env.opts.autoescape)),"cancelado", env.opts.autoescape), env.opts.autoescape);
output += "</th>\r\n\t\t<th><span>Volumen facturado</span>";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "datos")),t_6, env.opts.autoescape)),"volumen_facturado", env.opts.autoescape), env.opts.autoescape);
output += "</th>\r\n\t\t<th><span>Monto total</span>";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "datos")),t_6, env.opts.autoescape)),"total", env.opts.autoescape), env.opts.autoescape);
output += "</th>\r\n\t\t<th><span>Monto pendiente</span>";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "datos")),t_6, env.opts.autoescape)),"total_pendiente", env.opts.autoescape), env.opts.autoescape);
output += "</th>\r\n\t\t<th><span>Estado</span>";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "datos")),t_6, env.opts.autoescape)),"estado", env.opts.autoescape), env.opts.autoescape);
output += "</th>\r\n\t\t<th><span>Tipo consumo</span>";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "datos")),t_6, env.opts.autoescape)),"tipo_consumo", env.opts.autoescape), env.opts.autoescape);
output += "</th>\r\n\t\t<th><span>Lectura anterior</span>";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "datos")),t_6, env.opts.autoescape)),"lectura_anterior", env.opts.autoescape), env.opts.autoescape);
output += "</th>\r\n\t\t<th><span>Lectura actual</span>";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "datos")),t_6, env.opts.autoescape)),"lectura_actual", env.opts.autoescape), env.opts.autoescape);
output += "</th>\r\n\t</tr>\r\n\t";
;
}
}
frame = frame.pop();
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["ficha_catastral_piura.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<html>\r\n<head>\r\n\t<meta charset = \"UTF-8\">\r\n    <meta name = \"viewport\" content = \"user-scalable=no, initial-scale=1.0, maximum-scale=1.0, width=device-width\">\r\n\t<title></title>\t\r\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"css/responsive.css\">\r\n\t<link rel=\"stylesheet\" type=\"text/css\" href=\"javascripts/jquery-ui-1.11.4/jquery-ui.min.css\"><!-- jquery UI-->\r\n    <script type=\"text/javascript\" src = \"javascripts/jquery-1.11.2.js\"></script> <!-- jquery -->\r\n    <script type=\"text/javascript\" src = \"javascripts/jquery-ui-1.11.4/jquery-ui.min.js\"></script><!-- jquery UI-->\r\n\t<link rel=\"stylesheet\" type = \"text/css\" href=\"javascripts/bootstrap-3.3.5-dist/css/bootstrap.min.css\"> <!-- Boostrap -->\r\n\t<script type = \"text/javascript\" src=\"javascripts/bootstrap-3.3.5-dist/js/bootstrap.min.js\"></script> <!-- Boostrap -->    \r\n    <script type=\"text/javascript\" src = \"javascripts/nunjucks.js\"></script> <!-- nunjucks -->\r\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"css/estilos-ficha-catastral-piura.css\">\r\n    <script type=\"text/javascript\" src = \"javascripts/filtros.js\"></script> <!-- nunjucks -->\r\n    <script type=\"text/javascript\" src = \"javascripts/utilidades.js\"></script> <!-- Utilidades -->    \r\n    <script type=\"text/javascript\" src = \"javascripts/validadorDatos.js\"></script> <!-- Utilidades -->   \r\n    <script type=\"text/javascript\" src = \"javascripts/paginacion-funciones.js\"></script> <!-- paginación -->\r\n\t<script type=\"text/javascript\" src = \"javascripts/ficha-catastral-piura.js\"></script>\r\n    <script type=\"text/javascript\" src = \"javascripts/ficha-catastral-piura-funciones.js\"></script>    \r\n      \r\n</head>\r\n<body>\r\n\r\n<div id = \"main-container\">\r\n    <header>\r\n        <img src = \"images/logo.jpg\">        \r\n    </header>\r\n\t<!-- Nav tabs -->\r\n  \t<nav class=\"navbar navbar-default\" role=\"tablist navigation\" id = \"clienteTabs\">\r\n          <div class=\"container-fluid\">\r\n            <!-- Brand and toggle get grouped for better mobile display -->\r\n            <div class=\"navbar-header\">\r\n              <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">               \r\n                <span class=\"icon-bar\"></span>\r\n                <span class=\"icon-bar\"></span>\r\n                <span class=\"icon-bar\"></span>\r\n              </button>\r\n              <a class=\"navbar-brand\" href=\"#\">Menú</a>\r\n            </div>\r\n\r\n            <!-- Collect the nav links, forms, and other content for toggling -->\r\n            <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\r\n              <ul class=\"nav navbar-nav\">               \r\n                <li class=\"dropdown\">\r\n                  <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Catastro <span class=\"caret\"></span></a>\r\n                  <ul class=\"dropdown-menu\">\r\n                    <li><a href=\"#datos-basicos-ficha-cat\" aria-controls=\"datos-basicos-ficha-cat\" role=\"tab\" data-toggle=\"tab\">Datos básicos</a></li>\r\n                    <li><a href=\"#datos-propiedad-ficha-cat\" aria-controls=\"datos-propiedad-ficha-cat\" role=\"tab\" data-toggle=\"tab\">Datos de la propiedad</a></li>\r\n                    <li><a href=\"#conexion-agua-ficha-cat\" aria-controls=\"conexion-agua-ficha-cat\" role=\"tab\" data-toggle=\"tab\">Conexión agua</a></li>                  \r\n                    <li><a href=\"#conexion-desague-ficha-cat\" aria-controls=\"conexion-desague-ficha-cat\" role=\"tab\" data-toggle=\"tab\">Conexión desague</a></li>\r\n                    <li><a href=\"#valores-min-admisibles-ficha-cat\" aria-controls=\"valores-min-admisibles-ficha-cat\" role=\"tab\" data-toggle=\"tab\">Valores mínimo admisibles</a></li>\r\n                    <li><a href=\"#datos-complementarios-ficha-cat\" aria-controls=\"datos-complementarios-ficha-cat\" role=\"tab\" data-toggle=\"tab\">Datos complementarios</a></li>\r\n                    <li><a href=\"#info-geo-loc-ficha-cat\" aria-controls=\"info-geo-loc-ficha-cat\" role=\"tab\" data-toggle=\"tab\">Información geográfica</a></li>\r\n                    <li><a href=\"#croquis-ficha-cat\" aria-controls=\"croquis-ficha-cat\" role=\"tab\" data-toggle=\"tab\">Croquis</a></li>\r\n                  </ul>\r\n                </li>\r\n                <li class=\"dropdown\">\r\n                  <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Sisgeco <span class=\"caret\"></span></a>\r\n                  <ul class=\"dropdown-menu\">\r\n                    <li><a href=\"#datos-basicos-sisgeco\" aria-controls=\"datos-basicos-sisgeco\" role=\"tab\" data-toggle=\"tab\">Datos básicos</a></li>\r\n                    <li><a href=\"#datos-propiedad-sisgeco\" aria-controls=\"datos-propiedad-sisgeco\" role=\"tab\" data-toggle=\"tab\">Datos de la propiedad</a></li>\r\n                    <li><a href=\"#datos-medidor-sisgeco\" aria-controls=\"datos-medidor-sisgeco\" role=\"tab\" data-toggle=\"tab\">Medidor</a></li>\r\n                    <li><a href=\"#conexion-agua-sisgeco\" aria-controls=\"conexion-agua-sisgeco\" role=\"tab\" data-toggle=\"tab\">Conexión agua</a></li>\r\n                    <li><a href=\"#conexion-desague-sisgeco\" aria-controls=\"conexion-desague-sisgeco\" role=\"tab\" data-toggle=\"tab\">Conexión desague</a></li>\r\n                    <li><a href=\"#datos-complementarios-sisgeco\" aria-controls=\"datos-complementarios-sisgeco\" role=\"tab\" data-toggle=\"tab\">Datos complementarios</a></li>                    \r\n                  </ul>\r\n                </li>               \r\n                <li><a href=\"#facturacion-cliente\" aria-controls=\"facturacion-cliente\" role=\"tab\" data-toggle=\"tab\">Facturación</a></li>\r\n                <li><a href=\"#cuenta-corriente\" aria-controls=\"cuenta-corriente\" role=\"tab\" data-toggle=\"tab\">Cuenta corriente</a></li>\r\n                <li><a href=\"#lecturas-cliente\" aria-controls=\"lecturas-cliente\" role=\"tab\" data-toggle=\"tab\">Lecturas</a></li>                \r\n              </ul>           \r\n            </div><!-- /.navbar-collapse -->\r\n          </div><!-- /.container-fluid -->\r\n    </nav>\r\n\r\n    <input type = \"hidden\" id = \"nro_suministro\" value = '";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "inscrinro"), env.opts.autoescape);
output += "'>\r\n \t<input type=\"hidden\" id=\"nro_ficha\" value='";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "nro_ficha"), env.opts.autoescape);
output += "' >\r\n    <input type=\"hidden\" id=\"id_provincia\" value = '";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "id_provincia"), env.opts.autoescape);
output += "'>\r\n    <input type=\"hidden\" id=\"id_distrito\" value = '";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "id_distrito"), env.opts.autoescape);
output += "'>\r\n\r\n  \t<!-- Tab panes -->\r\n  \t<div class=\"tab-content\" id = \"tab-container\">                      \r\n            <h4 class =  'aux'>Nro. suministro <span class = 'subrayado'>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "inscrinro"), env.opts.autoescape);
output += "</span> Ficha N° <span class = 'subrayado'>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "nro_ficha"), env.opts.autoescape);
output += "</span></h4>\r\n\r\n        \t<div role=\"tabpanel\" class=\"tab-pane fade in active\" id=\"datos-basicos-ficha-cat\">\r\n        \t</div>\r\n\r\n        \t<div role=\"tabpanel\" class=\"tab-pane fade\" id=\"datos-propiedad-ficha-cat\">    \t      \t\t\r\n        \t</div>\r\n\r\n        \t<div role=\"tabpanel\" class=\"tab-pane fade\" id=\"conexion-agua-ficha-cat\">        \t\t\r\n        \t</div>\r\n\r\n        \t<div role=\"tabpanel\" class=\"tab-pane fade\" id=\"conexion-desague-ficha-cat\">        \t\t\r\n        \t</div>\r\n\r\n        \t<div role=\"tabpanel\" class=\"tab-pane fade\" id=\"valores-min-admisibles-ficha-cat\">\r\n        \t</div>\r\n\r\n            <div role=\"tabpanel\" class=\"tab-pane fade\" id=\"datos-complementarios-ficha-cat\">\r\n        \t</div>\r\n\r\n        \t<div role=\"tabpanel\" class=\"tab-pane fade\" id=\"info-geo-loc-ficha-cat\">\t\r\n        \t</div>                \r\n\r\n            <div role=\"tabpanel\" class=\"tab-pane fade\" id=\"cuenta-corriente\">               \r\n            </div>\r\n\r\n            <div role=\"tabpanel\" class=\"tab-pane fade\" id=\"lecturas-cliente\">                    \r\n            </div>\r\n\r\n            <div role=\"tabpanel\" class=\"tab-pane fade\" id=\"facturacion-cliente\">            \r\n            </div>                            \r\n            \r\n            <div role=\"tabpanel\" class=\"tab-pane fade in active\" id=\"datos-basicos-sisgeco\">\r\n            </div>\r\n\r\n            <div role=\"tabpanel\" class=\"tab-pane fade in active\" id=\"datos-propiedad-sisgeco\">\r\n            </div>\r\n\r\n            <div role=\"tabpanel\" class=\"tab-pane fade in active\" id=\"datos-medidor-sisgeco\">\r\n            </div>\r\n\r\n            <div role=\"tabpanel\" class=\"tab-pane fade\" id=\"conexion-agua-sisgeco\">\r\n            </div>\r\n\r\n            <div role=\"tabpanel\" class=\"tab-pane fade\" id=\"conexion-desague-sisgeco\">\r\n            </div> \r\n\r\n            <div role=\"tabpanel\" class=\"tab-pane fade\" id=\"datos-complementarios-sisgeco\">\r\n            </div> \r\n\r\n            <div role=\"tabpanel\" class=\"croquis fade\" id=\"croquis-ficha-cat\">               \r\n            </div>                  \t        \t\r\n  \t</div>\r\n</div>\r\n\r\n<div id = \"dialog-div\"></div>\r\n\r\n</body>\r\n</html>";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["informacion_geografica_ficha_catastral_piura.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<h3 class = 'title-sec'><span class = 'subrayado'>Información geográfica, presión y ubicación</span></h3>\r\n<div>\r\n\t<div class = 'izq'>\r\n\t\t<p class = 'nivel-presion'><label>Nivel de presión m.c.a.:</label> <span class = 'dato'>";
output += runtime.suppressValue(env.getFilter("filtro_nivpresi").call(context, runtime.contextOrFrameLookup(context, frame, "nivpresi")), env.opts.autoescape);
output += "</span></p>\r\n\t\t<div class = 'coords'>\r\n\t\t\t<p><label>Coordenadas geográficas</label></p>\r\n\t\t\t<table border = '1'>\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<td><span class = 'dato'>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "x"), env.opts.autoescape);
output += "</span></td>\r\n\t\t\t\t\t<th>X</th>\r\n\t\t\t\t</tr>\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<td><span class = 'dato'>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "y"), env.opts.autoescape);
output += "</span></td>\t\t\t\t\t\t\t\r\n\t\t\t\t\t<th>Y</th>\r\n\t\t\t\t</tr>\r\n\t\t\t</table>\r\n\t\t</div>\t\t\t\t\r\n\t</div>\t\t\r\n\t<div class = 'der'>\r\n\t\t<div class = 'dist-1'>\r\n\t\t\t<p><label>Distancia Caja AP y Alc. (base: Externo izquierdo del frontis):</label></p>\r\n\t\t\t<p class = 'agua'>Agua: <span class = 'dato'>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "distag1"), env.opts.autoescape);
output += " m</span></p>\r\n\t\t\t<p class = 'desague'>Desague: <span class = 'dato'>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "distde1"), env.opts.autoescape);
output += " m</span></p>\r\n\t\t</div>\r\n\t\t<div class = 'dist-2'>\r\n\t\t\t<p><label>Distancia Caja AP y Alc. (Frontera Principal del predio):</label></p>\r\n\t\t\t<p class = 'agua'>Agua: <span class = 'dato'>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "distag2"), env.opts.autoescape);
output += " m</span></p>\r\n\t\t\t<p class = 'desague'>Desague: <span class = 'dato'>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "distde2"), env.opts.autoescape);
output += " m</span></p>\r\n\t\t</div>\t\t\t\t\r\n\t</div>\t\t\r\n</div>";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["info_accesorio.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "\r\n<span id = \"cerrar\" class = \"glyphicon glyphicon-remove\" onclick = \"cerrarPopup()\"></span>\r\n<div class = 'table-responsive'>\r\n    <table class = 'table'>\r\n    \t<tr>\r\n\t\t\t<th>Id</th>\t\t\t\r\n\t\t\t<th>Diámetro</th>\r\n\t\t\t<th>Hab. urbana</th>\t\t\t\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "dc_id"), env.opts.autoescape);
output += "</td>\t\t\t\r\n\t\t\t<td>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "diametro"), env.opts.autoescape);
output += "</td>\r\n\t\t\t<td>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "hab_urbana"), env.opts.autoescape);
output += "</td>\t\t\t\r\n\t\t</tr>\r\n    </table>\r\n</div>";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["info_buzon.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<span id = \"cerrar\" class = \"glyphicon glyphicon-remove\" onclick = \"cerrarPopup()\"></span>\r\n<div class = 'table-responsive'>\r\n    <table class = 'table'>\r\n    \t<tr>\r\n\t\t\t<th>Id</th>\t\t\t\r\n\t\t\t<th>Tipo</th>\r\n\t\t\t<th>Material</th>\r\n\t\t\t<th>Hab. urbana</th>\t\t\t\t\t\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "buzon"), env.opts.autoescape);
output += "</td>\r\n\t\t\t<td>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "tipo_buzon"), env.opts.autoescape);
output += "</td>\t\t\t\r\n\t\t\t<td>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "mat_buzon"), env.opts.autoescape);
output += "</td>\r\n\t\t\t<td>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "hab_urbana"), env.opts.autoescape);
output += "</td>\t\t\t\t\t\t\r\n\t\t</tr>\r\n    </table>\r\n</div>";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["info_cliente.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<span id = \"cerrar\" class = \"glyphicon glyphicon-remove\" onclick = \"cerrarPopup()\"></span>\r\n<div class = 'table-responsive'>\r\n    <table class = 'table'>\r\n    \t<tr>\r\n\t\t\t<th>Nro. Ficha</th>\r\n\t\t\t<th>Suministro</th>\t\t\t\r\n\t\t\t<th>Opciones</th>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "nro_ficha"), env.opts.autoescape);
output += "</td>\r\n\t\t\t<td>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "suministro"), env.opts.autoescape);
output += "</td>\r\n\t\t\t<td>\r\n\t\t\t\t<form action = \"/verFichaCatastral\" method = \"POST\" target = \"_blank\" >\r\n\t\t\t\t\t<input type=\"hidden\" name=\"nro_ficha\" value='";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "nro_ficha"), env.opts.autoescape);
output += "' />\r\n\t\t\t\t\t<input type=\"hidden\" name=\"id_provincia\" value = '";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "id_prov"), env.opts.autoescape);
output += "'>\r\n\t\t\t\t\t<input type=\"hidden\" name=\"id_distrito\" value = '";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "id_dist"), env.opts.autoescape);
output += "'>\r\n\t\t\t\t\t<input type = 'submit' value = 'Ver Ficha' class = 'myButton'>\r\n\t\t\t\t\t<input type = 'button' value = 'Ver en Street View' class = 'myButton' onclick = \"verEnStreetViewHandler(";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "x"), env.opts.autoescape);
output += ",";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "y"), env.opts.autoescape);
output += ")\">\t\t\t\t\t\r\n\t\t\t\t</form>\t\t\t\t\t\r\n\t\t\t</td>\r\n\t\t</tr>\r\n    </table>\r\n</div>";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["info_pozo.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<span id = \"cerrar\" class = \"glyphicon glyphicon-remove\" onclick = \"cerrarPopup()\"></span>\r\n<div class = 'table-responsive'>\r\n    <table class = 'table'>\r\n    \t<tr>\r\n\t\t\t<th>Id</th>\r\n\t\t\t<th>Nombre</th>\r\n\t\t\t<th>Dimensión</th>\r\n\t\t\t<th>Material</th>\r\n\t\t\t<th>Estado</th>\t\t\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "dc_id"), env.opts.autoescape);
output += "</td>\r\n\t\t\t<td>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "nombre"), env.opts.autoescape);
output += "</td>\r\n\t\t\t<td>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "dim_total"), env.opts.autoescape);
output += "</td>\r\n\t\t\t<td>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "material"), env.opts.autoescape);
output += "</td>\r\n\t\t\t<td>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "estado_ope"), env.opts.autoescape);
output += "</td>\t\t\t\t\r\n\t\t</tr>\r\n    </table>\r\n</div> ";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["info_red_agua.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<span id = \"cerrar\" class = \"glyphicon glyphicon-remove\" onclick = \"cerrarPopup()\"></span>\r\n<div class = 'table-responsive'>\r\n    <table class = 'table'>\r\n    \t<tr>\r\n\t\t\t<th>Node 1</th>\r\n\t\t\t<th>Node 2</th>\t\t\t\r\n\t\t\t<th>Diámetro (plg)</th>\t\t\t\r\n\t\t\t<th>Material</th>\r\n\t\t\t<th>Hab. urbana</th>\t\t\t\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "node1"), env.opts.autoescape);
output += "</td>\r\n\t\t\t<td>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "node2"), env.opts.autoescape);
output += "</td>\t\t\t\r\n\t\t\t<td>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "dn_plg"), env.opts.autoescape);
output += "</td>\t\t\t\r\n\t\t\t<td>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "material"), env.opts.autoescape);
output += "</td>\r\n\t\t\t<td>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "hab_urbana"), env.opts.autoescape);
output += "</td>\r\n\t\t</tr>\r\n    </table>\r\n</div> ";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["info_red_alcantarillado.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<span id = \"cerrar\" class = \"glyphicon glyphicon-remove\" onclick = \"cerrarPopup()\"></span>\r\n<div class = 'table-responsive'>\r\n    <table class = 'table'>\r\n    \t<tr>\r\n\t\t\t<th>Node 1</th>\r\n\t\t\t<th>Node 2</th>\t\t\t\r\n\t\t\t<th>Diámetro (plg)</th>\r\n\t\t\t<th>Material</th>\r\n\t\t\t<th>Tipo</th>\t\t\t\r\n\t\t\t<th>Hab. urbana</th>\t\t\t\t\t\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "node1"), env.opts.autoescape);
output += "</td>\r\n\t\t\t<td>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "node2"), env.opts.autoescape);
output += "</td>\t\t\t\r\n\t\t\t<td>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "dn_plg"), env.opts.autoescape);
output += "</td>\r\n\t\t\t<td>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "material"), env.opts.autoescape);
output += "</td>\r\n\t\t\t<td>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "tipo"), env.opts.autoescape);
output += "</td>\r\n\t\t\t<td>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "hab_urbana"), env.opts.autoescape);
output += "</td>\t\t\t\r\n\t\t</tr>\r\n    </table>\r\n</div> ";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["info_reservorio.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<span id = \"cerrar\" class = \"glyphicon glyphicon-remove\" onclick = \"cerrarPopup()\"></span>\r\n<div class = 'table-responsive'>\r\n    <table class = 'table'>\r\n    \t<tr>\r\n\t\t\t<th>Nombre</th>\r\n\t\t\t<th>Cap. Actual</th>\t\t\t\t\t\t\t\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "nombre"), env.opts.autoescape);
output += "</td>\r\n\t\t\t<td>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "cap_actual"), env.opts.autoescape);
output += "</td>\t\t\t\t\r\n\t\t</tr>\r\n    </table>\r\n</div> ";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["info_valvula.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<span id = \"cerrar\" class = \"glyphicon glyphicon-remove\" onclick = \"cerrarPopup()\"></span>\r\n<div class = 'table-responsive'>\r\n    <table class = 'table'>\r\n    \t<tr>\r\n\t\t\t<th>Id</th>\r\n\t\t\t<th>Diámetro (plg)</th>\r\n\t\t\t<th>Función</th>\r\n\t\t\t<th>Hab. urbana</th>\t\t\t\t\t\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "dc_id"), env.opts.autoescape);
output += "</td>\r\n\t\t\t<td>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "dn_plg"), env.opts.autoescape);
output += "</td>\r\n\t\t\t<td>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "funcion"), env.opts.autoescape);
output += "</td>\r\n\t\t\t<td>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "hab_urbana"), env.opts.autoescape);
output += "</td>\t\t\t\r\n\t\t</tr>\r\n    </table>\r\n</div> ";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["lecturas_cliente.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<script type=\"text/javascript\">\r\n\t$(document).ready(function(){\r\n\t\t\r\n\t\tvar teclas_especiales = [8,13];\r\n\t\t\r\n\t\tvar lecturas_ = ";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "lecturas"), env.opts.autoescape);
output += ";\t\r\n\r\n\t\t//calcula el número de páginas\r\n\t\tvar numpags = calcularNumPags(lecturas_.length,10);\r\n\t\t$(\"#lecturas-cliente .responsive-pagination nav .pag-actual\").text(1);\r\n\t\t$(\"#lecturas-cliente .responsive-pagination nav .tot-pags\").text(numpags);\r\n\t\t\r\n\t\t//almacenar la información de las lecturas\r\n\t\t$(\"#lecturas-cliente .table\").data({\t\t\t\r\n\t\t\tdatos: lecturas_,\r\n\t\t\tnum_pags: numpags,\r\n\t\t\titemsxpag: 10\r\n\t\t});\r\n\t\t\r\n\t\t//renderizar la primera página\r\n\t\t$(\"#lecturas-cliente .responsive-table tbody\").html(renderizarDatosTabla(lecturas_,1,10,'lecturas'));\r\n\t\t$(\"#lecturas-cliente .responsive-pagination nav .pag-actual\").text(1);\r\n\r\n\t\t//validación de escritura numérica\r\n\t\t$(\"nav .num-pag\").keypress(function(evt){\r\n\t\t\tvar key = evt.which || window.event.keyCode;\r\n\r\n\t\t\tif(teclas_especiales.indexOf(key) == -1){\t\t\t\r\n\t\t\t\treturn DATA_PARSER.numericInputValidation(String.fromCharCode(key)); \r\n\t\t\t}\r\n\r\n\t\t\tif(key == 13){\r\n\t\t\t\t//se ha presionado enter\r\n\t\t\t\tsaltarALaPagina('lecturas',$('#lecturas-cliente #tabla'),$('#lecturas-cliente #controles'));\r\n\t\t\t}\t\t\t\r\n\t\t});\r\n\r\n\t});\r\n</script>\r\n\r\n<div id = \"header\">\r\n\t<h3 class = 'title-sec'>Lecturas</h3>\r\n</div>\r\n<div id = \"desc-consulta\">\t\t\t\r\n\t<h4><span class = 'tot'>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "total_encontrados"), env.opts.autoescape);
output += "</span> ítems(s) encontrado(s)</h4>\r\n</div>\r\n<div id = \"tabla\">\t\t\t\r\n\t<table class = 'table responsive-table'>\r\n\t\t<thead>\t\t\r\n\t\t   \t<tr class = 'captions'>\r\n\t\t\t\t<th>N°. Item</th>\r\n\t\t\t\t<th>Período</th>\r\n\t\t\t\t<th>Medidor</th>\r\n\t\t\t\t<th>Lectura actual</th>\r\n\t\t\t\t<th>Lectura anterior</th>\r\n\t\t\t\t<th>Consumo agua</th>\r\n\t\t\t\t<th>Consumo desague</th>\r\n\t\t\t\t<th>Origen consumo</th>\r\n\t\t\t\t<th>Tipo lectura</th>\r\n\t\t\t\t<th>Impedimiento</th>\r\n\t\t\t\t<th>Observación</th>\r\n\t\t\t</tr>\r\n\t\t</thead>\r\n\t\t<tbody>\r\n\t\t\t\r\n\t\t</tbody>\r\n\t</table>\r\n</div>\t\t\r\n\t\t\r\n<div id = 'controles' class = 'responsive-pagination'>\r\n\t<nav>\t\t\t\r\n\t\t<span>Página <span class = 'pag-actual'></span> de <span class = 'tot-pags'></span>. Ir a: <input type = \"text\" class = 'num-pag numeric'></span>\r\n\t\t<ul class=\"pagination\">\r\n\t\t\t<li>\r\n\t\t   \t\t<a title = \"Ir a la página\" onclick = \"saltarALaPagina('lecturas',$('#lecturas-cliente #tabla'),$('#lecturas-cliente #controles'))\"><span class = \"glyphicon glyphicon-search\"></span></a>\r\n\t\t   \t</li>\r\n\t\t   \t<li>\r\n\t\t   \t\t<a title = \"Ir al inicio\" onclick = \"verPagina(1,'lecturas',$('#lecturas-cliente #tabla'),$('#lecturas-cliente #controles'))\"><span class = \"glyphicon glyphicon-step-backward\"></span></a>\r\n\t\t   \t</li>\r\n\t\t   \t<li>\r\n\t\t   \t\t<a title = \"Anterior\" onclick = \"verPaginaAntHandler('lecturas',$('#lecturas-cliente #tabla'),$('#lecturas-cliente #controles'))\"><span class = \"glyphicon glyphicon-triangle-left\"></span></a>\r\n\t\t   \t</li>\r\n\t\t   \t<li>\r\n\t\t   \t\t<a title = \"Siguiente\" onclick = \"verPaginaSigHandler('lecturas',$('#lecturas-cliente #tabla'),$('#lecturas-cliente #controles'))\"><span class = \"glyphicon glyphicon-triangle-right\"></span></a>\r\n\t\t  \t</li>\r\n\t\t   \t<li>\r\n\t\t   \t\t<a title = \"Ir al final\" onclick = \"verPaginaFinalHandler('lecturas',$('#lecturas-cliente #tabla'),$('#lecturas-cliente #controles'))\"><span class = \"glyphicon glyphicon-step-forward\"></span></a>\r\n\t\t   \t</li>    \t \r\n\t\t</ul>\t\t  \t\r\n\t</nav>\r\n</div>\r\n\r\n<div class = \"opciones\">\t\t\t\r\n\t<img src=\"icons/chart.png\" onclick = 'graficarLecturasConsumos()'>\t\t\r\n</div>";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["lecturas_cliente_tabla.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var t_1;
t_1 = runtime.contextOrFrameLookup(context, frame, "inicio") + runtime.contextOrFrameLookup(context, frame, "itemsxpag");
frame.set("fin", t_1, true);
if(!frame.parent) {
context.setVariable("fin", t_1);
context.addExport("fin");
}
output += "\r\n\r\n";
if(runtime.contextOrFrameLookup(context, frame, "fin") > runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "datos")),"length", env.opts.autoescape)) {
output += "\r\n\t";
var t_2;
t_2 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "datos")),"length", env.opts.autoescape);
frame.set("fin", t_2, true);
if(!frame.parent) {
context.setVariable("fin", t_2);
context.addExport("fin");
}
output += "\r\n";
;
}
output += "\r\n\r\n";
frame = frame.push();
var t_5 = (lineno = 6, colno = 16, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "range"), "range", [runtime.contextOrFrameLookup(context, frame, "inicio"),runtime.contextOrFrameLookup(context, frame, "fin")]));
if(t_5) {var t_4 = t_5.length;
for(var t_3=0; t_3 < t_5.length; t_3++) {
var t_6 = t_5[t_3];
frame.set("i", t_6);
frame.set("loop.index", t_3 + 1);
frame.set("loop.index0", t_3);
frame.set("loop.revindex", t_4 - t_3);
frame.set("loop.revindex0", t_4 - t_3 - 1);
frame.set("loop.first", t_3 === 0);
frame.set("loop.last", t_3 === t_4 - 1);
frame.set("loop.length", t_4);
output += "\r\n<tr class = 'fila'>\r\n\t<th class = 'num-item primero'><span>N° Item</span>";
output += runtime.suppressValue(t_6 + 1, env.opts.autoescape);
output += "</th>\r\n\t<th><span>Período</span>";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "datos")),t_6, env.opts.autoescape)),"periodo", env.opts.autoescape), env.opts.autoescape);
output += "</th>\r\n\t<th><span>Medidor</span>";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "datos")),t_6, env.opts.autoescape)),"id_medidor", env.opts.autoescape), env.opts.autoescape);
output += "</th>\r\n\t<th><span>Lectura actual</span>";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "datos")),t_6, env.opts.autoescape)),"lectura_actual", env.opts.autoescape), env.opts.autoescape);
output += "</th>\r\n\t<th><span>Lectura anterior</span>";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "datos")),t_6, env.opts.autoescape)),"lectura_anterior", env.opts.autoescape), env.opts.autoescape);
output += "</th>\r\n\t<th><span>Consumo agua</span>";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "datos")),t_6, env.opts.autoescape)),"consumo_agua", env.opts.autoescape), env.opts.autoescape);
output += "</th>\r\n\t<th><span>Consumo desague</span>";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "datos")),t_6, env.opts.autoescape)),"consumo_desague", env.opts.autoescape), env.opts.autoescape);
output += "</th>\r\n\t<th><span>Origen consumo</span>";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "datos")),t_6, env.opts.autoescape)),"origen_consumo", env.opts.autoescape), env.opts.autoescape);
output += "</th>\r\n\t<th><span>Tipo lectura</span>";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "datos")),t_6, env.opts.autoescape)),"desc_lectura", env.opts.autoescape), env.opts.autoescape);
output += "</th>\r\n\t<th><span>Impedimento</span>";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "datos")),t_6, env.opts.autoescape)),"desc_impedimento", env.opts.autoescape), env.opts.autoescape);
output += "</th>\r\n\t<th><span>Observación</span>";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "datos")),t_6, env.opts.autoescape)),"desc_observacion", env.opts.autoescape), env.opts.autoescape);
output += "</th>\r\n</tr>\r\n";
;
}
}
frame = frame.pop();
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["lienzo.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<html>\r\n<head>\r\n\t<title></title>\r\n\t<script type=\"text/javascript\" src = \"javascripts/jquery-1.11.2.js\"></script> <!-- jquery -->\r\n\t<!--script type=\"text/javascript\" src = \"javascripts/charts/chart/Chart.js\"></script-->\r\n\t<script type=\"text/javascript\" src = \"javascripts/charts/highcharts/highcharts.js\"></script>\r\n\t<script type=\"text/javascript\" src = \"javascripts/charts/highcharts/exporting.js\"></script>\r\n\t<style type=\"text/css\">\r\n\t*{\r\n\t\tpadding: 0px;\r\n\t\tmargin: 0px;\r\n\t}\r\n\t#myChart{\t\t\r\n\t\twidth: 100%;\r\n\t\theight: 100%;\r\n\t}\r\n\t</style>\r\n\t<script type=\"text/javascript\">\r\n\tvar lineChart = null;\r\n\r\n\t$(document).ready(function(){\r\n\t\topener.darFormatoDataParaGraficoLecturasConsumos(10);\r\n\t\tconstruirGrafica();\t\r\n\t});\t\r\n\r\n\tfunction construirGrafica(){\r\n\t\tHighcharts.setOptions({\r\n\t\t\tlang: {\r\n\t\t\t\tdownloadJPEG: \"Descargar como JPEG\",\r\n\t\t\t\tdownloadPDF: \"Descargar como PDF\",\r\n\t\t\t\tdownloadPNG: \"Descargar como PNG\",\r\n\t\t\t\tdownloadSVG: \"Descargar como SVG\",\r\n\t\t\t\tprintChart: \"Imprimir\"\r\n\t\t\t}\r\n\t\t});\r\n\r\n\t\t$('#myChart').highcharts({\r\n\t        title: {\r\n\t            text: 'Nro. Suministro: '+opener.document.getElementById(\"nro_suministro\").value,\r\n\t            x: -20 //center\r\n\t        },\r\n\t        xAxis: {\r\n\t            categories: opener.lectura_consumos_para_grafica.labels\r\n\t        },\r\n\t        yAxis: {\r\n\t            title: {\r\n\t                text: 'm3'\r\n\t            },\r\n\t            plotLines: [{\r\n\t                value: 0,\r\n\t                width: 1,\r\n\t                color: '#808080'\r\n\t            }]\r\n\t        },\r\n\t        plotOptions: {\r\n\t            line: {\r\n\t                dataLabels: {\r\n\t                    enabled: true\r\n\t                }\t                \r\n\t            }\r\n\t        },\r\n\t        tooltip: {\r\n\t            valueSuffix: 'm3'\r\n\t        },\r\n\t        legend: {\r\n\t            layout: 'vertical',\r\n\t            align: 'right',\r\n\t            verticalAlign: 'middle',\r\n\t            borderWidth: 0\r\n\t        },\r\n\t        series: opener.lectura_consumos_para_grafica.series\r\n\t    });\r\n\t}\r\n\t</script>\r\n</head>\r\n<body>\t\r\n\t<div id = \"myChart\"></div>\r\n</body>\r\n</html>";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["login.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<html>\r\n<head>\r\n\t<meta charset=\"utf-8\">\r\n\t<title>Login</title>\r\n</head>\r\n<body>\r\n\t";
if(runtime.contextOrFrameLookup(context, frame, "error") == true) {
output += "\r\n\t\tusuario o password no son validos!\r\n\t";
;
}
output += "\r\n\t<form action=\"/autenticar\" method=\"post\">\r\n\t\t<div>\r\n\t\t\tusuario:<input type=\"text\" id=\"usuario\" name=\"usuario\"/>\r\n\t\t</div>\r\n\t\t<div>\r\n\t\t\tpassword:<input type=\"password\" id=\"password\" name=\"password\"/>\r\n\t\t</div>\r\n\t\t<input type=\"submit\" value=\"login\"/>\r\n\t</form>\r\n</body>\r\n</html>";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["mapa.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<html>\r\n<head>\r\n\t<title>GIS GRAU</title>\r\n\t<meta charset = \"UTF-8\"></meta>\r\n\r\n\t<link rel=\"stylesheet\" type=\"text/css\" href=\"javascripts/jquery-ui-1.11.4/jquery-ui.min.css\"><!-- jquery UI-->\r\n\t<script type=\"text/javascript\" src = \"javascripts/jquery-1.11.2.js\"></script> <!-- jquery -->\r\n\t<script type=\"text/javascript\" src = \"javascripts/jquery-ui-1.11.4/jquery-ui.min.js\"></script><!-- jquery UI-->\r\n\t<link rel=\"stylesheet\" type=\"text/css\" href=\"openlayers/ol.css\"> <!-- ol3 javascript-->\r\n\t<script type=\"text/javascript\" src = \"openlayers/ol.js\"></script>\t<!-- ol3 estilos-->\r\n\t<script src=\"https://maps.googleapis.com/maps/api/js?v=3.exp&signed_in=true\"></script><!-- Google Street View -->\t\r\n\t<link rel=\"stylesheet\" type = \"text/css\" href=\"javascripts/bootstrap-3.3.5-dist/css/bootstrap.min.css\"> <!-- Boostrap -->\r\n\t<script type = \"text/javascript\" src=\"javascripts/bootstrap-3.3.5-dist/js/bootstrap.min.js\"></script> <!-- Boostrap -->\r\n\t<script type=\"text/javascript\" src = \"javascripts/nunjucks.js\"></script> <!-- nunjucks -->\r\n\t<link rel=\"stylesheet\" type=\"text/css\" href=\"css/estilos-mapa.css\"> <!-- Estilos -->\r\n\t\r\n\t<script type=\"text/javascript\" src = \"javascripts/pintor.js\"></script>\r\n\t<script type=\"text/javascript\" src = \"javascripts/creadorEstilos.js\"></script>\r\n\t<script type=\"text/javascript\" src = \"javascripts/creadorInteracciones.js\"></script>\r\n\t<script type=\"text/javascript\" src = \"javascripts/inicializacion.js\"></script>\r\n\t<script type=\"text/javascript\" src = \"javascripts/observador.js\"></script>\r\n\t<script type=\"text/javascript\" src = \"javascripts/comunicador.js\"></script>\r\n\t<script type=\"text/javascript\" src = \"javascripts/validadorDatos.js\"></script>\r\n\t<script type=\"text/javascript\" src = \"javascripts/validadorConsultas.js\"></script>\r\n\t<script type=\"text/javascript\" src = \"javascripts/administradorCapas.js\"></script>\r\n\t<script type=\"text/javascript\" src = \"javascripts/cobranzas.js\"></script>\r\n\t<script type=\"text/javascript\" src = \"javascripts/medicion.js\"></script>\r\n\t<script type=\"text/javascript\" src = \"javascripts/catastro.js\"></script>\r\n\t<script type=\"text/javascript\" src = \"javascripts/ingenieria.js\"></script>\r\n\t<script type=\"text/javascript\" src = \"javascripts/mapa-funciones.js\"></script> \r\n\t<script type=\"text/javascript\" src = \"javascripts/mapa.js\"></script>\r\n\t<script type=\"text/javascript\" src = \"javascripts/administradorMapa.js\"></script>\r\n\t<script type=\"text/javascript\" src = \"javascripts/templates.js\"></script>\t\r\n\r\n</head>\r\n<body>\r\n\t<section id = \"main-container\">\t\t\r\n\t\t<nav id = \"menu-container\">\r\n\t\t\t<a id = \"ocultar-menu\">Ocultar</a>\r\n\t\t\t<ul id = \"menu-principal\">\r\n\t\t\t\t<li id = \"ver-menu-capa-base\">\r\n\t\t\t\t\t<a>Capa base</a>\r\n\t\t\t\t\t<ul id = \"menu-capa-base\" class = \"submenu\">\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<input id = \"ver-calles\" type = \"radio\" name = \"capa-base\" checked><span>Calles</span>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<input id = \"ver-aerea\" type = \"radio\" name = \"capa-base\"><span>Aérea</span>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<input id = \"ver-solo-gis\" type = \"radio\" name = \"capa-base\"><span>Sin capa</span>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li id = \"ver-menu-capas-gis\">\r\n\t\t\t\t\t<a>Capas Gis</a>\r\n\t\t\t\t\t<ul id = \"menu-capas-gis\" class = \"submenu\">\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<input id = \"ver-gis-distritos\" type = \"checkbox\"><span>Distritos</span>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<input id = \"ver-gis-sectores\" type = \"checkbox\"><span>Sectores</span>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<input id = \"ver-gis-urbanismo\" type = \"checkbox\"><span>Urbanizaciones</span>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<input id = \"ver-gis-manzanas\" type = \"checkbox\"><span>Manzanas</span>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<input id = \"ver-gis-predios\" type = \"checkbox\"><span>Predios</span>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<input id = \"ver-gis-ruta-entrega\" type = \"checkbox\"><span>Rutas de entrega</span>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<input id = \"ver-gis-ruta-entrega-camino\" type = \"checkbox\"><span>Caminos rutas de entrega</span>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<input id = \"ver-gis-ruta-lectura\" type = \"checkbox\"><span>Rutas de lectura</span>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<input id = \"ver-gis-ruta-lectura-camino\" type = \"checkbox\"><span>Caminos rutas de lectura</span>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<input id = \"ver-gis-calles\" type = \"checkbox\"><span>Calles</span>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<input id = \"ver-gis-red-agua\" type = \"checkbox\"><span>Agua</span>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<input id = \"ver-gis-red-alcantarillado\" type = \"checkbox\"><span>Alcantarillado</span>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<input id = \"ver-gis-accesorios\" type = \"checkbox\"><span>Accesorios</span>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<input id = \"ver-gis-valvulas\" type = \"checkbox\"><span>Válvulas</span>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<input id = \"ver-gis-buzones\" type = \"checkbox\"><span>Buzones</span>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<input id = \"ver-gis-pozos\" type = \"checkbox\"><span>Pozos</span>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<input id = \"ver-gis-reservorios\" type = \"checkbox\"><span>Reservorios</span>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<input id = \"ver-gis-clientes\" type = \"checkbox\"><span>Clientes</span>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<input id = \"ver-gis-curvas-nivel\" type = \"checkbox\"><span>Curvas de nivel</span>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li id = \"ver-menu-etiquetas\">\r\n\t\t\t\t\t<a>Etiquetas</a>\r\n\t\t\t\t\t<ul id = \"menu-etiquetas\" class = \"submenu\">\t\t\t\t\t\t\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<input id = \"ver-etiqueta-sectores\" type = \"checkbox\"><span>Sectores</span>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<input id = \"ver-etiqueta-urbanismo\" type = \"checkbox\"><span>Urbanizaciones</span>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<input id = \"ver-etiqueta-manzanas\" type = \"checkbox\"><span>Manzanas</span>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<input id = \"ver-etiqueta-ruta-entrega\" type = \"checkbox\"><span>Rutas de entrega</span>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<input id = \"ver-etiqueta-ruta-lectura\" type = \"checkbox\"><span>Rutas de lectura</span>\r\n\t\t\t\t\t\t</li>\t\t\t\t\t\t\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<input id = \"ver-etiqueta-desague\" type = \"checkbox\"><span>Flujo del alcantarillado</span>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<input id = \"ver-etiqueta-accesorios\" type = \"checkbox\"><span>Accesorios</span>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<input id = \"ver-etiqueta-valvulas\" type = \"checkbox\"><span>Válvulas</span>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<input id = \"ver-etiqueta-buzones\" type = \"checkbox\"><span>Buzones</span>\r\n\t\t\t\t\t\t</li>\t\t\t\t\t\t\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<input id = \"ver-etiqueta-clientes\" type = \"checkbox\"><span>Clientes</span>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<input id = \"ver-etiqueta-curvas-nivel\" type = \"checkbox\"><span>Curvas de nivel</span>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li id = \"ver-menu-consultas\">\r\n\t\t\t\t\t<a>Consultas y Análisis</a>\r\n\t\t\t\t\t<ul id = \"menu-consultas\" class = \"submenu\">\r\n\t\t\t\t\t\t<li id = \"buscar-cliente\">Buscar cliente por n° suministro</li>\r\n\t\t\t\t\t\t<li id = \"buscar-cliente-por-cod-cat\">Busquedas cod. catastral</li>\r\n\t\t\t\t\t\t<li id = \"analisis-de-usuarios\">Análisis de usuarios</li>\r\n\t\t\t\t\t\t<li id = \"analisis-de-deudas\">Análisis de deudas</li>\r\n\t\t\t\t\t\t<li id = \"analisis-por-consumo\">Análisis de consumos</li>\r\n\t\t\t\t\t\t<li id = \"analisis-social\">Análisis comercial y social</li>\r\n\t\t\t\t\t\t<li id = \"analisis-conexion\">Análisis de la conexión</li>\r\n\t\t\t\t\t\t<li id = \"analisis-objetos\">Análisis de objetos</li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li id = \"ver-menu-herramientas\">\r\n\t\t\t\t\t<a>Herramientas</a>\r\n\t\t\t\t\t<ul id = \"menu-herramientas\" class = \"submenu\">\t\t\t\t\t\t\r\n\t\t\t\t\t\t<li id = \"captura-mapa\">Captura</li>\t\t\t\t\t\t\r\n\t\t\t\t\t\t<li id = \"limpiar-mapa\">Limpiar mapa</li>\t\t\t\t\t\t\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li id = \"ver-menu-ayuda\">\r\n\t\t\t\t\t<a>Ayuda</a>\r\n\t\t\t\t\t<ul id = \"menu-ayuda\" class = \"submenu\">\t\t\t\t\t\t\r\n\t\t\t\t\t\t<li id = \"ver-leyenda\">Leyenda</li>\t\t\t\t\t\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</li>\r\n\t\t\t</ul>\t\t\t\t\t\t\r\n\t\t</nav>\r\n\r\n\t\t<div id = \"mapa\">\r\n\t\t\t<!-- popup -->\r\n\t\t\t<div id = \"info-popup\"></div>\r\n\t\t\t<!-- Ventana modal -->\r\n\t\t\t<div class = \"modal fade\" id = \"myModal\" tabindex=\"-1\" role=\"dialog\" >\t\t\t\t\r\n\t\t\t\t<div class = \"modal-dialog modal-sm\">\r\n\t\t\t\t\t<div class = \"modal-content\" id = \"modal-contenido\">\r\n\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\t\r\n\t\t</div>\t\t\r\n\r\n\t\t<div id = \"info-div\">\r\n\t\t\t<label>total clientes activos</label>\r\n\t\t\t<span id = \"total-clientes-activos\"></span>\r\n\t\t\t<label>Dist. Total Red de agua</label>\r\n\t\t\t<span id = \"dt-red-agua\"></span>\r\n\t\t\t<label>Dist. Total Red de desague</label>\r\n\t\t\t<span id = \"dt-red-desague\"></span>\r\n\t\t</div>\r\n\r\n\t\t<div id = \"leyenda-dialog\" title = \"Leyenda\">\r\n\t\t\t<div><img src = 'images/leyenda-cliente-activo.png'><span>Cliente activo</span></div>\r\n\t\t\t<div><img src = 'images/leyenda-cliente-factible.png'><span>Cliente factible</span></div>\r\n\t\t\t<div><img src = 'images/leyenda-manzana.png'><span>Manzana</span></div>\r\n\t\t\t<div><img src = 'images/leyenda-predio.png'><span>Predio</span></div>\r\n\t\t\t<div><img src = 'images/leyenda-red-agua.png'><span>Red agua</span></div>\r\n\t\t\t<div><img src = 'images/leyenda-red-alcantarillado.png'><span>Red alcantarillado</span></div>\r\n\t\t\t<div><img src = 'images/leyenda-accesorios.png'><span>Accesorios</span></div>\r\n\t\t\t<div><img src = 'images/leyenda-valvulas.png'><span>Válvulas</span></div>\r\n\t\t\t<div><img src = 'images/leyenda-buzones.png'><span>Buzones</span></div>\r\n\t\t\t<div><img src = 'images/leyenda-pozos.png'><span>Pozos</span></div>\r\n\t\t</div>\r\n\r\n\t\t<div id = \"street-view\">\r\n\t\t\t<div id = \"gmap\"></div><div id = \"pano\"></div>\r\n\t\t</div>\r\n\r\n\t\t<div id = \"opciones-captura\"></div>\r\n\r\n\t\t<div id = \"opciones-analisis-objetos\"></div>\r\n\r\n\t</section>\r\n</body>\r\n</html>";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["opciones_captura.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<a id = 'download-capture-link' href = '' download = 'captura-mapa.png'><img class = 'img-icon' src=\"icons/png-icon.png\"></a>\r\n<a onclick = \"ADMIN_MAPA.imprimirCaptura()\"><img class = 'img-icon' src=\"icons/printer.png\"></a>";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["resultados_analisis_conexion.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<html>\r\n<head>\r\n\t<title></title>\r\n\t<meta charset = \"UTF-8\">\r\n\t<meta name = \"viewport\" content = \"user-scalable=no, initial-scale=1.0, maximum-scale=1.0, width=device-width\">\r\n\t<script type=\"text/javascript\" src = \"javascripts/jquery-1.11.2.js\"></script> <!-- jquery -->\r\n\t<link rel=\"stylesheet\" type = \"text/css\" href=\"javascripts/bootstrap-3.3.5-dist/css/bootstrap.min.css\"> <!-- Boostrap -->\r\n\t<link rel=\"stylesheet\" type=\"text/css\" href=\"css/responsive.css\">\r\n\t<link rel=\"stylesheet\" type=\"text/css\" href=\"css/estilos-resultados-busqueda-cliente.css\">\r\n\t<script type = \"text/javascript\" src=\"javascripts/bootstrap-3.3.5-dist/js/bootstrap.min.js\"></script> <!-- Boostrap -->\r\n\t<script type=\"text/javascript\" src = \"javascripts/nunjucks.js\"></script><!-- Nunjucks -->\r\n\t<script type=\"text/javascript\" src = \"javascripts/utilidades.js\"></script><!-- Utilidades -->\t\r\n\t<script type=\"text/javascript\" src = \"javascripts/paginacion-funciones.js\"></script> <!-- paginación -->\r\n\t<script type=\"text/javascript\" src=\"javascripts/excel/jqgridExcelExportClientSide-libs.js\" ></script><!-- Para exportar a excel -->\r\n\t<script type=\"text/javascript\" src=\"javascripts/excel/excel.js\"></script><!-- Para exportar a excel -->\r\n\t<script type=\"text/javascript\" src = \"javascripts/resultados-analisis-conexion.js\"></script>\r\n\t<script type=\"text/javascript\" src = \"javascripts/ejecutorAnalisis.js\"></script>\r\n\t\r\n\t<script type=\"text/javascript\">\r\n\t$(document).ready(function(){\t\t\r\n\r\n\t\tinit(";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "id_prov"), env.opts.autoescape);
output += ",";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "id_dist"), env.opts.autoescape);
output += ",";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "id_diametro_conagua"), env.opts.autoescape);
output += ",";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "id_material_conagua"), env.opts.autoescape);
output += ",";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "id_situacion_conagua"), env.opts.autoescape);
output += ",'";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "fechai_conagua"), env.opts.autoescape);
output += "','";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "fechaf_conagua"), env.opts.autoescape);
output += "',\r\n\t\t\t";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "id_diametro_codesa"), env.opts.autoescape);
output += ",";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "id_material_codesa"), env.opts.autoescape);
output += ",";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "id_situacion_codesa"), env.opts.autoescape);
output += ",'";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "fechai_codesa"), env.opts.autoescape);
output += "','";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "fechaf_codesa"), env.opts.autoescape);
output += "');\r\n\r\n\t});\r\n\t</script>\r\n\r\n</head>\r\n<body>\r\n\t<div id = \"main-container\">\t\t\t\r\n\r\n\t\t<div id = \"desc-consulta\">\r\n\t\t\t<h3>Descripción de la consulta</h3>\r\n\t\t\t<p>Usuarios de la provincia de: <span class = 'prov'>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "provincia"), env.opts.autoescape);
output += "</span></p>\r\n\t\t\t<p>del distrito de: <span class = 'dist'>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "distrito"), env.opts.autoescape);
output += "</span></p>\r\n\t\t\t";
output += runtime.suppressValue(env.getFilter("conexion_msj").call(context, runtime.contextOrFrameLookup(context, frame, "diametro_conagua"),runtime.contextOrFrameLookup(context, frame, "material_conagua"),runtime.contextOrFrameLookup(context, frame, "situacion_conagua"),runtime.contextOrFrameLookup(context, frame, "fechai_conagua"),runtime.contextOrFrameLookup(context, frame, "fechaf_conagua"),0), env.opts.autoescape);
output += "\r\n\t\t\t";
output += runtime.suppressValue(env.getFilter("conexion_msj").call(context, runtime.contextOrFrameLookup(context, frame, "diametro_codesa"),runtime.contextOrFrameLookup(context, frame, "material_codesa"),runtime.contextOrFrameLookup(context, frame, "situacion_codesa"),runtime.contextOrFrameLookup(context, frame, "fechai_codesa"),runtime.contextOrFrameLookup(context, frame, "fechaf_codesa"),1), env.opts.autoescape);
output += "\r\n\t\t\t<h4><span class = 'tot'></span> usuario(s) encontrado(s)</h4>\r\n\t\t</div>\t\t\r\n\r\n\t\t<form action = \"/verFichaCatastralSuministro\" method = \"POST\" target = \"_blank\">\r\n\t\t\t<input type=\"hidden\" id = \"nro_suministro\" name=\"nro_suministro\" value='' />\r\n\t\t\t<div id = \"tabla\">\t\t\t\r\n\t\t\t\t<table class = 'table responsive-table'>\r\n\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t<tr class = 'captions'>\r\n\t\t\t\t\t\t\t<th>Num. Item</th>\r\n\t\t\t\t\t\t\t<th>Nro. Inscripción</th>\r\n\t\t\t\t\t\t\t<th>Nombre titular</th>\r\n\t\t\t\t\t\t\t<th>Distrito</th>\r\n\t\t\t\t\t\t\t<th>Tipo servicio</th>\r\n\t\t\t\t\t\t\t<th>Estado (agua)</th>\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t<th>Deuda</th>\r\n\t\t\t\t\t\t\t<th>Recibos adeudados</th>\r\n\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t</thead>\r\n\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t</tbody>\r\n\t\t\t\t</table>\r\n\t\t\t</div>\r\n\t\t</form>\r\n\t\t\r\n\t\t<div id = \"controles\" class = 'responsive-pagination'>\r\n\t\t\t<nav>\r\n\t\t\t\t<span>Página <span class = 'pag-actual'></span> de <span class = 'tot-pags'></span>. Ir a: <input type = \"text\" class = 'num-pag numeric'></span>\r\n\t\t\t\t<ul class=\"pagination\">\r\n\t\t\t\t\t<li>\r\n\t\t\t\t   \t\t<a title = \"Ir a la página\" onclick = \"saltarALaPagina('analisis_conexion',$('#tabla'),$('#controles'))\"><span class = \"glyphicon glyphicon-search\"></span></a>\r\n\t\t\t\t   \t</li>\r\n\t\t\t\t   \t<li>\r\n\t\t\t\t   \t\t<a title = \"Ir al inicio\" onclick = \"verPagina(1,'analisis_conexion',$('#tabla'),$('#controles'))\"><span class = \"glyphicon glyphicon-step-backward\"></span></a>\r\n\t\t\t\t   \t</li>\r\n\t\t\t\t   \t<li>\r\n\t\t\t\t   \t\t<a title = \"Anterior\" onclick = \"verPaginaAntHandler('analisis_conexion',$('#tabla'),$('#controles'))\"><span class = \"glyphicon glyphicon-triangle-left\"></span></a>\r\n\t\t\t\t   \t</li>\r\n\t\t\t\t   \t<li>\r\n\t\t\t\t   \t\t<a title = \"Siguiente\" onclick = \"verPaginaSigHandler('analisis_conexion',$('#tabla'),$('#controles'))\"><span class = \"glyphicon glyphicon-triangle-right\"></span></a>\r\n\t\t\t\t  \t</li>\r\n\t\t\t\t   \t<li>\r\n\t\t\t\t   \t\t<a title = \"Ir al final\" onclick = \"verPaginaFinalHandler('analisis_conexion',$('#tabla'),$('#controles'))\"><span class = \"glyphicon glyphicon-step-forward\"></span></a>\r\n\t\t\t\t   \t</li>\t \r\n\t\t\t\t</ul>  \t\r\n\t\t\t</nav>\r\n\t\t</div>\r\n\t\t<div id = \"opciones\">\t\t\t\r\n\t\t\t<img src=\"icons/xls-download.png\" class = 'img-icon' id = 'to_excel_btn'>\t\t\t\r\n\t\t</div>\r\n\t</div>\r\n</body>\r\n</html>";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["resultados_analisis_conexion_tabla.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var t_1;
t_1 = runtime.contextOrFrameLookup(context, frame, "inicio") + runtime.contextOrFrameLookup(context, frame, "itemsxpag");
frame.set("fin", t_1, true);
if(!frame.parent) {
context.setVariable("fin", t_1);
context.addExport("fin");
}
output += "\r\n\r\n";
if(runtime.contextOrFrameLookup(context, frame, "fin") > runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "datos")),"length", env.opts.autoescape)) {
output += "\r\n\t";
var t_2;
t_2 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "datos")),"length", env.opts.autoescape);
frame.set("fin", t_2, true);
if(!frame.parent) {
context.setVariable("fin", t_2);
context.addExport("fin");
}
output += "\r\n";
;
}
output += "\r\n\r\n";
frame = frame.push();
var t_5 = (lineno = 6, colno = 16, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "range"), "range", [runtime.contextOrFrameLookup(context, frame, "inicio"),runtime.contextOrFrameLookup(context, frame, "fin")]));
if(t_5) {var t_4 = t_5.length;
for(var t_3=0; t_3 < t_5.length; t_3++) {
var t_6 = t_5[t_3];
frame.set("i", t_6);
frame.set("loop.index", t_3 + 1);
frame.set("loop.index0", t_3);
frame.set("loop.revindex", t_4 - t_3);
frame.set("loop.revindex0", t_4 - t_3 - 1);
frame.set("loop.first", t_3 === 0);
frame.set("loop.last", t_3 === t_4 - 1);
frame.set("loop.length", t_4);
output += "\r\n<tr class = 'fila'>\r\n\t<th class = 'primero'><span>N° Item</span>";
output += runtime.suppressValue(t_6 + 1, env.opts.autoescape);
output += "</th>\r\n\t<th><span>N° Inscripción</span>";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "datos")),t_6, env.opts.autoescape)),"num_inscripcion", env.opts.autoescape), env.opts.autoescape);
output += "</th>\r\n\t<th><span>Nombre</span>\r\n\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "datos")),t_6, env.opts.autoescape)),"x", env.opts.autoescape)) {
output += "\r\n\t\t<a onclick = 'TRIGGER_ANALYSIS.verFichaCatastral(\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "datos")),t_6, env.opts.autoescape)),"num_inscripcion", env.opts.autoescape), env.opts.autoescape);
output += "\")'>";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "datos")),t_6, env.opts.autoescape)),"nombre_titular", env.opts.autoescape), env.opts.autoescape);
output += "</a>\r\n\t\t<a class = 'glyphicon glyphicon-globe' onclick = 'opener.OBSERVADOR.verCliente(";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "datos")),t_6, env.opts.autoescape)),"x", env.opts.autoescape), env.opts.autoescape);
output += ",";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "datos")),t_6, env.opts.autoescape)),"y", env.opts.autoescape), env.opts.autoescape);
output += ",19)'></a>\r\n\t";
;
}
else {
output += "\r\n\t\t";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "datos")),t_6, env.opts.autoescape)),"nombre_titular", env.opts.autoescape), env.opts.autoescape);
output += "\r\n\t";
;
}
output += "\r\n\t</th>\r\n\t<th><span>Distrito</span>";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "datos")),t_6, env.opts.autoescape)),"distrito", env.opts.autoescape), env.opts.autoescape);
output += "</th>\r\n\t<th><span>Tipo servicio</span>";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "datos")),t_6, env.opts.autoescape)),"tipo_servicio", env.opts.autoescape), env.opts.autoescape);
output += "</th>\r\n\t<th><span>Estado (agua)</span>";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "datos")),t_6, env.opts.autoescape)),"estado_conexion_agua", env.opts.autoescape), env.opts.autoescape);
output += "</th>\r\n\t<th><span>Deuda</span>";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "datos")),t_6, env.opts.autoescape)),"deuda", env.opts.autoescape), env.opts.autoescape);
output += "</th>\r\n\t<th><span>Recibos adeudados</span>";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "datos")),t_6, env.opts.autoescape)),"cant_recibos_deuda", env.opts.autoescape), env.opts.autoescape);
output += "</th>\t\r\n</tr>\r\n";
;
}
}
frame = frame.pop();
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["resultados_analisis_de_consumos.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<html>\r\n<head>\r\n\t<title></title>\r\n\t<meta charset = \"UTF-8\">\r\n\t<meta name = \"viewport\" content = \"user-scalable=no, initial-scale=1.0, maximum-scale=1.0, width=device-width\">\r\n\t<script type=\"text/javascript\" src = \"javascripts/jquery-1.11.2.js\"></script> <!-- jquery -->\r\n\t<link rel=\"stylesheet\" type = \"text/css\" href=\"javascripts/bootstrap-3.3.5-dist/css/bootstrap.min.css\"> <!-- Boostrap -->\r\n\t<link rel=\"stylesheet\" type=\"text/css\" href=\"css/responsive.css\">\r\n\t<link rel=\"stylesheet\" type=\"text/css\" href=\"css/estilos-resultados-busqueda-cliente.css\">\r\n\t<script type = \"text/javascript\" src=\"javascripts/bootstrap-3.3.5-dist/js/bootstrap.min.js\"></script> <!-- Boostrap -->\r\n\t<script type=\"text/javascript\" src = \"javascripts/nunjucks.js\"></script><!-- Nunjucks -->\r\n\t<script type=\"text/javascript\" src = \"javascripts/utilidades.js\"></script><!-- Utilidades -->\t\r\n\t<script type=\"text/javascript\" src = \"javascripts/paginacion-funciones.js\"></script> <!-- paginación -->\r\n\t<script type=\"text/javascript\" src=\"javascripts/excel/jqgridExcelExportClientSide-libs.js\" ></script><!-- Para exportar a excel -->\r\n\t<script type=\"text/javascript\" src=\"javascripts/excel/excel.js\"></script><!-- Para exportar a excel -->\r\n\t<script type=\"text/javascript\" src = \"javascripts/ejecutorAnalisis.js\"></script>\r\n\t<script type=\"text/javascript\" src = \"javascripts/resultados-analisis-consumos.js\"></script>\r\n\r\n\t<script type=\"text/javascript\">\r\n\t$(document).ready(function(){\t\t\r\n\t\t\r\n\t\tinit(";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "id_prov"), env.opts.autoescape);
output += ",";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "id_dist"), env.opts.autoescape);
output += ",";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "f_cond"), env.opts.autoescape);
output += ",";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "s_cond"), env.opts.autoescape);
output += ",'";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "f_param"), env.opts.autoescape);
output += "','";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "s_param"), env.opts.autoescape);
output += "',";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "ope"), env.opts.autoescape);
output += ",'";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "anio"), env.opts.autoescape);
output += "','";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "mes"), env.opts.autoescape);
output += "','";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "medidor"), env.opts.autoescape);
output += "',";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "filtro"), env.opts.autoescape);
output += ");\r\n\t\t\r\n\t});\r\n\t</script>\r\n\r\n</head>\r\n<body>\r\n\t<div id = \"main-container\">\t\t\t\r\n\r\n\t\t<div id = \"desc-consulta\">\r\n\t\t\t<h3>Descripción de la consulta</h3>\r\n\t\t\t<p>Usuarios de la provincia de: <span class = 'prov'>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "provincia"), env.opts.autoescape);
output += "</span></p>\r\n\t\t\t<p>del distrito de: <span class = 'dist'>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "distrito"), env.opts.autoescape);
output += "</span></p>\r\n\t\t\t";
output += runtime.suppressValue(env.getFilter("consumo_cond_msj").call(context, runtime.contextOrFrameLookup(context, frame, "f_cond"),runtime.contextOrFrameLookup(context, frame, "s_cond"),runtime.contextOrFrameLookup(context, frame, "f_param"),runtime.contextOrFrameLookup(context, frame, "s_param"),runtime.contextOrFrameLookup(context, frame, "ope")), env.opts.autoescape);
output += "\r\n\t\t\t";
output += runtime.suppressValue(env.getFilter("medidor_msj").call(context, runtime.contextOrFrameLookup(context, frame, "medidor")), env.opts.autoescape);
output += "\r\n\t\t\t<p>en el periodo: <span>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "anio"), env.opts.autoescape);
output += " - ";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "mes"), env.opts.autoescape);
output += "</span></p>\r\n\t\t\t<h4><span class = 'tot'></span> usuario(s) encontrado(s)</h4>\r\n\t\t</div>\t\t\r\n\r\n\t\t<form action = \"/verFichaCatastralSuministro\" method = \"POST\" target = \"_blank\">\r\n\t\t\t<input type=\"hidden\" id = \"nro_suministro\" name=\"nro_suministro\" value='' />\r\n\t\t\t<div id = \"tabla\">\t\t\t\r\n\t\t\t\t<table class = 'table responsive-table'>\r\n\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t<tr class = 'captions'>\r\n\t\t\t\t\t\t\t<th>Num. Item</th>\r\n\t\t\t\t\t\t\t<th>Nro. Inscripción</th>\r\n\t\t\t\t\t\t\t<th>Nombre titular</th>\r\n\t\t\t\t\t\t\t<th>Distrito</th>\r\n\t\t\t\t\t\t\t<th>Tipo servicio</th>\r\n\t\t\t\t\t\t\t<th>Estado (agua)</th>\r\n\t\t\t\t\t\t\t<th>Consumo</th>\r\n\t\t\t\t\t\t\t<th>Deuda</th>\r\n\t\t\t\t\t\t\t<th>Recibos adeudados</th>\r\n\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t</thead>\r\n\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t</tbody>\r\n\t\t\t\t</table>\r\n\t\t\t</div>\r\n\t\t</form>\r\n\t\t\r\n\t\t<div id = \"controles\" class = 'responsive-pagination'>\r\n\t\t\t<nav>\r\n\t\t\t\t<span>Página <span class = 'pag-actual'></span> de <span class = 'tot-pags'></span>. Ir a: <input type = \"text\" class = 'num-pag numeric'></span>\r\n\t\t\t\t<ul class=\"pagination\">\r\n\t\t\t\t\t<li>\r\n\t\t\t\t   \t\t<a title = \"Ir a la página\" onclick = \"saltarALaPagina('analisis_consumos',$('#tabla'),$('#controles'))\"><span class = \"glyphicon glyphicon-search\"></span></a>\r\n\t\t\t\t   \t</li>\r\n\t\t\t\t   \t<li>\r\n\t\t\t\t   \t\t<a title = \"Ir al inicio\" onclick = \"verPagina(1,'analisis_consumos',$('#tabla'),$('#controles'))\"><span class = \"glyphicon glyphicon-step-backward\"></span></a>\r\n\t\t\t\t   \t</li>\r\n\t\t\t\t   \t<li>\r\n\t\t\t\t   \t\t<a title = \"Anterior\" onclick = \"verPaginaAntHandler('analisis_consumos',$('#tabla'),$('#controles'))\"><span class = \"glyphicon glyphicon-triangle-left\"></span></a>\r\n\t\t\t\t   \t</li>\r\n\t\t\t\t   \t<li>\r\n\t\t\t\t   \t\t<a title = \"Siguiente\" onclick = \"verPaginaSigHandler('analisis_consumos',$('#tabla'),$('#controles'))\"><span class = \"glyphicon glyphicon-triangle-right\"></span></a>\r\n\t\t\t\t  \t</li>\r\n\t\t\t\t   \t<li>\r\n\t\t\t\t   \t\t<a title = \"Ir al final\" onclick = \"verPaginaFinalHandler('analisis_consumos',$('#tabla'),$('#controles'))\"><span class = \"glyphicon glyphicon-step-forward\"></span></a>\r\n\t\t\t\t   \t</li>\t \r\n\t\t\t\t</ul>  \t\r\n\t\t\t</nav>\r\n\t\t</div>\r\n\t\t<div id = \"opciones\">\t\t\t\r\n\t\t\t<img src=\"icons/xls-download.png\" class = 'img-icon' id = 'to_excel_btn'>\t\t\t\r\n\t\t</div>\r\n\t</div>\r\n</body>\r\n</html>";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["resultados_analisis_de_consumos_tabla.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var t_1;
t_1 = runtime.contextOrFrameLookup(context, frame, "inicio") + runtime.contextOrFrameLookup(context, frame, "itemsxpag");
frame.set("fin", t_1, true);
if(!frame.parent) {
context.setVariable("fin", t_1);
context.addExport("fin");
}
output += "\r\n\r\n";
if(runtime.contextOrFrameLookup(context, frame, "fin") > runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "datos")),"length", env.opts.autoescape)) {
output += "\r\n\t";
var t_2;
t_2 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "datos")),"length", env.opts.autoescape);
frame.set("fin", t_2, true);
if(!frame.parent) {
context.setVariable("fin", t_2);
context.addExport("fin");
}
output += "\r\n";
;
}
output += "\r\n\r\n";
frame = frame.push();
var t_5 = (lineno = 6, colno = 16, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "range"), "range", [runtime.contextOrFrameLookup(context, frame, "inicio"),runtime.contextOrFrameLookup(context, frame, "fin")]));
if(t_5) {var t_4 = t_5.length;
for(var t_3=0; t_3 < t_5.length; t_3++) {
var t_6 = t_5[t_3];
frame.set("i", t_6);
frame.set("loop.index", t_3 + 1);
frame.set("loop.index0", t_3);
frame.set("loop.revindex", t_4 - t_3);
frame.set("loop.revindex0", t_4 - t_3 - 1);
frame.set("loop.first", t_3 === 0);
frame.set("loop.last", t_3 === t_4 - 1);
frame.set("loop.length", t_4);
output += "\r\n<tr class = 'fila'>\r\n\t<th class = 'primero'><span>N° Item</span>";
output += runtime.suppressValue(t_6 + 1, env.opts.autoescape);
output += "</th>\r\n\t<th><span>N° Inscripción</span>";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "datos")),t_6, env.opts.autoescape)),"num_inscripcion", env.opts.autoescape), env.opts.autoescape);
output += "</th>\r\n\t<th><span>Nombre</span>\r\n\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "datos")),t_6, env.opts.autoescape)),"x", env.opts.autoescape)) {
output += "\r\n\t\t<a onclick = 'TRIGGER_ANALYSIS.verFichaCatastral(\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "datos")),t_6, env.opts.autoescape)),"num_inscripcion", env.opts.autoescape), env.opts.autoescape);
output += "\")'>";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "datos")),t_6, env.opts.autoescape)),"nombre_titular", env.opts.autoescape), env.opts.autoescape);
output += "</a>\r\n\t\t<a class = 'glyphicon glyphicon-globe' onclick = 'opener.OBSERVADOR.verCliente(";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "datos")),t_6, env.opts.autoescape)),"x", env.opts.autoescape), env.opts.autoescape);
output += ",";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "datos")),t_6, env.opts.autoescape)),"y", env.opts.autoescape), env.opts.autoescape);
output += ",19)'></a>\r\n\t";
;
}
else {
output += "\r\n\t\t";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "datos")),t_6, env.opts.autoescape)),"nombre_titular", env.opts.autoescape), env.opts.autoescape);
output += "\r\n\t";
;
}
output += "\r\n\t</th>\r\n\t<th><span>Distrito</span>";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "datos")),t_6, env.opts.autoescape)),"distrito", env.opts.autoescape), env.opts.autoescape);
output += "</th>\r\n\t<th><span>Tipo servicio</span>";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "datos")),t_6, env.opts.autoescape)),"tipo_servicio", env.opts.autoescape), env.opts.autoescape);
output += "</th>\r\n\t<th><span>Estado (agua)</span>";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "datos")),t_6, env.opts.autoescape)),"estado_conexion_agua", env.opts.autoescape), env.opts.autoescape);
output += "</th>\r\n\t<th><span>Consumo</span>";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "datos")),t_6, env.opts.autoescape)),"consumo_agua", env.opts.autoescape), env.opts.autoescape);
output += "</th>\r\n\t<th><span>Deuda</span>";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "datos")),t_6, env.opts.autoescape)),"deuda", env.opts.autoescape), env.opts.autoescape);
output += "</th>\t\r\n\t<th><span>Recibos adeudados</span>";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "datos")),t_6, env.opts.autoescape)),"cant_recibos_deuda", env.opts.autoescape), env.opts.autoescape);
output += "</th>\t\r\n</tr>\r\n";
;
}
}
frame = frame.pop();
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["resultados_analisis_de_deudas.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<html>\r\n<head>\r\n\t<title></title>\r\n\t<meta charset = \"UTF-8\">\r\n\t<meta name = \"viewport\" content = \"user-scalable=no, initial-scale=1.0, maximum-scale=1.0, width=device-width\">\r\n\t<script type=\"text/javascript\" src = \"javascripts/jquery-1.11.2.js\"></script> <!-- jquery -->\r\n\t<link rel=\"stylesheet\" type = \"text/css\" href=\"javascripts/bootstrap-3.3.5-dist/css/bootstrap.min.css\"> <!-- Boostrap -->\r\n\t<link rel=\"stylesheet\" type=\"text/css\" href=\"css/responsive.css\">\r\n\t<link rel=\"stylesheet\" type=\"text/css\" href=\"css/estilos-resultados-busqueda-cliente.css\">\r\n\t<script type = \"text/javascript\" src=\"javascripts/bootstrap-3.3.5-dist/js/bootstrap.min.js\"></script> <!-- Boostrap -->\r\n\t<script type=\"text/javascript\" src = \"javascripts/nunjucks.js\"></script><!-- Nunjucks -->\r\n\t<script type=\"text/javascript\" src = \"javascripts/utilidades.js\"></script><!-- Utilidades -->\t\r\n\t<script type=\"text/javascript\" src = \"javascripts/paginacion-funciones.js\"></script> <!-- paginación -->\r\n\t<script type=\"text/javascript\" src=\"javascripts/excel/jqgridExcelExportClientSide-libs.js\" ></script><!-- Para exportar a excel -->\r\n\t<script type=\"text/javascript\" src=\"javascripts/excel/excel.js\"></script><!-- Para exportar a excel -->\r\n\t<script type=\"text/javascript\" src = \"javascripts/ejecutorAnalisis.js\"></script>\r\n\t<script type=\"text/javascript\" src = \"javascripts/resultados-analisis-deudas.js\"></script>\r\n\r\n\t<script type=\"text/javascript\">\r\n\t$(document).ready(function(){\r\n\r\n\t\tinit(";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "id_prov"), env.opts.autoescape);
output += ",";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "id_dist"), env.opts.autoescape);
output += ",";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "f_cond"), env.opts.autoescape);
output += ",";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "s_cond"), env.opts.autoescape);
output += ",'";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "f_param"), env.opts.autoescape);
output += "','";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "s_param"), env.opts.autoescape);
output += "',";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "ope"), env.opts.autoescape);
output += ",'";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "min_cant_recibos"), env.opts.autoescape);
output += "','";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "max_cant_recibos"), env.opts.autoescape);
output += "','";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "anio"), env.opts.autoescape);
output += "','";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "mes"), env.opts.autoescape);
output += "');\r\n\t\t\r\n\t});\r\n\t</script>\r\n\r\n</head>\r\n<body>\r\n\t<div id = \"main-container\">\t\t\t\r\n\r\n\t\t<div id = \"desc-consulta\">\r\n\t\t\t<h3>Descripción de la consulta</h3>\r\n\t\t\t<p>Usuarios de la provincia de: <span class = 'prov'>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "provincia"), env.opts.autoescape);
output += "</span></p>\r\n\t\t\t<p>del distrito de: <span class = 'dist'>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "distrito"), env.opts.autoescape);
output += "</span></p>\r\n\t\t\t<p>";
output += runtime.suppressValue(env.getFilter("deuda_cond_msj").call(context, runtime.contextOrFrameLookup(context, frame, "f_cond"),runtime.contextOrFrameLookup(context, frame, "s_cond"),runtime.contextOrFrameLookup(context, frame, "f_param"),runtime.contextOrFrameLookup(context, frame, "s_param"),runtime.contextOrFrameLookup(context, frame, "ope")), env.opts.autoescape);
output += "</p>\r\n\t\t\t<p>";
output += runtime.suppressValue(env.getFilter("recibos_cond_msj").call(context, runtime.contextOrFrameLookup(context, frame, "min_cant_recibos"),runtime.contextOrFrameLookup(context, frame, "max_cant_recibos")), env.opts.autoescape);
output += "</p>\t\r\n\t\t\t<p>en el periodo: <span>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "anio"), env.opts.autoescape);
output += " - ";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "mes"), env.opts.autoescape);
output += "</span></p>\t\t\r\n\t\t\t<h4><span class = 'tot'></span> usuario(s) encontrado(s)</h4>\r\n\t\t</div>\r\n\r\n\t\t<form action = \"/verFichaCatastralSuministro\" method = \"POST\" target = \"_blank\">\r\n\t\t\t<input type=\"hidden\" id = \"nro_suministro\" name=\"nro_suministro\" value='' />\r\n\t\t\t<div id = \"tabla\">\t\t\t\r\n\t\t\t\t<table class = 'table responsive-table'>\r\n\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t<tr class = 'captions'>\r\n\t\t\t\t\t\t\t<th>Num. Item</th>\r\n\t\t\t\t\t\t\t<th>Nro. Inscripción</th>\r\n\t\t\t\t\t\t\t<th>Nombre titular</th>\r\n\t\t\t\t\t\t\t<th>Distrito</th>\r\n\t\t\t\t\t\t\t<th>Tipo servicio</th>\r\n\t\t\t\t\t\t\t<th>Estado (agua)</th>\r\n\t\t\t\t\t\t\t<th>Deuda de facturas</th>\r\n\t\t\t\t\t\t\t<th>Deuda por convenio</th>\r\n\t\t\t\t\t\t\t<th>Total deuda</th>\r\n\t\t\t\t\t\t\t<th>Recibos adeudados</th>\r\n\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t</thead>\r\n\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t</tbody>\r\n\t\t\t\t</table>\r\n\t\t\t</div>\r\n\t\t</form>\r\n\t\t\r\n\t\t<div id = \"controles\" class = 'responsive-pagination'>\r\n\t\t\t<nav>\r\n\t\t\t\t<span>Página <span class = 'pag-actual'></span> de <span class = 'tot-pags'></span>. Ir a: <input type = \"text\" class = 'num-pag numeric'></span>\r\n\t\t\t\t<ul class=\"pagination\">\r\n\t\t\t\t\t<li>\r\n\t\t\t\t   \t\t<a title = \"Ir a la página\" onclick = \"saltarALaPagina('analisis_deudas',$('#tabla'),$('#controles'))\"><span class = \"glyphicon glyphicon-search\"></span></a>\r\n\t\t\t\t   \t</li>\r\n\t\t\t\t   \t<li>\r\n\t\t\t\t   \t\t<a title = \"Ir al inicio\" onclick = \"verPagina(1,'analisis_deudas',$('#tabla'),$('#controles'))\"><span class = \"glyphicon glyphicon-step-backward\"></span></a>\r\n\t\t\t\t   \t</li>\r\n\t\t\t\t   \t<li>\r\n\t\t\t\t   \t\t<a title = \"Anterior\" onclick = \"verPaginaAntHandler('analisis_deudas',$('#tabla'),$('#controles'))\"><span class = \"glyphicon glyphicon-triangle-left\"></span></a>\r\n\t\t\t\t   \t</li>\r\n\t\t\t\t   \t<li>\r\n\t\t\t\t   \t\t<a title = \"Siguiente\" onclick = \"verPaginaSigHandler('analisis_deudas',$('#tabla'),$('#controles'))\"><span class = \"glyphicon glyphicon-triangle-right\"></span></a>\r\n\t\t\t\t  \t</li>\r\n\t\t\t\t   \t<li>\r\n\t\t\t\t   \t\t<a title = \"Ir al final\" onclick = \"verPaginaFinalHandler('analisis_deudas',$('#tabla'),$('#controles'))\"><span class = \"glyphicon glyphicon-step-forward\"></span></a>\r\n\t\t\t\t   \t</li>\t \r\n\t\t\t\t</ul>  \t\r\n\t\t\t</nav>\r\n\t\t</div>\r\n\t\t<div id = \"opciones\">\t\t\t\r\n\t\t\t<img src=\"icons/xls-download.png\" class = 'img-icon' id = 'to_excel_btn'>\r\n\t\t</div>\r\n\t</div>\r\n</body>\r\n</html>";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["resultados_analisis_de_deudas_tabla.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var t_1;
t_1 = runtime.contextOrFrameLookup(context, frame, "inicio") + runtime.contextOrFrameLookup(context, frame, "itemsxpag");
frame.set("fin", t_1, true);
if(!frame.parent) {
context.setVariable("fin", t_1);
context.addExport("fin");
}
output += "\r\n\r\n";
if(runtime.contextOrFrameLookup(context, frame, "fin") > runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "datos")),"length", env.opts.autoescape)) {
output += "\r\n\t";
var t_2;
t_2 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "datos")),"length", env.opts.autoescape);
frame.set("fin", t_2, true);
if(!frame.parent) {
context.setVariable("fin", t_2);
context.addExport("fin");
}
output += "\r\n";
;
}
output += "\r\n\r\n";
frame = frame.push();
var t_5 = (lineno = 6, colno = 16, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "range"), "range", [runtime.contextOrFrameLookup(context, frame, "inicio"),runtime.contextOrFrameLookup(context, frame, "fin")]));
if(t_5) {var t_4 = t_5.length;
for(var t_3=0; t_3 < t_5.length; t_3++) {
var t_6 = t_5[t_3];
frame.set("i", t_6);
frame.set("loop.index", t_3 + 1);
frame.set("loop.index0", t_3);
frame.set("loop.revindex", t_4 - t_3);
frame.set("loop.revindex0", t_4 - t_3 - 1);
frame.set("loop.first", t_3 === 0);
frame.set("loop.last", t_3 === t_4 - 1);
frame.set("loop.length", t_4);
output += "\r\n<tr class = 'fila'>\r\n\t<th class = 'primero'><span>N° Item</span>";
output += runtime.suppressValue(t_6 + 1, env.opts.autoescape);
output += "</th>\r\n\t<th><span>N° Inscripción</span>";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "datos")),t_6, env.opts.autoescape)),"num_inscripcion", env.opts.autoescape), env.opts.autoescape);
output += "</th>\r\n\t<th><span>Nombre</span>\r\n\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "datos")),t_6, env.opts.autoescape)),"x", env.opts.autoescape)) {
output += "\r\n\t\t<a onclick = 'TRIGGER_ANALYSIS.verFichaCatastral(\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "datos")),t_6, env.opts.autoescape)),"num_inscripcion", env.opts.autoescape), env.opts.autoescape);
output += "\")'>";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "datos")),t_6, env.opts.autoescape)),"nombre_titular", env.opts.autoescape), env.opts.autoescape);
output += "</a>\r\n\t\t<a class = 'glyphicon glyphicon-globe' onclick = 'opener.OBSERVADOR.verCliente(";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "datos")),t_6, env.opts.autoescape)),"x", env.opts.autoescape), env.opts.autoescape);
output += ",";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "datos")),t_6, env.opts.autoescape)),"y", env.opts.autoescape), env.opts.autoescape);
output += ",19)'></a>\r\n\t";
;
}
else {
output += "\r\n\t\t";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "datos")),t_6, env.opts.autoescape)),"nombre_titular", env.opts.autoescape), env.opts.autoescape);
output += "\r\n\t";
;
}
output += "\r\n\t</th>\r\n\t<th><span>Distrito</span>";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "datos")),t_6, env.opts.autoescape)),"distrito", env.opts.autoescape), env.opts.autoescape);
output += "</th>\r\n\t<th><span>Tipo servicio</span>";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "datos")),t_6, env.opts.autoescape)),"tipo_servicio", env.opts.autoescape), env.opts.autoescape);
output += "</th>\r\n\t<th><span>Estado (agua)</span>";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "datos")),t_6, env.opts.autoescape)),"estado_conexion_agua", env.opts.autoescape), env.opts.autoescape);
output += "</th>\r\n\t<th><span>Deuda de facturas</span>";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "datos")),t_6, env.opts.autoescape)),"deuda_de_facturas", env.opts.autoescape), env.opts.autoescape);
output += "</th>\r\n\t<th><span>Deuda por convenio</span>";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "datos")),t_6, env.opts.autoescape)),"deuda_en_convenio", env.opts.autoescape), env.opts.autoescape);
output += "</th>\r\n\t<th><span>Total deuda</span>";
output += runtime.suppressValue(env.getFilter("sumar").call(context, runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "datos")),t_6, env.opts.autoescape)),"deuda_de_facturas", env.opts.autoescape),runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "datos")),t_6, env.opts.autoescape)),"deuda_en_convenio", env.opts.autoescape)), env.opts.autoescape);
output += "</th>\r\n\t<th><span>Recibos adeudados</span>";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "datos")),t_6, env.opts.autoescape)),"cant_recibos_deuda", env.opts.autoescape), env.opts.autoescape);
output += "</th>\t\r\n</tr>\r\n";
;
}
}
frame = frame.pop();
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["resultados_analisis_de_usuarios.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<html>\r\n<head>\r\n\t<title></title>\r\n\t<meta charset = \"UTF-8\">\r\n\t<meta name = \"viewport\" content = \"user-scalable=no, initial-scale=1.0, maximum-scale=1.0, width=device-width\">\r\n\t\t\r\n\t<script type=\"text/javascript\" src = \"javascripts/jquery-1.11.2.js\"></script> <!-- jquery -->\r\n\t<link rel=\"stylesheet\" type = \"text/css\" href=\"javascripts/bootstrap-3.3.5-dist/css/bootstrap.min.css\"> <!-- Boostrap -->\r\n\t<link rel=\"stylesheet\" type=\"text/css\" href=\"css/responsive.css\">\r\n\t<link rel=\"stylesheet\" type=\"text/css\" href=\"css/estilos-resultados-busqueda-cliente.css\">\r\n\t<script type = \"text/javascript\" src=\"javascripts/bootstrap-3.3.5-dist/js/bootstrap.min.js\"></script> <!-- Boostrap -->\r\n\t<script type=\"text/javascript\" src = \"javascripts/nunjucks.js\"></script><!-- Nunjucks -->\r\n\t<script type=\"text/javascript\" src = \"javascripts/utilidades.js\"></script><!-- Utilidades -->\t\r\n\t<script type=\"text/javascript\" src = \"javascripts/paginacion-funciones.js\"></script> <!-- paginación -->\r\n\t<script type=\"text/javascript\" src=\"javascripts/excel/jqgridExcelExportClientSide-libs.js\" ></script><!-- Para exportar a excel -->\r\n\t<script type=\"text/javascript\" src=\"javascripts/excel/excel.js\" ></script><!-- Para exportar a excel -->\r\n\t<script type=\"text/javascript\" src = \"javascripts/ejecutorAnalisis.js\"></script>\r\n\t<script type=\"text/javascript\" src = \"javascripts/resultados-analisis-usuarios.js\"></script>\r\n\t\r\n\t<script type=\"text/javascript\">\r\n\r\n\t$(document).ready(function(){\r\n\t\tinit(";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "id_prov"), env.opts.autoescape);
output += ",";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "id_dist"), env.opts.autoescape);
output += ",'";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "nombre_titular"), env.opts.autoescape);
output += "','";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "nro_suministro"), env.opts.autoescape);
output += "',";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "filtro"), env.opts.autoescape);
output += ");\r\n\t});\r\n\t\r\n\t</script>\r\n\r\n</head>\r\n<body>\r\n\t<div id = \"main-container\">\r\n\t\t\r\n\t\t<div id = \"desc-consulta\">\r\n\t\t\t<h3>Descripción de la consulta</h3>\r\n\t\t\t<p>Usuarios de la provincia de: <span class = 'prov'>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "provincia"), env.opts.autoescape);
output += "</span></p>\r\n\t\t\t<p>del distrito de: <span class = 'dist'>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "distrito"), env.opts.autoescape);
output += "</span></p>\r\n\t\t\t<p>cuyo nombre contiene la(s) palabra(s): <span class = 'nombre'>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "nombre_titular"), env.opts.autoescape);
output += "</span></p>\r\n\t\t\t<p>con número de suministro: <span class = 'nro_inscr'>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "nro_suministro"), env.opts.autoescape);
output += "</span></p>\r\n\t\t\t<h4><span class = 'tot'></span> usuario(s) encontrado(s)</h4>\r\n\t\t</div>\r\n\r\n\t\t<input type = 'hidden' id = 'provincia_param' value = '";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "id_prov"), env.opts.autoescape);
output += "'>\r\n\t\t<input type = 'hidden' id = 'distrito_param' value = '";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "id_dist"), env.opts.autoescape);
output += "'>\r\n\t\t<input type = 'hidden' id = 'nombre_titular_param' value = \"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "nombre_titular"), env.opts.autoescape);
output += "\">\r\n\t\t<input type = 'hidden' id = 'nro_suministro_param' value = \"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "nro_suministro"), env.opts.autoescape);
output += "\">\t\t\r\n\r\n\t\t<form action = \"/verFichaCatastralSuministro\" method = \"POST\" target = \"_blank\">\r\n\t\t\t<input type=\"hidden\" id = \"nro_suministro\" name=\"nro_suministro\" value='' />\r\n\t\t\t<div id = \"tabla\">\t\t\t\r\n\t\t\t\t<table class = 'table responsive-table'>\r\n\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t<tr class = 'captions'>\r\n\t\t\t\t\t\t\t<th>Num. Item</th>\r\n\t\t\t\t\t\t\t<th>Nro. Inscripción</th>\r\n\t\t\t\t\t\t\t<th>Nombre titular</th>\r\n\t\t\t\t\t\t\t<th>Distrito</th>\r\n\t\t\t\t\t\t\t<th>Tipo servicio</th>\r\n\t\t\t\t\t\t\t<th>Estado (agua)</th>\r\n\t\t\t\t\t\t\t<th>Mora</th>\r\n\t\t\t\t\t\t\t<th>Cant. Recibos Mora</th>\t\t\t\r\n\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t</thead>\r\n\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t</tbody>\r\n\t\t\t\t</table>\r\n\t\t\t</div>\r\n\t\t</form>\r\n\t\t\r\n\t\t<div id = \"controles\" class = 'responsive-pagination'>\r\n\t\t\t<nav>\r\n\t\t\t\t<span>Página <span class = 'pag-actual'></span> de <span class = 'tot-pags'></span>. Ir a: <input type = \"text\" class = 'num-pag numeric'></span>\r\n\t\t\t\t<ul class=\"pagination\">\r\n\t\t\t\t\t<li>\r\n\t\t\t\t   \t\t<a title = \"Ir a la página\" onclick = \"saltarALaPagina('analisis_usuarios',$('#tabla'),$('#controles'))\"><span class = \"glyphicon glyphicon-search\"></span></a>\r\n\t\t\t\t   \t</li>\r\n\t\t\t\t   \t<li>\r\n\t\t\t\t   \t\t<a title = \"Ir al inicio\" onclick = \"verPagina(1,'analisis_usuarios',$('#tabla'),$('#controles'))\"><span class = \"glyphicon glyphicon-step-backward\"></span></a>\r\n\t\t\t\t   \t</li>\r\n\t\t\t\t   \t<li>\r\n\t\t\t\t   \t\t<a title = \"Anterior\" onclick = \"verPaginaAntHandler('analisis_usuarios',$('#tabla'),$('#controles'))\"><span class = \"glyphicon glyphicon-triangle-left\"></span></a>\r\n\t\t\t\t   \t</li>\r\n\t\t\t\t   \t<li>\r\n\t\t\t\t   \t\t<a title = \"Siguiente\" onclick = \"verPaginaSigHandler('analisis_usuarios',$('#tabla'),$('#controles'))\"><span class = \"glyphicon glyphicon-triangle-right\"></span></a>\r\n\t\t\t\t  \t</li>\r\n\t\t\t\t   \t<li>\r\n\t\t\t\t   \t\t<a title = \"Ir al final\" onclick = \"verPaginaFinalHandler('analisis_usuarios',$('#tabla'),$('#controles'))\"><span class = \"glyphicon glyphicon-step-forward\"></span></a>\r\n\t\t\t\t   \t</li>\t \r\n\t\t\t\t</ul>  \t\r\n\t\t\t</nav>\r\n\t\t</div>\r\n\t\t<div id = \"opciones\">\t\t\t\r\n\t\t\t<img src=\"icons/xls-download.png\" class = 'img-icon' id = 'to_excel_btn'>\t\t\t\r\n\t\t</div>\r\n\t</div>\r\n</body>\r\n</html>";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["resultados_analisis_de_usuarios_tabla.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var t_1;
t_1 = runtime.contextOrFrameLookup(context, frame, "inicio") + runtime.contextOrFrameLookup(context, frame, "itemsxpag");
frame.set("fin", t_1, true);
if(!frame.parent) {
context.setVariable("fin", t_1);
context.addExport("fin");
}
output += "\r\n\r\n";
if(runtime.contextOrFrameLookup(context, frame, "fin") > runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "datos")),"length", env.opts.autoescape)) {
output += "\r\n\t";
var t_2;
t_2 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "datos")),"length", env.opts.autoescape);
frame.set("fin", t_2, true);
if(!frame.parent) {
context.setVariable("fin", t_2);
context.addExport("fin");
}
output += "\r\n";
;
}
output += "\r\n\r\n";
frame = frame.push();
var t_5 = (lineno = 6, colno = 16, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "range"), "range", [runtime.contextOrFrameLookup(context, frame, "inicio"),runtime.contextOrFrameLookup(context, frame, "fin")]));
if(t_5) {var t_4 = t_5.length;
for(var t_3=0; t_3 < t_5.length; t_3++) {
var t_6 = t_5[t_3];
frame.set("i", t_6);
frame.set("loop.index", t_3 + 1);
frame.set("loop.index0", t_3);
frame.set("loop.revindex", t_4 - t_3);
frame.set("loop.revindex0", t_4 - t_3 - 1);
frame.set("loop.first", t_3 === 0);
frame.set("loop.last", t_3 === t_4 - 1);
frame.set("loop.length", t_4);
output += "\r\n<tr class = 'fila'>\r\n\t<th class = 'primero'><span>N° Item</span>";
output += runtime.suppressValue(t_6 + 1, env.opts.autoescape);
output += "</th>\r\n\t<th><span>N° Inscripción</span>";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "datos")),t_6, env.opts.autoescape)),"num_inscripcion", env.opts.autoescape), env.opts.autoescape);
output += "</th>\t\r\n\t<th><span>Nombre</span>\r\n\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "datos")),t_6, env.opts.autoescape)),"x", env.opts.autoescape)) {
output += "\r\n\t\t<a onclick = 'TRIGGER_ANALYSIS.verFichaCatastral(\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "datos")),t_6, env.opts.autoescape)),"num_inscripcion", env.opts.autoescape), env.opts.autoescape);
output += "\")'>";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "datos")),t_6, env.opts.autoescape)),"nombre_titular", env.opts.autoescape), env.opts.autoescape);
output += "</a>\r\n\t\t<a class = 'glyphicon glyphicon-globe' onclick = 'opener.OBSERVADOR.verCliente(";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "datos")),t_6, env.opts.autoescape)),"x", env.opts.autoescape), env.opts.autoescape);
output += ",";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "datos")),t_6, env.opts.autoescape)),"y", env.opts.autoescape), env.opts.autoescape);
output += ",19)'></a>\r\n\t";
;
}
else {
output += "\r\n\t\t";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "datos")),t_6, env.opts.autoescape)),"nombre_titular", env.opts.autoescape), env.opts.autoescape);
output += "\r\n\t";
;
}
output += "\r\n\t</th>\r\n\t<th><span>Distrito</span>";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "datos")),t_6, env.opts.autoescape)),"distrito", env.opts.autoescape), env.opts.autoescape);
output += "</th>\r\n\t<th><span>Tipo servicio</span>";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "datos")),t_6, env.opts.autoescape)),"tipo_servicio", env.opts.autoescape), env.opts.autoescape);
output += "</th>\r\n\t<th><span>Estado (agua)</span>";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "datos")),t_6, env.opts.autoescape)),"estado_conexion_agua", env.opts.autoescape), env.opts.autoescape);
output += "</th>\r\n\t<th><span>Mora</span>";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "datos")),t_6, env.opts.autoescape)),"mora", env.opts.autoescape), env.opts.autoescape);
output += "</th>\r\n\t<th><span>Recibos</span>";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "datos")),t_6, env.opts.autoescape)),"cant_recibos_mora", env.opts.autoescape), env.opts.autoescape);
output += "</th>\t\r\n</tr>\r\n";
;
}
}
frame = frame.pop();
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["resultados_analisis_espacial_usuarios.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<html>\r\n<head>\r\n\t<title></title>\r\n\t<meta charset = \"UTF-8\">\r\n\t<meta name = \"viewport\" content = \"user-scalable=no, initial-scale=1.0, maximum-scale=1.0, width=device-width\">\r\n\t\t\r\n\t<script type=\"text/javascript\" src = \"javascripts/jquery-1.11.2.js\"></script> <!-- jquery -->\r\n\t<link rel=\"stylesheet\" type = \"text/css\" href=\"javascripts/bootstrap-3.3.5-dist/css/bootstrap.min.css\"> <!-- Boostrap -->\r\n\t<link rel=\"stylesheet\" type=\"text/css\" href=\"css/responsive.css\">\r\n\t<link rel=\"stylesheet\" type=\"text/css\" href=\"css/estilos-resultados-busqueda-cliente.css\">\r\n\t<script type = \"text/javascript\" src=\"javascripts/bootstrap-3.3.5-dist/js/bootstrap.min.js\"></script> <!-- Boostrap -->\r\n\t<script type=\"text/javascript\" src = \"javascripts/nunjucks.js\"></script><!-- Nunjucks -->\r\n\t<script type=\"text/javascript\" src = \"javascripts/utilidades.js\"></script><!-- Utilidades -->\t\r\n\t<script type=\"text/javascript\" src = \"javascripts/paginacion-funciones.js\"></script> <!-- paginación -->\r\n\t<script type=\"text/javascript\" src=\"javascripts/excel/jqgridExcelExportClientSide-libs.js\" ></script><!-- Para exportar a excel -->\r\n\t<script type=\"text/javascript\" src=\"javascripts/excel/excel.js\" ></script><!-- Para exportar a excel -->\r\n\t<script type=\"text/javascript\" src = \"javascripts/reporter.js\"></script>\r\n\t<script type=\"text/javascript\" src = \"javascripts/ejecutorAnalisis.js\"></script>\r\n\t<script type=\"text/javascript\" src = \"javascripts/resultados-analisis-espacial-usuarios.js\"></script>\r\n\t\r\n\t<script type=\"text/javascript\">\r\n\r\n\t$(document).ready(function(){\r\n\t\tinit();\r\n\t});\r\n\t\r\n\t</script>\r\n\r\n</head>\r\n<body>\r\n\t<div id = \"main-container\">\r\n\t\t\r\n\t\t<div id = \"desc-consulta\">\r\n\t\t\t<h3>Análisis espacial de los usuarios</h3>\r\n\t\t\t<h4><span class = 'tot'></span> objeto(s) encontrado(s)</h4>\r\n\t\t\t<h5 class = 'msj'><strong>Atención:</strong> Se muestran solo los clientes habilitados que se encuentran registrados en sisgeco</h5>\r\n\t\t</div>\t\t\r\n\r\n\t\t<div id = \"tabla\">\t\t\t\r\n\t\t\t<table class = 'table responsive-table'>\r\n\t\t\t\t<thead>\r\n\t\t\t\t\t<tr class = 'captions'>\r\n\t\t\t\t\t\t<th>Num. Item</th>\r\n\t\t\t\t\t\t<th>Nro. Inscripción</th>\r\n\t\t\t\t\t\t<th>Nombre titular</th>\r\n\t\t\t\t\t\t<th>Distrito</th>\r\n\t\t\t\t\t\t<th>Tipo servicio</th>\r\n\t\t\t\t\t\t<th>Estado (agua)</th>\r\n\t\t\t\t\t\t<th>Deuda</th>\r\n\t\t\t\t\t\t<th>Recibos adeudados</th>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t</thead>\r\n\t\t\t\t<tbody>\r\n\t\t\t\t\t\r\n\t\t\t\t</tbody>\r\n\t\t\t</table>\r\n\t\t</div>\r\n\t\t\r\n\t\t<div id = \"controles\" class = 'responsive-pagination'>\r\n\t\t\t<nav>\r\n\t\t\t\t<span>Página <span class = 'pag-actual'></span> de <span class = 'tot-pags'></span>. Ir a: <input type = \"text\" class = 'num-pag numeric'></span>\r\n\t\t\t\t<ul class=\"pagination\">\r\n\t\t\t\t\t<li>\r\n\t\t\t\t   \t\t<a title = \"Ir a la página\" onclick = \"saltarALaPagina('analisis_espacial_usuarios',$('#tabla'),$('#controles'))\"><span class = \"glyphicon glyphicon-search\"></span></a>\r\n\t\t\t\t   \t</li>\r\n\t\t\t\t   \t<li>\r\n\t\t\t\t   \t\t<a title = \"Ir al inicio\" onclick = \"verPagina(1,'analisis_espacial_usuarios',$('#tabla'),$('#controles'))\"><span class = \"glyphicon glyphicon-step-backward\"></span></a>\r\n\t\t\t\t   \t</li>\r\n\t\t\t\t   \t<li>\r\n\t\t\t\t   \t\t<a title = \"Anterior\" onclick = \"verPaginaAntHandler('analisis_espacial_usuarios',$('#tabla'),$('#controles'))\"><span class = \"glyphicon glyphicon-triangle-left\"></span></a>\r\n\t\t\t\t   \t</li>\r\n\t\t\t\t   \t<li>\r\n\t\t\t\t   \t\t<a title = \"Siguiente\" onclick = \"verPaginaSigHandler('analisis_espacial_usuarios',$('#tabla'),$('#controles'))\"><span class = \"glyphicon glyphicon-triangle-right\"></span></a>\r\n\t\t\t\t  \t</li>\r\n\t\t\t\t   \t<li>\r\n\t\t\t\t   \t\t<a title = \"Ir al final\" onclick = \"verPaginaFinalHandler('analisis_espacial_usuarios',$('#tabla'),$('#controles'))\"><span class = \"glyphicon glyphicon-step-forward\"></span></a>\r\n\t\t\t\t   \t</li>\t \r\n\t\t\t\t</ul>  \t\r\n\t\t\t</nav>\r\n\t\t</div>\t\t\r\n\t\t<div id = \"opciones\">\t\t\t\r\n\t\t\t<img src=\"icons/xls-download.png\" class = 'img-icon' id = 'to_excel_btn'>\t\t\t\r\n\t\t</div>\r\n\t</div>\r\n</body>\r\n</html>";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["resultados_analisis_espacial_usuarios_tabla.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var t_1;
t_1 = runtime.contextOrFrameLookup(context, frame, "inicio") + runtime.contextOrFrameLookup(context, frame, "itemsxpag");
frame.set("fin", t_1, true);
if(!frame.parent) {
context.setVariable("fin", t_1);
context.addExport("fin");
}
output += "\r\n\r\n";
if(runtime.contextOrFrameLookup(context, frame, "fin") > runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "datos")),"length", env.opts.autoescape)) {
output += "\r\n\t";
var t_2;
t_2 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "datos")),"length", env.opts.autoescape);
frame.set("fin", t_2, true);
if(!frame.parent) {
context.setVariable("fin", t_2);
context.addExport("fin");
}
output += "\r\n";
;
}
output += "\r\n\r\n";
frame = frame.push();
var t_5 = (lineno = 6, colno = 16, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "range"), "range", [runtime.contextOrFrameLookup(context, frame, "inicio"),runtime.contextOrFrameLookup(context, frame, "fin")]));
if(t_5) {var t_4 = t_5.length;
for(var t_3=0; t_3 < t_5.length; t_3++) {
var t_6 = t_5[t_3];
frame.set("i", t_6);
frame.set("loop.index", t_3 + 1);
frame.set("loop.index0", t_3);
frame.set("loop.revindex", t_4 - t_3);
frame.set("loop.revindex0", t_4 - t_3 - 1);
frame.set("loop.first", t_3 === 0);
frame.set("loop.last", t_3 === t_4 - 1);
frame.set("loop.length", t_4);
output += "\r\n<tr class = 'fila'>\r\n\t<th class = 'primero'><span>N° Item</span>";
output += runtime.suppressValue(t_6 + 1, env.opts.autoescape);
output += "</th>\r\n\t<th><span>Nro. Inscripción</span>";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "datos")),t_6, env.opts.autoescape)),"num_inscripcion", env.opts.autoescape), env.opts.autoescape);
output += "</th>\t\r\n\t<th><span>Nombre titular (m)</span>";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "datos")),t_6, env.opts.autoescape)),"nombre_titular", env.opts.autoescape), env.opts.autoescape);
output += "</th>\r\n\t<th><span>Distrito</span>";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "datos")),t_6, env.opts.autoescape)),"distrito", env.opts.autoescape), env.opts.autoescape);
output += "</th>\r\n\t<th><span>Tipo servicio</span>";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "datos")),t_6, env.opts.autoescape)),"tipo_servicio", env.opts.autoescape), env.opts.autoescape);
output += "</th>\r\n\t<th><span>Estado</span>";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "datos")),t_6, env.opts.autoescape)),"estado_conexion_agua", env.opts.autoescape), env.opts.autoescape);
output += "</th>\r\n\t<th><span>Deuda</span>";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "datos")),t_6, env.opts.autoescape)),"mora", env.opts.autoescape), env.opts.autoescape);
output += "</th>\r\n\t<th><span>Recibos adeudados</span>";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "datos")),t_6, env.opts.autoescape)),"cant_recibos_mora", env.opts.autoescape), env.opts.autoescape);
output += "</th>\t\r\n</tr>\r\n";
;
}
}
frame = frame.pop();
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["resultados_analisis_red_agua.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<html>\r\n<head>\r\n\t<title></title>\r\n\t<meta charset = \"UTF-8\">\r\n\t<meta name = \"viewport\" content = \"user-scalable=no, initial-scale=1.0, maximum-scale=1.0, width=device-width\">\r\n\t\t\r\n\t<script type=\"text/javascript\" src = \"javascripts/jquery-1.11.2.js\"></script> <!-- jquery -->\r\n\t<link rel=\"stylesheet\" type = \"text/css\" href=\"javascripts/bootstrap-3.3.5-dist/css/bootstrap.min.css\"> <!-- Boostrap -->\r\n\t<link rel=\"stylesheet\" type=\"text/css\" href=\"css/responsive.css\">\r\n\t<link rel=\"stylesheet\" type=\"text/css\" href=\"css/estilos-resultados-busqueda-cliente.css\">\r\n\t<script type = \"text/javascript\" src=\"javascripts/bootstrap-3.3.5-dist/js/bootstrap.min.js\"></script> <!-- Boostrap -->\r\n\t<script type=\"text/javascript\" src = \"javascripts/nunjucks.js\"></script><!-- Nunjucks -->\r\n\t<script type=\"text/javascript\" src = \"javascripts/utilidades.js\"></script><!-- Utilidades -->\t\r\n\t<script type=\"text/javascript\" src = \"javascripts/paginacion-funciones.js\"></script> <!-- paginación -->\r\n\t<script type=\"text/javascript\" src=\"javascripts/excel/jqgridExcelExportClientSide-libs.js\" ></script><!-- Para exportar a excel -->\r\n\t<script type=\"text/javascript\" src=\"javascripts/excel/excel.js\" ></script><!-- Para exportar a excel -->\r\n\t<script type=\"text/javascript\" src = \"javascripts/reporter.js\"></script>\r\n\t<script type=\"text/javascript\" src = \"javascripts/ejecutorAnalisis.js\"></script>\r\n\t<script type=\"text/javascript\" src = \"javascripts/resultados-analisis-red-agua.js\"></script>\r\n\t\r\n\t<script type=\"text/javascript\">\r\n\r\n\t$(document).ready(function(){\r\n\t\tinit();\r\n\t});\r\n\t\r\n\t</script>\r\n\r\n</head>\r\n<body>\r\n\t<div id = \"main-container\">\r\n\t\t\r\n\t\t<div id = \"desc-consulta\">\r\n\t\t\t<h3>Análisis espacial de la Red de Agua</h3>\r\n\t\t\t<h4><span class = 'tot'></span> objeto(s) encontrado(s)</h4>\t\t\t\r\n\t\t</div>\t\t\r\n\r\n\t\t<div id = \"tabla\">\t\t\t\r\n\t\t\t<table class = 'table responsive-table'>\r\n\t\t\t\t<thead>\r\n\t\t\t\t\t<tr class = 'captions'>\r\n\t\t\t\t\t\t<th>Num. Item</th>\r\n\t\t\t\t\t\t<th>Id</th>\r\n\t\t\t\t\t\t<th>Conservación</th>\r\n\t\t\t\t\t\t<th>Diámetro (plg) titular</th>\r\n\t\t\t\t\t\t<th>Distancia (m)</th>\r\n\t\t\t\t\t\t<th>Empalme</th>\r\n\t\t\t\t\t\t<th>Estado</th>\r\n\t\t\t\t\t\t<th>Función</th>\r\n\t\t\t\t\t\t<th>Material</th>\r\n\t\t\t\t\t\t<th>Terreno</th>\r\n\t\t\t\t\t\t<th>Tipo</th>\r\n\t\t\t\t\t\t<th>Hab. urbana</th>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t</thead>\r\n\t\t\t\t<tbody>\r\n\t\t\t\t\t\r\n\t\t\t\t</tbody>\r\n\t\t\t</table>\r\n\t\t</div>\r\n\t\t\r\n\t\t<div id = \"controles\" class = 'responsive-pagination'>\r\n\t\t\t<nav>\r\n\t\t\t\t<span>Página <span class = 'pag-actual'></span> de <span class = 'tot-pags'></span>. Ir a: <input type = \"text\" class = 'num-pag numeric'></span>\r\n\t\t\t\t<ul class=\"pagination\">\r\n\t\t\t\t\t<li>\r\n\t\t\t\t   \t\t<a title = \"Ir a la página\" onclick = \"saltarALaPagina('analisis_red_agua',$('#tabla'),$('#controles'))\"><span class = \"glyphicon glyphicon-search\"></span></a>\r\n\t\t\t\t   \t</li>\r\n\t\t\t\t   \t<li>\r\n\t\t\t\t   \t\t<a title = \"Ir al inicio\" onclick = \"verPagina(1,'analisis_red_agua',$('#tabla'),$('#controles'))\"><span class = \"glyphicon glyphicon-step-backward\"></span></a>\r\n\t\t\t\t   \t</li>\r\n\t\t\t\t   \t<li>\r\n\t\t\t\t   \t\t<a title = \"Anterior\" onclick = \"verPaginaAntHandler('analisis_red_agua',$('#tabla'),$('#controles'))\"><span class = \"glyphicon glyphicon-triangle-left\"></span></a>\r\n\t\t\t\t   \t</li>\r\n\t\t\t\t   \t<li>\r\n\t\t\t\t   \t\t<a title = \"Siguiente\" onclick = \"verPaginaSigHandler('analisis_red_agua',$('#tabla'),$('#controles'))\"><span class = \"glyphicon glyphicon-triangle-right\"></span></a>\r\n\t\t\t\t  \t</li>\r\n\t\t\t\t   \t<li>\r\n\t\t\t\t   \t\t<a title = \"Ir al final\" onclick = \"verPaginaFinalHandler('analisis_red_agua',$('#tabla'),$('#controles'))\"><span class = \"glyphicon glyphicon-step-forward\"></span></a>\r\n\t\t\t\t   \t</li>\t \r\n\t\t\t\t</ul>  \t\r\n\t\t\t</nav>\r\n\t\t</div>\t\t\r\n\t\t<div id = \"opciones\">\t\t\t\r\n\t\t\t<img src=\"icons/xls-download.png\" class = 'img-icon' id = 'to_excel_btn'>\t\t\t\r\n\t\t</div>\r\n\t</div>\r\n</body>\r\n</html>";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["resultados_analisis_red_agua_tabla.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var t_1;
t_1 = runtime.contextOrFrameLookup(context, frame, "inicio") + runtime.contextOrFrameLookup(context, frame, "itemsxpag");
frame.set("fin", t_1, true);
if(!frame.parent) {
context.setVariable("fin", t_1);
context.addExport("fin");
}
output += "\r\n\r\n";
if(runtime.contextOrFrameLookup(context, frame, "fin") > runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "datos")),"length", env.opts.autoescape)) {
output += "\r\n\t";
var t_2;
t_2 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "datos")),"length", env.opts.autoescape);
frame.set("fin", t_2, true);
if(!frame.parent) {
context.setVariable("fin", t_2);
context.addExport("fin");
}
output += "\r\n";
;
}
output += "\r\n\r\n";
frame = frame.push();
var t_5 = (lineno = 6, colno = 16, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "range"), "range", [runtime.contextOrFrameLookup(context, frame, "inicio"),runtime.contextOrFrameLookup(context, frame, "fin")]));
if(t_5) {var t_4 = t_5.length;
for(var t_3=0; t_3 < t_5.length; t_3++) {
var t_6 = t_5[t_3];
frame.set("i", t_6);
frame.set("loop.index", t_3 + 1);
frame.set("loop.index0", t_3);
frame.set("loop.revindex", t_4 - t_3);
frame.set("loop.revindex0", t_4 - t_3 - 1);
frame.set("loop.first", t_3 === 0);
frame.set("loop.last", t_3 === t_4 - 1);
frame.set("loop.length", t_4);
output += "\r\n<tr class = 'fila'>\r\n\t<th class = 'primero'><span>N° Item</span>";
output += runtime.suppressValue(t_6 + 1, env.opts.autoescape);
output += "</th>\r\n\t<th><span>Id</span>";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "datos")),t_6, env.opts.autoescape)),"dc_id", env.opts.autoescape), env.opts.autoescape);
output += "</th>\r\n\t<th><span>Conservación</span>";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "datos")),t_6, env.opts.autoescape)),"conservacion", env.opts.autoescape), env.opts.autoescape);
output += "</th>\r\n\t<th><span>Diámetro (plg)</span>";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "datos")),t_6, env.opts.autoescape)),"diametro_plg", env.opts.autoescape), env.opts.autoescape);
output += "</th>\r\n\t<th><span>Distancia (m)</span>";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "datos")),t_6, env.opts.autoescape)),"distancia", env.opts.autoescape), env.opts.autoescape);
output += "</th>\r\n\t<th><span>Empalme</span>";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "datos")),t_6, env.opts.autoescape)),"empalme", env.opts.autoescape), env.opts.autoescape);
output += "</th>\r\n\t<th><span>Estado</span>";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "datos")),t_6, env.opts.autoescape)),"estado", env.opts.autoescape), env.opts.autoescape);
output += "</th>\r\n\t<th><span>Función</span>";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "datos")),t_6, env.opts.autoescape)),"funcion", env.opts.autoescape), env.opts.autoescape);
output += "</th>\r\n\t<th><span>Material</span>";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "datos")),t_6, env.opts.autoescape)),"material", env.opts.autoescape), env.opts.autoescape);
output += "</th>\r\n\t<th><span>Terreno</span>";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "datos")),t_6, env.opts.autoescape)),"terreno", env.opts.autoescape), env.opts.autoescape);
output += "</th>\r\n\t<th><span>Tipo</span>";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "datos")),t_6, env.opts.autoescape)),"tipo", env.opts.autoescape), env.opts.autoescape);
output += "</th>\r\n\t<th><span>Hab. urbana</span>";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "datos")),t_6, env.opts.autoescape)),"hab_urbana", env.opts.autoescape), env.opts.autoescape);
output += "</th>\r\n</tr>\r\n";
;
}
}
frame = frame.pop();
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["resultados_analisis_social.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<html>\r\n<head>\r\n\t<title></title>\r\n\t<meta charset = \"UTF-8\">\r\n\t<meta name = \"viewport\" content = \"user-scalable=no, initial-scale=1.0, maximum-scale=1.0, width=device-width\">\r\n\t\t\r\n\t<script type=\"text/javascript\" src = \"javascripts/jquery-1.11.2.js\"></script> <!-- jquery -->\r\n\t<link rel=\"stylesheet\" type = \"text/css\" href=\"javascripts/bootstrap-3.3.5-dist/css/bootstrap.min.css\"> <!-- Boostrap -->\r\n\t<link rel=\"stylesheet\" type=\"text/css\" href=\"css/responsive.css\">\r\n\t<link rel=\"stylesheet\" type=\"text/css\" href=\"css/estilos-resultados-busqueda-cliente.css\">\r\n\t<script type = \"text/javascript\" src=\"javascripts/bootstrap-3.3.5-dist/js/bootstrap.min.js\"></script> <!-- Boostrap -->\r\n\t<script type=\"text/javascript\" src = \"javascripts/nunjucks.js\"></script><!-- Nunjucks -->\r\n\t<script type=\"text/javascript\" src = \"javascripts/utilidades.js\"></script><!-- Utilidades -->\t\r\n\t<script type=\"text/javascript\" src = \"javascripts/paginacion-funciones.js\"></script> <!-- paginación -->\r\n\t<script type=\"text/javascript\" src=\"javascripts/excel/jqgridExcelExportClientSide-libs.js\" ></script><!-- Para exportar a excel -->\r\n\t<script type=\"text/javascript\" src=\"javascripts/excel/excel.js\" ></script><!-- Para exportar a excel -->\r\n\t<script type=\"text/javascript\" src = \"javascripts/ejecutorAnalisis.js\"></script>\r\n\t<script type=\"text/javascript\" src = \"javascripts/resultados-analisis-social.js\"></script>\r\n\t\t\r\n\t<script type=\"text/javascript\">\r\n\t$(document).ready(function(){\r\n\t\t\r\n\t\tinit(";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "id_prov"), env.opts.autoescape);
output += ",";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "id_dist"), env.opts.autoescape);
output += ",";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "id_tipo_servicio"), env.opts.autoescape);
output += ",";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "id_tipo_construccion"), env.opts.autoescape);
output += ",";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "id_tipo_propiedad"), env.opts.autoescape);
output += ",";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "id_estado_predio"), env.opts.autoescape);
output += ",";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "id_situacion_conagua"), env.opts.autoescape);
output += ");\r\n\r\n\t});\r\n\t</script>\r\n</head>\r\n<body>\r\n\t<div id = \"main-container\">\r\n\t\t<div id = \"header\"></div>\r\n\t\t<div id = \"desc-consulta\">\r\n\t\t\t<h3>Descripción de la consulta</h3>\r\n\t\t\t<p>Usuarios de la provincia de: <span class = 'prov'>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "provincia"), env.opts.autoescape);
output += "</span></p>\r\n\t\t\t<p>del distrito de: <span class = 'dist'>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "distrito"), env.opts.autoescape);
output += "</span></p>\r\n\t\t\t";
output += runtime.suppressValue(env.getFilter("tipo_servicio_msj").call(context, runtime.contextOrFrameLookup(context, frame, "tipo_servicio")), env.opts.autoescape);
output += "\r\n\t\t\t";
output += runtime.suppressValue(env.getFilter("tipo_construccion_msj").call(context, runtime.contextOrFrameLookup(context, frame, "tipo_construccion")), env.opts.autoescape);
output += "\r\n\t\t\t";
output += runtime.suppressValue(env.getFilter("tipo_propiedad_msj").call(context, runtime.contextOrFrameLookup(context, frame, "tipo_propiedad")), env.opts.autoescape);
output += "\r\n\t\t\t";
output += runtime.suppressValue(env.getFilter("estado_predio_msj").call(context, runtime.contextOrFrameLookup(context, frame, "estado_predio")), env.opts.autoescape);
output += "\r\n\t\t\t";
output += runtime.suppressValue(env.getFilter("situacion_conagua_msj").call(context, runtime.contextOrFrameLookup(context, frame, "situacion_conagua")), env.opts.autoescape);
output += "\t\t\r\n\t\t\t<h4><span class = 'tot'></span> usuario(s) encontrado(s)</h4>\r\n\t\t</div>\t\t\r\n\r\n\t\t<form action = \"/verFichaCatastralSuministro\" method = \"POST\" target = \"_blank\">\r\n\t\t\t<input type=\"hidden\" id = \"nro_suministro\" name=\"nro_suministro\" value='' />\r\n\t\t\t<div id = \"tabla\">\t\t\t\r\n\t\t\t\t<table class = 'table responsive-table'>\r\n\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t<tr class = 'captions'>\r\n\t\t\t\t\t\t\t<th>Num. Item</th>\r\n\t\t\t\t\t\t\t<th>Nro. Inscripción</th>\r\n\t\t\t\t\t\t\t<th>Nombre titular</th>\r\n\t\t\t\t\t\t\t<th>Distrito</th>\r\n\t\t\t\t\t\t\t<th>Tipo servicio</th>\r\n\t\t\t\t\t\t\t<th>Estado (agua)</th>\r\n\t\t\t\t\t\t\t<th>Deuda</th>\r\n\t\t\t\t\t\t\t<th>Recibos adeudados</th>\t\t\t\r\n\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t</thead>\r\n\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t</tbody>\r\n\t\t\t\t</table>\r\n\t\t\t</div>\r\n\t\t</form>\r\n\t\t\r\n\t\t<div id = \"controles\" class = 'responsive-pagination'>\r\n\t\t\t<nav>\r\n\t\t\t\t<span>Página <span class = 'pag-actual'></span> de <span class = 'tot-pags'></span>. Ir a: <input type = \"text\" class = 'num-pag numeric'></span>\r\n\t\t\t\t<ul class=\"pagination\">\r\n\t\t\t\t\t<li>\r\n\t\t\t\t   \t\t<a title = \"Ir a la página\" onclick = \"saltarALaPagina('analisis_social',$('#tabla'),$('#controles'))\"><span class = \"glyphicon glyphicon-search\"></span></a>\r\n\t\t\t\t   \t</li>\r\n\t\t\t\t   \t<li>\r\n\t\t\t\t   \t\t<a title = \"Ir al inicio\" onclick = \"verPagina(1,'analisis_social',$('#tabla'),$('#controles'))\"><span class = \"glyphicon glyphicon-step-backward\"></span></a>\r\n\t\t\t\t   \t</li>\r\n\t\t\t\t   \t<li>\r\n\t\t\t\t   \t\t<a title = \"Anterior\" onclick = \"verPaginaAntHandler('analisis_social',$('#tabla'),$('#controles'))\"><span class = \"glyphicon glyphicon-triangle-left\"></span></a>\r\n\t\t\t\t   \t</li>\r\n\t\t\t\t   \t<li>\r\n\t\t\t\t   \t\t<a title = \"Siguiente\" onclick = \"verPaginaSigHandler('analisis_social',$('#tabla'),$('#controles'))\"><span class = \"glyphicon glyphicon-triangle-right\"></span></a>\r\n\t\t\t\t  \t</li>\r\n\t\t\t\t   \t<li>\r\n\t\t\t\t   \t\t<a title = \"Ir al final\" onclick = \"verPaginaFinalHandler('analisis_social',$('#tabla'),$('#controles'))\"><span class = \"glyphicon glyphicon-step-forward\"></span></a>\r\n\t\t\t\t   \t</li>\t \r\n\t\t\t\t</ul>  \t\r\n\t\t\t</nav>\r\n\t\t</div>\r\n\t\t<div id = \"opciones\">\t\t\t\r\n\t\t\t<img src=\"icons/xls-download.png\" class = 'img-icon' id = 'to_excel_btn'>\r\n\t\t</div>\r\n\t</div>\r\n</body>\r\n</html>";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["resultados_analisis_social_tabla.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var t_1;
t_1 = runtime.contextOrFrameLookup(context, frame, "inicio") + runtime.contextOrFrameLookup(context, frame, "itemsxpag");
frame.set("fin", t_1, true);
if(!frame.parent) {
context.setVariable("fin", t_1);
context.addExport("fin");
}
output += "\r\n\r\n";
if(runtime.contextOrFrameLookup(context, frame, "fin") > runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "datos")),"length", env.opts.autoescape)) {
output += "\r\n\t";
var t_2;
t_2 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "datos")),"length", env.opts.autoescape);
frame.set("fin", t_2, true);
if(!frame.parent) {
context.setVariable("fin", t_2);
context.addExport("fin");
}
output += "\r\n";
;
}
output += "\r\n\r\n";
frame = frame.push();
var t_5 = (lineno = 6, colno = 16, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "range"), "range", [runtime.contextOrFrameLookup(context, frame, "inicio"),runtime.contextOrFrameLookup(context, frame, "fin")]));
if(t_5) {var t_4 = t_5.length;
for(var t_3=0; t_3 < t_5.length; t_3++) {
var t_6 = t_5[t_3];
frame.set("i", t_6);
frame.set("loop.index", t_3 + 1);
frame.set("loop.index0", t_3);
frame.set("loop.revindex", t_4 - t_3);
frame.set("loop.revindex0", t_4 - t_3 - 1);
frame.set("loop.first", t_3 === 0);
frame.set("loop.last", t_3 === t_4 - 1);
frame.set("loop.length", t_4);
output += "\r\n<tr class = 'fila'>\r\n\t<th class = 'primero'><span>N° Item</span>";
output += runtime.suppressValue(t_6 + 1, env.opts.autoescape);
output += "</th>\r\n\t<th><span>N° Inscripción</span>";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "datos")),t_6, env.opts.autoescape)),"num_inscripcion", env.opts.autoescape), env.opts.autoescape);
output += "</th>\r\n\t<th><span>Nombre</span>\r\n\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "datos")),t_6, env.opts.autoescape)),"x", env.opts.autoescape)) {
output += "\r\n\t\t<a onclick = 'TRIGGER_ANALYSIS.verFichaCatastral(\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "datos")),t_6, env.opts.autoescape)),"num_inscripcion", env.opts.autoescape), env.opts.autoescape);
output += "\")'>";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "datos")),t_6, env.opts.autoescape)),"nombre_titular", env.opts.autoescape), env.opts.autoescape);
output += "</a>\r\n\t\t<a class = 'glyphicon glyphicon-globe' onclick = 'opener.OBSERVADOR.verCliente(";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "datos")),t_6, env.opts.autoescape)),"x", env.opts.autoescape), env.opts.autoescape);
output += ",";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "datos")),t_6, env.opts.autoescape)),"y", env.opts.autoescape), env.opts.autoescape);
output += ",19)'></a>\r\n\t";
;
}
else {
output += "\r\n\t\t";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "datos")),t_6, env.opts.autoescape)),"nombre_titular", env.opts.autoescape), env.opts.autoescape);
output += "\r\n\t";
;
}
output += "\r\n\t</th>\r\n\t<th><span>Distrito</span>";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "datos")),t_6, env.opts.autoescape)),"distrito", env.opts.autoescape), env.opts.autoescape);
output += "</th>\r\n\t<th><span>Tipo servicio</span>";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "datos")),t_6, env.opts.autoescape)),"tipo_servicio", env.opts.autoescape), env.opts.autoescape);
output += "</th>\r\n\t<th><span>Estado (agua)</span>";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "datos")),t_6, env.opts.autoescape)),"estado_conexion_agua", env.opts.autoescape), env.opts.autoescape);
output += "</th>\r\n\t<th><span>Deuda</span>";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "datos")),t_6, env.opts.autoescape)),"mora", env.opts.autoescape), env.opts.autoescape);
output += "</th>\r\n\t<th><span>Recibos adeudados</span>";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "datos")),t_6, env.opts.autoescape)),"cant_recibos_mora", env.opts.autoescape), env.opts.autoescape);
output += "</th>\t\r\n</tr>\r\n";
;
}
}
frame = frame.pop();
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["resultados_analisis_usuarios_espacial.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["service.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<html>\r\n<head>\r\n\t<title>GIS GRAU</title>\r\n\t<meta charset = \"UTF-8\"></meta>\r\n\r\n\t<link rel=\"stylesheet\" type=\"text/css\" href=\"javascripts/jquery-ui-1.11.4/jquery-ui.min.css\"><!-- jquery UI-->\r\n\t<script type=\"text/javascript\" src = \"javascripts/jquery-1.11.2.js\"></script> <!-- jquery -->\r\n\t<script type=\"text/javascript\" src = \"javascripts/jquery-ui-1.11.4/jquery-ui.min.js\"></script><!-- jquery UI-->\r\n\t<link rel=\"stylesheet\" type=\"text/css\" href=\"openlayers/ol.css\"> <!-- ol3 javascript-->\r\n\t<script type=\"text/javascript\" src = \"openlayers/ol.js\"></script>\t<!-- ol3 estilos-->\r\n\t<script src=\"https://maps.googleapis.com/maps/api/js?v=3.exp&signed_in=true\"></script><!-- Google Street View -->\t\r\n\t<link rel=\"stylesheet\" type = \"text/css\" href=\"javascripts/bootstrap-3.3.5-dist/css/bootstrap.min.css\"> <!-- Boostrap -->\r\n\t<script type = \"text/javascript\" src=\"javascripts/bootstrap-3.3.5-dist/js/bootstrap.min.js\"></script> <!-- Boostrap -->\r\n\t<script type=\"text/javascript\" src = \"javascripts/nunjucks.js\"></script> <!-- nunjucks -->\r\n\t<link rel=\"stylesheet\" type=\"text/css\" href=\"css/estilos-mapa.css\"> <!-- Estilos -->\r\n\t\r\n\t<script type=\"text/javascript\" src = \"javascripts/pintor.js\"></script>\r\n\t<script type=\"text/javascript\" src = \"javascripts/creadorEstilos.js\"></script>\r\n\t<script type=\"text/javascript\" src = \"javascripts/creadorInteracciones.js\"></script>\r\n\t<script type=\"text/javascript\" src = \"javascripts/inicializacion.js\"></script>\r\n\t<script type=\"text/javascript\" src = \"javascripts/observador.js\"></script>\r\n\t<script type=\"text/javascript\" src = \"javascripts/comunicador.js\"></script>\r\n\t<script type=\"text/javascript\" src = \"javascripts/validadorDatos.js\"></script>\r\n\t<script type=\"text/javascript\" src = \"javascripts/validadorConsultas.js\"></script>\r\n\t<script type=\"text/javascript\" src = \"javascripts/administradorCapas.js\"></script>\r\n\t<script type=\"text/javascript\" src = \"javascripts/cobranzas.js\"></script>\r\n\t<script type=\"text/javascript\" src = \"javascripts/medicion.js\"></script>\r\n\t<script type=\"text/javascript\" src = \"javascripts/catastro.js\"></script>\r\n\t<script type=\"text/javascript\" src = \"javascripts/ingenieria.js\"></script>\r\n\t<script type=\"text/javascript\" src = \"javascripts/mapa-funciones.js\"></script> \r\n\t<script type=\"text/javascript\" src = \"javascripts/mapa.js\"></script>\r\n\t<script type=\"text/javascript\" src = \"javascripts/administradorMapa.js\"></script>\r\n\t<script type=\"text/javascript\" src = \"javascripts/templates.js\"></script>\r\n\r\n\t<script type=\"text/javascript\">\r\n\t$(document).ready(function(){\r\n\t\t";
if(runtime.contextOrFrameLookup(context, frame, "nro_suministro")) {
output += "\r\n\t\t\tCATASTRO.ubicarCliente(";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "nro_suministro"), env.opts.autoescape);
output += ");\r\n\t\t";
;
}
output += "\r\n\t});\r\n\t</script>\r\n\r\n</head>\r\n<body>\r\n\t<section id = \"main-container\">\t\t\r\n\t\t<nav id = \"menu-container\">\r\n\t\t\t<a id = \"ocultar-menu\">Ocultar</a>\r\n\t\t\t<ul id = \"menu-principal\">\r\n\t\t\t\t<li id = \"ver-menu-capa-base\">\r\n\t\t\t\t\t<a>Capa base</a>\r\n\t\t\t\t\t<ul id = \"menu-capa-base\" class = \"submenu\">\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<input id = \"ver-calles\" type = \"radio\" name = \"capa-base\" checked><span>Calles</span>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<input id = \"ver-aerea\" type = \"radio\" name = \"capa-base\"><span>Aérea</span>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<input id = \"ver-solo-gis\" type = \"radio\" name = \"capa-base\"><span>Sin capa</span>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li id = \"ver-menu-capas-gis\">\r\n\t\t\t\t\t<a>Capas Gis</a>\r\n\t\t\t\t\t<ul id = \"menu-capas-gis\" class = \"submenu\">\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<input id = \"ver-gis-distritos\" type = \"checkbox\"><span>Distritos</span>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<input id = \"ver-gis-sectores\" type = \"checkbox\"><span>Sectores</span>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<input id = \"ver-gis-urbanismo\" type = \"checkbox\"><span>Urbanizaciones</span>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<input id = \"ver-gis-manzanas\" type = \"checkbox\"><span>Manzanas</span>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<input id = \"ver-gis-predios\" type = \"checkbox\"><span>Predios</span>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<input id = \"ver-gis-ruta-entrega\" type = \"checkbox\"><span>Rutas de entrega</span>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<input id = \"ver-gis-ruta-entrega-camino\" type = \"checkbox\"><span>Caminos rutas de entrega</span>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<input id = \"ver-gis-ruta-lectura\" type = \"checkbox\"><span>Rutas de lectura</span>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<input id = \"ver-gis-ruta-lectura-camino\" type = \"checkbox\"><span>Caminos rutas de lectura</span>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<input id = \"ver-gis-calles\" type = \"checkbox\"><span>Calles</span>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<input id = \"ver-gis-red-agua\" type = \"checkbox\"><span>Agua</span>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<input id = \"ver-gis-red-alcantarillado\" type = \"checkbox\"><span>Alcantarillado</span>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<input id = \"ver-gis-accesorios\" type = \"checkbox\"><span>Accesorios</span>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<input id = \"ver-gis-valvulas\" type = \"checkbox\"><span>Válvulas</span>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<input id = \"ver-gis-buzones\" type = \"checkbox\"><span>Buzones</span>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<input id = \"ver-gis-pozos\" type = \"checkbox\"><span>Pozos</span>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<input id = \"ver-gis-clientes\" type = \"checkbox\"><span>Clientes</span>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<input id = \"ver-gis-curvas-nivel\" type = \"checkbox\"><span>Curvas de nivel</span>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li id = \"ver-menu-etiquetas\">\r\n\t\t\t\t\t<a>Etiquetas</a>\r\n\t\t\t\t\t<ul id = \"menu-etiquetas\" class = \"submenu\">\t\t\t\t\t\t\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<input id = \"ver-etiqueta-sectores\" type = \"checkbox\"><span>Sectores</span>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<input id = \"ver-etiqueta-urbanismo\" type = \"checkbox\"><span>Urbanizaciones</span>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<input id = \"ver-etiqueta-manzanas\" type = \"checkbox\"><span>Manzanas</span>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<input id = \"ver-etiqueta-ruta-entrega\" type = \"checkbox\"><span>Rutas de entrega</span>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<input id = \"ver-etiqueta-ruta-lectura\" type = \"checkbox\"><span>Rutas de lectura</span>\r\n\t\t\t\t\t\t</li>\t\t\t\t\t\t\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<input id = \"ver-etiqueta-desague\" type = \"checkbox\"><span>Flujo del alcantarillado</span>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<input id = \"ver-etiqueta-accesorios\" type = \"checkbox\"><span>Accesorios</span>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<input id = \"ver-etiqueta-valvulas\" type = \"checkbox\"><span>Válvulas</span>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<input id = \"ver-etiqueta-buzones\" type = \"checkbox\"><span>Buzones</span>\r\n\t\t\t\t\t\t</li>\t\t\t\t\t\t\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<input id = \"ver-etiqueta-clientes\" type = \"checkbox\"><span>Clientes</span>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<input id = \"ver-etiqueta-curvas-nivel\" type = \"checkbox\"><span>Curvas de nivel</span>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li id = \"ver-menu-consultas\">\r\n\t\t\t\t\t<a>Consultas y Análisis</a>\r\n\t\t\t\t\t<ul id = \"menu-consultas\" class = \"submenu\">\r\n\t\t\t\t\t\t<li id = \"buscar-cliente\">Buscar cliente por n° suministro</li>\r\n\t\t\t\t\t\t<li id = \"buscar-cliente-por-cod-cat\">Busquedas cod. catastral</li>\r\n\t\t\t\t\t\t<li id = \"analisis-de-usuarios\">Análisis de usuarios</li>\r\n\t\t\t\t\t\t<li id = \"analisis-de-deudas\">Análisis de deudas</li>\r\n\t\t\t\t\t\t<li id = \"analisis-por-consumo\">Análisis de consumos</li>\r\n\t\t\t\t\t\t<li id = \"analisis-social\">Análisis comercial y social</li>\r\n\t\t\t\t\t\t<li id = \"analisis-conexion\">Análisis de la conexión</li>\r\n\t\t\t\t\t\t<li id = \"analisis-objetos\">Análisis de objetos</li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li id = \"ver-menu-herramientas\">\r\n\t\t\t\t\t<a>Herramientas</a>\r\n\t\t\t\t\t<ul id = \"menu-herramientas\" class = \"submenu\">\t\t\t\t\t\t\r\n\t\t\t\t\t\t<li id = \"captura-mapa\">Captura</li>\t\t\t\t\t\t\r\n\t\t\t\t\t\t<li id = \"limpiar-mapa\">Limpiar mapa</li>\t\t\t\t\t\t\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li id = \"ver-menu-ayuda\">\r\n\t\t\t\t\t<a>Ayuda</a>\r\n\t\t\t\t\t<ul id = \"menu-ayuda\" class = \"submenu\">\t\t\t\t\t\t\r\n\t\t\t\t\t\t<li id = \"ver-leyenda\">Leyenda</li>\t\t\t\t\t\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</li>\r\n\t\t\t</ul>\t\t\t\t\t\t\r\n\t\t</nav>\r\n\r\n\t\t<div id = \"mapa\">\r\n\t\t\t<!-- popup -->\r\n\t\t\t<div id = \"info-popup\"></div>\r\n\t\t\t<!-- Ventana modal -->\r\n\t\t\t<div class = \"modal fade\" id = \"myModal\" tabindex=\"-1\" role=\"dialog\" >\t\t\t\t\r\n\t\t\t\t<div class = \"modal-dialog modal-sm\">\r\n\t\t\t\t\t<div class = \"modal-content\" id = \"modal-contenido\">\r\n\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\t\r\n\t\t</div>\t\t\r\n\r\n\t\t<div id = \"info-div\">\r\n\t\t\t<label>total clientes activos</label>\r\n\t\t\t<span id = \"total-clientes-activos\"></span>\r\n\t\t\t<label>Dist. Total Red de agua</label>\r\n\t\t\t<span id = \"dt-red-agua\"></span>\r\n\t\t\t<label>Dist. Total Red de desague</label>\r\n\t\t\t<span id = \"dt-red-desague\"></span>\r\n\t\t</div>\r\n\r\n\t\t<div id = \"leyenda-dialog\" title = \"Leyenda\">\r\n\t\t\t<div><img src = 'images/leyenda-cliente-activo.png'><span>Cliente activo</span></div>\r\n\t\t\t<div><img src = 'images/leyenda-cliente-factible.png'><span>Cliente factible</span></div>\r\n\t\t\t<div><img src = 'images/leyenda-manzana.png'><span>Manzana</span></div>\r\n\t\t\t<div><img src = 'images/leyenda-predio.png'><span>Predio</span></div>\r\n\t\t\t<div><img src = 'images/leyenda-red-agua.png'><span>Red agua</span></div>\r\n\t\t\t<div><img src = 'images/leyenda-red-alcantarillado.png'><span>Red alcantarillado</span></div>\r\n\t\t\t<div><img src = 'images/leyenda-accesorios.png'><span>Accesorios</span></div>\r\n\t\t\t<div><img src = 'images/leyenda-valvulas.png'><span>Válvulas</span></div>\r\n\t\t\t<div><img src = 'images/leyenda-buzones.png'><span>Buzones</span></div>\r\n\t\t\t<div><img src = 'images/leyenda-pozos.png'><span>Pozos</span></div>\r\n\t\t</div>\r\n\r\n\t\t<div id = \"street-view\">\r\n\t\t\t<div id = \"gmap\"></div><div id = \"pano\"></div>\r\n\t\t</div>\r\n\r\n\t\t<div id = \"opciones-captura\"></div>\r\n\r\n\t\t<div id = \"opciones-analisis-objetos\"></div>\r\n\r\n\t</section>\r\n</body>\r\n</html>";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["test1.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<html>\r\n<head>\r\n<script LANGUAGE=\"JavaScript\" TYPE=\"text/javascript\">\r\n    function openWindow(){\r\n        WREF = window.open(\"test2.html\",\"test2\",'width=550,height=650');\r\n        if(!WREF.opener){ WREF.opener = this.window; }\r\n    }\r\n    function getValue(val){\r\n        newVal = 5 * val;\r\n        return newVal;\r\n    }\r\n    var globalGetValue = this.getValue;\r\n</script>\r\n</head>\r\n<body>\r\n<a HREF=\"javascript:void(0);\" onClick=\"openWindow();\">Open the window</a>\r\n</body>\r\n</html>";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["test2.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<html>\r\n<head>\r\n</head>\r\n<body>\r\n<script LANGUAGE=\"JavaScript\" TYPE=\"text/javascript\">\r\ndocument.write(\"This is 5 x 7: \" + opener.getValue(7));\r\n</script>\r\n</body>\r\n</html>";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["valores_minimos_ficha_catastral_piura.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<h3 class = 'title-sec'><span class = 'subrayado'>Valores mínimos admisibles</span></h3>\r\n<div>\r\n\t<div class = 'izq'>\r\n\t\t<p class = 'dato-izq'><label>Trampa de grasa:</label> <span class = 'dato'>";
output += runtime.suppressValue(env.getFilter("filtro_si_no").call(context, runtime.contextOrFrameLookup(context, frame, "trampade")), env.opts.autoescape);
output += "</span></p>\r\n\t\t<p class = 'dato-der'><label>Local. T. grasa:</label> <span class = 'dato'>";
output += runtime.suppressValue(env.getFilter("filtro_interno_externo").call(context, runtime.contextOrFrameLookup(context, frame, "loctrade")), env.opts.autoescape);
output += "</span></p>\r\n\t</div>\t\t\r\n\t<div class = 'der'>\r\n\t\t<p class = 'dato-izq'><label>Punto de muestreo:</label> <span class = 'dato'>";
output += runtime.suppressValue(env.getFilter("filtro_si_no").call(context, runtime.contextOrFrameLookup(context, frame, "ptomues")), env.opts.autoescape);
output += "</span></p>\r\n\t\t<p class = 'dato-der'><label>Local. punto muestreo:</label> <span class = 'dato'>";
output += runtime.suppressValue(env.getFilter("filtro_interno_externo").call(context, runtime.contextOrFrameLookup(context, frame, "locptomu")), env.opts.autoescape);
output += "</span></p>\r\n\t</div>\t\t\r\n</div>\r\n<p><label>CIIU:</label> <span class = 'dato'>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "desciuu1"), env.opts.autoescape);
output += "</span></p>\r\n<p><label>principales actividades que desarrolla el predio relacionada a la descarga de aguas residuales:</label> <span class = 'dato'>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "activida"), env.opts.autoescape);
output += "</span></p>\t\t\r\n<p><label>Razon social del negocio:</label> <span class = 'dato'>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "razonsoc"), env.opts.autoescape);
output += "</span></p>";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["vista_actual.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<html>\r\n<head>\r\n\t<title></title>\r\n\t<meta charset = \"UTF-8\">\r\n\t<meta name = \"viewport\" content = \"user-scalable=no, initial-scale=1.0, maximum-scale=1.0, width=device-width\">\r\n\t<link rel=\"stylesheet\" type=\"text/css\" href=\"javascripts/jquery-ui-1.11.4/jquery-ui.min.css\"><!-- jquery UI-->\r\n\t<script type=\"text/javascript\" src = \"javascripts/jquery-1.11.2.js\"></script> <!-- jquery -->\r\n\t<script type=\"text/javascript\" src = \"javascripts/jquery-ui-1.11.4/jquery-ui.min.js\"></script><!-- jquery UI-->\r\n\t<link rel=\"stylesheet\" type = \"text/css\" href=\"javascripts/bootstrap-3.3.5-dist/css/bootstrap.min.css\"> <!-- Boostrap -->\r\n\t<link rel=\"stylesheet\" type=\"text/css\" href=\"css/responsive.css\">\r\n\t<!--link rel=\"stylesheet\" type=\"text/css\" href=\"css/estilos-resultados-busqueda-cliente.css\"-->\r\n\t<script type = \"text/javascript\" src=\"javascripts/bootstrap-3.3.5-dist/js/bootstrap.min.js\"></script> <!-- Boostrap -->\t\r\n\t<script type=\"text/javascript\" src = \"javascripts/validaciones.js\"></script> <!-- Validaciones -->\r\n\t<link rel=\"stylesheet\" type=\"text/css\" href=\"css/estilos-ficha-catastral-piura.css\">\r\n\r\n\t<style type=\"text/css\">\r\n\t*{\r\n\t\tmargin: 0px;\r\n\t\tpadding: 0px\r\n\t}\r\n\theader, section, footer, aside, nav, article,div{\r\n\t\tbox-sizing: border-box;\r\n\t\t-webkit-box-sizing: border-box;\r\n\t\t-moz-box-sizing: border-box;\r\n\t\t-o-box-sizing: border-box;\r\n\t\t-ms-box-sizing: border-box;\r\n\t}\t\r\n\t/*#main-container div{\r\n\t\tdisplay: inline-block;\t\t\r\n\t}\r\n\t#main-container > div{\r\n\t\twidth: 100%;\r\n\t}\r\n\t#main-container .izq{\t\t\r\n\t\twidth: 50%;\r\n\t\tfloat: left;\r\n\t}\r\n\t#main-container .der{\r\n\t\twidth: 50%;\r\n\t}\t\r\n\t#main-container .dato-izq{\r\n\t\twidth: 50%;\t\r\n\t\tfloat: left;\t\r\n\t\tdisplay: inline;\r\n\t}\r\n\t#main-container .dato-der{\r\n\t\twidth: 50%;\t\t\t\r\n\t\tdisplay: inline;\r\n\t}\r\n\t#main-container .full{\r\n\t\twidth: 100%;\t\t\r\n\t}*/\r\n\t\r\n\t@media screen and (max-width: 800px){\r\n\t\t#main-container{\r\n\t\t\twidth: 100%;\r\n\t\t}\r\n\t\t/*#main-container div{\r\n\t\t\twidth: 100%;\r\n\t\t}\r\n\t\t#main-container .izq,\r\n\t\t#main-container .der{\r\n\t\t\twidth: 100%;\r\n\t\t\tclear: both;\r\n\t\t}\r\n\t\t#main-container .dato-izq,\r\n\t\t#main-container .dato-der{\r\n\t\t\twidth: 100%;\r\n\t\t\tclear: both;\r\n\t\t\tdisplay: block;\r\n\t\t}*/\r\n\t}\r\n\t</style>\r\n\r\n\t<script type=\"text/javascript\">\r\n\t\r\n\t</script>\r\n\r\n</head>\r\n<body>\r\n\t<div id = 'main-container'>\r\n\t\t<div id = \"tabla\">\t\t\t\r\n\t\t\t\t<table class = 'table responsive-table'>\r\n\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t<tr class = 'captions'>\r\n\t\t\t\t\t\t\t<th>Num. Item</th>\r\n\t\t\t\t\t\t\t<th>Nro. Inscripción</th>\r\n\t\t\t\t\t\t\t<th>Nombre titular</th>\r\n\t\t\t\t\t\t\t<th>Distrito</th>\r\n\t\t\t\t\t\t\t<th>Tipo servicio</th>\r\n\t\t\t\t\t\t\t<th>Estado (agua)</th>\r\n\t\t\t\t\t\t\t<th>Consumo promedio</th>\r\n\t\t\t\t\t\t\t<th>Deuda</th>\r\n\t\t\t\t\t\t\t<th>Recibos adeudados</th>\r\n\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t</thead>\r\n\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t<tr class = 'fila'>\r\n\t\t\t\t\t\t\t<th class = 'primero'><span>N° Item</span>1</th>\r\n\t\t\t\t\t\t\t<th><span>N° Inscripción</span>10164337</th>\r\n\t\t\t\t\t\t\t<th><span>Nombre</span><a onclick = 'verFichaCatastral(\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "clientes")),runtime.contextOrFrameLookup(context, frame, "i"), env.opts.autoescape)),"num_inscripcion", env.opts.autoescape), env.opts.autoescape);
output += "\")'>AQUINO VEGAS HENRY VANNER</a><a class = 'glyphicon glyphicon-globe'></a></a></th>\r\n\t\t\t\t\t\t\t<th><span>Distrito</span>CATACAOS</th>\r\n\t\t\t\t\t\t\t<th><span>Tipo servicio</span>AGUA Y DESAGUE</th>\r\n\t\t\t\t\t\t\t<th><span>Estado (agua)</span>ACTIVO</th>\r\n\t\t\t\t\t\t\t<th><span>Consumo promedio</span>2</th>\r\n\t\t\t\t\t\t\t<th><span>Deuda</span>74.85</th>\t\r\n\t\t\t\t\t\t\t<th><span>Recibos adeudados</span>2</th>\t\r\n\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t<tr class = 'fila'>\r\n\t\t\t\t\t\t\t<th class = 'primero'><span>N° Item</span>1</th>\r\n\t\t\t\t\t\t\t<th><span>N° Inscripción</span>10164337</th>\r\n\t\t\t\t\t\t\t<th><span>Nombre</span><a onclick = 'verFichaCatastral(\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "clientes")),runtime.contextOrFrameLookup(context, frame, "i"), env.opts.autoescape)),"num_inscripcion", env.opts.autoescape), env.opts.autoescape);
output += "\")'>AQUINO VEGAS HENRY VANNER</a></th>\r\n\t\t\t\t\t\t\t<th><span>Distrito</span>CATACAOS</th>\r\n\t\t\t\t\t\t\t<th><span>Tipo servicio</span>AGUA Y DESAGUE</th>\r\n\t\t\t\t\t\t\t<th><span>Estado (agua)</span>ACTIVO</th>\r\n\t\t\t\t\t\t\t<th><span>Consumo promedio</span>2</th>\r\n\t\t\t\t\t\t\t<th><span>Deuda</span>74.5</th>\t\r\n\t\t\t\t\t\t\t<th><span>Recibos adeudados</span>2</th>\t\r\n\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t</tbody>\r\n\t\t\t\t</table>\r\n\t\t\t</div>\r\n\t</div>\r\n</body>\r\n</html>";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();

