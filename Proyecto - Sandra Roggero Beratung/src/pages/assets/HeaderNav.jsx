import { Link, useLocation } from 'react-router-dom';
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
    const [isActiveSubMenuMobile, setIsActiveSubMenuMobile] = useState(null);

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
                    // setIsNavHovered(window.scrollY > 0);
                    if (!isMobileMenuOpen) {
                        setIsNavHovered(window.scrollY > 0);
                    }
                }
            }
            
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [isActiveHoverNav, isMobileMenuOpen,location.pathname]);

    // useEffect(() => {
    //     if (location.pathname === '/datenschutzrichtlinie') {
    //         setIsNavHovered(true);
    //     }
    // }, []);

    const menu2 = [
        { id:0, path: "/unternehmen/#", label: "Unternehmen", subTema: "Wir wählen die Fachleute aus, die Ihr Unternehmen braucht und fördern neue, der heutigen Zeit angepasste Führungsstile.", subItems: [
            { path: "/unternehmen/personalauswahl-und-rekrutierung", label: "Personalauswahl und Rekrutierung" },
            { path: "/unternehmen/personalbewertungen", label: "Personalbewertungen" },
            { path: "/unternehmen/international", label: "International" },
            { path: "/unternehmen/funktionen", label: "Funktionen" },
            { path: "/unternehmen/fachspezifische-suche", label: "Fachspezifische Suche" },
            { path: "/unternehmen/inklusionsaudit", label: "Inklusionsaudit" },
        ]},
        { id:1, path: "/kandidaten/#", label: "Kandidaten", subTema: "Wir unterstützen Sie auf dem Weg zu Ihrer Karriere. Nutzen Sie unsere Stellenangebote, Karriereberatung und digitalen Ressourcen.", subItems: [
            { path: "/kandidaten/registrieren-sie-ihren-lebenslauf", label: "Registrieren Sie Ihren Lebenslauf" },
            { path: "/kandidaten/internationales-karrieremanagement", label: "Internationales Karrieremanagement" },
        ]},
        { id:2, path: "/wir/#", label: "Wir", subTema: "Erfahren Sie mehr über unser Unternehmen und unsere Werte.", subItems: [
            { path: "/wir/wer-wir-sind", label: "Wer Wir Sind" },
            { path: "/wir/unsere-philosophie", label: "Unsere Philosophie" },
        ]},
        { id:3, path: "/meine-dienstleistungen", label: "Meine Dienstleistungen", subTema: "Wir bieten Dienstleistungen für Ihre akademische, berufliche und persönliche Entwicklung, einschließlich Studium, Arbeit, Wohnen, Beförderung, Visa und Sprachen.", subItems: [
            { path: "/meine-dienstleistungen/studium-ausbildung-praktikum", label: "Studium - Ausbildung - Praktikum" },
            { path: "/meine-dienstleistungen/arbeit-steuern", label: "Arbeit - Steuern" },
            { path: "/meine-dienstleistungen/wohnen-beförderung", label: "Wohnen - Beförderung" },
            { path: "/meine-dienstleistungen/visum-sprache", label: "Visum - Sprache" },
        ]},
        { id:4, path: "/kontakt", label: "Kontakt" },
    ];

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

    return (
        <nav className="p-0 w-full z-50 fixed top-0">
            <div 
                className={`h-32 w-full transition-colors duration-300 ${isNavHovered ? 'bg-white' : 'bg-transparent'}`}
                onMouseEnter={onMouseEnterNavHovered}
                onMouseLeave={onMouseLeaveNavHovered}
            >
                <ul className="flex items-center justify-between h-full px-4 md:px-10">
                    <li className="text-center py-4 flex">
                        <Link to="/" onClick={handleLinkClick} className="flex items-center">
                            {isNavHovered ? (
                                <>
                                    <div className='flex flex-col items-center'>
                                        <img src={logoPrincipal_1} alt="Logo Principal" className='h-20' />
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
                            ) : (
                                <>
                                    <div className='flex flex-col items-center'>
                                        <img src={logoPrincipal} alt="Logo Principal" className='h-20' />
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
                        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen) && setIsNavHovered(true)} className={`${isNavHovered ? 'text-gray-700' : 'text-white'}`}>
                            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                        </button>
                    </li>
                    <li className="hidden md:flex justify-center items-center space-x-2 h-full">
                        <ul className="flex justify-center items-center h-full">
                            {menu2.map((item, index) => (
                                <li
                                    key={index}
                                    className="text-center transition-colors duration-300 h-full flex items-center justify-center hover:cursor-pointer hover:text-white hover:bg-gray-500 w-auto px-8 text-sm"
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
                                        <p className={`hover:text-white md:text-xs h-full lg:text-sm transition-transform duration-300 transform hover:cursor-pointer hover:translate-y-[-3px] ${isNavHovered ? isActiveHoverNav === item.label ? 'text-white' : 'text-gray-700' : 'text-white'}`}>
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





// import { Link, useLocation } from 'react-router-dom';
// import { TfiWorld } from 'react-icons/tfi';
// import { FaAngleRight, FaBars, FaTimes } from 'react-icons/fa';
// import { useEffect, useState } from "react";

// import logoPrincipal from "../../assets/imagenes/logoPrincipal.png"; 
// import logoPrincipal_1 from "../../assets/imagenes/LogoPrincipal_1.png"; 

// const HeaderNav = () => {
//     const [isNavHovered, setIsNavHovered] = useState(false);
//     const [hoveredMenuItem, setHoveredMenuItem] = useState(null);
//     const [isActiveHoverNav, setIsActiveHoverNav] = useState(false);
//     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//     const [isActiveSubMenuMobile, setIsActiveSubMenuMobile] = useState(null);

//     const [isMenuOpen,setIsMenuOpen] = useState(false);

//     const location = useLocation();

//     const handleLinkClick = () => {
//         window.scrollTo({ top: 0, behavior: 'smooth' });
//         setIsMobileMenuOpen(false);
//         setHoveredMenuItem(null);
//     };

//     useEffect(() => {
//         const handleScroll = () => {
//             if (location.pathname === '/datenschutzrichtlinie' || location.pathname === '/benutzerrechte') {
//                 setIsNavHovered(true);
//             }else{
//                 if (isActiveHoverNav) {
//                     setIsNavHovered(true);
//                 } else {
//                     if (!isMobileMenuOpen) {
//                         setIsNavHovered(window.scrollY > 0);
//                     }
//                 }
//             }
            
//         };

//         window.addEventListener("scroll", handleScroll);

//         return () => {
//             window.removeEventListener("scroll", handleScroll);
//         };
//     }, [isActiveHoverNav, isMobileMenuOpen,location.pathname]);

//     // useEffect(() => {
//     //     if (location.pathname === '/datenschutzrichtlinie') {
//     //         setIsNavHovered(true);
//     //     }
//     // }, []);

//     const menu2 = [
//         { id:0, path: "/unternehmen/#", label: "Unternehmen", subTema: "Wir wählen die Fachleute aus, die Ihr Unternehmen braucht und fördern neue, der heutigen Zeit angepasste Führungsstile.", subItems: [
//             { path: "/unternehmen/personalauswahl-und-rekrutierung", label: "Personalauswahl und Rekrutierung" },
//             { path: "/unternehmen/personalbewertungen", label: "Personalbewertungen" },
//             { path: "/unternehmen/international", label: "International" },
//             { path: "/unternehmen/funktionen", label: "Funktionen" },
//             { path: "/unternehmen/fachspezifische-suche", label: "Fachspezifische Suche" },
//             { path: "/unternehmen/inklusionsaudit", label: "Inklusionsaudit" },
//         ]},
//         { id:1, path: "/kandidaten/#", label: "Kandidaten", subTema: "Wir unterstützen Sie auf dem Weg zu Ihrer Karriere. Nutzen Sie unsere Stellenangebote, Karriereberatung und digitalen Ressourcen.", subItems: [
//             { path: "/kandidaten/registrieren-sie-ihren-lebenslauf", label: "Registrieren Sie Ihren Lebenslauf" },
//             { path: "/kandidaten/internationales-karrieremanagement", label: "Internationales Karrieremanagement" },
//         ]},
//         { id:2, path: "/wir/#", label: "Wir", subTema: "Erfahren Sie mehr über unser Unternehmen und unsere Werte.", subItems: [
//             { path: "/wir/wer-wir-sind", label: "Wer Wir Sind" },
//             { path: "/wir/unsere-philosophie", label: "Unsere Philosophie" },
//         ]},
//         { id:3, path: "/meine-dienstleistungen", label: "Meine Dienstleistungen", subTema: "Wir bieten Dienstleistungen für Ihre akademische, berufliche und persönliche Entwicklung, einschließlich Studium, Arbeit, Wohnen, Beförderung, Visa und Sprachen.", subItems: [
//             { path: "/meine-dienstleistungen/studium-ausbildung-praktikum", label: "Studium - Ausbildung - Praktikum" },
//             { path: "/meine-dienstleistungen/arbeit-steuern", label: "Arbeit - Steuern" },
//             { path: "/meine-dienstleistungen/wohnen-beförderung", label: "Wohnen - Beförderung" },
//             { path: "/meine-dienstleistungen/visum-sprache", label: "Visum - Sprache" },
//         ]},
//         { id:4, path: "/kontakt", label: "Kontakt" },
//     ];

//     const handleMenuItem = (item) => {
//         setHoveredMenuItem(item.path);
//         setIsActiveHoverNav(item.label);
//         setIsNavHovered(true);
//     };

//     const handleMenuLeaveItem = () => {
//         setHoveredMenuItem(null);
//         setIsActiveHoverNav(null);
//     };

//     const onMouseEnterNavHovered = () => {
//         setIsNavHovered(true);
//     };

//     const onMouseLeaveNavHovered = () => {
//         if (location.pathname === '/datenschutzrichtlinie' || location.pathname === '/benutzerrechte') {
//             setIsNavHovered(true);
//         }else{
//             if (!isMobileMenuOpen) {
//                 setIsNavHovered(window.scrollY > 0);
//             }
//         }
//     };

//     const handleClickMenuOpen=()=>{
//         setIsMobileMenuOpen(!isMobileMenuOpen);
//         setIsNavHovered(true);
//         // // if(isMobileMenuOpen === false){

//         // // }else{

//         // // }
//         // if(isMenuOpen === false){
//         //     setIsMenuOpen(!isMenuOpen);
//         //     setIsNavHovered(false);
//         // }else{
//         //     // setIsNavHovered(true);
//         // }
        
        
//     }

//     return (
//         <nav className="p-0 w-full z-50 fixed top-0">
//             <div 
//                 className={`h-32 w-full transition-colors duration-300 relative ${isNavHovered ? 'bg-white' : 'bg-transparent'}`}
//                 onMouseEnter={onMouseEnterNavHovered}
//                 onMouseLeave={onMouseLeaveNavHovered}
//             >
//                 <ul className="flex items-center justify-between h-full px-4 md:px-10">
//                     <li className="text-center py-4 flex">
//                         <Link to="/" onClick={handleLinkClick} className="flex items-center">
//                             {isNavHovered ? (
//                                 <>
//                                     <div className='flex flex-col items-center'>
//                                         <img src={logoPrincipal_1} alt="Logo Principal" className='h-20' />
//                                         <div className="flex flex-col items-center">
//                                             <h2 className={`font-roboto-thin font-medium text-xl transition-colors duration-300 ${isNavHovered ? 'text-gray-800' : 'text-white'}`}>
//                                                 SANDRA ROGGERO M.
//                                             </h2>
//                                             <span className={`font-bell text-sm -mt-1 transition-colors font-bold duration-300 ${isNavHovered ? 'text-violet-900' : 'text-white'}`}>
//                                                 BERATUNG
//                                             </span>
//                                         </div>
//                                     </div>
//                                 </>
//                             ) : (
//                                 <>
//                                     <div className='flex flex-col items-center'>
//                                         <img src={logoPrincipal} alt="Logo Principal" className='h-20' />
//                                         <div className="flex flex-col items-center">
//                                             <h2 className={`font-roboto-thin font-medium text-xl transition-colors duration-300 ${isNavHovered ? 'text-gray-800' : 'text-white'}`}>
//                                                 SANDRA ROGGERO M.
//                                             </h2>
//                                             <span className={`font-bell text-sm -mt-1 transition-colors font-bold duration-300 ${isNavHovered ? 'text-violet-900' : 'text-white'}`}>
//                                                 BERATUNG
//                                             </span>
//                                         </div>
//                                     </div>
//                                 </>
//                             )}
//                         </Link>
//                     </li>
//                     <li className="flex items-center">
//                         <button onClick={handleClickMenuOpen} className={`${isNavHovered ? 'text-gray-700' : 'text-white'}`}>
//                             {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
//                         </button>
//                     </li>

//                     <li className="hidden justify-center items-center space-x-2 h-full">
//                         <ul className="flex justify-center items-center space-x-8 h-full">
//                             {menu2.map((item, index) => (
//                                 <li
//                                     key={index}
//                                     className="text-center px-0 transition-colors duration-300 h-full flex items-center justify-center hover:cursor-pointer hover:text-gray-400 hover:bg-red-500"
//                                     onMouseEnter={() => handleMenuItem(item)}
//                                     onMouseLeave={handleMenuLeaveItem}
//                                 >
//                                     <Link
//                                         to={item.path}
//                                         onClick={(e) => {
//                                             if (item.subItems) {
//                                                 e.preventDefault();
//                                                 setHoveredMenuItem(item.path);
//                                             } else {
//                                                 handleLinkClick();
//                                             }
//                                         }}
//                                         className=""
//                                     >
//                                         <p className={`hover:text-gray-400 md:text-xs h-full lg:text-sm transition-transform duration-300 transform hover:cursor-pointer hover:translate-y-[-3px] ${isNavHovered ? isActiveHoverNav === item.label ? 'text-gray-400' : 'text-gray-700' : 'text-white'}`}>
//                                             {item.label}
//                                         </p>
//                                     </Link>
//                                     {item.subItems && hoveredMenuItem === item.path && (
//                                         <div
//                                             className="w-full hover:cursor-default absolute top-full left-0 py-6 px-20 text-gray-700 flex-col justify-start items-start bg-white shadow-lg mt-0 space-y-2 border-gray-300 border-t-2"
//                                             onMouseEnter={() => setIsActiveHoverNav(item.label)}
//                                             onMouseLeave={() => setIsActiveHoverNav(null)}
//                                         >
//                                             <h2 className="font-medium text-2xl text-start hover:cursor-text">{item.label}</h2>
//                                             <ul className='text-start flex flex-nowrap space-x-2'>
//                                                 {item?.subTema !== undefined &&
//                                                     <li className='w-1/4 hover:cursor-text'>
//                                                         <p>
//                                                             {item?.subTema}
//                                                         </p>
//                                                     </li>
//                                                 }
//                                                 <li className='w-1/4'>
//                                                     <ul className='space-y-2'>
//                                                         {item.subItems.slice(0, 3).map((subItem, subIndex) => (
//                                                             <li key={subIndex}>
//                                                                 <Link
//                                                                     to={subItem.path}
//                                                                     onClick={handleLinkClick}
//                                                                     className="px-4 text-gray-800 hover:bg-gray-100 text-sm flex items-center hover:cursor-pointer"
//                                                                 >
//                                                                     <FaAngleRight className='' />
//                                                                     {subItem.label}
//                                                                 </Link>
//                                                             </li>
//                                                         ))}
//                                                     </ul>
//                                                 </li>
//                                                 <li className='w-1/4'>
//                                                     <ul className='space-y-2'>
//                                                         {item.subItems.slice(3).map((subItem, subIndex) => (
//                                                             <li key={subIndex}>
//                                                                 <Link
//                                                                     to={subItem.path}
//                                                                     onClick={handleLinkClick}
//                                                                     className="px-4 text-gray-800 hover:bg-gray-100 text-sm flex items-center hover:cursor-pointer"
//                                                                 >
//                                                                     <FaAngleRight className='' />
//                                                                     {subItem.label}
//                                                                 </Link>
//                                                             </li>
//                                                         ))}
//                                                     </ul>
//                                                 </li>
//                                             </ul>
//                                         </div>
//                                     )}
//                                 </li>
//                             ))}
//                         </ul>
//                         <strong className={`transition-colors duration-300 ${isNavHovered ? 'text-gray-800' : 'text-white'}`}>|</strong>
//                         <TfiWorld className={`transition-colors duration-300 ${isNavHovered ? 'text-gray-800' : 'text-white'}`} />
//                     </li>
//                 </ul>
//                     {
//                         isMenuOpen && (
//                             <li className="bg-red-500 w-1/4 h-screen absolute top-0 left-0">
//                                 HOLA
//                             </li>
//                         )
//                     }
//             </div>
//             {isMobileMenuOpen && (
//                 <div className="md:hidden absolute top-28 left-0 w-full bg-white shadow-lg z-40 border-t-gray-300 border-t-border_1">
//                     <ul className="flex flex-col space-y-0 p-2">
//                         {menu2.map((item, index) => (
//                             <li key={index} className={`text-gray-800 hover:bg-bg_favorite_4 text-sm hover:text-white`}>
//                                 <Link
//                                     to={item.path}
//                                     onClick={(e) => {
//                                         setIsActiveSubMenuMobile(item.label);
//                                         if (item.subItems) {
//                                             e.preventDefault();
//                                             setHoveredMenuItem(item.path === hoveredMenuItem ? null : item.path);
//                                         } else {
//                                             handleLinkClick();
//                                         }
//                                     }}
//                                     className={`flex justify-between items-center hover:text-white h-full p-2 ${isActiveSubMenuMobile === item.label ? 'text-white bg-gray-800' : 'text-gray-800 '}`}
//                                 >
//                                     {item.label}
//                                     {item.subItems && <FaAngleRight className="ml-2" />}
//                                 </Link>
//                                 <hr className={`${isActiveSubMenuMobile === item.label ? 'text-white flex w-full' : 'hidden'}`} />
//                                 {item.subItems && hoveredMenuItem === item.path && (
//                                     <ul className={`p-2 bg-gray-800 ${isActiveSubMenuMobile === item.label ? 'text-white' : 'text-gray-700'}`}>
//                                         {item.subItems.map((subItem, subIndex) => (
//                                             <li key={subIndex}>
//                                                 <Link
//                                                     to={subItem.path}
//                                                     onClick={handleLinkClick}
//                                                     className="block py-2 px-1 hover:text-gray-800 hover:bg-white"
//                                                 >
//                                                     {subItem.label}
//                                                 </Link>
//                                             </li>
//                                         ))}
//                                     </ul>
//                                 )}
//                             </li>
//                         ))}
//                     </ul>
//                 </div>
//             )}
//         </nav>
//     );
// }

// export default HeaderNav;






// import { Link, useLocation } from 'react-router-dom';
// import { FaBars, FaTimes } from 'react-icons/fa';
// import { useEffect, useState } from "react";

// import logoPrincipal from "../../assets/imagenes/logoPrincipal.png"; 
// import logoPrincipal_1 from "../../assets/imagenes/LogoPrincipal_1.png"; 

// const HeaderNav = () => {
//     const [isNavHovered, setIsNavHovered] = useState(false);
//     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//     const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//     const location = useLocation();

//     const handleLinkClick = () => {
//         window.scrollTo({ top: 0, behavior: 'smooth' });
//         setIsMobileMenuOpen(false);
//         setIsSidebarOpen(false);
//     };

//     useEffect(() => {
//         const handleScroll = () => {
//             if (location.pathname === '/datenschutzrichtlinie' || location.pathname === '/benutzerrechte') {
//                 setIsNavHovered(true);
//             } else {
//                 if (!isMobileMenuOpen && !isSidebarOpen) {
//                     setIsNavHovered(window.scrollY > 0);
//                 }
//             }
//         };

//         window.addEventListener("scroll", handleScroll);

//         return () => {
//             window.removeEventListener("scroll", handleScroll);
//         };
//     }, [isMobileMenuOpen, isSidebarOpen, location.pathname]);

//     const menu2 = [
//         { path: "/unternehmen/#", label: "Unternehmen" },
//         { path: "/kandidaten/#", label: "Kandidaten" },
//         { path: "/wir/#", label: "Wir" },
//         { path: "/meine-dienstleistungen", label: "Meine Dienstleistungen" },
//         { path: "/kontakt", label: "Kontakt" },
//     ];

//     return (
//         <nav className="fixed top-0 w-full z-50">
//             <div className={`transition-colors duration-300 ${isNavHovered ? 'bg-white' : 'bg-transparent'}`}>
//                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                     <div className="flex items-center justify-between h-16">
//                         <div className="flex items-center">
//                             <Link to="/" onClick={handleLinkClick} className="flex items-center">
//                                 <img src={isNavHovered ? logoPrincipal_1 : logoPrincipal} alt="Logo Principal" className="h-10 w-auto" />
//                             </Link>
//                         </div>
//                         <div className="-mr-2 flex md:hidden">
//                             <button onClick={() => { setIsMobileMenuOpen(!isMobileMenuOpen); setIsNavHovered(true); }} className={`${isNavHovered ? 'text-gray-700' : 'text-white'}`}>
//                                 {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
//                             </button>
//                         </div>
//                         <div className="hidden md:flex md:items-center md:space-x-8">
//                             {menu2.map((item, index) => (
//                                 <Link
//                                     key={index}
//                                     to={item.path}
//                                     onClick={handleLinkClick}
//                                     className="text-gray-800 hover:text-gray-600 transition-colors duration-300"
//                                 >
//                                     {item.label}
//                                 </Link>
//                             ))}
//                             <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="text-gray-700 hover:text-gray-400 transition-colors duration-300">
//                                 {isSidebarOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             {isSidebarOpen && (
//                 <div className="fixed inset-0 z-40 flex">
//                     <div className="fixed inset-0 bg-gray-600 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
//                     <div className="relative flex-1 flex flex-col max-w-xs w-full bg-white transition-transform transform duration-300 ease-in-out">
//                         <div className="absolute top-0 right-0 -mr-12 pt-2">
//                             <button onClick={() => setIsSidebarOpen(false)} className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:bg-gray-600">
//                                 <FaTimes className="text-white" />
//                             </button>
//                         </div>
//                         <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
//                             <div className="flex-shrink-0 flex items-center px-4">
//                                 <Link to="/" onClick={handleLinkClick} className="flex items-center">
//                                     <img className="h-10 w-auto" src={logoPrincipal_1} alt="Logo" />
//                                 </Link>
//                             </div>
//                             <nav className="mt-5 px-2 space-y-1">
//                                 {menu2.map((item, index) => (
//                                     <Link
//                                         key={index}
//                                         to={item.path}
//                                         onClick={handleLinkClick}
//                                         className="group flex items-center px-2 py-2 text-base leading-6 font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900 rounded-md"
//                                     >
//                                         {item.label}
//                                     </Link>
//                                 ))}
//                             </nav>
//                         </div>
//                     </div>
//                     <div className="flex-shrink-0 w-14" aria-hidden="true"></div>
//                 </div>
//             )}
//             {isMobileMenuOpen && (
//                 <div className="md:hidden fixed inset-0 z-40">
//                     <div className="fixed inset-0 bg-gray-600 bg-opacity-75" aria-hidden="true"></div>
//                     <div className="absolute inset-0 z-50 flex flex-col bg-white p-4">
//                         <div className="flex items-center justify-between mb-4">
//                             <Link to="/" onClick={handleLinkClick} className="flex items-center">
//                                 <img src={logoPrincipal_1} alt="Logo Principal" className="h-10 w-auto" />
//                             </Link>
//                             <button onClick={() => setIsMobileMenuOpen(false)} className="text-gray-700">
//                                 <FaTimes size={24} />
//                             </button>
//                         </div>
//                         <nav className="flex flex-col space-y-4">
//                             {menu2.map((item, index) => (
//                                 <Link
//                                     key={index}
//                                     to={item.path}
//                                     onClick={handleLinkClick}
//                                     className="text-gray-700 hover:text-gray-900"
//                                 >
//                                     {item.label}
//                                 </Link>
//                             ))}
//                         </nav>
//                     </div>
//                 </div>
//             )}
//         </nav>
//     );
// };

// export default HeaderNav;
