import React, { Component } from 'react'
import { Button, Container, Form, FormGroup, Input, Label, Row, Formulario} from 'reactstrap';
import './style.css';
import { useState } from 'react';
import {validateLogin, validate, validarFormulario } from '../../login.js';
export default class LogIn extends Component { 
    render() {
    return (
        <>
        <html>
        
        <body className='booty'>
        
            

            <div action="" className="formulario" id="formulario">

                            <h6 className="change"><span>Iniciar Sesíon </span><span>Registrarte</span></h6>
                            <input className="checkbox" type="checkbox" id="reg-log" name="reg-log"/>
                            <label for="reg-log"></label>
                            <div className="card-3d-wrap mx-auto">
                                <div className="card-3d-wrapper">
                                    <div className="card-front">
                                        <div className="center-wrap">
                                            <div className="section text-center">
                                       
                                                    
                                                    <h1 className="titulitu">Iniciar Sesíon</h1>
                                               <div className="formulario__grupo" id="grupo__nombre">
                                               <div className="formulario__grupo-input">
                                               <input type="email" class="formulario__input" name="logemail" id="correo" placeholder="Correo electrónico" autoComplete='off'></input>
                                                    
                                               </div>
				                               <p className="formulario__input-error">El correo solo puede contener letras, numeros, puntos, guiones y guion bajo.</p>
			                                   </div>

                                                    <br></br>
                                                    <div className="formulario__grupo" id="grupo__password">
                                                    <div className="formulario__grupo-input">
                                                    <input type="password" className="formulario__input" name="logpass" id="password" placeholder='Contraseña' autoComplete='off'></input>
                                                    </div>
				                                    <p class="formulario__input-error">La contraseña tiene que ser de 4 a 12 dígitos.</p>
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
                                                <div class="formulario__grupo" id="grupo__nombre">
                                                <div class="formulario__grupo-input">
                                                <input type="text" class="formulario__input" name="regname" id="regname" placeholder="Nombre completo" autoComplete='off'></input>
                                                    
                                                </div>
				                                <p class="formulario__input-error">El usuario tiene que ser de 4 a 16 dígitos y solo puede contener numeros, letras y guion bajo.</p>
			                                    </div>
                                                    
                                               <div class="formulario__grupo" id="grupo__correo">
                                               <div class="formulario__grupo-input">
                                               <input type="email" class="formulario__input" name="logemail" id="regemail" placeholder="Correo electrónico" autoComplete='off'></input>
                                                    
                                               </div>
				                               <p class="formulario__input-error">El correo solo puede contener letras, numeros, puntos, guiones y guion bajo.</p>
			                                   </div>
                                               <div class="formulario__grupo" id="grupo__password">
                                                    <div class="formulario__grupo-input">
                                                    <input type="password" class="formulario__input" name="logpass" id="regpass"  placeholder='Contraseña' autoComplete='off'></input>
                                                    </div>
				                                <p class="formulario__input-error">La contraseña tiene que ser de 4 a 12 dígitos.</p>
			                                    </div>
                                                <div class="formulario__mensaje" id="formulario__mensaje">
				                                <p> <b>Error:</b> Por favor rellena el formulario correctamente. </p>
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