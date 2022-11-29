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
        errorMsg.innerText ="El campo Nick no puede estar vacio.";
        document.getElementById("errorPanel").style.display = "flex";
        
    }else if(!validateSize()){
        sizeSelect.focus();
        event.preventDefault();
        errorMsg.innerText ="El campo Size no puede estar vacio.";
        document.getElementById("errorPanel").style.display = "flex";
    }
}

/* INICIALIZACIÓN DE CONSTANTES. */
const form = document.getElementById('form');
const nickField = document.getElementById('nick');
const sizeSelect = document.getElementById('size');
const errorMsg = document.getElementById('errorMsg');

/* CREACIÓN DEL LISTENER AL SUBMIT. */
form.addEventListener('submit', validateForm);