import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
// import bannerPrincipal from "../../assets/imagenes/home/imagen1.jpg";
// import imagen1 from "../../assets/imagenes/consultoria/imagen1.jpg";
// import imagen2 from "../../assets/imagenes/consultoria/imagen2.webp";
// import imagen3 from "../../assets/imagenes/consultoria/imagen3.webp";
// import imagen4 from "../../assets/imagenes/consultoria/imagen4.jpg";
// import imagen6 from "../../assets/imagenes/consultoria/imagen5.webp";
// import imagen5 from "../../assets/imagenes/consultoria/imagen6.jpg";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { useAppState } from "../../hooks/useAppState";
import MeineDienstleistungen from "../../pages/assets/MeineDienstleistungen";
import de from "../../languaje/de";
import es from "../../languaje/es";

const PersonalauswahlUndRekrutierung = () => {
  const {imagenesPreloader,tipoIdioma } = useAppState();

    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleClickHome = () => {
        navigate("/");
    }


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
        }else{
            setData(es.Unternehmen);
        }
    },[tipoIdioma]);



    return (
        <>
            <div className="w-full h-screen bg-bg_favorite_1 relative">
                <img 
                    src={optimizedImageURL("v1719433441/w0hfv4paxus96kbjo2pi.jpg")}
                    // "https://res.cloudinary.com/dievolijo/image/upload/v1719433441/w0hfv4paxus96kbjo2pi.jpg" 
                    alt="NOT FOUND" 
                    className="absolute top-0 left-0 w-full h-full object-cover z-0"
                    loading="lazy"
                />
                <div className="bg-bg_favorite_1 flex flex-col justify-center items-center md:items-end h-full z-20 relative space-y-4 p-4 pt-32 sm:pt-48 md:pt-64 sm:p-6 md:p-8">
                <div className="w-full md:w-1/2 h-auto">
                    <h2 className="text-white font-bold text-2xl sm:text-4xl  md:text-5xl font-bell text-center md:text-end px-2">
                    {/* Personalauswahl und Rekrutierung */}
                    {data.PersonalauswahlUndRekrutierung.title}
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
                {/* Personalauswahl und Rekrutierung */}
                {data.PersonalauswahlUndRekrutierung.title}
                </p>
                <p className="text-gray-700 text-start w-full">
                {/* Wir engagieren uns in jedem Auswahlverfahren, als ob es sich um unser eigenes Unternehmen handelt, 
                indem wir uns auf die Menschen konzentrieren und ihnen zuhören, egal ob es sich um Bewerber oder Kunden handelt. 
                Dabei nimmt Beratung und das Erkennen von Bedürfnissen einen hohen Stellenwert ein. Weiterhin begleiten und 
                gewährleisten wir dank unseres eigenen Dienstes „Onboarding Selektion“ die bestmögliche Integration der Kandidaten 
                in das Unternehmen. Wir sind Personalvermittler und Integrations Coaches. Der Onboarding-Prozess konzentriert sich 
                nicht nur auf das Follow-up nach der Auswahl, sondern wir begleiten den Prozess von Anfang an, immer im Einklang mit
                dem Auftrag und dem Ziel des Unternehmens. Jeder Auswahlprozess ist einzigartig, denn keine zwei Personen oder Unternehmen 
                sind gleich. Es gibt eine Lösung für jedes Unternehmen, und wir von Sandra Roggero-Beratung wissen, wie man sie findet. */}
                    {data.PersonalauswahlUndRekrutierung.description}
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

export default PersonalauswahlUndRekrutierung;
