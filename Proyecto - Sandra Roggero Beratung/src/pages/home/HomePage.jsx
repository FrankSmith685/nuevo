// import React, { useEffect, useState } from "react";
// import { useNavigate,Link } from "react-router-dom";
// import { FaAngleLeft, FaAngleRight, FaArrowRight } from "react-icons/fa";

// // Logo principal
// import logoPrincipal from "../../assets/imagenes/LogoPrincipal_1.png"; 
// import { useAppState } from "../../hooks/useAppState";



// const HomePage = () => {
//   const {imagenesPreloader,videosPreloader } = useAppState();
//   const navigate = useNavigate();

//   const handleClickSeleccionReclutamiento = () => {
//     navigate("/kontakt");
//   };

//   const [currentTextIndex, setCurrentTextIndex] = useState(0);
//     const [currentCharIndex, setCurrentCharIndex] = useState(0);
//     const [isDeleting, setIsDeleting] = useState(false);
//     const [displayText, setDisplayText] = useState('');

//     useEffect(() => {
//         const texts = [
//             "INNOVATIVEN LÖSUNGEN?",
//             "QUALIFIZIERTEN KANDIDATEN?",
//             "EINER PROFESSIONELLEN VERBESSERUNG?"
//         ];

//         let typingSpeed = 150;

//         if (isDeleting) {
//             typingSpeed = 75;
//         }

//         const handleTyping = () => {
//             const fullText = texts[currentTextIndex];

//             if (isDeleting) {
//                 setDisplayText((prev) => prev.substring(0, prev.length - 1));
//                 setCurrentCharIndex((prev) => prev - 1);

//                 if (currentCharIndex === 0) {
//                     setIsDeleting(false);
//                     setCurrentTextIndex((prev) => (prev + 1) % texts.length);
//                 }
//             } else {
//                 setDisplayText((prev) => prev + fullText.charAt(currentCharIndex));
//                 setCurrentCharIndex((prev) => prev + 1);

//                 if (currentCharIndex === fullText.length) {
//                     setTimeout(() => setIsDeleting(true), 1000);
//                 }
//             }
//         };

//         const typingInterval = setInterval(handleTyping, typingSpeed);

//         return () => clearInterval(typingInterval);
//     }, [currentCharIndex, isDeleting, currentTextIndex]);

//     const infoItems = [
//       { title: "Personalauswahl und Rekrutierung", description: "Wir bieten individuelle Unterstützung in Auswahlverfahren und Integration für Bewerber und Kunden.", path: "/unternehmen/personalauswahl-und-rekrutierung" },
//       { title: "Personalbewertungen", description: "Unterstützung bei der Talentidentifizierung, Humankapitalentwicklung, Einbindung von Fachkräften und Schaffung einer starken Unternehmenskultur.", path: "/unternehmen/personalbewertungen" },
//       { title: "International", description: "Sandra Roggero-Beratung hilft bei der Teambewertung und -Entwicklung durch maßgeschneiderte Evaluierungen und individuelle Kompetenzpläne.", path: "/unternehmen/international" },
//       { title: "Funktionen", description: "Die Auswahl passender Mitarbeiter ist entscheidend. Sandra Roggero hilft, Talente anzuziehen, die Ihre Geschichte teilen und Ihr Unternehmen formen können.", path: "/unternehmen/funktionen" },
//       { title: "Fachspezifische Suche", description: "Sandra Roggero-Beratung unterstützt Unternehmen weltweit bei der Rekrutierung von Fachkräften durch Talentmanagement und Auswahlprozesse.", path: "/unternehmen/fachspezifische-suche" },
//       { title: "Inklusionsaudit", description: "Wir überwinden Vorurteile im Auswahlprozess durch ein Inklusionsaudit, das jeden Schritt von der Stellenbeschreibung bis zum Onboarding analysiert.", path: "/unternehmen/inklusionsaudit" },
//     ];
    

//     const [activeIndex, setActiveIndex] = useState(null);

