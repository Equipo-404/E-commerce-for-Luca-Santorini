import React, { useState } from 'react';
import "./ObjetosPlayeras.css"
import { Button, Container,CardSubtitle} from 'reactstrap';


function Items() {

    const [items] = useState([
        {
            name: '$199MXN',
            img: 'https://res.cloudinary.com/dzrqrtezc/image/upload/v1676229206/blnaca_basica_dmhifj.png',
            description: 'playera blanca'
        },
        {
            name: 'LOVE 4 GALLI',
            img: 'https://res.cloudinary.com/dzrqrtezc/image/upload/v1676228252/LOVE_4_GALLI_BLANCA_ESPALDA_dyqj2b.png',
            description: 'playera blanca con estampado luca santorini en color rojo'
        },
        {
            name: 'DADDY YANKEE x LSSW',
            img: 'https://res.cloudinary.com/dzrqrtezc/image/upload/v1676228105/DADDY_YANKEE_X_LSSW_NEGRA_FRONTAL_q72mpq.png',
            description: 'playera negra con estampado bellakeo old school en amarillo'
        },
        {
            name: 'LSSW x DANNY OCEAN ABYLON G',
            img: 'https://res.cloudinary.com/dzrqrtezc/image/upload/v1676158169/LSSW_x_DANNY_OCEAN_BABYLON_G_NEGRA_FRONTAL_cfbnyh.png',
            description: 'Player negra con estampado monaco y danny ocean'
        },
        {
            name: 'LIBRETA NOT A DR.',
            img: 'https://res.cloudinary.com/dzrqrtezc/image/upload/v1676158114/LIBRETA_NOT_A_DOCTOR_BLANCA_jsbn0a.png',
            description: 'Libreta not a Dr. con una mano pintando el cilo azul'
        },
        {
            name: 'LIBRETA I AM AN ARTIST NOT A DOCTOR',
            img: 'https://res.cloudinary.com/dzrqrtezc/image/upload/v1676158106/LIBRETA_I_AM_AN_ARTIST_NOT_A_DOCTOR_BLANCA_gsgk8r.png',
            description: 'Libreta i am an artist not a Dr. con logo luka santorini y globos rojos'
        }
    ]);

    return (
        <>
        <div className="imagen1">
            <img  src="https://res.cloudinary.com/dzrqrtezc/image/upload/v1676229431/IMG_9868_vpuxgk.jpg" alt="hombre y mujer sentados en la acera con un skate al lado con payeras puestas love 4 galli blancas"></img>
            </div>
            <div className="segundotexto"><p>Playeras</p></div>

            <div id="items-container">
                {items.map(item => (
                    <div key={item.name} className="item">
                        <Container>
                        <img src={item.img} alt={item.name} />
                        <CardSubtitle className="precio"><p>{item.name}</p>
                        <p>{item.description}</p>
                        </CardSubtitle>
                        <Button className='boton'>agregar a la bolsa</Button>
                        </Container>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Items;