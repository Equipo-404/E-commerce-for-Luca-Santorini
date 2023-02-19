import './App.css';
import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Inicio from './components/Inicio';
import About404 from './components/acerca404/About404';
import Items from './components/playeras/PlayerasObjetos';
import Novedades from './components/playeras/novedades';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Inicio} />
        <Route exact path="/About404" component={About404} />
        <Route exact path="/Items" component={Items} />
        <Route exact path="/novedades" component={Novedades} />
      </Switch>
    </Router>
  );
}

export default App;


