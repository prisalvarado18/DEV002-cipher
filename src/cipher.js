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
    let antes = string.charCodeAt(contador);
    //Emplear la fórmula
    let despues = (antes - 65 + numeroDesplazamientos) % 26 + 65;
    //Almacenar en la variable textoCifrado la cadena mediante el uso del método String.fromCharCode()
    //el cual usará la una secuencia de valores Unicode
    textoCifrado += String.fromCharCode(despues);
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
    let antes = string.charCodeAt(contador);
    //Emplear la fórmula
    let despues = (antes - 90 - numeroDesplazamientos) % 26 + 90;
    //Almacenar en la variable textoCifrado la cadena mediante el uso del método String.fromCharCode()
    //el cual usará la una secuencia de valores Unicode
    textoDescifrado += String.fromCharCode(despues);
  }
  return textoDescifrado;
}
export default cipher;