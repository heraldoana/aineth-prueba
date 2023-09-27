//cambiar idiomas con botones (banderitas)
/* 
let idiomaEs = document.getElementById('idiomaEs')
let idiomaEn = document.getElementById('idiomaEn')
idiomaEn.onclick = () => cambiarIdiomaEn ()
function cambiarIdiomaEn() {
    changeTextEnglish()
}
idiomaEs.onclick = () => cambiarIdiomaEs ()
function cambiarIdiomaEs() {
    changeTextSpanish()
}

let aiText = document.getElementById('aiText');
let currentText = 0
const textOptionsEnglish = ["partner", "friend", "college"]
const textOptionsSpanish = ["compañeros", "amigos", "colegio"]
function changeTextEnglish() {
    currentText = (currentText + 1) % textOptionsEnglish.length
    aiText.textContent = `The AI ${textOptionsEnglish[currentText]} for businesses and people.`
    setInterval(changeTextEnglish, 3000) // Cambia cada 3 segundos (3000 milisegundos)
}
function changeTextSpanish() {
    currentText = (currentText + 1) % textOptionsSpanish.length
    aiText.textContent = `La inteligencia artificial de ${textOptionsSpanish[currentText]} para trabajos y personas.`
    setInterval(changeTextSpanish, 3000); // Cambia cada 3 segundos (3000 milisegundos)
} */


/* // Cambiar el comportamiento del bot según el idioma
const inicioSesionBtn = document.getElementById('provebot')
inicioSesionBtn.addEventListener('click', function () {
    if (language === 'es') {
        // Lógica para abrir el bot de aineth.ai en español
    } else if (language === 'en') {
        // Lógica para abrir el bot de aineth.ai en inglés
    }
}) */

document.addEventListener('DOMContentLoaded', function () {
    const titulo = document.getElementById('aiText');


    const palabras = ['partner', 'friend', 'college'];
    let indicePalabra = 0;

    // Función para cambiar la palabra y color
    function cambiarPalabra() {
        titulo.textContent = titulo.textContent.replace(palabras[indicePalabra], palabras[(indicePalabra + 1) % palabras.length]);
        titulo.classList.toggle('blue-text');
        indicePalabra = (indicePalabra + 1) % palabras.length;
    }

    // Cambiar la palabra cada 2 segundos
    setInterval(cambiarPalabra, 2000);
});

document.addEventListener('DOMContentLoaded', function () {
    const formBtnEn = document.getElementById('formBtnEn')
    const formularioSesion = document.getElementById('formularioSesion')
    const usernameInput = document.getElementById('username')
    const accederBtn = document.getElementById('accederBtn')
    const userLabel = document.getElementById('userLabel')
    
    // Lista de nombres de usuario válidos
    const usuariosValidos = ['usuario1', 'usuario2', 'usuario3']

    formBtnEn.addEventListener('click', function () {
        // Mostrar el formulario de inicio de sesión
        formularioSesion.classList.remove('hidden')
    });

    formBtnEs.addEventListener('click', function() {
        formularioSesion.classList.remove('hidden')
        userLabel.textContent = 'Usuario'
        const inputElement = document.getElementById('username');
        const nuevoPlaceholder = 'Ingrese el usuario';
        inputElement.placeholder = nuevoPlaceholder;
        accederBtn.textContent = 'Iniciar Sesion'
    });



    accederBtn.addEventListener('click', function () {
        const username = usernameInput.value

        // Verificar si el nombre de usuario está en la lista de usuarios válidos
        if (usuariosValidos.includes(username)) {
            // Redirigir al usuario a la URL de destino (puedes modificar la URL)
            window.location.href = 'URL_de_destino?usuario=' + username
        } else {
            alert('The user entered is incorrect. please check');
        }
    });
});














