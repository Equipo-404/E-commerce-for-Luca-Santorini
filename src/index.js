import React from 'react';
import ReactDOM from 'react-dom/client';
import ProductosAdmin from './components/productosAdmin/ProductosAdmin';
// import Contacto from './components/contacto/Contacto';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Contacto/> */}
    <ProductosAdmin />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
