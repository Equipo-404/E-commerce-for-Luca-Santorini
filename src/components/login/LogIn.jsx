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
        
            

            <div clasName="section-phan" action="" className="formulario" id="formulario">

                            <h6 className="change"><span>Iniciar Sesíon </span><span>Registrarte</span></h6>
                            <input className="checkbox" type="checkbox" id="reg-log" name="reg-log"/>
                            <label for="reg-log"></label>
                            <div className="card-3d-wrap mx-auto">
                                <div className="card-3d-wrapper">
                                    <div className="card-front">
                                        <div className="center-wrap">
                                            <div className="section text-center">
                                       
                                                    
                                                    <h1 className="titulitu">Iniciar Sesíon</h1>

                                               <div className="formulario__grupo" id="grupo__usuario">
                                               <div className="formulario__grupo-input">
                                               <input type="email" class="formulario__input" name="correo" id="correo" placeholder="Correo electrónico"></input>
                                                    
                                               </div>
				<p className="formulario__input-error">El correo solo puede contener letras, numeros, puntos, guiones y guion bajo.</p>
			</div>

                                                    <br></br>
                                                    <div className="formulario__grupo" id="grupo__password">
                                                    <div className="formulario__grupo-input">
                                                    <input type="password" className="formulario__input" name="password" id="password" placeholder='Contraseña'></input>
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
                                                <input type="text" class="formulario__input" name="nombre" id="regname" placeholder="Nombre completo"></input>
                                                    
                                                </div>
				<p class="formulario__input-error">El usuario tiene que ser de 4 a 16 dígitos y solo puede contener numeros, letras y guion bajo.</p>
			</div>
                                                    
            <div class="formulario__grupo" id="grupo__usuario">
                                               <div class="formulario__grupo-input">
                                               <input type="email" class="formulario__input" name="correo" id="regemail" placeholder="Correo electrónico"></input>
                                                    
                                               </div>
				<p class="formulario__input-error">El correo solo puede contener letras, numeros, puntos, guiones y guion bajo.</p>
			</div>
                  <div class="formulario__grupo" id="grupo__password">
                                                    <div class="formulario__grupo-input">
                                                    <input type="password" class="formulario__input" name="password" id="regpass"  placeholder='Contraseña'></input>
                                                    </div>
				<p class="formulario__input-error">La contraseña tiene que ser de 4 a 12 dígitos.</p>
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