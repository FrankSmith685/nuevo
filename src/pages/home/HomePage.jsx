import React, { useState, useEffect, useMemo } from "react";
import { FaHandSparkles } from "react-icons/fa";
import banner1 from "../../assets/imagenes/imagen.webp"
import banner2 from "../../assets/imagenes/imagen2.webp"
import banner3 from "../../assets/imagenes/imagen3.webp"
import bannerPrincipal from "../../assets/imagenes/bannerPrincipal.png"
 
const HomePage = () => {
  const [textIndex, setTextIndex] = useState(0);
  // const [displayedText, setDisplayedText] = useState("");
  // const [showCursor, setShowCursor] = useState(false); // Estado para controlar el parpadeo del cursor

  const texts = useMemo(() => [
    "Desarrollador FullStack",
    "JavaScript | React | Node"
  ], []);


  const data = [
    // { path: "/", label: "Home", icon: <FaHome /> },
    { label: "Analizamos el employee journey de tu empresa. Desde las vías de captación de talento y desarrollo del mismo hasta las necesidades formativas y la alineación con los objetivos de negocio.", icon: ''},
    { label: "Diseñamos la mejor estrategia de gestión de personas que implementamos desde el Comité de Dirección hasta el personal de base.",icon: ''},
    { label: "Analizamos de forma constante los planes de acción. Nos convertimos en tu Consultor de RRHH y diseñamos indicadores que permitan la mejora continua.",icon: ''},
  ];

  // const data2 = [
  //   { label: "Analizamos el employee journey de tu empresa. Desde las vías de captación de talento y desarrollo del mismo hasta las necesidades formativas y la alineación con los objetivos de negocio.", icon: ''},
  //   { label: "Diseñamos la mejor estrategia de gestión de personas que implementamos desde el Comité de Dirección hasta el personal de base.",icon: ''},
  //   { label: "Analizamos de forma constante los planes de acción. Nos convertimos en tu Consultor de RRHH y diseñamos indicadores que permitan la mejora continua.",icon: ''},
  // ]
  
  return (
    <>
      <div className="w-full bg-bg_favorite_1 h-h_screen_80 relative">
        <div className="w-full bg-bg_favorite_1 absolute top-0 left-0 h-full z-50">
          <div className="w-full h-full">
            <img src={bannerPrincipal} alt="" className="w-full h-full object-cover opacity-70" />
          </div>
          <div className="w-full h-full absolute top-0 left-0 flex flex-col justify-center items-center col-span-1 space-y-4">
            <h2 className="text-white font-bold text-5xl">Berater für Humanressourcen</h2>
            <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-6 rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50">
            Kontakt aufnehmen
            </button>
          </div>
        </div>
      </div>

      <div className="w-full h-full p-20 space-y-8">
        <h2 className="text-orange-500 font-normal text-center text-6xl">Sandra Roggero Beratung</h2>
        <p className="text-center">Potencia tu empresa creando la mejor estrategia de personas con la ayuda de Sandra Roggero Beratung, tu Consultora de Recursos Humanos en Barcelona. Somos expertos en la gestión de recursos humanos, desde la selección de talento hasta su fidelización. Creamos y ejecutamos el employee journey de tus empleados, impulsando su desarrollo y reduciendo la rotación. Nuestros especialistas apoyan a tu Comité de Dirección y forman a tus futuros líderes en soluciones innovadoras y procesos eficaces. Confía en nuestros expertos de recursos humanos para aumentar el compromiso de tu equipo.</p>
      </div>
      <div className="bg-gray-800 w-full h-96 flex">
        <div className="w-full h-full relative">
          <div className="w-full h-full flex flex-col justify-center items-center top-0 left-0 absolute bg-gray-500 space-y-4">
            <h2 className="text-white font-bold text-3xl">Selección de Personal y Onboarding</h2>
            <button className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
              Saber más
            </button>
          </div>
        </div>
        <div className="w-full h-96">
          <img src={banner1} alt="" className="w-full h-full object-cover" />
        </div>
      </div>
      <div className="bg-gray-800 w-full h-96 flex">
        <div className="w-full h-full">
          <img src={banner2} alt="" className="w-full h-96 object-cover" />
        </div>
        <div className="w-full h-full relative">
          <div className="w-full h-full flex flex-col justify-center items-center top-0 left-0 absolute bg-orange-500 space-y-4">
            <h2 className="text-white font-bold text-3xl">Selección de Personal y Onboarding</h2>
            <button className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
              Saber más
            </button>
          </div>
        </div>
      </div>
      <div className="bg-gray-800 w-full h-96 flex">
        <div className="w-full h-full relative">
          <div className="w-full h-full flex flex-col justify-center items-center top-0 left-0 absolute bg-white space-y-4">
            <h2 className="text-black font-bold text-3xl">Consultoría y cambio</h2>
            <button className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
              Saber más
            </button>
          </div>
        </div>
        <div className="w-full h-96">
          <img src={banner3} alt="" className="w-full h-full object-cover" />
        </div>
      </div>
      <div className="bg-gray-800 w-full h-96 flex">
        <div className="w-full h-full">
          <img src={banner2} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="w-full h-full relative">
          <div className="w-full h-full flex flex-col justify-center items-center top-0 left-0 absolute bg-red-500 space-y-4">
            <h2 className="text-white font-bold text-3xl">Formación para empresas #humanbits </h2>
            <button className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
              Saber más
            </button>
          </div>
        </div>
      </div>
      <div className="bg-red-100 w-full h-80">

      </div>
      <div className="bg-red-200 w-full h-80">

      </div>
      <div className="bg-red-700 w-full h-40">

      </div>
      <div className="w-full">
          <h2 className="px-10">Qué se analiza en una Consultoría de RRHH y cómo puede ayudar a tu empresa:</h2>
          <ul className="w-full bg-red-800 flex justify-between items-center px-10 py-5">
            {data.map((item, index) => (
                <li key={index} className="flex justify-start items-start ">
                  {item.icon && <span className="text-start">{item.icon}</span>}
                  <p className={`relative z-10 transition duration-300 ease-in-out transform `}>
                      {item.label}
                  </p>
                </li>
            ))}
          </ul>
      </div>
      <div>
        <h2>¿Por qué elegir Sandra Roggero Beratung como Consultora de Recursos Humanos?</h2>
        <p>Como tu Consultora de Recursos Humanos estamos acostumbrados a entender y potenciar el employee journey. Nuestro enfoque personalizado y nuestra profunda comprensión de las tendencias y retos en recursos humanos nos permiten ofrecer soluciones prácticas y efectivas adaptadas a las necesidades específicas de tu empresa. Y es que sabemos que una Consultoría de Recursos Humanos líder debe estar comprometida en ser socio estratégico, brindando asesoramiento y soluciones que marcan la diferencia en la gestión de tu talento.</p>
        <ul className="w-full bg-red-800 flex justify-between items-center px-10 py-5 space-x-4">
          <li className="w-1/4 h-72 bg-red-300 ">
          </li>
          <li className="w-1/4 h-72 bg-red-300 ">
          </li>
          <li className="w-1/4 h-72 bg-red-300 ">
          </li>
          <li className="w-1/4 h-72 bg-red-300 ">
          </li>
        </ul>
      </div>
      <div>
          <h2>Como Consultora de RRHH también te podemos ayudar con:</h2>
          <ul className="w-full bg-red-800 flex justify-between items-center px-10 py-5 space-x-4">
          <li className="w-1/4 h-72 bg-red-300 ">
          </li>
          <li className="w-1/4 h-72 bg-red-300 ">
          </li>
          <li className="w-1/4 h-72 bg-red-300 ">
          </li>
        </ul>
        <ul className="w-full bg-red-800 flex justify-between items-center px-10 py-5 space-x-4">
          <li className="w-1/4 h-72 bg-red-300 ">
          </li>
          <li className="w-1/4 h-72 bg-red-300 ">
          </li>
          <li className="w-1/4 h-72 bg-red-300 ">
          </li>
        </ul>
      </div>
      <div>
        <h2>¿En qué consiste exactamente una Consultoría de Recursos Humanos? </h2>
        <p>Una Consultoría de Recursos Humanos como la nuestra se dedica a una labor esencial para el crecimiento y la eficiencia de tu organización. Somos expertos en analizar tu estrategia de personas, desde los equipos hasta las herramientas y los procedimientos que les impactan. Queremos ser tu socio de Recursos Humanos, trabajando juntos en proyectos que ayuden a crecer tu empresa. Nuestra meta es maximizar el potencial de tu capital humano para que se convierta en un activo estratégico fundamental en la consecución de los objetivos de tu empresa.
            Al colaborar con una consultoría de recursos humanos, estás asegurando que cada paso que das en la gestión de tu talento se base en la experiencia y el conocimiento profundo de profesionales que han dedicado años a perfeccionar su asesoramiento en este campo. En Sandra Roggero Beratung, no solo ofrecemos servicios de consultoría, sino que también nos convertimos en tus aliados, líderes en la definición de estrategias personalizadas. Estamos aquí para ayudarte a seleccionar el mejor talento, fidelizarlo y potenciarlo, considerando cada proyecto como una oportunidad de crecimiento tanto para tus empleados como para tu empresa.
        </p>
        
      </div>
    </>
  );
  
  
};

export default HomePage;