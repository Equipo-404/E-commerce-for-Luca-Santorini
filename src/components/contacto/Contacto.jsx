import './Contacto.css';
import React, { Component } from 'react';

export default class Contacto extends Component {
  render() {
    return (
       <> 
        <div class="parent">
          <div class="logo">
              {/* <img src="/img/LucaSanto banner-02.png" alt=""> */}
          </div>
          <div class="container-form">
              <div class="image-form">
                  <img src="img/ChildhoodManifest-Contact-BG.jpg" alt="" />
              </div>
              <div class="info-form">
                  <form>
                      <h1>Contáctanos</h1>
                      <label for="name">Nombre:</label><br />
                      <input type="text" id="name" name="user_name" /><br />
                      
                      <label for="mail">Correo electrónico:</label><br />
                      <input type="email" id="mail" name="user_mail" /><br />
                      
                      <label for="phone">Número de teléfono:</label><br />
                      <input type="number" id="phone" name="user_phone" /><br />
                      
                      <label for="msg">Mensaje:</label><br />
                      <textarea id="msg" name="user_message"></textarea><br />
                      
                      <button class="enviar">Enviar</button>
                  </form>
              </div>
          </div>
        </div>
      </>
    )
  }
}