export function validate() {
  const formulario = document.getElementById('formulario');
  const inputs = document.querySelectorAll('#formulario input');
  
  const expresiones = {
    usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    password: /^.{4,12}$/, // 4 a 12 digitos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    
  }
  
  const campos = {
    usuario: false,
    nombre: false,
    password: false,
    correo: false
    
  }
  
  const validarFormulario = (e) => {
    switch (e.target.name) {
      case "usuario":
        validarCampo(expresiones.usuario, e.target, 'usuario');
      break;
      case "nombre":
        validarCampo(expresiones.nombre, e.target, 'nombre');
      break;
      case "password":
        validarCampo(expresiones.password, e.target, 'password');
        
      break;
      
      case "correo":
        validarCampo(expresiones.correo, e.target, 'correo');
      break;
     
    }
  }
  
  const validarCampo = (expresion, input, campo) => {
    if(expresion.test(input.value)){
      document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
      document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
      document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
      document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
      document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
      campos[campo] = true;
    } else {
      document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
      document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
      document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
      document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
      document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
      campos[campo] = false;
    }
  }
  
  
  
  inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
  });
  
  formulario.addEventListener('submit', (e) => {
    e.preventDefault();
  
    const terminos = document.getElementById('terminos');
    if(campos.usuario && campos.nombre && campos.password && campos.correo  ){
      formulario.reset();
  
      document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
      setTimeout(() => {
        document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
      }, 5000);
  
      document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
        icono.classList.remove('formulario__grupo-correcto');
      });
    } else {
      document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
    }
  });
  
  
  // Traer valores
  var regnameValue = document.getElementById('regname').value;
  var regemailValue = document.getElementById('regemail').value;
  var regpassValue = document.getElementById('regpass').value;
  
  // Crear objeto
  let user = {
    name: regnameValue,
    email: regemailValue,
    password: regpassValue
  };
  console.log(user)
  //  JSON string
  const userJson = JSON.stringify(user);
  
  //  objecto en el local storage
  localStorage.setItem(user.email, userJson);
  
  
  }
  
  export function validateLogin () {
      // Traer el valor "user" key localStorage
  
  let userEmail = document.getElementById("logemail").value;
  let userPassword = document.getElementById("logpass").value;
  let userString = localStorage.getItem("userEmail");
  
  // Checar si el usuario es valido
  if (userString === null) {
    // Usar una alerta si no coincide
    alert('usuario no valido');
  } else {
    // User exists - do something with the user data
    var user = JSON.parse(userString);
    if (user.password === userPassword) {
      // Contraseña validada - hacer algo
      alert('Contaseña valida,Bienvenido');
    } else {
      // Si la contraseña es invalida - hacer otra cosa
      alert('La contraseña es invalida');
    }
  }
  }
  