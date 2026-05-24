import { productService } from "../service/product-service.js";

const formulario = document.querySelector('[data-form]');
formulario.addEventListener("submit", (evento) =>{
    evento.preventDefault();
    const id = uuid.v4();
    const nombre = document.querySelector("[data-nombre]").value;
    const precio = document.querySelector("[data-precio]").value;
    const descripcion = document.querySelector("[data-descripcion]").value;
    productService.crearProducto(id, nombre, precio, descripcion)
    .then((respuesta) => {
        console.log("Todo bien", respuesta);
        window.location.href = "../screens/registro_completado.html";
    })
    .catch((error) => {
        console.log("Todo mal", error);
    });
});