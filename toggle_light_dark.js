document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('darkmode-toggle');
    const bodyElement = document.body;

    // Function to apply the theme
    function applyTheme(theme) {
        bodyElement.className = ''; // Clear all classes
        bodyElement.classList.add(theme); // Add the current theme class
        toggleButton.checked = theme === 'dark-mode'; // Adjust the toggle switch position
    }

    // Check for saved theme in localStorage and apply it
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        applyTheme(currentTheme);
    } else {
        // If no theme was saved, start with light mode by default
        applyTheme('light-mode');
    }

    // Event listener for the toggle button
    toggleButton.addEventListener('change', function() {
        const newTheme = this.checked ? 'dark-mode' : 'light-mode';
        applyTheme(newTheme);
        localStorage.setItem('theme', newTheme); // Save the current theme to localStorage
    });
});
