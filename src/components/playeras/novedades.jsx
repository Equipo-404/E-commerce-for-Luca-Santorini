import React, { useState } from 'react';
import "./ObjetosPlayeras.css";
import { Container,CardSubtitle} from 'reactstrap';

function Novedades() {
  const [cart, setCart] = useState([]);
  const addToCart = (item) => {
    setCart(prevCart => {
      const newCart = [...prevCart, item];
      console.log(newCart);
      return newCart;
    });
  };
    const [items, setItems] = useState([
        {
            id: 4,
            name: '$300MXN',
            img: 'https://res.cloudinary.com/dzrqrtezc/image/upload/v1677640966/LSSW_x_DANY_OC%C3%89ANO_BABYLON_G_AZUL_REY_FRONTAL_foxdgx.png',
            description: 'En más de 5 colorways',
            options: ['Chica', 'Mediana', 'Grande'],
            selectedOption: null,
            quantity: 0,
            maxQuantity: 10, 
        },
        {
            id: 1,
            name: '$270MXN',
            img: 'https://res.cloudinary.com/dzrqrtezc/image/upload/v1677553321/LOVE_4_GALLI_FRONTAL_BLANCA_cjtkic.png',
            description: 'Esta es perfecta para rockearla en tal fecha, un uniforme para todo cuaadeño o artista de closet',
            options: ['Chica', 'Mediana', 'Grande'],
            selectedOption: null,
            quantity: 0,
            maxQuantity: 5, 
        },
        {
            id: 9,
            name: '$350MXN',
            img: 'https://res.cloudinary.com/dzrqrtezc/image/upload/v1677553300/LAS_DEL_BELLAKEO_AZUL_FRONTAL_so3nr3.png',
            description: 'Playera azul con estampado bellakeo old school',   
            options: ['Chica', 'Mediana', 'Grande'],
            selectedOption: null,
            quantity: 0,
            maxQuantity: 7, 
        }
    ]);

    
    
    const handleOptionChange = (index, value) => {
        const newItems = [...items];
        newItems[index].selectedOption = value;
        setItems(newItems);
    };
    const handleQuantityChange = (index, value) => {
        const newItems = [...items];
        if (value > newItems[index].maxQuantity) { 
          newItems[index].quantity = newItems[index].maxQuantity; 
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
            <img
              id="imgleo"
              src="https://res.cloudinary.com/dgp2sgznp/image/upload/v1676831013/Assets/IMG_9869_h0cvb0.jpg"
              alt="hombre y mujer sentados en la acera con payeras puestas love 4 galli blancas"
            />
          </div>
      
          <div className="segundotextoleo">
            <p>Novedades</p>
          </div>
      
          <div id="items-containerleo" className="items-grid">
            {items.map((item, index) => {
              if (item.id === 4 || item.id === 1 || item.id === 9) {
                return (
                  <div key={item.img} className="item">
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
                            max={item.maxQuantity}
                            className="inputcantidadplayerasleo"
                            placeholder="Cantidad"
                            value={item.quantity || ""}
                            onChange={(e) => handleQuantityChange(index, parseInt(e.target.value))}
                          ></input>
                        
                      </CardSubtitle>
                      <button className="botonleo" onClick={() => addToCart(item)}>agregar a la bolsa</button>
                    </Container>
                  </div>
                );
              } else {
                return null;
              }
            })}
          </div>
        </>
      );
      
}

export default Novedades;