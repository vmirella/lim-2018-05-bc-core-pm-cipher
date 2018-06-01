window.cipher = {
  encode: (offset, text) => {
    let result = '';
    for (let i = 0; i < text.length; i++) {
      let characterAscii = text[i].charCodeAt(0);
      let valueEncode = '';
      let characterEncode = '';
      if (characterAscii >= 65 && characterAscii <= 90) {
        valueEncode = (characterAscii - 65 + offset) % 26 + 65;
        characterEncode = String.fromCharCode(valueEncode);
        result += characterEncode;
      } else if (characterAscii >= 97 && characterAscii <= 122) {
        valueEncode = (characterAscii - 97 + offset) % 26 + 97;
        characterEncode = String.fromCharCode(valueEncode);
        result += characterEncode;
      } else {
        result += text[i];
      }
    }
    return result;
  },
  decode: (offset, text) => {
    let result = '';
    for (let i = 0; i < text.length; i++) {
      let characterAscii = text[i].charCodeAt(0);
      let valueDecode = '';
      let characterDecode = '';
      if (characterAscii >= 65 && characterAscii <= 90) {
        valueDecode = (characterAscii + 65 - offset) % 26 + 65;
        characterDecode = String.fromCharCode(valueDecode);
        result += characterDecode;
      } else if (characterAscii >= 97 && characterAscii <= 122) {
        valueDecode = (characterAscii - 122 - offset) % 26 + 122;
        characterDecode = String.fromCharCode(valueDecode);
        result += characterDecode;
      } else {
        result += text[i];
      }
    }    
    return result;
  },
  createCipherWithOffset: (offset) => {
    return {
      encode: (text) => { 
        let result = '';    
        for (let i = 0; i < text.length; i++) {
          let characterAscii = text[i].charCodeAt(0);
          let valueEncode = '';
          let characterEncode = '';
          if (characterAscii >= 65 && characterAscii <= 90) {
            valueEncode = (characterAscii - 65 + offset) % 26 + 65;
            characterEncode = String.fromCharCode(valueEncode);
            result += characterEncode;
          } else if (characterAscii >= 97 && characterAscii <= 122) {
            valueEncode = (characterAscii - 97 + offset) % 26 + 97;
            characterEncode = String.fromCharCode(valueEncode);
            result += characterEncode;
          } else {
            result += text[i];
          }
        }    
        return result;
      },
      decode: (text) => {
        let result = '';  
        for (let i = 0; i < text.length; i++) {
          let characterAscii = text[i].charCodeAt(0);
          let valueDecode = '';
          let characterDecode = '';
          if (characterAscii >= 65 && characterAscii <= 90) {
            valueDecode = (characterAscii + 65 - offset) % 26 + 65;
            characterDecode = String.fromCharCode(valueDecode);
            result += characterDecode;
          } else if (characterAscii >= 97 && characterAscii <= 122) {
            valueDecode = (characterAscii - 122 - offset) % 26 + 122;
            characterDecode = String.fromCharCode(valueDecode);
            result += characterDecode;
          } else {
            result += text[i];
          }
        }  
        return result;
      }
    }
  }
};
