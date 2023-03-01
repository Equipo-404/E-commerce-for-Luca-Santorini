// Function to validate the registration form using regex when keyup (name, username, email, password)
export function registerUser() {
  // If all the fields are valid, save the user data in localStorage
  if (validateRegisterFields()) {
    let name = document.querySelector("#regname").value;
    let email = document.querySelector("#regemail").value;
    let password = document.querySelector("#regpass").value;
    // Check if the user already exists
    if (localStorage.getItem(email) !== null) {
      alert("El usuario ya existe");
      document.querySelectorAll(".formulario__grupo i").forEach((icon) => {
        icon.classList.remove("fa-check-circle");
      });
      return;
    }
    // Save the user data in localStorage
    let user = {
      name: name,
      email: email,
      password: password
    };
    localStorage.setItem(email, JSON.stringify(user));
    alert("Usuario registrado");
    document.querySelectorAll(".formulario__grupo i").forEach((icon) => {
      icon.classList.remove("fa-check-circle");
    });
    // Clear the form
    document.querySelectorAll('input').forEach((input)=>{input.value = ''});
    //take the user to the login page
    document.querySelector("#reg-log").click();

  }
}

function validateRegisterFields() {
  // name id = regname
  let name = document.querySelector("#regname").value;
  // email id = regemail
  let email = document.querySelector("#regemail").value;
  // password id = regpass
  let password = document.querySelector("#regpass").value;


  // Regex for name, email, password
  let nameRegex = /^[a-zA-Z ]{2,30}$/;
  let emailRegex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
  let passwordRegex = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
  

  if (nameRegex.test(name)) {
    // Name is valid
    document.querySelector("#grupo__registro-nombre").classList.remove('formulario__grupo-incorrecto');
    document.querySelector("#grupo__registro-nombre").classList.add('formulario__grupo-correcto');
    document.querySelector("#grupo__registro-nombre i").classList.add('fa-check-circle');
    document.querySelector("#grupo__registro-nombre i").classList.remove('fa-times-circle');
    document.querySelector("#grupo__registro-nombre .formulario__input-error").classList.remove('formulario__input-error-activo');
  } else {
    // Name is invalid
    document.querySelector("#grupo__registro-nombre").classList.add('formulario__grupo-incorrecto');
    document.querySelector("#grupo__registro-nombre").classList.remove('formulario__grupo-correcto');
    document.querySelector("#grupo__registro-nombre i").classList.add('fa-times-circle');
    document.querySelector("#grupo__registro-nombre i").classList.remove('fa-check-circle');
    document.querySelector("#grupo__registro-nombre .formulario__input-error").classList.add('formulario__input-error-activo');
  }
  if (emailRegex.test(email)) {
    // Email is valid
    document.querySelector("#grupo__registro-usuario").classList.remove('formulario__grupo-incorrecto');
    document.querySelector("#grupo__registro-usuario").classList.add('formulario__grupo-correcto');
    document.querySelector("#grupo__registro-usuario i").classList.add('fa-check-circle');
    document.querySelector("#grupo__registro-usuario i").classList.remove('fa-times-circle');
    document.querySelector("#grupo__registro-usuario .formulario__input-error").classList.remove('formulario__input-error-activo');
  } else {
    // Email is invalid
    document.querySelector("#grupo__registro-usuario").classList.add('formulario__grupo-incorrecto');
    document.querySelector("#grupo__registro-usuario").classList.remove('formulario__grupo-correcto');
    document.querySelector("#grupo__registro-usuario i").classList.add('fa-times-circle');
    document.querySelector("#grupo__registro-usuario i").classList.remove('fa-check-circle');
    document.querySelector("#grupo__registro-usuario .formulario__input-error").classList.add('formulario__input-error-activo');
  }
  if (passwordRegex.test(password)) {
    // Password is valid
    document.querySelector("#grupo__registro-password").classList.remove('formulario__grupo-incorrecto');
    document.querySelector("#grupo__registro-password").classList.add('formulario__grupo-correcto');
    document.querySelector("#grupo__registro-password i").classList.add('fa-check-circle');
    document.querySelector("#grupo__registro-password i").classList.remove('fa-times-circle');
    document.querySelector("#grupo__registro-password .formulario__input-error").classList.remove('formulario__input-error-activo');
  } else {
    // Password is invalid
    document.querySelector("#grupo__registro-password").classList.add('formulario__grupo-incorrecto');
    document.querySelector("#grupo__registro-password").classList.remove('formulario__grupo-correcto');
    document.querySelector("#grupo__registro-password i").classList.add('fa-times-circle');
    document.querySelector("#grupo__registro-password i").classList.remove('fa-check-circle');
    document.querySelector("#grupo__registro-password .formulario__input-error").classList.add('formulario__input-error-activo');
  }
  return (nameRegex.test(name) && emailRegex.test(email) && passwordRegex.test(password));

}



export function validateLogin() {
  // Traer el valor "user" key localStorage

  let userEmail = document.querySelector("#correo").value;
  let userPassword = document.querySelector("#password").value;
  let userString = localStorage.getItem(userEmail);

  // Checar si el usuario es valido
  if (userString === null) {
    // Usar una alerta si no coincide
    alert('usuario no es valido');
  } else {
    // User exists - do something with the user data
    var user = JSON.parse(userString);
    if (user.password === userPassword) {
      // Contraseña validada - hacer algo
      alert('Contaseña valida, Bienvenido');
    } else {
      // Si la contraseña es invalida - hacer otra cosa
      alert('La contraseña es invalida');
    }
  }
}
