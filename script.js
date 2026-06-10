const contenedor = document.getElementById("productos");
const buscador = document.getElementById("buscador");

let productos = [];

fetch("https://backend-tienda-41l7.onrender.com/productos")
    .then(res => res.json())
    .then(data => {
        productos = data;
        mostrarProductos(productos);
    });

function mostrarProductos(lista) {
    contenedor.innerHTML = "";

    lista.forEach(producto => {
        contenedor.innerHTML += `
            <div class="producto">
                <h2>${producto.nombre}</h2>
                <p>$${producto.precio}</p>
            </div>
        `;
    });
}

buscador.addEventListener("input", () => {
    const texto = buscador.value.toLowerCase();

    const filtrados = productos.filter(producto =>
        producto.nombre.toLowerCase().includes(texto)
    );

    mostrarProductos(filtrados);
});
