

function toggleDarkMode() {
  // Promjena teme (npr. dodavanje/uklanjanje klase)
  document.body.classList.toggle("dark");

  const icon = document.getElementById("theme-icon");
  const isDark = document.documentElement.classList.toggle("dark");

   localStorage.setItem("theme", isDark ? "dark" : "light");

  

  // Promijeni ikonu
  if (icon.classList.contains("fa-moon")) {
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
  } else {
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
  }
}



window.addEventListener("DOMContentLoaded", () => {
  const icon = document.getElementById("theme-icon");
  const savedTheme = localStorage.getItem("theme");

  if (icon) {
    if (savedTheme === "dark") {
      icon.classList.add("fa-sun");
    } else {
      icon.classList.add("fa-moon");
    }
  }
});