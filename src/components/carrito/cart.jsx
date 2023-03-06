import React from 'react'
import './Carrito.css';
import 'animate.css';
import { Link, Redirect } from 'react-router-dom';
import { useState, useEffect } from "react";
import {Toaster, Position} from '@blueprintjs/core';
import Cart from "./cart";
import { useHistory } from 'react-router-dom';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

 const cart = () => {
  return (
    <> 
    {/* Tabla de lista de productos */} 
    <table className="product-list">
        <br /><br /><br /><br />
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

        
        </table>

  </>  
  )
}

export default cart;