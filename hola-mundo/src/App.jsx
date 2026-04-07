//import React from 'react'
import "./App.css";

const App = () => {
  return (
    <div className="contenedor">

    <nav className="navbar">
      <h2 className="logo">Mi App</h2>
      <ul className="nav-links">
        <li>Inicio</li>
        <li>Acerca de</li>
        <li>Contacto</li>
      </ul>
    </nav>

    <main>
      <section className="inicio">
        <h1>Bienvenido</h1>
        <p> Creamos soluciones digitales modernas combinando  diseño y programación
        para impulsar tus ideas al siguiente nivel.</p>
        <button>Explorar mas</button>
      </section>

      <section className="acerca">
        <h2>Acerca de nosotros</h2>
        <p>Somos un equipo apasionado por el desarrollo web, especializado en la
        creación de aplicaciones modernas utilizando tecnologías como React.
        Nuestro objetivo es ofrecer soluciones eficientes, escalables y con
        una excelente experiencia de usuario.</p>
      </section>

      <section className="quienes">
        <h2>¿Quienes somos?</h2>
        <p> Somos desarrolladores enfocados en la innovación digital, comprometidos
        con transformar ideas en productos tecnológicos funcionales. Nos
        caracterizamos por la creatividad, el trabajo en equipo y la mejora continua.</p>
      </section>
    </main>

    <aside className="aside">
      <h3>Informacion Extra</h3>
      <p>Próximamente estaremos publicando nuevos proyectos, artículos y recursos
      relacionados con el desarrollo web.</p>
    </aside>

    <footer className="footer">
      <p>2026 Mi App - Todos los derechos reservados</p>
    </footer>
    </div>

  );
}
export default App;

