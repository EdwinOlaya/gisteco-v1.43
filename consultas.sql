-- numero de clientes inscritos hasta el momento

select count(suministro) as cant_inscritos
from piura_sig_clientes
where length(suministro) = 8

-- vista para la capa de alcantarillado
select terreno,fecha_folio,estado_conservacion,length_,node1,node2,dn_plg,material,
st_x(st_startpoint(st_transform(geom,3857))) as xi,
st_y(st_startpoint(st_transform(geom,3857))) as yi,
st_x(st_endpoint(st_transform(geom,3857))) as xf,
st_y(st_endpoint(st_transform(geom,3857))) as yf,
geom
from piura_sig_alcantarillado_red

-- vista para la capa de red de red agua

select node1,node2,length,dn_plg,dn_mm,material,tipo,empalme,conserv,estado_ope,
st_x(st_startpoint(st_transform(geom,3857))) as xi,
st_y(st_startpoint(st_transform(geom,3857))) as yi,
st_x(st_endpoint(st_transform(geom,3857))) as xf,
st_y(st_endpoint(st_transform(geom,3857))) as yf,
geom
from piura_sig_red_agua

-- vista para la capa de accesorios

select dc_id, accesorio,diametro,empalme,conserv, estado_ope, geom
from piura_sig_accesorios

-- vista para la capa de valvulas

select dc_id, dn_plg,funcion,empalme,conserv,estado_ope,geom
from piura_sig_valvulas

-- vista para la capa de pozos

select dc_id,nombre,dim_total,material,estado_ope,geom
from piura_sig_captacion

-- datos basicos de la ficha catastral

select fichamad,codencue,
to_char(fechareg,'DD-MM-YYYY'),preregion,prezona,presector,premzn,prelote,
presulote,ciclo,inscrinro,ciudad,precalle,tipocalle,direccion,prenro,complem,
preurba,urban,email,nombre,dni,ruc,telef
from ficha_piura
where inscrinro = num_inscr;

-- tipo asociado

create  type datos_basicos_ficha_cat as
(fichamad varchar(8),
codencue integer,
fechareg varchar(10),
preregion integer,
prezona integer,
presector integer,
premzn integer,
prelote integer,
presulote integer,
ciclo integer,
inscrinro varchar,
ciudad integer,
precalle integer,
tipocalle varchar(4),
direccion varchar(40),
prenro integer,
complem varchar(20),
preurba integer,
urban varchar(25),
email varchar(50),
nombre varchar(50),
dni varchar(8),
ruc varchar(11),
telef varchar(9)
)

-- datos de la propiedad ficha catastral

select tiprop,ottprop,tipconst,ottconst,matconst,tipreser,
nropisos,vereda,pista,matpista,piscina,frontera,arealt,
areaconst,ptoagint,tipconex
from ficha_piura
where inscrinro = num_inscr;

-- tipo asociado

create type datos_propiedad_ficha_cat as
(tiprop integer,
ottprop varchar(15),
tipconst integer,
ottconst varchar(15),
matconst integer,
tipreser integer,
ottreser varchar(15),
nropisos integer,
vereda integer,
pista integer,
matpista integer,
piscina integer,
frontera real,
arealt real,
areaconst real,
ptoagint integer,
tipconex integer
)

-- datos de la conexion de agua ficha catastral

select estcnxag,sitcnzag,diacnxag,matcnxag,martapag,matemtag,estmtag,cajcnxag,matcajag,
estcajag,loccajme,medidor,diamedid,nroserie,lectura,fabrican,estmedid
from ficha_piura
where inscrinro = num_inscr

-- tipo asociado

create type conexion_agua_ficha_cat as
(estcnxag integer,
sitcnzag integer,
diacnxag integer,
matcnxag integer,
martapag integer,
matemtag integer,
estmtag integer,
cajcnxag integer,
matcajag integer,
estcajag integer,
loccajme integer,
medidor integer,
diamedid integer,
nroserie varchar(12),
lectura integer,
fabrican integer,
estmedid integer
)

-- datos de la conexion de desague ficha catastral

select sitcnxde,diacnxde,martapde,matemtde,
estmtde,cajadesa,matcajde,loccajde
from ficha_piura
where inscrinro = num_inscr;

-- tipo asociado

create type conexion_desague_ficha_cat as 
(sitcnxde integer,
diacnxde integer,
martapde integer,
matemtde integer,
estmtde integer,
cajadesa integer,
matcajde integer,
loccajde integer
)

-- datos de valores minimos ficha catastral

select trampade,loctrade,ptomues,locptomu,
codciuu1,desciuu1,activida,razonsoc
from ficha_piura
where inscrinro = num_inscr

-- tipo asociado

create type valores_minimos_ficha_cat as
(trampade integer,
loctrade integer,
ptomues integer,
locptomu integer,
codciuu1 varchar(20),
desciuu1 varchar(60),
activida varchar(60),
razonsoc varchar(40)
)

-- datos complementarios ficha catastral

select tipabaag,codsecag,sectagua,codsecde,
sectdesa,tipodesa,jardin,llavepas,
cnxagint,cnxdeint,casanego,areapto
into datos
from ficha_piura
where inscrinro = num_inscr;

-- tipo asociado

create type datos_complementarios_ficha_cat as
(tipabaag integer,
codsecag integer,
sectagua varchar(15),
codsecde integer,
sectdesa varchar(15),
tipodesa integer,
jardin integer,
llavepas integer,
cnxagint integer,
cnxdeint integer,
casanego integer,
areapto integer
)

-- información geográfica ficha cat

select nivpresi,distag1,
distde1,distag2,distde2,
st_x(the_geom) as x, st_y(the_geom) as y
from ficha_piura
where inscrinro = num_inscr

-- tipo asociado

create type informacion_geografica_ficha_cat as
(nivpresi integer,
distag1 real,
distde1 real,
distag2 real,
distde2 real,
x text,
y text
)

-- croquis (calles) ficha cat

select calle1,calle2,calle3,calle4
from ficha_piura
where inscrinro = num_inscr

-- tipo asociado

create type calles_predio_ficha_cat as
(calle1 varchar(35),
calle2 varchar(35),
calle3 varchar(35),
calle4 varchar(35)
)
-- consulta 

select * from tb_tabla_tipo where desc_campo like '%id_diam%';
select * from tb_objeto_tipo where id_tabla_tipo = 'id_tabla_tipo' and id_objeto_tipo = 'id_objeto_tipo'

--detalle la conexión de agua del cliente

select f_getprovincia(s.id_provincia),
f_getdistrito(s.id_provincia,s.id_distrito),
s.id_sector,
s.id_manzana,s.lote,
s.sublote,
f_getdiametro_conexionagua(s.num_inscripcion),
f_getmaterial_caja_agua(s.num_inscripcion),
to_char(m.fec_instalacion, 'DD-MM-YYYY'), 
f_getsituacion_conexionagua(s.num_inscripcion),
cmh.id_medidor
into datos
from tb_conexion_agua as ca
inner join tb_cliente_medidor_historico as cmh
on ca.num_inscripcion = cmh.num_inscripcion
inner join tb_medidor as m
on m.id_medidor = cmh.id_medidor
inner join tb_suministro as s
on s.num_inscripcion = ca.num_inscripcion
where cmh.vigente and cmh.num_inscripcion = num_inscr;

-- tipo relacionado

