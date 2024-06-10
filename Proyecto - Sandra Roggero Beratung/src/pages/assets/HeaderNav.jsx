import { Link } from 'react-router-dom';
import { TfiWorld } from 'react-icons/tfi';
import { FaAngleRight, FaBars, FaTimes } from 'react-icons/fa';
import { useEffect, useState } from "react";

import logoPrincipal from "../../assets/imagenes/logoPrincipal.png"; 
import logoPrincipal_1 from "../../assets/imagenes/LogoPrincipal_1.png"; 


const HeaderNav = () => {

    const [isNavHovered, setIsNavHovered] = useState(false);
    const [hoveredMenuItem, setHoveredMenuItem] = useState(null);
    const [isActiveHoverNav, setIsActiveHoverNav] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isActiveSubMenuMobile,setIsActiveSubMenuMobile] = useState(null);

    const handleLinkClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setIsMobileMenuOpen(false);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (isActiveHoverNav) {
                setIsNavHovered(true);
            } else {
                if(!isMobileMenuOpen){
                    setIsNavHovered(window.scrollY > 0);
                }
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [isActiveHoverNav,isMobileMenuOpen]);

    const menu2 = [
        { id:0,path: "/unternehmen/#", label: "Unternehmen", subTema: "Wir wählen die Fachleute aus, die Ihr Unternehmen bilden werden, und fördern neue, der heutigen Zeit angepasste Führungsstile.", subItems: [
            { path: "/unternehmen/personalauswahl-und-rekrutierung", label: "Personalauswahl und Rekrutierung" },
            { path: "/unternehmen/personalbewertungen", label: "Personalbewertungen" },
            { path: "/unternehmen/international", label: "International" },
            { path: "/unternehmen/funktionen", label: "Funktionen" },
            { path: "/unternehmen/fachspezifische-suche", label: "Fachspezifische Suche" },
            { path: "/unternehmen/inklusionsaudit", label: "Inklusionsaudit" },
        ]},
        { id:1,path: "/kandidaten/#", label: "Kandidaten", subTema: "Wir unterstützen Sie auf dem Weg zu Ihrer Karriere. Nutzen Sie unsere Stellenangebote, Karriereberatung und digitalen Ressourcen.", subItems: [
            { path: "/kandidaten/registrieren-sie-ihren-lebenslauf", label: "Registrieren Sie Ihren Lebenslauf" },
            { path: "/kandidaten/internationales-karrieremanagement", label: "Internationales Karrieremanagement" },
        ]},
        { id:2,path: "/wir/#", label: "Wir", subTema: "Erfahren Sie mehr über unser Unternehmen und unsere Werte.", subItems: [
            { path: "/wir/wer-wir-sind", label: "Wer Wir Sind" },
            { path: "/wir/unsere-philosophie", label: "Unsere Philosophie" },
        ]},
        { id:3,path: "/partnerships", label: "Andere Dienstleistungen" },
        { id:4,path: "/kontakt", label: "Kontakt" },
    ];

    const handleMenuItem = (item) => {
        setHoveredMenuItem(item.path);
        setIsActiveHoverNav(item.label);
        setIsNavHovered(true);
    }

    const handleMenuLeaveItem = () => {
        setHoveredMenuItem(null);
        setIsActiveHoverNav(null);
    }

    const onMouseEnterNavHovered = () => {
            setIsNavHovered(true);
    }
    const onMouseLeaveNavHovered = () =>{
        if(!isMobileMenuOpen){
            setIsNavHovered(window.scrollY > 0);
        }
    }

    return (
        <nav className="p-0 w-full z-50 fixed top-0">
            <div 
                className={`h-28 w-full transition-colors duration-300 ${isNavHovered ? 'bg-white' : 'bg-transparent'}`}
                onMouseEnter={onMouseEnterNavHovered  }
                onMouseLeave={onMouseLeaveNavHovered   }
            >
                <ul className="flex items-center justify-between h-full px-4 md:px-10">
                    <li className="text-center py-4 flex">
                        <Link to="/" onClick={handleLinkClick} className="flex items-center">
                            {isNavHovered ? (
                                <>
                                <div className='flex flex-col items-center'>
                                    <img src={logoPrincipal_1} alt="" className='h-14' />
                                    <div className="flex flex-col items-center">
                                        <h2 className={`font-bell font-medium text-xl transition-colors duration-300 ${isNavHovered ? 'text-gray-800' : 'text-white'}`}>
                                            SANDRA ROGGERO M.
                                        </h2>
                                        <span className={` font-roboto-thin text-sm -mt-2 transition-colors duration-300 ${isNavHovered ? 'text-gray-800' : 'text-white'}`}>
                                            BERATUNG
                                        </span>
                                    </div>
                                </div>
                                </>
                            ): (
                                <>
                                <div className='flex flex-col items-center'>
                                    <img src={logoPrincipal} alt="" className='h-14' />
                                    <div className="flex flex-col items-center">
                                        <h2 className={`font-bell font-medium text-xl transition-colors duration-300 ${isNavHovered ? 'text-gray-800' : 'text-white'}`}>
                                            SANDRA ROGGERO M.
                                        </h2>
                                        <span className={` font-roboto-thin text-sm -mt-2 transition-colors duration-300 ${isNavHovered ? 'text-gray-800' : 'text-white'}`}>
                                            BERATUNG
                                        </span>
                                    </div>
                                </div>
                                </>
                            )}
                            
                        </Link>
                    </li>
                    <li className="md:hidden flex items-center">
                        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen) && setIsNavHovered(true)} className={`${isNavHovered ? 'text-gray-700' : 'text-white'}`}>
                            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                        </button>
                    </li>
                    <li className="hidden md:flex justify-center items-center space-x-2 h-full">
                        <ul className="flex justify-center items-center space-x-8 h-full">
                            {menu2.map((item, index) => (
                                <li
                                    key={index}
                                    className="text-center px-0 transition-colors duration-300 h-full flex items-center justify-center hover:cursor-pointer hover:text-gray-400"
                                    onMouseEnter={() => handleMenuItem(item)}
                                    onMouseLeave={handleMenuLeaveItem}
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
                                        className=""
                                    >
                                        <p className={`hover:text-gray-400 md:text-xs h-full lg:text-sm transition-transform duration-300 transform hover:cursor-pointer hover:translate-y-[-3px] ${isNavHovered ? isActiveHoverNav === item.label ? 'text-gray-400' : 'text-gray-700' : 'text-white'}`}>
                                            {item.label}
                                        </p>
                                    </Link>
                                    {item.subItems && hoveredMenuItem === item.path && (
                                        <div
                                            className="w-full hover:cursor-default absolute top-full left-0 py-6 px-20 text-gray-700 flex-col justify-start items-start bg-white shadow-lg mt-0 space-y-2 border-gray-300 border-t-2"
                                            onMouseEnter={() => setIsActiveHoverNav(item.label)}
                                            onMouseLeave={() => setIsActiveHoverNav(null)}
                                        >
                                            <h2 className="font-medium text-2xl text-start hover:cursor-text">{item.label}</h2>
                                            <ul className='text-start flex flex-nowrap space-x-2'>
                                                {item?.subTema !== undefined &&
                                                    <li className='w-1/4 hover:cursor-text'>
                                                        <p>
                                                            {item?.subTema}
                                                        </p>
                                                    </li>
                                                }
                                                <li className='w-1/4'>
                                                    <ul className='space-y-2'>
                                                        {item.subItems.slice(0, 3).map((subItem, subIndex) => (
                                                            <li key={subIndex}>
                                                                <Link
                                                                    to={subItem.path}
                                                                    onClick={handleLinkClick}
                                                                    className="px-4 text-gray-800 hover:bg-gray-100 text-sm flex items-center hover:cursor-pointer"
                                                                >
                                                                    <FaAngleRight className='' />
                                                                    {subItem.label}
                                                                </Link>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </li>
                                                <li className='w-1/4'>
                                                    <ul className='space-y-2'>
                                                        {item.subItems.slice(3).map((subItem, subIndex) => (
                                                            <li key={subIndex}>
                                                                <Link
                                                                    to={subItem.path}
                                                                    onClick={handleLinkClick}
                                                                    className="px-4 text-gray-800 hover:bg-gray-100 text-sm flex items-center hover:cursor-pointer"
                                                                >
                                                                    <FaAngleRight className='' />
                                                                    {subItem.label}
                                                                </Link>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                    )}
                                </li>
                            ))}
                        </ul>
                        <strong className={`transition-colors duration-300 ${isNavHovered ? 'text-gray-800' : 'text-white'}`}>|</strong>
                        <TfiWorld className={`transition-colors duration-300 ${isNavHovered ? 'text-gray-800' : 'text-white'}`} />
                    </li>
                </ul>
            </div>
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-28 left-0 w-full bg-white shadow-lg z-40 border-t-gray-300 border-t-border_1">
                    <ul className="flex flex-col space-y-0 p-2">
                        {menu2.map((item, index) => (
                            <li key={index} className={`text-gray-800 hover:bg-bg_favorite_4  text-sm hober:text-white `}>
                                <Link
                                    to={item.path}
                                    onClick={(e) => {
                                        setIsActiveSubMenuMobile(item.label);
                                        if (item.subItems) {
                                            e.preventDefault();
                                            setHoveredMenuItem(item.path === hoveredMenuItem ? null : item.path);
                                            

                                        } else {
                                            handleLinkClick();
                                        }
                                    }}
                                    className={`flex justify-between items-center hover:text-white h-full p-2 ${isActiveSubMenuMobile === item.label ? 'text-white bg-gray-800':'text-gray-800 '}`}
                                >
                                    {item.label}
                                    {item.subItems && <FaAngleRight className="ml-2" />}
                                </Link>
                                <hr className={`${isActiveSubMenuMobile === item.label ? 'text-white flex w-full h-1':'hidden'}`}/>
                                {item.subItems && hoveredMenuItem === item.path && (
                                    <ul className={` px-2 my-2 ${isActiveSubMenuMobile === item.label ? 'text-white':''}`}>
                                        {item.subItems.map((subItem, subIndex) => (
                                            <li key={subIndex}>
                                                <Link
                                                    to={subItem.path}
                                                    onClick={handleLinkClick}
                                                    className="block py-2 px-1 hover:text-gray-800 hover:bg-white"
                                                >
                                                    {subItem.label}
                                                </Link>
                                                
                                            </li>
                                            
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </nav>
    );
}

export default HeaderNav;
