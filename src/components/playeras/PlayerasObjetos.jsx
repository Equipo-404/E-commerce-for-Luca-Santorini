import React, { useState } from 'react';
import "./ObjetosPlayeras.css"
import {  Container,CardSubtitle} from 'reactstrap';


function Items() {

    const [items, setItems] = useState([
        {
            id: 1,
            name: '$199MXN',
            img: 'https://res.cloudinary.com/dzrqrtezc/image/upload/v1676442581/LSSW_x_DANNY_OCEAN_BABYLON_G_NEGRA_FRONTAL_elxe1p.png',
            description: 'Playera Danny Ocean Babylon azul fuerte ',
            options: ['Chica', 'Mediana', 'Grande'],
            selectedOption: null
          
        },
        {
            id: 2,
            name: '$159MXN',
            img: 'https://res.cloudinary.com/dzrqrtezc/image/upload/v1676683694/LOVE_4_GALLI_BLANCA_FRONTAL_sthzg9.png',
            description: 'Playera blanca con estampado luca santorini ',
            options: ['Chica', 'Mediana', 'Grande'],
            selectedOption: null
        },
        {
            id: 3,
            name: '$199MXN',
            img: 'https://res.cloudinary.com/dzrqrtezc/image/upload/v1676442331/DADDY_YANKEE_X_LSSW_NEGRA_FRONTAL_g3xfgf.png',
            description: 'Playera negra con estampado bellakeo old school',
            options: ['Chica', 'Mediana', 'Grande'],
            selectedOption: null
        },
        {
            id: 4,
            name: '$199MXN',
            img: 'https://res.cloudinary.com/dzrqrtezc/image/upload/v1676442366/HARRY_STYLES_LOVE_ON_TOUR_BLANCA_ESPALDA_lhzdil.png',
            description: 'Playera blanca estampado Harry Styles',
            options: ['Chica', 'Mediana', 'Grande'],
            selectedOption: null
        },
        {
            id: 5,
            name: '$99MXN.',
            img: 'https://res.cloudinary.com/dzrqrtezc/image/upload/v1676390493/BASICA_BLANCA_x_LSSW_bwtd9f.png',
            description: 'Playera blanca básica x LSSW',
            options: ['Chica', 'Mediana', 'Grande'],
            selectedOption: null
        },
        {
            id: 6,
            name: '$99MXN',
            img: 'https://res.cloudinary.com/dzrqrtezc/image/upload/v1676358008/BASICA_ROJA_x_LSSW_rv10qr.png',
            description: 'Playera básica roja x LSSW',
            options: ['Chica', 'Mediana', 'Grande'],
            selectedOption: null
        },
        {
            id: 7,
            name: '$199MXN',
            img: 'https://res.cloudinary.com/dzrqrtezc/image/upload/v1676158102/HARRY_STYLES_LOVE_ON_TOUR_BLANCA_FRONTAL_y51xsp.png',
            description: 'Playera Harry Styles love on tour',
            options: ['Chica', 'Mediana', 'Grande'],
            selectedOption: null
        },
        {
            id: 8,
            name: '$99MXN',
            img: 'https://res.cloudinary.com/dzrqrtezc/image/upload/v1676358009/BASICA_NEGRA_x_LSSW_eeyinf.png',
            description: 'Playera básica negra x LSSW',
            options: ['Chica', 'Mediana', 'Grande'],
            selectedOption: null
        },
        {
            id: 9,
            name: '$99MXN',
            img: 'https://res.cloudinary.com/dzrqrtezc/image/upload/v1676356841/BASIC_VERDE_X_LSSW_rtnbzi.png',
            description: 'Playera básica verde x LSSW',   
            options: ['Chica', 'Mediana', 'Grande'],
            selectedOption: null
        }
    ]);

    const handleOptionChange = (index, value) => {
        const newItems = [...items];
        newItems[index].selectedOption = value;
        setItems(newItems);
    };
    return (
        <>
        
        <div >
            <img id="imgleo" src="https://res.cloudinary.com/dgp2sgznp/image/upload/v1676830722/Assets/IMG_9868_fbv3xf.jpg" alt="hombre y mujer sentados en la acera con un skate al lado con payeras puestas love 4 galli blancas"></img>
            </div>
         
            
            <div className="segundotextoleo"><p>Playeras</p></div>

            <div id="items-containerleo" className='items-grid'>
                {items.map((item, index) => (
                    <div key={item.img} className="item">
                        <Container>
                        <img className='imagenesplayerasleo' src={item.img} alt={item.name} />
                        <CardSubtitle className="precioleo"><p>{item.name}</p>
                        <p className='descripcionleo'>{item.description}</p>
                        <select className='opcioneslibretas' value={item.selectedOption || ''} onChange={(e) => handleOptionChange(index, e.target.value)}>
                            <option value={null}>size</option>
                            {item.options.map((option, optionIndex) => (
                                <option key={optionIndex} value={option}>{option}</option>
                            ))}
                        </select>
                        </CardSubtitle>
                        <button className='botonleo'>agregar a la bolsa</button>
                        </Container>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Items;