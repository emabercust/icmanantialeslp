import React from "react";
import bannerImage from "../assets/images/banner.jpeg"; // Imagen del banner

import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa"; // Importar íconos
import "./../assets/styles/RedDeMujeres.css"; // Archivo CSS para los estilos
import Home_reddemujeres from "./Home_reddemujeres"; // Importa el componente Home

const RedDeMujeres = () => {
    return (
        <>
            <section className="banner-reddemujeres" >
                <div className="banner">

                    <div className="banner-content">

                        <h1>LIVE DE MUJERES 19:00 pm</h1>

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
                <Home_reddemujeres />
            </div>
        
        </>
    );

};

export default RedDeMujeres;


