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
    result.value = window.cipher.createCipherWithOffset(parseInt(offset.value)).encode(text.value);
});

//Aqui objetos para segunda pestaña decode

//Si se realiza el evento click llama a la funcion decode de cipher mandandole dos parametros texto y numero de desplazamientos.
buttonDecode.addEventListener('click', () => {
    result.value = window.cipher.createCipherWithOffset(offset.value).decode(text.value);
});

buttonClear.addEventListener('click', () => {
    offset.value = "1";
    text.value = "";
    result.value ="";
});
//------------Pestañas-----------------------------
function openTabbedContent(evt, idTabcontent) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(idTabcontent).style.display = "block";
    evt.currentTarget.className += " active";
}
