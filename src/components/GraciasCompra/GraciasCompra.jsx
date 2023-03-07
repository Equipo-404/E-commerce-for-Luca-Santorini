import React from 'react';
import './GraciasCompra.css';


function GraciasCompra() {
  return (
    <div>  {/*Este es el codigo donde esta mis imagenes y los textos de la pagina Gracias por tu compra */}
      <div className="banner">
        <img id="lucasanto" src="https://res.cloudinary.com/dbyl6ppep/image/upload/v1677978360/fotos/Luca_Santo_banner-02_1_fexvwl.png" alt="img lucasanto" />
        <h1 className="thx">¡GRACIAS POR TU COMPRA!</h1>
        <p className="breve">En breve te contactaremos <br /> via correo electronico <br /> con los detalles <br /> de tu pedido.</p>
      </div>

      <div className="h2yimg">
        <h2 className='achedos'>Bienvenúe a la familia</h2>
      </div>
    </div>
  );
}

export default GraciasCompra;
