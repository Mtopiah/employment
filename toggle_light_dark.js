document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('checkbox');
    const bodyElement = document.body;

    // Check for saved theme in localStorage
    const currentTheme = localStorage.getItem('theme');

    // If a theme was saved, apply it to the body
    if (currentTheme) {
        bodyElement.classList.add(currentTheme);
    } else {
        // If no theme was saved, start with light mode by default
        bodyElement.classList.add('light-mode');
    }

    toggleButton.addEventListener('click', function() {
        if (bodyElement.classList.contains('light-mode')) {
            bodyElement.classList.remove('light-mode');
            bodyElement.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark-mode');
        } else {
            bodyElement.classList.remove('dark-mode');
            bodyElement.classList.add('light-mode');
            localStorage.setItem('theme', 'light-mode');
        }
    });
});
