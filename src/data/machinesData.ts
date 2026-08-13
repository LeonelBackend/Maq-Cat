export interface MachineSpec {
  powerModule: string;
  powerModuleDesc: string;
  grossPerformance: string;
  grossPerformanceDesc: string;
  nominalPayload: string;
  nominalPayloadDesc: string;
  operatingWeight: string;
  netPower: string;
}

export interface Machine {
  id: string;
  slug: string;
  categoryTitle: string;
  categoryTag: string;
  modelName: string;
  shortDesc: string;
  operationalSummary: string;
  imageUrl: any;
  specs: MachineSpec;
  isFeatured?: boolean;
}

export const MACHINES_DATA: Machine[] = [
  {
    id: 'excavadoras-390',
    slug: 'excavadoras',
    categoryTitle: 'EXCAVADORA',
    categoryTag: 'EXCAVACIÓN PESADA',
    modelName: 'Cat 390F L',
    shortDesc: 'Excavadora hidráulica de gran tamaño diseñada para máximo rendimiento en minería y obras de gran escala.',
    operationalSummary: 'Diseñada para resistir las condiciones mineras y de canteras más exigentes. La Cat 390F L ofrece una durabilidad excepcional del bastidor inferior y superior, sistemas hidráulicos inteligentes para ciclos de excavación ultra rápidos y una eficiencia de combustible optimizada por tonelada cargada.',
    imageUrl: require('../../assets/images/cat-390f.png'),
    isFeatured: true,
    specs: {
      powerModule: 'Cat C18 ACERT',
      powerModuleDesc: 'Motor diésel con tecnología de inyección de combustible avanzada.',
      grossPerformance: '524 HP (391 kW)',
      grossPerformanceDesc: 'Potencia neta en volante optimizada.',
      nominalPayload: '86,275 kg',
      nominalPayloadDesc: 'Peso Operativo Máximo.',
      operatingWeight: '86,275 kg',
      netPower: '391 kW',
    },
  },
  {
    id: 'cargadores-988k',
    slug: 'cargador-frontal',
    categoryTitle: 'CARGADOR FRONTAL',
    categoryTag: 'CARGA Y MOVIMIENTO',
    modelName: 'Cat 988K',
    shortDesc: 'Cargadores de ruedas de alto rendimiento diseñados para acoplarse con camiones de acarreo pesados.',
    operationalSummary: 'El cargador frontal Cat 988K combina la durabilidad legendaria con sistemas de control electrónico de precisión. Su motor diésel C18 ACERT y convertidor de par con embrague de rodete entregan empuje extremo y capacidades de levante superiores en frentes de minería y plantas de agregados.',
    imageUrl: require('../../assets/images/cat-988k.png'),
    specs: {
      powerModule: 'Cat C18 ACERT',
      powerModuleDesc: 'Bloque diésel industrial de alta cilindrada.',
      grossPerformance: '541 HP (403 kW)',
      grossPerformanceDesc: 'Potencia Máxima Operativa.',
      nominalPayload: '51,000 kg',
      nominalPayloadDesc: 'Peso Operativo Métrica.',
      operatingWeight: '51,000 kg',
      netPower: '403 kW',
    },
  },
  {
    id: 'motoniveladoras-14m',
    slug: 'motoniveladora',
    categoryTitle: 'MOTONIVELADORA',
    categoryTag: 'NIVELACIÓN DE PRECISIÓN',
    modelName: 'Cat 14M',
    shortDesc: 'Equipo de nivelación y clasificación de precisión para la construcción de pistas y acarreo.',
    operationalSummary: 'La motoniveladora Cat 14M establece el estándar en la preparación y mantenimiento de vías de acarreo en minas a tajo abierto. Cuenta con controles por palanca universal (joysticks) revolucionarios, tracción total seleccionable y un vertedero de alta resistencia para movimiento de material consistente.',
    imageUrl: require('../../assets/images/cat-14m.png'),
    specs: {
      powerModule: 'Cat C9.3 ACERT',
      powerModuleDesc: 'Motor Diésel de Nivelación Eficiente.',
      grossPerformance: '238 HP (178 kW)',
      grossPerformanceDesc: 'Rendimiento Constante.',
      nominalPayload: '21,300 kg',
      nominalPayloadDesc: 'Peso Operativo Total.',
      operatingWeight: '21,300 kg',
      netPower: '178 kW',
    },
  },
  {
    id: 'camiones-797f',
    slug: 'camiones-mineros',
    categoryTitle: 'CAMIÓN MINEROS',
    categoryTag: 'TRANSPORTE PESADO',
    modelName: 'Cat 797F',
    shortDesc: 'Camiones de acarreo de clase ultra que ofrecen la mayor capacidad de carga y menor costo por tonelada.',
    operationalSummary: 'Diseñado para las aplicaciones de minería más exigentes del mundo, el modelo 797F es el camión de mando mecánico líder en la industria. Ya sea transportando cobre, carbón, oro, mineral de hierro o escombros, este equipo proporciona el costo por tonelada más bajo de su clase.\n\nSu chasis de sección en caja, fundiciones de acero robustas y suspensión integral están diseñados para resistir las tensiones torsionales de los caminos de acarreo irregulares y extremos. El sistema de frenos refrigerados por aceite en las cuatro ruedas garantiza un control superior y un rendimiento constante.',
    imageUrl: require('../../assets/images/cat-797f.png'),
    specs: {
      powerModule: 'Cat C175-20',
      powerModuleDesc: 'Bloque de Motor Diésel Quad-Turbo.',
      grossPerformance: '4000 HP',
      grossPerformanceDesc: 'Potencia Máxima Operativa.',
      nominalPayload: '363 TON',
      nominalPayloadDesc: 'Capacidad de Tolva (Métrica).',
      operatingWeight: '623,700 kg',
      netPower: '2983 kW',
    },
  },
];
