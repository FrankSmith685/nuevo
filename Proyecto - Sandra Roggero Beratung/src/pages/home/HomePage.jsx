
import React, { useEffect, useState } from "react";
// import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer"; 
// import banner1 from "../../assets/imagenes/imagen.webp";
// import banner2 from "../../assets/imagenes/imagen2.webp";
// import banner3 from "../../assets/imagenes/imagen3.webp";
// import banner4 from "../../assets/imagenes/imagen4.jpg";
// import banner5 from "../../assets/imagenes/imagen5.webp";
import banner1 from "../../assets/imagenes/home/imagen1.jpg";
import banner2 from "../../assets/imagenes/home/imagen2.jpg";
import banner3 from "../../assets/imagenes/home/imagen3.jpg";
import banner4 from "../../assets/imagenes/home/imagen4.jpg";
import banner5 from "../../assets/imagenes/home/imagen5.jpg";
import bannerPrincipal from "../../assets/video/banner.mp4";
import { SearchIcon, PresentationChartBarIcon, ScaleIcon } from '@heroicons/react/outline';
import { HiOutlineEye, HiOutlineUsers, HiOutlineThumbUp, HiOutlineChartBar,HiOutlineChevronDown, HiOutlineChevronUp } from "react-icons/hi";

import fotoPerfil from "../../assets/imagenes/fotoPerfil.jpg";

// consultoria
import imagen1 from "../../assets/imagenes/consultoria/imagen1.jpg";
import imagen2 from "../../assets/imagenes/consultoria/imagen2.webp";
import imagen3 from "../../assets/imagenes/consultoria/imagen3.webp";
import imagen4 from "../../assets/imagenes/consultoria/imagen4.jpg";
import imagen6 from "../../assets/imagenes/consultoria/imagen5.webp";
import imagen5 from "../../assets/imagenes/consultoria/imagen6.jpg";
import ContactForm from "../../components/common/contactForm";
import { useNavigate,Link } from "react-router-dom";
import { FaAngleLeft, FaAngleRight, FaArrowRight } from "react-icons/fa";


