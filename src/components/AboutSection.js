import React from "react";
import "./../assets/styles/AboutSection.css";
import logo from "./../assets/images/evento.jpeg"; // Importa la imagen del logo
const CampusInfo = () => {
  return (

    <div>
      <div className="campus-info">
        <h1>Evento Próximo</h1>
        <img src={logo} alt="Manantiales logo" />

        <a href="/evento_proximo" className="icon"  rel="noopener noreferrer">
          <p>         
           Campamento. Anotate aquí
          </p>
        </a>
      </div>


      <div className="campus-info">
        <h1>Información de la sede</h1>
        <ul className="info-list">
          <li>
            <a href="/ubicacion" className="icon" target="_blank" rel="noopener noreferrer">
              <i className="fas fa-map-marker-alt"></i>
            </a>
            <p>
              Calle 6 e/ 67 y 68 N°1730, La Plata, Argentina
            </p>
          </li>
          <li>
            <a href="/vidakids" className="icon" target="_blank" rel="noopener noreferrer">
              <i className="fas fa-baby"></i>
            </a>
            <p>
              En Manantiales Kids tenemos atención para niños de 3 a 12 años en la que participan en reuniones con mensajes
              prácticos y divertidos. Conoce más Aquí.
            </p>
          </li>
          <li>
            <a href="/horario" className="icon" target="_blank" rel="noopener noreferrer">
              <i className="fas fa-clock"></i>
            </a>
            <p>
              La experiencia Manantiales tiene una duración aproximada de 2 horas.
            </p>
          </li>
          <li>
            <a href="/oracion" className="icon" target="_blank" rel="noopener noreferrer">
              <i className="fas fa-pray"></i>
            </a>
            <p>Miércoles de devocional 8:00am en línea</p>
          </li>
          <li>
            <a href="/contacto" className="icon" target="_blank" rel="noopener noreferrer">
              <i className="fas fa-envelope"></i>
            </a>
            <p>Cualquier duda escríbenos a: manantialeslaplataicm@gmail.com</p>
          </li>
          <li>
            <a href="/whatsapp" className="icon" target="_blank" rel="noopener noreferrer">
              <i className="fas fa-whatsapp"></i>
            </a>
            <p>
              También puedes enviarnos un mensaje por WhatsApp: 123456789
            </p>
          </li>
        </ul>
      </div>


    </div>
  );
};

export default CampusInfo;
