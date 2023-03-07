import './Error404.css';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Contacto extends Component {
  render() {
    return(
      <>
        <div className="parent-error">
            {/* <h2>Página no encontrada</h2> */}
          <div className="container-error">
            <div className="image-form">
                {/* <img src="https://res.cloudinary.com/ds3wzgtfa/image/upload/v1677705843/error404-img_w4ganr.png" alt="Mensaje de error 404" /> */}
                <img src="https://res.cloudinary.com/ds3wzgtfa/image/upload/v1677805184/404-msg-error_yomt04.png" alt="Mensaje de error 404" />
            </div>
          </div>
            <Link to="/"><button className="regreso-button">Volver al inicio</button></Link>
        </div>
      </>
    )
  }
}