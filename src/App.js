import './App.css';
import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Inicio from './components/Inicio';
import About404 from './components/acerca404/About404';
import Carrito from './components/carrito/Carrito'
import Loading from './components/pantallacarga/Loading';
import PantallaCarga from './components/pantallacarga/PantallaCarga';
import 'animate.css';



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
<Loading></Loading>
cambiarEstado();
}else{
    console.log("Rutas Navbar")
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Inicio} />
        <Route exact path="/About404" component={About404} />
        <Route exact path="/Carrito" component={Carrito} />
        <Route exact path="/PantallaCarga" component={PantallaCarga} />
        
      </Switch>
    </Router>
    
  );
} 
}

export default App;