//     const infoItems2 = [
//       // { title: "MENSCHEN ZUERST", description: "Wir sind Teil der Eurofirms Group und folgen der Kultur People first, wo das Wohlergehen der Menschen im Mittelpunkt unserer Prozesse steht.", image: imagenInfo1 },
//       { title: "INNOVATION", description: "Heute geht es um mehr als nur darum, 'schnell' neue Mitarbeiter zu finden. Es geht um den Aufbau optimaler Arbeitsteams, die sich aus einer sinnvoll strukturierten Organisation im Einklang mit den Unternehmenszielen zusammensetzen. Deshalb brauchen Unternehmen einen Partner, der den Markt versteht und über praktische Erfahrungen verfügt.",image: imagenesPreloader?.imagenInfo2?.src  },
//       // { title: "INNOVATION", description: "Heute geht es um mehr als nur darum, 'schnell' neue Mitarbeiter zu finden. Es geht um den Aufbau optimaler Arbeitsteams, die sich aus einer sinnvoll strukturierten Organisation im Einklang mit den Unternehmenszielen zusammensetzen. Deshalb brauchen Unternehmen einen Partner, der den Markt versteht und über praktische Erfahrungen verfügt.",image: "https://res.cloudinary.com/dievolijo/image/upload/v1719429422/bxeybnb6rq6jqnlpd3t1.jpg"  },
//       { title: "RECRUITING KOMPETENZ", description: "Gründliche Bewertung unserer Kandidaten, damit unsere Firmenkunden optimale Arbeitsteams bilden können, die sich aus engagierten, disziplinierten und gut strukturierten jungen Menschen und/oder Erwachsenen zusammensetzen, die Ihren Unternehmenszielen entsprechen.",image: imagenesPreloader?.imagenInfo3?.src  },
//       // { title: "RECRUITING KOMPETENZ", description: "Gründliche Bewertung unserer Kandidaten, damit unsere Firmenkunden optimale Arbeitsteams bilden können, die sich aus engagierten, disziplinierten und gut strukturierten jungen Menschen und/oder Erwachsenen zusammensetzen, die Ihren Unternehmenszielen entsprechen.",image: "https://res.cloudinary.com/dievolijo/image/upload/v1719432618/xfum9gljkffxtjhfd5tu.jpg"  },
//       // { title: "WERTE", description: "Wir setzen auf eine humane Vision von Talenten. Transparenz, Verantwortung und Respekt bilden unsere Hauptwerte.", image: imagenInfo4 },
//       // { title: "GLOBALE LÖSUNGEN", description: "Wir sind national und international präsent, um die Führungskräfte zu finden, die Ihr Unternehmen vorantreiben.", image: imagenInfo5 }
//       { title: "VISION", description: "Unser Ziel ist es, hochperformante Teams zu schaffen, die Unternehmensziele erreichen und zu einer positiven, inklusiven Arbeitskultur beitragen.", },
//       // { title: "NEUE WEGE IN DER PERSONALBESCHAFFUNG", description: "Mit frischen Ideen und leidenschaftlichem Engagement streben wir danach, den Bereich der Personalbeschaffung zu revolutionieren.", image: imagenesPreloader?.imagenInfo5?.src}
//       { title: "NEUE WEGE IN DER PERSONALBESCHAFFUNG", description: "Mit frischen Ideen und leidenschaftlichem Engagement streben wir danach, den Bereich der Personalbeschaffung zu revolutionieren.", image: "https://res.cloudinary.com/dievolijo/image/upload/v1719434278/rru0wddozzlje8tv7wo7.jpg"}
//       ];

//     const services = [
//       {title:"STUDIUM"},
//       {title:"AUSBILDUNG"},
//       {title:"PARKTIKUM"},
//       {title:"ARBEIT"},
//       {title:"STEUERN"},
//       {title:"WOHNEN"},
//       {title:"TRANSPORT"},
//       {title:"VISUM"},
//       {title:"SPRACHE"},
//   ];
      
//     const [currentIndex, setCurrentIndex] = useState(0);

//     const nextCard = () => {
//         setCurrentIndex(prevIndex => (prevIndex + 1) % services.length);
//     };

//     const prevCard = () => {
//         setCurrentIndex(prevIndex => (prevIndex === 0 ? services.length - 1 : prevIndex - 1));
//     };
    
//     const getCardPosition = (index, currentIndex, length) => {
//         if (index === currentIndex) return 'translate-x-0 opacity-100';
//         if (index === (currentIndex + 1) % length) return 'translate-x-full opacity-50';
//         if (index === (currentIndex - 1 + length) % length) return '-translate-x-full opacity-50';
//         return 'hidden';
//       };


