import React from 'react';
import Navbar from './Componentes/Navbar';
import SeccionPrincipal from './Componentes/SeccionPrincipal';
import Aside from './Componentes/Aside';
import Footer from './Componentes/Footer';
import './App.css';

const App = () => {
  return (
    <div className="app-container">
      <Navbar />
        <SeccionPrincipal /> {/*Inicio, Acerca y Quienes */}
        <Aside />
      <Footer />
    </div>
  );
}

export default App;

