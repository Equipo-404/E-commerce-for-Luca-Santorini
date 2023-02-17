import React from 'react';
import PantallaCarga from './PantallaCarga';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import 'animate.css';

function Loading(){
    return (
       
        <Route exact path="/PantallaCarga" component={PantallaCarga} />
     
    );
}


export default Loading;