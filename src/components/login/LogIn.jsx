import React, { Component } from 'react'
import './style.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { registerUser , validateLogin , conti , publicidad  } from '../../login.js';

export default class LogIn extends Component {
    
    render() {
        return (
            <>
                <html>
                    <body className='booty'>
                        <div clasName="section-phan" action="" className="formulario" id="formulario">
                            <h6 className="change"><span>Iniciar Sesión </span><span>Registrarte</span></h6>
                            <input className="checkbox" type="checkbox" id="reg-log" name="reg-log" />
                            <label for="reg-log"></label>
                            <div className="card-3d-wrap mx-auto">
                                <div className="card-3d-wrapper">
                                    <div className="card-front">
                                        <div className="center-wrap">
                                            <div className="section text-center">
                                                <h1 className="titulitu">Iniciar Sesión</h1>
                                                <div className="formulario__grupo" id="grupo__usuario">
                                                    <div className="formulario__grupo-input">
                                                        <input type="email" className="formulario__input" name="correo" id="correo" placeholder="Correo electrónico"></input>
                                                        <i className="formulario__validacion-estado fas"></i>
                                                    </div>
                                                    <p className={"formulario__input-error"}>El correo solo puede contener letras, numeros, puntos, guiones y guion bajo.</p>
                                                </div>

                                                <br></br>
                                                <div className="formulario__grupo" id="grupo__password">
                                                    <div className="formulario__grupo-input">
                                                        <input type="password" className="formulario__input" name="password" id="password" placeholder='Contraseña'></input>
                                                    </div>
                                                    <p className="formulario__input-error">La contraseña tiene que tener entre 6 y 16 caracteres.</p>
                                                </div>
                                                <br></br>
                                                <div>
                                                    <button onClick={ validateLogin } className="loga" type="submit">Iniciar Sesión</button>
                                                </div>
                                                <br></br>
                                                <div>
                                                    <button onClick={conti} className="parra" id="parra" href="">¿Olvidaste tu contraseña?</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card-back">
                                        
                                        <div className="center-wrap">
                                            <div className="section text-center">
                                                <h1 className="titulitu">Regístrate</h1>
                                                <div className="formulario__grupo" id="grupo__registro-nombre">
                                                    <div className="formulario__grupo-input">
                                                        <input type="text" className="formulario__input" name="nombre" id="regname" placeholder="Nombre completo"></input>
                                                        <i class="formulario__validacion-estado fas"></i>
                                                    </div>
                                                    <p className="formulario__input-error">El nombre tiene que ser de 4 a 40 dígitos. </p>
                                                </div>

                                                <div className="formulario__grupo" id="grupo__registro-usuario">
                                                    <div className="formulario__grupo-input">
                                                        <input type="email" className="formulario__input" name="correo" id="regemail" placeholder="Correo electrónico"></input>
                                                        <i class="formulario__validacion-estado fas"></i>
                                                    </div>
                                                    <p className="formulario__input-error">El correo debe tener una estructura válida.</p>
                                                </div>
                                                <div className="formulario__grupo" id="grupo__registro-password">
                                                    <div className="formulario__grupo-input">
                                                        <input type="password" className="formulario__input" name="password" id="regpass" placeholder='Contraseña'></input>
                                                        <i class="formulario__validacion-estado fas"></i>
                                                    </div>
                                                    <p className="formulario__input-error">La contraseña tiene que ser de 6 a 12 dígitos .</p>
                                                </div>
                                                <br></br>                     
                                                <button onClick={registerUser} id="register_button" className="loga" type="submit">Registrarme</button>
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