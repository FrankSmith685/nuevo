import { Link, useLocation, useNavigate } from 'react-router-dom';
import { TfiWorld } from 'react-icons/tfi';
import { FaAngleDown, FaAngleRight, FaAngleUp, FaBars, FaTimes } from 'react-icons/fa';
import { useEffect, useState } from "react";
import de from '../../languaje/de';
import { useAppState } from '../../hooks/useAppState';
import es from '../../languaje/es';

const HeaderNav = () => {
    const {tipoIdioma,setTipoIdioma} = useAppState();
    const [isNavHovered, setIsNavHovered] = useState(false);
    const [hoveredMenuItem, setHoveredMenuItem] = useState(null);
    const [isActiveHoverNav, setIsActiveHoverNav] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isActiveSubMenuMobile, setIsActiveSubMenuMobile] = useState(null);

    const [isNavHoveredAux,setIsNavHoveredAux] = useState(false);

    const navigate= useNavigate();

    const optimizedImageURL = (url) => {
        const cloudinaryBaseURL = 'https://res.cloudinary.com/dievolijo/image/upload/';
        return `${cloudinaryBaseURL}c_scale,w_800/${url}`;
    };

    const location = useLocation();

    const handleLinkClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setIsMobileMenuOpen(false);
        setHoveredMenuItem(null);
        setIsActiveHoverNav(null)
        setIsNavHovered(window.scrollY > 0);
        
    };

    useEffect(() => {
        const handleScroll = () => {
            if (location.pathname === '/datenschutzrichtlinie' || location.pathname === '/benutzerrechte') {
                setIsNavHovered(true);
            }else{
                if (isActiveHoverNav) {
                    setIsNavHovered(true);
                } else {
                    if (!isMobileMenuOpen) {
                        setIsNavHovered(window.scrollY > 0);
                        // setIsNavHovered(true);
                        // setIsNavHoveredAux(window.scrollY > 0);

                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [isActiveHoverNav, isMobileMenuOpen,location.pathname]);

    // const menu2 = [
    //     { id:0, path: "/unternehmen/#", label: "Unternehmen", subTema: "Wir wählen die Fachleute aus, die Ihr Unternehmen braucht und fördern neue, der heutigen Zeit angepasste Führungsstile.", subItems: [
    //         { path: "/unternehmen/personalauswahl-und-rekrutierung", label: "Personalauswahl und Rekrutierung" },
    //         { path: "/unternehmen/personalbewertungen", label: "Personalbewertungen" },
    //         { path: "/unternehmen/international", label: "International" },
    //         { path: "/unternehmen/funktionen", label: "Funktionen" },
    //         { path: "/unternehmen/fachspezifische-suche", label: "Fachspezifische Suche" },
    //         { path: "/unternehmen/inklusionsaudit", label: "Inklusionsaudit" },
    //     ]},
    //     { id:1, path: "/kandidaten/#", label: "Kandidaten", subTema: "Wir unterstützen Sie auf dem Weg zu Ihrer Karriere. Nutzen Sie unsere Stellenangebote, Karriereberatung und digitalen Ressourcen.", subItems: [
    //         { path: "/kandidaten/registrieren-sie-ihren-lebenslauf", label: "Registrieren Sie Ihren Lebenslauf" },
    //         { path: "/kandidaten/internationales-karrieremanagement", label: "Internationales Karrieremanagement" },
    //     ]},
    //     { id:2, path: "/wir/#", label: "Wir", subTema: "Erfahren Sie mehr über unser Unternehmen und unsere Werte.", subItems: [
    //         { path: "/wir/wer-wir-sind", label: "Wer Wir Sind" },
    //         { path: "/wir/unsere-philosophie", label: "Unsere Philosophie" },
    //     ]},
    //     { id:3, path: "/meine-dienstleistungen", label: "Meine Dienstleistungen", subTema: "Wir bieten Dienstleistungen für Ihre akademische, berufliche und persönliche Entwicklung, einschließlich Studium, Arbeit, Wohnen, Beförderung, Visa und Sprachen.", subItems: [
    //         { path: "/meine-dienstleistungen/studium-ausbildung-praktikum", label: "Studium - Ausbildung - Praktikum" },
    //         { path: "/meine-dienstleistungen/arbeit-steuern", label: "Arbeit - Steuern" },
    //         { path: "/meine-dienstleistungen/wohnen-beförderung", label: "Wohnen - Beförderung" },
    //         { path: "/meine-dienstleistungen/visum-sprache", label: "Visum - Sprache" },
    //     ]},
    //     { id:4, path: "/kontakt", label: "Kontakt" },
    // ];

    const handleMenuItem = (item) => {
        setHoveredMenuItem(item.path);
        setIsActiveHoverNav(item.label);
        setIsNavHovered(true);
    };

    const handleMenuLeaveItem = () => {
        setHoveredMenuItem(null);
        setIsActiveHoverNav(null);
    };

    const onMouseEnterNavHovered = () => {
        setIsNavHovered(true);
        // setIsNavHoveredAux(true);
    };

    const onMouseLeaveNavHovered = () => {
        if (location.pathname === '/datenschutzrichtlinie' || location.pathname === '/benutzerrechte') {
            setIsNavHovered(true);
        }else{
            if (!isMobileMenuOpen) {
                setIsNavHovered(window.scrollY > 0);
            }
        }
    };

    const [activeIdioma,setActiveIdioma] = useState(false);

    const handleClickActiveIdioma=()=>{
        setActiveIdioma(!activeIdioma);
    }

    const [menuData,setMenuData] = useState(de.menu2);

    useEffect(()=>{
        if(tipoIdioma==='de'){
            setMenuData(de.menu2);
        }else{
            setMenuData(es.menu2);
        }
    },[tipoIdioma]);

    const handleClickIdiomaDe=()=>{
        setTipoIdioma('de');
    }

    const handleClickIdiomaEs=()=>{
        setTipoIdioma('es');
    }

    return (
        <nav className="p-0 w-full z-50 fixed top-0">
            <div 
                className={`h-32 w-full transition-colors duration-300 ${isNavHovered ? 'bg-white' : 'bg-transparent'}`}
                onMouseEnter={onMouseEnterNavHovered}
                onMouseLeave={onMouseLeaveNavHovered}
            >
                {/* lg:justify-normal */}
                <ul className="flex items-center justify-between w-full px-4 md:px-10 h-full ">
                    <li className="text-center  flex items-center justify-center lg:w-72 h-full">
                        <Link to="/" onClick={handleLinkClick} className="flex items-center">
                            {isNavHovered ? (
                                <>
                                    <div className='flex flex-col items-center'>
                                        <img src={optimizedImageURL('v1719690680/yxcetofgrpqxqb7ziwnr.png')} alt="Logo Principal" className='h-20' loading='lazy'/>
                                        <div className="flex flex-col items-center w-auto">
                                            <h2 className={`font-roboto-thin w-auto font-medium text-xl transition-colors duration-300 ${isNavHovered ? 'text-gray-800' : 'text-white'}`}>
                                                SANDRA ROGGERO M.
                                            </h2>
                                            <span className={`font-bell text-sm -mt-1 transition-colors font-bold duration-300 ${isNavHovered ? 'text-violet-900' : 'text-white'}`}>
                                                BERATUNG
                                            </span>
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className='flex flex-col items-center'>
                                        <img src={optimizedImageURL('v1719690680/w24ybh8okav1nil30ylm.png')} alt="Logo Principal" className='h-20' loading='lazy' />
                                        <div className="flex flex-col items-center">
                                            <h2 className={`font-roboto-thin font-medium text-xl transition-colors duration-300 ${isNavHovered ? 'text-gray-800' : 'text-white'}`}>
                                                SANDRA ROGGERO M.
                                            </h2>
                                            <span className={`font-bell text-sm -mt-1 transition-colors font-bold duration-300 ${isNavHovered ? 'text-violet-900' : 'text-white'}`}>
                                                BERATUNG
                                            </span>
                                        </div>
                                    </div>
                                </>
                            )}
                        </Link>
                    </li>
                    <li className="md:hidden flex items-center">
                        {isMobileMenuOpen &&
                            (
                                <>
                                    <div className='flex justify-between items-center space-x-2 pr-2'>
                                        
                                        <div className='w-full flex flex-nowrap items-center space-x-1 overflow-hidden'>
                                            <div className={`transition-transform duration-300 ${activeIdioma ? 'translate-x-0' : 'translate-x-full'} flex items-center space-x-1`}>
                                                {
                                                    activeIdioma && (<>
                                                        <p className={`transition-colors duration-300 text-sm hover:cursor-pointer ${tipoIdioma === 'de' ? 'font-medium' : 'font-light '} ${isNavHovered ? 'text-gray-800' : 'text-white'}`} onClick={handleClickIdiomaDe}>DE</p>
                                                        <div className={`transition-colors duration-300 h-4 w-favorite_2 ${isNavHovered ? 'bg-gray-500' : 'bg-white'}`}>
                                                        </div>
                                                        <p className={`transition-colors duration-300 text-sm hover:cursor-pointer ${tipoIdioma === 'es' ? 'font-medium' : 'font-light '} ${isNavHovered ? 'text-gray-800' : 'text-white'}`} onClick={handleClickIdiomaEs}>ES</p>
                                                    </>)
                                                }
                                            </div>
                                            <TfiWorld onClick={handleClickActiveIdioma} size={20} className={`transition-colors duration-300 hover:cursor-pointer ${isNavHovered ? 'text-gray-800' : 'text-white'}`} />
                                        </div>
                                        <div className={`transition-colors duration-300 h-10 w-favorite_2 ${isNavHovered ? 'bg-gray-500' : 'bg-white'}`}>
                                        </div>
                                    </div>
                                </>
                            )
                        }
                        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen) && setIsNavHovered(true)} className={`${isNavHovered ? 'text-gray-700' : 'text-white'}`}>
                            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                        </button>
                    </li>
                    <li className="hidden md:flex justify-end items-end space-x-2 h-full lg:w-full ">
                        <ul className="flex justify-end items-center h-full w-full">
                            {menuData.map((item, index) => (
                                <li
                                    key={index}
                                    className="text-center transition-colors duration-300 h-full flex items-center justify-center hover:cursor-pointer hover:text-white hover:bg-gray-500 w-auto px-0 text-sm "
                                    onMouseEnter={() => handleMenuItem(item)}
                                    onMouseLeave={handleMenuLeaveItem}
                                >
                                        <p className={`hover:text-white flex w-full px-8 justify-center items-center md:text-xs h-full lg:text-sm transition-transform duration-300 transform hover:cursor-pointer hover:translate-y-[-3px] ${isNavHovered ? isActiveHoverNav === item.label ? 'text-white' : 'text-gray-700' : 'text-white'} `}
                                            onClick={(e) => {
                                                if (item.subItems) {
                                                    e.preventDefault();
                                                    setHoveredMenuItem(item.path);
                                                } else {
                                                    handleLinkClick();
                                                    navigate(item.path);
                                                }
                                            }}
                                        >
                                            {item.label}
                                        </p>
                                    {/* </Link> */}
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

                            
                            <li className='flex justify-between items-center space-x-2'>
                                <div className={`transition-colors duration-300 h-10 w-favorite_2 ${isNavHovered ? 'bg-gray-500' : 'bg-white'}`}>
                                </div>
                                <div className='w-full flex flex-nowrap items-center space-x-1 overflow-hidden'>
                                    <div className={`transition-transform duration-300 ${activeIdioma ? 'translate-x-0' : 'translate-x-full'} flex items-center space-x-1`}>
                                        {
                                            activeIdioma && (<>
                                                <p className={`transition-colors duration-300 text-sm hover:cursor-pointer ${tipoIdioma === 'de' ? 'font-medium' : 'font-light '} ${isNavHovered ? 'text-gray-800' : 'text-white'}`} onClick={handleClickIdiomaDe}>DE</p>
                                                <div className={`transition-colors duration-300 h-4 w-favorite_2 ${isNavHovered ? 'bg-gray-500' : 'bg-white'}`}>
                                                </div>
                                                <p className={`transition-colors duration-300 text-sm hover:cursor-pointer ${tipoIdioma === 'es' ? 'font-medium' : 'font-light '} ${isNavHovered ? 'text-gray-800' : 'text-white'}`} onClick={handleClickIdiomaEs}>ES</p>
                                            </>)
                                        }
                                    </div>
                                    <TfiWorld onClick={handleClickActiveIdioma} className={`transition-colors duration-300 hover:cursor-pointer ${isNavHovered ? 'text-gray-800' : 'text-white'}`} />
                                </div>
                            </li>


                            
                        </ul>
                        {/* <ul className=''>
                            
                        </ul> */}
                        {/* <strong className={`transition-colors duration-300 font-light text-2xl ${isNavHovered ? ' text-gray-800' : ' text-white'}`}>|</strong> */}
                        {/*  */}
                        {/* <TfiWorld className={`transition-colors duration-300 ${isNavHovered ? 'text-gray-800' : 'text-white'}`} /> */}
                    </li>
                </ul>
            </div>
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-32 left-0 w-full bg-white shadow-lg z-40 border-t-gray-300 border-t-border_1">
                    {/* <div className='px-4 bg-red-500'>
                        HOLA
                    </div> */}
                    <ul className="flex flex-col space-y-0 p-2">
                        {menuData.map((item, index) => (
                            <li key={index} className={`text-gray-800 hover:bg-bg_favorite_4 text-sm hover:text-white`}>
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
                                    className={`flex justify-between items-center hover:text-white h-full p-2 ${isActiveSubMenuMobile === item.label ? 'text-white bg-gray-800' : 'text-gray-800 '}`}
                                >
                                    {item.label}
                                    {item.subItems && <FaAngleRight className="ml-2" />}
                                </Link>
                                <hr className={`${isActiveSubMenuMobile === item.label ? 'text-white flex w-full' : 'hidden'}`} />
                                {item.subItems && hoveredMenuItem === item.path && (
                                    <ul className={`p-2 bg-gray-800 ${isActiveSubMenuMobile === item.label ? 'text-white' : 'text-gray-700'}`}>
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