// infoItems2
import imagenInfo1 from "../../assets/imagenes/InfoImagenesHome/imagen1.jpg";
import imagenInfo2 from "../../assets/imagenes/InfoImagenesHome/imagen2.jpg";
import imagenInfo3 from "../../assets/imagenes/InfoImagenesHome/imagen3.jpg";
import imagenInfo4 from "../../assets/imagenes/InfoImagenesHome/imagen4.jpg";
import imagenInfo5 from "../../assets/imagenes/InfoImagenesHome/imagen5.jpg";
import imagenInfo6 from "../../assets/imagenes/InfoImagenesHome/imagen6.jpg";




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
      title: "Talentsuche",
      description: "Wir analysieren die Employee Journey Ihres Unternehmens. Von den Talentakquisitionswegen und deren Entwicklung bis hin zu den Schulungsbedürfnissen und der Ausrichtung an den Geschäftszielen.",
      icon: SearchIcon
    },
    {
      title: "Strategie und Analyse",
      description: "Wir entwerfen die beste Personalmanagementstrategie, die wir vom Führungskomitee bis hin zum Basispersonal umsetzen.",
      icon: PresentationChartBarIcon
    },
    {
      title: "HR-Beratung",
      description: "Wir analysieren kontinuierlich die Aktionspläne. Wir werden Ihr HR-Berater und entwickeln Indikatoren, die eine kontinuierliche Verbesserung ermöglichen.",
      icon: ScaleIcon
    }
  ];

  const sections2 = [
    {
      title: "SYSTEMISCHE VISION",
      description: [
        "Mehrfache Perspektive",
        "Modell High Performance Organisations",
        "Wir identifizieren den Wert, den jede Person der Organisation bringt"
      ],
      icon: HiOutlineEye,
    },
    {
      title: "FOKUS AUF MENSCHEN",
      description: [
        "Menschen im Mittelpunkt, ohne sie existieren Unternehmen nicht",
        "Wie sich eine Veränderung auf Menschen auswirkt und wie man damit umgeht"
      ],
      icon: HiOutlineUsers,
    },
    {
      title: "APPREZIATIVER BLICK",
      description: [
        "Weil jede Person ihre Chance verdient. Mitarbeiter und Führungskräfte",
        "Identifizierung von beruflichem Potenzial basierend auf Erfolgen, Stärken und Bestrebungen"
      ],
      icon: HiOutlineThumbUp,
    },
    {
      title: "ERGEBNISORIENTIERUNG",
      description: [
        "Konstante Indikatoren",
        "Mehr als 50 Jahre Begleitung von Unternehmern in ihrer Personalstrategie"
      ],
      icon: HiOutlineChartBar,
    },
  ];

  // const services = [
  //   "FÜHRUNGSBEGLEITUNG",
  //   "BEWERTUNGEN",
  //   "WORKSHOPS UND TEAMBUILDINGS",
  //   "AUSWAHL VON FÜHRUNGSKRÄFTEN",
  //   "GLEICHSTELLUNGSPLÄNE",
  //   "MANAGEMENT DES ORGANISATORISCHEN WANDELS",
  // ];
  
  // const backgrounds = [
  //   `url(${imagen1})`,
  //   `url(${imagen2})`,
  //   `url(${imagen3})`,
  //   `url(${imagen4})`,
  //   `url(${imagen5})`,
  //   `url(${imagen6})`,
  // ];
  
  // 
  const sections3 = [
    {
      title: "Vorteile",
      description: `Bei Beratung verfügen wir über mehr als 50 Jahre Erfahrung in der Beratung von Unternehmen und der Entwicklung von Strategien zur Bewältigung der Herausforderungen im Personalbereich. Unser Ansatz beschränkt sich nicht auf operative Aufgaben, sondern erstreckt sich auf den Aufbau einer soliden Partnerschaft mit Ihrem Unternehmen, in der wir die Verantwortung für die Definition der Personalstrategie übernehmen, die Ihre Teams benötigen, um ihre Geschäftsziele zu erreichen. Wir analysieren gründlich die Teams, ihre Fähigkeiten, Funktionen, Entwicklung, Kompetenzen und die zwischenmenschlichen Beziehungen und betrachten jedes Projekt als eine Gelegenheit zur Verbesserung. Durch umfassende Audits erstellen wir ganzheitliche Aktionspläne, die von der Talentakquisition, dem Headhunting und Onboarding bis hin zu Onboarding-Plänen, Karriereentwicklung und, falls erforderlich, sogar Offboarding reichen. Außerdem legen wir innerhalb unserer Personalberatung besonderen Wert auf die Schaffung und Anpassung von Arbeitsplätzen, um sicherzustellen, dass jede Rolle optimal zur Vision Ihres Unternehmens beiträgt.`,
    },
    {
      title: "Funktionen",
      description: `Unsere Mission ist es, Ihnen als führender Partner in allen Aspekten rund um die Menschen in Ihrer Organisation zu dienen. Über die herkömmlichen Aufgaben der Beratung hinaus agieren wir auch als Coaches für Ihr Führungskomitee und bieten maßgeschneiderte Beratung und Lösungen in kritischen Momenten. Wir behandeln Probleme der horizontalen Kommunikation und führen interne Marketingkampagnen durch, um die Kohäsion und Motivation Ihres Teams zu fördern. Wir arbeiten projekt- und KPI-orientiert, was gewährleistet, dass unsere Dienstleistungen auf greifbare Ergebnisse ausgerichtet sind. Bei Beratung verbinden wir die Effizienz unserer Dienstleistungen mit einem menschlichen Ansatz und schaffen so eine Kombination, die stabile Beziehungen zu unseren Kunden gefestigt hat, die in vielen Fällen über zwei Jahrzehnte andauern. Unser Beraterteam wird Ihr täglicher Begleiter und bietet personalisierte Beratung, die das Wachstum Ihres Unternehmens und die Zufriedenheit Ihrer Mitarbeiter fördert. Wir sind hier, um effektive Lösungen vorzuschlagen, die das Personalmanagement in einen strategischen Vorteil für Ihre Organisation verwandeln.`,
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const sections4 = [
    {
      title: "100% maßgeschneiderte Lösung",
      description: [
        "Unsere Personalberatung basiert auf einem tiefen Verständnis der Prozesse, die die Employee Journey formen. Egal, ob Sie hochspezialisierte Profile anziehen, die Führungskompetenz in Ihrer Personalabteilung verbessern oder die Herausforderungen der Mitarbeiterbindung in einem wettbewerbsintensiven Markt angehen möchten, Beratung bietet Ihnen maßgeschneiderte Lösungen.",
        "Jedes Unternehmen, unabhängig von Art oder Branche, steht vor spezifischen Herausforderungen im Personalmanagement. Bei Beratung passen wir uns an die Größe, den Sektor und die Unternehmenskultur Ihres Unternehmens an. Wir sind Experten darin, die Employee Journey zu gestalten, die Ihr Mitarbeiter benötigt, aber innerhalb eines realistischen Rahmens, basierend auf der Realität Ihrer Organisation. Wir prüfen Ihr Personalwesen und erstellen die Employee Journey, um sie ab dem nächsten Tag umsetzen zu können."
      ],
    },
    {
      title: "Im Einklang mit den Erwartungen der Mitarbeiter",
      description: [
        "Bei Beratung betrachten wir die Employee Journey als mehr als nur den Onboarding- und Karriereentwicklungsprozess. Sie umfasst auch die Auseinandersetzung mit Trends in der Arbeitswelt, wie die steigende Nachfrage nach Flexibilität, die Wertschätzung einer ausgewogenen Work-Life-Balance und die Anpassung an Remote-Arbeitsumgebungen. Unsere Dienstleistungen als Personalberatung beschränken sich nicht auf konventionelle Aufgaben; wir bieten Lösungen, die Innovation und Anpassung an ein sich ständig veränderndes Arbeitsumfeld fördern. Wir arbeiten am Onboarding und Willkommensplänen, dem Karriereplan und sogar dem Offboarding; wir gestalten die Exit-Strategie für Mitarbeiter.",
        "Als Personalberatung optimieren wir Arbeitsplätze, um den aktuellen Erwartungen gerecht zu werden, unterstützen Diversität und Inklusion und bereichern das berufliche Leben der Mitarbeiter."
      ],
    },
  ];

  const [openIndex1, setOpenIndex1] = useState(null);

  const handleToggle1 = (index) => {
    setOpenIndex1(openIndex1 === index ? null : index);
  };




  
  const handleClickSeleccionReclutamiento = () => {
    navigate("/seleccion-y-headhunting/consultora-seleccion-personal-y-reclutamiento");
  };

  const handleClickServicioHeadhunting=()=>{
    navigate("/seleccion-y-headhunting/consultoria-headhunter");
  }

  const handleClickGestionCambio=()=>{
    navigate("/consultoria");
  }

  const handleClickFormaciones=()=>{
    navigate("/consultoria/formaciones-humanbits");
  }
  const handleClickHrBusinessPartner=()=>{
    navigate("/hr-business-partner");
  }

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
            <div className="bg-bg_favorite_1 flex flex-col justify-start items-center h-full z-20 relative space-y-4 p-4 pt-96 sm:p-6 md:p-8">
                <div className="w-2/5 h-auto mt-32 font-streamline">
                    <h2 className="text-white font-medium text-9xl sm:text-4xl md:text-3xl font-bell text-end px-2">
                        SUCHEN SIE NACH
                    </h2>
                    <h2 className="text-customColor5 font-medium text-9xl sm:text-4xl md:text-3xl font-bell text-end px-2">
                        <span>{displayText}</span>
                    </h2>
                </div>
                <div className="w-full h-auto flex justify-end items-end absolute bottom-0">
                  <div className="w-full grid grid-cols-3 text-white bg-transparent backdrop-blur-sm">
                    {infoItems.map((item, index) => (
                      <Link 
                        to={item.path} 
                        key={index} 
                        className={`border-border_1 border-gray-500 p-4 h-36 flex items-center transition-all duration-300 ${activeIndex === index ? 'hover:bg-white hover:text-gray-700' : ''}`}
                        onMouseEnter={() => setActiveIndex(index)}
                        onMouseLeave={() => setActiveIndex(null)}
                      >
                        <div className="flex-1">
                          <h3 className="font-bold">{item.title}</h3>
                          {activeIndex === index && (
                            <p className="opacity-100 transition-opacity duration-300">{item.description}</p>
                          )}
                        </div>
                        <FaArrowRight className="ml-2 text-xl" />
                      </Link>
                    ))}
                  </div>
              </div>
            </div>
        </div>
      <div ref={ref1} className="w-11/12 mx-auto text-gray-700 flex flex-nowrap py-20 px-10">
        <div className="w-full ">
          <img src={fotoPerfil} alt="not found" className="w-full h-full object-cover" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={inView1 ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="w-full h-full p-4 sm:p-10 md:p-20 space-y-4 sm:space-y-6 md:space-y-8 "
        >
          {/* <h2 className="font-bell text-blue-700 hover:cursor-pointer text-3xl sm:text-4xl md:text-6xl">
            Sandra Roggero <span className="text-customColor1 text-2xl sm:text-3xl md:text-5xl">Beratung</span>
          </h2> */}

            <div className="flex flex-col items-center ">
              <h2 className={`font-bell font-medium lg:text-5xl md:text-lg leading-3 transition-colors duration-300 text-gray-800`}>
                  Sandra Roggero M.
              </h2>
              <span className={`md:text-base font-bell lg:text-lg -mt-1.5 transition-colors duration-300 text-gray-800`}>
                  Beratung
              </span>
          </div>
          <p className="text-start text-base sm:text-lg md:text-xl">
            Wir tragen jeden Tag dazu bei, dass Menschen eine tiefe Erfüllung auf ihrem beruflichen Weg erfahren und persönlich wachsen.
          </p>
          <p className="text-start text-base sm:text-lg md:text-xl">
            Heute geht es um mehr als nur darum, "schnell" neue Mitarbeiter zu finden. Es geht um den Aufbau optimaler Arbeitsteams, die sich aus einer sinnvoll strukturierten Organisation im Einklang mit den Unternehmenszielen zusammensetzen.
          </p>
          {/* <p className="text-start text-base sm:text-lg md:text-xl font-bold">
            Recruiting Kompetenz
          </p>
          <p className="text-start text-base sm:text-lg md:text-xl">
            Gründliche Bewertung unserer Kandidaten, damit unsere Firmenkunden optimale Arbeitsteams bilden können, die sich aus engagierten, disziplinierten und gut strukturierten jungen Menschen und/oder Erwachsenen zusammensetzen, die Ihren Unternehmenszielen entsprechen.
          </p>
          <p className="text-start text-base sm:text-lg md:text-xl">
            Benötigen Sie kurzfristig und für einen begrenzten Zeitraum zusätzliche Recruiter in Ihrem Unternehmen?
          </p>
          <p className="text-start text-base sm:text-lg md:text-xl">
            Wir können Sie bei der Suche, Auswahl und Einstellung von qualifiziertem Personal unterstützen, das wir Ihnen kurzfristig zur Verfügung stellen.
          </p> */}
          <button
              className="border-gray-800 border-2 px-4 py-2 sm:px-6 sm:py-3 font-medium bg-gray-800 text-white hover:bg-gray-200 hover:text-gray-800 hover:border-gray-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gray-200  focus:ring-opacity-50 "
              onClick={handleClickSeleccionReclutamiento}
            >
              Kontaktaufnahme
          </button>
        </motion.div>
      </div>
      <div className="w-full h-96 bg-gray-800 flex justify-center items-center">
        <p className="w-11/12 m-auto text-4xl text-white text-center">
          DIE GESELLSCHAFT VERÄNDERT SICH, DIE FÜHRUNGSSTILE ENTWICKELN SICH WEITER, WARUM ALSO NICHT AUCH DAS AUSWAHLVERFAHREN WEITERENTWICKELN?
        </p>
      </div>
      <div className="p-4 w-full bg-bg_favorite_3">
        {infoItems2.map((item, index) => (
            <motion.div 
                key={index} 
                className={`flex ${index % 2 === 1 ? 'flex-row-reverse' : 'flex-row'} items-center my-12 relative w-11/12 mx-auto`}
                initial={{ opacity: 0, x: index % 2 === 1 ? -100 : 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
            >
                <motion.div 
                    className="w-1/3 h-80 relative overflow-hidden rounded-lg shadow-lg"
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
                    className="w-1/3 p-8 bg-white bg-opacity-80 backdrop-blur-md border border-gray-300 rounded-lg shadow-lg mx-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.2, duration: 0.5 }}
                    whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                >
                    <h3 className="font-bold text-2xl text-gray-800">{item.title}</h3>
                    <p className="text-gray-700 mt-4">{item.description}</p>
                </motion.div>
            </motion.div>
        ))}
    </div>


      {/* <div ref={ref2} className="bg-orange-800 w-full h-full sm:h-96 sm:flex items-center justify-center p-2 sm:p-0">
        <div className="w-full h-64 md:h-96 relative flex items-center justify-center mb-4 sm:mb-0">
          <div className="w-full h-full absolute flex flex-col justify-center items-center top-0 left-0 space-y-4">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={inView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-white font-bold text-2xl sm:text-2xl md:text-4xl text-center"
            >
              Personalauswahl und Rekrutierung
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={inView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <button
                className="bg-transparent border-white border-2 px-4 py-2 sm:px-6 sm:py-3 font-medium text-white hover:bg-white hover:text-blue-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 "
                onClick={handleClickSeleccionReclutamiento}
              >
                Mehr erfahren
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
               <img src={banner1} alt="" className="w-full h-96 object-cover" />
            </motion.div>
        </div>
      </div>

      <div ref={ref3} className="bg-slate-800  w-full h-auto sm:h-96 sm:flex items-center justify-center p-2 sm:p-0">
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
        <div className="w-full h-64 md:h-96 relative flex items-center justify-center mb-4 sm:mb-0">
          <div className={`w-full h-full absolute flex flex-col justify-center items-center top-0 left-0 space-y-4`}>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={inView3 ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
    
              className="text-white font-bold text-2xl sm:text-2xl md:text-4xl text-center"
            >
              Headhunter-Beratung
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={inView3 ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}    
              className=""
            >
              <button 
                className="bg-transparent border-white border-2 px-6 py-3 font-medium text-white hover:bg-white hover:text-blue-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
                onClick={handleClickServicioHeadhunting}
                >
                Mehr erfahren
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      <div ref={ref4} className="bg-white w-full h-full sm:h-96 sm:flex items-center justify-center p-2 sm:p-0">
        <div className="w-full h-64 md:h-96 relative flex items-center justify-center mb-4 sm:mb-0">
          <div className={`w-full h-full absolute flex flex-col justify-center items-center top-0 left-0 space-y-4`}>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={inView4 ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-gray-700 font-bold text-2xl sm:text-2xl md:text-4xl text-center"
            >
              Organisatorischer Wandel
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={inView4 ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className=""
            >
               <button 
                className="bg-transparent border-gray-700 border-2 px-6 py-3 font-medium text-gray-700 hover:bg-gray-700 hover:text-blue-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-opacity-50 "
                onClick={handleClickGestionCambio}
                >
                Mehr erfahren
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
               <img src={banner3} alt="" className="w-full h-full object-cover" />
            </motion.div>
        </div>
      </div>

      <div ref={ref5} className="bg-red-800  w-full h-auto sm:h-96 sm:flex items-center justify-center p-2 sm:p-0">
        <div className="w-full h-96">
          <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={inView5 ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="h-96"
            >
               <img src={banner4} alt="" className="w-full h-full object-cover" />
            </motion.div>
        </div>
        <div className="w-full h-64 md:h-96 relative flex items-center justify-center mb-4 sm:mb-0">
          <div className={`w-full h-full absolute flex flex-col justify-center items-center top-0 left-0 space-y-4`}>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={inView5 ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
    
              className="text-white font-bold text-2xl sm:text-2xl md:text-4xl text-center"
            >
              Schulungen für Unternehmen #humanbits
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={inView5 ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}    
              className=""
            >
              <button 
                className="bg-transparent border-white border-2 px-6 py-3 font-medium text-white hover:bg-white hover:text-blue-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
                onClick={handleClickFormaciones}
                >
                Mehr erfahren
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      <div ref={ref6} className="bg-green-800 w-full h-full sm:h-96 sm:flex items-center justify-center p-2 sm:p-0">
        <div className="w-full h-64 md:h-96 relative flex items-center justify-center mb-4 sm:mb-0">
          <div className={`w-full h-full absolute flex flex-col justify-center items-center top-0 left-0 space-y-4`}>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={inView6 ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-white font-bold text-2xl sm:text-2xl md:text-4xl text-center"
            >
              HR Business Partner
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={inView6 ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className=""
            >
              <button 
                className="bg-transparent border-white border-2 px-6 py-3 font-medium text-white hover:bg-white hover:text-blue-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
                onClick={handleClickHrBusinessPartner}
                >
                Mehr erfahren
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
               <img src={banner5} alt="" className="w-full h-full object-cover" />
            </motion.div>
        </div>
      </div> */}

      {/* <div ref={ref7} className="bg-red-500 w-full h-auto flex items-center justify-center py-10">
        <div className={`w-full h-full flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-6`}>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={inView7 ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-white font-bold text-2xl sm:text-3xl text-center md:text-left"
          >
            Müssen Sie Talente auswählen?
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={inView7 ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              to="scroll-target"
              smooth={true}
              duration={500}
              className="hover:cursor-pointer bg-transparent border-white border-2 px-10 py-3 font-medium text-white hover:bg-white hover:text-blue-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
            >
              Kontakt aufnehmen
            </Link>
          </motion.div>
        </div>
      </div> */}


      {/* <div className="p-10  w-11/12 mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-gray-700">
          Was in einer HR-Beratung analysiert wird und wie es Ihrem Unternehmen helfen kann:
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-10">
          {sections.map((section, index) => (
            <div 
              key={index} 
              className="bg-gradient-to-r from-blue-200 to-blue-100 border border-blue-300 p-6 rounded-lg flex flex-col sm:flex-row items-center justify-center hover:shadow-lg transition duration-300 ease-in-out"
            >
              <section.icon className="h-14 w-14 sm:h-20 sm:w-20 md:w-40 md:h-40 text-blue-600 mb-4 sm:mb-0 sm:mr-4" />
              <div>
                <h3 className="text-lg text-center sm:text-start sm:text-xl font-bold mb-2 text-gray-700">{section.title}</h3>
                <p className="text-gray-700 text-center sm:text-start">{section.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="px-10 w-11/12 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-700">Warum Beratung als Personalberatung wählen?</h2>
        <p className="text-gray-700 text-center">Als Ihre Personalberatung sind wir es gewohnt, die Employee Journey zu verstehen und zu fördern. Unser personalisierter Ansatz und unser tiefes Verständnis der Trends und Herausforderungen im Personalwesen ermöglichen es uns, praktische und effektive Lösungen anzubieten, die auf die spezifischen Bedürfnisse Ihres Unternehmens zugeschnitten sind. Wir wissen, dass eine führende Personalberatung bestrebt sein muss, ein strategischer Partner zu sein, der Beratung und Lösungen bietet, die den Unterschied in der Talentverwaltung Ihres Unternehmens ausmachen.</p>
      </div> */}


      {/* <div className="py-10 w-full  bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-700 w-11/12 mx-auto">HR-Beratung Dienstleistungen</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-11/12 mx-auto px-10">
          {sections2.map((section, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-105"
            >
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-6 flex justify-center items-center">
                <section.icon className="h-16 w-16 text-white" />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-lg font-bold mb-4 text-gray-700">{section.title}</h3>
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
      </div> */}

      <div className="bg-gray-800 w-full h-full">
        <h2 className="text-3xl font-bold text-center py-10 text-white">Als HR-Beratung können wir Ihnen auch bei Folgendem helfen:</h2>
        <div className="relative w-full h-auto overflow-hidden ">
            <div className="flex justify-center items-center  w-full h-96 p-20">
                {services.map((service, index) => (
                <div key={index} className={`absolute w-1/2  transition-transform duration-500 ease-in-out ${getCardPosition(index, currentIndex, services.length)}`}>
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

{/* 
      <div className="p-10 w-11/12 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-700">Als HR-Beratung können wir Ihnen auch bei Folgendem helfen:</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {services.map((service, index) => (
        <div
          key={index}
          className="relative bg-cover bg-center h-48 rounded-lg overflow-hidden shadow-lg"
          style={{ backgroundImage: backgrounds[index] }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end justify-center opacity-100">
            <div className="w-full bg-red-700 text-center p-4">
              <h3 className="text-base font-bold text-white">{service}</h3>
            </div>
          </div>
        </div>
      ))}
</div>


      </div> */}
      {/* <div className="p-10 w-11/12 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-700">Worin besteht genau eine Personalberatung?</h2>
        <p className="text-gray-700 text-center">Eine Personalberatung wie unsere widmet sich einer wesentlichen Aufgabe für das Wachstum und die Effizienz Ihrer Organisation. Wir sind Experten darin, Ihre Personalstrategie zu analysieren, von den Teams bis hin zu den Tools und Verfahren, die sie beeinflussen. Wir möchten Ihr HR-Partner sein und gemeinsam an Projekten arbeiten, die Ihrem Unternehmen beim Wachstum helfen. Unser Ziel ist es, das Potenzial Ihres Humankapitals zu maximieren, damit es zu einem strategischen Vermögenswert bei der Erreichung Ihrer Unternehmensziele wird.</p>
        <p className="text-gray-700 text-center pt-5">Durch die Zusammenarbeit mit einer Personalberatung stellen Sie sicher, dass jeder Schritt, den Sie im Talentmanagement unternehmen, auf der Erfahrung und dem tiefen Wissen von Fachleuten basiert, die jahrelang daran gearbeitet haben, ihre Beratung in diesem Bereich zu perfektionieren. Bei Beratung bieten wir nicht nur Beratungsdienste an, sondern werden auch Ihre Verbündeten, führend in der Definition maßgeschneiderter Strategien. Wir sind hier, um Ihnen zu helfen, das beste Talent auszuwählen, zu binden und zu fördern, und betrachten jedes Projekt als eine Wachstumschance sowohl für Ihre Mitarbeiter als auch für Ihr Unternehmen.</p>
      </div> */}
      {/* <div className="  bg-gray-100 ">
        <div className="w-11/12 mx-auto">
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
      </div> */}


      {/* <div ref={ref8} className="bg-red-500 w-full h-auto flex items-center justify-center py-10">
        <div className={`w-full h-full flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-6`}>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={inView8 ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-white font-bold text-2xl sm:text-3xl text-center md:text-left"
          >
            Unser Ziel ist es, Ihr HR-Partner zu sein
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={inView8 ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              to="scroll-target"
              smooth={true}
              duration={500}
              className="hover:cursor-pointer bg-transparent border-white border-2 px-10 py-3 font-medium text-white hover:bg-white hover:text-blue-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
            >
              Kontaktieren
            </Link>
          </motion.div>
        </div>
      </div> */}




      {/* <div className="p-10 w-11/12 mx-auto">
        <h2 className="text-2xl font-bold text-center mb-12 text-gray-700">Die Employee Journey als Unterscheidungsmerkmal in der HR-Beratung</h2>
        <p className="text-gray-700 text-center">In der heutigen Geschäftswelt ist es offensichtlich geworden, dass erfolgreiche Organisationen sich nicht nur auf die Gegenwart konzentrieren, sondern auch die Zukunft ihrer Mitarbeiter innerhalb des Unternehmens planen. In diesem Kontext positioniert sich Beratung, nach 50 Jahren als Personalberatung, als strategischer Partner für Unternehmen, die ihr Talentmanagement optimieren möchten.</p>
        <p className="text-gray-700 text-center pt-5">Das Verstehen und Management der Employee Journey, oder Mitarbeiterreise, ist im aktuellen Umfeld von entscheidender Bedeutung. Für Beratung ist dieses Konzept ein integraler Bestandteil unseres Ansatzes in der Personalberatung. Wir erkennen an, dass der Prozess der Gewinnung, Entwicklung und Bindung von Talenten ein Schlüsselelement für den nachhaltigen Erfolg jedes Unternehmens in jedem Sektor ist.</p>
      </div> */}

      <div className="w-full bg-gray-200 flex flex-nowrap">
        <div className="w-full h-auto">
          <img src={imagenInfo6} alt="NOT FOUND" className="w-full h-auto object-cover"/>
        </div>
        <div className="w-2/3 flex justify-center items-center">
          <div className="w-full text-center ">
            <h2 className="font-semibold text-gray-800 my-2 text-3xl">MÖCHTEN SIE WEITERE INFORMATIONEN?</h2>
            <button
                className="border-gray-800 border-2 px-4 py-2 sm:px-6 sm:py-3 font-medium bg-gray-800 text-white hover:bg-gray-200 hover:text-gray-800 hover:border-gray-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gray-200  focus:ring-opacity-50 "
                onClick={handleClickSeleccionReclutamiento}
              >
                Kontaktaufnahme
            </button>
          </div>
        </div>
      </div>


      {/* <div className=" bg-gray-100">
        <div className=" w-11/12 mx-auto">
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
      </div> */}

      {/* <div className="h-1 bg-gray-100" id="scroll-target"></div>
        <ContactForm/> */}
    </>
  );
};

export default HomePage;

