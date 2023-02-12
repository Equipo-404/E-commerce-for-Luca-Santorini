import React, { useState, useEffect } from 'react';

const ImageGrid = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(data => {
        setImages(data);
      })
      .catch(error => {
        console.error('Error al obtener los datos: ', error);
      });
  }, []);

  return (
    <div style={styles.container}>
      {images.map(image => (
        <img
          key={image.id}
          src={image.url}
          alt={image.title}
          style={styles.image}
        />
      ))}
    </div>
  );
};

const styles = {
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '16px',
  },
  image: {
    width: '100%',
    height: 'auto',
  },
};

export default ImageGrid;