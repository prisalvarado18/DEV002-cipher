//import cipher from './cipher.js';

let ingreso_texto = document.getElementById("ingreso_texto");
let ingreso_desplazamientos = document.getElementById("ingreso_desplazamientos");
let output = document.getElementById("output");


const mostrarMensajeCifrado =()=>{
    let cadena = ingreso_texto.value;//Guarda al texto ingresado por el usuario inicialmente
    let desplazamiento = ingreso_desplazamientos.value;//Guarda a la clave ingresada por el usuario inicialmente
    output.innerHTML = cipher.encode(desplazamiento,cadena);//Cambia el texto con el resultado del método 
}

const mostrarMensajeDescifrado =()=>{
    let cadena = ingreso_texto.value;//Guarda al texto ingresado por el usuario inicialmente
    let desplazamiento = ingreso_desplazamientos.value;//Guarda a la clave ingresada por el usuario inicialmente
    output.innerHTML = cipher.decode(desplazamiento,cadena);//Cambia el texto con el resultado del método 
}

//console.log(cipher);
//console.log(codificar);
