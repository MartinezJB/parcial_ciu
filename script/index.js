let botonIngreso = document.querySelector("#entrar");

const tirarMensaje = function(lugarDondeMostrar, mensaje) {
    if(document.querySelector(lugarDondeMostrar).textContent != mensaje){
        document.querySelector(lugarDondeMostrar).innerHTML = `<p class="mensaje-error">${mensaje}</p>`;
    }
    
}

const validarDatos = function() {
    event.preventDefault();
    let user = document.querySelector("#user").value;
    let password = document.querySelector("#password").value;
    
    if( esUsuarioValido(user) && esContraseñaValida(password) ){
        window.location.href = "./principal.html"
    }else {
        mostrarErrores(user, password)
    }
}

const esUsuarioValido = (user) => !isNaN(user);

const esContraseñaValida = (contra) => contra.length >= 4;

function mostrarErrores(user, password) {
    // user == "" ? tirarMensaje("#erroresUsuario", "* Por favor, complete este campo.")
    // : tirarMensaje("#erroresUsuario", "");

    isNaN(user) ? tirarMensaje("#erroresUsuario", "* El usuario solo puede ser números.")
        : tirarMensaje("#erroresUsuario", "");


    password.length < 4 ? tirarMensaje("#erroresContraseña", "* Contraseña demasiado corta.")
        : tirarMensaje("#erroresContraseña", "");
}


botonIngreso.addEventListener("click", validarDatos);