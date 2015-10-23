function filtro_vacio(str){
	if (str == '0' || !str) return "";
	return str;
}

function filtro_tiprop(index,otro){
	switch(index){
		case 1: return "Privada"; break;
		case 2: return "Pública"; break;
		case 3: return "Mixto"; break;
		case 4: return otro;
	}
}

function filtro_tipconst(index,otro){
	switch(index){
		case 1: return "Sin construir"; break;
		case 2: return "Casa o vivienda"; break;
		case 3: return "Edificio"; break;
		case 4: return "Multifamiliar"; break;
		case 5: return otro;
	}
}

function filtro_matconst(index){
	switch(index){
		case 1: return "Noble"; break;
		case 2: return "Adobe"; break;
		case 3: return "Caña - Quincha"; break;
		case 4: return "Madera"; break;
		case 5: return "Tapial"; break;
		case 6: return "Metálica"; break;
		case 7: return "Cantería"; break;
		case 8: return "Otros"; break;
	}
}

function filtro_tipreser(index,otro){
	switch(index){
		case 1: return "Cisterna"; break;
		case 2: return "Tanque Elevado"; break;
		case 3: return "Cisterna y Tanque Elevado"; break;
		case 4: return otro; break;
		case 5: return "No tiene"; break;
	}
}

function filtro_si_no(index){
	switch(index){
		case 1: return "SI"; break;
		case 2: return "NO"; break;
	}
}

function filtro_matpista(index){
	switch(index){
		case 1: return "Concreto"; break;
		case 2: return "Asfalto"; break;
		case 3: return "Bloquetas"; break;
		case 4: return "Ladrillo"; break;
		case 5: return "Otros"; break;
	}
}

function filtro_tipconex(index){
	switch(index){
		case 1: return "Agua potable y desague"; break;
		case 2: return "Agua potable"; break;
		case 3: return "Desague"; break;
		case 4: return "Sin servicio";break;	
	}
}

function filtro_estcnxag(index){
	switch(index){
		case 1: return "Activa"; break;
		case 2: return "Factible"; break;
		case 3: return "Anulada"; break;
		case 4: return "Potencial"; break;		
	}
}

function filtro_situacion_conexion(index){
	switch(index){
		case 1: return "Activa"; break;
		case 2: return "Cortada"; break;
		case 3: return "Clausurada"; break;
		case 4: return "Levantada"; break;
		case 5: return "Clandestina"; break;
	}
}

function filtro_diametro(index){
	switch(index){
		case 1: return "1/4"; break;
		case 2: return "3/4"; break;
		case 3: return "1"; break;
		case 4: return "1 1/2"; break;
		case 5: return "2"; break;
		case 6: return "Otro"; break;
	}
}

function filtro_matcnxag(index){
	switch(index){
		case 1: return "PVC"; break;
		case 2: return "Fo Galvanizado"; break;
		case 3: return "Plomo"; break;
		case 4: return "Metal"; break;
		case 5: return "Concreto simple N"; break;
		case 6: return "Otro"; break;
	}
}

function filtro_matemtag(index){
	switch(index){
		case 1: return "Termoplástico con visor"; break;
		case 2: return "Termoplástico sin visor"; break;
		case 3: return "Fo Fdo/Galvanizado"; break;
		case 4: return "Concreto"; break;
		case 5: return "Otro"; break;		
	}
}

function filtro_estado_conservacion(index){
	switch(index){
		case 1: return "Bueno"; break;
		case 2: return "Malo"; break;
		case 3: return "Regular"; break;
		case 4: return "Otro";	
	}
}

function filtro_matcajag(index){
	switch(index){
		case 1: return "Termmoplástica"; break;
		case 2: return "Concreto"; break;
		case 3: return "Ladrillo"; break;
		case 4: return "Otro"; break;
	}
}

function filtro_loc_caja(index){
	switch(index){
		case 1: return "En vereda"; break;
		case 2: return "En la pista"; break;
		case 3: return "En el jardín"; break;
		case 4: return "Interior del predio"; break;
		case 5: return "Por los fondos"; break;
		case 6: return "Por la lateral izquierda"; break;
		case 7: return "Por la lateral derecha"; break;
	}
}

function filtro_fabrican(index){
	switch(index){
		case 1: return "Minol"; break;
		case 2: return "Shulumbe"; break;
		case 3: return "ABB"; break;
		case 4: return "ZENNER"; break;
		case 5: return "Amico"; break;
		case 6: return "Otro"; break;		
	}
}

