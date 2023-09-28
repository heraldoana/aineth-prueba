document.addEventListener('DOMContentLoaded', function () {
    const aiText = document.getElementById('aiText');
    let currentText = 0;
    const textOptions = ["partner", "friend", "college"];

    // Función para cambiar el texto automáticamente
    function changeText() {
        currentText = (currentText + 1) % textOptions.length;
        aiText.textContent = `The AI ${textOptions[currentText]} for businesses and people.`;
    }

    // Llama a la función para cambiar el texto cada 3 segundos (puedes ajustar el tiempo)
    setInterval(changeText, 3000); // Cambia cada 3 segundos (3000 milisegundos)
});

const formBtnEn = document.getElementById('formBtnEn');
const formBtnEs = document.getElementById('formBtnEs');

// Asigna las URLs de destino
const urlEnglish = 'https://www.google.com';
const urlSpanish = 'https://www.yahoo.com';

// Agrega un evento de clic al primer botón para redireccionar a Google
formBtnEn.addEventListener('click', function () {
    window.location.href = urlEnglish;
});

// Agrega un evento de clic al segundo botón para redireccionar a Yahoo
formBtnEs.addEventListener('click', function () {
    window.location.href = urlSpanish;
});







