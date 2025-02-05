import React from "react";
import Carousel from "./Carousel";
import AgendaSemanal from "./AgendaSemanal";
import AboutSection from "./AboutSection"
import "./../assets/styles/Home.css";
import Evento_proximo from "./Evento_proximo";

const Home = () => {
  return (
    <main>
      <AgendaSemanal />

      <Carousel />
      <AboutSection/>

    </main>
  );
};

export default Home;
