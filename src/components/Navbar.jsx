import React, { useEffect } from 'react';
import './Navbar.css';
import iconoMenu from './iconoMenu.png';
import iconoLucaNegro from './iconoLucaNegro.png';
import iconoBuscar from './iconoBuscar.png';
import IconoUsuario from './IconoUsuario.png';
import iconoBolsaCompra from './iconoBolsaCompra.png';
import iconoEliminar from './iconoEliminar.png';
import { Link } from 'react-router-dom';



function Navbar() {
  return (
    <nav className="navbar-bueno">
      <button id="botonAbrirNavbar2">
        <img src={iconoMenu}  id="iconoMenu" alt="icono del menú" />
      </button>
      <div className="navbar-center">
        <Link to="/"> <img src={iconoLucaNegro} id="iconoLucaNegro" alt="icono de Luca Santorini" /> </Link>
        <h2>Luca Santorini</h2>
      </div>
      <div className="navbar-section">
        <div className="navbar-busqueda">
          <img src={iconoBuscar} id="iconoBuscar" alt="icono de búsqueda" />
          <input type="text" />
        </div>
        <Link to="/">
          <img src={IconoUsuario}id="IconoUsuario" alt="icono de usuario" />
          </Link>
        <Link to="/Carrito">
          <img src={iconoBolsaCompra} id="iconoBolsaCompra" alt="icono de bolsa de compras" />
          </Link>
      </div>
    </nav>
  );
}
function Navbar2() {
  useEffect(() => {
    const botonAbrirNavbar2 = document.getElementById("botonAbrirNavbar2");
    const imagenMenu = document.getElementById("iconoMenu");
    const botonCerrarNavbar2 = document.getElementById("botonCerrarNavbar2");
    const navbar2 = document.getElementById("navbar2");
    console.log("Esto es una prueba")
  
    botonAbrirNavbar2.addEventListener("click", function() { 
      navbar2.style.display = "block";
      if 
      (navbar2.style.display = "block"){
        imagenMenu.style.display = "none";
      }
    });
    botonCerrarNavbar2.addEventListener("click", function() {
      navbar2.style.display = "none";
      if (navbar2.style.display = "none"){
        imagenMenu.style.display = "block";
      }
    });
  }, []);
  return (
    <nav id="navbar2">
      <button id="botonCerrarNavbar2">
        <img src={iconoEliminar} id="iconoCerrar" alt="icono para cerrar el menú" />
      </button>
      <div id="navar2-seccion1">
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/PantallaCarga">Novedades</Link>
          </li>
          <li>
            <Link to="/">Productos</Link>
          </li>
          <li>
            <Link to="/Carrito">Mi bolsa</Link>
          </li>
        </ul>
      </div>
      <div id="navar2-seccion2">
        <ul>
          <li>
            <Link to="/">Acerca de Luca santorini</Link>
          </li>
          <li>
            <Link to="/About404">Acerca de equipo 404</Link>
          </li>
          <li>
            <Link to="/">Contacto</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default function App() {
  return (
    <div>
      <Navbar />
      <Navbar2 />
    </div>
  );
}

