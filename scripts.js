// Przełączanie sekcji
function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
}

// Aktualizacja listy instalacji zależnie od zakładu
function updateInstallationNumbers() {
    const plantCode = document.getElementById('plant-code').value;
    const installSelect = document.getElementById('installation-number');
    installSelect.innerHTML = ''; // Czyść opcje

    const options = {
        'PZD': ['3500', '3550'],
        'PZO': ['1200', '1400'],
        'PZP': ['3500', '1200']
    };

    options[plantCode].forEach(num => {
        const option = document.createElement('option');
        option.value = num;
        option.text = num;
        installSelect.appendChild(option);
    });
}

// Domyślnie pokazujemy logowanie
showSection('login-section');