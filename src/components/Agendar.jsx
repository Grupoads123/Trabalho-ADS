// Tela de redirecionamento para o agendamento (Calendly)
import React, { useEffect } from 'react';

const calendlyUrl = 'https://calendly.com/jbbarbearia011';

const Agendar = () => {
  useEffect(() => {
    // Redireciona após 2 segundos
    const timer = setTimeout(() => {
      window.location.href = calendlyUrl;
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      background: '#111',
      color: '#fff',
      textAlign: 'center'
    }}>
      <h1 style={{ fontSize: '2.2rem', marginBottom: '1rem' }}>
        Redirecionando para o agendamento...
      </h1>
      <p>
        Se você não for redirecionado automaticamente,{' '}
        <a href={calendlyUrl} style={{ color: '#ff416c' }}>clique aqui</a> para acessar o Calendly.
      </p>
    </div>
  );
};

export default Agendar; 