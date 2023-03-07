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
        <img src="https://res.cloudinary.com/dzrqrtezc/image/upload/v1677640966/LSSW_x_DANY_OC%C3%89ANO_BABYLON_G_AZUL_REY_FRONTAL_foxdgx.png" id="Imagen1NovedadesInicio" />
        <img src="https://res.cloudinary.com/dzrqrtezc/image/upload/v1677553300/LAS_DEL_BELLAKEO_AZUL_FRONTAL_so3nr3.png" id="Imagen2NovedadesInicio" />
        <img src="https://res.cloudinary.com/dzrqrtezc/image/upload/v1677553304/HARRY_EN_GUANATOS_BLANCA_FRONTAL_hvt0jz.png" id="Imagen3NovedadesInicio" />
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
      Luca Santorini es un e-commerce que se enfoca en ofrecer playeras únicas e independientes con diseños originales y de artistas independientes. Su catálogo de playeras incluye una variedad de estilos y temáticas que reflejan el espíritu creativo de la marca. Desde diseños con ilustraciones enérgicas y colores vibrantes, hasta estampados más sutiles y minimalistas, las playeras de Luca Santorini tienen algo para todos los gustos y estilos.

Lo que hace que las playeras de Luca Santorini sean especiales es su enfoque en el arte independiente y la colaboración con artistas emergentes. Cada diseño es una obra de arte en sí mismo, y las playeras son una forma accesible de llevar la creatividad a la vida cotidiana. Además, al apoyar a artistas independientes, Luca Santorini contribuye a fomentar una cultura de consumo responsable y sostenible. En resumen, las playeras de Luca Santorini no solo son un complemento perfecto para cualquier guardarropa, sino también una forma de apoyar y celebrar la creatividad y el arte independiente.</h3>
        <Link to="/Items" ><button id="VerMasPaginaInicioPlayera">Ver más playeras</button> </Link>
      </div>
      </div>
      </div>
  );
}

export default Inicio;
