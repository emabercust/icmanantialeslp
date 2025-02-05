import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./../assets/styles/Header.css"; // Archivo CSS para los estilos
import logo from "./../assets/images/logo.jpeg"; // Importa la imagen del logo

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSubMenu = () => {
    setIsSubMenuOpen(!isSubMenuOpen);
  };

  return (
    <header className="header">
      {/* Logo */}
      <div className="logo">
        <img src={logo} alt="Manantiales logo" />
      </div>

      {/* Navegación */}
      <nav>
        {/* Icono de hamburguesa o X dependiendo del estado del menú */}
        <div className="menu-toggle" onClick={toggleMenu}>
          {isMenuOpen ? (
            <span>&#10005;</span> // X para cerrar
          ) : (
            <span>&#9776;</span> // Icono de hamburguesa
          )}
        </div>

        {/* Menú desplegable */}
        <div className={`menu ${isMenuOpen ? "show" : ""}`}>
          <Link to="/">Inicio</Link>
          <Link to="/about">Nosotros</Link>

          {/* Menú Iglesia con Submenú */}
          <div className="submenu-container"
            onMouseEnter={() => setIsSubMenuOpen(true)}
            onMouseLeave={() => setIsSubMenuOpen(false)}
          >
            <span
              className="submenu-toggle"
               onClick={() => toggleSubMenu()}
            >Iglesia</span>
            <div className={`submenu ${isSubMenuOpen ? "show" : ""}`}>
              <Link to="/red-de-mujeres">Red de Mujeres</Link>
              <Link to="/mlss-youth">MLSS Youth</Link>
              <Link to="/manantiales-kids">Manantiales Kids</Link>
            </div>
          </div>

          <Link to="/services">Servicios</Link>
          <Link to="/contact">Contacto</Link>
        </div>
      </nav>
    </header>



  );

};

export default Header;
