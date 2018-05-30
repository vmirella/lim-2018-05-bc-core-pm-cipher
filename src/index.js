// ------Traer objetos del DOM--------------------------------------------------

// Objetos de la pestaña de ENCODE

// Trae el objeto input offsetEncode
const offsetEncode = document.getElementById('offsetEncode');

// Trae el objeto textarea textEncode
const textEncode = document.getElementById('textEncode');

// Trae el objeto button encode
const buttonEncode = document.getElementById('encode');

// Trae el objeto button clearEncode
const buttonClearEncode = document.getElementById('clearEncode');

// Trae el objeto textarea resultEncode
const resultEncode = document.getElementById('resultEncode');

// Objetos de la pestaña de DECODE

// Trae el objeto input offsetDecode
const offsetDecode = document.getElementById('offsetDecode');

// Trae el objeto textarea textDecode
const textDecode = document.getElementById('textDecode');

// Trae el objeto button decode
const buttonDecode = document.getElementById('decode');

// Trae el objeto button clearDecode
const buttonClearDecode = document.getElementById('clearDecode');

// Trae el objeto textarea resultDecode
const resultDecode = document.getElementById('resultDecode');

// Objetos de las pestañas

const tabEncode = document.getElementById('tabEncode');
const tabDecode = document.getElementById('tabDecode');
const divEncode = document.getElementById('divEncode');
const divDecode = document.getElementById('divDecode');


// -----------Ejecutar eventos de botones---------------------------------------

// Eventos de la pestaña ENCODE

// Si se realiza el evento click llama a la funcion encode de cipher mandandole dos parametros texto y numero de desplazamientos.
buttonEncode.addEventListener('click', () => {
    resultEncode.value = window.cipher.createCipherWithOffset(parseInt(offsetEncode.value)).encode(textEncode.value);
});

// Si se realiza el evento de click limpia las cajas
buttonClearEncode.addEventListener('click', () => {
    offsetEncode.value = "1";
    textEncode.value = "";
    resultEncode.value ="";
});

// Eventos de la pestaña DECODE

// Si se realiza el evento click llama a la funcion decode de cipher mandandole dos parametros texto y numero de desplazamientos.
buttonDecode.addEventListener('click', () => {
    resultDecode.value = window.cipher.createCipherWithOffset(offsetDecode.value).decode(textDecode.value);
});

// Si se realiza el evento de click limpia las cajas
buttonClearDecode.addEventListener('click', () => {
    offsetDecode.value = '1';
    textDecode.value = '';
    resultDecode.value = '';
});


// ------------Eventos de Pestañas-----------------------------

tabEncode.addEventListener('click', () => {
    divEncode.style.display = 'block';
    divDecode.style.display = 'none';
    tabEncode.classList.add('active');
    tabDecode.classList.remove('active');
});

tabDecode.addEventListener('click', () => {
    divDecode.style.display = 'block';
    divEncode.style.display = 'none';
    tabDecode.classList.add('active');
    tabEncode.classList.remove('active');
});

window.onload = () => {
    tabEncode.click();
};