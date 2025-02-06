import React from "react";
import Carousel from "./Carousel";
import AgendaSemanal from "./AgendaSemanal";
import AboutSection from "./AboutSection"
import "./../assets/styles/Home.css";

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
