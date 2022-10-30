const nombre = document.getElementById("name")
const apellido = document.getElementById("surname")
const email = document.getElementById("email")
const comentario = document.getElementById("comment")
const formulario = document.getElementById("form1")
const notificacion1 = document.getElementById("warnings1")
const notificacion2 = document.getElementById("warnings2")
const notificacion3 = document.getElementById("warnings3")
const notificacion4 = document.getElementById("warnings4")

formulario.addEventListener("submit", e=>{
    e.preventDefault()
    let warning1 =""
    let warning2 =""
    let warning3 =""
    let warning4 =""
    let expreregMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    let expreRegCampNom = /^[a-zA-ZÀ-ÿ\s]{1,40}$/
    let expreRegCampApe = /^[a-zA-ZÀ-ÿ\s]{1,40}$/
    let expreRegCampCom = /^[a-zA-Z0-9\_\-]{10,50}$/
    notificacion1.innerHTML = ""
    notificacion2.innerHTML = ""
    notificacion3.innerHTML = ""
    notificacion4.innerHTML = ""

    if(nombre.value.length < 41 ) {
        if (!expreRegCampNom.test(nombre.value)){
            warning1 = `El campo Nombre no es valido . <br>`
            notificacion1.innerHTML = warning1
        }
    }
    if(apellido.value.length < 41 ){
        if (!expreRegCampApe.test(apellido.value)){
            warning2 = `El Apellido no es válido <br>`
            notificacion2.innerHTML = warning2
        }
    }
    if (!expreregMail.test(email.value)){
        warning3 = `El email no es válido <br>`
        notificacion3.innerHTML = warning3
    }
    if(comentario.value.length < 51){
        if (!expreRegCampCom.test(comentario.value)){
            warning4 = `El Comentario debe tener mas de 10 caracteres <br>`
            notificacion4.innerHTML = warning4
        }
    }


})

document.addEventListener('DOMContentLoaded', function(){
    let formulario = document.getElementById('form1');
    formulario.addEventListener('submit', function() {
      formulario.reset();
    });
  });
