import { Link } from 'react-router-dom';
import React from 'react';
import './Footer.css';
import instagramLogo from '../components/instagramLogo.png'; 
import whatsappLogo from '../components/whatsappLogo.png';
import iconoLucaBlanco from '../components/iconoLucaBlanco.png';

function Footer() {
    return (
        <>
 <footer id="footer">
      <div id="footer-section1">
        <ul>
          <li><a href="#">Acerca de Luca santorini</a></li>
          <li><Link to="/About404">Acerca de equipo 404</Link></li>
        </ul>
      </div>
      <div id="iconolucadiv">
        <a href="#">
          <img src={iconoLucaBlanco} id="iconoLucaBlanco" />
        </a>
      </div>
      <div id="footer-section3">
      <div className="arriba">
      <span id="TextoContactoFooter">Contacto</span>
      </div>
      <div className="abajo">
          <a href="https://www.instagram.com/_lucassantor/?hl=es-la" target="_blank">
            <img src={instagramLogo} id="instagramLogo" />
          </a>
          <a href="/">
            <img src={whatsappLogo} id="whatsappLogo" />
          </a>
        </div>
      </div>
    </footer>
</>);
}

export default Footer;