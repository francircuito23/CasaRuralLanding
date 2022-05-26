let form;
let errores;


window.onload = function(){
    document.body.style.setProperty("opacity","1");

    form = document.getElementById("formContactoReserva");
    let fields = form.querySelectorAll('input,select,textarea');
    for (let i = 0; i < fields.length; i++) {
        fields[i].addEventListener("change",validacionDatos);
    }
    console.log(document.getElementById("sendButton"));
    document.getElementById("sendButton").addEventListener("click",preventSend);
}

function preventSend(e){
    e.preventDefault();
    if (validacionDatos() === true) {
        //validateRecaptcha();
        
        //Mientras no funcion el catpcha, envio aqui. Cuando funcione, enviar por validateRecaptcha()

        form.submit();
        
    }
}

//VALIDACIÓN CAPTCHA
function validateRecaptcha() {
    var response = grecaptcha.getResponse();
    if (response.length === 0) {
        alert("validate the Captcha");
        //return false;
    } else {
        //Enviar el formulario o permitir enviarlo
        form.submit();
        document.getElementById("sendButton").removeEventListener("click",preventSend);
        /*document.getElementById("sendButton").addEventListener("click", function(){
            document.getElementById("form-congress-data").submit();
        });*/

        //return true;
    }
}


function validacionDatos(){
    

    errores = 0;
   

    //Persona Contacto
    if(form.personaContacto.value == null || form.personaContacto.value.length < 3 ||  /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(form.personaContacto.value)){
        if(form.personaContacto.value !=""){
            form.personaContacto.style.setProperty("border","1px solid red");       
            
        }
        errores++;
        
    }
    else{
        form.personaContacto.style.setProperty("border","");
       
    }


    //EMAIL
    if (!(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(form.email.value))) {
        if(form.email.value !=""){
            form.email.style.setProperty("border","1px solid red");
        }
        errores++;
    }
    else{
        form.email.style.setProperty("border","");
    }




    //telefono
    if ((!(/^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g.test(form.telefono.value)))||(form.telefono.value.length<8)) {
        if(form.telefono.value !=""){
            form.telefono.style.setProperty("border","1px solid red");
        }
        errores++;
    }
    else{
        form.telefono.style.setProperty("border","");
    }

   /* //Asunto
    if ((form.asunto.value == null )||(form.asunto.value.length<2)) {
        if(form.asunto.value !=""){
            form.asunto.style.setProperty("border","1px solid red");
        }
        errores++;
    }
    else{
        form.asunto.style.setProperty("border","");
    }
    */

    //Mensaje
    if ((form.mensaje.value == null )||(form.mensaje.value.length<2)) {
        if(form.mensaje.value !=""){
            form.mensaje.style.setProperty("border","1px solid red");
        }
        errores++;
    }
    else{
        form.mensaje.style.setProperty("border","");
    }

    //Checkbox políticas
    if ((form.mensaje.value == null )||(form.mensaje.value.length<2)) {
        if(form.mensaje.value !=""){
            form.mensaje.style.setProperty("border","1px solid red");
        }
        errores++;
    }
    else{
        form.mensaje.style.setProperty("border","");
    }




   
    
    if(errores==0){
        return true;
    }
    else{
        return false;
    }
    
}

