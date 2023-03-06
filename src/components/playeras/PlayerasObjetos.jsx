import React, { useState } from 'react';
import "./ObjetosPlayeras.css"
import {  Container,CardSubtitle,} from 'reactstrap';

const addToCart = (item) => {
  console.log(JSON.stringify(item));
};
function Items() {

    const [items, setItems] = useState([
        {
            id: 1,
            name: '$270MXN',
            img: 'https://res.cloudinary.com/dzrqrtezc/image/upload/v1677553321/LOVE_4_GALLI_FRONTAL_BLANCA_cjtkic.png',
            description: 'Esta es perfecta para rockearla en tal fecha, un uniforme para todo cuaadeño o artista de closet',
            options: ['Chica', 'Mediana', 'Grande'],
            selectedOption: null,
            maxQuantity: 5,
            quantity: 0
        },
        {
            id: 2,
            name: '$300MXN',
            img: 'https://res.cloudinary.com/dzrqrtezc/image/upload/v1677640692/LSSW_x_DANY_OC%C3%89ANO_BABYLON_G_AZUL_FRONTAL_a9dp8w.png',
            description: 'En más de 5 colorways',
            options: ['Chica', 'Mediana', 'Grande'],
            selectedOption: null,
            maxQuantity: 20,
            quantity: 0
        },
        {
            id: 3,
            name: '$350MXN',
            img: 'https://res.cloudinary.com/dzrqrtezc/image/upload/v1677553319/LAS_DEL_BELLAKEO_NEGRA_FRONTAL_rhoyyl.png',
            description: 'Playera negra con estampado bellakeo old school',
            options: ['Chica', 'Mediana', 'Grande'],
            selectedOption: null,
            maxQuantity: 8,
            quantity: 0
        },
        {
            id: 4,
            name: '$300MXN',
            img: 'https://res.cloudinary.com/dzrqrtezc/image/upload/v1677640966/LSSW_x_DANY_OC%C3%89ANO_BABYLON_G_AZUL_REY_FRONTAL_foxdgx.png',
            description: 'En más de 5 colorways',
            options: ['Chica', 'Mediana', 'Grande'],
            selectedOption: null,
            maxQuantity: 10,
            quantity: 0
        },
        {
            id: 5,
            name: '$300MXN.',
            img: 'https://res.cloudinary.com/dzrqrtezc/image/upload/v1677553314/LSSW_x_DANNY_OC%C3%89ANO_BABYLON_G_VERDE_DELANTERA_vjxzlg.png',
            description: 'En más de 5 colorways',
            options: ['Chica', 'Mediana', 'Grande'],
            selectedOption: null,
            maxQuantity: 17,
            quantity: 0
        },
        {
            id: 6,
            name: '$300MXN',
            img: 'https://res.cloudinary.com/dzrqrtezc/image/upload/v1677553305/LSSW_x_DANNY_OC%C3%89ANO_BABYLON_G_ROJA_DELANTERA_pgaphf.png',
            description: 'En más de 5 colorways',
            options: ['Chica', 'Mediana', 'Grande'],
            selectedOption: null,
            maxQuantity: 6,
            quantity: 0
        },
        {
            id: 7,
            name: '$300MXN',
            img: 'https://res.cloudinary.com/dzrqrtezc/image/upload/v1677553304/HARRY_EN_GUANATOS_BLANCA_FRONTAL_hvt0jz.png',
            description: '“It was given to me on my last visit to the VFG arena, now I don\'t take it off. I love you my watermelonas”',
            options: ['Chica', 'Mediana', 'Grande'],
            selectedOption: null,
            maxQuantity: 5,
            quantity: 0
        },
        {
            id: 8,
            name: '$350MXN',
            img: 'https://res.cloudinary.com/dzrqrtezc/image/upload/v1677553302/LAS_DEL_BELLAKEO_BEIGE_FRONTAL_lsgtsu.png',
            description: 'Playera beige con estampado bellakeo old school',
            options: ['Chica', 'Mediana', 'Grande'],
            selectedOption: null,
            maxQuantity: 25,
            quantity: 0
        },
        {
            id: 9,
            name: '$350MXN',
            img: 'https://res.cloudinary.com/dzrqrtezc/image/upload/v1677553300/LAS_DEL_BELLAKEO_AZUL_FRONTAL_so3nr3.png',
            description: 'Playera azul con estampado bellakeo old school',   
            options: ['Chica', 'Mediana', 'Grande'],
            selectedOption: null,
            maxQuantity: 7,
            quantity: 0
        }
    ]);

    const handleOptionChange = (index, value) => {
        const newItems = [...items];
        newItems[index].selectedOption = value;
        setItems(newItems);
    };
    const handleQuantityChange = (index, value) => {
      const newItems = [...items];
      const maxQuantity = newItems[index].maxQuantity;
      if (value > maxQuantity) { 
        newItems[index].quantity = maxQuantity; 
      } else if (value < 0) { 
        newItems[index].quantity = 0; 
      } else {
        newItems[index].quantity = value;
      }
      setItems(newItems);
    };
    

    return (
      <>
        <div>
          <img id="imgleo" src="https://res.cloudinary.com/dgp2sgznp/image/upload/v1676830722/Assets/IMG_9868_fbv3xf.jpg" alt="hombre y mujer sentados en la acera con un skate al lado con payeras puestas love 4 galli blancas"></img>
        </div>
    
        <div className="segundotextoleo">
          <p>Playeras</p>
        </div>
    
        <div id="items-containerleo" className="items-grid">
          {items.map((item, index) => (
            <div key={item.img} className="itemplayera">
              <Container>
                <img className="imagenesplayerasleo" src={item.img} alt={item.name} />
                <CardSubtitle className="precioleo">
                  <p>{item.name}</p>
                  <p className="descripcionleo">{item.description}</p>
                  <select
                    className="opcioneslibretas"
                    value={item.selectedOption || ""}
                    onChange={(e) => handleOptionChange(index, e.target.value)}
                  >
                    <option value={null}>Tallas</option>
    
                    {item.options.map((option, optionIndex) => (
                      <option key={optionIndex} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  
                    <input
                      type="number"
                      min="0"
                      max="10"
                      className="inputcantidadplayerasleo"
                      placeholder="Cantidad"
                      value={item.quantity || ""}
                      onChange={(e) => handleQuantityChange(index, parseInt(e.target.value))}
                    ></input>
                  
                </CardSubtitle>
                <button className="botonleo" onClick={() => addToCart(item)}>agregar a la bolsa</button>
              </Container>
            </div>
          ))}
        </div>
      </>
    );
    
    }
    
    export default Items;

  
   