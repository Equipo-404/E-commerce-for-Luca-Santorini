const formulario = document.getElementById("formualrio");

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    fetch('https://sheet.best/api/sheets/c7381bca-fcf9-45c2-a868-9f91d16171bb', {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "Nombre": formulario.user_name.value,
            "Correo": formulario.user_mail.value,
            "Numero": formulario.user_phone.value,
            "Mensaje": formulario.user_message.value
        })
    });

    // alert ("Mensaje registrado éxitosamente");
});