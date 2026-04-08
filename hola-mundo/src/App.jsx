//import React from 'react'
import "./App.css";  // Importa los estilos CSS

// Componente principal de la aplicación
const App = () => {
  return (
    // Contenedor general de toda la página
    <div className="contenedor">

      {/* NAVBAR: barra de navegación */}
    <nav className="navbar">
      <h2 className="titulo">Mi App</h2>

       {/* Menú de navegación */}
      <ul className="nav-links">
        <li>Inicio</li>
        <li>Acerca de</li>
        <li>Contacto</li>
      </ul>
    </nav>

    {/* contenido principal */}
    <main>
      {/* seccion principal: presentación principal */}
      {/* section: para dividir la página en partes organizadas. */}
      <section className="inicio">
        <h1>Bienvenido</h1>
        <p> Creamos soluciones digitales modernas combinando  diseño y programación
        para impulsar tus ideas al siguiente nivel.</p>
        <button>Explorar mas</button> {/* Botón de acción */}
      </section>

       {/* seccion acerca de: información del proyecto */}
      <section className="acerca">
        <h2>Acerca de nosotros</h2>
        <p>Somos un equipo apasionado por el desarrollo web, especializado en la
        creación de aplicaciones modernas utilizando tecnologías como React.
        Nuestro objetivo es ofrecer soluciones eficientes, escalables y con
        una excelente experiencia de usuario.</p>
      </section>

      {/* seccion quienes somos: descripcion del equipo */}
      <section className="quienes">
        <h2>¿Quienes somos?</h2>
        <p> Somos desarrolladores enfocados en la innovación digital, comprometidos
        con transformar ideas en productos tecnológicos funcionales. Nos
        caracterizamos por la creatividad, el trabajo en equipo y la mejora continua.</p>
      </section>
    </main>

    {/* aside: información adicional */}
    {/* aside: para contenido secundario o extra */}
    <aside className="aside">
      <h3>Informacion Extra</h3>
      <p>Próximamente estaremos publicando nuevos proyectos, artículos y recursos
      relacionados con el desarrollo web.</p>
    </aside>

    {/* footer: pie de página */}
    <footer className="footer">
      <p>2026 Mi App - Todos los derechos reservados</p>
    </footer>
    </div>

  );
}
// Exporta el componente para usarlo en la app
export default App;

