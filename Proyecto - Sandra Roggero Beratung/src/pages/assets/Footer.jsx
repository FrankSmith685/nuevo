import React from "react";

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                    <div>
                        <h2 className="text-lg font-semibold mb-4">Información</h2>
                        <ul className="text-gray-300">
                            <li className="mb-2"> <a href="#" className="hover:text-white">Aviso Legal</a> </li>
                            <li className="mb-2"> <a href="#" className="hover:text-white">Política de Cookies</a> </li>
                            <li className="mb-2"> <a href="#" className="hover:text-white">Política de Privacidad</a> </li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-lg font-semibold mb-4">Enlaces de interés</h2>
                        <ul className="text-gray-300">
                            <li className="mb-2"> <a href="#" className="hover:text-white">Selección de Directivos</a> </li>
                            <li className="mb-2"> <a href="#" className="hover:text-white">Consultoría de Recursos Humanos</a> </li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-lg font-semibold mb-4">Contacto</h2>
                        <p className="text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget leo eu lorem eleifend consequat.</p>
                    </div>

                </div>

                <hr className="my-8 border-gray-700" />

                <div className="text-center">
                    <p className="text-gray-500">&copy; 2024 Todos los derechos reservados</p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
