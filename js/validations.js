/* CREACIÓN DE LAS FUNCIONES. */
function validateNick(){
    if(nickField.value.length == 0)
        return false;
    return true;
}

function validateSize(){
    if(sizeSelect.value == "0")
        return false;
    return true;
}

function validateEmail(){
    return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(emailField.value) && emailField.value.length != 0; 
}

function validateForm(event){
    if(!validateNick()){
        nickField.focus();
        event.preventDefault();
        errorMsg.innerText ="El campo Nick no puede estar vacio.";
        document.getElementById("errorPanel").style.display = "flex";
        return false;
    }else if(!validateEmail()){
        emailField.focus();
        event.preventDefault();
        errorMsg.innerText ="El correo electrónico introducido no es válido.";
        document.getElementById("errorPanel").style.display = "flex";
        return false;
    }else if(!validateSize()){
        sizeSelect.focus();
        event.preventDefault();
        errorMsg.innerText ="El campo Size no puede estar vacio.";
        document.getElementById("errorPanel").style.display = "flex";
        return false;
    }

    userData(nickField);
    return true;
}

/* INICIALIZACIÓN DE CONSTANTES. */
const form = document.getElementById('form');
const nickField = document.getElementById('nick');
const sizeSelect = document.getElementById('size');
const emailField = document.getElementById('email');
const errorMsg = document.getElementById('errorMsg');

/* CREACIÓN DEL LISTENER AL SUBMIT. */
form.addEventListener('submit', validateForm);