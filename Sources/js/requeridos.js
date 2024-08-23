// Se declaran las variables que se utilizaran
const name = document.getElementById('nombre');
const lastName = document.getElementById('apellido');
const date = document.getElementById('fecha');
const phone = document.getElementById('telefono');
const platoPreferido = document.getElementById('plato-preferido');
const form = document.getElementById('form');

//------------------------------------------------------------------------------------------------//
     // Personalizar mensajes de error
  document.getElementById('nombre').addEventListener('invalid', function () {
      this.setCustomValidity('Por favor, ingrese su nombre.');
  });

  document.getElementById('apellido').addEventListener('invalid', function () {
      this.setCustomValidity('Por favor, ingrese su apellido.');
  });

  document.getElementById('fecha-nacimiento').addEventListener('invalid', function () {
      this.setCustomValidity('Por favor, seleccione su fecha de cumpleaños.');
  });

  document.getElementById('email').addEventListener('invalid', function () {
      this.setCustomValidity('Por favor, ingrese su correo electrónico.');
  });

  document.getElementById('numero').addEventListener('invalid', function () {
      this.setCustomValidity('Por favor, ingrese su número telefónico.');
  });

  document.getElementById('Plato-Preferido').addEventListener('invalid', function () {
      this.setCustomValidity('Por favor, seleccione su plato preferido.');
  });

  document.getElementById('dni').addEventListener('invalid', function () {
      this.setCustomValidity('Por favor, ingrese su DNI.');
  });

  // Limpiar el mensaje de error personalizado cuando el usuario comienza a escribir
  document.querySelectorAll('input, select').forEach(function(element) {
      element.addEventListener('input', function() {
          this.setCustomValidity('');
      });
  });



//---------------------------------------------------------------------------------------//

// Bloquear caracteres no numéricos en los campos de número telefónico y DNI
document.getElementById('numero').addEventListener('input', function (e) {
  this.value = this.value.replace(/[^0-9]/g, '');
});

document.getElementById('dni').addEventListener('input', function (e) {
  this.value = this.value.replace(/[^0-9]/g, '');
});