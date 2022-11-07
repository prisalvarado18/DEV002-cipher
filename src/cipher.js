//Object function "cipher" que llama a las funciones "encode" y "decode"
const cipher = {
  // ...
  encode,
  decode
};

//Crear el metodo cipher.encode(offset,string) para CIFRAR
function encode (offset,string) {
  //Crear una variable que almacene el texto cifrado
  let textoCifrado ="";
  //Convertir el offset ingresado (cadena) en numero (entero) y almacenarlo en una variable
  const numeroDesplazamientos = parseInt(offset);

  let longitudCadena = string.length;

  if(string ==="" || longitudCadena === 0 || offset==="null" || offset === 0){
    throw new TypeError();
  }

  //Crear un ciclo que recorra cada un de las letras del input del usuario
  //y que sume las posiciones indicadas
  let contador = 0;
  for(contador;contador<longitudCadena;contador++){ 
    //Crear una variable que almacene cada caracter del texto ingresado por el usuario
    //y devuelva un número indicando su valor Unicode
    let unicodeIngresado = string.charCodeAt(contador);
    //Crear un controlador para minúsculas
    if(unicodeIngresado > 96 & unicodeIngresado < 123){
      //Emplear la fórmula
      let unicodeCifrado = (unicodeIngresado - 97 + numeroDesplazamientos) % 26 + 97;
      //Almacenar en la variable textoCifrado la cadena mediante el uso del método String.fromCharCode()
      //el cual usará la una secuencia de valores Unicode
      textoCifrado += String.fromCharCode(unicodeCifrado);
    }
    //Crear un controlador para mayúsculas
    else if(unicodeIngresado > 64 & unicodeIngresado < 91){
      //Emplear la fórmula
      let unicodeCifrado = (unicodeIngresado - 65 + numeroDesplazamientos) % 26 + 65;
      //Almacenar en la variable textoCifrado la cadena mediante el uso del método String.fromCharCode()
      //el cual usará la una secuencia de valores Unicode
      textoCifrado += String.fromCharCode(unicodeCifrado);
    }
    //Cifrar números y caracteres especiales
    /*else if(unicodeIngresado > 32 & unicodeIngresado < 65){
      let unicodeCifrado = (unicodeIngresado - 33 + numeroDesplazamientos) % 32 + 33;
      textoCifrado += String.fromCharCode(unicodeCifrado);
    }
    else if(unicodeIngresado > 122 & unicodeIngresado < 255){
      let unicodeCifrado = (unicodeIngresado - 123 + numeroDesplazamientos) % 132 + 123;
      textoCifrado += String.fromCharCode(unicodeCifrado);
    //Imprimir espacios y el resto de caracteres tal cual
    }*/
    else{
      textoCifrado += String.fromCharCode(unicodeIngresado);
    }
  }
  return textoCifrado;
}

//Crear el metodo cipher.decode(offset, string) para DESCIFRAR
function decode (offset,string)  {
  //Crear una variable que almacene el texto descifrado
  let textoDescifrado ="";
  //Convertir el offset ingresado (cadena) en numero (entero) y almacenarlo en una variable
  const numeroDesplazamientos = parseInt(offset);

  let longitudCadena = string.length;

  if(string ==="" || longitudCadena === 0 || offset==="null" || offset === 0){
    throw new TypeError();
  }

  //Crear un ciclo que recorra cada un de las letras del input del usuario
  //y que sume las posiciones indicadas
  let contador = 0;
  for(contador;contador<longitudCadena;contador++){ 
    //Crear una variable que almacene cada caracter del texto ingresado por el usuario
    //y devuelva un número indicando su valor Unicode
    let unicodeIngresado = string.charCodeAt(contador);
    //Crear un controlador para minúsculas
    if(unicodeIngresado > 96 & unicodeIngresado < 123){
      //Emplear la fórmula
      let unicodeDescifrado = (unicodeIngresado - 122 - numeroDesplazamientos) % 26 + 122;
      //Almacenar en la variable textoDescifrado la cadena mediante el uso del método String.fromCharCode()
      //el cual usará la una secuencia de valores Unicode
      textoDescifrado += String.fromCharCode(unicodeDescifrado);
    }
    //Crear un controlador para mayúsculas
    else if(unicodeIngresado > 64 & unicodeIngresado < 91){
      //Emplear la fórmula
      let unicodeDescifrado = (unicodeIngresado - 90 - numeroDesplazamientos) % 26 + 90;
      //Almacenar en la variable textoDescifrado la cadena mediante el uso del método String.fromCharCode()
      //el cual usará la una secuencia de valores Unicode
      textoDescifrado += String.fromCharCode(unicodeDescifrado);
    }
    //Descifrar números y caracteres especiales
    /*else if(unicodeIngresado > 32 & unicodeIngresado < 65){
      let unicodeDescifrado = (unicodeIngresado - 64 - numeroDesplazamientos) % 32 + 64;
      textoDescifrado += String.fromCharCode(unicodeDescifrado);
    }
    else if(unicodeIngresado > 122 & unicodeIngresado < 255){
      let unicodeDescifrado = (unicodeIngresado - 254 - numeroDesplazamientos) % 132 + 254;
      textoDescifrado += String.fromCharCode(unicodeDescifrado);
    //Imprimir espacios y el resto de caracteres tal cual
    }*/
    else {
      textoDescifrado += String.fromCharCode(unicodeIngresado);
    }
  }
  return textoDescifrado;
}
export default cipher;