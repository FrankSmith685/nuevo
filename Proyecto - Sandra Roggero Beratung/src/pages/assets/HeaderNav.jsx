import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { TfiWorld } from 'react-icons/tfi';
import { FiMenu, FiX } from 'react-icons/fi';

const HeaderNav = () => {
    const location = useLocation();
    const currentPath = location.pathname;
    const logo1 = "Sandra Roggero";

    const menu1 = [
        // { path: "/kandidaten", label: "KANDIDATEN" },
        { path: "/wir", label: "WIR" },
    ];

    const menu2 = [
        { path: "/seleccion-y-headhunting/#", label: "AUSWAHL UND HEADHUNTING", subItems: [
            { path: "/seleccion-y-headhunting/consultora-seleccion-personal-y-reclutamiento", label: "PERSONALAUSWAHL UND REKRUTIERUNG" },
            { path: "/seleccion-y-headhunting/consultoria-headhunter", label: "HEADHUNTER-BERATUNG" },
            { path: "/seleccion-y-headhunting/consultora-seleccion-personal-y-reclutamiento/directivos-mandos-intermedios/", label: "AUSWAHL VON FÜHRUNGSKRÄFTEN" },
            { path: "/seleccion-y-headhunting/interim-management", label: "INTERIM MANAGEMENT" },
            { path: "/seleccion-y-headhunting/evaluaciones-de-personal", label: "PERSONALBEWERTUNGEN" },
        ]},
        { path: "/hr-business-partner", label: "HR BUSINESS PARTNER" },
        { path: "/consultoria/#", label: "BERATUNG UND PERSONALFLUKTUATION", subItems: [
            { path: "/consultoria/formaciones-humanbits", label: "SCHULUNGEN" },
            { path: "/consultoria", label: "ORGANISATORISCHER WANDEL" },
            { path: "/consultoria/acompanamiento-directivo", label: "FÜHRUNGSCOACHING" },
            { path: "/consultoria/workshops/", label: "WORKSHOPS UND SEMINARE" },
        ]},
        { path: "/partnerships", label: "PARTNERSCHAFTEN" },
        { path: "/kontakt", label: "KONTAKT" },
    ];
    

    const [isSticky, setIsSticky] = useState(false);
    const [hoveredMenuItem, setHoveredMenuItem] = useState(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [openedSubMenu, setOpenedSubMenu] = useState(null);

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
        setHoveredMenuItem(null);
        setIsMobileMenuOpen(false);
        setOpenedSubMenu(null);
    };

    const isSubmenuSelected = (subItems) => {
        return subItems.some(subItem => subItem.path === currentPath);
    };


    return (
        <nav className="p-0 w-full z-50">
            <div className='bg-gradient-to-r from-customColor1 to-customColor2 h-20 w-full'>
                <ul className="flex space-x-8 items-center justify-end h-full px-4 md:px-10">
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
                <div className="flex items-center justify-between py-4 px-4 md:px-10 bg-gray-200 border-b-2 border-gray-400 md:hidden ">
                    <Link to="/" onClick={handleLinkClick} className="flex items-center">
                        <h2 className="font-bell text-blue-700 hover:cursor-pointer text-2xl">{logo1} <span className='text-customColor1 text-xl'>Beratung</span></h2>
                    </Link>
                    <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                        {isMobileMenuOpen ? <FiX className="text-2xl text-gray-800" /> : <FiMenu className="text-2xl text-gray-800" />}
                    </button>
                </div>
                <div className="lg:flex items-center justify-center bg-gray-200 lg:px-2 md:px-2">
                    <ul className={`md:flex space-x-6 py-0 items-center justify-center ${isMobileMenuOpen ? 'block' : 'hidden'} md:block bg-gray-200 `}>
                        <li className="text-center py-4 md:flex hidden">
                            <Link to="/" onClick={handleLinkClick} className="flex items-center">
                                <h2 className="font-bell text-blue-700 lg:text-2xl md:text-lg">{logo1} <span className='text-customColor1 md:text-base lg:text-xl'>Beratung</span></h2>
                            </Link>
                        </li>
                        {isMobileMenuOpen ? (<>

                            {menu2.map((item, index) => (
                                <li
                                    key={index}
                                    className="text-center relative py-4 px-0"
                                >
                                    <Link
                                        to={item.path}
                                        onClick={(e) => {
                                            
                                            if (item.subItems) {
                                                e.preventDefault();
                                                setOpenedSubMenu(openedSubMenu === item.path ? null : item.path);
                                            } else {
                                                setOpenedSubMenu(openedSubMenu === item.path ? null : item.path);
                                                handleLinkClick();
                                            }
                                        }}
                                        className={`text-gray-800 hover:text-blue-600 transition-colors duration-300 relative ${(currentPath === item.path || (item.subItems && isSubmenuSelected(item.subItems))) ? 'after:bg-blue-600 after:h-1 after:w-full after:block after:absolute after:bottom-0' : ''} w-full text-left md:w-auto md:text-center`}
                                    >
                                        <p className={`text-sm md:text-xs lg:text-base transition-transform duration-300 transform ${(currentPath === item.path || (item.subItems && isSubmenuSelected(item.subItems))) ? 'translate-y-[-3px]' : 'hover:translate-y-[-3px]'}`}>
                                            {item.label}
                                        </p>
                                    </Link>
                                    {item.subItems && (
                                        <ul className={`${openedSubMenu === item.path ? 'block' : 'hidden'} text-start md:absolute lg:relative top-full left-0 bg-gray-200 md:bg-white shadow-lg py-2 lg:py-0 mt-0 space-y-2 lg:space-y-0 lg:flex lg:flex-col lg:w-full lg:items-center lg:justify-center transition-all duration-300 ease-in-out transform ${openedSubMenu === item.path ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}`}>
                                            {item.subItems.map((subItem, subIndex) => (
                                                <li key={subIndex} className="relative group">
                                                    <Link
                                                        to={subItem.path}
                                                        onClick={handleLinkClick}
                                                        className="block px-4 py-2 text-gray-800 hover:bg-blue-700 hover:text-white lg:hover:bg-transparent lg:hover:text-blue-700 text-sm transition-colors duration-300 ease-in-out"
                                                    >
                                                        {subItem.label}
                                                    </Link>
                                                    {/* Optional decorative element */}
                                                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-transparent group-hover:bg-blue-600 transition-all duration-300 ease-in-out"></div>
                                                </li>
                                            ))}
                                        </ul>
                                    )}

                                </li>
                            ))}

                        </>): (<>
                            {menu2.map((item, index) => (
                            <li
                                key={index}
                                className="text-center relative py-4 px-0"
                                onMouseEnter={() => setHoveredMenuItem(item.path)}
                                onMouseLeave={() => setHoveredMenuItem(null)}
                            >
                                <Link
                                    to={item.path}
                                    onClick={(e) => {
                                        if (item.subItems) {
                                            e.preventDefault();
                                            setHoveredMenuItem(item.path);
                                        } else {
                                            handleLinkClick();
                                        }
                                    }}
                                    className={`text-gray-800 hover:text-blue-600 transition-colors duration-300 relative ${  (currentPath === item.path || (item.subItems && isSubmenuSelected(item.subItems))) ? 'after:bg-blue-600 after:h-1 after:w-full after:block after:absolute after:bottom-0' : ''}`}
                                >
                                    <p className={`md:text-xs lg:text-sm transition-transform duration-300 transform ${(currentPath === item.path || (item.subItems && isSubmenuSelected(item.subItems))) ? 'translate-y-[-3px]' : 'hover:translate-y-[-3px]'}`}>
                                        {item.label}
                                    </p>
                                </Link>
                                {item.subItems && hoveredMenuItem === item.path && (
                                    <ul className="absolute top-full left-0 bg-white shadow-lg py-2 mt-0 space-y-2">
                                        {item.subItems.map((subItem, subIndex) => (
                                            <li key={subIndex}>
                                                <Link
                                                    to={subItem.path}
                                                    onClick={handleLinkClick}
                                                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 text-sm"
                                                >
                                                    {subItem.label}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                        </>)}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default HeaderNav;