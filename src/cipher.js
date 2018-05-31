window.cipher = {
  encode: (offset, text) => {
    //let textUpperCase = text.toUpperCase();
    let result = '';
    
    for (let i = 0, l = text.length; i < l; i++) {
      let characterAscii = text[i].charCodeAt(0);
      if(characterAscii >= 65 && characterAscii <= 90){
        let valueEncode = (characterAscii + 65 + offset) % 26 + 65;
        let characterEncode = String.fromCharCode(valueEncode);
        result += characterEncode;
      }
      else if(characterAscii >= 97 && characterAscii <= 122){
        let valueEncode = (characterAscii + 97 + offset) % 26 + 97;
        let characterEncode = String.fromCharCode(valueEncode);
        result += characterEncode;
      }
      else{
        result += text[i];
      }
    }
    return result;
  },
  decode: (offset, text) => {
    let textUpperCase = text.toUpperCase();
    let result = '';
    for (let i = 0, l = textUpperCase.length; i < l; i++) {
      let characterAscii = textUpperCase[i].charCodeAt(0);
      if(characterAscii >= 65 && characterAscii <= 90){
        let valueDecode = (characterAscii + 65 - offset) % 26 + 65;
        let characterDecode = String.fromCharCode(valueDecode);
        result += characterDecode;
      }
      else{
        result += textUpperCase[i];
      }
    }
    return result;
  },
  createCipherWithOffset: (offset) => {
    return {
      encode: (text) => {
        //let textUpperCase = text.toUpperCase();  
        let result = '';
    
        for (let i = 0, l = text.length; i < l; i++) {
          let characterAscii = text[i].charCodeAt(0);
          if(characterAscii >= 65 && characterAscii <= 90){
            let valueEncode = (characterAscii - 65 + offset) % 26 + 65;
            let characterEncode = String.fromCharCode(valueEncode);
            result += characterEncode;
          }
          else if(characterAscii >= 97 && characterAscii <= 122){
            let valueEncode = (characterAscii - 97 + offset) % 26 + 97;
            let characterEncode = String.fromCharCode(valueEncode);
            result += characterEncode;
          }
          else{
            result += text[i];
          }
        }    
        return result;
      },
      decode: (text) => {
        //let textUpperCase = text.toUpperCase();
        let result = '';

        for (let i = 0, l = text.length; i < l; i++) {
          let characterAscii = text[i].charCodeAt(0);
          if(characterAscii >= 1 && characterAscii <= 122){
            let valueDecode = (characterAscii -122 - offset) % 26 + 122;
            let characterDecode = String.fromCharCode(valueDecode);
            result += characterDecode;
          }
          else{
            result += text[i];
          }
        }
        return result;
      }
    }
  }
};

