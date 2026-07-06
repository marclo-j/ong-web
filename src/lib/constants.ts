export const SITE = {
  name: "Gotas de Esperanza",
  shortName: "Gotas",
  tagline: "Transformando vidas, una gota a la vez",
  description:
    "Somos una organización dedicada al bienestar social, brindando apoyo alimentario, protección y oportunidades a comunidades vulnerables.",
  url: "https://gotasdeesperanza.org",
  whatsapp: "+54 9 11 0000-0000",
  phone: "+54 9 11 0000-0000",
  email: "contacto@gotasdeesperanza.org",
  address: "Buenos Aires, Argentina",
  social: {
    facebook: "https://facebook.com/gotasdeesperanza",
    instagram: "https://instagram.com/gotasdeesperanza",
    twitter: "https://twitter.com/gotasdeesperanza",
    youtube: "https://youtube.com/@gotasdeesperanza",
  },
};

export const NOSOTROS = {
  hero: {
    title: "Gotas de Esperanza",
    subtitle: "Transformando vidas, una gota a la vez",
    description:
      "Desde 2014 trabajamos incansablemente para llevar esperanza, alimento y oportunidades a quienes más lo necesitan. Creemos en un mundo donde cada persona tenga la oportunidad de construir un futuro digno.",
  },
  mision: {
    title: "Nuestra Misión",
    description:
      "Brindar apoyo integral a comunidades en situación de vulnerabilidad a través de programas alimentarios, educativos y de protección infantil, promoviendo el desarrollo sostenible y la dignidad humana.",
  },
  vision: {
    title: "Nuestra Visión",
    description:
      "Ser una organización líder en el bienestar social, reconocida por su compromiso con la transformación comunitaria, creando un futuro donde cada gota de esperanza se convierta en un océano de oportunidades.",
  },
};

