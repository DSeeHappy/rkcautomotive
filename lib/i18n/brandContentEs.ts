/**
 * Spanish overlays for homepage brand diagnostic panels.
 * Proper nouns (Toyota, Camry, EcoBoost, etc.) stay as-is where natural.
 */
export type BrandContentEs = {
  failureProfiles: { title: string; description: string }[];
  buyerWarning: string;
  coloradoNotes: string;
  higherScrutiny: string;
  coloradoAngle: string;
};

export const BRAND_CONTENT_ES: Record<string, BrandContentEs> = {
  toyota: {
    failureProfiles: [
      {
        title: 'Falla de anillos 2.4L (2AZ-FE) y 2.5L (2AR-FE)',
        description:
          'Consumo severo de aceite porque los orificios de retorno en las ranuras de los anillos se tapan con carbón, dejando sin lubricación las paredes del cilindro y destruyendo los convertidores catalíticos.',
      },
      {
        title: 'Carbón por inyección directa (sistemas D-4S)',
        description:
          'Los inyectores auxiliares de puerto pueden desbalancearse y causar hesitaciones fuertes en arranques en frío.',
      },
      {
        title: 'Actuadores AWD de torque vectoring dinámico',
        description:
          'Los embragues de desconexión del eje en RAV4/Highlander modernos se traban y producen gemidos fuertes en curvas cerradas.',
      },
    ],
    buyerWarning:
      'Evite Toyota 2007–2011 con motor 2.4L 2AZ-FE por consumo catastrófico de aceite. En V6 3.5L usados (2GR-FE), inspeccione rigurosamente la tapa de distribución por la famosa fuga de aceite del lado del pasajero (alta mano de obra).',
    coloradoNotes:
      'Conducir en montaña exige muchos cambios bajando; fluido descuidado en transmisiones Toyota WS selladas acelera el glazeado del convertidor de torque.',
    higherScrutiny:
      'Era de consumo de aceite 2AZ-FE 2007–2011; filtración en tapa de distribución 3.5L en lotes usados; hesitación en frío D-4S en RAV4/Highlander nuevos.',
    coloradoAngle:
      'Las automáticas WS selladas odian los cambios sostenidos en I-70 — el servicio de fluido antes de remolcar en montaña es un seguro barato.',
  },
  honda: {
    failureProfiles: [
      {
        title: 'Dilución de aceite 1.5L Turbo (L15B7)',
        description:
          'Combustible crudo pasa los anillos de baja tensión en ralentí frío, se mezcla con el aceite, baja la viscosidad y desgasta prematuramente los lóbulos del árbol de levas.',
      },
      {
        title: 'Falla de desactivación de cilindros VCM V6',
        description:
          'Los V6 Earth Dreams 3.5L apagan cilindros para ahorrar combustible y desbalancean el motor. Esto destroza soportes hidráulicos y causa blow-by que ensucia bujías en cilindros 1–4.',
      },
      {
        title: 'Desgaste planetario en automática de 10 velocidades',
        description:
          'Caídas erráticas de presión hidráulica causan cambios duros de 3ª a 4ª bajo carga.',
      },
    ],
    buyerWarning:
      'Evite CR-V y Civic Honda 2016–2021 con 1.5L Turbo si solo hacen trayectos cortos en invierno (alto riesgo de dilución). Evite cualquier V6 Honda sin inspeccionar bujías ensuciadas a menos que tengan bypass VCM.',
    coloradoNotes:
      'En inviernos bajo cero en Denver, el 1.5L turbo tarda en alcanzar temperatura óptima en trayectos cortos, empeorando el ciclo de dilución combustible-en-aceite.',
    higherScrutiny:
      'CR-V/Civic 1.5L turbo 2016–2021 en trayectos cortos de invierno (dilución); V6 Earth Dreams con VCM y bujías ensuciadas sin bypass.',
    coloradoAngle:
      'Saltos matutinos bajo cero al Park-n-Ride no dejan calentar del todo el 1.5L turbo — la dilución aparece más rápido aquí que en la costa.',
  },
  ford: {
    failureProfiles: [
      {
        title: 'Ruido de phaser de levas EcoBoost 3.5L / 2.7L',
        description:
          'La presión de aceite no bloquea los sprockets VCT en arranques fríos, causando un golpe metálico severo que estira la cadena de distribución.',
      },
      {
        title: 'Distorsión del cuerpo de válvulas transmisión 10R80',
        description:
          'El buje del tambor de embrague CDF se mueve internamente en la 10 velocidades, bloquea canales hidráulicos y causa cacería de marchas y pérdida total de potencia.',
      },
      {
        title: 'Desastre de bomba de agua interna 3.5L Duratec',
        description:
          'La bomba va dentro de la tapa de distribución impulsada por la cadena. Cuando fallan los sellos, tira refrigerante al cárter y destruye los cojinetes principales al instante.',
      },
    ],
    buyerWarning:
      'Evite Explorer o Edge Ford usados con V6 3.5L Cyclone/Duratec sin prueba de que la bomba interna fue reemplazada. Evite F-150 10 velocidades 2017–2019 tempranos con cambios erráticos sin leer valores de aprendizaje adaptativo.',
    coloradoNotes:
      'Remolcar pesado por el corredor I-70 dispara la temperatura del fluido en el bloque 10R80; los circuitos de enfriamiento auxiliar externos son críticos.',
    higherScrutiny:
      'Ruido de phaser EcoBoost en frío; bomba de agua interna Explorer/Edge 3.5L; cacería de cambios 10R80 2017–2019 tempranos.',
    coloradoAngle:
      'Subir un tráiler por I-70 cocina el fluido de 10 velocidades — el enfriamiento auxiliar de transmisión no es opcional en viajes repetidos a la montaña.',
  },
  chevrolet: {
    failureProfiles: [
      {
        title: 'Colapso de lifters EcoTec3 5.3L / 6.2L (AFM/DFM)',
        description:
          'Los pines de bloqueo internos de los lifters de gestión de combustible se traban. El lifter gira y daña el lóbulo del árbol de levas, enviando viruta por los conductos de aceite.',
      },
      {
        title: 'Temblor del convertidor 8L90 de 8 velocidades',
        description:
          'La selección higroscópica de fluido hace que el embrague del convertidor ciclice y patine, creando vibración fuerte como manejar sobre bandas sonoras.',
      },
      {
        title: 'Congelamiento PCV 1.5L Turbo (LYX)',
        description:
          'El sistema PCV acumula humedad que se congela en frío extremo, sube la presión del cárter y revienta el sello trasero del cigüeñal.',
      },
    ],
    buyerWarning:
      'Evite camionetas Chevy/GMC 2014–2021 con V8 5.3L o 6.2L a menos que tengan delete mecánico de lifters o historial extenso de tren de válvulas. Evite cualquier camioneta GM de 8 velocidades con temblor sobre 40 MPH.',
    coloradoNotes:
      'El diferencial de presión en altitud más los pasos congelados acelera la humedad dentro de líneas PCV de turbos GM de poca cilindrada.',
    higherScrutiny:
      'Colapso de lifters AFM/DFM 5.3L/6.2L 2014–2021; temblor de convertidor 8L90 sobre 40 mph; congelamiento PCV 1.5L turbo en frío extremo.',
    coloradoAngle:
      'Cambios de altitud y pasos congelados cargan de humedad las líneas PCV — los sellos traseros reventados aparecen cada invierno.',
  },
  bmw: {
    failureProfiles: [
      {
        title: 'Guías de cadena N20 / N26 que se rompen',
        description:
          'Las guías plásticas se vuelven frágiles por el calor, se parten, caen al tubo de succión del cárter, dejan el motor sin aceite y causan gripado total.',
      },
      {
        title: 'Fallas frágiles del ensamble de enfriamiento plástico',
        description:
          'Carcasas de filtro de aceite, cuellos de radiador y bloques de termostato se agrietan con el ciclo térmico normal y causan pérdida total repentina de refrigerante.',
      },
      {
        title: 'Diafragma PCV de tapa de válvulas B58 / N55',
        description:
          'La válvula PCV integrada en la tapa plástica se rasga, aspira aceite al múltiple de admisión, silba fuerte y echa humo blanco por el escape.',
      },
    ],
    buyerWarning:
      'Evite BMW 2012–2015 con motor N20/N26 de 4 cilindros a menos que la cadena y el ensamble de bomba de aceite se hayan actualizado a los componentes rediseñados.',
    coloradoNotes:
      'Las pendientes de montaña llevan los turbos a temperaturas extremas; componentes plásticos de enfriamiento que sobreviven a nivel del mar fallan rápido bajo presión térmica en altitud en Colorado.',
    higherScrutiny:
      'Guías de cadena N20/N26 2012–2015; carcasas plásticas de enfriamiento frágiles; rasgaduras del diafragma PCV N55 e ingestión de aceite.',
    coloradoAngle:
      'Las pendientes largas de I-70 llevan la temperatura del turbo más allá de lo que toleran las piezas de estados planos — aquí aparecen fugas primero.',
  },
  mercedes: {
    failureProfiles: [
      {
        title: 'Detonación de pistón M274 2.0L Turbo',
        description:
          'La pre-ignición a baja velocidad (LSPI) agrieta el pasador o asientos de anillo en el pistón 1 o 2 bajo aceleración suave, con pérdida inmediata de compresión y fallos graves.',
      },
      {
        title: 'Fugas de aire en struts AirMATIC',
        description:
          'Las vejigas de goma desarrollan grietas por resequedad en los pliegues; el compresor corre sin parar hasta quemar el motor de la bomba.',
      },
      {
        title: 'Sensores de velocidad placa conductora 7G-Tronic (722.9)',
        description:
          'Los sensores integrados en la placa conductora interna fallan eléctricamente y bloquean la transmisión en 2ª (modo limp-home).',
      },
    ],
    buyerWarning:
      'Evite C300 y GLC300 2015–2018 con motor M274 2.0L sin prueba de compresión relativa para descartar grietas finas en pistones.',
    coloradoNotes:
      'Los cambios extremos de temperatura del calor diurno al frío bajo cero en montaña aceleran el agrietamiento del caucho en sistemas AirMATIC premium.',
    higherScrutiny:
      'Grietas de pistón M274 2.0L 2015–2018; modo limp por placa conductora 722.9; vejigas AirMATIC que matan el compresor.',
    coloradoAngle:
      'Tardes cálidas y noches bajo cero en montaña agrietan las vejigas de aire más rápido de lo que esperan los dueños.',
  },
  audi: {
    failureProfiles: [
      {
        title: 'Falla de anillos raspadores 2.0T (EA888)',
        description:
          'El lavado por inyección directa más un diseño pobre de anillo raspador causa consumo masivo de aceite (1 cuarto cada 500 millas) y carbón pesado en las válvulas de admisión.',
      },
      {
        title: 'Ruido de cadena 3.0T V6 sobrealimentado',
        description:
          'Los tensores superiores pierden presión de aceite durante la noche; el ruido metálico al arrancar en frío eventualmente salta dientes y dobla válvulas.',
      },
      {
        title: 'Corrosión del circuito mecatrónico DSG DL501',
        description:
          'Residuos en el fluido desgastan las pistas de solenoides internos, causando cambios bajando duros y pérdida de marchas impares o pares.',
      },
    ],
    buyerWarning:
      'Evite Audi 2009–2015 con 2.0T sin prueba documentada de pistones y anillos actualizados. Escuche siempre un cascabeleo metálico de ~2 segundos en arranque frío al evaluar cualquier 3.0T.',
    coloradoNotes:
      'El carbón en válvulas de admisión puede robar hasta 20% de potencia — una pérdida que se amplifica mucho en el aire fino de Mile High.',
    higherScrutiny:
      'Consumo de aceite 2.0T 2009–2015; cascabeleo de cadena en frío 3.0T; corrosión mecatrónica DSG DL501 y cambios duros.',
    coloradoAngle:
      'Válvulas de admisión ahogadas de carbón le roban potencia que no puede sobrar a Mile High — la hesitación se siente el doble aquí.',
  },
  nissan: {
    failureProfiles: [
      {
        title: 'Desgaste del cuerpo de válvulas CVT Jatco',
        description:
          'La válvula de control de flujo corta el aluminio del cuerpo de válvulas, pierde presión interna, patina la correa y produce el famoso “CVT judder”.',
      },
      {
        title: 'Aullido de cadena de distribución VQ35DE',
        description:
          'Los zapatos de la cadena secundaria se desgastan por completo; la cadena metálica roza el pistón del tensor hidráulico y produce un aullido agudo tipo sirena.',
      },
      {
        title: 'Contaminación cruzada Frontier/Pathfinder (SMOD)',
        description:
          'Las paredes internas del enfriador del radiador se agrietan, mezclan ATF con refrigerante y envían el destructivo “batido de fresa de la muerte” a los embragues.',
      },
    ],
    buyerWarning:
      'Evite cualquier Nissan CVT usado sin recibos verificables de cambio de fluido cada 30,000 millas. En Frontier/Pathfinder pre-2011, inspeccione de inmediato la varilla por residuo rosado lechoso.',
    coloradoNotes:
      'Las CVT Nissan sobrecalientan fácil en subidas largas de montaña; seguir la degradación del fluido es obligatorio para conductores de Colorado.',
    higherScrutiny:
      'Cualquier CVT Jatco sin recibos de fluido a 30k; contaminación cruzada SMOD Frontier/Pathfinder pre-2011; aullido de cadena VQ35DE.',
    coloradoAngle:
      'Las CVT se sobrecalientan en subidas sostenidas — el estado del fluido importa más que el kilometraje del sticker.',
  },
  subaru: {
    failureProfiles: [
      {
        title: 'Fuga de empaque de cabeza EJ25 y FB25 tempranos',
        description:
          'Los empaques MLS se degradan en las esquinas externas de la camisa de enfriamiento; mezclan aceite y refrigerante o empujan gases al tanque de rebose y sobrecalientan de golpe.',
      },
      {
        title: 'Bloqueo del convertidor CVT TR580 / TR690',
        description:
          'El solenoide de lock-up interno hace cortocircuito y el motor se apaga por completo al frenar fuerte.',
      },
      {
        title: 'Filtración de aceite en portadores de levas',
        description:
          'El sellador RTV de los portadores traseros se degrada; las fugas caen sobre el escape y huelen a quemado.',
      },
    ],
    buyerWarning:
      'Evite cualquier Subaru usado con burbujas en el tanque de expansión en ralentí caliente. Asegúrese de que frene suave sin temblor ni intento de apagarse — señal de cuerpo de válvulas CVT fallando.',
    coloradoNotes:
      'Los Subaru son el vehículo no oficial de Colorado, pero la carga continua en montaña acelera la degradación de empaques Boxer. Empaques MLS actualizados son esenciales en estas reparaciones.',
    higherScrutiny:
      'Filtración externa de empaque EJ25 (burbujas en el tanque); CVT TR580/690 que apaga el motor al frenar fuerte; filtración de portador de levas al escape.',
    coloradoAngle:
      'El auto no oficial del estado sigue comiendo empaques con carga continua en montaña — lo vemos cada semana en Englewood.',
  },
  jeep: {
    failureProfiles: [
      {
        title: 'Falla de rodamiento de rocker 3.6L Pentastar',
        description:
          'Los rodillos de aguja internos se traban; el rocker cae y muerde los lóbulos del árbol de levas, con tictac fuerte y códigos de fallo.',
      },
      {
        title: 'Grieta en carcasa plástica del filtro de aceite',
        description:
          'El enfriador plástico montado en la “V” bajo el múltiple se agrieta por sobreapretar o calor y acumula aceite y refrigerante en el valle del bloque.',
      },
      {
        title: 'Juego en caja de dirección Wrangler (“Death Wobble”)',
        description:
          'Desgaste en bujes del track bar y tolerancias flojas en la caja causan sacudida violenta e incontrolable del frente tras golpes en carretera.',
      },
    ],
    buyerWarning:
      'Evite cualquier 3.6L Pentastar con tictac metálico agudo desde las tapas de válvulas. Mire con linterna bajo el múltiple para verificar que no haya aceite acumulado en el valle del bloque.',
    coloradoNotes:
      'Manejar trails en las Rocosas pone estrés lateral extremo en el frente del Jeep; barras de seguimiento y estabilizadores heavy-duty son necesidad común.',
    higherScrutiny:
      'Tictac de rocker Pentastar 3.6L y daño de levas; grietas en carcasa plástica del filtro; death wobble Wrangler por bujes de track bar gastados.',
    coloradoAngle:
      'Abuse de trails y baches en el Front Range acelera el vagabundeo de dirección — presupueste track bars heavy-duty si hace off-road.',
  },
  ram: {
    failureProfiles: [
      {
        title: 'Corte de espárragos de múltiple HEMI 5.7L / 6.4L',
        description:
          'La contracción térmica extrema corta los tornillos traseros del múltiple al ras de la cabeza y crea fuga de escape fuerte y “aleteo” en arranques fríos.',
      },
      {
        title: 'Agarre de lifters de rodillo HEMI',
        description:
          'Flujo de aceite pobre en ralentí bajo traba los rodillos; la rueda congelada aplana el lóbulo del árbol de levas y manda metal a la bomba de aceite.',
      },
      {
        title: 'Quemado de embrague overdrive 68RFE',
        description:
          'Restricciones de presión por software hacen que los paquetes de overdrive 4ª–6ª patinen y se quemen prematuramente bajo remolque pesado.',
      },
    ],
    buyerWarning:
      'Evite RAM usados con muchas horas de ralentí en el medidor (el hambre de aceite en ralentí dispara la falla de lifters HEMI). Pruebe cambios bajo carga para descartar overdrive 68RFE patinando.',
    coloradoNotes:
      'Remolcar campers por puertos de alta altitud acelera la expansión del múltiple — el disparador estructural exacto que corta los espárragos de fábrica.',
    higherScrutiny:
      'Agarre de lifters Hemi en camiones con mucho ralentí; patinaje overdrive 68RFE bajo carga; espárragos de múltiple cortados en arranques fríos.',
    coloradoAngle:
      'Remolcar por Loveland Pass cicla duro el hardware de escape — las fugas de múltiple son un patrón, no mala suerte.',
  },
  hyundai: {
    failureProfiles: [
      {
        title: 'Agarre de cojinete de biela Theta II (2.4L / 2.0T)',
        description:
          'Defectos de fábrica dejan viruta metálica en los conductos de aceite del cigüeñal. Eso corta el flujo, gira el cojinete, genera golpe de biela y falla total del motor.',
      },
      {
        title: 'Obstrucción de válvulas de admisión GDI',
        description:
          'Costra de carbón pegajosa en los vastagos restringe el aire, causa hesitaciones, pérdida de potencia y fallos persistentes en arranque frío.',
      },
      {
        title: 'Holgura excesiva de anillos Smartstream',
        description:
          'Desgaste prematuro de anillos deja pasar aceite a la cámara a altas tasas sin humo azul visible en el escape.',
      },
    ],
    buyerWarning:
      'Evite cualquier Hyundai 2011–2019 con motor Theta II a menos que verifique reemplazo bajo el recall nacional o pase una prueba física de holgura de cojinete de biela.',
    coloradoNotes:
      'La pérdida de caballos por carbón de inyección directa se siente el doble en altitud, donde el motor ya pelea con menos oxígeno.',
    higherScrutiny:
      'Falla de cojinete Theta II 2011–2019 sin prueba de reemplazo por recall; consumo de aceite Smartstream; carbón GDI pesado en trayectos cortos.',
    coloradoAngle:
      'El carbón GDI le cuesta potencia que ya falta en altitud — fallos y hesitación aparecen antes aquí.',
  },
  kia: {
    failureProfiles: [
      {
        title: 'Rayado de cilindro Nu 2.0L y Theta',
        description:
          'La falta de jets de enfriamiento del pistón hace que las faldas se expandan y rayen las paredes (“piston slap”), con tictac mecánico profundo y quema excesiva de aceite.',
      },
      {
        title: 'Falla del actuador de embrague DCT seco de 7 velocidades',
        description:
          'Los actuadores electrónicos se sobrecalientan en tráfico lento; el vehículo se niega a engranar o pierde rutas de marchas impares/pares.',
      },
      {
        title: 'Desgaste del acoplamiento AWD Sorento/Telluride',
        description:
          'Las estrías del hub del acoplamiento trasero se alisan; el vehículo queda solo en tracción delantera sin luces de falla en el tablero.',
      },
    ],
    buyerWarning:
      'Evite Soul u Optima usados con ruido profundo de “golpe” en frío. En AWD, levante el vehículo y verifique que el eje trasero transfiera potencia bajo carga.',
    coloradoNotes:
      'Un acoplamiento AWD fallido significa pérdida súbita de tracción en puertos helados, convirtiendo su SUV AWD en un impredecible tracción delantera.',
    higherScrutiny:
      'Piston slap en frío Soul/Optima; sobrecalentamiento DCT seco de 7 velocidades en tráfico lento; desgaste de acoplamiento AWD sin advertencia en tablero.',
    coloradoAngle:
      'Una falla silenciosa de AWD significa FWD en un puerto helado — pruebe tracción trasera en rack antes de comprar usado.',
  },
  volkswagen: {
    failureProfiles: [
      {
        title: 'Distorsión del módulo plástico termostato y bomba TSI',
        description:
          'Todo el módulo compuesto de la bomba va bajo el múltiple. Fugas de aceite de la tapa caen sobre los sellos; la carcasa plástica se hincha, deforma y agrieta.',
      },
      {
        title: 'Contaminación de solenoides mecatrónicos DSG 02E / DQ250',
        description:
          'El desgaste del embrague llena el aceite de fricción metálica microscópica, pone a tierra los solenoides y causa golpes duros de marcha.',
      },
      {
        title: 'Cascabeleo del brazo wastegate EA888 y falla de voltaje',
        description:
          'El pivote mecánico del wastegate del turbo se afloja, cascabea fuerte e impide mantener presión de boost.',
      },
    ],
    buyerWarning:
      'Evite cualquier VW con costra rosa o olor dulce bajo el múltiple (carcasa de bomba con fuga). Evite modelos con código de bajo boost (P0299), que suele exigir turbo completo.',
    coloradoNotes:
      'Los componentes plásticos de enfriamiento se degradan aún más rápido con los ciclos extremos de expansión/contracción del clima alpino de Colorado.',
    higherScrutiny:
      'Bomba de agua compuesta TSI bajo el múltiple; contaminación mecatrónica DSG DQ250; cascabeleo wastegate EA888 y bajo boost P0299.',
    coloradoAngle:
      'Los módulos plásticos de enfriamiento odian nuestros ciclos alpine de congelación-deshielo — olor dulce bajo el capó es señal de alejarse.',
  },
};
