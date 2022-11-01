import cipher from './cipher.js';

let ingreso_texto = document.getElementById("ingreso_texto");//Selecciona el texto ingresado por el usuario
let ingreso_desplazamientos = document.getElementById("ingreso_desplazamientos");//Selecciona la clave ingresada por el usuario
let botonCifrar = document.getElementById("boton_codificar"); //Selecciona el botón "Cifrar"
let botonDescifrar = document.getElementById("boton_decodificar"); //Selecciona el botón "Descifrar"
let output = document.getElementById("output");//Selecciona el mensaje de respuesta


//Función que envía el input del usuario a cipher.js y ejecuta "encode"
const mostrarMensajeCifrado =()=>{
    let cadena = ingreso_texto.value;//Guarda al texto ingresado por el usuario inicialmente
    let desplazamiento = ingreso_desplazamientos.value;//Guarda a la clave ingresada por el usuario inicialmente
    output.innerHTML = cipher.encode(desplazamiento,cadena);//Cambia el texto con el resultado de llamar a "encode" 
}

//Cuando el usuario de click en "CIFRAR" ejecutará la función "mostrarMensajeCifrado" 
botonCifrar.addEventListener('click', mostrarMensajeCifrado)

//Función que envía el input del usuario a cipher.js y ejecuta "decode"
const mostrarMensajeDescifrado =()=>{
    let cadena = ingreso_texto.value;//Guarda al texto ingresado por el usuario inicialmente
    let desplazamiento = ingreso_desplazamientos.value;//Guarda a la clave ingresada por el usuario inicialmente
    output.innerHTML = cipher.decode(desplazamiento,cadena);//Cambia el texto con el resultado de llamar a "decode"
}

//Cuando el usuario de click en "DESCIFRAR" ejecutará la función "mostrarMensajeDescifrado" 
botonDescifrar.addEventListener('click', mostrarMensajeDescifrado)

console.log(cipher);
console.log(cipher.encode(2,"A"))
console.log(cipher.decode(2,"A"))