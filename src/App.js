import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Banner from "./components/Banner";
import AboutSection from "./components/AboutSection";

import Footer from "./components/Footer";
import "./assets/styles/App.css";
import Evento_proximo from "./components/Evento_proximo";
import Mlss_youth from "./components/Mlss_youth";
import RedDeMujeres from "./components/RedDeMujeres";
import ManantialesKids from "./components/ManantialesKids";

function App() {   
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Banner />       } />
        <Route path="/about" element={<AboutSection />} />
        <Route path="/evento_proximo" element={<Evento_proximo />} />
        <Route path="/mlss-youth" element={<Mlss_youth />} />
        <Route path="/red-de-mujeres" element={<RedDeMujeres />} />
        <Route path="/manantiales-kids" element={<ManantialesKids />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
