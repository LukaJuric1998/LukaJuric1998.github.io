

function toggleDarkMode() {
    const htmlElement = document.documentElement; // Get the <html> element
    const icon = document.getElementById("theme-icon");

    // Toggle the "dark" class on the <html> element
    const isDark = htmlElement.classList.toggle("dark");

    // Save the theme preference to localStorage
    localStorage.setItem("theme", isDark ? "dark" : "light");

    // Change the icon based on the current theme
    if (icon) { // Ensure the icon exists before trying to manipulate it
        if (isDark) {
            icon.classList.remove("fa-moon");
            icon.classList.add("fa-sun");
        } else {
            icon.classList.remove("fa-sun");
            icon.classList.add("fa-moon");
        }
    }
}

// Event listener to apply the saved theme when the page loads
window.addEventListener("DOMContentLoaded", () => {
    const htmlElement = document.documentElement; // Get the <html> element
    const icon = document.getElementById("theme-icon");
    const savedTheme = localStorage.getItem("theme");

    // Apply the saved theme to the <html> element
    if (savedTheme === "dark") {
        htmlElement.classList.add("dark");
    } else {
        // Ensure light mode is the default if no theme is saved or it's explicitly light
        htmlElement.classList.remove("dark");
    }

    // Set the initial icon state based on the applied theme
    if (icon) { // Ensure the icon exists before trying to manipulate it
        if (savedTheme === "dark") {
            icon.classList.remove("fa-moon"); // In case it's there from default HTML
            icon.classList.add("fa-sun");
        } else {
            icon.classList.remove("fa-sun"); // In case it's there from previous state
            icon.classList.add("fa-moon");
        }
    }
});