//objetos principales del mapa
var mapa, vista;

//Capas WMS
var bingCalles,bingAerea,distritos,sectores,manzanas,
	predios,clientes,calles,redAgua,redAlcantarillado,
	accesorios,buzones,curvasDeNivel,valvulas,pozos,
	urbanismo,rutasEntrega,caminosRutaEntrega,rutasLectura,
	caminosRutaLectura,reservorios;

//Objetos source de las Capas WMS
var bingCallesSource,bingAereaSource,sectoresSource,manzanasSource,
clientesSource,prediosSource,callesSource,redAguaSource,
redAlcantarilladoSource,accesoriosSource,buzonesSource,
curvasDeNivelSource,valvulasSource,pozosSource,distritosSource,
urbanismoSource,rutasEntregaSource,caminosRutaEntregaSource,
rutasLecturaSource,caminosRutaLecturaSource;

//Para agregar la capa de google
var gmap;

var infoOverlay,infoContent;

//Capas para seleccion de objetos
var capaSeleccionObjetos;
//Capas para búsquedas
var capaBusquedas;

//*******************************************

//*********** VARIABLES PARA LA OPCIÓN DE CAPTURA ************
var dibujoInteraccion;
//Capa donde se dibujará el rectángulo que define el área de selección
var capaSeleccion;
//Interacción que dibujará el rectángulo
var capturaInteraccion;
//Listener que escuchará interacciones del teclado
var capturaKeyListener;
//Variables auxiliares para guardar las coordenadas de la selección
var coordi_seleccion,coordf_seleccion;
//Almacena la url de la imagen(resultado de la captura)
var url_imagen_captura;

//*******************************************

//******* VARIABLES PARA LA OPCIÓN DE ANÁLISIS DE OBJETOS ***********

var analisisObjetosInteraccion;

var analisisObjetosKeyListener;

var analisisEspacialDeObjetos_funciones = {
	"red_agua":"INGENIERIA.realizarAnalisisRedAgua()",
	"clientes":"CATASTRO.realizarAnalisisEspacialUsuarios()"
}

//******** VARIABLES DE CONFIGURACIÓN **********************

var ip_geoserver = "20.0.10.240",
port_geoserver = "8080",
wms_url = "http://"+ip_geoserver+":"+port_geoserver+"/geoserver/eps_piuragis/wms";


//*******************************************

//ESTILOS

var alpha_1 = 1;
var alpha_2 = 0.5;

var cliente_sombreado = CREADOR_ESTILOS.crearEstiloBasico1("#FF000",4,"#D7DF01",alpha_2);
var cliente_seleccionado = CREADOR_ESTILOS.crearEstiloBasico2("#088A08",4,alpha_1);
var red_seleccionada = CREADOR_ESTILOS.crearEstiloBasico2("#FF0000",3,alpha_1);
var manzana_sombreada = cliente_sombreado;

//
var ancho_ventana_analisis = 1300;
var alto_ventana_analisis = 750;

//VARIABLES PARA STREET VIEW

var googleMap;
var panoOptions;
var streetViewPanorama;