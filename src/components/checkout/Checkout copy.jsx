import './Checkout.css';
import React, { Component } from 'react';

export default class Checkout extends Component {
  render() {
    return (
        <> 
            <div className="parent">
                <div className="container-form">
                    <div className="header-form">
                        <div class="col-6"><h1>Checkout</h1></div>
                        <div class="col-6"><h3>Resumen de compra</h3></div>
                    </div>
                    <div className="data-form">
                        <form>
                            <table classNameName="checkout-table">
                                <tr>
                                    <td> <input type="text" id="name" name="user_name" placeholder="Nombre(s)"/> </td>
                                    <td> <input type="text" id="last_name" name="user_last_name" placeholder="Apellidos"/> </td>
                                </tr>
                                <tr>
                                    <td colspan="2"> <input colspan="2" type="text" id="address" name="user_address" placeholder="Domicilio"/> </td>
                                </tr>
                                <tr>
                                    <td> <input type="number" id="zip" name="user_zip" placeholder="Código postal"/> </td>
                                    <td> <input type="text" id="location" name="user_location" placeholder="Municipio" /> </td>
                                </tr>
                                <tr>
                                    <td colspan="2"> <input type="text" id="state" name="user_state" placeholder="Estado"/> </td>
                                </tr>
                                <tr>
                                    <td colspan="2"> <input type="text" id="reference" name="user_reference" placeholder="Referencia (Opcional)"/> </td>
                                </tr>
                                <tr>
                                    <td colspan="2"> <input type="email" id="mail" name="user_mail" placeholder="Correo electrónico"/> </td>
                                </tr>
                            </table>
                            <button className="continue-button">Continuar</button>
                        </form>
                    </div>
                    <div className="summary-form">
                        <form action="">
                            <img src="" alt=""></img><br></br>
                            <img src="" alt=""></img>
                            <hr></hr>
                            <label className="total">Total:</label><br />
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
  }
}