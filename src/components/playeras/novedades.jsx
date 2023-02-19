import React, { useState } from 'react';
import "./ObjetosPlayeras.css";
import { Container,CardSubtitle} from 'reactstrap';


function Novedades() {
   
    const [items, setItems] = useState([
        
        {
            name: '$199MXN',
            img: 'https://res.cloudinary.com/dzrqrtezc/image/upload/v1676693597/LIBRETA_I_AM_AN_ARTIST_NOT_A_DOCTOR_BLANCA_yrljlh.png',
            description: 'Libreta 200 hojas, ralla, doble ralla, cuadricula (chica o grande) o dibujo',
            options: ['Ralla', 'Doble ralla', 'Cuadricula chica', 'Cuadricula grande', 'Dibujo '],
            selectedOption: null
        },
        {
            name: '$199MXN',
            img: 'https://res.cloudinary.com/dzrqrtezc/image/upload/v1676158114/LIBRETA_NOT_A_DOCTOR_BLANCA_jsbn0a.png',
            description: 'Libreta 200 hojas, ralla, doble ralla, cuadricula (chica o grande) o dibujo ',
            options: ['Ralla', 'Doble ralla', 'Cuadricula chica', 'Cuadricula grande', 'Dibujo '],
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
            <img id="imgleo" src="https://res.cloudinary.com/dgp2sgznp/image/upload/v1676831013/Assets/IMG_9869_h0cvb0.jpg" alt="hombre y mujer sentados en la acera con payeras puestas love 4 galli blancas"></img>
            </div>
         
            
            <div className="segundotextoleo"><p>Novedades</p></div>

            <div id="items-containerleo" className='items-grid'>
                {items.map((item, index) => (
                    <div key={item.img} className="item">
                        <Container>
                        <img className='imagenesplayerasleo' src={item.img} alt={item.name} />
                        <CardSubtitle className="precioleo"><p>{item.name}</p>
                        <p className='descripcionleo'>{item.description}</p>
                        <select className='opcioneslibretas' value={item.selectedOption || ''} onChange={(e) => handleOptionChange(index, e.target.value)}>
                            <option value={null}>Elija una opción</option>
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

export default Novedades;