create type conexion_agua_cliente as
(region varchar(100),
zona varchar(100),
sector integer,
manzana integer,
lote integer,
sublote integer,
diametro varchar(20),
material varchar(20),
fec_instalacion varchar(10),
estado varchar(20),
nro_medidor varchar(20)
)

--detalle la conexión de desague del cliente

select f_getprovincia(s.id_provincia),
f_getdistrito(s.id_provincia,s.id_distrito),
s.id_sector,
s.id_manzana,s.lote,
s.sublote,
f_getdiametro_conexiondesa(s.num_inscripcion),
f_getmaterial_conexiondesa(s.num_inscripcion),
to_char(cd.fecha_codesa, 'DD-MM-YYYY'), 
f_getsituacion_conexiondesague(s.num_inscripcion)
into datos
from tb_conexion_desague as cd
inner join tb_suministro as s
on s.num_inscripcion = cd.num_inscripcion
where s.num_inscripcion = num_inscr;

-- tipo asociado

create type conexion_desague_cliente as
(region varchar(100),
zona varchar(100),
sector integer,
manzana integer,
lote integer,
sublote integer,
diametro varchar(20),
material varchar(20),
fec_instalacion varchar(10),
estado varchar(20)
)

--consulta de cuentas corrientes del cliente

select row_number() over(order by ccd.fecha desc),
to_char(ccd.fecha, 'DD-MM-YYYY'),
ccc.descripcion,
to_char(ccd.fecha, 'MM/YYYY'),
(ccd.monto_cargo+ccd.monto_abono),
ccd.monto_saldo
from tb_cuenta_corriente_detalle as ccd
left join tb_concepto_cuenta_corriente as ccc
on ccc.id_corr_concepto_cuenta_corriente = ccd.id_corr_concepto_cuenta_corriente
where num_inscripcion = num_inscr
order by ccd.fecha desc;

-- tipo asociado

create type detalle_cuenta_corriente_cliente as
(numero_correlativo integer,
fecha varchar(10),
concepto varchar(50),
periodo varchar(7),
importe real,
saldo real
)

--consulta de lecturas del cliente
select 
row_number() over(order by hl.fecha_lectura desc),
hl.lectura_diametro_mayor - hl.lectura_diametro_menor,
hc.lectura_actual,
to_char(hl.fecha_lectura, 'DD-MM-YYYY'),
hc.consumo_agua_real,
hc.consumo_agua_facturable,
hc.consumo_desague,
f_getorigen_consumo(hl.num_inscripcion),
hl.id_medidor,
f_gettipo_lectura(hl.num_inscripcion)
from tb_historico_lecturas as hl
inner join tb_historico_consumos as hc
on hc.num_historico_lectura = hl.num_historico_lectura
where hl.num_inscripcion = num_inscr
order by hl.fecha_lectura desc

-- tipo asociado

create type lecturas_cliente as(
numero_correlativo integer,
lectura_real integer,
lectura_estimada integer,
fecha_lectura varchar(10),
consumo_real_agua integer,
consumo_facturable_agua integer,
consumo_desague integer,
origen_consumo varchar(50),
medidor varchar(20),
tipo_lectura varchar(50)
)

-- consulta para buscar cliente por codigo catastral

select st_x(st_transform(the_geom,3857)),
st_y(st_transform(the_geom,3857))
from ficha_piura
where preregion = p_preregion and
prezona = p_prezona and
presector = p_presector and
premzn = p_premzn and
prelote = p_prelote;

-- tipo asociado
create type punto_3857 as(
x double precision,
y double precision
)

-- consulta para buscar cliente por num de suministro

select st_x(st_transform(geom,3857)),
st_y(st_transform(geom,3857))
into datos
from piura_sig_clientes 
where suministro = num_inscr;

-- tipo asociado

punto_3857

-- tipo asociado a la consulta del número de pags
--de la cuenta corriente del cliente

create type num_pags as(
num_pags integer
)

-- Nueva consulta para la capa de la red de alcantarillado
select terreno,fecha_folio,estado_conservacion,length_,node1,node2,dn_plg,material,
f_puntos_tramo_red_desague_to_string(gid) as puntos,
geom
from piura_sig_alcantarillado_red

-- Nueva consulta para la capa de la red de agua
select node1,node2,length,
dn_plg,dn_mm,material,tipo,
empalme,conserv,estado_ope,
f_puntos_tramo_red_agua_to_string(dc_id) as puntos,
geom
from piura_sig_red_agua

--cant de usuarios nuevos q van registrando marvin y gian
select count(suministro) as cant_inscritos
from piura_sig_clientes_suministro


-- Consulta facturación del cliente

select row_number() over(order by rf.reccol_codigo desc),
rf.reccol_codigo,
to_char(rf.fecha_emision,'DD-MM-YYYY'),
to_char(rf.fecha_vencimiento,'DD-MM-YYYY'),
to_char(rf.fecha_cancelado,'DD-MM-YYYY'),
rf.volumen_agua,
rf.monto_pendiente,
rf.igv_calculado,
rf.total_pendiente,
f_getestado_recibo(rf.id_corr_recfac),
rf.saldo_recibos_anteriores,
rf.num_meses_atrasados
from tb_recibo_facturacion as rf
inner join tb_recibo_facturacion_cargos as rfc
on rfc.id_corr_recfac = rf.id_corr_recfac
where rf.num_inscripcion = num_inscr
group by 
rf.id_corr_recfac,
rf.reccol_codigo,
rf.fecha_emision,
rf.fecha_vencimiento,
rf.fecha_cancelado,
rf.volumen_agua,
rf.monto_pendiente,
rf.igv_calculado,
rf.total_pendiente,
rf.saldo_recibos_anteriores,
rf.num_meses_atrasados
order by rf.reccol_codigo desc

-- tipo asociado

create type factura_cliente as (
numero_correlativo integer,
nro_factura varchar(8),
fecha_emision varchar(10),
fecha_vencimiento varchar(10),
fecha_cancelado varchar(10),
consumo_agua integer,
subtotal real,
igv real,
total real,
estado varchar(100),
mora real,
num_meses_atrasados integer
)

-- consulta para el detalle de una factura

select rf.volumen_agua,
rf.volumen_desague,
rfc.concepto_cargo,
rfc.monto_cargado
from tb_recibo_facturacion as rf
inner join tb_recibo_facturacion_cargos as rfc
on rfc.id_corr_recfac = rf.id_corr_recfac
where rf.reccol_codigo = id_recfac
and imponible

-- tipo asociado

create type detalle_factura_cliente as (
volumen_agua integer,
volumen_desague integer,
concepto varchar(50),
importe real
)


-- consulta para traer los distritos de una determinada id_provincia

select id_distrito,
descripcion_distrito
from tb_distrito
where id_provincia = id_prov
and id_distrito != 0

-- tipo asociado

create type distrito as (
id_distrito integer,
nombre_distrito varchar(50)
)

