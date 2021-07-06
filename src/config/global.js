export default {
  global: {
    componenteFormativo: 'Intervenciones individuales por curso de vida',
    descripcionCurso:
      'En este componente los aprendices reconocerán cada uno de los  procedimientos (objetivo, atenciones incluidas, frecuencia, talento humano, instrumentos e insumos) que hacen parte de las intervenciones/atenciones individuales definidas por momento de curso de vida; así como las atenciones a las familias, incluidas en la ruta de atención integral para la promoción y mantenimiento de la salud.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Intervenciones Individuales',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Definición',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Finalidades de las Intervenciones individuales',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo:
          'Atenciones individuales por momento de curso de vida y finalidad',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Intervenciones individuales - Atención a las familias',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Intervenciones individuales - Educación para la salud',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Ministerio de Salud y Protección Social (2018). Resolución 3280 de 2018 “Por medio de la cual se adoptan los lineamientos técnicos y operativos de la Ruta Integral de Atención para la Promoción y Mantenimiento de la Salud y la Ruta Integral de Atención en Salud para la Población Materno Perinatal y se establecen las directrices para su operación”. 2 de agosto de 2018. Disponible en:',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/DIJ/resolucion-3280-de-2018.pdf ',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social (2018*). Política Pública Nacional de Apoyo y Fortalecimiento a las Familias. Disponible en: ',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/PS/politica-apoyo-fortalecimiento-familias.pdf',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social (2018**). Marco conceptual y metodológico para el desarrollo de la educación para la salud de las Rutas Integrales de Atención en Salud – RIAS. Orientaciones pedagógicas, metodológicas y didácticas.  Disponible en:',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VS/PP/directrices-educacion-pp.pdf',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social (2019). Resolución 276 del 4 de Febrero del 2019. Por la cual se  modifica la Resolución 3280. Disponible en: ',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/DIJ/resolucion-276-de-2019.pdf',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social (2019). Resolución 3513 del  26 de diciembre de 2019. Por la cual se fijan los recursos de la Unidad de Pago por Capitación - UPC para financiar los servicios y tecnologías de salud, de los Regímenes Contributivo y Subsidiado para la vigencia 2020 y se dictan otras disposiciones. Disponible en:',
      link:
        'https://www.minsalud.gov.co/Normatividad_Nuevo/Resolucion%20No.%203513%20de%202019.pdf ',
    },
  ],
  glosario: [
    {
      termino: 'Momentos del curso de vida',
      significado:
        'Se constituyen en el primer ordenador de la RPMS, permite abordar a las personas en los diferentes  momentos del continuo de la vida (primera infancia, infancia, adolescencia, juventud, adultez y vejez), reconociendo las características y los cambios que, desde la particularidad de cada  uno, potencian el desarrollo y la salud  de las personas, constituyéndose como lo plantea Parodi, (s/f) en una aproximación transversal para facilitar la medición y monitoreo, sin perder de vista que se trata de un continuo, evitando caer en el error de analizar segmentos aislados.',
    },
    {
      termino: 'Intervenciones individuales',
      significado:
        ' Las intervenciones individuales, se definen como el conjunto de intervenciones en salud dirigidas a las personas en sus diferentes momentos del curso de la vida y a la familia como sujeto de atención, que tienen como finalidad la valoración integral, la detección temprana, la protección específica y la educación para la salud de forma individual, grupal o familiar.',
    },
    {
      termino: 'Valoración Integra',
      significado:
        'Conjunto de atenciones coordinadas, complementarias y efectivas para determinar el estado de salud de las personas con el fin de definir las intervenciones de salud que se requieran, según el curso de vida.',
    },
    {
      termino: 'Detección temprana',
      significado:
        ' Identificar en forma oportuna y efectiva la enfermedad para su tratamiento, reducción del daño, evitando secuelas, discapacidad o muerte.',
    },
    {
      termino: 'Protección específica',
      significado:
        'Es el conjunto de actividades, procedimientos e intervenciones tendientes a garantizar la protección de las personas, familias y comunidades frente a un riesgo específico, con el fin de evitar la presencia de la enfermedad o sus complicaciones.',
    },
    {
      termino: 'Educación para la salud',
      significado:
        'Proceso  pedagógico de construcción de conocimiento, que pretende aportar al desarrollo del potencial de las personas, familias y  comunidades para proveer el cuidado de la salud, gestionar el riesgo de salud y transformar positivamente los entornos en los que sus vidas se desenvuelven.',
    },
  ],
  complementario: [
    {
      texto:
        'Ministerio de Salud y protección Social, 2018. Matriz intervenciones individuales por momento de curso de vida. Documento de trabajo en ajuste. ',
      tipo: 'XLSX',
      descarga: 'downloads/Esquemas_momento_curso_vida.xlsx',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Mónica Genith Castro',
        cargo: 'Experta temática',
        centro: 'Ministerio de Salud',
        regional: 'Dirección de promoción y prevención - Grupo curso de vida',
      },
      {
        nombre: 'Lía Marcela Gúiza',
        cargo: 'Experta temática',
        centro:
          'Ministerio de Salud - Dirección de promoción y prevención - Grupo curso de vida',
      },
      {
        nombre: 'Natalia Munarth',
        cargo: 'Experta temática',
        centro:
          'Ministerio de Salud - Dirección de promoción y prevención - Grupo curso de vida',
      },
      {
        nombre: 'Magaly Jaimes',
        cargo: 'Experta temática',
        centro:
          'Ministerio de Salud - Dirección de promoción y prevención - Grupo curso de vida',
      },
      {
        nombre: 'Mily Ramírez',
        cargo: 'Experta temática',
        centro:
          'Ministerio de Salud - Dirección de promoción y prevención - Grupo curso de vida',
      },
      {
        nombre: 'Aura Lucia Toloza',
        cargo: 'Experta temática',
        centro:
          'Ministerio de Salud - Dirección de promoción y prevención - Grupo curso de vida',
      },
      {
        nombre: 'Leidy Carolina Arias Aguirre',
        cargo: 'Experta temática',
        centro:
          'Ministerio de Salud - Dirección de promoción y prevención - Grupo curso de vida',
      },
      {
        nombre: 'Sandra Patricica Hoyos Sepúlveda',
        cargo: 'Corrección de estilo',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: ['Carlos Julian Ramirez'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Camilo Andrés Villamizar Lizcano',
        cargo: 'Producción Audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'José Jaime Luis Tang Pinzón',
        cargo: 'Producción Audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'María Natalia Maldonado Delgado',
        cargo: 'Producción Audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Wilson Andres Arenales Cáceres',
        cargo: 'Producción Audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy Maria Ruiz Torres',
        cargo: 'Producción Audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Camilo Andres Bolaño Rey',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Daniel Ricardo Mutis Gómez',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'María Isabel Román Rueda',
        cargo: 'Revisora de estilo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: ['Validación de recursos'],
        centro: 'Centro de comercio y servicios - Regional Tolima',
      },
    ],
  },
}
