// Rodapé com informações de contato, redes sociais e direitos autorais
import React from 'react';
import logo from '../assets/JB_Barber_Logo.png';

const Footer = () => (
  <footer className="footer">
    <div className="footer-main">
      <div className="footer-logo">
        <img src={logo} alt="Logo JB Barber" />
        <p>Transformando seu visual com excelência e profissionalismo.</p>
        <em>Elevando sua auto estima</em>
      </div>
      <div className="footer-contact">
        <h3>Contato</h3>
        <p>📞 11 97125-8465</p>
        <p>✉️ contato@jbbarber.com</p>
        <p>📍 Av. do Oratório, 4449 - Vila Nova Pauliceia, São Paulo - SP, 03221-200</p>
        <a
          href="https://api.whatsapp.com/send/?phone=11971258465&text&type=phone_number&app_absent=0"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-whatsapp"
        >
          Fale conosco pelo WhatsApp
        </a>
      </div>
      <div className="footer-social">
        <h3>Redes Sociais</h3>
        <a href="https://www.instagram.com/jb.barber0/" target="_blank" rel="noopener noreferrer">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/instagram/instagram-original.svg" alt="Instagram" className="icon-social" />
        </a>
        <a href="https://api.whatsapp.com/send/?phone=11971258465&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/whatsapp/whatsapp-original.svg" alt="WhatsApp" className="icon-social" />
        </a>
      </div>
    </div>
    <div className="footer-copy">
      <p>© 2024 JB Barber. Todos os direitos reservados.</p>
    </div>
  </footer>
);

export default Footer; 