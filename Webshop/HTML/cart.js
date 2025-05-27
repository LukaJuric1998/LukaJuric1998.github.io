function azurirajBrojUKosarici() {
  const kosarica = JSON.parse(localStorage.getItem("kosarica")) || [];
  const brojElement = document.querySelector(".cart-count");

  if (brojElement) {
    brojElement.textContent = kosarica.length;  // Broji koliko stavki je u nizu
  }
}

// Automatski pozovi pri učitavanju stranice
document.addEventListener("DOMContentLoaded", () => {
  azurirajBrojUKosarici();
});