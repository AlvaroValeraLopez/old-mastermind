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

function printErrorMsg(field = null, event = null){
    
    let error = sessionStorage.getItem('error');

    if(field != null) field.focus();
    if(event != null) event.preventDefault();
    if(error != null){
        errorMsg.innerText = error;
        sessionStorage.removeItem('error');
        document.getElementById("errorPanel").style.display = "flex";
        return false;
    }

    return true;
}
function validateForm(event){

    if(!validateNick()) return printErrorMsg(nickField, event);
    else if(!validateEmail()) return printErrorMsg(emailField, event);
    else if(!validateSize()) return printErrorMsg(sizeSelect, event);
        
    userData(nickField);
    return true;
}

/* INICIALIZACIÓN DE CONSTANTES. */
const form = document.getElementById('form');
const nickField = document.getElementById('nick');
const sizeSelect = document.getElementById('size');
const emailField = document.getElementById('email');
const errorMsg = document.getElementById('errorMsg');

/* VALIDAMOS QUE NO EXISTA NINGUN ERROR. */
printErrorMsg();

/* CREACIÓN DEL LISTENER AL SUBMIT. */
form.addEventListener('submit', validateForm);