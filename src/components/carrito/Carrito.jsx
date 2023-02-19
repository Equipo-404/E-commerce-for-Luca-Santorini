import React from 'react'
import './Carrito.css';
import 'animate.css';

 const Carrito = () => {
  return (
    <>

{/*<section className="navbar">Navbar</section>*/}
<br />
<section>
<h1 className="header-carrito">Tu bolsa</h1>
</section>
    {/* Tabla de lista de productos */} 
    <table className="product-list">
        
        {/*item 1*/}
        <tr>
            <td rowspan="3"> <img src="https://res.cloudinary.com/dgp2sgznp/image/upload/v1675655114/Assets/monacofront_vqppe1.jpg"
                    className="shirt-picture" alt=''></img></td>
            <td colspan="2" className="product-name">MÓNACO LSSW X Danny Ocean</td>
        </tr>
        <tr>
            <td colspan="2" className="text-description">T-shirt color blanca, talla S,... ipsum dolor sit amet consectetur adipisicing elit. Amet,
                eveniet. Ullam, quidem amet.</td>
        </tr>
        <td className="price">$ 100.00 mxn</td>
        <td className="delete-item">Eliminar</td>

                {/*item 2*/}
                <tr>
            <td rowspan="3"> <img src="https://res.cloudinary.com/dgp2sgznp/image/upload/v1675655114/Assets/monacofront_vqppe1.jpg"
                    className="shirt-picture" alt=''></img></td>
            <td colspan="2" className="product-name">MÓNACO LSSW X Danny Ocean</td>
        </tr>
        <tr>
            <td colspan="2" className="text-description">T-shirt color blanca, talla S,... ipsum dolor sit amet consectetur adipisicing elit. Amet,
                eveniet. Ullam, quidem amet.</td>
        </tr>
        <td className="price">$ 100.00 mxn</td>
        <td className="delete-item">Eliminar</td>

          {/*item 3*/}
          <tr>
            <td rowspan="3"> <img src="https://res.cloudinary.com/dgp2sgznp/image/upload/v1675655114/Assets/monacofront_vqppe1.jpg"
                    className="shirt-picture" alt=''></img></td>
            <td colspan="2" className="product-name">MÓNACO LSSW X Danny Ocean</td>
        </tr>
        <tr>
            <td colspan="2" className="text-description">T-shirt color blanca, talla S,... ipsum dolor sit amet consectetur adipisicing elit. Amet,
                eveniet. Ullam, quidem amet.</td>
        </tr>
        <td className="price">$ 100.00 mxn</td>
        <td className="delete-item">Eliminar</td>
        </table>

        {/*Tabla resumen de lista de productos*/}
    
        <table className="resume-items">
        <tr>
            <th colspan="2" className="total-title">Total</th>
        </tr>
         {/*item 1*/}
        <tr>
            <td className="product-resume">MÓNACO LSSW X Danny Ocean</td>
            <td className="price-resume">$ 100.00 mxn</td>
        </tr>
         {/*item 2*/}
         <tr>
            <td className="product-resume">MÓNACO LSSW X Danny Ocean</td>
            <td className="price-resume">$ 100.00 mxn</td>
        </tr>
          {/*item 3*/}
          <tr>
            <td className="product-resume">MÓNACO LSSW X Danny Ocean</td>
            <td className="price-resume">$ 100.00 mxn</td>
        </tr>

        {/*Total tabla resumen de lista de productos*/}
        <tr>
            <td colspan="1" className="total-description">Suma total</td>
            <td colspan="1" className="total-price">$ 300.00 mxn</td>
        </tr>

        <tr>
            <td className="checkout" colspan="2" >
                <button className="button-carrito">Checkout</button>
            </td>
            
        </tr>
        </table>
    </>




   
  )
}

export default Carrito;