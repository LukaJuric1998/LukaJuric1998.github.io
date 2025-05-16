window.addEventListener("DOMContentLoaded", () => {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4) {
            if (this.status === 200) {
                document.getElementById("header").innerHTML = this.responseText;
            } else {
                console.error("Failed to load header.html:", this.status);
            }
        }
    };
    xhttp.open("GET", "header.html", true);
    xhttp.send();
});


 function toggleMenu() {
      document.getElementById("second").classList.toggle("active");
      document.querySelectorAll('#second a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById("second").classList.remove("active");
  });
});
    }