function filtro_estmedid(index){
	switch(index){
		case 1: return "Operativo"; break;
		case 2: return "Luna opaca/rota"; break;
		case 3: return "Invertido"; break;
		case 4: return "Paralizado"; break;
		case 5: return "Enterrado"; break;
		case 6: return "Otro"; break;		
	}
}

//

function filtro_diacnxde(index){
	switch(index){
		case 1: return "4"; break;
		case 2: return "6"; break;
		case 3: return "8"; break;
		case 4: return "10"; break;
		case 5: return "Otro"; break;			
	}
}

function filtro_matemtde(index){
	switch(index){
		case 1: return "Termoplástico"; break;
		case 2: return "Concreto"; break;
		case 3: return "Fo Fdo/Galvanizado"; break;
		case 4: return "Otro"; break;				
	}
}

function filtro_matcajde(index){
	switch(index){
		case 1: return "Concreto"; break;
		case 2: return "Ladrillo"; break;
		case 3: return "Otro"; break;		
	}
}

//

function filtro_interno_externo(index){
	switch(index){
		case 1: return "Interno"; break;
		case 2: return "Externo"; break;		
	}
}

//

function filtro_tipabaag(index){
	switch(index){
		case 1: return "Red pública"; break;
		case 2: return "Pozo Individual"; break;
		case 3: return "Pozo colectivo"; break;		
	}
}

function filtro_tipodesa(index){
	switch(index){
		case 1: return "Colector Público"; break;
		case 2: return "Fosa Individual"; break;
		case 3: return "Fosa colectiva"; break;		
	}
}

function filtro_jardin(index){
	switch(index){
		case 1: return "No tiene"; break;
		case 2: return "Jardín"; break;
		case 3: return "Huerto"; break;
		case 4: return "Jardín y Huerto"; break;
	}
}

function filtro_llavepas(index){
	switch(index){
		case 1: return "1 llave"; break;
		case 2: return "2 llaves"; break;
		case 3: return "No tiene (directo)"; break;		
	}
}

//

function filtro_nivpresi(index){
	switch(index){
		case 1: return "JARDIN"; break;
		case 2: return "LAVATORIO"; break;
		case 3: return "DUCHA"; break;
		case 4: return "MAYORA DUCHA"; break;
	}
}
//Algunos filtros de ficha catastral catacaos

