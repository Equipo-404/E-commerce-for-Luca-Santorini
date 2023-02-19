import React, { Component } from 'react'
import { Button, Container, Form, FormGroup, Input, Label, Row, } from 'reactstrap';
import './style.css';
import {validateLogin, validate, nameInvalid} from '../../login.js';
export default class LogIn extends Component { 
    render() {
    return (
        <>
        <html>
        
        <body className='booty'>
        
        <div className='section'>
            <Container className="container">
                <Row class="row full-height justify-content-center">
                    <div className="col-12 text-center align-self-center py-5">
                        <div className="section pb-5 pt-5 pt-sm-2 text-center">
                            <h6 className="change"><span>Iniciar Sesíon </span><span>Registrarte</span></h6>
                            <input className="checkbox" type="checkbox" id="reg-log" name="reg-log"/>
                            <label for="reg-log"></label>
                            <div className="card-3d-wrap mx-auto">
                                <div className="card-3d-wrapper">
                                    <div class="card-front">
                                        <div class="center-wrap">
                                            <div class="section text-center">
                                       
                                                    
                                                    <h1 class="titulitu">Iniciar Sesíon</h1>
                                             <br></br>       <div class="forms-group" >
                                                        <input type="email" name="email" className="forms-control" placeholder="Correo electronico" id="logemail" required></input>
                                                        <i class="input-icon uil uil-at"></i>
                                                        <p className="warning" id=""></p>
                                                    </div>	
                                                    <br></br>
                                                    <div class="forms-group">
                                                        <input type="password" name="logmail" class="forms-control" placeholder="Contraseña" id="logpass" required></input>
                                                        <i class="input-icon uil uil-lock-alt"></i>
                                                        <p className="warning" id="passwordErr"></p>
                                                    </div>
                                                    <br></br>
                                                    <div>
                                                    <button onClick={validateLogin} class="loga" type="submit">Iniciar Sesíon</button>
                                                    </div>
                                                    <br></br>
                                                    <div>

                                                    <a class="parra" href="">¿Olvidaste tu contraseña?</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    
                                    <div class="card-back">
                                        <div class="center-wrap">
                                            <div class="section text-center">
                                                <h1 class="titulitu">Regístrate</h1>
                                    <br></br>            <div class="forms-group">
                                                    <input type="text" name="logname" class="forms-control" placeholder="Nombre Completo" id="regname" autocomplete="off" required></input>
                                                    <i class="input-icon uil uil-user"></i>
                                                    
                                                </div>	
                <br></br>                                <div class="forms-group">
                                                    <input type="email" name="logemail" class="forms-control" placeholder="Correo electronico" id="regemail" autocomplete="off" required=""></input>
                                                    <i class="input-icon uil uil-at"></i>
                                                </div>	
                  <br></br>                              <div class="forms-group">
                                                    <input type="password" name="logpass" class="forms-control" placeholder="Contraseña" id="regpass" autocomplete="off" required></input>
                                                    <i class="input-icon uil uil-lock-alt"></i>
                                                </div>
                  <br></br>                             <button onClick={validate} id="register_button" class="loga">Regístrarme</button>

                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Row>
            </Container>
        </div>
        </body>
        </html>
    
    <script  src="./script.js"></script>
    
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>

    
    
        </>
    )
}

}