import fs from 'fs';

const NAMES = {
  'four-wheel-drive': 'Servicio de 4WD y caja de transferencia',
  'ecoboost-diagnostics': 'Diagnóstico de motor turbo y EcoBoost',
  'heavy-brake': 'Servicio de frenos de servicio pesado',
  'towing-prep': 'Inspección de preparación para remolque',
  'suspension-lift': 'Suspensión, lift y alineación',
  'fleet-maintenance': 'Programas de mantenimiento de flotilla',
  'awd-service': 'Servicio de AWD y tren motriz',
  'brake-service': 'Reparación de frenos y pastillas',
  'suspension-steering': 'Reparación de suspensión y dirección',
  'check-engine': 'Diagnóstico de luz check engine',
  'pre-winter': 'Inspección pre-invierno de Colorado',
  'oil-maintenance': 'Cambios de aceite y mantenimiento de fábrica',
  'cvt-service': 'Servicio de fluido de transmisión CVT',
  'transmission-service': 'Servicio y diagnóstico de transmisión',
  'ac-heating': 'Recarga de A/C y reparación de clima',
  'engine-diagnostics': 'Diagnóstico de motor y manejo',
  'pre-purchase': 'Inspección previa a la compra',
  'hybrid-system': 'Revisión de batería y sistema híbrido',
  'regenerative-brake': 'Servicio de frenos regenerativos',
  'inverter-coolant': 'Servicio de refrigerante de inversor e híbrido',
  'ev-battery': 'Diagnóstico de batería EV y autonomía',
  'ev-charging': 'Inspección del sistema de carga EV',
  'thermal-management': 'Servicio de gestión térmica de batería',
  'performance-brake': 'Servicio de frenos de alto rendimiento',
  'turbo-intake': 'Servicio de turbo, admisión y boost',
  'sport-alignment': 'Alineación de suspensión deportiva',
  'european-diagnostics': 'Diagnóstico de importados europeos',
  'cooling-system': 'Servicio de refrigeración y bomba de agua',
  'timing-chain': 'Inspección de cadena de distribución',
  'gdi-carbon': 'Limpieza de carbono de inyección directa',
  'air-suspension': 'Reparación de suspensión neumática Airmatic',
  'ab-service': 'Mantenimiento A-Service y B-Service',
  'electrical-system': 'Diagnóstico eléctrico y de módulos',
  'quattro-awd': 'Servicio quattro AWD',
  'boxer-engine': 'Servicio de motor bóxer Subaru',
  'head-gasket': 'Inspección de empaque de cabeza y refrigeración',
  'timing-belt': 'Servicio de correa de distribución y bomba de agua',
  'off-road-inspection': 'Evaluación de desgaste off-road',
  'diesel-gas-truck': 'Servicio de camiones diésel y gasolina',
  'hemi-diagnostics': 'Diagnóstico de motor Hemi y servicio pesado',
  'factory-maintenance': 'Mantenimiento programado de fábrica',
  'hybrid-ev-service': 'Servicio de sistemas híbridos y EV',
  'tsi-tdi-service': 'Servicio de motores TSI y TDI',
  'dsg-transmission': 'Servicio de transmisión DSG',
  'awd-4motion': 'Servicio 4MOTION AWD',
  'afm-diagnostics': 'Diagnóstico de motor AFM/DFM',
  'truck-maintenance': 'Mantenimiento y reparación de camiones',
  'mercedes-diagnostics': 'Diagnóstico Mercedes-Benz',
  'scheduled-maintenance': 'Mantenimiento programado',
  'cargo-hvac': 'Servicio de HVAC de carga y trasero',
  'commercial-inspection': 'Inspección de vehículos comerciales',
  'sliding-door': 'Reparación de puerta corrediza y portón',
};

