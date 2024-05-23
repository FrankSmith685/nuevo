import { useEffect, useState } from 'react';
import { FaHome } from 'react-icons/fa';
import { FaUser } from "react-icons/fa6";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { IoDocumentTextSharp } from "react-icons/io5";
import { BiSolidUserPin } from "react-icons/bi";
import { Link, useLocation } from 'react-router-dom';
import { TfiWorld } from 'react-icons/tfi';

const HeaderNav = () => {
    const location = useLocation();
    const currentPath = location.pathname;

    const logo1 = "Sandra Roggero Beratung";

    const menu1 = [
        // { path: "/", label: "Home", icon: <FaHome /> },
        { path: "/kandidaten", label: "KANDIDATEN"},
        { path: "/presseraum", label: "PRESSERAUM"},
        { path: "/wir", label: "WIR"},
        { path: "/blog", label: "BLOG"},
    ];  

    const menu2 = [
        // { path: "/", label: "Home", icon: <FaHome /> },
        { path: "/", label: "SELECCÍON Y HEADHUNTING"},
        { path: "/hr-business-partner", label: "HR BUSSINESS PARTNER"},
        { path: "/*", label: "BERATUNG UND PERSONALFLUKTUATION"},
        { path: "/partnerships", label: "PARTNERSHIPS"},
        { path: "/Kontakt", label: "KONTAKT"},
    ];


    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            setIsSticky(offset > 0);
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
        <nav className={`p-0 w-full  z-50 `}>
            <div className='bg-gray-700 h-14 w-full'> 
                <ul className="flex space-x-16 items-center justify-end h-full px-10">
                    {menu1.map((item, index) => (
                        <li key={index} className="text-center justify-center items-center ">
                            <Link 
                                to={item.path} 
                                onClick={handleLinkClick}
                                className={` text-white hover:text-gray-300 flex flex-col items-center relative ${currentPath === item.path ? 'after:bg-white after:block after:absolute after:content-[""] after:h-1 after:w-full after:left-0 after:bottom-0 after:rounded-t-md' : ''}`}
                            >
                                {item.icon && <span className="text-center">{item.icon}</span>}
                                <p className={`relative z-10 transition duration-300 ease-in-out transform ${currentPath === item.path ? 'translate-y-[-3px]' : 'hover:translate-y-[-3px]'} ${currentPath === item.path ? '' : 'hover:after:bg-white hover:after:block hover:after:absolute hover:after:content-[""] hover:after:h-1 hover:after:w-full hover:after:left-0 hover:after:bottom-0 hover:after:rounded-t-md'}`}>
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
            {/* isSticky ? 'bg-gray-900' : */}
            <div className={`${ 'bg-white'}`}> 
                <ul className="flex space-x-8 py-4 items-center justify-center bg-gray-300 border-b-2 border-gray-500">
                    <li className="flex flex-nowrap text-2xl items-center">
                        <h2 className="font-medium text-orange-500">{logo1}</h2>
                    </li>

                    {menu2.map((item, index) => (
                        <li key={index} className="text-center justify-center items-center ">
                            <Link 
                                to={item.path} 
                                onClick={handleLinkClick}
                                className={`text-black hover:text-gray-300 flex flex-col items-center relative ${currentPath === item.path ? 'after:bg-white after:block after:absolute after:content-[""] after:h-1 after:w-full after:left-0 after:bottom-0 after:rounded-t-md' : ''}`}
                            >
                                {item.icon && <span className="text-center">{item.icon}</span>}
                                <p className={`relative z-10 transition duration-300 ease-in-out transform ${currentPath === item.path ? 'translate-y-[-3px]' : 'hover:translate-y-[-3px]'} ${currentPath === item.path ? '' : 'hover:after:bg-white hover:after:block hover:after:absolute hover:after:content-[""] hover:after:h-1 hover:after:w-full hover:after:left-0 hover:after:bottom-0 hover:after:rounded-t-md'}`}>
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