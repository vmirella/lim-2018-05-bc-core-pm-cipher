//referencia: https://knpuniversity.com/screencast/javascript/window-global-vars
//cuarta ventana negra de codigo
window.cipher = {
  //Funcion que codifica, recibe un texto y la cantidad de desplazamientos.
  encode: function(text, offset){
    //Trasformo el texto a mayusculas
    let textUpperCase = text.toUpperCase();
    //Separar el texto letra por letra

    let result = "";

    for (let i = 0, l = textUpperCase.length; i < l; i++) {
      //Trasformo el caracter en ASCII
      let characterAscii = textUpperCase[i].charCodeAt(0);
      //Pregunta si es una letra mayuscula contemplando su codigo ASCII
      if(characterAscii >= 65 && characterAscii <= 90){
        /*Le resto 65 para tener su posicion en abecedario,
        *le sumo el numero de posiciones a desplazarce para que tome el nuevo valor,
        *Lo divido entre 26 y tomo el residuo (se divide entre 26 que es el numero de letras del abecedario para ahorrarse el recorrido atravez de este)*/
        let valueEncode = (characterAscii - 65 + offset) % 26 + 65;
        //Volver a convertir el ASCII en letra
        let characterEncode = String.fromCharCode(valueEncode);
        result += characterEncode;
      }
      else{
        result += textUpperCase[i];
      }
    }

    //Retorna la letra encodificada
    return result;
  },
  decode: function(text, offset){
    //Trasformo el texto a mayusculas
    let textUpperCase = text.toUpperCase();
    //Separar el texto letra por letra

    let result = "";

    for (let i = 0, l = textUpperCase.length; i < l; i++) {
      //Trasformo el caracter en ASCII
      let characterAscii = textUpperCase[i].charCodeAt(0);
      //Pregunta si es una letra mayuscula contemplando su codigo ASCII
      if(characterAscii >= 65 && characterAscii <= 90){
        /*Le resto 65 para tener su posicion en abecedario,
        *le resto el numero de posiciones a desplazarce para que tome el nuevo valor,
        *Lo divido entre 26 y tomo el residuo (se divide entre 26 que es el numero de letras del abecedario para ahorrarse el recorrido atravez de este)*/
        let valueEncode = (characterAscii - 64)- (offset % 26) + 64;
        //Volver a convertir el ASCII en letra
        let characterEncode = String.fromCharCode(valueEncode);
        result += characterEncode;
      }
      else{
        result += textUpperCase[i];
      }
    }

    //Retorna la letra encodificada
    return result;
  }
};
console.log(window.cipher.encode('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 33));
console.log(window.cipher.decode('HIJKLMNOPQRSTUVWXYZABCDEFG', 33));
//var texto = document.getElementById('texto').value;
//document.getElementById('texto').value = 'Hola';
