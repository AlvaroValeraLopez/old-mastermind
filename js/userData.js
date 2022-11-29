function userData(nick){
    sessionStorage.setItem('nick', nick.value);
}

function mostrarDatosUsuario(){
    let nick = sessionStorage.getItem('nick');
    console.log(nick);
}