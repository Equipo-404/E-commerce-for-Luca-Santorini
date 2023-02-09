let name = document.getElementById("name");
let email = document.getElementById("mail");
let phone = document.getElementById("phone");
let msg = document.getElementById("msg");

let enviarContacto = document.getElementById("enviarContacto");

enviarContacto.addEventListener("click",(name) =>{
    alert ("Hola, "+ name + ". Actualemente el servicio no funciona completamente, disculpa las molestias :)");
})