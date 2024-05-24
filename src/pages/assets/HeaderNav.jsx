import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { TfiWorld } from 'react-icons/tfi';

const HeaderNav = () => {
    const location = useLocation();
    const currentPath = location.pathname;
    const logo1 = "Sandra Roggero Beratung";

    const menu1 = [
        { path: "/kandidaten", label: "KANDIDATEN" },
        { path: "/presseraum", label: "PRESSERAUM" },
        { path: "/wir", label: "WIR" },
        { path: "/blog", label: "BLOG" },
    ];  

    const menu2 = [
        { path: "/", label: "SELECCÍON Y HEADHUNTING" },
        { path: "/hr-business-partner", label: "HR BUSSINESS PARTNER" },
        { path: "/*", label: "BERATUNG UND PERSONALFLUKTUATION" },
        { path: "/partnerships", label: "PARTNERSHIPS" },
        { path: "/Kontakt", label: "KONTAKT" },
    ];

    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleLinkClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <nav className="p-0 w-full z-50">
            <div className='bg-gradient-to-r from-blue-600 to-purple-600 h-14 w-full'>
                <ul className="flex space-x-8 items-center justify-end h-full px-10">
                    {menu1.map((item, index) => (
                        <li key={index} className="text-center">
                            <Link
                                to={item.path}
                                onClick={handleLinkClick}
                                className={`text-white hover:text-gray-200 transition-colors duration-300 relative ${currentPath === item.path ? 'after:bg-white after:h-1 after:w-full after:block after:absolute after:bottom-0' : ''}`}
                            >
                                <p className={`transition-transform duration-300 transform ${currentPath === item.path ? 'translate-y-[-3px]' : 'hover:translate-y-[-3px]'}`}>
                                    {item.label}
                                </p>
                            </Link>
                        </li>
                    ))}
                    <li className='text-white flex justify-center items-center space-x-2'>
                        <strong>|</strong>
                        <TfiWorld />
                    </li>
                </ul>
            </div>
            <div className={`bg-white z-50 ${isSticky ? 'fixed top-0 left-0 w-full shadow-md' : 'relative'} transition-transform duration-300 ease-in-out`}>
                <ul className="flex space-x-8 py-4 items-center justify-center bg-gray-200 border-b-2 border-gray-400">
                    <li className="flex text-2xl items-center">
                        <h2 className="font-lobster text-blue-700">{logo1}</h2>
                    </li>
                    {menu2.map((item, index) => (
                        <li key={index} className="text-center">
                            <Link
                                to={item.path}
                                onClick={handleLinkClick}
                                className={`text-gray-800 hover:text-blue-600 transition-colors duration-300 relative ${currentPath === item.path ? 'after:bg-blue-600 after:h-1 after:w-full after:block after:absolute after:bottom-0' : ''}`}
                            >
                                <p className={`transition-transform duration-300 transform ${currentPath === item.path ? 'translate-y-[-3px]' : 'hover:translate-y-[-3px]'}`}>
                                    {item.label}
                                </p>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default HeaderNav;
