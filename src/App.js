import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Banner from "./components/Banner";
import AboutSection from "./components/AboutSection";

import Footer from "./components/Footer";
import "./assets/styles/App.css";
import EventoProximo from "./components/Evento_proximo";
import MlssYouth from "./components/Mlss_youth";
import RedDeMujeres from "./components/RedDeMujeres";
import ManantialesKids from "./components/ManantialesKids";

function App() {   
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Banner />       } />
        <Route path="/about" element={<AboutSection />} />
        <Route path="/evento_proximo" element={<EventoProximo />} />
        <Route path="/mlss-youth" element={<MlssYouth />} />
        <Route path="/red-de-mujeres" element={<RedDeMujeres />} />
        <Route path="/manantiales-kids" element={<ManantialesKids />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
