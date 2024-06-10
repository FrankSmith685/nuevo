import React, { useEffect, useState } from "react";
// import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer"; 
import bannerPrincipal from "../../assets/video/banner.mp4";

import fotoPerfil from "../../assets/imagenes/fotoPerfil.jpg";

// consultoria
import imagen1 from "../../assets/imagenes/consultoria/imagen1.jpg";
import imagen2 from "../../assets/imagenes/consultoria/imagen2.webp";
import imagen3 from "../../assets/imagenes/consultoria/imagen3.webp";
import imagen4 from "../../assets/imagenes/consultoria/imagen4.jpg";
import imagen6 from "../../assets/imagenes/consultoria/imagen5.webp";
import imagen5 from "../../assets/imagenes/consultoria/imagen6.jpg";
import { useNavigate,Link } from "react-router-dom";
import { FaAngleLeft, FaAngleRight, FaArrowRight } from "react-icons/fa";


// infoItems2
import imagenInfo2 from "../../assets/imagenes/InfoImagenesHome/imagen2.jpg";
import imagenInfo3 from "../../assets/imagenes/InfoImagenesHome/imagen3.jpg";
import imagenInfo4 from "../../assets/imagenes/InfoImagenesHome/imagen4.jpg";
import imagenInfo5 from "../../assets/imagenes/InfoImagenesHome/imagen5.jpg";
import imagenInfo6 from "../../assets/imagenes/InfoImagenesHome/imagen6.jpg";

