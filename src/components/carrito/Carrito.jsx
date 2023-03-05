import React from 'react'
import './Carrito.css';
import 'animate.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";

export default function Traer() {

    const [data, setData] = useState(null);
    const [resumen, setResumen] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    let htmlText = "";
    let totalFinal = 0;
    let htmlResumen = `<tr>
  <th colspan="2" class="total-title">Total</th> 
  </tr>`;

{/* Función fetch para iterar lo elementos de carrito*/}
    useEffect(() => {
        fetch(`https://mocki.io/v1/10cab395-70af-496c-862f-647b1e65a75e`)
            .then(response => response.json())
            .then((usefulData) => {
                console.log(usefulData);
                setLoading(false);

                usefulData.forEach(element => {
                    console.log(element);
                    htmlText += `<tr>
            <td rowspan="3"> <img src=${element.productos.foto}
                    class="shirt-picture" alt=''></img></td>
            <td colspan="2" class="product-name">${element.productos.nombre}</td>
            </tr>
            <tr>
            <td colspan="2" class="text-description">${element.productos.descripcion} </br>Talla: ${element.productos.talla}
            </br>Color: ${element.productos.color} </br>Cantidad: ${element.cantidad} pza.
            </td>
            </tr>
        
            <td class="price">$ ${element.productos.precio}.00 mxn</td>
        
            <td class="delete-item">Eliminar</td>`;
                    htmlResumen += `<tr>
            <td class="product-resume">${element.productos.nombre} (${element.cantidad}pza) </td>
            <td class="price-resume">$ ${element.pedidos.montoTotal}.00 mxn</td>
            </tr>`;
                    totalFinal += element.pedidos.montoTotal;

                });

                htmlResumen += `<tr>
            <td colspan="1" class="total-description">Suma total</td>
            <td colspan="1" class="total-price">$ ${totalFinal}.00 mxn</td>
            </tr> 
            <tr>
            <td class="checkout" colspan="2" >
            </td> 
            </tr>`;
                setData(htmlText);
                setResumen(htmlResumen);

            })
            .catch((e) => {
                console.error(`An error occurred: ${e}`)
            });
    }, []);

    return (
        <>
            <div className="Traer">
                <br />
                <br />
                <br />
                <br />
                {loading && <p>Loading...</p>}
                {!loading &&

                    <div><br />
                        <section>
                            <h1 className="header-carrito">Tu bolsa</h1>
                        </section>

                        {/* Tabla de lista de productos */}
                        <table className="product-list" dangerouslySetInnerHTML={{ __html: data }} />

                        {/*Tabla resumen de lista de productos*/}
                        <table className="resume-items" dangerouslySetInnerHTML={{ __html: resumen }} />
                    </div>}

                <div className="boton-container">
                    <Link to="/Checkout"><button className="button-carrito">Checkout</button></Link>
                </div>

            </div>
        </>
    )
}


