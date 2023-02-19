import './App.css';
import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Inicio from './components/Inicio';
import About404 from './components/acerca404/About404';
import LogIn from './components/login/LogIn';
import Items from './components/playeras/PlayerasObjetos';
import Novedades from './components/playeras/novedades';
import Footer from './components/Footer';
import Carrito from './components/carrito/Carrito'
import PantallaCarga from './components/pantallacarga/PantallaCarga';
import 'animate.css';
import Contacto from './components/contacto/Contacto';
import Checkout from './components/checkout/Checkout';
import AdminProductos from './components/adminproductos/AdminProductos';


function App() {
  const [loading, setLoading] = useState(true);
  const cambiarEstado=()=>{
   const timeout = setTimeout(()=>{
    console.log("Funcion delay");
    setLoading(false);
    },5000) 
    return () => {
      clearTimeout(timeout)
            
    }
  }

  if (loading){
    console.log("Llamada pantalla carga");
    cambiarEstado();
    return(
      <Router>
      <Switch>
        <Route exact path="/" component={PantallaCarga} />
      </Switch>
    </Router>
    )
  }else{
    console.log("Rutas Navbar")
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Inicio} />
        <Route exact path="/About404" component={About404} />
        <Route exact path="/LogIn" component={LogIn} />
        <Route exact path="/Items" component={Items} />
        <Route exact path="/novedades" component={Novedades} />
        <Route exact path="/Carrito" component={Carrito} />
        <Route exact path="/Checkout" component={Checkout} />
        <Route exact path="/Contacto" component={Contacto} />
        <Route exact path="/AdminProductos" component={AdminProductos} /> 
      </Switch>
      <Footer/>
    </Router>
    
  );
} 
}

export default App;


