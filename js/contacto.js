let txtNombre = document.getElementById("nombre");
let btnEnviar = document.getElementById("send");
let alertValidaciones = document.getElementById("alertValidaciones");
let alertValidaciones1 = document.getElementById("alertValidaciones1");
let txtEmail = document.getElementById("correo");
let txtMensaje = document.getElementById("mensaje");


function validarEmail() {
    let re = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    return re.test(txtEmail.value);
}

function validarEnvio() {
    let isValid = true;

    if (txtNombre.value.length < 3) {
        alertValidaciones.innerHTML = "El campo <strong> Nombre </strong> es requerido <br/>";
        alertValidaciones.style.display = "block";
        txtNombre.style.border = "solid thin red";
        isValid = false;
    }

    if (!validarEmail()) {
        alertValidaciones.innerHTML += "El campo <strong>Correo</strong> es requerido <br/>";
        alertValidaciones.style.display = "block";
        txtEmail.style.border = "solid thin red";
        isValid = false;
    }

    if (txtMensaje.value.length < 10) {
        alertValidaciones.innerHTML += "El campo <strong> Mensaje </strong> es requerido <br/>";
        alertValidaciones.style.display = "block";
        txtMensaje.style.border = "solid thin red";
        isValid = false;
    }

    return isValid;
}

btnEnviar.addEventListener("click", function (event) {
    event.preventDefault();
    alertValidaciones.innerHTML = "";
    alertValidaciones.style.display = "none";
    txtNombre.style.border = "";
    txtEmail.style.border = "";
    txtMensaje.style.border = "";

    if (validarEnvio()) {
        var templateParams = {
            name: txtNombre.value,
            email: txtEmail.value,
            message: txtMensaje.value
        };

        emailjs.send('service_rcg3qmj', 'template_7xefi1t', templateParams)
            .then(function (response) {
                Swal.fire({
                    icon: 'success',
                    title: '¡Gracias por contactarme!',
                });
                console.log('SUCCESS!', response.status, response.text);
            }, function (error) {
                console.log('FAILED...', error);
            });

        txtNombre.value = "";
        txtEmail.value = "";
        txtMensaje.value = "";
    } else {
        alertValidaciones.innerHTML += "<strong>Por favor </strong> completa los campos necesarios <br/>";
        alertValidaciones.style.display = "block";
    }
});

