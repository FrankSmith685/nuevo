import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import imagen4 from "../../assets/imagenes/MeineDienstleistungen/imagen4.jpg";
import imagen5 from "../../assets/imagenes/MeineDienstleistungen/imagen5.jpg";
import imagenInfo6 from "../../assets/imagenes/InfoImagenesHome/imagen6.jpg";

// const images = [imagen4, imagen5];
const images = [null, null];

const ArbeitSteuern = () => {
    const navigate = useNavigate();
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        window.scrollTo(0, 0);

        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const handleClickHome = () => {
        navigate("/");
    };

    const handleClickSeleccionReclutamiento = () => {
        navigate("/kontakt");
    };

    const handleImageClick = (index) => {
        setCurrentImageIndex(index);
    };

    return (
        <>
            <div className="w-full h-screen bg-bg_favorite_1 relative">
                <img
                    src={images[currentImageIndex]}
                    alt="NOT FOUND"
                    className="absolute top-0 left-0 w-full h-full object-cover z-0"
                />
                
                <div className="bg-bg_favorite_1 flex flex-col justify-center items-center md:items-end h-full z-20 relative space-y-4 p-4 pt-32 sm:pt-48 md:pt-64 sm:p-6 md:p-8">
                    <div className="w-full md:w-3/5 h-auto">
                        <h2 className="text-white font-bold text-2xl sm:text-4xl md:text-5xl font-bell text-center md:text-end px-2">
                            Arbeit - Steuern
                        </h2>
                    </div>
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
                    {images.map((_, index) => (
                        <div
                            key={index}
                            className={`w-3 h-3 rounded-full ${index === currentImageIndex ? 'bg-white' : 'bg-gray-400'} cursor-pointer`}
                            onClick={() => handleImageClick(index)}
                        ></div>
                    ))}
                </div>
                </div>
            </div>
            <div className="w-11/12 px-2 sm:px-10 pb-10 mx-auto">
                <p className="text-lg text-gray-400 py-10 font-bell">
                    <span onClick={handleClickHome} className="hover:cursor-pointer text-gray-800 font-medium">
                        Sandra Roggero <span className="text-gray-500 font-medium text-base">Beratung</span>
                    </span>
                    {' > '}
                        Arbeit - Steuern
                </p>
                <div className="text-gray-700 text-start w-full">
                    <h2 className="font-medium">Arbeit</h2>
                    <h2 className="">Die wichtigsten Vorteile der Arbeit in Deutschland sind:</h2>
                    <p className="pb-1">
                    Das rasche Wirtschaftswachstum und die zahlreichen Beschäftigungsmöglichkeiten in den Bereichen IT, Technik und Industrie.
                     Im Vergleich zu anderen Ländern bietet das Land faire Löhne und Gehälter. Und die deutsche Regierung bemüht sich kontinuierlich 
                     darum, Ausländer als Arbeitskräfte zu gewinnen.
                    </p>
                    <h2 className="font-medium">Steuern</h2>
                    <p className="pb-1">
                    In Deutschland gibt es verschiedene Arten von Steuern, wie die Einkommensteuer, die Gewerbesteuer und die Umsatzsteuer. 
                    Sie sind die wichtigsten Einnahmequellen des Staates, mit denen er Ausgaben für das Gemeinwohl finanziert, wie z. B. 
                    soziale Sicherheit, Bildung, Gesundheitsversorgung oder Verkehrsinfrastruktur. Das deutsche Steuersystem basiert auf der 
                    Leistungsfähigkeit des einzelnen Steuerzahlers, Transparenz und Gerechtigkeit.
                    </p>
                </div>
            </div>
            <div className="w-full bg-gray-200 flex flex-col sm:flex-row flex-nowrap">
                {/* <div className="w-full sm:w-1/3 h-auto">
                    <img src={imagenInfo6} alt="NOT FOUND" className="w-full h-full object-cover" />
                </div> */}
                <div className="w-full flex justify-center items-center">
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

export default ArbeitSteuern;
