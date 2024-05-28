//Obtener todos los campos de entrada del formulario
const inputs = document.querySelectorAll("input[type='text']");
const nombreError = document.getElementById("nombreError");
const inputsNumber = document.querySelectorAll("input[type='number']");
const selectDocumento = document.getElementById('documentoCod');
const selectSexo = document.getElementById('sexoCod');
const selectOcupacion= document.getElementById('ocupacionCod');
const authorizeInfoCheckbox = document.getElementById('acceptPersonalDataUse');
const acceptTermsCheckbox = document.getElementById('acceptTermsAndConditions');

function validarInput(input) {
  if (input.value.trim() !== "") {
    input.style.borderColor = "green"; // Cambiar a color verde cuando se llena
     input.addEventListener("blur", function() {

      if (!/^[a-zA-Z]+$/.test(input.value.trim())) {
        input.style.borderColor = "red"; // Cambiar a color rojo si no son letras
        input.nextElementSibling.textContent = "Por favor ingresa solo letras."; // Mensaje de error
      } else {
          input.nextElementSibling.textContent = ""; // borrar mensaje de error
      }
  });
} else {
    input.style.borderColor = "blue"; // Cambiar al color original cuando está vacío
    nombreError.textContent = "Todos los campos son obligatorios."; // Mensaje de error
}
}
function validarInputnumber(input) {
  if (input.value.trim() !== ""){
    input.style.borderColor = "green"; // Cambiar a color verde cuando se llena
    // Validación de números
  if (isNaN(input.value.trim())) {
    input.style.borderColor = "red"; // Cambiar a color rojo si no es un número
    input.nextElementSibling.textContent = "Por favor ingresa solo números."; // Mensaje de error
} else {
    input.style.borderColor = "green"; // Cambiar a color verde si es un número
    input.nextElementSibling.textContent = ""; // Limpiar el mensaje de error si la validación es exitosa
}
  }else{
    input.style.borderColor = "red"; // Cambiar a color rojo 
    input.nextElementSibling.textContent = ""; // borrar mensaje de 
  }
  
}

// Agregar un event listener a cada campo de entrada
inputs.forEach(function(input) {
  input.addEventListener("input", function() {
      validarInput(input); // Llamar a la función de validación para el campo de entrada actual
  });
});
inputsNumber.forEach(function(input) {
  input.addEventListener("input", function() {
      validarInputnumber(input); // Llamar a la función de validación para el campo de número actual
  });
});

selectDocumento.addEventListener('change', function() {
  if (selectDocumento.selectedIndex === 0) {
    selectDocumento.style.borderColor = 'red'; // Cambiar a rojo
    selectDocumento.title = "Por favor selecciona una opción.";
  } else {
    selectDocumento.style.borderColor = 'green'; // Cambiar a verde
    selectDocumento.title = ""; // Clear the error message
  }
});
selectSexo.addEventListener('change', function() {
  if (selectSexo.selectedIndex === 0) {
    selectSexo.style.borderColor = 'red'; // Cambiar a rojo
    selectSexo.title = "Por favor selecciona una opción.";
  } else {
    selectSexo.style.borderColor = 'green'; // Cambiar a verde
  }
});
selectOcupacion.addEventListener('change', function() {
  if (selectOcupacion.selectedIndex === 0) {
    selectOcupacion.style.borderColor = 'red'; // Cambiar a rojo
    selectOcupacion.title = "Por favor selecciona una opción.";
  } else {
    selectOcupacion.style.borderColor = 'green'; // Cambiar a verde
  }
});


