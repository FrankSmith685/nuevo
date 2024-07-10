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
            { title: "STUDIUM",image:optimizedImageURL('v1719875147/jghjwlvwkdizzhrdpb4r.jpg') },
            { title: "AUSBILDUNG",image:optimizedImageURL('v1719875147/jghjwlvwkdizzhrdpb4r.jpg') },
            { title: "PARKTIKUM",image:optimizedImageURL('v1719875147/jghjwlvwkdizzhrdpb4r.jpg') },
            { title: "ARBEIT",image:optimizedImageURL('v1719875147/jghjwlvwkdizzhrdpb4r.jpg') },
            { title: "STEUERN",image:optimizedImageURL('v1719875147/jghjwlvwkdizzhrdpb4r.jpg') },
            { title: "WOHNEN",image:optimizedImageURL('v1719875147/jghjwlvwkdizzhrdpb4r.jpg') },
            { title: "BEFÖRDERUNG",image:optimizedImageURL('v1719875147/jghjwlvwkdizzhrdpb4r.jpg') },
            { title: "VISUM",image:optimizedImageURL('v1719875147/jghjwlvwkdizzhrdpb4r.jpg') },
            { title: "SPRACHE",image:optimizedImageURL('v1719875147/jghjwlvwkdizzhrdpb4r.jpg') },
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
    }
    
    
}

export default es;
