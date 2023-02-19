import './App.css';
import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Inicio from './components/Inicio';
import About404 from './components/acerca404/About404';
import Contacto from './components/contacto/Contacto';
import Checkout from './components/checkout/Checkout';
import AdminProductos from './components/adminproductos/AdminProductos';


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Inicio} />
        <Route exact path="/About404" component={About404} />
        <Route exact path="/Checkout" component={Checkout} />
        <Route exact path="/Contacto" component={Contacto} />
        <Route exact path="/AdminProductos" component={AdminProductos} /> 
      </Switch>
    </Router>
  );
}

export default App;


