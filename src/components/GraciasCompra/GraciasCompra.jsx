import React from 'react';
import './GraciasCompra.css';
import { Link } from 'react-router-dom';



function GraciasCompra() {
  return (
    <div>  {/*Este es el codigo donde esta mis imagenes y los textos de la pagina Gracias por tu compra */}
      <div className="banner">
        <div className='LUCASANTOCENT'>
           <img id="lucasanto" src="https://res.cloudinary.com/dbyl6ppep/image/upload/v1677978360/fotos/Luca_Santo_banner-02_1_fexvwl.png" alt="img lucasanto" />
        </div>
       
        <h1 className="thx">¡GRACIAS POR TU COMPRA!</h1>
        <div className='contene-boton'>
        <Link to="/">
        <button className="Back">Inicio</button> 
        </Link>
       </div>
        <p className="breve">En breve te contactaremos <br /> via correo electronico <br /> con los detalles <br /> de tu pedido.</p>
      </div>
      
      

      <div className="h2yimg">
        <h2 className='achedos'>Bienvenúe a la familia</h2>
      </div>
    </div>
  );
}

export default GraciasCompra;
