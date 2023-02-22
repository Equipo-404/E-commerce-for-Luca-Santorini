import React from 'react';
import { Link } from 'react-router-dom';
import imagenInicio from './ImagenInicio.png';
import imagenInicioLucaSanto from './ImagenInicioLucaSanto.png';
import './inicio.css';

function Inicio() {
  return (
    <div className='SgundaSeccionInicio'>
      <img src={imagenInicio} id="ImagenPaginaInicio" />
        <h2 id="h2Novedades">Novedades</h2>
      <div className="ImagenesSegundaSeccionInicio">
        <img src="https://res.cloudinary.com/dzrqrtezc/image/upload/v1676693597/LIBRETA_I_AM_AN_ARTIST_NOT_A_DOCTOR_BLANCA_yrljlh.png" id="Imagen1NovedadesInicio" />
        <img src="https://res.cloudinary.com/dzrqrtezc/image/upload/v1676158114/LIBRETA_NOT_A_DOCTOR_BLANCA_jsbn0a.png" id="Imagen2NovedadesInicio" />
        <img src="https://res.cloudinary.com/dzrqrtezc/image/upload/v1676158169/LSSW_x_DANNY_OCEAN_BABYLON_G_NEGRA_FRONTAL_cfbnyh.png" id="Imagen3NovedadesInicio" />
      </div>
      <div>
      <Link to="/Novedades"><button id="VerMasPaginaInicio">Ver más novedades</button> </Link>
      </div>
      <img src={imagenInicioLucaSanto} id="ImagenInicioLucaSanto" />
      <h2 id="h2LucaSantoriniSeccion2">Luca Santorini</h2>
      <div id="SeccionTresPaginaInicio">
      <img src="https://res.cloudinary.com/dzrqrtezc/image/upload/v1676158169/LSSW_x_DANNY_OCEAN_BABYLON_G_NEGRA_FRONTAL_cfbnyh.png" id="ImagenTerceraSeccionInicio" />
      <div id="DescripcionPlayera">
      <h3 id="DescripcionPlayeraInicio">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus natus atque nam architecto, modi quasi odit quisquam earum aliquid cum voluptate rerum saepe exercitationem. Fugit beatae alias quam itaque veritatis!
        In voluptatem quo vitae laborum dolor modi voluptatum eum, ad deleniti ullam similique sequi magnam nisi sint tempore velit voluptas officia beatae quaerat incidunt, quas itaque. Officia reprehenderit quae aspernatur!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam aut tempore dolorem quam ducimus fugiat alias nulla iste nihil assumenda! Veritatis quibusdam earum porro, voluptatem qui blanditiis non repellendus explicabo!</h3>
        <Link to="/Items" ><button id="VerMasPaginaInicioPlayera">Ver más playeras</button> </Link>
      </div>
      </div>
      </div>
  );
}

export default Inicio;
