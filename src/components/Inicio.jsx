import React from 'react';
import imagenInicio from './ImagenInicio.png';
import './inicio.css';

function Inicio() {
  return (
    <div>
      <img src={imagenInicio} id="foto1" />
      <div className="segundotexto">
        <h2>Novedades</h2>
      </div>
      <div className="fila">
        <img src="https://res.cloudinary.com/dzrqrtezc/image/upload/v1676158169/LSSW_x_DANNY_OCEAN_BABYLON_G_NEGRA_FRONTAL_cfbnyh.png" id="columna1" />
        <img src="https://res.cloudinary.com/dzrqrtezc/image/upload/v1676158169/LSSW_x_DANNY_OCEAN_BABYLON_G_NEGRA_FRONTAL_cfbnyh.png" id="columna2" />
        <img src="https://res.cloudinary.com/dzrqrtezc/image/upload/v1676158169/LSSW_x_DANNY_OCEAN_BABYLON_G_NEGRA_FRONTAL_cfbnyh.png" id="columna3" />
      </div>
      <button id="verMas">Ver mas</button>
    </div>
  );
}

export default Inicio;
