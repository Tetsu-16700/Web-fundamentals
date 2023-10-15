// Interaccion de boton de deslizamento
const toTopLink = document.querySelector(".to__top");
const scrollTopButton = document.getElementById("scrollTopButton");

toTopLink.addEventListener("click", (event) => {
  event.preventDefault(); 
  scrollToTop(); 
});

scrollTopButton.addEventListener("click", () => {
  scrollToTop(); 
});

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth", 
  });
}
