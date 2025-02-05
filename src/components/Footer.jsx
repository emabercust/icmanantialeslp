import React from "react";
import "./../assets/styles/Footer.css";
import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa"; // Importar íconos

const Footer = () => {
  return (
    <footer className="footer">
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
            <p className="footer-text"> &copy; {new Date().getFullYear()} Manantiales LP.</p>

    </footer>
  );
};

export default Footer;
