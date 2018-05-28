//Trae el objeto input offset
const offset = document.getElementById('offset');

//Trae el objeto textarea text
const text = document.getElementById('text');

//Trae el objeto button encode
const buttonEncode = document.getElementById('encode');

//Trae el objeto button decode
const buttonDecode = document.getElementById('decode');

//Trae el objeto button clear
const buttonClear = document.getElementById('clear');

//Trae el objeto textarea result
const result = document.getElementById('result');

//Si se realiza el evento click llama a la funcion encode de cipher mandandole dos parametros texto y numero de desplazamientos.
buttonEncode.addEventListener('click', () => {
    result.value = window.cipher.encode(parseInt(offset.value), text.value);
});

//Si se realiza el evento click llama a la funcion decode de cipher mandandole dos parametros texto y numero de desplazamientos.
buttonDecode.addEventListener('click', () => {
    result.value = window.cipher.decode(parseInt(offset.value), text.value);
});

buttonClear.addEventListener('click', () => {
    offset.value = "1";
    text.value = "";
    result.value ="";
});
