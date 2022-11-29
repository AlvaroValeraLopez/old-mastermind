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

function validateForm(event){
    if(!validateNick()){
        nickField.focus();
        event.preventDefault();
        console.log("El campo nick no ha sido rellenado correctamente.");
    }else if(!validateSize()){
        sizeSelect.focus();
        event.preventDefault();
        console.log("El campo nick no ha sido rellenado correctamente.");
    }
}

/* INICIALIZACIÓN DE CONSTANTES. */
const form = document.getElementById('form');
const nickField = document.getElementById('nick');
const sizeSelect = document.getElementById('size');

/* CREACIÓN DEL LISTENER AL SUBMIT. */
form.addEventListener('submit', validateForm);