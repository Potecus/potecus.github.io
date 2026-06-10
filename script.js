const buscador = document.getElementById("buscador");

buscador.addEventListener("input", () => {
    const texto = buscador.value.toLowerCase();

    document.querySelectorAll(".producto").forEach(producto => {
        const nombre = producto.querySelector("h2").textContent.toLowerCase();

        if (nombre.includes(texto)) {
            producto.style.display = "block";
        } else {
            producto.style.display = "none";
        }
    });
});
