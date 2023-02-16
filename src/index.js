import React from 'react';
import ReactDOM from 'react-dom/client';
import PlayerasObjetos from './components/playeras/PlayerasObjetos';
import './index.css';
//import Playeras from './components/playeras/Playeras';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <PlayerasObjetos/>
    

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
