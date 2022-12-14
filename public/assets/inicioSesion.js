form = document.getElementById("form-registro");
boton = document.getElementById("boton");


    
    function validoUser(evento) {
        
       let validUser= userName.value.length>=5;
       passValidation = /^(?=.*\d)(?=.*[a-z])\w{8,}$/;
       let validPass= passValidation.test(form.Pass.value)

        if (validUser&&validPass) {
            boton.disabled = false
        }

        else {

            boton.disabled = true
            console.log("El email ingresado no tiene un formato valido");
        }
    }


form.addEventListener("submit", (e) => submit(e));

function submit(evento) {

    evento.preventDefault();


}
