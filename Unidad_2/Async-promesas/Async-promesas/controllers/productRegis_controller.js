import { productService } from "../service/product-service";

const formulario = document.querySelector('[data-form]');
formulario.addEventListener("submit", (evento) =>{
    evento.preventDefault();
    const nombre = document.querySelector("[data-nombre]").value;
    const precio = document.querySelector("[data-precio]").value;
    productService.crearProducto(nombre, precio)
    .then((respuesta) => {
        console.log("Todo bien", respuesta);
        window.location.href = "../screens/registro_completado.html";
    })
    .catch((error) => {
        console.log("Todo mal", error);
    });
});