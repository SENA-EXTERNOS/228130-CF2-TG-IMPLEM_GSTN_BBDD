export default {
  global: {
    componenteFormativo: 'Seguridad de Bases de Datos',
    descripcionCurso:
      'El principal punto a tener en cuenta en un gestor de bases de datos es la seguridad que se puede concebir como las acciones que desarrollan diariamente los administradores de la información enmarcados en la protección de datos contra accesos no autorizados. Cuando se habla de seguridad, se habla también de encriptación, tokenización y gestión de claves.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Copias de seguridad',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Copias de seguridad bases de datos SQL',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo:
              'Copias de seguridad en tablas de bases de datos relacionales',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Copias de seguridad bases de datos NoSQL',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Restauración de bases de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Restauración de bases de datos completa',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Restauración bases de datos SQL. Mysql',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Restauración de bases de datos NoSQL',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Migración de bases de datos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Planes de resguardo y de desastres informáticos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Políticas organizacionales',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '5.1',
            titulo: 'Políticas de seguridad',
            hash: 't_5_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.2',
            titulo:
              'Políticas para la implementación de controles de seguridad de la información',
            hash: 't_5_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
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
  complementario: [
    {
      tema: 'Migración de Bases de Datos SQL a NoSQL',
      referencia:
        'Antaño, A. C. M. el at. (2014), Migración de bases de datos sql a nosql. Revista Tlamati. ',
      tipo: 'PDF',
      link:
        'https://www.researchgate.net/profile/Rene-Cuevas-Valencia/publication/272482056_Migracion_de_Bases_de_Datos_SQL_a_NoSQL/links/54e543390cf276cec173c2b5/Migracion-de-Bases-de-Datos-SQL-a-NoSQL.pdf',
    },
    {
      tema: 'Seguridad de Datos ',
      referencia:
        'Martín, E. S. (2015), Salvaguarda y seguridad de los datos: administración de bases de datos (UF1473). IC Editorial. ',
      tipo: 'Libro',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/44140?page=13.',
    },
    {
      tema: 'Copias de seguridad Bases de datos Mysql',
      referencia:
        'Programador Novato (2021), Respaldos y restauración de bases de datos en MySQL Workbench (Curso de MySQL desde cero. [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=U-0SbQgnnGU&t=230s',
    },
    {
      tema: 'Introducción de bases de datos Mongodb',
      referencia:
        'Sarasa, A. (2016), Introducción a las bases de datos NoSQL usando MongoDB. UOC. ',
      tipo: 'Libro',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/58524?page=274.',
    },
  ],
  glosario: [
    {
      termino: 'Archivo',
      significado:
        'Conjunto de documentos, sea cual fuere su fecha, forma y soporte material, acumulados en el transcurso de la gestión por una persona o entidad pública o privada, y conservados respetando su orden para servir como testimonio y documentación a la persona o institución que los produce y a los ciudadanos. También se puede entender como la institución que está al servicio de la gestión administrativa, la información, la investigación y la cultura. (Ley 594 de 2000, art 3)',
    },
    {
      termino: 'Bases de datos',
      significado:
        'Conocido también como banco de datos, se puede determinar que es un conjunto de información perteneciente a un mismo contexto y que se ordena de modo sistemático en una herramienta digital para su posterior consulta y análisis.',
    },
    {
      termino: 'Migración',
      significado:
        'Paso de los programas, archivos y datos de un sistema de una plataforma tecnológica a otra.',
    },
    {
      termino: 'Mongodb',
      significado: 'Gestor de bases de datos NoSQL.',
    },
    {
      termino: 'MySQL',
      significado: 'Gestor de bases de datos SQL',
    },
    {
      termino: 'NoSQL',
      significado:
        'Paradigma para la administración de bases de datos que se adapta a una amplia variedad de modelos, formatos de valor clave, documento, columnas y gráficos.',
    },
    {
      termino: 'Restauración',
      significado:
        'Acción de cargar uno o varios elementos a una base de datos desde una copia de seguridad. La restauración sobrescribe cualquier información con la que encuentre en la copia de seguridad. Después de restaurar una base de datos, deberá recuperarla.',
    },
    {
      termino: 'Seguridad de la información',
      significado:
        'Todos los controles técnicos y metodológicos que permiten mitigar los riesgos a los que se expone la información.',
    },
    {
      termino: 'SGSI',
      significado:
        'Sistema de Gestión de Seguridad de la Información. Es el conjunto de procesos para gestionar eficientemente la accesibilidad de la información, buscando asegurar la confidencialidad, integridad y disponibilidad de los activos de información y minimizando sus riesgos de seguridad.',
    },
    {
      termino: 'TIC',
      significado: 'Sigla de Tecnologías de Información y Comunicación (TIC).',
    },
  ],
  referencias: [
    {
      referencia:
        'Leguizamon, A. Y. (2017), Pautas para una correcta migración de bases de datos. Universidad Libre ',
      link: 'https://repository.unilibre.edu.co/handle/10901/11161',
    },
    {
      referencia:
        'Lozano Banqueri, J. M. (2018), Creación y gestión de una base de datos con MySQL y phpMyAdmin. Universidad de Jaén, Facultad de Ciencias Sociales y Jurídicas. ',
      link: 'https://tauja.ujaen.es/bitstream/10953.1/9445/1/TFG%20%285%29.pdf',
    },
    {
      referencia:
        'Manjarrez Antaño, A (2014), Migración de bases de datos sql a nosql. Revista Tlamati, Especial. ',
      link:
        'https://www.researchgate.net/profile/Rene-Cuevas-Valencia/publication/272482056_Migracion_de_Bases_de_Datos_SQL_a_NoSQL/links/54e543390cf276cec173c2b5/Migracion-de-Bases-de-Datos-SQL-a-NoSQL.pdf',
    },
    {
      referencia:
        'Pulido Romero, E. aet al.(2019), Base de datos. Grupo Editorial Patria.  ',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/121283 ',
    },
    {
      referencia:
        'UTC (2020), Migración de bases de datos: Conceptos y principios (parte 1) Cloud Architecture Center. ',
      link:
        'https://cloud.google.com/architecture/database-migration-concepts-principles-part-1?hl=es-419',
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
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
