import type { VehicleType } from '@/lib/vehicleModels';

/** Spanish overlays for model deep-dive SERVICE_TEMPLATES keys. */
export type DeepDiveServiceEs = {
  serviceName: string;
  realityQuote: string;
  focus: string;
  warning: string;
  typeNotes?: Partial<Record<VehicleType, string>>;
};

export const DEEP_DIVE_SERVICE_ES: Record<string, DeepDiveServiceEs> = {
  'four-wheel-drive': {
    serviceName: 'Servicio de 4WD y caja de transferencia',
    realityQuote: 'El 4WD que rechina al engranar estaba bien la temporada de ski pasada — hasta que el fluido de la caja de transferencia se convirtió en lodo.',
    focus: 'fluido de caja de transferencia, actuadores del eje delantero y enganche shift-on-the-fly',
    warning: 'El enganche tardío de 4WD en I-70 a menudo significa fluido contaminado de la caja de transferencia — no un interruptor defectuoso.',
  },
  'ecoboost-diagnostics': {
    serviceName: 'Diagnóstico de motor turbo y EcoBoost',
    realityQuote: 'Las fugas de boost no encienden la luz de check engine hasta que el turbo ya se está quedando sin aceite.',
    focus: 'presión de boost, función de wastegate, fugas del intercooler y trim de combustible de inyección directa',
    warning: 'El cascabeleo metálico en frío en motores EcoBoost puede significar falla de phaser de leva — no solo aceite delgado.',
  },
  'heavy-brake': {
    serviceName: 'Servicio de frenos de servicio pesado',
    realityQuote: 'Los frenos de un camión cargado no perdonan rotores vidriados en el descenso de Georgetown Hill.',
    focus: 'espesor de rotor, deslizamiento de pinzas, humedad del líquido de frenos y compuestos de pastilla según el peso',
    warning: 'El roce metal-con-metal en un camión cargado destruye rotores y pinzas en una sola bajada de montaña.',
  },
  'towing-prep': {
    serviceName: 'Inspección de preparación para remolque',
    realityQuote: 'La transmisión no se queja hasta que está a mitad de Loveland Pass con un cámper en el gancho.',
    focus: 'cableado del hitch, líneas del enfriador de transmisión, hundimiento trasero y condición del fluido del diferencial',
    warning: 'Los códigos de tren motriz que solo aparecen bajo carga son comunes antes de la temporada de remolque — escanee antes de enganchar.',
  },
  'suspension-lift': {
    serviceName: 'Suspensión, lift y alineación',
    realityQuote: 'Un kit de lift sin alineación come llantas más rápido que los baches de Colorado.',
    focus: 'rótulas, bujes de brazo de control, geometría de track bar y alineación según altura de marcha',
    warning: 'El death wobble en camiones elevados se remonta a track bars flojos y amortiguadores de dirección gastados — no solo a las llantas.',
  },
  'fleet-maintenance': {
    serviceName: 'Programas de mantenimiento de flotilla',
    realityQuote: 'El tiempo muerto de flotilla cuesta más que un intercambio de fluido programado.',
    focus: 'servicio de aceite por intervalo, inspecciones de frenos, chequeos multipunto e historial documentado',
    warning: 'El mantenimiento de flotilla aplazado aparece como averías en carretera — no como avisos en el tablero.',
  },
  'awd-service': {
    serviceName: 'Servicio de AWD y tren motriz',
    realityQuote: 'El estremecimiento AWD en mañanas frías es el acoplamiento avisando que el fluido ya pasó su vida útil.',
    focus: 'fluido del diferencial trasero, servicio de acoplamiento Haldex o viscoso, inspección de guardapolvos CV y prueba de transferencia de torque',
    warning: 'El AWD que se traba en giros cerrados a menudo significa fluido degradado del acoplamiento — déle servicio antes de la temporada de ski.',
  },
  'brake-service': {
    serviceName: 'Reparación de frenos y pastillas',
    realityQuote: 'Los rotores alabeados no se arreglan solos con un cambio de pastillas de la tienda de autopartes.',
    focus: 'espesor y descentrado de rotores, pastillas, pines de pinza y humedad del líquido de frenos',
    warning: 'El roce metal-con-metal destruye rotores y pinzas rápido — programe servicio esta semana.',
  },
  'suspension-steering': {
    serviceName: 'Reparación de suspensión y dirección',
    realityQuote: 'El volante que vibra a 70 mph no es solo las llantas — son componentes de dirección gastados.',
    focus: 'extremos de dirección, brazos de control, bujes y geometría de alineación',
    warning: 'El play excesivo en el volante en Colorado suele ser hardware de dirección, no solo balanceo de llantas.',
  },
  'check-engine': {
    serviceName: 'Diagnóstico de luz check engine',
    realityQuote: 'Borrar el código no repara el misfire — solo apaga la luz hasta el siguiente viaje por I-25.',
    focus: 'códigos OBD-II, datos en vivo, sensores y diagnóstico de manejo',
    warning: 'Una luz de check engine intermitente significa deje de manejar y llame — no espere a que se apague sola.',
  },
  'pre-winter': {
    serviceName: 'Inspección pre-invierno de Colorado',
    realityQuote: 'El primer día bajo cero revela cada batería débil y cada líquido olvidado.',
    focus: 'batería, refrigerante, calefacción, limpiaparabrisas y preparación de frenos para invierno',
    warning: 'Las fallas de arranque en invierno de Englewood casi siempre empiezan con una batería que falló la prueba de carga en otoño.',
  },
  'oil-maintenance': {
    serviceName: 'Cambios de aceite y mantenimiento de fábrica',
    realityQuote: 'El intervalo de cada 10,000 millas asume clima suave — Colorado es servicio severo.',
    focus: 'viscosidad de aceite, filtro, fugas e indicadores de mantenimiento de fábrica',
    warning: 'El aceite negro y espeso en Colorado a menudo significa intervalos demasiado largos a esta altitud.',
  },
  'cvt-service': {
    serviceName: 'Servicio de fluido de transmisión CVT',
    realityQuote: 'El estremecimiento de CVT en frío es fluido cansado — no así son las CVT.',
    focus: 'fluido CVT, filtro, temperatura y síntomas de deslizamiento',
    warning: 'Ignorar el estremecimiento de CVT convierte un servicio de fluido en una reconstrucción de transmisión.',
  },
  'transmission-service': {
    serviceName: 'Servicio y diagnóstico de transmisión',
    realityQuote: 'La transmisión no falla de la noche a la mañana — el fluido lo advirtió durante meses.',
    focus: 'condición del fluido, fugas, códigos de solenoide y calidad de cambios',
    warning: 'Cambios retrasados o patinaje bajo carga en I-70 merecen diagnóstico antes de un remolque.',
  },
  'ac-heating': {
    serviceName: 'Recarga de A/C y reparación de clima',
    realityQuote: 'El A/C débil a 5,280 pies no es normal a la altitud — es carga baja o un compresor muriendo.',
    focus: 'carga de refrigerante, fugas, compresor y rendimiento del calentador',
    warning: 'El A/C que sopla tibio en el calor de Denver suele ser fuga o falla del compresor — no solo necesita gas.',
  },
  'engine-diagnostics': {
    serviceName: 'Diagnóstico de motor y manejo',
    realityQuote: 'El código P0300 es el inicio del diagnóstico — no el veredicto.',
    focus: 'códigos, datos en vivo, misfires, combustible y fallas de sensores',
    warning: 'Conducir con misfire activo destruye el catalizador — diagnostique antes de otro trayecto.',
  },
  'pre-purchase': {
    serviceName: 'Inspección previa a la compra',
    realityQuote: 'La inspección previa a la compra cuesta menos que heredar la reparación de otra persona.',
    focus: 'compresión, fugas, frenos, tren motriz e historial de códigos',
    warning: 'Comprar sin inspección en Colorado es apostar contra el óxido, el golpe de elevación y el mantenimiento aplazado.',
  },
  'hybrid-system': {
    serviceName: 'Revisión de batería y sistema híbrido',
    realityQuote: 'Las baterías híbridas odian el calor del estacionamiento y los arranques en frío de Englewood por igual.',
    focus: 'salud de batería HV, inversores, refrigerante y modos de listos para conducir',
    warning: 'Pérdida de autonomía híbrida o fallas de listo a menudo son gestión térmica — no solo batería vieja.',
  },
  'regenerative-brake': {
    serviceName: 'Servicio de frenos regenerativos',
    realityQuote: 'Los híbridos todavía tienen pastillas — el regenerativo no elimina el mantenimiento de frenos.',
    focus: 'pastillas, rotores, transición regenerativa y sensores ABS',
    warning: 'Ruido de frenos en híbridos puede ser pastillas oxidadas por poco uso de fricción — no solo polvo.',
  },
  'inverter-coolant': {
    serviceName: 'Servicio de refrigerante de inversor e híbrido',
    realityQuote: 'El refrigerante del circuito del inversor no es opcional — es protección del módulo.',
    focus: 'nivel y tipo de refrigerante del inversor, bombas y fugas',
    warning: 'Ignorar fugas de refrigerante del inversor cocina electrónica costosa.',
  },
  'ev-battery': {
    serviceName: 'Diagnóstico de batería EV y autonomía',
    realityQuote: 'La ansiedad de autonomía en invierno es física — el frío reduce la capacidad disponible.',
    focus: 'salud de batería, autonomía, gestión térmica y datos de carga',
    warning: 'Caídas repentinas de autonomía merecen escaneo HV — no solo es el clima.',
  },
  'ev-charging': {
    serviceName: 'Inspección del sistema de carga EV',
    realityQuote: 'El cable de carga no es el único punto de falla — el puerto y el cargador a bordo también fallan.',
    focus: 'puerto de carga, cable, OBC y fallas de comunicación',
    warning: 'Carga intermitente a menudo es corrosión del puerto o fallas del piloto — diagnostique antes de cambiar el cable.',
  },
  'thermal-management': {
    serviceName: 'Servicio de gestión térmica de batería',
    realityQuote: 'Las baterías EV sin gestión térmica adecuada envejecen el doble de rápido en ciclos de Colorado.',
    focus: 'bombas de refrigerante, válvulas, radiadores y control de temperatura de batería',
    warning: 'Sobrecalentamiento en carga rápida puede indicar falla del circuito térmico.',
  },
  'performance-brake': {
    serviceName: 'Servicio de frenos de alto rendimiento',
    realityQuote: 'Las pastillas de pista en tráfico de Denver se vidrian — combine el compuesto con el uso real.',
    focus: 'compuesto de pastillas, rotores de alto rendimiento y hardware de pinza',
    warning: 'Vibración después de un día en montaña a menudo es rotor alabeado por calor — mida, no adivine.',
  },
  'turbo-intake': {
    serviceName: 'Servicio de turbo, admisión y boost',
    realityQuote: 'Una fuga de manguera de boost se siente como pérdida de potencia — porque lo es.',
    focus: 'mangueras de boost, intercooler, wastegate y suministro de aceite al turbo',
    warning: 'Cascabeleo de turbo en frío puede ser eje seco — verifique alimentación de aceite de inmediato.',
  },
  'sport-alignment': {
    serviceName: 'Alineación de suspensión deportiva',
    realityQuote: 'La alineación de fábrica no sirve después de un kit de springs deportivos.',
    focus: 'caster, camber, toe y geometría específica de altura',
    warning: 'Desgaste interior de llanta tras springs más bajos es geometría — no solo presión de aire.',
  },
  'european-diagnostics': {
    serviceName: 'Diagnóstico de importados europeos',
    realityQuote: 'Los europeos necesitan datos de fabricante — no un escáner genérico barato.',
    focus: 'códigos de módulos OEM, codificación y actualizaciones de software',
    warning: 'Luces de advertencia múltiples en BMW/Audi/MB a menudo son un módulo — no cinco fallas separadas.',
  },
  'cooling-system': {
    serviceName: 'Servicio de refrigeración y bomba de agua',
    realityQuote: 'El sobrecalentamiento en Lookout Mountain empieza con una pequeña fuga semanas antes.',
    focus: 'bomba de agua, termostato, radiador, mangueras y presión del sistema',
    warning: 'Olor dulce bajo el capó es refrigerante — no lo ignore hasta que el medidor suba.',
  },
  'timing-chain': {
    serviceName: 'Inspección de cadena de distribución',
    realityQuote: 'El cascabeleo de cadena al arrancar no es solo aceite frío.',
    focus: 'estiramiento de cadena, tensores, phasers y presión de aceite',
    warning: 'Ignorar el cascabeleo de cadena puede terminar en contacto pistón-válvula.',
  },
  'gdi-carbon': {
    serviceName: 'Limpieza de carbono de inyección directa',
    realityQuote: 'La inyección directa acumula carbono en las válvulas de admisión — la altitud no ayuda.',
    focus: 'carbono en válvulas de admisión, trim de combustible e inducción',
    warning: 'Misfires irregulares en GDI a menudo son carbono — no solo bobinas.',
  },
  'air-suspension': {
    serviceName: 'Reparación de suspensión neumática Airmatic',
    realityQuote: 'Un rincón caído en la mañana es una bolsa o compresor de aire — no solo una llanta baja.',
    focus: 'bolsas de aire, compresor, líneas y sensores de altura',
    warning: 'El compresor que corre sin parar está compensando una fuga — repare la fuga primero.',
  },
  'ab-service': {
    serviceName: 'Mantenimiento A-Service y B-Service',
    realityQuote: 'A-Service y B-Service existen para que los problemas pequeños no se vuelvan facturas grandes.',
    focus: 'aceite, filtros, frenos, fluidos e inspección multipunto según el intervalo',
    warning: 'Saltar el B-Service suele significar pastillas y fluidos al límite justo antes de un viaje largo.',
  },
  'electrical-system': {
    serviceName: 'Diagnóstico eléctrico y de módulos',
    realityQuote: 'Un drenaje parásito no se encuentra adivinando fusibles — se mide.',
    focus: 'batería, alternador, drenaje parásito y fallas de módulos',
    warning: 'Arranques lentos repetidos destruyen baterías nuevas si la causa raíz sigue ahí.',
  },
  'quattro-awd': {
    serviceName: 'Servicio quattro AWD',
    realityQuote: 'quattro con estremecimiento en frío necesita servicio de diferencial — no solo así es Audi.',
    focus: 'fluidos de diferencial, acoplamiento y ejes CV',
    warning: 'El binding en estacionamientos es señal clásica de fluido AWD vencido.',
  },
  'boxer-engine': {
    serviceName: 'Servicio de motor bóxer Subaru',
    realityQuote: 'Los bóxer Subaru ocultan fugas de aceite hasta que el nivel ya bajó demasiado.',
    focus: 'fugas de aceite, juntas, cabezas y refrigeración del bóxer',
    warning: 'Olor a aceite quemado en Subarus a menudo es tapa de válvulas — revise nivel ya.',
  },
  'head-gasket': {
    serviceName: 'Inspección de empaque de cabeza y refrigeración',
    realityQuote: 'La mezcla de aceite y refrigerante no se arregla sola con un aditivo.',
    focus: 'empaque de cabeza, pruebas de combustión en refrigerante y planitud',
    warning: 'Sobrecalentamiento más mayonesa en la tapa significa deje de manejar y diagnostique.',
  },
  'timing-belt': {
    serviceName: 'Servicio de correa de distribución y bomba de agua',
    realityQuote: 'La correa de distribución es barata comparada con un motor después de que se rompe.',
    focus: 'correa, tensores, rodillos y bomba de agua',
    warning: 'Si el intervalo de correa pasó, asuma que está vencida hasta inspeccionar — especialmente en motores de interferencia.',
  },
  'off-road-inspection': {
    serviceName: 'Evaluación de desgaste off-road',
    realityQuote: 'El polvo del trail muele juntas y fuelles más rápido que el asfalto.',
    focus: 'fuelles, ejes, dirección, escapes y protección inferior',
    warning: 'Un fuelle CV roto después del trail se convierte en junta CV destruida en una semana de conmutar.',
  },
  'diesel-gas-truck': {
    serviceName: 'Servicio de camiones diésel y gasolina',
    realityQuote: 'Los camiones de trabajo necesitan intervalos de camión de trabajo — no de sedán.',
    focus: 'aceite, combustible, frenos, refrigeración y tren motriz bajo carga',
    warning: 'Códigos de camión que solo aparecen remolcando son reales — escanee bajo carga, no solo en vacío.',
  },
  'hemi-diagnostics': {
    serviceName: 'Diagnóstico de motor Hemi y servicio pesado',
    realityQuote: 'El tick del Hemi no es carácter — a menudo son lifters y árbol de levas.',
    focus: 'lifters, árbol de levas, aceite y misfires del Hemi',
    warning: 'Ignorar el tick del Hemi convierte una reparación de valvetrain en un trabajo de árbol completo.',
  },
  'factory-maintenance': {
    serviceName: 'Mantenimiento programado de fábrica',
    realityQuote: 'El mantenimiento de fábrica es más barato que el presupuesto de cómo pasó esto.',
    focus: 'intervalos de fábrica, fluidos, filtros e inspección multipunto',
    warning: 'Los recordatorios del tablero existen por una razón — especialmente en servicio severo de Colorado.',
  },
  'hybrid-ev-service': {
    serviceName: 'Servicio de sistemas híbridos y EV',
    realityQuote: 'Los híbridos y EV todavía necesitan frenos, suspensión y refrigeración — no solo la batería.',
    focus: 'sistemas HV, frenos, refrigeración y electrónica de carga',
    warning: 'Una luz de sistema híbrido no es solo lleve al concesionario — diagnosticamos HV con seguridad aquí.',
  },
  'tsi-tdi-service': {
    serviceName: 'Servicio de motores TSI y TDI',
    realityQuote: 'TSI y TDI fallan distinto — el diagnóstico debe coincidir con el combustible.',
    focus: 'turbo, inyección, DPF/emisiones (TDI) y carbono (TSI)',
    warning: 'Pérdida de potencia en TDI a menudo es DPF o turbo — no solo una limpieza de sensor MAF.',
  },
  'dsg-transmission': {
    serviceName: 'Servicio de transmisión DSG',
    realityQuote: 'El servicio DSG tiene intervalo — saltarlo es la forma más cara de ahorrar.',
    focus: 'fluido DSG, filtro y adaptación del mechatronic',
    warning: 'Cambios bruscos en DSG tras intervalo vencido merecen servicio de fluido antes de cambiar el mechatronic.',
  },
  'awd-4motion': {
    serviceName: 'Servicio 4MOTION AWD',
    realityQuote: '4MOTION con estremecimiento es fluido — hasta que deja de serlo y se vuelve hardware.',
    focus: 'acoplamiento Haldex, diferenciales y ejes',
    warning: 'El estremecimiento en frío de 4MOTION es el intervalo de fluido hablando — escuche.',
  },
  'afm-diagnostics': {
    serviceName: 'Diagnóstico de motor AFM/DFM',
    realityQuote: 'AFM/DFM no es gratis — el lifter colapsado es el costo oculto.',
    focus: 'lifters AFM, árbol de levas, aceite y cobertura de desactivación de cilindros',
    warning: 'Cascabeleo al volver a V8 desde V4 es una bandera clásica de lifter AFM.',
  },
  'truck-maintenance': {
    serviceName: 'Mantenimiento y reparación de camiones',
    realityQuote: 'Los camiones ganan dinero hasta que el mantenimiento aplazado los detiene.',
    focus: 'frenos, fluidos, suspensión y tren motriz para uso de trabajo',
    warning: 'Una luz de freno en un camión de trabajo no es la próxima semana — es hoy.',
  },
  'mercedes-diagnostics': {
    serviceName: 'Diagnóstico Mercedes-Benz',
    realityQuote: 'Mercedes guarda fallas en módulos que los escáneres genéricos nunca ven.',
    focus: 'diagnóstico STAR-level, codificación y sistemas de alto voltaje cuando aplica',
    warning: 'Múltiples luces de advertencia tras un cambio de batería a menudo necesitan codificación — no solo una batería nueva.',
  },
  'scheduled-maintenance': {
    serviceName: 'Mantenimiento programado',
    realityQuote: 'El mantenimiento programado es aburrido — las averías en I-70 no lo son.',
    focus: 'aceite, filtros, frenos, fluidos e inspección según el programa',
    warning: 'Si el indicador de servicio está encendido, el intervalo ya pasó — no espere al próximo viaje a las montañas.',
  },
  'cargo-hvac': {
    serviceName: 'Servicio de HVAC de carga y trasero',
    realityQuote: 'El HVAC trasero que no enfría la carga también está matando el compresor delantero.',
    focus: 'unidad trasera, líneas, puertas de mezcla y carga de refrigerante',
    warning: 'Solo frío adelante y calor atrás suele ser la unidad trasera o puertas de mezcla — no solo falta de gas.',
  },
  'commercial-inspection': {
    serviceName: 'Inspección de vehículos comerciales',
    realityQuote: 'La preparación DOT es documentación y mediciones — no un todo bien verbal.',
    focus: 'frenos, llantas, luces, dirección con documentación fotográfica',
    warning: 'Las auditorías de seguros de flotilla necesitan registros escritos — documentamos cada medición.',
  },
  'sliding-door': {
    serviceName: 'Reparación de puerta corrediza y portón',
    realityQuote: 'Una puerta corrediza que se traba en el frío de Colorado son rodillos gastados — no metal congelado.',
    focus: 'rodillos, cables, alineación de riel, módulos de pestillo y sellos',
    warning: 'Fallos de puerta eléctrica tras lluvia a menudo son corrosión del pestillo — no falla del motor.',
  },
};

export function getDeepDiveServiceEs(serviceId: string): DeepDiveServiceEs | undefined {
  return DEEP_DIVE_SERVICE_ES[serviceId];
}
