
import React, { useState } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer"; 
import banner1 from "../../assets/imagenes/imagen.webp";
import banner2 from "../../assets/imagenes/imagen2.webp";
import banner3 from "../../assets/imagenes/imagen3.webp";
import banner4 from "../../assets/imagenes/imagen5.webp";
import bannerPrincipal from "../../assets/video/banner.mp4";
import { SearchIcon, PresentationChartBarIcon, ScaleIcon } from '@heroicons/react/outline';
import { HiOutlineEye, HiOutlineUsers, HiOutlineThumbUp, HiOutlineChartBar,HiOutlineChevronDown, HiOutlineChevronUp } from "react-icons/hi";

// consultoria
import imagen1 from "../../assets/imagenes/consultoria/imagen1.jpg";
import imagen2 from "../../assets/imagenes/consultoria/imagen2.webp";
import imagen3 from "../../assets/imagenes/consultoria/imagen3.webp";
import imagen4 from "../../assets/imagenes/consultoria/imagen4.jpg";
import imagen6 from "../../assets/imagenes/consultoria/imagen5.webp";
import imagen5 from "../../assets/imagenes/consultoria/imagen6.jpg";
import ContactForm from "../../components/home/contactForm/contactForm";
import { useNavigate } from "react-router-dom";



const HomePage = () => {

  const [ref1, inView1] = useInView();
  const [ref2, inView2] = useInView();
  const [ref3, inView3] = useInView();
  const [ref4, inView4] = useInView();
  const [ref5, inView5] = useInView();
  const [ref6, inView6] = useInView();
  const [ref7, inView7] = useInView();
  const [ref8, inView8] = useInView();

  const navigate = useNavigate();


  const sections = [
    {
      title: "Búsqueda de Talento",
      description: "Analizamos el employee journey de tu empresa. Desde las vías de captación de talento y desarrollo del mismo hasta las necesidades formativas y la alineación con los objetivos de negocio.",
      icon: SearchIcon
    },
    {
      title: "Estrategia y Análisis",
      description: "Diseñamos la mejor estrategia de gestión de personas que implementamos desde el Comité de Dirección hasta el personal de base.",
      icon: PresentationChartBarIcon
    },
    {
      title: "Consultoría de RRHH",
      description: "Analizamos de forma constante los planes de acción. Nos convertimos en tu Consultor de RRHH y diseñamos indicadores que permitan la mejora continua.",
      icon: ScaleIcon
    }
  ];

  const sections2 = [
    {
      title: "VISIÓN SISTÉMICA",
      description: [
        "Perspectiva múltiple",
        "Modelo High Performance Organisations",
        "Identificamos el valor que aporta cada persona a la organización"
      ],
      icon: HiOutlineEye,
    },
    {
      title: "FOCO EN LAS PERSONAS",
      description: [
        "Personas en el centro, sin ellas las empresas no existen",
        "Cómo impacta un cambio en las personas y cómo gestionarlo"
      ],
      icon: HiOutlineUsers,
    },
    {
      title: "MIRADA APRECIATIVA",
      description: [
        "Porque cada persona merece su oportunidad. Empleados/as y directivos/as",
        "Identificación de potencial profesional en base a logros, fortalezas y aspiraciones"
      ],
      icon: HiOutlineThumbUp,
    },
    {
      title: "ORIENTACIÓN A RESULTADOS",
      description: [
        "Indicadores constantes",
        "Más de 50 años acompañando a empresarios en su estrategia de personas"
      ],
      icon: HiOutlineChartBar,
    },
  ];

  const services = [
    "ACOMPAÑAMIENTO DIRECTIVO",
    "EVALUACIONES",
    "WORKSHOPS Y TEAMBUILDINGS",
    "SELECCIÓN DE DIRECTIVOS",
    "PLANES DE IGUALDAD",
    "GESTIÓN DEL CAMBIO ORGANIZACIONAL",
  ];
  
  const backgrounds = [
    `url(${imagen1})`,
    `url(${imagen2})`,
    `url(${imagen3})`,
    `url(${imagen4})`,
    `url(${imagen5})`,
    `url(${imagen6})`,
  ];
  
  // 
  const sections3 = [
    {
      title: "Beneficios",
      description: `En Montaner, acumulamos más de 50 años de experiencia asesorando a empresas y diseñando estrategias para superar los desafíos del área de personas. Nuestro enfoque no se limita a las tareas operativas, sino que se extiende a la construcción de una asociación sólida con tu empresa, en la que compartimos la responsabilidad de definir la estrategia de personas que tus equipos necesitan para alcanzar sus objetivos de negocio. Analizamos minuciosamente los equipos, sus capacidades, funciones, desarrollo, competencias y las relaciones interpersonales, considerando cada proyecto como una oportunidad para mejorar. A través de auditorías exhaustivas, creamos planes de acción integrales que abarcan desde la selección de talento, el headhunting y el onboarding, hasta los planes de acogida, el desarrollo de carrera y, si es necesario, incluso el offboarding. Además, dentro de nuestra consultoría de recursos humanos, ponemos especial énfasis en la creación y adaptación de puestos de trabajo, asegurando que cada rol contribuya de manera óptima a la visión de tu empresa.`,
    },
    {
      title: "Funciones",
      description: `Nuestra misión es servirte como líder en todos los aspectos relacionados con las personas de tu organización. Más allá de las tareas convencionales de consultoría, también actuamos como coaches para tu Comité de Dirección, ofreciendo asesoramiento y soluciones personalizadas en momentos críticos. Abordamos problemas de comunicación transversal y realizamos campañas de marketing interno para impulsar la cohesión y la motivación de tu equipo. Trabajamos por proyectos y KPIs medibles, lo que garantiza que nuestros servicios sean orientados a resultados tangibles. En Montaner, fusionamos la eficiencia de nuestros servicios con un enfoque humano, creando una combinación que ha cimentado relaciones estables con nuestros clientes que superan las dos décadas en muchos casos. Nuestro equipo de consultores se convierte en tu compañero en el día a día, ofreciendo asesoramiento personalizado que impulsa el crecimiento de tu empresa y la satisfacción de tus empleados. Estamos aquí para proponer soluciones efectivas que transformen la gestión de recursos humanos en un activo estratégico para tu organización.`,
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const sections4 = [
    {
      title: "Solución 100% personalizada",
      description: [
        "Nuestra consultoría en recursos humanos se basa en la comprensión profunda de los procesos que moldean el employee journey. Ya sea que estés buscando atraer perfiles altamente especializados, mejorar la capacidad de liderazgo en tu departamento de recursos humanos, o abordar los retos de retención de talento en un mercado competitivo, Montaner te ofrece soluciones personalizadas.",
        "Cada empresa, independientemente de su tipo o sector, enfrenta desafíos específicos en la gestión de recursos humanos. En Montaner nos adaptamos al tamaño, sector y cultura interna de tu empresa. Somos expertos diseñando el employee journey que tu empleado necesita, pero dentro de una estructura realista, en base a la realidad de tu organización. Auditamos tu área de personas y creamos el journey de tu empleado para poder implementarlo desde el día siguiente."
      ],
    },
    {
      title: "En tendencia con las expectativas del empleado",
      description: [
        "En Montaner, consideramos que el employee journey va más allá del proceso de incorporación y desarrollo de carrera. También implica abordar tendencias en el mundo del trabajo, como la creciente demanda de flexibilidad, la valoración de un equilibrio entre vida personal y profesional, y la adaptación a entornos de trabajo remoto. Nuestros servicios como empresa de recursos humanos no se limitan a funciones convencionales; brindamos soluciones que impulsan la innovación y la adaptación a un entorno laboral en constante cambio. Trabajamos en el on boarding y plan de acogida, el plan de carrera profesional, incluso el off boarding; diseñando la estrategia de desvinculación de los empleados",
        "Como consultora de recursos humanos, optimizamos puestos de trabajo para satisfacer las expectativas actuales, apoyando la diversidad e inclusión y enriqueciendo la vida profesional del empleado."  
      ],  
    },
  ];

  const [openIndex1, setOpenIndex1] = useState(null);

  const handleToggle1 = (index) => {
    setOpenIndex1(openIndex1 === index ? null : index);
  };


  const noticias = [
    {
      title: "Montaner y Aticco, una nueva apuesta por el talento en la PYME",
      description: "¡Empezamos 2024 con una nueva colaboración! Este año arrancamos fuerte con un partnership con Aticco, uno de los líderes del sector de coworking español y...",
      buttonText: "SEGUIR LEYENDO",
      imageUrl: "https://via.placeholder.com/400x300"
    },
    {
      title: "¿Cómo integrar a las nuevas generaciones en el ámbito laboral?",
      description: "En los últimos años, las empresas han estado viendo cómo sacar el máximo partido a sus equipos multigeneracionales. Todo un reto, ya que estamos hablando...",
      buttonText: "SEGUIR LEYENDO",
      imageUrl: "https://via.placeholder.com/400x300"
    },
    {
      title: "Retos a los que se enfrentan los profesionales de RRHH este 2024",
      description: "Sin duda, dejamos atrás un año lleno de cambios y retos, algunos de los cuales aún seguirán presentes en este nuevo 2024. En parte debido...",
      buttonText: "SEGUIR LEYENDO",
      imageUrl: "https://via.placeholder.com/400x300"
    }
  ];


  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    email: '',
    company: '',
    interest: '',
    phone: '',
    province: '',
    referral: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar el envío del formulario
    console.log(formData);
  };

  const handleClickSeleccionReclutamiento = () => {
    navigate("/seleccion-y-headhunting/seleccion-personal-y-reclutamiento");
};

  return (
    <>
      <div className="w-full h-screen bg-bg_favorite_1 relative">
        <video autoPlay loop muted className="absolute top-0 left-0 w-full h-full object-cover z-0">
          <source src={bannerPrincipal} type="video/mp4" />
          Tu navegador no soporta el elemento de video.
        </video>
        <div className="flex flex-col justify-center items-center h-full z-20 relative space-y-4">
          <h2 className="text-white font-bold text-5xl">Berater für Humanressourcen</h2>
          <Link
            to="scroll-target"
            smooth={true}
            duration={500}
            className="bg-gradient-to-r from-purple-600 to-blue-500 text-white py-3 px-8 rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50 hover:bg-blue-600"
          >
            <span className="inline-block mr-2 animate-bounce">🚀</span> Kontakt aufnehmen
          </Link>
        </div>
      </div>
      <div ref={ref1}className="">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={inView1 ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="w-full h-full p-20 space-y-8"
        >
          <h2 className="font-lobster text-blue-700 text-center text-6xl">Sandra Roggero Beratung</h2>
          <p className="text-center">Stärken Sie Ihr Unternehmen, indem Sie die beste Personalstrategie mit Hilfe von Sandra Roggero Beratung, Ihrer Personalberatung in Barcelona, entwickeln. Wir sind Experten in der Personalverwaltung, von der Talentauswahl bis zur Bindung. Wir entwickeln und implementieren den Mitarbeiterpfad Ihrer Mitarbeiter, fördern ihre Entwicklung und reduzieren die Fluktuation. Unsere Spezialisten unterstützen Ihr Führungsteam und bilden Ihre zukünftigen Führungskräfte in innovativen Lösungen und effektiven Prozessen aus. Vertrauen Sie unseren Personalprofis, um das Engagement Ihres Teams zu steigern.</p>
        </motion.div>
      </div>

      <div ref={ref2} className="bg-gray-800 w-full h-96 flex items-center justify-center">
        <div className="w-full h-full relative">
          <div className={`w-full h-full flex flex-col justify-center items-center top-0 left-0 absolute  space-y-4`}>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={inView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-white font-bold text-3xl"
            >
              Selección de Personal y Reclutamiento
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={inView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className=""
            >
               <button 
                className="bg-transparent border-white border-2 px-6 py-3 font-medium text-white hover:bg-white hover:text-blue-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
                onClick={handleClickSeleccionReclutamiento}
                >
                Saber más
              </button>
            </motion.div>
           
          </div>
        </div>
        <div className="w-full h-96">
          <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={inView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="h-96"
            >
               <img src={banner1} alt="" className="w-full h-full object-cover" />
            </motion.div>
        </div>
      </div>

      <div ref={ref3} className="bg-red-800 w-full h-96 flex items-center justify-center">
        <div className="w-full h-96">
          <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={inView3 ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="h-96"
            >
               <img src={banner2} alt="" className="w-full h-full object-cover" />
            </motion.div>
        </div>
        <div className="w-full h-full relative">
          <div className={`w-full h-full flex flex-col justify-center items-center top-0 left-0 absolute  space-y-4`}>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={inView3 ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
    
              className="text-white font-bold text-3xl"
            >
              Servicio de Headhunting
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={inView3 ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}    
              className=""
            >
              <button className="bg-transparent border-white border-2 px-6 py-3 font-medium text-white hover:bg-white hover:text-blue-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50">
                Saber más
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      <div ref={ref4} className="bg-white w-full h-96 flex items-center justify-center">
        <div className="w-full h-full relative">
          <div className={`w-full h-full flex flex-col justify-center items-center top-0 left-0 absolute  space-y-4`}>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={inView4 ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-gray-700 font-bold text-3xl"
            >
              Consultoría y cambio
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={inView4 ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className=""
            >
               <button className="bg-transparent border-gray-700 border-2 px-6 py-3 font-medium text-gray-700 hover:bg-gray-700 hover:text-blue-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-opacity-50">
                Saber más
              </button>
            </motion.div>
           
          </div>
        </div>
        <div className="w-full h-96">
          <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={inView4 ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="h-96"
            >
               <img src={banner1} alt="" className="w-full h-full object-cover" />
            </motion.div>
        </div>
      </div>

      <div ref={ref5} className="bg-green-800 w-full h-96 flex items-center justify-center">
        <div className="w-full h-96">
          <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={inView5 ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="h-96"
            >
               <img src={banner3} alt="" className="w-full h-full object-cover" />
            </motion.div>
        </div>
        <div className="w-full h-full relative">
          <div className={`w-full h-full flex flex-col justify-center items-center top-0 left-0 absolute  space-y-4`}>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={inView5 ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
    
              className="text-white font-bold text-3xl"
            >
              Formación para empresas #humanbits
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={inView5 ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}    
              className=""
            >
              <button className="bg-transparent border-white border-2 px-6 py-3 font-medium text-white hover:bg-white hover:text-blue-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50">
                Saber más
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      <div ref={ref6} className="bg-orange-800 w-full h-96 flex items-center justify-center">
        <div className="w-full h-full relative">
          <div className={`w-full h-full flex flex-col justify-center items-center top-0 left-0 absolute  space-y-4`}>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={inView6 ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-white font-bold text-3xl"
            >
              HR Business Partner
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={inView6 ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className=""
            >
               <button className="bg-transparent border-white border-2 px-6 py-3 font-medium text-white hover:bg-white hover:text-blue-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50">
                Saber más
              </button>
            </motion.div>
           
          </div>
        </div>
        <div className="w-full h-96">
          <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={inView6 ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="h-96"
            >
               <img src={banner4} alt="" className="w-full h-full object-cover" />
            </motion.div>
        </div>
      </div>

      <div ref={ref7} className="bg-gray-800 w-full h-auto flex items-center justify-center py-16">
          <div className={`w-full h-full flex justify-center items-center space-x-6`}>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={inView7 ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-white font-bold text-3xl"
            >
             ¿Necesitas seleccionar talento?
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={inView7 ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className=""
            >
              <button className="bg-transparent border-white border-2 px-6 py-3 font-medium text-white hover:bg-white hover:text-blue-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50">
                Saber más
              </button>
            </motion.div>
          </div>
      </div>

      <div className="py-10">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-700">Qué se analiza en una Consultoría de RRHH y cómo puede ayudar a tu empresa:</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-10">
          {sections.map((section, index) => (
            <div key={index} className="bg-gradient-to-r from-blue-200 to-blue-100 border border-blue-300 p-6 rounded-lg flex items-center justify-center hover:shadow-lg transition duration-300 ease-in-out">
              <section.icon className="h-40 w-40 text-blue-600 mr-4" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-gray-700">{section.title}</h3>
                <p className="text-gray-700">{section.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="pb-10 px-10">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-700">¿Por qué elegir Montaner como Consultora de Recursos Humanos?</h2>
        <p className="text-gray-700 text-center">Como tu Consultora de Recursos Humanos estamos acostumbrados a entender y potenciar el employee journey. Nuestro enfoque personalizado y nuestra profunda comprensión de las tendencias y retos en recursos humanos nos permiten ofrecer soluciones prácticas y efectivas adaptadas a las necesidades específicas de tu empresa. Y es que sabemos que una Consultoría de Recursos Humanos líder debe estar comprometida en ser socio estratégico, brindando asesoramiento y soluciones que marcan la diferencia en la gestión de tu talento.</p>
      </div>

      <div className="p-8 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-700">Servicios de Consultoría de RRHH</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {sections2.map((section, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-105"
            >
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-6 flex justify-center items-center">
                <section.icon className="h-16 w-16 text-white" />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-4 text-gray-700">{section.title}</h3>
                <div className="text-gray-700">
                  {section.description.map((item, i) => (
                    <React.Fragment key={i}>
                      <p>{item}</p>
                      {i < section.description.length - 1 && <hr className="my-4 border-gray-300" />}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="p-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-700">Como Consultora de RRHH también te podemos ayudar con:</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative bg-cover bg-center h-48 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 ease-in-out"
              style={{ backgroundImage: backgrounds[index] }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end justify-center">
                <div className="w-full bg-red-700 text-center">
                  <h3 className="text-base font-bold text-white">{service}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="p-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-700">¿En qué consiste exactamente una Consultoría de Recursos Humanos?</h2>
        <p className="text-gray-700 text-center">Una Consultoría de Recursos Humanos como la nuestra se dedica a una labor esencial para el crecimiento y la eficiencia de tu organización. Somos expertos en analizar tu estrategia de personas, desde los equipos hasta las herramientas y los procedimientos que les impactan. Queremos ser tu socio de Recursos Humanos, trabajando juntos en proyectos que ayuden a crecer tu empresa. Nuestra meta es maximizar el potencial de tu capital humano para que se convierta en un activo estratégico fundamental en la consecución de los objetivos de tu empresa.</p>
        <p className="text-gray-700 text-center pt-5">Al colaborar con una consultoría de recursos humanos, estás asegurando que cada paso que das en la gestión de tu talento se base en la experiencia y el conocimiento profundo de profesionales que han dedicado años a perfeccionar su asesoramiento en este campo. En Montaner, no solo ofrecemos servicios de consultoría, sino que también nos convertimos en tus aliados, líderes en la definición de estrategias personalizadas. Estamos aquí para ayudarte a seleccionar el mejor talento, fidelizarlo y potenciarlo, considerando cada proyecto como una oportunidad de crecimiento tanto para tus empleados como para tu empresa.</p>
      </div>
      <div className="p-8 bg-gray-100 ">
        <div className="max-w-6xl mx-auto">
          {sections3.map((section, index) => (
            <div key={index} className="mb-0">
              <div
                className="flex justify-between items-center bg-gradient-to-r from-green-400 to-blue-500 p-4 rounded-t-lg cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-105"
                onClick={() => handleToggle(index)}
              >
                <h3 className="text-xl font-bold text-white">{section.title}</h3>
                {openIndex === index ? (
                  <HiOutlineChevronUp className="text-white h-6 w-6" />
                ) : (
                  <HiOutlineChevronDown className="text-white h-6 w-6" />
                )}
              </div>
              <div
                className={`${
                  openIndex === index ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
                } overflow-hidden bg-white p-2 rounded-b-lg shadow-lg transition-all duration-500 ease-in-out`}
              >
                <p className="text-gray-700 p-2">{section.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div ref={ref8} className="bg-red-800 w-full h-auto flex items-center justify-center py-16">
          <div className={`w-full h-full flex justify-center items-center space-x-6`}>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={inView8 ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-white font-bold text-3xl"
            >
              Ser tu socio de RRHH es nuestro objetivo
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={inView8 ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className=""
            >
              <button className="bg-transparent border-white border-2 px-6 py-3 font-medium text-white hover:bg-white hover:text-blue-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50">
                Contactar
              </button>
            </motion.div>
          </div>
      </div>

      <div className="p-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-700">El Employee Journey como valor diferencial en la consultoría de RRHH</h2>
        <p className="text-gray-700 text-center">En el mundo empresarial de hoy, se ha vuelto evidente que las organizaciones de éxito no solo se enfocan en el presente, sino que también planifican el futuro de sus empleados dentro de la empresa. En este contexto, Montaner, tras 50 años como Consultora en Recursos Humanos, se posiciona como un socio estratégico para las empresas que desean optimizar su gestión de talento.</p>
        <p className="text-gray-700 text-center pt-5">Entender y gestionar el employee journey, o viaje del empleado, es fundamental en el panorama actual. Para Montaner, este concepto es una parte integral de nuestro enfoque en la consultoría de recursos humanos. Reconocemos que el proceso de adquisición, desarrollo y retención de talento es un elemento clave para el éxito sostenible de cualquier empresa en cualquier sector.</p>
      </div>

      <div className="p-8 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          {sections4.map((section, index) => (
            <div key={index} className="mb-0">
              <div
                className="flex justify-between items-center bg-gradient-to-r from-green-400 to-blue-500 p-4 rounded-t-lg cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-105"
                onClick={() => handleToggle1(index)}
              >
                <h3 className="text-xl font-bold text-white">{section.title}</h3>
                {openIndex1 === index ? (
                  <HiOutlineChevronUp className="text-white h-6 w-6" />
                ) : (
                  <HiOutlineChevronDown className="text-white h-6 w-6" />
                )}
              </div>
              <div
                className={`${
                  openIndex1 === index ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
                } overflow-hidden bg-white p-2 rounded-b-lg shadow-lg transition-all duration-500 ease-in-out`}
              >
                <ul className="list-disc pl-6">
                  {section.description.map((item, i) => (
                    <li key={i} className="text-gray-700 mb-2">{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Noticicias */}
      <div className="p-8 text-center">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Actualidad sobre RRHH</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {noticias.map((noticia, index) => (
            <div key={index} className="relative bg-white rounded-lg overflow-hidden shadow-lg">
              <img src={noticia.imageUrl} alt={noticia.title} className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{noticia.title}</h3>
                <p className="text-gray-700">{noticia.description}</p>
                <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300">
                  {noticia.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
        <button className=" mt-8 bg-gradient-to-r from-red-600 to-blue-500 text-white py-3 px-8 rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50 hover:bg-blue-600">

            VISITA NUESTRO BLOG
          </button>
      </div>

      <ContactForm
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        formData={formData}
      />
      


    </>
  );
};

export default HomePage;

