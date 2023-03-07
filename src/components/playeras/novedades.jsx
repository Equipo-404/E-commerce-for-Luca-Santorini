import React, { useState, useEffect } from 'react';
import "./ObjetosPlayeras.css";
import { Container, Card, CardImg, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';

function Novedades() {
  const [cart, setCart] = useState([]);
  const [items, setItems] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [selectedQuantities, setSelectedQuantities] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/productos')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        const itemObjects = data.map(item => ({
          ...item,
          selectedSize: item.talla[0] // inicializa la talla seleccionada en la primera opción
        }));
        setItems(itemObjects);
        setSelectedSizes(new Array(itemObjects.length).fill(itemObjects[0].talla[0]));
        setSelectedQuantities(new Array(itemObjects.length).fill(1));
      })
      .catch(error => console.log(error));
  }, []);

  const addToCart = (item, selectedSize, selectedQuantity) => {
    setCart(prevCart => {
      const newCart = [...prevCart, { item, selectedSize, selectedQuantity }];
      console.log(newCart);
      return newCart;
    });
  };

  const handleSizeChange = (index, value) => {
    setItems(prevItems => {
      const updatedItems = [...prevItems];
      updatedItems[index] = {
        ...updatedItems[index],
        selectedSize: value
      };
      return updatedItems;
    });
    setSelectedSizes(prevSelectedSizes => {
      const updatedSelectedSizes = [...prevSelectedSizes];
      updatedSelectedSizes[index] = value;
      return updatedSelectedSizes;
    });
  };
  const handleQuantityChange = (index, value) => {
    const newItems = [...items];
    const maxQuantity = newItems[index].cantidad;
    if (value > maxQuantity) { 
      newItems[index].selectedQuantity = maxQuantity; // establece la cantidad seleccionada en la cantidad máxima permitida
    } else if (value < 0) { 
      newItems[index].selectedQuantity = 0; // establece la cantidad seleccionada en cero si el valor ingresado es negativo
    } else {
      newItems[index].selectedQuantity = value; // actualiza la cantidad seleccionada
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
      
        return (
          <div key={item.idProducto} className="item">
            <Container>
              <CardImg className="imagenesplayerasleo" src={item.foto} alt={item.nombre} />
              <CardSubtitle className="precioleo">
                <p>{item.name}</p>
                <p className="descripcionleo">{item.description}</p>
                <select className="opcioneslibretas" value={item.selectedSize} onChange={(e) => handleSizeChange(index, e.target.value)}>
                  {item.talla.map((talla, index) => (
                    <option key={index} value={talla}>{talla}</option>
                  ))}
                </select>
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
       <button className="botonleo" onClick={() => addToCart(item, item.selectedSize, item.selectedQuantity)}>agregar a la bolsa</button>
            </Container>
          </div>
        );

    })}
  </div>
</>
  ); 
}

export default Novedades;



