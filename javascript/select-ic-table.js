const input = document.getElementById('status-input');
const dropdown = document.getElementById('status-dropdown');

// Toggle le menu déroulant au clic sur l'input
input.addEventListener('click', (event) => {
    event.stopPropagation(); // Empêche la propagation pour éviter de fermer immédiatement
    dropdown.classList.toggle('hidden');
});

// Gère le clic sur les items du dropdown
dropdown.addEventListener('click', (event) => {
    if (event.target.classList.contains('dropdown-item')) {
        input.value = event.target.textContent; // Met à jour la valeur de l'input
        dropdown.classList.add('hidden'); // Ferme le menu
    }
});

// Ferme le dropdown si on clique en dehors
document.addEventListener('click', () => {
    dropdown.classList.add('hidden');
});
