import './Contacto.css';
import React, { Component } from 'react';

export default class Contacto extends Component {
  render() {
    return(
      <>
        <div className="parent-contact">
          <div className="container-contact">
            <div className="img-form">
                <img src="https://res.cloudinary.com/ds3wzgtfa/image/upload/v1676444869/ChildhoodManifest-Contact-BG_tn2xpl.jpg" alt="" />
            </div>
            <div className="info-form">
              <form id='formulario' action="https://formsubmit.co/paveloswaldo.gallegos@gmail.com" method="POST">
                  <h1>Contáctanos</h1>
                  <label for="name">Nombre:</label><br />
                  <input type="text" id="user_name" name="user_name" required/><br />
                  
                  <label for="mail">Correo electrónico:</label><br />
                  <input type="email" id="user_mail" name="email" required/><br />
                  
                  <label for="phone">Número de teléfono:</label><br />
                  <input type="tel" id="user_phone" name="user_phone" pattern="[0-9]+" required/><br />
                  
                  <label for="msg">Mensaje:</label><br />
                  <textarea id="msg" name="user_message" required></textarea><br />

                  <div className='container-contactoButton'>
                    <button type="submit" className="contacto-button" id="enviarContacto" >Enviar</button>
                  </div>
              </form>
            </div>
          </div>
        </div>
      </>
    )
  }
}