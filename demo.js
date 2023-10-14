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
