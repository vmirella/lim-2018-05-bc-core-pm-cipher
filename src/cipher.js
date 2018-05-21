//referencia: https://knpuniversity.com/screencast/javascript/window-global-vars
//cuarta ventana negra de codigo
window.cipher = {
  //Funcion que codifica, recibe un caracter y la cantidad de desplazamientos.
  encode: function(character, offset){
    //Trasformo el caracter en ASCII
    var characterAscii = character.charCodeAt(0);
    /*Le resto 65 para tener su posicion en abecedario,
     *le sumo el numero de posiciones a desplazarce para que tome el nuevo valor,
     *Lo divido entre 26 y tomo el residuo (se divide entre 26 que es el numero de letras del abecedario para ahorrarse el recorrido atravez de este)*/
    var valueEncode = (characterAscii - 65 + offset) % 26 + 65;
    //Volver a convertir el ASCII en letra
    var characterEncode = String.fromCharCode(valueEncode);
    //Retorna la letra encodificada
    return characterEncode;
  },
  decode: function(character,offset){
    //Trasformo el caracter en ASCII
    var characterAscii = character.charCodeAt(0);
    /*Le resto 65 para tener su posicion en abecedario,
     *le resto el numero de posiciones a desplazarce para que tome el nuevo valor,
     *Lo divido entre 26 y tomo el residuo (se divide entre 26 que es el numero de letras del abecedario para ahorrarse el recorrido atravez de este)*/
    var valueDecode = (characterAscii - 65 - offset) % 26 + 65;
     //Volver a convertir el ASCII en letra
     var characterDecode = String.fromCharCode(valueDecode);
     //Retorna la letra decodificada
    return characterDecode;
  }
};
console.log(window.cipher.encode('Z', 5));
console.log(window.cipher.decode('D', 3));
var texto = document.getElementById('texto').value;
document.getElementById('texto').value = 'Hola';