-- consulta para obtener la deuda del cliente
-- nota: la consulta ha sido proporcionado por Andrés

    select t.num_inscripcion, 
    	case when t.mora is null then 0 
		else t.cant_recibos_mora
		end as cant_recibos_mora,
		(coalesce(t.mora,0)+coalesce(nota_cobranza.monto_nota_cobranza,0)) as mora  
	from 
	(select   t.num_inscripcion ,count(case when tipo_documento =1 then t.num_inscripcion else null end) as cant_recibos_mora,sum(t.total_pendiente) as mora
		from (
			select distinct s.num_inscripcion,
				case when rf.id_corr_tb_nota is null then rf.total_pendiente 
					else case when n.id_tipo_nota =1 then (rf.total_pendiente-n.total_pago_usuario) else (rf.total_pendiente+n.total_pago_usuario) end
				end as total_pendiente,
				case  when rf.id_corr_tb_nota is null then 1 -- recibo facturación
					else 2 -- nota
				end as tipo_documento
				from tb_suministro  as s
				left join tb_recibo_facturacion as rf 
					on s.num_inscripcion =rf.num_inscripcion and (rf.id_estado_recibo_t=1 or (rf.id_corr_tb_nota is not null and rf.id_estado_recibo_t in(5,6)))
				left join (select * from tb_nota where id_estado_nota_t=1) as n
					on rf.id_corr_tb_nota=n.id_corr_tb_nota
				where 				
				s.habilitado =true and s.flag_facturacion=true ) as t				
				group by t.num_inscripcion
	) as t
	left join (select num_inscripcion,sum(case when id_tipo_origen_nota_cobranza_t='5' then total_pendiente else -total_pendiente end) as monto_nota_cobranza 
	from tb_nota_cobranza where id_estado_recibo_t=1 group by num_inscripcion) as nota_cobranza on t.num_inscripcion=nota_cobranza.num_inscripcion
	where t.num_inscripcion = num_inscr;

-- tipo asociado

create type deuda_cliente as (
cant_recibos_mora integer,
mora real
)

-- consulta para obtener la deuda del cliente
-- de acuerdo al convenio

select sum(cc.monto)
from tb_convenio as c
inner join tb_convenios_suministro as cs
on c.id_corr_convenios = cs.id_corr_convenios
inner join tb_convenio_cuotas as cc
on cc.id_corr_convenios = c.id_corr_convenios
where num_inscripcion = 10252754
and cc.id_estado_cuota_t in ('0')
and c.id_estado_convenio_t = '1'

-- consutla para la busqueda de clientes de acuerdo a la función:
-- Análisis de usuarios

select
num_inscripcion,
nombre_titular_suministro,
f_getdistrito(id_provincia,id_distrito),
f_gettipo_servicio_prestado_cliente(num_inscripcion),
f_getsituacion_conexionagua(num_inscripcion),
(f_getdeuda_cliente(num_inscripcion)).mora,
(f_getdeuda_cliente(num_inscripcion)).cant_recibos_mora
from
tb_suministro
where 
id_provincia = id_prov
and id_distrito = id_dist
and (
nombre_titular_suministro like '%nombre%'
or num_inscripcion = num_inscr
)

-- índices asociados

CREATE INDEX tb_suministro_prov_dist_nombre_numinscr_index
ON tb_suministro (id_provincia,
id_distrito,
nombre_titular_suministro varchar_pattern_ops,
num_inscripcion
)

-- este indíce se crea con las clases operadores por defecto
CREATE INDEX tb_suministro_prov_dist_nombre_numinscr_index_default
ON tb_suministro (id_provincia,
id_distrito,
nombre_titular_suministro,
num_inscripcion
)

-- tipo asociado
create type analisis_de_usuarios_resultado as
(
numero_correlativo integer,
num_inscripcion bigint,
nombre_titular varchar(100),
distrito varchar(30),
tipo_servicio varchar(30),
estado_conexion_agua varchar(20),
mora real,
cant_recibos_mora integer
)

-- CONSULTA LA PROVINCIA Y DISTRITO DE UN cliente

select f_getprovincia(id_provincia),f_getdistrito(id_provincia,id_distrito)
from tb_suministro
where num_inscripcion = nro_inscr

-- tipo asociado

create type prov_dist_cliente as
(provincia varchar(50),
distrito varchar(50)
)


-- vista de analisis de deudas

CREATE VIEW analisis_deudas AS select
id_provincia,
id_distrito,
num_inscripcion,
nombre_titular_suministro as nombre_titular,
f_getdistrito(id_provincia,id_distrito) as distrito,
f_gettipo_servicio_prestado_cliente(num_inscripcion) as servicio_prestado,
f_getsituacion_conexionagua(num_inscripcion) as estado_conexion_agua,
(f_getdeuda_cliente(num_inscripcion)).mora as deuda_facturas,
(f_getdeuda_cliente_por_convenio(num_inscripcion)).mora as deuda_por_convenio,
( (f_getdeuda_cliente(num_inscripcion)).mora + (f_getdeuda_cliente_por_convenio(num_inscripcion)).mora ) as total_deuda,
(f_getdeuda_cliente(num_inscripcion)).cant_recibos_mora as recibos_adeudados
from
tb_suministro

 --consulta para la vista analisis de usuarios
select 
t.num_inscripcion,
t.nom_titular,
d.descripcion_distrito,
s.tipo_serv,
se.sit_serv,
t.mora,
t.cant_recibos_mora
from 
(
	select t.num_inscripcion,
	t.nom_titular,
	t.id_provincia,
	t.id_distrito,
	t.id_tipo_serv,
    	case when t.mora is null then 0 
		else t.cant_recibos_mora
		end as cant_recibos_mora,
		(coalesce(t.mora,0)+coalesce(nota_cobranza.monto_nota_cobranza,0)) as mora  
	from 
	(select   t.num_inscripcion ,t.nombre_titular_suministro as nom_titular,t.id_provincia,t.id_distrito, t.id_tipo_servicio_t as id_tipo_serv,count(case when tipo_documento =1 then t.num_inscripcion else null end) as cant_recibos_mora,sum(t.total_pendiente) as mora
		from (
			select distinct s.num_inscripcion,s.nombre_titular_suministro,s.id_provincia,s.id_distrito,s.id_tipo_servicio_t,
				case when rf.id_corr_tb_nota is null then rf.total_pendiente 
					else case when n.id_tipo_nota =1 then (rf.total_pendiente-n.total_pago_usuario) else (rf.total_pendiente+n.total_pago_usuario) end
				end as total_pendiente,
				case  when rf.id_corr_tb_nota is null then 1 -- recibo facturación
					else 2 -- nota
				end as tipo_documento
				from tb_suministro  as s
				left join tb_recibo_facturacion as rf 
					on s.num_inscripcion =rf.num_inscripcion and (rf.id_estado_recibo_t=1 or (rf.id_corr_tb_nota is not null and rf.id_estado_recibo_t in(5,6)))
				left join (select * from tb_nota where id_estado_nota_t=1) as n
					on rf.id_corr_tb_nota=n.id_corr_tb_nota
				where 				
				s.habilitado =true and s.flag_facturacion=true ) as t				
				group by t.num_inscripcion,t.nombre_titular_suministro,t.id_provincia,t.id_distrito,t.id_tipo_servicio_t
	) as t
	left join (select num_inscripcion,sum(case when id_tipo_origen_nota_cobranza_t='5' then total_pendiente else -total_pendiente end) as monto_nota_cobranza 
	from tb_nota_cobranza where id_estado_recibo_t=1 group by num_inscripcion) as nota_cobranza on t.num_inscripcion=nota_cobranza.num_inscripcion

	where t.id_provincia = 1
	and t.id_distrito = 1
	and t.nom_titular like '%AQUINO%'
	--and t.num_inscripcion = 10164337
) as t
inner join
(
	select id_objeto_tipo, descripcion as tipo_serv
	from tb_objeto_tipo
	where id_tabla_tipo = '3006'
) as s
on t.id_tipo_serv = s.id_objeto_tipo
inner join tb_distrito as d
on t.id_provincia = d.id_provincia and t.id_distrito = d.id_distrito
left join 
(
	select num_inscripcion,id_situacion_conagua_t
	from tb_conexion_agua
) as ca 
on t.num_inscripcion = ca.num_inscripcion
left join(
	select id_objeto_tipo, descripcion as sit_serv
	from tb_objeto_tipo 
	where id_tabla_tipo = '3003'
) as se
on ca.id_situacion_conagua_t = se.id_objeto_tipo;


