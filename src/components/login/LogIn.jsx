import React, { Component } from 'react'
import { Button, Container, Form, FormGroup, Input, Label, Row, Formulario} from 'reactstrap';
import './style.css';

import {validateLogin, validate, nameInvalid } from '../../login.js';
export default class LogIn extends Component { 
    render() {
    return (
        <>
        <html>
        
        <body className='booty'>
        
            

            <div clasName="section-phan">

                            <h6 className="change"><span>Iniciar Sesíon </span><span>Registrarte</span></h6>
                            <input className="checkbox" type="checkbox" id="reg-log" name="reg-log"/>
                            <label for="reg-log"></label>
                            <div className="card-3d-wrap mx-auto">
                                <div className="card-3d-wrapper">
                                    <div className="card-front">
                                        <div className="center-wrap">
                                            <div className="section text-center">
                                       
                                                    
                                                    <h1 className="titulitu">Iniciar Sesíon</h1>
                                               <div className="forms-group" >
                                                        <input type="email" name="email" className="forms-control" placeholder="Correo electrónico" id="logemail" ></input>
                                                    
                                                        <p className="warning" id=""></p>
                                                    </div>	
                                                    <br></br>
                                                    <div className="forms-group">
                                                        <input type="password" name="logmail" className="forms-control" placeholder="Contraseña" id="logpass" ></input>
                                                        <i className="input-icon uil uil-lock-alt"></i>
                                                        <p className="warning" id="passwordErr"></p>
                                                    </div>
                                                    <br></br>
                                                    <div>
                                                    <button onClick={validateLogin} className="loga" type="submit">Iniciar Sesíon</button>
                                                    </div>
                                                    <br></br>
                                                    <div>

                                                    <a className="parra" href="">¿Olvidaste tu contraseña?</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    
                                    <div className="card-back">
                                        <div className="center-wrap">
                                            <div className="section text-center">
                                                <h1 className="titulitu">Regístrate</h1>
                                                <div className="forms-group forms-group-incorrect" id="grupo-nombre">
                                                    
                                                    <input type="text" name="logname" className="forms-control" placeholder="Nombre Completo" id="regname"  ></input>
                                                    
                                                    </div>	
                                                    <p className ="formulario-input-error">El nombre deben ser unicamente de 2 a 40 letras</p>
                <br></br>                       <div className="forms-group" id="email-group">
                                                    
                                                    <input type="email" name="logemail" className="forms-control" placeholder="Correo electrónico" id="regemail" autoComplete='off' ></input>
                                                    <i className="input-icon uil uil-at"></i>

                                                </div>	
                                                <p className ="formulario-input-error">El correo debe contener @ y . </p>
                  <br></br>                     <div className="forms-group" id="pass-group">
                                                    
                                                    <input type="password" name="logpass" className="forms-control" placeholder="Cotraseña" id="regpass" autocomplete="off" ></input>
                                                    <i className="input-icon uil uil-lock-alt"></i>
                                                </div>
                                                <p className ="formulario-input-error">La contraseña debe contener minimo una letra Mayúscula y un numero</p>
                                            <div className="formulario__mensaje" id="formulario__mensaje">
                                                <p><b>Error:</b> Por favor rellene el formulario correctamente</p>
                                             </div>

                  <br></br>                     <button onClick={validate} id="register_button" className="loga" type="submit">Registrarme</button>
                                            <p className="formulario__mensaje-exito" id="formulario__exito"> Registro exitoso! </p>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
            </div>
        
            
         </body>
        </html>
    
    
     </>
    )
}

}