function toggleDarkMode() {
  // Promjena teme (npr. dodavanje/uklanjanje klase)
  document.body.classList.toggle("dark");

  
  const icon = document.getElementById("theme-icon");

  // Promijeni ikonu
  if (icon.classList.contains("fa-moon")) {
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
  } else {
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
  }
}