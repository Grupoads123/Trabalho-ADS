// Seção sobre a barbearia com lista de diferenciais e carrossel de fotos
import React from 'react';
import Carousel from './Carousel';

const About = () => (
  <section id="about" className="about">
    <div className="about-text">
      <h2>SOBRE A JB BARBER</h2>
      <div className="about-underline"></div>
      <p>
        Somos mais que uma barbearia, somos um espaço dedicado ao cuidado masculino. Com profissionais altamente qualificados e um ambiente acolhedor, oferecemos uma experiência única em cada visita.
      </p>
      <ul>
        <li>Profissionais Experientes</li>
        <li>Ambiente Climatizado</li>
        <li>Produtos de Alta Qualidade</li>
      </ul>
    </div>
    <Carousel />
  </section>
);

export default About; 