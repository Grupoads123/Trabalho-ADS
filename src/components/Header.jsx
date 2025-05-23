// Componente do cabeçalho com logo e navegação
import React from 'react';
import { Link } from 'react-router-dom';
// Importe o logo da barbearia (coloque o arquivo JB_Barber_Logo.png em src/assets)
import logo from '../assets/JB_Barber_Logo.png';

const Header = () => (
  <header className="header">
    {/* Logo da barbearia */}
    <img src={logo} alt="Logo JB Barber" className="logo" />
    {/* Navegação */}
    <nav>
      <a href="#about">Sobre Nós</a>
      <a href="#services">Serviços</a>
      <a href="https://calendly.com/jbbarbearia011" className="btn-agendar" target="_blank" rel="noopener noreferrer">Agendar</a>
    </nav>
  </header>
);

export default Header; 