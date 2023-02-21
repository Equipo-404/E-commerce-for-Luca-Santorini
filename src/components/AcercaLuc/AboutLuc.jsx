import './AboutLuc.css';
import React, { Component } from "react";

export default class AboutLuc extends Component {
  render(){

  
  return (
    <>
    <div className='body-style'>
      <div className='div2'>
        <h1 className='myh1' >Acerca de...</h1>
      </div>
      <div className="wrapper2">
        <figure>
          <img
            className="img-fluid"
            src="https://res.cloudinary.com/dbyl6ppep/image/upload/v1676132871/fotos/Imagen_de_WhatsApp_2023-01-22_a_las_19.33.59_mbzmjv.jpg"/>
          
         
            <div className="col-sm-12 col-md-6 col-lg-4">
              <h3>Mas que un icono, homie</h3>
              <p>
                No es un identificador de marca, no nos convence del todo
                <br />
                el decirle "logo". Creemos que la clave para el éxito es
                <br />
                la libertad creativa, plantearse en la cabeza que sin
                <br />
                importar el cliente o la situacion, esto simboliza el corazón
              </p>
            </div>
          
        </figure>
      </div>
      <div className="wrapper">
        <img
          className="img-fluid"
          src="https://res.cloudinary.com/dbyl6ppep/image/upload/v1676132908/fotos/Imagen_de_WhatsApp_2023-01-22_a_las_19.33.58_oldr10.jpg"
        />
        <div className="col-lg-4 col-md-6 col-sm-12 float-right">
          <h4>From Artist, to Artist.</h4>
          <p>
            Tienes el poder de decidir trabajar con la libertad
            <br />
            y dejar que ese artista salga a relucir a un chingón
            <br />
            que no se quiebra la cabeza por más pesado que sea el cliente.
            <br />
          </p>
        </div>
      </div>
      <div className="wrapper3">
        <img
          className="img-fluid"
          src="https://res.cloudinary.com/dbyl6ppep/image/upload/v1676132899/fotos/podriairestoenQuienesSomos_ozg2x2.jpg"
        />
        <div className="col-md-6 col-sm-12 col-lg-4">
          <h5>Luca's Mindset</h5>
          <p>
            Luca Santorini es valorar que la confianza impulsa en gran medida
            <br />
            el arte, te lo redactamos esto una tarde de febrero de este año
            <br />
            cerca de la media noche con un rico incienso de lavanda sobre unas slide;
            <br />
            Bienvenúe a tu nueva casa de diseño.
          </p>
        </div>
      </div>
      </div>
      </>
      );
     }
    }
 
    
     