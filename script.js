document.addEventListener('DOMContentLoaded', function() {
    const themeToggleButton = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme');

    // Anvend gemt tema ved indlæsning af siden
    if (currentTheme) {
        document.body.classList.add(currentTheme);
        themeToggleButton.textContent = currentTheme === 'dark-theme' ? 'Skift til lyst tema' : 'Skift til mørkt tema';
    } else {
        // Hvis der ikke er noget gemt tema, sæt standard til mørkt tema
        document.body.classList.add('dark-theme');
        localStorage.setItem('theme', 'dark-theme');
        themeToggleButton.textContent = 'Skift til lyst tema';
    }

    themeToggleButton.addEventListener('click', function() {
        const isDarkTheme = document.body.classList.contains('dark-theme');
        if (isDarkTheme) {
            document.body.classList.replace('dark-theme', 'light-theme');
            localStorage.setItem('theme', 'light-theme');
            themeToggleButton.textContent = 'Skift til mørkt tema';
        } else {
            document.body.classList.replace('light-theme', 'dark-theme');
            localStorage.setItem('theme', 'dark-theme');
            themeToggleButton.textContent = 'Skift til lyst tema';
        }
    });

    // Sektioner med data-info attribut
    const sections = document.querySelectorAll('main > section');
    sections.forEach(section => {
        section.addEventListener('click', function() {
            const infoText = this.getAttribute('data-info');
            if (infoText) {
                alert(infoText);
            }
        });
    });
});