function filtro_bloque(bloque){
	if (bloque == '0' || !bloque){
		return "";		
	}
	return "Bloque".concat(String(bloque));
}
function filtro_estcnxag_catacaos(index){
	switch(index){
		case 1: return "Activa (Real)"; break;
		case 2: return "Factible"; break;
		case 3: return "Potencial"; break;
		case 4: return "clandestina"; break;
	}
}
function filtro_responsable_catacaos(index){
	switch(index){
		case 1: return "Propietario"; break;
		case 2: return "Entidad pública"; break;
		case 3: return "Desconocido"; break;
		case 4: return "Inquilino"; break;
		case 5: return "Encargado"; break;
		case 6: return "Otro"; break;
	}
}
function filtro_tipdoc(index){
	switch(index){
		case 1: return "DNI"; break;
		case 2: return "RUC"; break;		
	}
}
function filtro_tipconst_catacaos(index){
	switch(index){
		case 1: return "Sin construir"; break;
		case 2: return "Lote cercado"; break;
		case 3: return "Semiconstruido"; break;
		case 4: return "En construcción"; break;
		case 5: return "Construido";
	}
}
function filtro_tippred(index){
	switch(index){
		case 1: return "UNIFAMILIAR"; break;
		case 2: return "MULTIFAMILIAR"; break;
	}
}
function filtro_sitcnxag_catacaos(index){
	switch(index){
		case 1: return "Caja y medidor"; break;
		case 2: return "Caja y niple"; break;
		case 3: return "Caja y conex. directa"; break;
		case 4: return "Caja s/med/niple"; break;
		case 5: return "Sin caja y directo"; break;
		case 6: return "Otro"; break;
	}
}
function filtro_concnxag_catacaos(index){
	switch(index){
		case 1: return "Activa"; break;
		case 2: return "Cortada"; break;
		case 3: return "Clausurada"; break;
		case 4: return "Levantada"; break;
		case 5: return "Sin conexión"; break;
	}
}
function filtro_diacnxag_catacaos(index){
	switch(index){
		case 1: return "1/2"; break;
		case 2: return "3/4"; break;
		case 3: return "1"; break;
		case 4: return "1 1/2"; break;
		case 5: return "2"; break;
		case 6: return "3"; break;
		case 7: return "4"; break;
		case 8: return "8"; break;
	}
}
function filtro_matcnxag_catacaos(index){
	switch(index){
		case 1: return "PVC"; break;
		case 2: return "Fo. Galvanizado"; break;
		case 3: return "Plomo"; break;
		case 4: return "Concreto Simple N"; break;
		case 5: return "Otros"; break;		
	}
}
function filtro_estmtag_catacaos(index){
	switch(index){
		case 1: return "Buena condición"; break;
		case 2: return "Mal estado"; break;
		case 3: return "Sellada"; break;
		case 4: return "Sin pasador"; break;
		case 5: return "Tapa rota"; break;
		case 6: return "Otro"; break;
	}
}
function filtro_matemtag_catacaos(index){
	switch(index){
		case 1: return "Termoplástico con visor"; break;
		case 2: return "Tempo sin visor"; break;
		case 3: return "Fierro Galvanizado"; break;
		case 4: return "Concreto"; break;
		case 5: return "No tiene"; break;
		case 6: return "Otro"; break;
	}
}
function filtro_matcajag_catacaos(index){
	return filtro_matcajag(index);
}
function filtro_loccajme_catacaos(index){
	return filtro_loc_caja(index);
}
function filtro_diamedid_catacaos(index){
	switch(index){
		case 1: return "1/4"; break;
		case 2: return "3/4"; break;
		case 3: return "1"; break;
		case 4: return "1 1/2"; break;
		case 5: return "2"; break;
		case 6: return "3"; break;
		case 7: return "4"; break;
		case 8: return "10"; break;
		case 9: return "Otro"; break;
	}
}
function filtro_fabrican_catacaos(index,otro){
	var str = filtro_fabrican(index);
	if(str == "Otro"){
		return otro;
	}
	return str;
}
function filtro_estmedid_catacaos(index){
	switch(index){
		case 1: return "Sin alteraciones"; break;
		case 2: return "Trabado"; break;
		case 3: return "LUna empañada"; break;
		case 4: return "Luna rota"; break;
		case 5: return "Luna opaca"; break;
		case 6: return "Marcador roto"; break;
		case 7: return "Paralizado"; break;		
		case 8: return "Otro"; break;
	}
}
function filtro_segurmed_catacaos(index){
	switch(index){
		case 1: return "Sin dispositivo"; break;
		case 2: return "Precinto"; break;
		case 3: return "Anclaje"; break;
		case 4: return "Rejilla"; break;
		case 5: return "Otro"; break;		
	}
}
function filtro_posicmed_catacaos(index){
	switch(index){
		case 1: return "Normal"; break;
		case 2: return "Profundo"; break;
		case 3: return "Enterrado"; break;
		case 4: return "Invertido"; break;
		case 5: return "No ubicado"; break;		
	}
}
function filtro_fuga_catacaos(index,lugar){
	switch(index){
		case 1: return lugar; break;
		case 2: return "NO"; break;
	}
}
function filtro_sitcnxde_catacaos(index){
	return filtro_concnxag_catacaos(index);
}
function filtro_diacnxde_catacaos(index){
	switch(index){
		case 1: return "4"; break;
		case 2: return "6"; break;
		case 3: return "10"; break;
		case 4: return "Otro"; break;		
	}
}
function filtro_matemtde_catacaos(index){
	return filtro_matemtde(index);
}
function filtro_estmtde_catacaos(index){
	switch(index){
		case 1: return "Buena condición"; break;
		case 2: return "Mal estado"; break;
		case 3: return "Sellada"; break;
		case 4: return "Otro"; break;		
	}
}
function filtro_matcajde_catacaos(index){
	switch(index){
		case 1: return "Concreto"; break;
		case 2: return "Ladrillo"; break;
		case 3: return "No tiene"; break;
		case 4: return "Otro"; break;		
	}
}
function filtro_loccajde_catacaos(index){
	return filtro_loccajme_catacaos(index);
}
function filtro_estcajde_catacaos(index){
	switch(index){
		case 1: return "Buena condición"; break;
		case 2: return "Mal estado"; break;
		case 3: return "Caja tapada"; break;
		case 4: return "Otro"; break;		
	}
}
function filtro_llavepas_catacaos(index){
	switch(index){
		case 1: return "Sin llaves de paso"; break;
		case 2: return "Antes"; break;
		case 3: return "Desagüe"; break;
		case 4: return "Antes y después"; break;		
	}
}