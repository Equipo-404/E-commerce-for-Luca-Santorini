import React from 'react'
import { Card, CardBody, CardTitle, CardSubtitle, CardText,Button } from 'reactstrap';
import "./playeras.css";

const Playeras = () => {
  return (
    <>
      <h1>NavBar</h1>
      <div class="foto1">
        <img src="https://res.cloudinary.com/dzrqrtezc/image/upload/v1676229431/IMG_9868_vpuxgk.jpg" alt="hombre y mujer sentados en la acera con un skate al lado con payeras puestas love 4 galli blancas"></img>
      </div>
      <div class="segundotexto"><p>Playeras</p></div>

      <div class="fila">
     
        <Card className='columna'>
        <img src="https://res.cloudinary.com/dzrqrtezc/image/upload/v1676158169/LSSW_x_DANNY_OCEAN_BABYLON_G_NEGRA_FRONTAL_cfbnyh.png" alt="playera negra de danny ocean babylon"></img>
          <CardBody>
            <CardTitle tag="h5">
              Card title
            </CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              Card subtitle
            </CardSubtitle>
            <CardText>
              Some quick example text to build on the card title and make up the bulk of the cards content.
            </CardText>
            <Button>
              Button
            </Button>
          </CardBody>
        </Card>
      
        <div class="columna">
          <img src="https://res.cloudinary.com/dzrqrtezc/image/upload/v1676158169/LSSW_x_DANNY_OCEAN_BABYLON_G_NEGRA_FRONTAL_cfbnyh.png" alt="playera negra de danny ocean babylon"></img>

        </div>

        <div class="columna">
          <img src="https://res.cloudinary.com/dzrqrtezc/image/upload/v1676227552/HARRY_STYLES_LOVE_ON_TOUR_BLANCA_ESPALDA_kurmeg.png" alt="playera blanca harry styles liveo on tour"></img>

        </div>
        <div class="columna">
          <img src="https://res.cloudinary.com/dzrqrtezc/image/upload/v1676228105/DADDY_YANKEE_X_LSSW_NEGRA_FRONTAL_q72mpq.png" alt="playera gra daddy yankee estampado bellakeo old school"></img>
        </div>
      </div>
      <div class="fila">
        <div class="columna">
          <img src="https://res.cloudinary.com/dzrqrtezc/image/upload/v1676228252/LOVE_4_GALLI_BLANCA_ESPALDA_dyqj2b.png" alt="playera love 4 galli blanca con estampado en color rojo y negro " ></img>
        </div>
        <div class="columna">
          <img src="https://res.cloudinary.com/dzrqrtezc/image/upload/v1676158133/LSSW_DANNY_OCEAN_BABYLON_G_ROJA_ESPALDA_mgnxb1.png" alt="playera roja danny ocean babylon "></img>
        </div>
        <div class="columna">
          <img src="https://res.cloudinary.com/dzrqrtezc/image/upload/v1676229206/blnaca_basica_dmhifj.png"></img>
        </div>
      </div>
    </>
  )
}

export default Playeras