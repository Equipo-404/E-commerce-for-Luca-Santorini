/*function addItem(item) {
    const itemHTML = 
      '<div class="col-md-4">\n' +
      '  <div class="card" style="width: 18rem;">\n' +
      '    <img src="' + item.img + '" class="card-img-top" alt="image">\n' +
      '    <div class="card-body">\n' +
      '      <h5 class="card-title">' + item.name + '</h5>\n' +
      '      <p class="card-text">' + item.description + '</p>\n' +
      '      <a href="#" class="btn btn-dark">Agregar a la bolsa</a>\n' +
      '    </div>\n' +
      '  </div>\n' +
      '</div>\n';
    const itemsContainer = document.getElementById("list-items");
    itemsContainer.innerHTML += itemHTML;
  }
  */

  function addItem(item) {
    const itemHTML = 
      '<div>\n' +
      '  <div>\n' +
      '    <img src="' + item.img + '" alt="image">\n' +
      '    <div>\n' +
      '      <h5>' + item.name + '</h5>\n' +
      '      <p>' + item.description + '</p>\n' +
      '      <a href="#">Agregar a la bolsa</a>\n' +
      '    </div>\n' +
      '  </div>\n' +
      '</div>\n';
    const itemsContainer = document.getElementById("list-items");
    itemsContainer.innerHTML = itemHTML;
  }
  
  addItem({
    name: 'BASICA BLANCA X LSSW',
    img: 'https://res.cloudinary.com/dzrqrtezc/image/upload/v1676229206/blnaca_basica_dmhifj.png',
    description: 'playera blanca'
  });

  addItem({
    name: 'LOVE 4 GALLI',
    img: 'https://res.cloudinary.com/dzrqrtezc/image/upload/v1676228252/LOVE_4_GALLI_BLANCA_ESPALDA_dyqj2b.png',
    description: 'playera blanca con estampado luca santorini en color rojo'
  });

  addItem({
    name: 'DADDY YANKEE x LSSW',
    img: 'https://res.cloudinary.com/dzrqrtezc/image/upload/v1676228105/DADDY_YANKEE_X_LSSW_NEGRA_FRONTAL_q72mpq.png',
    description: 'playera negra con estampado bellakeo old school en amarillo'
  });
  addItem({
    name: 'LSSW x DANNY OCEAN ABYLON G',
    img: 'https://res.cloudinary.com/dzrqrtezc/image/upload/v1676158169/LSSW_x_DANNY_OCEAN_BABYLON_G_NEGRA_FRONTAL_cfbnyh.png',
    description: 'Player negra con estampado monaco y danny ocean'
  });
  addItem({
    name: 'LIBRETA NOT A DR.',
    img: 'https://res.cloudinary.com/dzrqrtezc/image/upload/v1676158114/LIBRETA_NOT_A_DOCTOR_BLANCA_jsbn0a.png',
    description: 'Libreta not a Dr. con una mano pintando el cilo azul'
  });
  addItem({
    name: 'LIBRETA I AM AN ARTIST NOT A DOCTOR',
    img: 'https://res.cloudinary.com/dzrqrtezc/image/upload/v1676158106/LIBRETA_I_AM_AN_ARTIST_NOT_A_DOCTOR_BLANCA_gsgk8r.png',
    description: 'Libreta i am an artist not a Dr. con logo luka santorini y globos rojos'
  });
