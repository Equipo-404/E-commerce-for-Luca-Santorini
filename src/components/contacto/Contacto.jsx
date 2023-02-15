import './Contacto.css';
import React, { Component } from 'react';

export default class Contacto extends Component {
  render() {
    return(
      <>
        <div className="parent">
          <div className="logo">
              <img src="https://res.cloudinary.com/ds3wzgtfa/image/upload/v1676444869/LucaSanto_banner-02_b3eafl.png" alt=""></img>
          </div>
          <div className="container-form">
            <div className="image-form">
                <img src="https://res.cloudinary.com/ds3wzgtfa/image/upload/v1676444869/ChildhoodManifest-Contact-BG_tn2xpl.jpg" alt="" />
            </div>
          <div className="info-form">
            <form id='formulario'>
                <h1>Contáctanos</h1>
                <label for="name">Nombre:</label><br />
                <input type="text" id="user_name" name="user_name" required/><br />
                
                <label for="mail">Correo electrónico:</label><br />
                <input type="email" id="user_mail" name="user_mail" required/><br />
                
                <label for="phone">Número de teléfono:</label><br />
                <input type="number" id="user_phone" name="user_phone" max="9999999999"/><br />
                
                <label for="msg">Mensaje:</label><br />
                <textarea id="msg" name="user_message" required></textarea><br />
                
                <button type="submit" className="contactoButton" id="enviarContacto" onClick={alert ("Fuera de servicio")}>Enviar</button>
            </form>
          </div>
          </div>
        </div>
      </>
    )
  }
}