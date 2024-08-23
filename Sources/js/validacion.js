const scriptURL = 'https://script.google.com/macros/s/AKfycbxuAG07IrbwDV9v7GNCZOG-bI6aI8ecixmsOEQ_0_c0VxMBH2trVOFDczyOd7AMovQY/exec';
const form = document.forms['contact-form'];
const modal = document.getElementById('successModal');
const countdownSpan = document.getElementById('countdown');

form.addEventListener('submit', e => {
    e.preventDefault();

    fetch(scriptURL, { 
        method: 'POST', 
        body: new FormData(form)
    })
    .then(response => response.json())
    .then(result => {
        if (result.result === 'success') {
            // Mostrar el modal en lugar de una alerta
            modal.style.display = 'block';
            
            // Redirigir después de 5 segundos
            let countdown = 5;
            const countdownInterval = setInterval(() => {
                countdown -= 1;
                countdownSpan.textContent = countdown;
                if (countdown <= 0) {
                    clearInterval(countdownInterval);
                    window.location.href = '/MambosPeru/index.html';
                }
            }, 1000);
        } else if (result.result === 'error') {
            alert('Error: ' + result.message);
        } else {
            alert('Ha ocurrido un error desconocido. Por favor, intenta nuevamente.');
        }
    })
    .catch(error => {
        console.error('Error!', error.message);
        alert('Error al enviar el formulario. Por favor, revisa tu conexión a internet e intenta nuevamente.');
    });
});
