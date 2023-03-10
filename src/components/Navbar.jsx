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
        <Link to="./LogIn">
          <img src={IconoUsuario} id="IconoUsuario" alt="icono de usuario" />
        </Link>
        <Link to="/Carrito">
          <img src={iconoBolsaCompra} id="iconoBolsaCompra" alt="icono de bolsa de compras" />
        </Link>
      </div>
    </nav>
  );
}
function Navbar2() {
  const navbar2Ref = useRef(null);
  useEffect(() => {
    const botonAbrirNavbar2 = document.getElementById("botonAbrirNavbar2");
    const botonCerrarNavbar2 = document.getElementById("botonCerrarNavbar2");
    const navbar2 = document.getElementById("NavbarDesplegabeLateral");
    const imagenMenu = document.getElementById("iconoMenu");
    if (imagenMenu) {
      imagenMenu.style.visibility = "visible";
    }
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
    <nav id="NavbarDesplegabeLateral" ref={navbar2Ref}>
      <button id="botonCerrarNavbar2">
        <img src={iconoEliminar} id="iconoCerrar" alt="icono para cerrar el menú" />
      </button>
      <div id="navbar2-seccion1">
        <ul>
          <li>
            <Link to="/" onClick={() => {
              const imagenMenu = document.getElementById("iconoMenu");
              navbar2Ref.current.style.display = "none";
              imagenMenu.style.visibility = "visible";
              window.scrollTo({ top: 0, behavior: "smooth" })
            }}> Inicio</Link>
          </li>
          <li>
            <Link to="/Novedades" onClick={() => {
              const imagenMenu = document.getElementById("iconoMenu");
              navbar2Ref.current.style.display = "none";
              imagenMenu.style.visibility = "visible";
              window.scrollTo({ top: 0, behavior: "smooth" })
            }}>Novedades</Link>
          </li>
          <li>
            <Link to="/Items" onClick={() => {
              const imagenMenu = document.getElementById("iconoMenu");
              navbar2Ref.current.style.display = "none";
              imagenMenu.style.visibility = "visible";
              window.scrollTo({ top: 0, behavior: "smooth" })
            }}>Playeras</Link>
          </li>
          <li>
            <Link to="/Carrito" onClick={() => {
              const imagenMenu = document.getElementById("iconoMenu");
              navbar2Ref.current.style.display = "none";
              imagenMenu.style.visibility = "visible";
              window.scrollTo({ top: 0, behavior: "smooth" })
            }}>Mi bolsa</Link>
          </li>
        </ul>
      </div>
      <div id="navbar2-seccion2">
        <ul>
          <li>
            <Link to="/AboutLuc" onClick={() => {
              const imagenMenu = document.getElementById("iconoMenu");
              navbar2Ref.current.style.display = "none";
              imagenMenu.style.visibility = "visible";
              window.scrollTo({ top: 0, behavior: "smooth" })
            }}>Acerca de Luca santorini</Link>
          </li>
          <li>
            <Link to="/About404" onClick={() => {
              const imagenMenu = document.getElementById("iconoMenu");
              navbar2Ref.current.style.display = "none";
              imagenMenu.style.visibility = "visible";
              window.scrollTo({ top: 0, behavior: "smooth" })
            }}>Acerca de equipo 404</Link>
          </li>
          <li>
            <Link to="/Contacto" onClick={() => {
              const imagenMenu = document.getElementById("iconoMenu");
              navbar2Ref.current.style.display = "none";
              imagenMenu.style.visibility = "visible";
              window.scrollTo({ top: 0, behavior: "smooth" })
            }}>Contacto</Link>
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

