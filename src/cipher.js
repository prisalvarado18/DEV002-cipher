const cipher = {
  // ...
  //Crear el metodo cipher.encode(offset,string) para CIFRAR
  encode:(offset, string)=>{
    //Convertir el offset ingresado en numero y almacenarlo en una variable
    const posicion = parseInt(offset);
    //Crear una variable que almacene el input del usuario
    let mensajeCifrado ="";
    //Crear un ciclo que recorra cada un de las letras del input del usuario
    //y que sume las posiciones indicadas
    let i = 0;
    for (i;i<string.length;i++){
      let antes = string.charCodeAt(i);
      let despues = (antes-65+posicion)%26+65;
      mensajeCifrado+=String.fromCharCode(despues);
    }
    return mensajeCifrado;
  }
  //Crear el metodo cipher.decode(offset,string)
  
};

//export default cipher;
