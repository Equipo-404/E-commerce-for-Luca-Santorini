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
    let total=0;

{/* Función fetch para iterar lo elementos de carrito*/}
    useEffect(() => {
        fetch(`https://mocki.io/v1/3f1a13b3-bb78-4f3b-baad-59c80aee4340`)
            .then(response => response.json())
            .then((usefulData) => {
                console.log(usefulData);
                setLoading(false);
                setData(usefulData);
                
                usefulData.forEach(element => {
                    total+=element.subtotal;
                    console.log('prueba' + total)
                });
                setResumen(total);

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
            <div>
    <br/>
    <section>
    <h1 className="header-carrito">Tu bolsa</h1>
    </section>

{/* Tabla de lista de productos */}
    <table className="product-list" >
        {data.map((element)=>{
            return <>
                <tr>
                <td rowspan="3"> <img src={element.productos.foto}
                className="shirt-picture" alt=''></img></td>
                <td colspan="2" className="product-name">{element.productos.nombre}</td>
                </tr>
                    
                <tr>
                <td colspan="2" className="text-description">{element.productos.descripcion} <br /> Talla: {element.productos.talla} <br /> Color: {element.productos.color} <br /> Cantidad: {element.cantidad} pza.</td>
                </tr>
                    
                <td className="price">${element.productos.precio}.00 mxn</td>
                <td className="delete-item">Eliminar</td>
            </>
                })}
    </table> 

{/*Tabla resumen de lista de productos*/}

    <table className="resume-items">
        <tr>
        <th colspan="2" className="total-title">Total</th>
        </tr>
{/*item 1*/}

    {data.map((element)=>{
        return <>
            <tr>
            <td className="product-resume">{element.productos.nombre} ({element.cantidad}pza)</td>
            <td className="price-resume">${element.subtotal}.00 mxn</td>
            </tr>
        </>
      })}

{/*Total tabla resumen de lista de productos*/}
       <tr>
        <td colspan="1" className="total-description">Suma total</td>
        <td colspan="1" className="total-price">$ {resumen}.00 mxn</td>
        </tr>
        
        <tr>
        <td className="checkout" colspan="2" >
        <Link to="/Checkout"><button className="button-carrito">Checkout</button></Link>
        </td>  
        </tr>   
    </table>
                        
    </div>}
    
        </div>
    
    </>
    )

    
      
}


