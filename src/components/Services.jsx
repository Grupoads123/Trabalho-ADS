// Cards de serviços com preços e descrições
import React from 'react';

const services = [
  {
    title: "Corte de Cabelo",
    desc: "Corte profissional personalizado de acordo com seu estilo.",
    price: "R$ 45,00"
  },
  {
    title: "Barba",
    desc: "Modelagem e acabamento perfeito para sua barba.",
    price: "R$ 40,00"
  },
  {
    title: "Corte e Barba",
    desc: "Combinação perfeita de corte e barba com preço especial.",
    price: "R$ 90,00"
  }
];

const Services = () => (
  <section id="services" className="services">
    <h2>NOSSOS SERVIÇOS</h2>
    <div className="services-list">
      {services.map((service, idx) => (
        <div className="service-card" key={idx}>
          <h3>{service.title}</h3>
          <div className="service-underline"></div>
          <p>{service.desc}</p>
          <span>{service.price}</span>
        </div>
      ))}
    </div>
  </section>
);

export default Services; 