const ES = {
  'four-wheel-drive': {
    q: 'El 4WD que rechina al engranar estaba bien la temporada de ski pasada — hasta que el fluido de la caja de transferencia se convirtió en lodo.',
    f: 'fluido de caja de transferencia, actuadores del eje delantero y enganche shift-on-the-fly',
    w: 'El enganche tardío de 4WD en I-70 a menudo significa fluido contaminado de la caja de transferencia — no un interruptor defectuoso.',
  },
  'ecoboost-diagnostics': {
    q: 'Las fugas de boost no encienden la luz de check engine hasta que el turbo ya se está quedando sin aceite.',
    f: 'presión de boost, función de wastegate, fugas del intercooler y trim de combustible de inyección directa',
    w: 'El cascabeleo metálico en frío en motores EcoBoost puede significar falla de phaser de leva — no solo aceite delgado.',
  },
  'heavy-brake': {
    q: 'Los frenos de un camión cargado no perdonan rotores vidriados en el descenso de Georgetown Hill.',
    f: 'espesor de rotor, deslizamiento de pinzas, humedad del líquido de frenos y compuestos de pastilla según el peso',
    w: 'El roce metal-con-metal en un camión cargado destruye rotores y pinzas en una sola bajada de montaña.',
  },
  'towing-prep': {
    q: 'La transmisión no se queja hasta que está a mitad de Loveland Pass con un cámper en el gancho.',
    f: 'cableado del hitch, líneas del enfriador de transmisión, hundimiento trasero y condición del fluido del diferencial',
    w: 'Los códigos de tren motriz que solo aparecen bajo carga son comunes antes de la temporada de remolque — escanee antes de enganchar.',
  },
  'suspension-lift': {
    q: 'Un kit de lift sin alineación come llantas más rápido que los baches de Colorado.',
    f: 'rótulas, bujes de brazo de control, geometría de track bar y alineación según altura de marcha',
    w: 'El death wobble en camiones elevados se remonta a track bars flojos y amortiguadores de dirección gastados — no solo a las llantas.',
  },
  'fleet-maintenance': {
    q: 'El tiempo muerto de flotilla cuesta más que un intercambio de fluido programado.',
    f: 'servicio de aceite por intervalo, inspecciones de frenos, chequeos multipunto e historial documentado',
    w: 'El mantenimiento de flotilla aplazado aparece como averías en carretera — no como avisos en el tablero.',
  },
  'awd-service': {
    q: 'El estremecimiento AWD en mañanas frías es el acoplamiento avisando que el fluido ya pasó su vida útil.',
    f: 'fluido del diferencial trasero, servicio de acoplamiento Haldex o viscoso, inspección de guardapolvos CV y prueba de transferencia de torque',
    w: 'El AWD que se traba en giros cerrados a menudo significa fluido degradado del acoplamiento — déle servicio antes de la temporada de ski.',
  },
  'brake-service': {
    q: 'Los rotores alabeados no se arreglan solos con un cambio de pastillas de la tienda de autopartes.',
    f: 'espesor y descentrado de rotores, pastillas, pines de pinza y humedad del líquido de frenos',
    w: 'El roce metal-con-metal destruye rotores y pinzas rápido — programe servicio esta semana.',
  },
  'suspension-steering': {
    q: 'El volante que vibra a 70 mph no es solo las llantas — son componentes de dirección gastados.',
    f: 'extremos de dirección, brazos de control, bujes y geometría de alineación',
    w: 'El play excesivo en el volante en Colorado suele ser hardware de dirección, no solo balanceo de llantas.',
  },
  'check-engine': {
    q: 'Borrar el código no repara el misfire — solo apaga la luz hasta el siguiente viaje por I-25.',
    f: 'códigos OBD-II, datos en vivo, sensores y diagnóstico de manejo',
    w: 'Una luz de check engine intermitente significa deje de manejar y llame — no espere a que se apague sola.',
  },
  'pre-winter': {
    q: 'El primer día bajo cero revela cada batería débil y cada líquido olvidado.',
    f: 'batería, refrigerante, calefacción, limpiaparabrisas y preparación de frenos para invierno',
    w: 'Las fallas de arranque en invierno de Englewood casi siempre empiezan con una batería que falló la prueba de carga en otoño.',
  },
  'oil-maintenance': {
    q: 'El intervalo de cada 10,000 millas asume clima suave — Colorado es servicio severo.',
    f: 'viscosidad de aceite, filtro, fugas e indicadores de mantenimiento de fábrica',
    w: 'El aceite negro y espeso en Colorado a menudo significa intervalos demasiado largos a esta altitud.',
  },
  'cvt-service': {
    q: 'El estremecimiento de CVT en frío es fluido cansado — no así son las CVT.',
    f: 'fluido CVT, filtro, temperatura y síntomas de deslizamiento',
    w: 'Ignorar el estremecimiento de CVT convierte un servicio de fluido en una reconstrucción de transmisión.',
  },
  'transmission-service': {
    q: 'La transmisión no falla de la noche a la mañana — el fluido lo advirtió durante meses.',
    f: 'condición del fluido, fugas, códigos de solenoide y calidad de cambios',
    w: 'Cambios retrasados o patinaje bajo carga en I-70 merecen diagnóstico antes de un remolque.',
  },
  'ac-heating': {
    q: 'El A/C débil a 5,280 pies no es normal a la altitud — es carga baja o un compresor muriendo.',
    f: 'carga de refrigerante, fugas, compresor y rendimiento del calentador',
    w: 'El A/C que sopla tibio en el calor de Denver suele ser fuga o falla del compresor — no solo necesita gas.',
  },
  'engine-diagnostics': {
    q: 'El código P0300 es el inicio del diagnóstico — no el veredicto.',
    f: 'códigos, datos en vivo, misfires, combustible y fallas de sensores',
    w: 'Conducir con misfire activo destruye el catalizador — diagnostique antes de otro trayecto.',
  },
  'pre-purchase': {
    q: 'La inspección previa a la compra cuesta menos que heredar la reparación de otra persona.',
    f: 'compresión, fugas, frenos, tren motriz e historial de códigos',
    w: 'Comprar sin inspección en Colorado es apostar contra el óxido, el golpe de elevación y el mantenimiento aplazado.',
  },
  'hybrid-system': {
    q: 'Las baterías híbridas odian el calor del estacionamiento y los arranques en frío de Englewood por igual.',
    f: 'salud de batería HV, inversores, refrigerante y modos de listos para conducir',
    w: 'Pérdida de autonomía híbrida o fallas de listo a menudo son gestión térmica — no solo batería vieja.',
  },
  'regenerative-brake': {
    q: 'Los híbridos todavía tienen pastillas — el regenerativo no elimina el mantenimiento de frenos.',
    f: 'pastillas, rotores, transición regenerativa y sensores ABS',
    w: 'Ruido de frenos en híbridos puede ser pastillas oxidadas por poco uso de fricción — no solo polvo.',
  },
  'inverter-coolant': {
    q: 'El refrigerante del circuito del inversor no es opcional — es protección del módulo.',
    f: 'nivel y tipo de refrigerante del inversor, bombas y fugas',
    w: 'Ignorar fugas de refrigerante del inversor cocina electrónica costosa.',
  },
  'ev-battery': {
    q: 'La ansiedad de autonomía en invierno es física — el frío reduce la capacidad disponible.',
    f: 'salud de batería, autonomía, gestión térmica y datos de carga',
    w: 'Caídas repentinas de autonomía merecen escaneo HV — no solo es el clima.',
  },
  'ev-charging': {
    q: 'El cable de carga no es el único punto de falla — el puerto y el cargador a bordo también fallan.',
    f: 'puerto de carga, cable, OBC y fallas de comunicación',
    w: 'Carga intermitente a menudo es corrosión del puerto o fallas del piloto — diagnostique antes de cambiar el cable.',
  },
  'thermal-management': {
    q: 'Las baterías EV sin gestión térmica adecuada envejecen el doble de rápido en ciclos de Colorado.',
    f: 'bombas de refrigerante, válvulas, radiadores y control de temperatura de batería',
    w: 'Sobrecalentamiento en carga rápida puede indicar falla del circuito térmico.',
  },
  'performance-brake': {
    q: 'Las pastillas de pista en tráfico de Denver se vidrian — combine el compuesto con el uso real.',
    f: 'compuesto de pastillas, rotores de alto rendimiento y hardware de pinza',
    w: 'Vibración después de un día en montaña a menudo es rotor alabeado por calor — mida, no adivine.',
  },
  'turbo-intake': {
    q: 'Una fuga de manguera de boost se siente como pérdida de potencia — porque lo es.',
    f: 'mangueras de boost, intercooler, wastegate y suministro de aceite al turbo',
    w: 'Cascabeleo de turbo en frío puede ser eje seco — verifique alimentación de aceite de inmediato.',
  },
  'sport-alignment': {
    q: 'La alineación de fábrica no sirve después de un kit de springs deportivos.',
    f: 'caster, camber, toe y geometría específica de altura',
    w: 'Desgaste interior de llanta tras springs más bajos es geometría — no solo presión de aire.',
  },
  'european-diagnostics': {
    q: 'Los europeos necesitan datos de fabricante — no un escáner genérico barato.',
    f: 'códigos de módulos OEM, codificación y actualizaciones de software',
    w: 'Luces de advertencia múltiples en BMW/Audi/MB a menudo son un módulo — no cinco fallas separadas.',
  },
  'cooling-system': {
    q: 'El sobrecalentamiento en Lookout Mountain empieza con una pequeña fuga semanas antes.',
    f: 'bomba de agua, termostato, radiador, mangueras y presión del sistema',
    w: 'Olor dulce bajo el capó es refrigerante — no lo ignore hasta que el medidor suba.',
  },
  'timing-chain': {
    q: 'El cascabeleo de cadena al arrancar no es solo aceite frío.',
    f: 'estiramiento de cadena, tensores, phasers y presión de aceite',
    w: 'Ignorar el cascabeleo de cadena puede terminar en contacto pistón-válvula.',
  },
  'gdi-carbon': {
    q: 'La inyección directa acumula carbono en las válvulas de admisión — la altitud no ayuda.',
    f: 'carbono en válvulas de admisión, trim de combustible e inducción',
    w: 'Misfires irregulares en GDI a menudo son carbono — no solo bobinas.',
  },
  'air-suspension': {
    q: 'Un rincón caído en la mañana es una bolsa o compresor de aire — no solo una llanta baja.',
    f: 'bolsas de aire, compresor, líneas y sensores de altura',
    w: 'El compresor que corre sin parar está compensando una fuga — repare la fuga primero.',
  },
  'ab-service': {
    q: 'A-Service y B-Service existen para que los problemas pequeños no se vuelvan facturas grandes.',
    f: 'aceite, filtros, frenos, fluidos e inspección multipunto según el intervalo',
    w: 'Saltar el B-Service suele significar pastillas y fluidos al límite justo antes de un viaje largo.',
  },
  'electrical-system': {
    q: 'Un drenaje parásito no se encuentra adivinando fusibles — se mide.',
    f: 'batería, alternador, drenaje parásito y fallas de módulos',
    w: 'Arranques lentos repetidos destruyen baterías nuevas si la causa raíz sigue ahí.',
  },
  'quattro-awd': {
    q: 'quattro con estremecimiento en frío necesita servicio de diferencial — no solo así es Audi.',
    f: 'fluidos de diferencial, acoplamiento y ejes CV',
    w: 'El binding en estacionamientos es señal clásica de fluido AWD vencido.',
  },
  'boxer-engine': {
    q: 'Los bóxer Subaru ocultan fugas de aceite hasta que el nivel ya bajó demasiado.',
    f: 'fugas de aceite, juntas, cabezas y refrigeración del bóxer',
    w: 'Olor a aceite quemado en Subarus a menudo es tapa de válvulas — revise nivel ya.',
  },
  'head-gasket': {
    q: 'La mezcla de aceite y refrigerante no se arregla sola con un aditivo.',
    f: 'empaque de cabeza, pruebas de combustión en refrigerante y planitud',
    w: 'Sobrecalentamiento más mayonesa en la tapa significa deje de manejar y diagnostique.',
  },
  'timing-belt': {
    q: 'La correa de distribución es barata comparada con un motor después de que se rompe.',
    f: 'correa, tensores, rodillos y bomba de agua',
    w: 'Si el intervalo de correa pasó, asuma que está vencida hasta inspeccionar — especialmente en motores de interferencia.',
  },
  'off-road-inspection': {
    q: 'El polvo del trail muele juntas y fuelles más rápido que el asfalto.',
    f: 'fuelles, ejes, dirección, escapes y protección inferior',
    w: 'Un fuelle CV roto después del trail se convierte en junta CV destruida en una semana de conmutar.',
  },
  'diesel-gas-truck': {
    q: 'Los camiones de trabajo necesitan intervalos de camión de trabajo — no de sedán.',
    f: 'aceite, combustible, frenos, refrigeración y tren motriz bajo carga',
    w: 'Códigos de camión que solo aparecen remolcando son reales — escanee bajo carga, no solo en vacío.',
  },
  'hemi-diagnostics': {
    q: 'El tick del Hemi no es carácter — a menudo son lifters y árbol de levas.',
    f: 'lifters, árbol de levas, aceite y misfires del Hemi',
    w: 'Ignorar el tick del Hemi convierte una reparación de valvetrain en un trabajo de árbol completo.',
  },
  'factory-maintenance': {
    q: 'El mantenimiento de fábrica es más barato que el presupuesto de cómo pasó esto.',
    f: 'intervalos de fábrica, fluidos, filtros e inspección multipunto',
    w: 'Los recordatorios del tablero existen por una razón — especialmente en servicio severo de Colorado.',
  },
  'hybrid-ev-service': {
    q: 'Los híbridos y EV todavía necesitan frenos, suspensión y refrigeración — no solo la batería.',
    f: 'sistemas HV, frenos, refrigeración y electrónica de carga',
    w: 'Una luz de sistema híbrido no es solo lleve al concesionario — diagnosticamos HV con seguridad aquí.',
  },
  'tsi-tdi-service': {
    q: 'TSI y TDI fallan distinto — el diagnóstico debe coincidir con el combustible.',
    f: 'turbo, inyección, DPF/emisiones (TDI) y carbono (TSI)',
    w: 'Pérdida de potencia en TDI a menudo es DPF o turbo — no solo una limpieza de sensor MAF.',
  },
  'dsg-transmission': {
    q: 'El servicio DSG tiene intervalo — saltarlo es la forma más cara de ahorrar.',
    f: 'fluido DSG, filtro y adaptación del mechatronic',
    w: 'Cambios bruscos en DSG tras intervalo vencido merecen servicio de fluido antes de cambiar el mechatronic.',
  },
  'awd-4motion': {
    q: '4MOTION con estremecimiento es fluido — hasta que deja de serlo y se vuelve hardware.',
    f: 'acoplamiento Haldex, diferenciales y ejes',
    w: 'El estremecimiento en frío de 4MOTION es el intervalo de fluido hablando — escuche.',
  },
  'afm-diagnostics': {
    q: 'AFM/DFM no es gratis — el lifter colapsado es el costo oculto.',
    f: 'lifters AFM, árbol de levas, aceite y cobertura de desactivación de cilindros',
    w: 'Cascabeleo al volver a V8 desde V4 es una bandera clásica de lifter AFM.',
  },
  'truck-maintenance': {
    q: 'Los camiones ganan dinero hasta que el mantenimiento aplazado los detiene.',
    f: 'frenos, fluidos, suspensión y tren motriz para uso de trabajo',
    w: 'Una luz de freno en un camión de trabajo no es la próxima semana — es hoy.',
  },
  'mercedes-diagnostics': {
    q: 'Mercedes guarda fallas en módulos que los escáneres genéricos nunca ven.',
    f: 'diagnóstico STAR-level, codificación y sistemas de alto voltaje cuando aplica',
    w: 'Múltiples luces de advertencia tras un cambio de batería a menudo necesitan codificación — no solo una batería nueva.',
  },
  'scheduled-maintenance': {
    q: 'El mantenimiento programado es aburrido — las averías en I-70 no lo son.',
    f: 'aceite, filtros, frenos, fluidos e inspección según el programa',
    w: 'Si el indicador de servicio está encendido, el intervalo ya pasó — no espere al próximo viaje a las montañas.',
  },
  'cargo-hvac': {
    q: 'El HVAC trasero que no enfría la carga también está matando el compresor delantero.',
    f: 'unidad trasera, líneas, puertas de mezcla y carga de refrigerante',
    w: 'Solo frío adelante y calor atrás suele ser la unidad trasera o puertas de mezcla — no solo falta de gas.',
  },
  'commercial-inspection': {
    q: 'La preparación DOT es documentación y mediciones — no un todo bien verbal.',
    f: 'frenos, llantas, luces, dirección con documentación fotográfica',
    w: 'Las auditorías de seguros de flotilla necesitan registros escritos — documentamos cada medición.',
  },
  'sliding-door': {
    q: 'Una puerta corrediza que se traba en el frío de Colorado son rodillos gastados — no metal congelado.',
    f: 'rodillos, cables, alineación de riel, módulos de pestillo y sellos',
    w: 'Fallos de puerta eléctrica tras lluvia a menudo son corrosión del pestillo — no falla del motor.',
  },
};

