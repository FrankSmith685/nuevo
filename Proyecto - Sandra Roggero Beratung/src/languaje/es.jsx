const optimizedImageURL = (url) => {
    const cloudinaryBaseURL = 'https://res.cloudinary.com/dievolijo/image/upload/';
    return `${cloudinaryBaseURL}c_scale,w_800/${url}`;
};

const es = {
    menu2 : [
        { id:0, path: "/empresa/#", label: "Empresa", subTema: "Seleccionamos los profesionales que su empresa necesita y fomentamos nuevos estilos de liderazgo adaptados a los tiempos actuales.", subItems: [
            { path: "/empresa/seleccion-y-reclutamiento-de-personal", label: "Selección y Reclutamiento de Personal" },
            { path: "/empresa/evaluaciones-de-personal", label: "Evaluaciones de Personal" },
            { path: "/empresa/internacional", label: "Internacional" },
            { path: "/empresa/funciones", label: "Funciones" },
            { path: "/empresa/busqueda-especializada", label: "Búsqueda Especializada" },
            { path: "/empresa/auditoria-de-inclusion", label: "Auditoría de Inclusión" },
        ]},
        { id:1, path: "/candidatos/#", label: "Candidatos", subTema: "Le apoyamos en su camino hacia su carrera. Aproveche nuestras ofertas de empleo, asesoría profesional y recursos digitales.", subItems: [
            { path: "/candidatos/registre-su-curriculum", label: "Registre su Currículum" },
            { path: "/candidatos/gestion-de-carrera-internacional", label: "Gestión de Carrera Internacional" },
        ]},
        { id:2, path: "/nosotros/#", label: "Nosotros", subTema: "Conozca más sobre nuestra empresa y nuestros valores.", subItems: [
            { path: "/nosotros/quienes-somos", label: "Quiénes Somos" },
            { path: "/nosotros/nuestra-filosofia", label: "Nuestra Filosofía" },
        ]},
        { id:3, path: "/mis-servicios", label: "Mis Servicios", subTema: "Ofrecemos servicios para su desarrollo académico, profesional y personal, incluyendo estudios, trabajo, vivienda, transporte, visados e idiomas.", subItems: [
            { path: "/mis-servicios/estudios-formacion-practicas", label: "Estudios - Formación - Prácticas" },
            { path: "/mis-servicios/trabajo-impuestos", label: "Trabajo - Impuestos" },
            { path: "/mis-servicios/vivienda-transporte", label: "Vivienda - Transporte" },
            { path: "/mis-servicios/visado-idioma", label: "Visado - Idioma" },
        ]},
        { id:4, path: "/contacto", label: "Contacto" },
    ],
    home: {
        texts: ["SOLUCIONES INNOVADORAS?", "CANDIDATOS CALIFICADOS?", "UNA MEJORA PROFESIONAL?"],
        text1: "¿BUSCA",
        infoItems: [
            { title: "Selección y Reclutamiento de Personal", description: "Ofrecemos apoyo individual en los procesos de selección e integración para candidatos y clientes.", path: "/empresa/seleccion-y-reclutamiento-de-personal" },
            { title: "Evaluaciones de Personal", description: "Apoyo en la identificación de talentos, desarrollo de capital humano, integración de profesionales y creación de una fuerte cultura empresarial.", path: "/empresa/evaluaciones-de-personal" },
            { title: "Internacional", description: "Sandra Roggero-Beratung ayuda en la evaluación y desarrollo de equipos a través de evaluaciones personalizadas y planes de competencia individuales.", path: "/empresa/internacional" },
            { title: "Funciones", description: "La selección de empleados adecuados es crucial. Sandra Roggero ayuda a atraer talentos que compartan su historia y puedan formar su empresa.", path: "/empresa/funciones" },
            { title: "Búsqueda Especializada", description: "Sandra Roggero-Beratung apoya a empresas de todo el mundo en la contratación de profesionales a través de la gestión de talentos y procesos de selección.", path: "/empresa/busqueda-especializada" },
            { title: "Auditoría de Inclusión", description: "Superamos prejuicios en el proceso de selección a través de una auditoría de inclusión que analiza cada paso desde la descripción del puesto hasta la incorporación.", path: "/empresa/auditoria-de-inclusion" }
        ],
        detail1: "Contribuimos cada día a que las personas experimenten una profunda satisfacción en su camino profesional y crezcan personalmente.",
        detail2: "Hoy en día, se trata de más que solo 'encontrar' nuevos empleados rápidamente. Se trata de construir equipos de trabajo óptimos, compuestos por una organización estructurada de manera coherente con los objetivos de la empresa.",
        detail3: "Contactar",
        homeInfo1: "LA SOCIEDAD CAMBIA, LOS ESTILOS DE LIDERAZGO EVOLUCIONAN, ¿POR QUÉ NO EVOLUCIONAR TAMBIÉN EL PROCESO DE SELECCIÓN?",
        infoItems2: [
            { title: "INNOVACIÓN", description: "Hoy en día, se trata de más que solo 'encontrar' nuevos empleados rápidamente. Se trata de construir equipos de trabajo óptimos, compuestos por una organización estructurada de manera coherente con los objetivos de la empresa. Por eso, las empresas necesitan un socio que entienda el mercado y tenga experiencia práctica.", 
              image: optimizedImageURL('v1719429422/bxeybnb6rq6jqnlpd3t1.jpg')
            },
            { title: "COMPETENCIA EN RECLUTAMIENTO", description: "Evaluación exhaustiva de nuestros candidatos, para que nuestros clientes empresariales puedan formar equipos de trabajo óptimos, compuestos por jóvenes y/o adultos comprometidos, disciplinados y bien estructurados que correspondan a sus objetivos empresariales.", 
              image: optimizedImageURL('v1719432618/xfum9gljkffxtjhfd5tu.jpg')
            },
            { title: "VISIÓN", description: "Nuestro objetivo es crear equipos de alto rendimiento que logren los objetivos empresariales y contribuyan a una cultura laboral positiva e inclusiva.",
              image: optimizedImageURL('v1719875148/cl4jynz7brqnggwvxwzm.jpg')
            },
            { title: "NUEVOS CAMINOS EN LA ADQUISICIÓN DE PERSONAL", description: "Con ideas frescas y un compromiso apasionado, buscamos revolucionar el área de adquisición de personal.", 
              image: optimizedImageURL('v1719875147/jghjwlvwkdizzhrdpb4r.jpg')
            }
        ],
        tituloServicio: "Como consultoría de recursos humanos, también podemos ayudarle con lo siguiente:",
        services: [
            { title: "ESTUDIOS", image: optimizedImageURL('v1719434278/ocddglzj4wpc5lbidcve.jpg') },
            { title: "FORMACIÓN", image: optimizedImageURL('v1719434278/rru0wddozzlje8tv7wo7.jpg') },
            { title: "PRÁCTICAS", image: optimizedImageURL('v1720047308/qhowjwv3jbywvh3fgqeb.jpg') },
            { title: "TRABAJO", image: optimizedImageURL('v1720047637/okxctjjmmdegr4ptljhn.jpg') },
            { title: "IMPUESTOS", image: optimizedImageURL('v1720047700/pqjjlckzyuvgt32bxkhk.jpg') },
            { title: "VIVIENDA", image: optimizedImageURL('v1720616614/cebiafyysmleabgeofvi.jpg') },
            { title: "TRANSPORTE", image: optimizedImageURL('v1720622228/omcgfbrslqda69acfxr0.jpg') },
            { title: "VISADO",image:optimizedImageURL('v1720648648/yazfttcufijofwthhes8.jpg') },
            { title: "IDIOMA",image:optimizedImageURL('v1720652893/zwpk88oskknftyafqm5u.jpg') },
        ],
        homeInfo2: "¿DESEAS MÁS INFORMACIÓN?",
        homeInfo3: "Contactar",
        
    },
    footer:{
        Informationen:{title:"Información",links:[
            {link:"/derechos-del-usuario",detail:"Derechos del Usuario"},
            {link:"/politica-de-privacidad",detail:"Política de Privacidad"},
        ]},
        MeineDienstleistungen:{title:"Mis Servicios",links:[
            {link:"/mis-servicios/estudio-formacion-practicas",detail:"Estudio - Formación - Prácticas"},
            {link:"/mis-servicios/trabajo-impuestos",detail:"Trabajo - Impuestos"},
            {link:"/mis-servicios/vivienda-transporte",detail:"Vivienda - Transporte"},
            {link:"/mis-servicios/visa-idioma",detail:"Visa - Idioma"},
        ]},
        Kontakt:{title:"Contacto",links:[
            {detail:"Email: contacto@sandra-roggero.de"},
            {detail:"Teléfono: +49 123 456 789"},
            {detail:"Dirección: Calle Ejemplo 1, 12345 Ciudad Ejemplo, Alemania"},
            {detail:"Horario: Lun-Vie, 9:00 - 18:00"},
        ]},
        info:"2024 Todos los derechos reservados"
    },
    
    Unternehmen:{
        PersonalauswahlUndRekrutierung:{
            title:"Selección y Reclutamiento de Personal",
            description:"Nos comprometemos en cada proceso de selección como si fuera nuestra propia empresa, enfocándonos en las personas y escuchándolas, ya sean candidatos o clientes. La consultoría y el reconocimiento de necesidades tienen un papel significativo. Además, gracias a nuestro propio servicio 'Selección de Onboarding', acompañamos y aseguramos la mejor integración posible de los candidatos en la empresa. Somos consultores de reclutamiento y coaches de integración. El proceso de onboarding no solo se enfoca en el seguimiento después de la selección, sino que acompaña el proceso desde el principio, siempre en línea con la misión y el objetivo de la empresa. Cada proceso de selección es único porque no hay dos personas o empresas iguales. Hay una solución para cada empresa, y nosotros en Sandra Roggero Consulting sabemos cómo encontrarla."
        },
        Personalbewertungen:{
            title:"Evaluaciones de Personal",
            description:"La evaluación del desempeño es una herramienta importante para aumentar la productividad. Conocer las habilidades de sus equipos y entender lo que pueden aportar a la empresa le permite proporcionarles las herramientas necesarias para promover tanto su desarrollo profesional como el de la empresa.",
            description2:"Sandra Roggero Consulting le ayuda a evaluar sus equipos enfocándose en las personas.",
            dataInfo:[
                "Reconocer y desarrollar los talentos únicos de su empresa.",
                "Realizar evaluaciones adaptadas a sus desafíos y equipo.",
                "Recompensar la productividad y el rendimiento de los empleados en procesos de promoción o selección internos.",
                "Medir las competencias personales, el potencial y los intereses de los empleados en línea con la estrategia y los objetivos de la empresa.",
                "Incorporar planes de desarrollo de competencias adaptados a la persona y al puesto."
            ]
        },
        International:{
            title:"Internacional",
            description:"Cuando se trata de consolidar talentos y mano de obra internacional, es necesario contar con perfiles con experiencia y conocimientos específicos, ya sea a nivel nacional o internacional, para impulsar la siguiente fase de la empresa.",
            description2:"Le acompañamos en proyectos internacionales gestionando la gestión de talentos y los procesos de selección para encontrar los profesionales adecuados en Alemania y/o en el extranjero.",
            description3:"UN DEPARTAMENTO ESPECIALIZADO",
            description4:"Encontramos a los profesionales adecuados, independientemente de su ubicación.",
            description5:"Nuestra metodología de búsqueda directa y proactiva en el mercado, nuestra experiencia internacional, nuestra sede en Perú y nuestro personal en todo el mundo nos ayudan a encontrar los talentos más calificados."
        },
        Inklusionsaudit:{
            title:"Auditoría de Inclusión",
            description:"Identificamos sesgos y eliminamos obstáculos en el proceso de selección. Los procesos de selección han evolucionado con el tiempo, y han surgido sistemas, contenidos o tecnologías adicionales. Aunque estos procesos ofrecen un servicio funcional y experiencia en la selección de talentos, es probable que existan sesgos en cada etapa de su proceso. Nuestra auditoría de inclusión analiza cada punto de contacto con el candidato durante el proceso de selección, desde la descripción del puesto para esta posición, pasando por su área de talento interno, el proceso de solicitud, la entrevista y la selección, hasta la incorporación. Este enfoque proporciona una transparencia constante en cuanto a barreras y sesgos activos y ocultos."
        },
        Funktionen:{
            title:"Funciones",
            description:"Identificación de talentos, comprensión y desarrollo del capital humano. Comprender el mercado laboral para reconocer nuevas necesidades y prever los perfiles que la empresa necesitará a corto plazo. Encontrar las mejores maneras de integrarlos en la empresa. Incorporar profesionales en las diferentes áreas de la empresa, siendo conscientes de sus habilidades y sabiendo cómo pueden añadir valor a la empresa. Crear una cultura corporativa sólida."
        },
        FachspezifischeSuche:{
            title:"Búsqueda Especializada",
            description:"Las personas son el corazón de cada proyecto. La selección de empleados calificados es sin duda uno de los factores más importantes cuando se trata de alcanzar todos los objetivos de su empresa. Por lo tanto, la incorporación de perfiles profesionales que se ajusten a los valores y la misión de su empresa debe ser una de sus prioridades. Para atraer a los talentos más buscados y calificados, debe contar la historia única detrás de su empresa. Por eso es importante buscar el apoyo y la experiencia de una consultoría de personal especializada que sepa lo que realmente necesita y tenga una amplia red de profesionales que quieran realizar todo su potencial en una empresa como la suya. En Sandra Roggero Consulting, miramos más allá de la descripción del puesto para entender la historia que cuenta su empresa y lo conectamos con las personas adecuadas que lo ayudarán a transformar su empresa."
        },
        homeInfo2:"¿QUIERE MÁS INFORMACIÓN?",
        homeInfo3:"Contactar"
    }
    
}

export default es;
