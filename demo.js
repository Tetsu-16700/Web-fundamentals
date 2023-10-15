// script.js
const tooltips = document.querySelectorAll('[data-tooltip]');
const tooltip = document.getElementById('tooltip');

tooltips.forEach(element => {
    element.addEventListener('mouseenter', () => {
        const text = element.getAttribute('data-tooltip');
        tooltip.innerText = text;

        // Posicionar el Tooltip encima del elemento
        const rect = element.getBoundingClientRect();
        const top = rect.top - tooltip.offsetHeight - 10;
        const left = rect.left + rect.width / 2 - tooltip.offsetWidth / 2;

        tooltip.style.top = top + 'px';
        tooltip.style.left = left + 'px';

        // Mostrar gradualmente el Tooltip
        setTimeout(() => {
            tooltip.style.opacity = 1;
        }, 300);
    });

    element.addEventListener('mouseleave', () => {
        tooltip.style.opacity = 0; 
    });
});
/*-----------------------------------------------------*/
/*-----------------------------------------------------*/
/*--------------- F O R M U L A R I O -----------------*/
/*-----------------------------------------------------*/
/*-----------------------------------------------------*/
const form = document.getElementById("myForm");
const submitBtn = document.getElementById("submitBtn");
const serverResponse = document.getElementById("serverResponse");
// Recuperar estado del formulario desde localStorage
const savedFormData = JSON.parse(localStorage.getItem("formData")) || {};
// Función para mostrar mensajes de error
function showError(input, message) {
  const errorDiv = document.getElementById(`${input.id}Error`);
  errorDiv.textContent = message;
  input.classList.add("error");
}

// Función para mostrar mensajes de éxito
function showSuccess(input) {
  const errorDiv = document.getElementById(`${input.id}Error`);
  errorDiv.textContent = "";
  input.classList.remove("error");
}
// Función para validar campos en tiempo real
function validateField(input) {
  if (input.checkValidity()) {
    showSuccess(input);
  } else {
    showError(input, input.validationMessage);
  }
}
// Escuchar cambios en los campos en tiempo real
form.addEventListener("input", (e) => {
  if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") {
    validateField(e.target);
    saveFormData();
    checkFormValidity();
  }
});
// Función para verificar si el formulario es válido
function checkFormValidity() {
  const isValid = form.checkValidity();
  submitBtn.disabled = !isValid;
}
// Función para guardar datos en localStorage
function saveFormData() {
  const formData = {
    nombre: form.nombre.value,
    apodo: form.apodo.value,
    biografia: form.biografia.value,
  };
  localStorage.setItem("formData", JSON.stringify(formData));
}
// Cargar datos guardados en el formulario
form.nombre.value = savedFormData.nombre || "";
form.apodo.value = savedFormData.apodo || "";
form.biografia.value = savedFormData.biografia || "";

  
// Validación inicial al cargar la página
validateField(form.nombre);
validateField(form.apodo);
validateField(form.biografia);
validateField(form.password);

// Validación de las contraseñas en tiempo real
form.confirmPassword.addEventListener("input", (e) => {
  const password = form.password.value;
  const confirmPassword = e.target.value;

  if (password === confirmPassword) {
    showSuccess(e.target);
  } else {
    showError(e.target, "Las contraseñas no coinciden");
  }
  checkFormValidity();
});
// Manejar el envío del formulario
form.addEventListener("submit", (e) => {
  e.preventDefault();
  // Realizar aquí la lógica de envío al servidor (simulación).
  serverResponse.textContent = "Enviando datos al servidor..."; // Mensaje de simulación
  serverResponse.classList.remove("hidden");
  setTimeout(() => {
    serverResponse.textContent = "Respuesta del servidor: Datos enviados correctamente."; // Mensaje de simulación
  }, 2000);
});