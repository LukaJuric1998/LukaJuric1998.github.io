// Funkcija za dodavanje proizvoda u košaricu
function azurirajBrojUKosarici() {
  const kosarica = JSON.parse(localStorage.getItem("kosarica")) || [];
  const brojElement = document.querySelector(".cart-count");

  if (brojElement) {
    brojElement.textContent = kosarica.length;
  }
}

// Napravi funkciju globalno dostupnom
window.azurirajBrojUKosarici = azurirajBrojUKosarici;

// Također možeš odmah pozvati pri učitavanju (opcionalno)
document.addEventListener("DOMContentLoaded", () => {
  azurirajBrojUKosarici();
});
