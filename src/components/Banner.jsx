import React from "react";

import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa"; // Importar íconos

import "./../assets/styles/Banner.css"; // Archivo CSS para los estilos

import Home from "./Home"; // Importa el componente Home

const Banner = () => {
    return (
        <>
            <section className="banner-principal" >
                <div className="banner-content">
                    <h1>Bienvenido a Manantiales</h1>
                    <h3>La Plata</h3>  

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



            </section>

            {/* Home debajo del Banner */}
            <div className="home-section">
                <Home />
            </div>
        </>
    );

};

export default Banner;


