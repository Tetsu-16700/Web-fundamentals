// TooTip Button//
const tooltips = document.querySelectorAll('[data-tooltip]');
const tooltip = document.getElementById('tooltip');

tooltips.forEach(element => {
    element.addEventListener('mouseenter', () => {
        const text = element.getAttribute('data-tooltip');
        tooltip.innerText = text;

        const rect = element.getBoundingClientRect();
        const top = rect.top - tooltip.offsetHeight - 10;
        const left = rect.left + rect.width / 2 - tooltip.offsetWidth / 2;

        tooltip.style.top = top + 'px';
        tooltip.style.left = left + 'px';

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

const savedFormData = JSON.parse(localStorage.getItem("formData")) || {};

function showError(input, message) {
  const errorDiv = document.getElementById(`${input.id}Error`);
  errorDiv.textContent = message;
  input.classList.add("error");
}
function showSuccess(input) {
  const errorDiv = document.getElementById(`${input.id}Error`);
  errorDiv.textContent = "";
  input.classList.remove("error");
}
function validateField(input) {
  if (input.checkValidity()) {
    showSuccess(input);
  } else {
    showError(input, input.validationMessage);
  }
}
form.addEventListener("input", (e) => {
  if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") {
    validateField(e.target);
    saveFormData();
    checkFormValidity();
  }
});
function checkFormValidity() {
  const isValid = form.checkValidity();
  submitBtn.disabled = !isValid;
}
function saveFormData() {
  const formData = {
    nombre: form.nombre.value,
    apodo: form.apodo.value,
    biografia: form.biografia.value,
  };
  localStorage.setItem("formData", JSON.stringify(formData));
}

form.nombre.value = savedFormData.nombre || "";
form.apodo.value = savedFormData.apodo || "";
form.biografia.value = savedFormData.biografia || "";

validateField(form.nombre);
validateField(form.apodo);
validateField(form.biografia);
validateField(form.password);

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

form.addEventListener("submit", (e) => {
  e.preventDefault();
  
  serverResponse.textContent = "Enviando datos al servidor...";
  serverResponse.classList.remove("hidden");
  setTimeout(() => {
    serverResponse.textContent = "Respuesta del servidor: Datos enviados correctamente."; 
   
    form.reset();
  }, 2000);
});

