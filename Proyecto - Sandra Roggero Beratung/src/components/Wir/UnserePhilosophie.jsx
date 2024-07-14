
import { useNavigate } from "react-router-dom";
import bannerPrincipal from "../../assets/imagenes/home/imagen13.jpg";

// consultoria
import imagen1 from "../../assets/imagenes/consultoria/imagen1.jpg";
import imagen2 from "../../assets/imagenes/consultoria/imagen2.webp";
import imagen3 from "../../assets/imagenes/consultoria/imagen3.webp";
import imagen4 from "../../assets/imagenes/consultoria/imagen4.jpg";
import imagen6 from "../../assets/imagenes/consultoria/imagen5.webp";
import imagen5 from "../../assets/imagenes/consultoria/imagen6.jpg";

import imagenInfo6 from "../../assets/imagenes/InfoImagenesHome/imagen6.jpg";
import { useEffect, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import MeineDienstleistungen from "../../pages/assets/MeineDienstleistungen";
import de from "../../languaje/de";
import { useAppState } from "../../hooks/useAppState";
import es from "../../languaje/es";

const UnserePhilosophie=()=>{
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

    const [data,setData] = useState(de.Wir);
    const {tipoIdioma} = useAppState();

    useEffect(()=>{
        if(tipoIdioma==='de'){
            setData(de.Wir);
        }else{
            setData(es.Wir);
        }
    },[tipoIdioma]);

    return(
        <>
            
            <div className="w-full h-screen bg-bg_favorite_1 relative">
                <img 
                src={optimizedImageURL("v1719875145/mb6tugqd7dsmaxnjpu37.jpg")} 
                alt="Unsere Philosophie" 
                className="absolute top-0 left-0 w-full h-full object-cover z-0" 
                />
                <div className="bg-bg_favorite_1 flex flex-col justify-center items-center md:items-end h-full z-20 relative space-y-4 p-4 pt-32 sm:pt-48 md:pt-64 sm:p-6 md:p-8">
                <div className="w-full md:w-1/2 h-auto">
                    <h2 className="text-white font-bold text-2xl sm:text-4xl  md:text-5xl font-bell text-center md:text-end px-2">
                    {data.UnserePhilosophie.title}
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
                {data.UnserePhilosophie.title}
                </p>
                <p className="text-gray-700 text-start w-full pb-1">
                {data.UnserePhilosophie.description}
                {/* Wir treiben die einzigartigen Geschichten unserer Kandidaten und Kunden voran. Unsere Fähigkeit zu verstehen, was Sie
                 wirklich brauchen, ermöglicht es uns, fesselnde Geschichten zu entwickeln und weiterzugeben, was den Unterschied ausmacht. 
                 Geschichten sind wichtig, denn wenn wir unsere Pläne, Erfahrungen und Ambitionen teilen, eröffnet sich uns eine Welt der 
                 Möglichkeiten. Wenn wir Ihnen zuhören, können wir langfristige Beziehungen aufbauen, die auf Vertrauen und Einfühlungsvermögen beruhen.
                  In Peru und Deutschland besteht unser kleines Team aus spezialisierten Beratern, aus talentierten Menschen mit einer fachkundigen, 
                  globalen Perspektive. Und durch den Austausch von Geschichten untereinander fördern wir die Teamarbeit, von der wir überzeugt sind, 
                  dass sie zum Erfolg führt – nicht nur für uns, sondern auch für unsere Kandidaten und Kunden in aller Welt. Dank der Geschichten der 
                  Menschen sind wir in der Lage, über den Lebenslauf oder die Stellenbeschreibung hinauszuschauen und die einzigartige Eigenschaft zu 
                  finden, die die Übereinstimmung zwischen einem Unternehmen und einem Team oder einem Bewerber außergewöhnlich macht. Wir sind in der 
                  Lage, Unternehmen dabei zu unterstützen, die Talente zu finden, die Ihnen helfen, alle Ihre Ziele zu erreichen – jetzt und in Zukunft. 
                  Natürlich sind wir auch in der Lage, Menschen dabei zu helfen, das nächste Kapitel ihrer Karriere zu definieren, das es ihnen ermöglicht,
                   alle ihre Ambitionen zu erfüllen. Die größten Chancen beginnen mit einer Geschichte. Erzählen Sie uns Ihre. */}
                </p>
            </div>
            
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

export default UnserePhilosophie;