const HomePage = () => {

  const [ref1, inView1] = useInView();

  const navigate = useNavigate();


  const handleClickSeleccionReclutamiento = () => {
    navigate("/seleccion-y-headhunting/consultora-seleccion-personal-y-reclutamiento");
  };

  const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [currentCharIndex, setCurrentCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [displayText, setDisplayText] = useState('');

    useEffect(() => {
        const texts = [
            "INNOVATIVEN LÖSUNGEN?",
            "QUALIFIZIERTEN KANDIDATEN?",
            "EINER PROFESSIONELLEN VERBESSERUNG?"
        ];

        let typingSpeed = 150;

        if (isDeleting) {
            typingSpeed = 75;
        }

        const handleTyping = () => {
            const fullText = texts[currentTextIndex];

            if (isDeleting) {
                setDisplayText((prev) => prev.substring(0, prev.length - 1));
                setCurrentCharIndex((prev) => prev - 1);

                if (currentCharIndex === 0) {
                    setIsDeleting(false);
                    setCurrentTextIndex((prev) => (prev + 1) % texts.length);
                }
            } else {
                setDisplayText((prev) => prev + fullText.charAt(currentCharIndex));
                setCurrentCharIndex((prev) => prev + 1);

                if (currentCharIndex === fullText.length) {
                    setTimeout(() => setIsDeleting(true), 1000);
                }
            }
        };

        const typingInterval = setInterval(handleTyping, typingSpeed);

        return () => clearInterval(typingInterval);
    }, [currentCharIndex, isDeleting, currentTextIndex]);

    const infoItems = [
      { title: "Personalauswahl und Rekrutierung", description: "Wir bieten individuelle Unterstützung in Auswahlverfahren und Integration für Bewerber und Kunden.", path: "/unternehmen/personalauswahl-und-rekrutierung" },
      { title: "Personalbewertungen", description: "Unterstützung bei der Talentidentifizierung, Humankapitalentwicklung, Einbindung von Fachkräften und Schaffung einer starken Unternehmenskultur.", path: "/unternehmen/personalbewertungen" },
      { title: "International", description: "Sandra Roggero-Beratung hilft bei der Teambewertung und -Entwicklung durch maßgeschneiderte Evaluierungen und individuelle Kompetenzpläne.", path: "/unternehmen/international" },
      { title: "Funktionen", description: "Die Auswahl passender Mitarbeiter ist entscheidend. Sandra Roggero hilft, Talente anzuziehen, die Ihre Geschichte teilen und Ihr Unternehmen formen können.", path: "/unternehmen/funktionen" },
      { title: "Fachspezifische Suche", description: "Sandra Roggero-Beratung unterstützt Unternehmen weltweit bei der Rekrutierung von Fachkräften durch Talentmanagement und Auswahlprozesse.", path: "/unternehmen/fachspezifische-suche" },
      { title: "Inklusionsaudit", description: "Wir überwinden Vorurteile im Auswahlprozess durch ein Inklusionsaudit, das jeden Schritt von der Stellenbeschreibung bis zum Onboarding analysiert.", path: "/unternehmen/inklusionsaudit" },
    ];
    

    const [activeIndex, setActiveIndex] = useState(null);

    const infoItems2 = [
      // { title: "MENSCHEN ZUERST", description: "Wir sind Teil der Eurofirms Group und folgen der Kultur People first, wo das Wohlergehen der Menschen im Mittelpunkt unserer Prozesse steht.", image: imagenInfo1 },
      { title: "INNOVATION", description: "Wir verfügen über eine innovative Methodik und bieten umfassende Begleitung.", image: imagenInfo2 },
      { title: "SPEZIALISIERUNG UND ENGAGEMENT", description: "Wir bieten spezialisierte Bereiche in jedem Sektor, um den idealen Kandidaten zu identifizieren.", image: imagenInfo3 },
      { title: "WERTE", description: "Wir setzen auf eine humane Vision von Talenten. Transparenz, Verantwortung und Respekt bilden unsere Hauptwerte.", image: imagenInfo4 },
      { title: "GLOBALE LÖSUNGEN", description: "Wir sind national und international präsent, um die Führungskräfte zu finden, die Ihr Unternehmen vorantreiben.", image: imagenInfo5 }
      ];

      const services = [
        {image:imagen1,title:"FÜHRUNGSBEGLEITUNG"},
        {image:imagen2,title:"BEWERTUNGEN"},
        {image:imagen3,title:"WORKSHOPS UND TEAMBUILDINGS"},
        {image:imagen4,title:"AUSWAHL VON FÜHRUNGSKRÄFTEN"},
        {image:imagen5,title:"GLEICHSTELLUNGSPLÄNE"},
        {image:imagen6,title:"MANAGEMENT DES ORGANISATORISCHEN WANDELS"},
    ];
      
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextCard = () => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % services.length);
    };

    const prevCard = () => {
        setCurrentIndex(prevIndex => (prevIndex === 0 ? services.length - 1 : prevIndex - 1));
    };
    
    const getCardPosition = (index, currentIndex, length) => {
        if (index === currentIndex) return 'translate-x-0 opacity-100';
        if (index === (currentIndex + 1) % length) return 'translate-x-full opacity-50';
        if (index === (currentIndex - 1 + length) % length) return '-translate-x-full opacity-50';
        return 'hidden';
      };


  return (
    <>
      <div className="w-full h-screen bg-bg_favorite_1 relative">
        <video autoPlay loop muted className="absolute top-0 left-0 w-full h-full object-cover z-0">
          <source src={bannerPrincipal} type="video/mp4" />
          Tu navegador no soporta el elemento de video.
        </video>
        <div className="bg-bg_favorite_1 flex flex-col justify-start items-center h-full z-20 relative space-y-4 p-4  md:pt-0 sm:p-6 md:p-8">
          <div className="w-11/12 md:w-2/5 h-auto mt-40 sm:mt-24 md:mt-40 font-streamline">
            <h2 className="text-white font-medium text-xl sm:text-3xl lg:text-4xl text-center md:text-end px-2">
              SUCHEN SIE NACH
            </h2>
            <h2 className="text-customColor5 font-medium text-xl sm:text-3xl lg:text-4xl text-center md:text-end px-2">
              <span>{displayText}</span>
            </h2>
          </div>
          <div className="w-full h-auto flex justify-end items-end absolute bottom-0">
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 text-white bg-transparent backdrop-blur-sm ">
              {infoItems.map((item, index) => (
                <Link 
                  to={item.path} 
                  key={index} 
                  className={`border border-gray-500 p-2 md:p-4 h-12 sm:h-32 md:h-36 flex items-center transition-all duration-300 ${activeIndex === index ? 'hover:bg-white hover:text-gray-700' : ''}`}
                  onMouseEnter={() => setActiveIndex(index)}
                  onMouseLeave={() => setActiveIndex(null)}
                >
                  <div className="flex-1">
                    <h3 className="font-bold">{item.title}</h3>
                    {activeIndex === index && (
                      <p className="opacity-100 transition-opacity duration-300 text-xs sm:text-sm md:text-sm lg:text-base hidden sm:flex">{item.description}</p>
                    )}
                  </div>
                  <div className="ml-2">
                    <FaArrowRight />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div ref={ref1} className="w-11/12 mx-auto text-gray-700 flex flex-wrap py-5 px-2 md:py-20 md:px-10">
      <div className="w-full sm:w-1/2">
        <img src={fotoPerfil} alt="not found" className="w-full h-full object-cover" />
      </div>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={inView1 ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="w-full sm:w-1/2 h-full p-4 md:p-20 space-y-4 sm:space-y-6 md:space-y-8"
      >
        <div className="flex flex-col items-center sm:items-start">
          <h2 className="font-bell font-medium text-lg sm:text-2xl md:text-2xl lg:text-5xl leading-3 transition-colors duration-300 text-gray-800">
            Sandra Roggero M.
          </h2>
          <span className="md:text-base font-bell text-sm sm:text-base lg:text-xl mt-0 transition-colors duration-300 text-gray-800">
            Beratung
          </span>
        </div>
        <p className="text-start text-sm sm:text-sm md:text-lg">
          Wir tragen jeden Tag dazu bei, dass Menschen eine tiefe Erfüllung auf ihrem beruflichen Weg erfahren und persönlich wachsen.
        </p>
        <p className="text-start text-sm sm:text-sm md:text-lg">
          Heute geht es um mehr als nur darum, "schnell" neue Mitarbeiter zu finden. Es geht um den Aufbau optimaler Arbeitsteams, die sich aus einer sinnvoll strukturierten Organisation im Einklang mit den Unternehmenszielen zusammensetzen.
        </p>
        {/* <p className="text-start text-sm sm:text-base md:text-lg font-bold">
          Recruiting Kompetenz
        </p>
        <p className="text-start text-sm sm:text-base md:text-lg">
          Gründliche Bewertung unserer Kandidaten, damit unsere Firmenkunden optimale Arbeitsteams bilden können, die sich aus engagierten, disziplinierten und gut strukturierten jungen Menschen und/oder Erwachsenen zusammensetzen, die Ihren Unternehmenszielen entsprechen.
        </p>
        <p className="text-start text-sm sm:text-base md:text-lg">
          Benötigen Sie kurzfristig und für einen begrenzten Zeitraum zusätzliche Recruiter in Ihrem Unternehmen?
        </p>
        <p className="text-start text-sm sm:text-base md:text-lg">
          Wir können Sie bei der Suche, Auswahl und Einstellung von qualifiziertem Personal unterstützen, das wir Ihnen kurzfristig zur Verfügung stellen.
        </p> */}
        <button
          className="border-gray-800 border-2 px-4 py-2 sm:px-6 sm:py-3 font-medium bg-gray-800 text-white hover:bg-gray-200 hover:text-gray-800 hover:border-gray-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-opacity-50"
          onClick={handleClickSeleccionReclutamiento}
        >
          Kontaktaufnahme
        </button>
      </motion.div>
    </div>
      <div className="w-full h-96 bg-gray-800 flex justify-center items-center">
        <p className="w-11/12 m-auto text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white text-center">
          DIE GESELLSCHAFT VERÄNDERT SICH, DIE FÜHRUNGSSTILE ENTWICKELN SICH WEITER, WARUM ALSO NICHT AUCH DAS AUSWAHLVERFAHREN WEITERENTWICKELN?
        </p>
      </div>
      <div className="p-4 w-full bg-bg_favorite_3">
      {infoItems2.map((item, index) => (
        <motion.div 
          key={index} 
          className={`flex flex-col sm:flex-row ${index % 2 === 1 ? 'sm:flex-row-reverse' : 'sm:flex-row'} items-center my-12 relative w-full sm:w-11/12 mx-auto`}
          initial={{ opacity: 0, x: index % 2 === 1 ? -100 : 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
        >
          <motion.div 
            className="w-full md:w-1/3 h-64 md:h-80 relative overflow-hidden rounded-lg shadow-lg"
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
          >
            <img 
              src={item.image} 
              alt={item.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
          </motion.div>
          <motion.div 
            className="w-full md:w-1/3 p-4 sm:mx-4 md:p-8 bg-white bg-opacity-80 backdrop-blur-md border border-gray-300 rounded-lg shadow-lg mx-0 md:mx-8 mt-4 md:mt-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.1 + 0.2, duration: 0.5 }}
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
          >
            <h3 className="font-bold text-lg md:text-2xl text-gray-800">{item.title}</h3>
            <p className="text-gray-700 mt-2 md:mt-4">{item.description}</p>
          </motion.div>
        </motion.div>
      ))}
    </div>
      <div className="bg-gray-800 w-full h-full">
        <h2 className="md:text-3xl text-xl sm:text-2xl font-bold text-center py-10 text-white">Als HR-Beratung können wir Ihnen auch bei Folgendem helfen:</h2>
        <div className="relative w-full h-auto overflow-hidden ">
            <div className="flex justify-center items-center  w-full h-96 p-20">
                {services.map((service, index) => (
                <div key={index} className={`absolute w-full md:w-1/2  transition-transform duration-500 ease-in-out ${getCardPosition(index, currentIndex, services.length)}`}>
                    <div className="w-full h-full ">
                    <img src={service.image} alt={service.title} className="w-full h-96 object-cover"/>
                    </div>
                    
                    <div className="absolute inset-0 w-full flex items-end justify-center">
                      <div className="w-full  bg-bg_favorite_4 text-center p-4">
                          <h3 className="text-base font-bold text-white">{service.title}</h3>
                      </div>
                    </div>
                </div>
                ))}
            </div>
        </div>
        <div className="flex items-center justify-center py-5 w-1/2 mx-auto">
            <div className="flex items-center justify-center w-12 text-3xl  bg-opacity-50 text-white cursor-pointer" onClick={prevCard}>
            <FaAngleLeft />
            </div>
            <div className="relative w-full mx-4 h-1 bg-gray-700 rounded">
            <div
                className="absolute top-0 left-0 h-full bg-white transition-all duration-500 ease-in-out"
                style={{ width: `${((currentIndex + 1) / services.length) * 100}%` }}
            ></div>
            </div>
            <div className="flex items-center justify-center w-12 text-3xl  bg-opacity-50 text-white cursor-pointer" onClick={nextCard}>
            <FaAngleRight />
            </div>
        </div>
      </div>
      <div className="w-full bg-gray-200 flex flex-col sm:flex-row flex-nowrap">
        <div className="w-full sm:w-1/3 h-auto">
          <img src={imagenInfo6} alt="NOT FOUND" className="w-full h-full object-cover"/>
        </div>
        <div className="w-full sm:w-2/3 flex justify-center items-center">
          <div className="w-full text-center p-4">
            <h2 className="font-semibold text-gray-800 my-2 text-2xl md:text-3xl">MÖCHTEN SIE WEITERE INFORMATIONEN?</h2>
            <button
              className="border-gray-800 border-2 px-4 py-2 sm:px-6 sm:py-3 font-medium bg-gray-800 text-white hover:bg-gray-200 hover:text-gray-800 hover:border-gray-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-opacity-50"
              onClick={handleClickSeleccionReclutamiento}
            >
              Kontaktaufnahme
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;