const src = fs.readFileSync('lib/modelDeepDiveContent.ts', 'utf8');
const re =
  /'([a-z0-9-]+)': \{\s*serviceName: '((?:\\'|[^'])*)',\s*realityQuote: '((?:\\'|[^'])*)',\s*relatedServiceSlug: '((?:\\'|[^'])*)',\s*focus: '((?:\\'|[^'])*)',\s*warning: '((?:\\'|[^'])*)'/gs;
const ids = [];
let m;
while ((m = re.exec(src))) ids.push(m[1]);
console.log('parsed', ids.length);
if (ids.length !== 52) process.exit(1);

function esc(s) {
  return s.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
}

let out = `import type { VehicleType } from '@/lib/vehicleModels';

/** Spanish overlays for model deep-dive SERVICE_TEMPLATES keys. */
export type DeepDiveServiceEs = {
  serviceName: string;
  realityQuote: string;
  focus: string;
  warning: string;
  typeNotes?: Partial<Record<VehicleType, string>>;
};

export const DEEP_DIVE_SERVICE_ES: Record<string, DeepDiveServiceEs> = {
`;

for (const id of ids) {
  const es = ES[id];
  const name = NAMES[id];
  if (!es || !name) {
    console.error('missing', id);
    process.exit(1);
  }
  out += `  '${id}': {
    serviceName: '${esc(name)}',
    realityQuote: '${esc(es.q)}',
    focus: '${esc(es.f)}',
    warning: '${esc(es.w)}',
  },
`;
}
out += `};

export function getDeepDiveServiceEs(serviceId: string): DeepDiveServiceEs | undefined {
  return DEEP_DIVE_SERVICE_ES[serviceId];
}
`;

fs.mkdirSync('lib/i18n', { recursive: true });
fs.writeFileSync('lib/i18n/deepDiveServiceEs.ts', out);
console.log('wrote lib/i18n/deepDiveServiceEs.ts');