--consulta para calcular la deuda por convenio
select sum(
case when t.monto is null then 0
else t.monto
end
)
from
(select cc.monto
from tb_convenio as c
inner join tb_convenios_suministro as cs
on c.id_corr_convenios = cs.id_corr_convenios
inner join tb_convenio_cuotas as cc
on c.id_corr_convenios = cc.id_corr_convenios
where cc.id_estado_cuota_t in ('0')
and c.id_estado_convenio_t = '1'
and cs.num_inscripcion = num_inscr
)as t;

CREATE INDEX conexion_agua_index ON  tb_conexion_agua (num_inscripcion)

-- consulta para la vista analisis de deudas

select 
t.num_inscripcion,
t.nom_titular,
d.descripcion_distrito,
s.tipo_serv,
se.sit_serv,
t.mora,
calcular_deuda_convenios(t.num_inscripcion),
t.cant_recibos_mora
from 
(
	select t.num_inscripcion,
	t.nom_titular,
	t.id_provincia,
	t.id_distrito,
	t.id_tipo_serv,
    	case when t.mora is null then 0 
		else t.cant_recibos_mora
		end as cant_recibos_mora,
		(coalesce(t.mora,0)+coalesce(nota_cobranza.monto_nota_cobranza,0)) as mora  
	from 
	(select   t.num_inscripcion ,t.nombre_titular_suministro as nom_titular,t.id_provincia,t.id_distrito, t.id_tipo_servicio_t as id_tipo_serv,count(case when tipo_documento =1 then t.num_inscripcion else null end) as cant_recibos_mora,sum(t.total_pendiente) as mora
		from (
			select distinct s.num_inscripcion,s.nombre_titular_suministro,s.id_provincia,s.id_distrito,s.id_tipo_servicio_t,
				case when rf.id_corr_tb_nota is null then rf.total_pendiente 
					else case when n.id_tipo_nota =1 then (rf.total_pendiente-n.total_pago_usuario) else (rf.total_pendiente+n.total_pago_usuario) end
				end as total_pendiente,
				case  when rf.id_corr_tb_nota is null then 1 -- recibo facturación
					else 2 -- nota
				end as tipo_documento
				from tb_suministro  as s
				left join tb_recibo_facturacion as rf 
					on s.num_inscripcion =rf.num_inscripcion and (rf.id_estado_recibo_t=1 or (rf.id_corr_tb_nota is not null and rf.id_estado_recibo_t in(5,6)))
				left join (select * from tb_nota where id_estado_nota_t=1) as n
				on rf.id_corr_tb_nota=n.id_corr_tb_nota
				where 				
				s.habilitado =true and s.flag_facturacion=true ) as t				
				group by t.num_inscripcion,t.nombre_titular_suministro,t.id_provincia,t.id_distrito,t.id_tipo_servicio_t
	) as t
	left join (select num_inscripcion,sum(case when id_tipo_origen_nota_cobranza_t='5' then total_pendiente else -total_pendiente end) as monto_nota_cobranza 
	from tb_nota_cobranza where id_estado_recibo_t=1 group by num_inscripcion) as nota_cobranza on t.num_inscripcion=nota_cobranza.num_inscripcion

	where t.id_provincia = 1
	and t.id_distrito = 1	
) as t
inner join
(
	select id_objeto_tipo, descripcion as tipo_serv
	from tb_objeto_tipo 
	where id_tabla_tipo = '3006'
) as s
on t.id_tipo_serv = s.id_objeto_tipo
inner join tb_distrito as d
on t.id_provincia = d.id_provincia and t.id_distrito = d.id_distrito
left join 
(
	select num_inscripcion,id_situacion_conagua_t
	from tb_conexion_agua
) as ca 
on t.num_inscripcion = ca.num_inscripcion
left join(
	select id_objeto_tipo, descripcion as sit_serv
	from tb_objeto_tipo 
	where id_tabla_tipo = '3003'
) as se
on ca.id_situacion_conagua_t = se.id_objeto_tipo
where t.mora > 7000 and t.mora < 10000


CREATE INDEX tb_convenios_suministro_index ON tb_convenios_suministro (id_corr_convenios)
CREATE INDEX tb_convenio_cuotas_index ON tb_convenio_cuotas (id_corr_convenios)
CREATE INDEX tb_suministro_prov_dist_index ON tb_suministro (id_provincia,id_distrito)
CREATE INDEX tb_suministro_hab_fact_index ON tb_suministro (habilitado,flag_facturacion)
CREATE INDEX tb_nota_estado_index ON tb_nota (id_estado_nota_t)
CREATE INDEX tb_recibo_facturacion_estado_index ON tb_recibo_facturacion (id_estado_recibo_t)

-- consulta para el análisis de por dirección

select 
t.num_inscripcion,
t.nom_titular,
d.descripcion_distrito,
s.tipo_serv,
se.sit_serv,
t.mora,
t.cant_recibos_mora
from 
(
	select t.num_inscripcion,
	t.nom_titular,
	t.id_provincia,
	t.id_distrito,
	t.id_tipo_serv,	
    	case when t.mora is null then 0 
		else t.cant_recibos_mora
		end as cant_recibos_mora,
		(coalesce(t.mora,0)+coalesce(nota_cobranza.monto_nota_cobranza,0)) as mora  
	from 
	(select   t.num_inscripcion ,t.nombre_titular_suministro as nom_titular,t.id_provincia,t.id_distrito, t.id_tipo_servicio_t as id_tipo_serv,
	g.precalle,g.preurba,
	count(case when tipo_documento =1 then t.num_inscripcion else null end) as cant_recibos_mora,sum(t.total_pendiente) as mora
		from (
			select distinct s.num_inscripcion,s.nombre_titular_suministro,s.id_provincia,s.id_distrito,s.id_tipo_servicio_t,
				case when rf.id_corr_tb_nota is null then rf.total_pendiente 
					else case when n.id_tipo_nota =1 then (rf.total_pendiente-n.total_pago_usuario) else (rf.total_pendiente+n.total_pago_usuario) end
				end as total_pendiente,
				case  when rf.id_corr_tb_nota is null then 1 -- recibo facturación
					else 2 -- nota
				end as tipo_documento
				from tb_suministro  as s
				left join tb_recibo_facturacion as rf 
				on s.num_inscripcion =rf.num_inscripcion and (rf.id_estado_recibo_t=1 or (rf.id_corr_tb_nota is not null and rf.id_estado_recibo_t in(5,6)))
				left join (select * from tb_nota where id_estado_nota_t=1) as n
				on rf.id_corr_tb_nota=n.id_corr_tb_nota
				where s.habilitado =true and s.flag_facturacion=true ) as t
				--
				left join (
					select inscrinro,precalle,preurba
					from gis.ficha_piura								
				) as g
				on g.inscrinro = t.num_inscripcion
				--				
				group by t.num_inscripcion,t.nombre_titular_suministro,t.id_provincia,t.id_distrito,t.id_tipo_servicio_t
				,g.precalle,g.preurba
	) as t
	left join (select num_inscripcion,sum(case when id_tipo_origen_nota_cobranza_t='5' then total_pendiente else -total_pendiente end) as monto_nota_cobranza 
	from tb_nota_cobranza where id_estado_recibo_t=1 group by num_inscripcion) as nota_cobranza on t.num_inscripcion=nota_cobranza.num_inscripcion

	where t.id_provincia = 1
	and t.id_distrito = 1	
	and t.preurba = 143 
	and t.precalle = 1126
) as t
inner join
(
	select id_objeto_tipo, descripcion as tipo_serv
	from tb_objeto_tipo
	where id_tabla_tipo = '3006'
) as s
on t.id_tipo_serv = s.id_objeto_tipo
inner join tb_distrito as d
on t.id_provincia = d.id_provincia and t.id_distrito = d.id_distrito
left join 
(
	select num_inscripcion,id_situacion_conagua_t
	from tb_conexion_agua
) as ca 
on t.num_inscripcion = ca.num_inscripcion
left join(
	select id_objeto_tipo, descripcion as sit_serv
	from tb_objeto_tipo 
	where id_tabla_tipo = '3003'
) as se
on ca.id_situacion_conagua_t = se.id_objeto_tipo;

