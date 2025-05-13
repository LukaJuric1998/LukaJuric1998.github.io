window.addEventListener("DOMContentLoaded", () => {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4) {
            if (this.status === 200) {
                document.getElementById("footer").innerHTML = this.responseText;
            } else {
                console.error("Failed to load header.html:", this.status);
            }
        }
    };
    xhttp.open("GET", "footer.html", true);
    xhttp.send();
});