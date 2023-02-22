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
                                    <div className="card-front">
                                        <div className="center-wrap">
                                            <div className="section text-center">
                                       
                                                    
                                                    <h1 className="titulitu">Iniciar Sesíon</h1>
                                             <br></br>  <div className="forms-group" >
                                                        <input type="email" name="email" className="forms-control" placeholder="Correo electronico" id="logemail" required></input>
                                                        <i className="input-icon uil uil-at"></i>
                                                        <p className="warning" id=""></p>
                                                    </div>	
                                                    <br></br>
                                                    <div class="forms-group">
                                                        <input type="password" name="logmail" className="forms-control" placeholder="Contraseña" id="logpass" required></input>
                                                        <i className="input-icon uil uil-lock-alt"></i>
                                                        <p className="warning" id="passwordErr"></p>
                                                    </div>
                                                    <br></br>
                                                    <div>
                                                    <button onClick={validateLogin} class="loga" type="submit">Iniciar Sesíon</button>
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
                                    <br></br>            <div className="forms-group">
                                                    <input type="text" name="logname" className="forms-control" placeholder="Nombre Completo" id="regname" autocomplete="off" required></input>
                                                    <i className="input-icon uil uil-user"></i>
                                                    
                                                </div>	
                <br></br>                                <div className="forms-group">
                                                    <input type="email" name="logemail" className="forms-control" placeholder="Correo electronico" id="regemail" autocomplete="off" required=""></input>
                                                    <i className="input-icon uil uil-at"></i>
                                                </div>	
                  <br></br>                              <div className="forms-group">
                                                    <input type="password" name="logpass" className="forms-control" placeholder="Contraseña" id="regpass" autocomplete="off" required></input>
                                                    <i className="input-icon uil uil-lock-alt"></i>
                                                </div>
                  <br></br>                             <button onClick={validate} id="register_button" className="loga">Regístrarme</button>

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