-- PARA MAÑANA

select * from
tb_via
where id_via = 1126

-- id_via se correponde con precalle
-- id_via no se repite en un distrito

select *
from 
tb_zona
where id_zona = 665

-- id_zona se corresponde con preurba
-- id_zona no se repite en un distrito

select
z.id_zona,
t.abreviatura,
z.descripcion_zona
from tb_zona as z
inner join (
	select id_objeto_tipo,abreviatura 
	from tb_objeto_tipo 
	where id_tabla_tipo = '3001'
) as t
on z.id_tipo_zona_t = t.id_objeto_tipo
where id_provincia = 1
and id_distrito = 1

-- para obtener las vias

select count(distinct id_via)
from 
tb_zona as z
inner join tb_via as v
on z.id_provincia = v.id_provincia and z.id_distrito = v.id_distrito
where id_zona = 665

-- Consulta para análisis de consumos

select 
t.num_inscripcion,
t.nom_titular,
d.descripcion_distrito,
s.tipo_serv,
se.sit_serv,
t.volumen_prom as consumo_promedio,
t.mora,
t.cant_recibos_mora		
from 
(
	select t.num_inscripcion,
	t.nom_titular,
	t.id_provincia,
	t.id_distrito,
	t.id_tipo_serv,
	t.volumen_prom,
	case when t.mora is null then 0 
	else t.cant_recibos_mora
	end as cant_recibos_mora,
	(coalesce(t.mora,0)+coalesce(nota_cobranza.monto_nota_cobranza,0)) as mora  
	from 
	(select   t.num_inscripcion ,t.nombre_titular_suministro as nom_titular,t.id_provincia,t.id_distrito, t.id_tipo_servicio_t as id_tipo_serv,
		t.volumen_prom,
		count(case when tipo_documento =1 then t.num_inscripcion else null end) as cant_recibos_mora,
		sum(t.total_pendiente) as mora
		from (
			select distinct s.num_inscripcion,s.nombre_titular_suministro,s.id_provincia,s.id_distrito,s.id_tipo_servicio_t,
			s.volumen_prom_ult as volumen_prom,
			case when rf.id_corr_tb_nota is null then rf.total_pendiente 
			else case when n.id_tipo_nota =1 then (rf.total_pendiente-n.total_pago_usuario) else (rf.total_pendiente+n.total_pago_usuario) end
			end as total_pendiente,
			case  when rf.id_corr_tb_nota is null then 1 -- recibo facturación
			else 2 -- nota
			end as tipo_documento
			from tb_suministro  as s
			left join tb_recibo_facturacion as rf 
			on s.num_inscripcion =rf.num_inscripcion and (rf.id_estado_recibo_t=1 or (rf.id_corr_tb_nota is not null and rf.id_estado_recibo_t in(5,6)))
			left join (select * from tb_nota where id_estado_nota_t=1) as n
			on rf.id_corr_tb_nota=n.id_corr_tb_nota
			where 				
			s.habilitado =true and s.flag_facturacion=true ) as t				
			group by t.num_inscripcion,t.nombre_titular_suministro,t.id_provincia,t.id_distrito,t.id_tipo_servicio_t,t.volumen_prom
	) as t
	left join (select num_inscripcion,sum(case when id_tipo_origen_nota_cobranza_t=''5'' then total_pendiente else -total_pendiente end) as monto_nota_cobranza 
	from tb_nota_cobranza where id_estado_recibo_t=1 group by num_inscripcion) as nota_cobranza on t.num_inscripcion=nota_cobranza.num_inscripcion

	WHERE id_provincia = 1
	and id_distrito = 1

) as t
inner join
(
	select id_objeto_tipo, descripcion as tipo_serv
	from tb_objeto_tipo
	where id_tabla_tipo = ''3006''
) as s
on t.id_tipo_serv = s.id_objeto_tipo
inner join tb_distrito as d
on t.id_provincia = d.id_provincia and t.id_distrito = d.id_distrito
left join 
(
	select num_inscripcion,id_situacion_conagua_t
	from tb_conexion_agua
) as ca 
on t.num_inscripcion = ca.num_inscripcion
left join(
	select id_objeto_tipo, descripcion as sit_serv
	from tb_objeto_tipo 
	where id_tabla_tipo = ''3003''
) as se
on ca.id_situacion_conagua_t = se.id_objeto_tipo
where t.volumen_prom >= 2 and t.volumen_prom <=3


-- Cónsulta para análisis de consumos según el número de medidor

