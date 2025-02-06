import React from "react";

import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa"; // Importar íconos
import "./../assets/styles/ManantialesKids.css"; // Archivo CSS para los estilos
import HomeMlss from "./Home_manantialeskids"; // Importa el componente Home

const ManantialesKids = () => {
    return (
        <>
            <section className="banner-kids" >
                <div className="banner">

                    <div className="banner-content">
                        <h1>MANANTIALES KIDS 11:00 am</h1>

                    </div>
                    <div className="social-icons">
                        {/* Ícono de WhatsApp */}
                        <a
                            href="https://wa.me/1234567890"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="icon whatsapp"
                        >
                            <FaWhatsapp />
                        </a>
                        {/* Ícono de Instagram */}
                        <a
                            href="https://instagram.com/tu_cuenta"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="icon instagram"
                        >
                            <FaInstagram />
                        </a>

                        {/* Ícono de facebook */}
                        <a
                            href="https://facebook.com/tu_cuenta"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="icon facebook"
                        >
                            <FaFacebook />
                        </a>

                    </div>

                </div>
            </section>

            {/* Home debajo del Banner */}
            <div className="home-section">
                <HomeMlss />
            </div>
        
        </>
    );

};

export default ManantialesKids;


