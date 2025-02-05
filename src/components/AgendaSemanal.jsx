import React from "react";
import "./../assets/styles/AgendaSemanal.css";
// Importar íconos si los tienes o usa una librería como react-icons
import { FaBible,FaFemale, FaUserAlt   , FaUsers, FaChild } from "react-icons/fa";

const AgendaSemanal = () => {
  const eventos = [
    {
      dia: "MIÉR. 09H",
      titulo: "MORNING SEARCH",
      descripcion: "Devocional",
      icono: <FaBible />, // Reemplazar con el ícono adecuado
    },
    {
      dia: "MIÉR. 19H",
      titulo: "LIVE DE MUJERES",
      descripcion: "Reunión de mujeres",
      icono: <FaFemale />, // Reemplazar con el ícono adecuado

    },
    {
      dia: "SAB. 18H",
      titulo: "MLSS YOUTH",
      descripcion: "Reunión de jóvenes",
      icono: <FaUserAlt />, // Reemplazar con el ícono adecuado

    },
    {
      dia: "DOM. 11H",
      titulo: "REUNIÓN DE FAMILIA",
      descripcion: "Culto general",
      icono: <FaUsers    />, // Reemplazar con el ícono adecuado

    },
    {
      dia: "DOM. 11H",
      titulo: "RED DE NIÑOS",
      descripcion: "Reunión de niños",
      icono: <FaChild />, // Reemplazar con el ícono adecuado

    },
  ];

  return (
    <div className="agenda-semanal">
      {/* Título */}
      <h1 className="agenda-titulo">Agenda Semanal</h1>

      {/* Eventos */}
      <div className="eventos-container">
        {eventos.map((evento, index) => (
          <div className="evento-card" key={index}>
            <div className="evento-dia">{evento.dia}</div>
            <div className="evento-titulo">{evento.titulo}</div>
            <div className="evento-descripcion">{evento.descripcion}</div>
            <div className="evento-icono">{evento.icono}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AgendaSemanal;
