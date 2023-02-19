import React, { useRef, useEffect } from 'react';
import './Navbar.css';
import iconoMenu from './iconoMenu.png';
import iconoLucaNegro from './iconoLucaNegro.png';
import iconoBuscar from './iconoBuscar.png';
import IconoUsuario from './IconoUsuario.png';
import iconoBolsaCompra from './iconoBolsaCompra.png';
import iconoEliminar from './iconoEliminar.png';
import { Link } from 'react-router-dom';



function Navbar() {
  const navbarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (navbarRef.current && window.scrollY > navbarRef.current.offsetHeight) {
        navbarRef.current.classList.add('faded');
      } else {
        navbarRef.current.classList.remove('faded');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);  
  return (
    <nav ref={navbarRef} className="NavbarPrincipal">
      <button id="botonAbrirNavbar2">
        <img src={iconoMenu} id="iconoMenu" alt="icono del menú" />
      </button>
      <div className="navbar-center">
        <Link to="/"><img src={iconoLucaNegro} id="iconoLucaNegro" alt="icono de Luca Santorini" /></Link>
        <h2 id="h2navbar">Luca Santorini</h2>
      </div>
      <div className="navbar-section">
        <div className="navbar-busqueda">
          <img src={iconoBuscar} id="iconoBuscar" alt="icono de búsqueda" />
          <input id="inputBusqueda" type="text" />
        </div>
        <Link to="/">
          <img src={IconoUsuario} id="IconoUsuario" alt="icono de usuario" />
        </Link>
        <Link to="/">
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
    const navbar2 = document.getElementById("NavbarDesplegabeLateral");

    botonAbrirNavbar2.addEventListener("click", function () {
      navbar2.style.display = "block";
      if
        (navbar2.style.display = "block") {
        imagenMenu.style.visibility = "hidden";
      }
    });
    botonCerrarNavbar2.addEventListener("click", function () {
      navbar2.style.display = "none";
      if (navbar2.style.display = "none") {
        imagenMenu.style.visibility = "visible";
      }
    });
  }, []);
  return (
    <nav id="NavbarDesplegabeLateral">
      <button id="botonCerrarNavbar2">
        <img src={iconoEliminar} id="iconoCerrar" alt="icono para cerrar el menú" />
      </button>
      <div id="navbar2-seccion1">
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/Novedades">Novedades</Link>
          </li>
          <li>
            <Link to="/Items">Productos</Link>
          </li>
          <li>
            <Link to="/">Mi bolsa</Link>
          </li>
        </ul>
      </div>
      <div id="navbar2-seccion2">
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

