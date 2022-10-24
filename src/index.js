//import cipher from './cipher.js';
//Llamar al input del usuario
let llamarCadena = document.getElementById("mensaje");
//Llamar al numero de posiciones que ingresa el usuario
let llamarPosicion = document.getElementById("posicion");
//Mostrar el resultado
let respuesta = document.getElementById("respuesta");
let resultado = document.getElementById("resultado");
let mensajeFinal = document.getElementById("mensajeFinal");

const codificar = () => {
    let string = llamarCadena.value;
    let offset = llamarPosicion.value;
    
    respuesta.style.display = "block";
    mensajeFinal.innerHTML = "Mensaje codificado: ";
    resultado.innerHTML = cipher.encode(offset,string);
};

//console.log(cipher);