select 
t.num_inscripcion,
t.nom_titular,
d.descripcion_distrito,
s.tipo_serv,
se.sit_serv,
t.volumen_prom as consumo_promedio,
t.mora,
t.cant_recibos_mora		
from 
(
	select t.num_inscripcion,
	t.nom_titular,
	t.id_provincia,
	t.id_distrito,
	t.id_tipo_serv,
	t.volumen_prom,
	case when t.mora is null then 0 
	else t.cant_recibos_mora
	end as cant_recibos_mora,
	(coalesce(t.mora,0)+coalesce(nota_cobranza.monto_nota_cobranza,0)) as mora  
	from 
	(select   t.num_inscripcion ,t.nombre_titular_suministro as nom_titular,t.id_provincia,t.id_distrito, t.id_tipo_servicio_t as id_tipo_serv,
		t.volumen_prom,
		count(case when tipo_documento =1 then t.num_inscripcion else null end) as cant_recibos_mora,
		sum(t.total_pendiente) as mora
		from (
			select distinct s.num_inscripcion,s.nombre_titular_suministro,s.id_provincia,s.id_distrito,s.id_tipo_servicio_t,
			s.volumen_prom_ult as volumen_prom,
			case when rf.id_corr_tb_nota is null then rf.total_pendiente 
			else case when n.id_tipo_nota =1 then (rf.total_pendiente-n.total_pago_usuario) else (rf.total_pendiente+n.total_pago_usuario) end
			end as total_pendiente,
			case  when rf.id_corr_tb_nota is null then 1 -- recibo facturación
			else 2 -- nota
			end as tipo_documento
			from tb_suministro  as s
			left join tb_recibo_facturacion as rf 
			on s.num_inscripcion =rf.num_inscripcion and (rf.id_estado_recibo_t=1 or (rf.id_corr_tb_nota is not null and rf.id_estado_recibo_t in(5,6)))
			left join (select * from tb_nota where id_estado_nota_t=1) as n
			on rf.id_corr_tb_nota=n.id_corr_tb_nota
			where 				
			s.habilitado =true and s.flag_facturacion=true ) as t				
			group by t.num_inscripcion,t.nombre_titular_suministro,t.id_provincia,t.id_distrito,t.id_tipo_servicio_t,t.volumen_prom
	) as t
	left join (select num_inscripcion,sum(case when id_tipo_origen_nota_cobranza_t='5' then total_pendiente else -total_pendiente end) as monto_nota_cobranza 
	from tb_nota_cobranza where id_estado_recibo_t=1 group by num_inscripcion) as nota_cobranza on t.num_inscripcion=nota_cobranza.num_inscripcion

	WHERE id_provincia = 1
	and id_distrito = 1

) as t
inner join
(
	select id_objeto_tipo, descripcion as tipo_serv
	from tb_objeto_tipo
	where id_tabla_tipo = '3006'
) as s
on t.id_tipo_serv = s.id_objeto_tipo
inner join tb_distrito as d
on t.id_provincia = d.id_provincia and t.id_distrito = d.id_distrito
left join 
(
	select num_inscripcion,id_situacion_conagua_t
	from tb_conexion_agua
) as ca 
on t.num_inscripcion = ca.num_inscripcion
left join(
	select id_objeto_tipo, descripcion as sit_serv
	from tb_objeto_tipo 
	where id_tabla_tipo = '3003'
) as se
on ca.id_situacion_conagua_t = se.id_objeto_tipo
where t.num_inscripcion IN(
	select num_inscripcion
	from tb_historico_lecturas
	where id_medidor = num_medidor -- 'num_medidor' es un parámetro
	order by id_periodo_anio desc,id_periodo_mes desc
	limit 1
)

CREATE INDEX tb_historico_lecturas_id_medidor ON 
public.tb_historico_lecturas
  USING btree
  (id_medidor)


-- de la conexion de agua
select * from tb_objeto_tipo where id_tabla_tipo = '3003' -- id_situacion_conagua_t
select * from tb_objeto_tipo where id_tabla_tipo = '3021' -- id_caracteristica_conagua_t
select * from tb_objeto_tipo where id_tabla_tipo = '3011' -- id_material_conagua_t
select * from tb_objeto_tipo where id_tabla_tipo = '3029' -- id_diametro_red_conagua_t
select * from tb_objeto_tipo where id_tabla_tipo = '3024' -- id_material_caja_agua_t
select * from tb_objeto_tipo where id_tabla_tipo = '3026' -- id_ubicacion_caja_conagua_t
select * from tb_objeto_tipo where id_tabla_tipo = '3015' -- id_diametro_conagua_t
select * from tb_objeto_tipo where id_tabla_tipo = '3012' -- id_tipo_abastecimiento_agua_t
select * from tb_objeto_tipo where id_tabla_tipo = '3028' -- id_entidad_ejecutora_t
select * from tb_objeto_tipo where id_tabla_tipo = '3037' -- id_material_marco_tapa_t
select * from tb_objeto_tipo where id_tabla_tipo = '3038' -- id_origen_conexion_fisica_t


select 
ca.fecha_conagua,
sitca.descripcion as situacion,
cca.descripcion as caracteristica,
matca.descripcion as material_conexion,
dira.descripcion as diametro_red,
ca.longitud_conagua as longitud_conexion,
matcajag.descripcion as material_caja,
ubicajag.descripcion as ubicacion_caja,
diconag.descripcion as diametro_conexion,
tipabs.descripcion as tipo_abastecimiento,
enti.descripcion as entidad_ejecutora,
matmarc.descripcion as material_marco_tapa,
origconfis.descripcion as origen_conexion_fisica
from sp_ca_getconagua(num_inscr) as ca
left join (select id_objeto_tipo,descripcion from tb_objeto_tipo where id_tabla_tipo = '3003' ) as sitca
on ca.id_situacion_conagua_t = sitca.id_objeto_tipo
left join (select id_objeto_tipo,descripcion from tb_objeto_tipo where id_tabla_tipo = '3021') as cca
on ca.id_caracteristica_agua_t = cca.id_objeto_tipo
left join (select id_objeto_tipo,descripcion from tb_objeto_tipo where id_tabla_tipo = '3011') as matca
on ca.id_material_conagua_t = matca.id_objeto_tipo
left join (select id_objeto_tipo,descripcion from tb_objeto_tipo where id_tabla_tipo = '3029') as dira
on ca.id_diametro_red_agua_t = dira.id_objeto_tipo
left join (select id_objeto_tipo,descripcion from tb_objeto_tipo where id_tabla_tipo = '3024') as matcajag
on ca.id_material_caja_agua_t = matcajag.id_objeto_tipo
left join (select id_objeto_tipo,descripcion from tb_objeto_tipo where id_tabla_tipo = '3026') as ubicajag
on ca.id_ubicacion_caja_agua_t = ubicajag.id_objeto_tipo
left join (select id_objeto_tipo,descripcion from tb_objeto_tipo where id_tabla_tipo = '3015') as diconag
on ca.id_diametro_conagua_t = diconag.id_objeto_tipo
left join (select id_objeto_tipo,descripcion from tb_objeto_tipo where id_tabla_tipo = '3012') as tipabs
on ca.id_tipo_abastecimiento_agua_t = tipabs.id_objeto_tipo
left join (select id_objeto_tipo,descripcion from tb_objeto_tipo where id_tabla_tipo = '3028') as enti
on ca.id_entidad_ejecutora_t = enti.id_objeto_tipo
left join (select id_objeto_tipo,descripcion from tb_objeto_tipo where id_tabla_tipo = '3037') as matmarc
on ca.id_material_marco_tapa_t = matmarc.id_objeto_tipo
left join (select id_objeto_tipo,descripcion from tb_objeto_tipo where id_tabla_tipo = '3038') as origconfis
on ca.id_origen_conexion_fisica_t = origconfis.id_objeto_tipo

-- de la conexion de desague
select * from tb_objeto_tipo where id_tabla_tipo = '3022' -- id_caracteristica_condesa_t
select * from tb_objeto_tipo where id_tabla_tipo = '3030' -- id_diametro_red_condesa_t
select * from tb_objeto_tipo where id_tabla_tipo = '3025' -- id_material_caja_desague_t
select * from tb_objeto_tipo where id_tabla_tipo = '3027' -- id_ubicacion_caja_condesa_t
select * from tb_objeto_tipo where id_tabla_tipo = '3014' -- id_material_condesa_t
select * from tb_objeto_tipo where id_tabla_tipo = '3023' -- id_tipo_abastecimiento_desague_t / id_tipo_desague_t
select * from tb_objeto_tipo where id_tabla_tipo = '3013' -- id_diametro_codesa_t
select * from tb_objeto_tipo where id_tabla_tipo = '3031' -- id_tipo_desecho_t
select * from tb_objeto_tipo where id_tabla_tipo = '3028' -- id_entidad_ejecutora_t
select * from tb_objeto_tipo where id_tabla_tipo = '3038' -- id_origen_conexion_fisica_t
select * from tb_objeto_tipo where id_tabla_tipo = '3037' -- id_material_marco_tapa_t
select * from tb_objeto_tipo where id_tabla_tipo = '3041' -- id_estado_caja_desague_t
select * from tb_objeto_tipo where id_tabla_tipo = '3042' -- id_tipo_caja_desague_t


