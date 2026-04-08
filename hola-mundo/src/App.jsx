//import React from 'react'
import "./App.css";  // Importa los estilos CSS

// Componente principal de la aplicación
const App = () => {
  return (
    // Contenedor general de toda la página
    <div className="contenedor">

      {/* NAVBAR: barra de navegación */}
    <nav className="navbar">
      <h2 className="app">SportWear</h2>

       {/* Menú de navegación */}
      <ul className="nav-links">
        <li>Inicio</li>
        <li>Productos</li>
        <li>Contacto</li>
      </ul>
    </nav>

    {/* contenido principal */}
    <main>
      {/* seccion principal: presentación principal */}
      {/* section: para dividir la página en partes organizadas. */}
      <section className="inicio">
        <h1>Rinde al máximo con nuestro estilo</h1>
        <p> Descubre ropa deportiva de alta calidad diseñada para brindarte
          comodidad, resistencia y estilo en cada entrenamiento.</p>
        <button>Ver coleccion</button> {/* Botón de acción */}
      </section>

       {/* seccion acerca de: información del proyecto */}
      <section className="acerca">
        <h2>Acerca de nosotros</h2>
        <p>Somos una marca dedicada a la ropa deportiva, enfocada en ofrecer
          prendas modernas, cómodas y funcionales para deportistas y personas
          activas. Trabajamos con materiales de alta calidad para mejorar tu rendimiento.</p>
      </section>

      {/* seccion quienes somos: descripcion del equipo */}
      <section className="quienes">
        <h2>¿Quienes somos?</h2>
        <p>Somos apasionados por el deporte y el bienestar. Nuestro objetivo es
          inspirarte a alcanzar tus metas con ropa que se adapte a tu ritmo de vida,
          combinando tecnología, diseño y confort.</p>
      </section>
    </main>

    {/* aside: información adicional */}
    {/* aside: para contenido secundario o extra */}
    <aside className="aside">
      <h3>Novedades</h3>
      <p>Próximamente lanzaremos nuevas colecciones de ropa deportiva,
        promociones exclusivas y accesorios para tu entrenamiento.</p>
    </aside>

    {/* footer: pie de página */}
    <footer className="footer">
      <p>2026 SportWear - contactanos</p>
    </footer>
    </div>

  );
}
// Exporta el componente para usarlo en la app
export default App;

