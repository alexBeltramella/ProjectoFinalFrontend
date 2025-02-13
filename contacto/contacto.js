let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let email = document.getElementById("email");
let telefono = document.getElementById("telefono");
let mensaje = document.getElementById("mensaje");
let btnEnviar = document.getElementById("enviar");
let informacion = [];

btnEnviar.addEventListener("click", (e) => {
    e.preventDefault(); //previene la accion del form de actualizar la pagina
    
    if(nombre.value == "" || apellido.value == "" || email.value == "", telefono.value == "") {
        alert("Valores ingresados incorrectos, por favor ingreselos correctamente.");
        return;
    }
    
    informacion[0] = "Nombre: "+ nombre.value + " | ";
    informacion[1] = "Apellido: " + apellido.value + " | ";
    informacion[2] = "Email: " + email.value + " | ";
    informacion[3]= "Telefono:" + telefono.value + " | ";
    informacion[4]= "Mensaje: "+ mensaje.value + " | ";



    // console.log(`Su nombre es ${informacion[0]} , su apellido es ${informacion[1]} `);

    let blob = new Blob(informacion, {type: "text/plain;charset=utf-8"});

    //libreria file.js
    saveAs(blob, "contacto.txt");


    
})