select 
cd.fecha_codesa as fecha_condesa,
sitcon.descripcion as situacion,
ccd.descripcion as caracteristica,
dired.descripcion as diametro_red,
cd.longitud_codesa as longitud_conexion,
matcaja.descripcion as material_caja,
ubicaja.descripcion as ubicacion_caja,
matcon.descripcion as material_conexion,
tipdesa.descripcion as tipo_desague,
dicon.descripcion as diametro_conexion,
tipdesecho.descripcion as tipo_desecho,
enti.descripcion as entidad_ejecutora,
origencon.descripcion as origen_conexion_fisica,
matmarco.descripcion as material_marco_tapa,
estcaja.descripcion as estado_caja,
cd.flag_posee_trampa_grasa as trampa_grasa,
tipcaja.descripcion as tipo_caja
from sp_ca_getcondesague(10164337) as cd
left join (select id_objeto_tipo,descripcion from tb_objeto_tipo where id_tabla_tipo = '3022') as ccd
on cd.id_caracteristica_desague_t = ccd.id_objeto_tipo
left join (select id_objeto_tipo,descripcion from tb_objeto_tipo where id_tabla_tipo = '3003') as sitcon
on cd.id_situacion_codesa_t = sitcon.id_objeto_tipo
left join (select id_objeto_tipo,descripcion from tb_objeto_tipo where id_tabla_tipo = '3030') as dired
on cd.id_diametro_red_colectora_t = dired.id_objeto_tipo
left join (select id_objeto_tipo,descripcion from tb_objeto_tipo where id_tabla_tipo = '3025') as matcaja
on cd.id_material_caja_desague_t = matcaja.id_objeto_tipo
left join (select id_objeto_tipo,descripcion from tb_objeto_tipo where id_tabla_tipo = '3027') as ubicaja
on cd.id_ubicacion_caja_desague_t = ubicaja.id_objeto_tipo
left join (select id_objeto_tipo,descripcion from tb_objeto_tipo where id_tabla_tipo = '3014') as matcon
on cd.id_material_desague_t = matcon.id_objeto_tipo
left join (select id_objeto_tipo,descripcion from tb_objeto_tipo where id_tabla_tipo = '3023') as tipdesa
on cd.id_tipo_desague_t = tipdesa.id_objeto_tipo
left join (select id_objeto_tipo,descripcion from tb_objeto_tipo where id_tabla_tipo = '3013') as dicon
on cd.id_diametro_codesa_t = dicon.id_objeto_tipo
left join (select id_objeto_tipo,descripcion from tb_objeto_tipo where id_tabla_tipo = '3031') as tipdesecho
on cd.id_tipo_desecho_t = tipdesecho.id_objeto_tipo
left join (select id_objeto_tipo,descripcion from tb_objeto_tipo where id_tabla_tipo = '3028') as enti
on cd.id_entidad_ejecutora_t = enti.id_objeto_tipo
left join (select id_objeto_tipo,descripcion from tb_objeto_tipo where id_tabla_tipo = '3038') as origencon
on cd.id_origen_conexion_fisica_t = origencon.id_objeto_tipo
left join (select id_objeto_tipo,descripcion from tb_objeto_tipo where id_tabla_tipo = '3037') as matmarco
on cd.id_material_marco_tapa_t = matmarco.id_objeto_tipo
left join (select id_objeto_tipo,descripcion from tb_objeto_tipo where id_tabla_tipo = '3041') as estcaja
on cd.id_estado_caja_desague_t = estcaja.id_objeto_tipo
left join (select id_objeto_tipo,descripcion from tb_objeto_tipo where id_tabla_tipo = '3042') as tipcaja
on cd.id_tipo_caja_desague_t = tipcaja.id_objeto_tipo

-- CONSULTA PARA ANALISIS SOCIAL

select 
t.num_inscripcion,
t.nom_titular,
d.descripcion_distrito,
s.tipo_serv,
se.sit_serv,
t.mora,
t.cant_recibos_mora
from 
(
	select t.num_inscripcion,
	t.nom_titular,
	t.id_provincia,
	t.id_distrito,
	t.id_tipo_serv,	
    	case when t.mora is null then 0 
		else t.cant_recibos_mora
		end as cant_recibos_mora,
		(coalesce(t.mora,0)+coalesce(nota_cobranza.monto_nota_cobranza,0)) as mora  
	from 
	(select   t.num_inscripcion ,t.nombre_titular_suministro as nom_titular,t.id_provincia,t.id_distrito, t.id_tipo_servicio_t as id_tipo_serv,
		t.id_tipo_construccion_t,t.id_tipo_propiedad_t,t.id_estado_predio_t,
		count(case when tipo_documento =1 then t.num_inscripcion else null end) as cant_recibos_mora,sum(t.total_pendiente) as mora
		from (
			select distinct s.num_inscripcion,s.nombre_titular_suministro,s.id_provincia,s.id_distrito,s.id_tipo_servicio_t,
				p.id_tipo_construccion_t,pc.id_tipo_propiedad_t,p.id_estado_predio_t,
				case when rf.id_corr_tb_nota is null then rf.total_pendiente 
					else case when n.id_tipo_nota =1 then (rf.total_pendiente-n.total_pago_usuario) else (rf.total_pendiente+n.total_pago_usuario) end
				end as total_pendiente,
				case  when rf.id_corr_tb_nota is null then 1 -- recibo facturación
					else 2 -- nota
				end as tipo_documento
				from tb_suministro  as s
				
				left join tb_predio as p
				on s.num_predio = p.num_predio
				left join tb_predio_complementario as pc
				on p.num_predio = pc.num_predio
				
				left join tb_recibo_facturacion as rf 
				on s.num_inscripcion =rf.num_inscripcion and (rf.id_estado_recibo_t=1 or (rf.id_corr_tb_nota is not null and rf.id_estado_recibo_t in(5,6)))
				left join (select * from tb_nota where id_estado_nota_t=1) as n
				on rf.id_corr_tb_nota=n.id_corr_tb_nota
				where 				
				s.habilitado =true and s.flag_facturacion=true ) as t				
				group by t.num_inscripcion,t.nombre_titular_suministro,t.id_provincia,t.id_distrito,t.id_tipo_servicio_t,
				t.id_tipo_construccion_t,t.id_tipo_propiedad_t,t.id_estado_predio_t
	) as t
	left join (select num_inscripcion,sum(case when id_tipo_origen_nota_cobranza_t='5' then total_pendiente else -total_pendiente end) as monto_nota_cobranza 
	from tb_nota_cobranza where id_estado_recibo_t=1 group by num_inscripcion) as nota_cobranza on t.num_inscripcion=nota_cobranza.num_inscripcion
	--parametros de busqueda
	where t.id_provincia = 1
	and t.id_distrito = 1
	and t.id_tipo_serv = cast(1 as varchar(5))
	and t.id_tipo_construccion_t = cast(2 as varchar(5))
	and t.id_tipo_propiedad_t = cast(2 as varchar(5))
	and t.id_estado_predio_t = cast(1 as varchar(5))
	--fin parametros de busqueda
) as t
inner join
(
	select id_objeto_tipo, descripcion as tipo_serv
	from tb_objeto_tipo
	where id_tabla_tipo = '3006'
) as s
on t.id_tipo_serv = s.id_objeto_tipo
inner join tb_distrito as d
on t.id_provincia = d.id_provincia and t.id_distrito = d.id_distrito
left join 
(
	select num_inscripcion,id_situacion_conagua_t
	from tb_conexion_agua
) as ca 
on t.num_inscripcion = ca.num_inscripcion
left join(
	select id_objeto_tipo, descripcion as sit_serv
	from tb_objeto_tipo 
	where id_tabla_tipo = '3003'
) as se
on ca.id_situacion_conagua_t = se.id_objeto_tipo
where ca.id_situacion_conagua_t = cast(1 as varchar(5)) --parametro de busqueda





