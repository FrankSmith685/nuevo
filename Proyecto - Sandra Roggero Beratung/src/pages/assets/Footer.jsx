import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    const logo1 = "Sandra Roggero";

    const handleLinkClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-gray-700 text-white py-8">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-8">
                    {/* <Link to="/" onClick={handleLinkClick} className="flex items-center justify-center w-full">
                        <h2 className="font-bell text-blue-700 text-xl sm:text-2xl lg:text-3xl">{logo1} <span className='text-customColor1 text-lg sm:text-xl lg:text-2xl'>Beratung</span></h2>
                    </Link> */}
                    <Link to="/" onClick={handleLinkClick} className="flex items-center justify-center">
                        <div className="flex flex-col items-center">
                            <h2 className={`font-bell font-medium lg:text-3xl md:text-lg leading-3 transition-colors duration-300 text-white`}>
                                Sandra Roggero M.
                            </h2>
                            <span className={`md:text-base font-bell lg:text-base -mt-2 transition-colors duration-300 text-white`}>
                                Beratung
                            </span>
                        </div>
                    </Link>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div>
                        <h2 className="text-lg font-semibold mb-4">Informationen</h2>
                        <ul className="text-white px-2">
                            <li className="mb-2"> <a href="/#" className="font-normal">Rechtlicher Hinweis</a> </li>
                            <li className="mb-2"> <a href="/#" className="font-normal">Cookie-Politik</a> </li>
                            <li className="mb-2"> <a href="/#" className="font-normal">Datenschutzbestimmungen</a> </li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-lg font-semibold mb-4">Nützliche Links</h2>
                        <ul className="text-white font-medium px-2">
                            <li className="mb-2"> <a href="/seleccion-y-headhunting/consultora-seleccion-personal-y-reclutamiento" className="font-normal">Personalauswahl und Rekrutierung</a> </li>
                            <li className="mb-2"> <a href="/seleccion-y-headhunting/consultoria-headhunter" className="font-normal">Headhunter-Beratung</a> </li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-lg font-semibold mb-4">Meine sozialen Netzwerke</h2>
                        <div className="flex justify-center sm:justify-start space-x-4 px-2">
                            <a href="https://www.facebook.com" className="text-white"><FaFacebook size="1.5em" /></a>
                            <a href="https://www.twitter.com" className="text-white"><FaTwitter size="1.5em" /></a>
                            <a href="https://www.instagram.com" className="text-white"><FaInstagram size="1.5em" /></a>
                            <a href="https://www.linkedin.com" className="text-white"><FaLinkedin size="1.5em" /></a>
                        </div>
                    </div>
                </div>

                <hr className="my-8 border-white" />

                <div className="text-center">
                    <p className="font-medium">&copy; 2024 Alle Rechte vorbehalten</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
