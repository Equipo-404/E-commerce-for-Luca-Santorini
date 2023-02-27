export function validate() {
  // Define la entrada de valores
  var nameRegex = /^[a-zA-Z ]{2,30}$/;
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  var passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,20}$/;
  
  // Define mensaje de error
  let nameError = 'Ingresa un nombre valido.';
  let emailError = 'Introduce una direccion de correo valido.';
  let passwordError = 'La contraseña debe tener entre 8-20 caractes entre ellas debe haber al menos un numero y una letra mayuscula y minuscula .';
  
  
  var regnameValue = document.getElementById('regname').value;
  var regemailValue = document.getElementById('regemail').value;
  var regpassValue = document.getElementById('regpass').value;
  
  // Valida el nombre
  if (!nameRegex.test(regnameValue)) {
    alert(nameError);
    return false;
  }
  
  // Valida correo
  if (!emailRegex.test(regemailValue)) {
    alert(emailError);
    return false;
  }
  
  // Valida contraseña
  if (!passwordRegex.test(regpassValue)) {
    alert(passwordError);
              
    return false;
  }
  
  
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
  