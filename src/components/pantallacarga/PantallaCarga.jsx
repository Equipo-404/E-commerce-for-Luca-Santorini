import React from 'react'
import './PantallaCarga.css';
import 'animate.css';

 const PantallaCarga = () => {
  return (
    <><main className="container" style={{textAlign:'center'}}>
        <section className="square-loading-screen">
          <img src="https://res.cloudinary.com/dgp2sgznp/image/upload/v1675639975/Assets/LOGO_RED_Mesa_de_trabajo_1_d3iigc.png" className="red-logo animate__animated animate__pulse animate__infinite"></img>
        </section>
      </main>
    </>
  )
}

export default PantallaCarga;