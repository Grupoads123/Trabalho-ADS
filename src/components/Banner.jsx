// Banner principal com chamada e botões de ação
import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => (
  <section className="banner" id="agendar">
    <h1>VENHA VIVER ESSA EXPERIÊNCIA</h1>
    <h2>Elevando sua auto estima</h2>
    <p>
      Nosso objetivo é transformar um simples corte em uma experiência que busca conforto e qualidade.
    </p>
    <div className="banner-buttons">
      <a href="https://calendly.com/jbbarbearia011" className="btn-agendar" target="_blank" rel="noopener noreferrer">Agendar Agora</a>
      <a
        href="https://api.whatsapp.com/send/?phone=11971258465&text&type=phone_number&app_absent=0"
        target="_blank"
        rel="noopener noreferrer"
        className="btn-whatsapp"
      >
        Fale Conosco
      </a>
    </div>
  </section>
);

export default Banner; 