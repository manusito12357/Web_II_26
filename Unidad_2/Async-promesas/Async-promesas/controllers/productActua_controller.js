import { productService } from "../service/product-service";
const formulario = document.querySelector("[data-form]");
const obInfo = async () =>{
    const url = new URL(window.location);
    const id = (url.searchParams.get("id"))
    if(id == null){
        window.location.href = "/screens/error.html"
    }
    const nombre = document.querySelector("[data-nombre]");
    const precio = document.querySelector("[data-precio]");
    try{
        const perfil = await productService.producto(id);
        if(perfil.nombre && perfil.precio){
            nombre.value = perfil.nombre;
            precio.value = perfil.precio;//rescato los datos del json y los pego al formulario
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
    const nombre = document.querySelector("[data-form]").value;
    const precio = document.querySelector("[data-form]").value;
    productService.actualizarProducto(nombre, email, id).then(() =>{
        window.location.href = "/screens/edicion_concluida.html"
    })
})