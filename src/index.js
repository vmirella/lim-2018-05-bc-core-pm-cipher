const offsetEncode = document.getElementById('offsetEncode');
const textEncode = document.getElementById('textEncode');
const buttonEncode = document.getElementById('encode');
const buttonClearEncode = document.getElementById('clearEncode');
const resultEncode = document.getElementById('resultEncode');

const offsetDecode = document.getElementById('offsetDecode');
const textDecode = document.getElementById('textDecode');
const buttonDecode = document.getElementById('decode');
const buttonClearDecode = document.getElementById('clearDecode');
const resultDecode = document.getElementById('resultDecode');

const tabEncode = document.getElementById('tabEncode');
const tabDecode = document.getElementById('tabDecode');
const divEncode = document.getElementById('divEncode');
const divDecode = document.getElementById('divDecode');

buttonEncode.addEventListener('click', () => {
    resultEncode.value = window.cipher.createCipherWithOffset(parseInt(offsetEncode.value)).encode(textEncode.value);
});

buttonClearEncode.addEventListener('click', () => {
    offsetEncode.value = "1";
    textEncode.value = "";
    resultEncode.value ="";
});

buttonDecode.addEventListener('click', () => {
    resultDecode.value = window.cipher.createCipherWithOffset(offsetDecode.value).decode(textDecode.value);
});

buttonClearDecode.addEventListener('click', () => {
    offsetDecode.value = '1';
    textDecode.value = '';
    resultDecode.value = '';
});

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