export const PROGRAMS = [
  {
    id: "gotas-esperanza",
    name: "Programa Alimentario 'Gotas de Esperanza'",
    shortName: "Gotas de Esperanza",
    tag: "Alimentación",
    color: "bg-orange" as const,
    description:
      "Brindamos alimentos nutritivos a familias en situación de vulnerabilidad. Este programa asegura que niños, adultos mayores y personas en riesgo tengan acceso a una alimentación balanceada y digna.",
    fullDescription:
      "El Programa Alimentario Gotas de Esperanza nace de la necesidad de combatir el hambre y la desnutrición en comunidades de escasos recursos. Cada semana distribuimos canastas básicas con alimentos frescos y no perecibles, priorizando hogares con niños pequeños, adultos mayores y personas con discapacidad. Además, ofrecemos talleres de nutrición para promover hábitos alimentarios saludables.",
    stats: [
      { label: "Beneficiarios", value: "2,500+" },
      { label: "Canastas distribuidas", value: "15,000+" },
      { label: "Años activo", value: "10" },
    ],
    gallery: ["bg-orange/30", "bg-yellow/30", "bg-pink/30"],
  },
  {
    id: "el-nazareno",
    name: "Programa Alimentario 'El Nazareno'",
    shortName: "El Nazareno",
    tag: "Alimentación",
    color: "bg-yellow" as const,
    description:
      "Programa de comedor comunitario que ofrece almuerzos calientes a niños y adultos mayores, promoviendo la nutrición y la convivencia solidaria.",
    fullDescription:
      "El Nazareno es un comedor comunitario que abre sus puertas de lunes a viernes para servir almuerzos nutritivos a niños, adultos mayores y personas en situación de calle. Más que un comedor, es un espacio de encuentro donde compartimos no solo alimentos, sino también alegría, compañía y esperanza. Contamos con un equipo de voluntarios comprometidos que preparan y sirven cada comida con amor.",
    stats: [
      { label: "Platos servidos", value: "50,000+" },
      { label: "Comensales diarios", value: "120" },
      { label: "Voluntarios activos", value: "25" },
    ],
    gallery: ["bg-yellow/30", "bg-orange/30", "bg-mustard/30"],
  },
  {
    id: "gotas-proteccion",
    name: "Gotas de Protección",
    shortName: "Gotas de Protección",
    tag: "Protección",
    color: "bg-pink" as const,
    description:
      "Programa de protección infantil que brinda un entorno seguro a niños y adolescentes en riesgo, con apoyo psicológico, recreación y seguimiento escolar.",
    fullDescription:
      "Gotas de Protección se enfoca en la prevención del trabajo infantil, el abuso y la explotación de niños y adolescentes. A través de espacios seguros, ofrecemos acompañamiento psicológico, actividades recreativas y deportivas, refuerzo escolar y talleres de habilidades para la vida. Trabajamos en estrecha colaboración con las familias y las escuelas para crear una red de protección integral alrededor de cada niño.",
    stats: [
      { label: "Niños protegidos", value: "800+" },
      { label: "Familias acompañadas", value: "400+" },
      { label: "Talleres realizados", value: "200+" },
    ],
    gallery: ["bg-pink/30", "bg-orange/30", "bg-yellow/30"],
  },
  {
    id: "esperanza-futuro",
    name: "Esperanza para el Futuro",
    shortName: "Esperanza Futuro",
    tag: "Educación",
    color: "bg-mustard" as const,
    description:
      "Programa de becas educativas y apoyo escolar para que niños y jóvenes puedan continuar sus estudios y construir un futuro mejor.",
    fullDescription:
      "Esperanza para el Futuro cree firmemente que la educación es la llave para romper el ciclo de la pobreza. Otorgamos becas escolares completas (útiles, uniformes, transporte y alimentación) a niños y jóvenes de escasos recursos que demuestran compromiso académico. Además, ofrecemos tutorías, orientación vocacional y talleres de formación en habilidades digitales para prepararlos para los desafíos del siglo XXI.",
    stats: [
      { label: "Becas activas", value: "300+" },
      { label: "Tasa de retención", value: "95%" },
      { label: "Graduados", value: "150+" },
    ],
    gallery: ["bg-mustard/30", "bg-yellow/30", "bg-orange/30"],
  },
  {
    id: "emprendimiento-padres",
    name: "Emprendimiento para Padres",
    shortName: "Emprendimiento",
    tag: "Desarrollo",
    color: "bg-orange" as const,
    description:
      "Capacitación y microcréditos para que madres y padres de familia puedan iniciar sus propios emprendimientos y generar ingresos sostenibles.",
    fullDescription:
      "Emprendimiento para Padres empodera a madres y padres de familia a través de capacitación en oficios (cocina, costura, artesanías, tecnología) y otorgamiento de microcréditos con tasas accesibles para iniciar o fortalecer sus negocios. El programa incluye mentoría continua, talleres de educación financiera y ferias de emprendimiento donde pueden comercializar sus productos. Nuestro objetivo es crear fuentes de ingreso sostenibles que mejoren la calidad de vida de las familias.",
    stats: [
      { label: "Emprendedores", value: "500+" },
      { label: "Microcréditos", value: "1,200+" },
      { label: "Negocios activos", value: "350+" },
    ],
    gallery: ["bg-orange/30", "bg-pink/30", "bg-yellow/30"],
  },
  {
    id: "construyendo-vidas",
    name: "Construyendo Vidas",
    shortName: "Construyendo Vidas",
    tag: "Vivienda",
    color: "bg-yellow" as const,
    description:
      "Programa de mejora de vivienda que brinda soluciones habitacionales básicas a familias que viven en condiciones precarias.",
    fullDescription:
      "Construyendo Vidas transforma hogares y esperanzas. Trabajamos con familias que viven en condiciones de hacinamiento o viviendas precarias, proporcionando mejoras estructurales básicas: reparación de techos, instalación de pisos, conexiones de agua potable y saneamiento, y construcción de habitaciones adicionales. Cada proyecto se realiza con la participación activa de la familia y la comunidad, fomentando el trabajo en equipo y la solidaridad vecinal.",
    stats: [
      { label: "Viviendas mejoradas", value: "200+" },
      { label: "Familias beneficiadas", value: "850+" },
      { label: "Proyectos comunitarios", value: "45" },
    ],
    gallery: ["bg-yellow/30", "bg-mustard/30", "bg-orange/30"],
  },
];

export const GALLERY_IMAGES = [
  { id: 1, bg: "bg-orange/20", label: "Entrega de alimentos" },
  { id: 2, bg: "bg-yellow/20", label: "Taller educativo" },
  { id: 3, bg: "bg-pink/20", label: "Celebración comunitaria" },
  { id: 4, bg: "bg-mustard/20", label: "Actividad infantil" },
  { id: 5, bg: "bg-orange/20", label: "Jornada médica" },
  { id: 6, bg: "bg-yellow/20", label: "Evento deportivo" },
  { id: 7, bg: "bg-pink/20", label: "Entrega de becas" },
  { id: 8, bg: "bg-mustard/20", label: "Taller de emprendimiento" },
];

export const NAV_ITEMS = [
  { id: "nosotros", label: "Nosotros" },
  { id: "programas", label: "Programas" },
  { id: "galeria", label: "Galería" },
];
