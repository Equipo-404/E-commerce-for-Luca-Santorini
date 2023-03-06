import React from 'react'
import './Carrito.css';
import 'animate.css';
import { Link, Redirect } from 'react-router-dom';
import { useState, useEffect } from "react";
import {Toaster, Position} from '@blueprintjs/core';
import Cart from "./cart";
import { useHistory } from 'react-router-dom';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/cart" component={Cart} />
        </Switch>
      </div>
    );
  }

const AppToaster = Toaster.create({
    position: Position.TOP,
  })

export default function Traer() {
    const [data, setData] = useState(null);
    const [resumen, setResumen] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    let total=0;
    const [prods, setProds] = useState([])
    const history = useHistory();

{/*Inicialización de función para eliminar productos*/}
   
const deleteProduct = id => {
        fetch(`https://jsonplaceholder.typicode.com/posts/https://jsonplaceholder.typicode.com/posts/${id}`, {
          method: "DELETE",
        })
          .then(response => response.json())
          .then(() => {
            setProds(values => {
               {values.filter(item => item.id !== id);
              console.log('fetch eliminar');}
            })
            AppToaster.show({
              message: "Product deleted successfully",
              intent: "success",
              timeout: 3000,
            });
          // history.push("/cart");
          })
          .then(()=>{
          console.log("llamada inicio")
        });
          
          
          
          }

        
    


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
                   //console.log('prueba' + total)
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
                            
                {loading && <p>Loading...</p>}
                {!loading &&
            <div>
    <br/>
    <section>
    <h1 className="header-carrito">Tu bolsa</h1>
    </section>

{/* Tabla de lista de productos */}
    <table className="product-list" >
    <tbody>
        
            
        {data.map((element=>{
            
            return <>
                <tr>
                <td rowSpan="3" className='productrow'> <img src={element.productos.foto}
                className="shirt-picture" alt=''></img></td>
                <td colSpan="2" className="product-name">{element.productos.nombre}</td>
                </tr>   
                <tr>
                <td colSpan="2" className="text-description">{element.productos.descripcion} <br /> Talla: {element.productos.talla} <br /> Color: {element.productos.color} <br /> Cantidad: {element.cantidad} pza.</td>
                </tr>
                <tr>  
                <td className="price">${element.productos.precio}.00 mxn</td>
{/*Eliminar producto*/}
                <td className="delete-item" onClick={()=> deleteProduct()} >Eliminar</td>
                </tr>
            </>
           }))}     
                
    </tbody>
    </table> 

{/*Tabla resumen de lista de productos*/}

    <table className="resume-items">
        <tbody>
        <tr>
        <th colSpan="2" className="total-title">Total</th>
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
        <td colSpan="1" className="total-description">Suma total</td>
        <td colSpan="1" className="total-price">$ {resumen}.00 mxn</td>
        </tr>
        
        <tr>
        <td className="checkout" colSpan="2" >
        <Link to="/Checkout"><button className="button-carrito">Checkout</button></Link>
        </td>  
        </tr>
        </tbody>   
    </table>
                        
    </div>}
    
        </div>
    
    </>
    )

    
      
}



