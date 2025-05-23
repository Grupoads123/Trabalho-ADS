// Carrossel simples de imagens (troca manual)
import React, { useState } from 'react';
import foto1 from '../assets/hero-bg1.png';
import foto2 from '../assets/hero-bg2.png';
import foto3 from '../assets/hero-bg3.png';

const images = [foto1, foto2, foto3];

const Carousel = () => {
  const [index, setIndex] = useState(0);

  // Função para avançar ou voltar no carrossel
  const goTo = (i) => setIndex(i);

  return (
    <div className="carousel">
      <img src={images[index]} alt={`Foto ${index + 1}`} className="carousel-img" />
      <div className="carousel-dots">
        {images.map((_, i) => (
          <span
            key={i}
            className={`dot ${i === index ? 'active' : ''}`}
            onClick={() => goTo(i)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel; 