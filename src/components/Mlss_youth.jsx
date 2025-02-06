import React from "react";

import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa"; // Importar íconos
import "./../assets/styles/Mlss_youth.css"; // Archivo CSS para los estilos
import Home_mlss from "./Home_mlss"; // Importa el componente Home

const Mlss_youth = () => {
    return (
        <>
            <section className="banner-mlss" >
                <div className="banner">

                    <div className="banner-content">

                        <h1>PREVIA 17:30 pm</h1>
                        <h1>MLSS YOUTH 18:00 pm</h1>

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
                <Home_mlss />
            </div>
        
        </>
    );

};

export default Mlss_youth;