select 
case when a.existe = 1 then 1 
else (case when b.existe = 1 then 1 
	else 0 end) 
end as existe
from 
(	select count(*) as existe 
	from usuarios 
	where usuario = ''
	and pass = md5('pass') 
	and fch_baja is null
) a, 
(	select 
	case when count(*) > 0 
	then 1 else 0 
	end as existe 
	from usuarios 
	where perfil > 0 
	and pass = md5('pass') 
	and fch_baja is null
) b


--prueba
select 
case when a.existe = 1 then 1 
else (case when b.existe = 1 then 1 
	else 0 end) 
end as existe 
from 
(	select count(*) as existe 
	from usuarios 
	where usuario = '';
	and pass = md5('pass') 
	and fch_baja is null
) a, 
(	select 
	case when count(*) > 0 
	then 1 else 0 
	end as existe 
	from usuarios 
	where perfil > 0 
	and pass = md5('pass') 
	and fch_baja is null
) b

--' or '1' = '1 usuario
--' or 1 = 1 limit 1 ) as a,(select 1 as existe) as b/*
--' limit 1) a,(select 1 as existe) b/*

select * from tb_objeto_tipo where id_tabla_tipo = '3003' --id_situacion_conagua_t (la misma q conagua) / id_situacion_codesa_t
select * from tb_objeto_tipo where id_tabla_tipo = '3014' --id_material_condesa_t / id_material_desague_t
select * from tb_objeto_tipo where id_tabla_tipo = '3013' --id_diametro_codesa_t

select * from tb_objeto_tipo where id_tabla_tipo = '3003' --id_situacion_conagua_t
select * from tb_objeto_tipo where id_tabla_tipo = '3011' --id_material_conagua_t
select * from tb_objeto_tipo where id_tabla_tipo = '3015' --id_diametro_conagua_t


select 
t.num_inscripcion,
t.nom_titular,
d.descripcion_distrito,
s.tipo_serv,
se.sit_serv,
t.mora,
t.cant_recibos_mora
from 
(
	select t.num_inscripcion,
	t.nom_titular,
	t.id_provincia,
	t.id_distrito,
	t.id_tipo_serv,
	t.id_situacion_conagua_t,
    	case when t.mora is null then 0 
		else t.cant_recibos_mora
		end as cant_recibos_mora,
		(coalesce(t.mora,0)+coalesce(nota_cobranza.monto_nota_cobranza,0)) as mora  
	from 
	(select   t.num_inscripcion ,t.nombre_titular_suministro as nom_titular,t.id_provincia,t.id_distrito, t.id_tipo_servicio_t as id_tipo_serv,count(case when tipo_documento =1 then t.num_inscripcion else null end) as cant_recibos_mora,sum(t.total_pendiente) as mora,
		t.id_situacion_conagua_t,
		t.id_material_conagua_t,
		t.id_diametro_conagua_t,
		t.fecha_conagua,
		t.id_situacion_codesa_t,
		t.id_material_desague_t,
		t.id_diametro_codesa_t,
		t.fecha_codesa	
		from (
			select distinct s.num_inscripcion,s.nombre_titular_suministro,s.id_provincia,s.id_distrito,s.id_tipo_servicio_t,
				ca.id_situacion_conagua_t,
				ca.id_material_conagua_t,
				ca.id_diametro_conagua_t,
				ca.fecha_conagua,
				cd.id_situacion_codesa_t,
				cd.id_material_desague_t,
				cd.id_diametro_codesa_t,
				cd.fecha_codesa,
				case when rf.id_corr_tb_nota is null then rf.total_pendiente 
					else case when n.id_tipo_nota =1 then (rf.total_pendiente-n.total_pago_usuario) else (rf.total_pendiente+n.total_pago_usuario) end
				end as total_pendiente,
				case  when rf.id_corr_tb_nota is null then 1 -- recibo facturación
					else 2 -- nota
				end as tipo_documento
				from tb_suministro  as s

				left join tb_conexion_agua as ca
				on s.num_inscripcion = ca.num_inscripcion
				left join tb_conexion_desague as cd
				on s.num_inscripcion = cd.num_inscripcion
				
				left join tb_recibo_facturacion as rf 
					on s.num_inscripcion =rf.num_inscripcion and (rf.id_estado_recibo_t=1 or (rf.id_corr_tb_nota is not null and rf.id_estado_recibo_t in(5,6)))
				left join (select * from tb_nota where id_estado_nota_t=1) as n
					on rf.id_corr_tb_nota=n.id_corr_tb_nota
				where 				
				s.habilitado =true and s.flag_facturacion=true ) as t				
				group by t.num_inscripcion,t.nombre_titular_suministro,t.id_provincia,t.id_distrito,t.id_tipo_servicio_t,
				t.id_situacion_conagua_t,
				t.id_material_conagua_t,
				t.id_diametro_conagua_t,
				t.fecha_conagua,
				t.id_situacion_codesa_t,
				t.id_material_desague_t,
				t.id_diametro_codesa_t,
				t.fecha_codesa
				
	) as t
	left join (select num_inscripcion,sum(case when id_tipo_origen_nota_cobranza_t='5' then total_pendiente else -total_pendiente end) as monto_nota_cobranza 
	from tb_nota_cobranza where id_estado_recibo_t=1 group by num_inscripcion) as nota_cobranza on t.num_inscripcion=nota_cobranza.num_inscripcion

	where t.id_provincia = 1
	and t.id_distrito = 1
	and id_diametro_conagua_t = cast(2 as varchar(5))
	and id_material_conagua_t = cast(2 as varchar(5))
	and id_situacion_conagua_t = cast(1 as varchar(5))
	and id_diametro_codesa_t = cast(1 as varchar(5))
	and id_material_desague_t = cast(1 as varchar(5))
	and id_situacion_codesa_t = cast(1 as varchar(5))
	
) as t
inner join
(
	select id_objeto_tipo, descripcion as tipo_serv
	from tb_objeto_tipo
	where id_tabla_tipo = '3006'
) as s
on t.id_tipo_serv = s.id_objeto_tipo
inner join tb_distrito as d
on t.id_provincia = d.id_provincia and t.id_distrito = d.id_distrito
left join(
	select id_objeto_tipo, descripcion as sit_serv
	from tb_objeto_tipo 
	where id_tabla_tipo = '3003'
) as se
on t.id_situacion_conagua_t = se.id_objeto_tipo
