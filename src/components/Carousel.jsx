import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./../assets/styles/Carousel.css"; // Archivo CSS para estilos personalizados

const slides = [
  { title: "Bautizos", image: "/assets/images/img1.jpeg", alt: "Imagen de bautizo" },
  { title: "Navidad", image: "/assets/images/img2.jpeg", alt: "Imagen de celebración navideña" },
  { title: "Santa cena", image: "/assets/images/img1.jpeg", alt: "Imagen de santa cena" },
  { title: "Santa cena", image: "/assets/images/img1.jpeg", alt: "Imagen de santa cena" },

];

const Carousel = () => {
  return (
    <div className="carousel-container">
      <h1>Eventos recientes</h1>
      <Swiper
        modules={[Navigation]} // Activa el módulo de navegación
        navigation // Habilita flechas de navegación
        spaceBetween={10}
        slidesPerView={1}

        breakpoints={{
          320: {
            slidesPerView: 1, // Muestra 1 slide en pantallas pequeñas
            spaceBetween: 10, // Espaciado reducido
          },
          768: {
            slidesPerView: 2, // Muestra 2 slides en tablets
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 3, // Muestra 3 slides en pantallas grandes
            spaceBetween: 20,
          },
        }}
      >



        {slides.map((slide, index) => (
           <SwiperSlide key={index}>
            <div className="slide-content">
              <h2>{slide.title}</h2>
              <div className="media-container">
                <img src={slide.image} alt={slide.alt} />
              </div>
            </div>
          </SwiperSlide>
        ))} 
      </Swiper>
    </div>
  );
};

export default Carousel;


