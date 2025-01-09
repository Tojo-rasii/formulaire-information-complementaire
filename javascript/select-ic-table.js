let isDropdownClick = false;

// Sélectionne tous les inputs
const inputs = document.querySelectorAll('.status-input');

// Pour chaque input
inputs.forEach(input => {
    const dropdown = input.closest('.inpt-child-div').querySelector('.status-dropdown');

    // Ouvre/ferme le dropdown au clic sur l'input
    input.addEventListener('click', (event) => {
        event.stopPropagation();
        closeAllDropdowns();
        dropdown.classList.toggle('hidden');
    });

    // Gère le clic sur une option du dropdown
    dropdown.addEventListener('click', (event) => {
        isDropdownClick = true; // Empêche la fermeture immédiate
        if (event.target.classList.contains('dropdown-item')) {
            input.value = event.target.textContent; // Met à jour la valeur de l'input
            dropdown.classList.add('hidden'); // Ferme le menu après sélection
        }
    });
});

// Ferme tous les dropdowns au clic en dehors
document.addEventListener('click', () => {
    if (isDropdownClick) {
        isDropdownClick = false; // Réinitialise le flag
        return;
    }
    closeAllDropdowns();
});

// Fonction pour fermer tous les dropdowns
function closeAllDropdowns() {
    document.querySelectorAll('.status-dropdown').forEach(dropdown => {
        dropdown.classList.add('hidden');
    });
}