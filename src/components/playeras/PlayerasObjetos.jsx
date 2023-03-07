import React, { useState, useEffect } from 'react';
import "./ObjetosPlayeras.css";
import { Container, CardImg,  CardSubtitle, } from 'reactstrap';


function Items() {

  const [cart, setCart] = useState([]);
  const [items, setItems] = useState([]);
  const [selectedQuantities, setSelectedQuantities] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/productos')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        const itemObjects = data.map(item => ({
          ...item,
        // inicializa la talla seleccionada en la primera opción
        }));
        setItems(itemObjects);
        setSelectedQuantities(new Array(itemObjects.length).fill(1));
      })
      .catch(error => console.log(error));
  }, []);

  
  const addToCart = (item, selectedQuantity) => {
    setCart(prevCart => {
      const newCart = [...prevCart, { item, selectedQuantity }];
      console.log(`Agregado ${selectedQuantity} ${item.nombre} a la bolsa`);
      console.log(newCart);
      return newCart;
    });
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
    <img
           id="imgleo"
           src="https://res.cloudinary.com/dgp2sgznp/image/upload/v1676831013/Assets/IMG_9869_h0cvb0.jpg"
           alt="hombre y mujer sentados en la acera con payeras puestas love 4 galli blancas"
         />
    </div>
  
    <div className="segundotextoleo">
    <p></p>
  </div>

  <div id="items-containerleo" className="items-grid">
    {items.map((item, index) => {
      
        return (
          <div key={item.idProducto} className="item">
            <Container>
              <CardImg className="imagenesplayerasleo" src={item.fotop} alt={item.nombre} />
              <CardSubtitle className="precioleo">
                <p>${item.precio}MXN</p>
                <p className="descripcionleo">{item.descripcion.slice(0, 100)}{item.descripcion.length > 46 && ""}</p>
                
                <input 
  type="number" 
  placeholder='Cantidad' 
  className="inputcantidadplayerasleo" 
  min="0" 
  max={item.cantidad} 
  value={item.selectedQuantity || ""} 
  onChange={(e) => {
    const value = parseInt(e.target.value);
    const maxQuantity = item.cantidad;
    if (value > maxQuantity) { 
      setItems(prevItems => {
        const updatedItems = [...prevItems];
        updatedItems[index] = {
          ...updatedItems[index],
          selectedQuantity: maxQuantity
        };
        return updatedItems;
      });
      e.target.value = maxQuantity; // set the input value to the maximum allowed quantity
    } else if (value > 10) { // restrict the maximum quantity to 10
      setItems(prevItems => {
        const updatedItems = [...prevItems];
        updatedItems[index] = {
          ...updatedItems[index],
          selectedQuantity: 10
        };
        return updatedItems;
      });
      e.target.value = 10; // set the input value to 10
    } else {
      setItems(prevItems => {
        const updatedItems = [...prevItems];
        updatedItems[index] = {
          ...updatedItems[index],
          selectedQuantity: value
        };
        return updatedItems;
      });
    }
  }} 
/>
              </CardSubtitle>
              <button className="botonleo" onClick={() => addToCart(item, item.selectedQuantity)}>agregar a la bolsa</button>
            </Container>
          </div>
        );

    })}
  </div>
</>
  ); 
}
    
    export default Items;

  
   