import React, { useEffect, useState, useMemo, useCallback } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaAngleLeft, FaAngleRight, FaArrowRight } from "react-icons/fa";
// import logoPrincipal from "../../assets/imagenes/LogoPrincipal_1.png";
import { useAppState } from "../../hooks/useAppState";
import de from "../../languaje/de";
import es from "../../languaje/es";
import MeineDienstleistungen from "../assets/MeineDienstleistungen";
import en from "../../languaje/en";

const HomePage = () => {
  const {  videosPreloader,tipoIdioma } = useAppState();
  const navigate = useNavigate();
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [displayText, setDisplayText] = useState('');
  const [activeIndex, setActiveIndex] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const [homeData,setHomeData] = useState(de.home);

    useEffect(()=>{
        if(tipoIdioma==='de'){
          setHomeData(de.home);
        }
        else if(tipoIdioma==='en'){
          setHomeData(en.home);
      }else{
          setHomeData(es.home);
        }
    },[tipoIdioma]);

  const texts = useMemo(() => homeData.texts, [homeData]);
  // [
    // "INNOVATIVEN LÖSUNGEN?",
    // "QUALIFIZIERTEN KANDIDATEN?",
    // "EINER PROFESSIONELLEN VERBESSERUNG?"
  // ]

  const infoItems = useMemo(() =>
    // { title: "Personalauswahl und Rekrutierung", description: "Wir bieten individuelle Unterstützung in Auswahlverfahren und Integration für Bewerber und Kunden.", path: "/unternehmen/personalauswahl-und-rekrutierung" },
    // { title: "Personalbewertungen", description: "Unterstützung bei der Talentidentifizierung, Humankapitalentwicklung, Einbindung von Fachkräften und Schaffung einer starken Unternehmenskultur.", path: "/unternehmen/personalbewertungen" },
    // { title: "International", description: "Sandra Roggero-Beratung hilft bei der Teambewertung und -Entwicklung durch maßgeschneiderte Evaluierungen und individuelle Kompetenzpläne.", path: "/unternehmen/international" },
    // { title: "Funktionen", description: "Die Auswahl passender Mitarbeiter ist entscheidend. Sandra Roggero hilft, Talente anzuziehen, die Ihre Geschichte teilen und Ihr Unternehmen formen können.", path: "/unternehmen/funktionen" },
    // { title: "Fachspezifische Suche", description: "Sandra Roggero-Beratung unterstützt Unternehmen weltweit bei der Rekrutierung von Fachkräften durch Talentmanagement und Auswahlprozesse.", path: "/unternehmen/fachspezifische-suche" },
    // { title: "Inklusionsaudit", description: "Wir überwinden Vorurteile im Auswahlprozess durch ein Inklusionsaudit, das jeden Schritt von der Stellenbeschreibung bis zum Onboarding analysiert.", path: "/unternehmen/inklusionsaudit" },
    homeData.infoItems
  , [homeData]);

  const optimizedImageURL = (url) => {
    const cloudinaryBaseURL = 'https://res.cloudinary.com/dievolijo/image/upload/';
    return `${cloudinaryBaseURL}c_scale,w_800/${url}`;
  };

  const infoItems2 = useMemo(() => 
    homeData.infoItems2
  //   [
  //   { title: "INNOVATION", description: "Heute geht es um mehr als nur darum, 'schnell' neue Mitarbeiter zu finden. Es geht um den Aufbau optimaler Arbeitsteams, die sich aus einer sinnvoll strukturierten Organisation im Einklang mit den Unternehmenszielen zusammensetzen. Deshalb brauchen Unternehmen einen Partner, der den Markt versteht und über praktische Erfahrungen verfügt.", 
  //     // image: "https://res.cloudinary.com/dievolijo/image/upload/v1719429422/bxeybnb6rq6jqnlpd3t1.jpg"
  //     image: optimizedImageURL('v1719429422/bxeybnb6rq6jqnlpd3t1.jpg')
  //     // image: imagenesPreloader?.imagenInfo2?.src 
  //   },
  //   { title: "RECRUITING KOMPETENZ", description: "Gründliche Bewertung unserer Kandidaten, damit unsere Firmenkunden optimale Arbeitsteams bilden können, die sich aus engagierten, disziplinierten und gut strukturierten jungen Menschen und/oder Erwachsenen zusammensetzen, die Ihren Unternehmenszielen entsprechen.", 
  //     // image: "https://res.cloudinary.com/dievolijo/image/upload/v1719432618/xfum9gljkffxtjhfd5tu.jpg"
  //     image: optimizedImageURL('v1719432618/xfum9gljkffxtjhfd5tu.jpg')
  //     // image: imagenesPreloader?.imagenInfo3?.src 
  //   },
  //   { title: "VISION", description: "Unser Ziel ist es, hochperformante Teams zu schaffen, die Unternehmensziele erreichen und zu einer positiven, inklusiven Arbeitskultur beitragen.",
  //     image: optimizedImageURL('v1719875148/cl4jynz7brqnggwvxwzm.jpg')
  //    },
  //   { title: "NEUE WEGE IN DER PERSONALBESCHAFFUNG", description: "Mit frischen Ideen und leidenschaftlichem Engagement streben wir danach, den Bereich der Personalbeschaffung zu revolutionieren.", 
  //     // image: "https://res.cloudinary.com/dievolijo/image/upload/v1719434278/rru0wddozzlje8tv7wo7.jpg"
  //     image: optimizedImageURL('v1719875147/jghjwlvwkdizzhrdpb4r.jpg')
  //   }
  // ]
  , [homeData]);

  const services = useMemo(() => 
    homeData.services
  //   [
  //   { title: "STUDIUM" },
  //   { title: "AUSBILDUNG" },
  //   { title: "PARKTIKUM" },
  //   { title: "ARBEIT" },
  //   { title: "STEUERN" },
  //   { title: "WOHNEN" },
  //   { title: "TRANSPORT" },
  //   { title: "VISUM" },
  //   { title: "SPRACHE" },
  // ]
  , [homeData]);

  useEffect(() => {
    const typingSpeed = isDeleting ? 75 : 150;
    const fullText = texts[currentTextIndex];

    const handleTyping = () => {
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
  }, [currentCharIndex, isDeleting, currentTextIndex, texts]);

  // const nextCard = useCallback(() => {
  //   setCurrentIndex(prevIndex => (prevIndex + 1) % services.length);
  // }, [services.length]);

  // const prevCard = useCallback(() => {
  //   setCurrentIndex(prevIndex => (prevIndex === 0 ? services.length - 1 : prevIndex - 1));
  // }, [services.length]);

  // const getCardPosition = (index, currentIndex, length) => {
  //   if (index === currentIndex) return 'translate-x-0 opacity-100';
  //   if (index === (currentIndex + 1) % length) return 'translate-x-full opacity-50';
  //   if (index === (currentIndex - 1 + length) % length) return '-translate-x-full opacity-50';
  //   return 'hidden';
  // };

  const handleClickSeleccionReclutamiento = useCallback(() => {
    navigate("/kontakt");
  }, [navigate]);

  return (
    <>
      <div className="w-full h-screen bg-bg_favorite_1 relative overflow-hidden">
        {/* <div className="relative w-full h-full"> */}
          <img 
            src={optimizedImageURL("v1720714061/f2thxhzee96nw41mmgs6.jpg")} 
            className="absolute top-0 left-0 w-full h-full object-cover z-0" 
            alt="Loading video..."
          />
          <video autoPlay loop muted preload="auto" className="absolute top-0 left-0 w-full h-full object-cover z-0">
            <source src="https://res.cloudinary.com/dievolijo/video/upload/v1719429849/ml9u5molos4vnrx9zlyq.mp4" type="video/mp4" />
            Tu navegador no soporta el elemento de video.
          </video>
        {/* </div> */}

        <div className="bg-bg_favorite_1 flex flex-col justify-start items-center h-full z-20 relative space-y-4 p-4  md:pt-0 sm:p-6 md:p-8">
            <div className="w-11/12 md:w-2/5 h-auto mt-40 sm:mt-24 md:mt-40 font-bell">
              <h2 className="text-white font-medium text-xl sm:text-3xl lg:text-4xl text-center md:text-end px-2">
                {/* SUCHEN SIE NACH */}
                {homeData.text1}
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
      <div className="w-11/12 mx-auto text-gray-700 flex flex-wrap py-5 px-2 md:py-20 md:px-10">
        <div className="w-full sm:w-1/2">
          <img src={optimizedImageURL('v1719431720/ljqc8ytxjnqzr9q8woqu.jpg')} alt="not found" className="w-full h-full object-cover" loading="lazy"/>
        </div>
          <div
            className="w-full sm:w-1/2 h-full p-4 md:p-20 space-y-4 sm:space-y-6 md:space-y-8"
          >
          <div className='flex flex-col items-center justify-start'>
              <img src={optimizedImageURL('v1719690680/yxcetofgrpqxqb7ziwnr.png')} alt="Logo Principal" className='h-20' loading='lazy'/>
              <div className="flex flex-col items-center">
                  <h2 className={`font-roboto-thin font-medium text-xl transition-colors duration-300 text-gray-800`}>
                      SANDRA ROGGERO M.
                  </h2>
                  <span className={`font-bell text-sm -mt-1 transition-colors font-bold duration-300 text-violet-900`}>
                      BERATUNG
                  </span>
              </div>
          </div>
          <p className="text-start text-sm sm:text-sm md:text-lg">
            {homeData.detail1}
            {/* Wir tragen jeden Tag dazu bei, dass Menschen eine tiefe Erfüllung auf ihrem beruflichen Weg erfahren und persönlich wachsen. */}
          </p>
          <p className="text-start text-sm sm:text-sm md:text-lg">
            {homeData.detail2}
            {/* Heute geht es um mehr als nur darum, "schnell" neue Mitarbeiter zu finden. Es geht um den Aufbau optimaler Arbeitsteams, die sich aus einer sinnvoll strukturierten Organisation im Einklang mit den Unternehmenszielen zusammensetzen. */}
          </p>
          <button
            className="border-gray-800 border-2 px-4 py-2 sm:px-6 sm:py-3 font-medium bg-gray-800 text-white hover:bg-gray-200 hover:text-gray-800 hover:border-gray-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-opacity-50"
            onClick={handleClickSeleccionReclutamiento}
          >
            {homeData.detail3}
            {/* Kontaktaufnahme */}
          </button>
          </div>
      </div>
      <div className="w-full h-96 bg-gray-800 flex justify-center items-center">
        <p className="w-11/12 m-auto text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white text-center">
          {homeData.homeInfo1}
          {/* DIE GESELLSCHAFT VERÄNDERT SICH, DIE FÜHRUNGSSTILE ENTWICKELN SICH WEITER, WARUM ALSO NICHT AUCH DAS AUSWAHLVERFAHREN WEITERENTWICKELN? */}
        </p>
      </div>

      <div className="min-h-screen bg-white py-8 px-4 sm:px-8 lg:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {infoItems2.map((item, index) => (
              <div key={index}  className="relative bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-64">
              {item.image && <img src={item.image} alt={item.title} className="w-full h-full object-cover" loading="lazy" />}

                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl text-gray-800">{item.title}</h3>
                <p className="text-gray-700 mt-2">{item.description}</p>
              </div>
              </div>
          ))}
        </div>
      </div>




      {/* <div className="bg-gray-800 w-full h-full">
          <h2 className="md:text-3xl text-xl sm:text-2xl font-bold text-center py-10 text-white">{homeData.tituloServicio}</h2>
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
        </div> */}
        <MeineDienstleistungen/>
        <div className="w-full bg-gray-200 flex flex-col sm:flex-row flex-nowrap">
          <div className="w-full flex justify-center items-center">
            <div className="w-full text-center p-4">
              <h2 className="font-semibold text-gray-800 my-2 text-2xl md:text-3xl">{homeData.homeInfo2}</h2>
              <button
                className="border-gray-800 border-2 px-4 py-2 sm:px-6 sm:py-3 font-medium bg-gray-800 text-white hover:bg-gray-200 hover:text-gray-800 hover:border-gray-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-opacity-50"
                onClick={handleClickSeleccionReclutamiento}
              >
                {homeData.homeInfo3}
              </button>
            </div>
          </div>
        </div>
    </>
  );
};

export default HomePage;
