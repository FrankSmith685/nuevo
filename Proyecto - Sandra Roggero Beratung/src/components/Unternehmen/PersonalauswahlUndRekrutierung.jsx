
import { useNavigate } from "react-router-dom";
import bannerPrincipal from "../../assets/imagenes/home/imagen1.jpg";

// consultoria
import imagen1 from "../../assets/imagenes/consultoria/imagen1.jpg";
import imagen2 from "../../assets/imagenes/consultoria/imagen2.webp";
import imagen3 from "../../assets/imagenes/consultoria/imagen3.webp";
import imagen4 from "../../assets/imagenes/consultoria/imagen4.jpg";
import imagen6 from "../../assets/imagenes/consultoria/imagen5.webp";
import imagen5 from "../../assets/imagenes/consultoria/imagen6.jpg";
import { useEffect, useState } from "react";
import { FaAngleLeft, FaAngleRight, FaArrowLeft, FaArrowRight } from "react-icons/fa";

const PersonalauswahlUndRekrutierung=()=>{
    const navigate = useNavigate();

    const handleClickHome=()=>{
        navigate("/");
    }

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
      

    return(
        <>
            <div className="w-full h-screen bg-bg_favorite_1 relative">
                <img src={bannerPrincipal} alt="NOT FOUND" className="absolute top-0 left-0 w-full h-full object-cover z-0" />
                
                <div className="bg-bg_favorite_1 flex flex-col justify-center items-end h-full z-20 relative space-y-4 p-4 pt-96 sm:p-6 md:p-8">
                    <div className="w-1/2 h-auto ">
                        <h2 className="text-white font-bold text-4xl sm:text-4xl md:text-5xl font-bell text-center px-2">
                            Personalauswahl und Rekrutierung
                        </h2>
                    </div>
                </div>
            </div>
            <div className="w-11/12 px-10 pb-10 mx-auto">
                <p className="text-base text-gray-400 py-10">
                    <span onClick={handleClickHome} className="hover:cursor-pointer text-gray-800 font-bold">
                        Sandra Rogero <span className="text-gray-500 font-medium text-xs">Beratung</span>
                    </span>
                    {' > '}
                    Personalauswahl und Rekrutierung
                </p>
                <p className="text-gray-700 text-center w-full ">
                    Wir engagieren uns in jedem Auswahlverfahren, als ob es sich um unser eigenes Unternehmen handeln würde, 
                    indem wir uns auf die Menschen konzentrieren und ihnen zuhören, egal ob es sich um Bewerber oder Kunden handelt, 
                    um sie zu beraten und ihre Bedürfnisse zu erkennen und zu erfüllen. Darüber hinaus begleiten und gewährleisten wir 
                    dank unseres eigenen Dienstes „Onboarding Selektion“ die bestmögliche Integration der Kandidaten in das Unternehmen. 
                    Wir sind Personalvermittler und Integration Coaches. Der Onboarding-Prozess konzentriert sich nicht nur auf das Follow-up nach 
                    der Auswahl, sondern wir begleiten den Prozess von Anfang an, immer im Einklang mit dem Auftrag und dem Ziel des Unternehmens. 
                    Jeder Auswahlprozess ist einzigartig, denn keine zwei Personen oder Unternehmen sind gleich. Es gibt eine Lösung für jedes 
                    Unternehmen, und wir von Sandra Roggero-Beratung wissen, wie man sie findet.
                </p>
            </div>
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
                            <div className="w-full  bg-red-700 text-center p-4">
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
            

        </>
    )
}

export default PersonalauswahlUndRekrutierung;