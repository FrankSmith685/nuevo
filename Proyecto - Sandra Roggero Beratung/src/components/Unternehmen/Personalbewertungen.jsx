
import { useNavigate } from "react-router-dom";
// import bannerPrincipal from "../../assets/imagenes/home/imagen6.jpg";

// consultoria
// import imagen1 from "../../assets/imagenes/consultoria/imagen1.jpg";
// import imagen2 from "../../assets/imagenes/consultoria/imagen2.webp";
// import imagen3 from "../../assets/imagenes/consultoria/imagen3.webp";
// import imagen4 from "../../assets/imagenes/consultoria/imagen4.jpg";
// import imagen6 from "../../assets/imagenes/consultoria/imagen5.webp";
// import imagen5 from "../../assets/imagenes/consultoria/imagen6.jpg";

// import imagenInfo6 from "../../assets/imagenes/InfoImagenesHome/imagen6.jpg";

import { useEffect, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { useAppState } from "../../hooks/useAppState";
import MeineDienstleistungen from "../../pages/assets/MeineDienstleistungen";
import de from "../../languaje/de";
import es from "../../languaje/es";
import en from "../../languaje/en";

const Personalbewertungen=()=>{
  const {imagenesPreloader,tipoIdioma } = useAppState();

    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleClickHome=()=>{
        navigate("/");
    }

    // const services = [
    //     {image:imagen1,title:"FÜHRUNGSBEGLEITUNG"},
    //     {image:imagen2,title:"BEWERTUNGEN"},
    //     {image:imagen3,title:"WORKSHOPS UND TEAMBUILDINGS"},
    //     {image:imagen4,title:"AUSWAHL VON FÜHRUNGSKRÄFTEN"},
    //     {image:imagen5,title:"GLEICHSTELLUNGSPLÄNE"},
    //     {image:imagen6,title:"MANAGEMENT DES ORGANISATORISCHEN WANDELS"},
    // ];

    const services = [
        {title:"STUDIUM"},
        {title:"AUSBILDUNG"},
        {title:"PARKTIKUM"},
        {title:"ARBEIT"},
        {title:"STEUERN"},
        {title:"WOHNEN"},
        {title:"TRANSPORT"},
        {title:"VISUM"},
        {title:"SPRACHE"},
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
      
      const handleClickSeleccionReclutamiento = () => {
        navigate("/kontakt");
    };

    const optimizedImageURL = (url) => {
        const cloudinaryBaseURL = 'https://res.cloudinary.com/dievolijo/image/upload/';
        return `${cloudinaryBaseURL}c_scale,w_2000/${url}`;
    };

    const [data,setData] = useState(de.Unternehmen);

    useEffect(()=>{
        if(tipoIdioma==='de'){
            setData(de.Unternehmen);
        }else if(tipoIdioma==='en'){
            setData(en.Unternehmen);
        }else{
            setData(es.Unternehmen);
        }
    },[tipoIdioma]);

    return(
        <>

            <div className="w-full h-screen bg-bg_favorite_1 relative">
                <img 
                // "https://res.cloudinary.com/dievolijo/image/upload/v1719433441/cmbypveirnacdqmlimvq.jpg"
                    src={optimizedImageURL("v1719433441/cmbypveirnacdqmlimvq.jpg")}
                    alt="NOT FOUND" 
                    className="absolute top-0 left-0 w-full h-full object-cover z-0"
                    loading="lazy"
                />
                <div className="bg-bg_favorite_1 flex flex-col justify-center items-center md:items-end h-full z-20 relative space-y-4 p-4 pt-32 sm:pt-48 md:pt-64 sm:p-6 md:p-8">
                <div className="w-full md:w-1/2 h-auto">
                    <h2 className="text-white font-bold text-2xl sm:text-4xl  md:text-5xl font-bell text-center md:text-end px-2">
                        {/* Personalbewertungen */}
                        {data.Personalbewertungen.title}

                    </h2>
                </div>
                </div>
            </div>
            <div className="w-11/12 px-2 sm:px-10 pb-10 mx-auto">
                <p className="text-lg text-gray-400 py-10 font-bell">
                <span onClick={handleClickHome} className="hover:cursor-pointer  text-gray-800 font-medium">
                    Sandra Roggero <span className="text-gray-500 font-medium text-base">Beratung</span>
                </span>
                {' > '}
                    {/* Personalbewertungen */}
                    {data.Personalbewertungen.title}
                </p>
                <p className="text-gray-700 text-start w-full">
                {/* Die Leistungsbewertung ist ein wichtiges Instrument zur Steigerung der Produktivität. Wenn Sie die Fähigkeiten Ihrer 
                Teams kennen und wissen, was sie zum Unternehmen beitragen können, können Sie ihnen die notwendigen Instrumente an die Hand geben, 
                um sowohl ihre berufliche Entwicklung als auch die des Unternehmens zu fördern. */}
                {data.Personalbewertungen.description}

                </p>
                <p className="text-gray-700 text-start w-full">
                {/* Sandra Roggero Beratung hilft Ihnen, Ihre Teams zu bewerten, indem wir uns auf die Menschen konzentrieren. */}
                {data.Personalbewertungen.description2}

                </p>
                <ul className="list-disc list-inside pl-1">
                    {data.Personalbewertungen.dataInfo.map((d)=>{
                        return(
                            <li className="mb-2 text-gray-800">
                                {d}
                            </li>
                        )
                    })}
                    
                    {/* <li className="mb-2 text-gray-800">
                    Erkennen und entwickeln Sie die einzigartigen Talente Ihres Unternehmens.
                    </li>
                    <li className="mb-2 text-gray-800">
                    Durchführung von Evaluierungen, die auf Ihre Herausforderungen und Ihr Team zugeschnitten sind.
                    </li>
                    <li className="mb-2 text-gray-800">
                    Belohnung der Produktivität und Leistung von Mitarbeitern im Rahmen von internen Förderungs- oder Auswahlprozessen.
                    </li>
                    <li className="mb-2 text-gray-800">
                    Messung persönlicher Kompetenzen, des Potenzial und den Interessen der Mitarbeiter anhand der Unternehmensstrategie und der Unternehmensziele.
                    </li>
                    <li className="mb-2 text-gray-800">
                    Einbindung von Kompetenzentwicklungsplänen, die auf die jeweilige Person und Position zugeschnitten sind.
                    </li> */}
                </ul>
            </div>
            {/* <div className="bg-gray-800 w-full h-full">
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
            </div> */}
            <MeineDienstleistungen/>
            <div className="w-full bg-gray-200 flex flex-col sm:flex-row flex-nowrap">
                <div className="w-full flex justify-center items-center">
                <div className="w-full text-center p-4">
                    <h2 className="font-semibold text-gray-800 my-2 text-2xl md:text-3xl">{data.homeInfo2}</h2>
                    <button
                    className="border-gray-800 border-2 px-4 py-2 sm:px-6 sm:py-3 font-medium bg-gray-800 text-white hover:bg-gray-200 hover:text-gray-800 hover:border-gray-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-opacity-50"
                    onClick={handleClickSeleccionReclutamiento}
                    >
                    {data.homeInfo3}
                    </button>
                </div>
                </div>
            </div>
            
        </>
    )
}


export default Personalbewertungen;