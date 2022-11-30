var nick;

function userData(nick){
    sessionStorage.setItem('nick', nick.value);
}

function getUserData(){
    nick = sessionStorage.getItem('nick');
    console.log(nick);
}

function validateNickNotNull(){
    if(nick == null){
        sessionStorage.setItem('error', "No se ha rellenado el formulario correctamente.");
        return false;
    }
    return true;
}