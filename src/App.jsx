// Componente principal que junta todas as seções do site
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Banner from './components/Banner';
import Services from './components/Services';
import About from './components/About';
import Footer from './components/Footer';
import Agendar from './components/Agendar';
import './index.css';

function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Services />
      <About />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agendar" element={<Agendar />} />
      </Routes>
    </Router>
  );
}

export default App; 