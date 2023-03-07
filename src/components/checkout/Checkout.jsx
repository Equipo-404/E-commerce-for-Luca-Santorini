import './checkout.css';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';

export default class Checkout extends Component {
  render() {
    return (
        <> 
            <div className="parent-checkout">
                <div className="container-form">
                    <div className="data-form">
                        <table classNameName="checkout-table">
                            <thead>
                                <td colSpan={2}><h1>Datos de envío</h1></td>
                            </thead>
                            <tr>
                                <td> <input type="text" id="name" name="user_name" placeholder="Nombre(s)" required/> </td>
                                <td> <input type="text" id="last_name" name="user_last_name" placeholder="Apellidos" required/> </td>
                            </tr>
                            <tr>
                                <td colspan="2"> <input colspan="2" type="text" id="address" name="user_address" placeholder="Domicilio" required/> </td>
                            </tr>
                            <tr>
                                <td> <input type="number" id="zip" name="user_zip" placeholder="Código postal" required/> </td>
                                <td> <input type="text" id="location" name="user_location" placeholder="Municipio" required/> </td>
                            </tr>
                            <tr>
                                <td colspan="2"> <input type="text" id="state" name="user_state" placeholder="Estado" required/> </td>
                            </tr>
                            <tr>
                                <td colspan="2"> <input type="text" id="reference" name="user_reference" placeholder="Referencia (Opcional)" required/> </td>
                            </tr>
                            <tr>
                                <td colspan="2"> <input type="email" id="mail" name="user_mail" placeholder="Correo electrónico" required/> </td>
                            </tr>
                        </table>
                    </div>
                    <div className="summary-form">
                        <table className="resume-products">
                            <tr>
                                <th colspan="2" className="total-title">Resumen de compra</th>
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
                                <Link to="/GraciasCompra"><button className="continue-button">Terminar pedido</button></Link>
                                </td>
                            </tr>
                        </table>
                        <hr></hr>
                    </div>
                </div>
            </div>
        </>
    )
  }
}