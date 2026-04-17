import { productService } from "../service/product-service.js";
const formulario = document.querySelector("[data-form]");
const obInfo = async () =>{
    const url = new URL(window.location);
    const id = (url.searchParams.get("id"))
    if(id == null){
        window.location.href = "/screens/error.html"
    }
    const nombre = document.querySelector("[data-nombre]");
    const precio = document.querySelector("[data-precio]");
    const descripcion = document.querySelector("[data-descripcion]")
    try{
        const perfil = await productService.producto(id);
        if(perfil.nombre && perfil.precio && perfil.descripcion){
            nombre.value = perfil.nombre;
            precio.value = perfil.precio;
            descripcion.value = perfil.descripcion;//rescato los datos del json y los pego al formulario
        }else{
            throw new Error();
        }
    }catch(error){
        window.location.href = "/screens/error.html"
    }
};
obInfo();

formulario.addEventListener("submit", (evento) =>{
    evento.preventDefault();
    const url = new URL(window.location);
    const id = url.searchParams.get("id");
    const nombre = document.querySelector("[data-nombre]").value;
    const precio = document.querySelector("[data-precio]").value;
    const descripcion = document.querySelector("[data-descripcion]").value;
    productService.actualizarProducto(nombre, precio, descripcion, id).then(() =>{
        window.location.href = "/screens/edicion_concluida.html"
    })
})