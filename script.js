
document.addEventListener('DOMContentLoaded', function () {
    const aiText = document.getElementById('aiText');
    let currentText = 0;
    const textOptions = ["partner", "friend", "college"];

    // Función para cambiar el texto automáticamente
    function changeText() {
        currentText = (currentText + 1) % textOptions.length;
        aiText.textContent = `The AI ${textOptions[currentText]} for businesses and people.`;
    }
    setInterval(changeText, 3000); // Cambia cada 3 segundos (3000 milisegundos)
});

document.addEventListener('DOMContentLoaded', function () {
    const language = navigator.language.substring(0, 2);

    // Cambiar el enlace del formulario de Google según el idioma
    const buttonLogin = document.getElementById('login');
    buttonLogin.addEventListener('click', function () {
        const urlForm = language === 'es' ? 'URL_del_Formulario_en_español' : 'URL_del_Formulario_en_inglés';
        window.open(urlForm, '_blank');
    });

    // Cambiar el comportamiento del bot según el idioma
    const inicioSesionBtn = document.getElementById('provebot');
    inicioSesionBtn.addEventListener('click', function () {
        if (language === 'es') {
            // Lógica para abrir el bot de aineth.ai en español
        } else if (language === 'en') {
            // Lógica para abrir el bot de aineth.ai en inglés
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const inicioSesionBtn = document.getElementById('inicioSesionBtn');
    const formularioSesion = document.getElementById('formularioSesion');
    const usernameInput = document.getElementById('username');
    const accederBtn = document.getElementById('accederBtn');

    // Lista de nombres de usuario válidos
    const usuariosValidos = ['usuario1', 'usuario2', 'usuario3'];

    inicioSesionBtn.addEventListener('click', function () {
        // Mostrar el formulario de inicio de sesión
        formularioSesion.classList.remove('hidden');
    });

    accederBtn.addEventListener('click', function () {
        const username = usernameInput.value;
        
        // Verificar si el nombre de usuario está en la lista de usuarios válidos
        if (usuariosValidos.includes(username)) {
            // Redirigir al usuario a la URL de destino (puedes modificar la URL)
            window.location.href = 'URL_de_destino?usuario=' + username;
        } else {
            alert('The user entered is incorrect. please check');
        }
    });
});














