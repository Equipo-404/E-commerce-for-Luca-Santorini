import React from 'react'
import { Button, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap'
import './style.css'
import {validateLogin, validate} from '../../login.js'
export const Index = () => {
    return (
        <>
        <html>
            <body>
        
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
                                       
                                                    
                                                    <h1 class="mb-4 pb-3">Iniciar Sesíon</h1>
                                                    <div class="form-group" >
                                                        <input type="email" name="email" className="form-control" placeholder="Correo electronico" id="logemail" required></input>
                                                        <i class="input-icon uil uil-at"></i>
                                                        
                                                    </div>	
                                                    <br></br>
                                                    <div class="form-group mt-2">
                                                        <input type="password" name="logmail" class="form-control" placeholder="Contraseña" id="logpass" required></input>
                                                        <i class="input-icon uil uil-lock-alt"></i>
                                                    </div>
                   <br></br>                                 <button onClick={validateLogin} class="btn mt-4" type="submit">Iniciar Sesíon</button>
                                                    <p class="mb-0 mt-4 text-center"><a href="" class="link">¿Olvidaste tu contraseña?</a></p>
                                                </div>
                                            </div>
                                        </div>
                                    
                                    <div class="card-back">
                                        <div class="center-wrap">
                                            <div class="section text-center">
                                                <h1 class="mb-4 pb-3">Regístrate</h1>
                                                <div class="form-group">
                                                    <input type="text" name="logname" class="form-control" placeholder="Nombre Completo" id="regname" autocomplete="off" required></input>
                                                    <i class="input-icon uil uil-user"></i>
                                                </div>	
                <br></br>                                <div class="form-group mt-2">
                                                    <input type="email" name="logemail" class="form-control" placeholder="Correo electronico" id="regemail" autocomplete="off" required=""></input>
                                                    <i class="input-icon uil uil-at"></i>
                                                </div>	
                  <br></br>                              <div class="form-group mt-2">
                                                    <input type="password" name="logpass" class="form-control" placeholder="Contraseña" id="regpass" autocomplete="off" required></input>
                                                    <i class="input-icon uil uil-lock-alt"></i>
                                                </div>
                <br></br>                                <button onClick={validate} id="register_button" class="btn">Regístrarme</button>

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

