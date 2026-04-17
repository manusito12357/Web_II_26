import { productService } from "../service/product-service.js";
const crearFila = (nombre, precio, descripcion, id) => {
    const fila = document.createElement('tr');//con esto creamos nua fila
    //html como variable
    const contenido = `
    <td class="td" data-td>
        ${nombre}
    </td>
    <td>${precio}</td>
    <td>${descripcion}</td>
    <td>
        <ul class="table__button-control">
        <li>
            <a
            href="../screens/editar_cliente.html"
            class="simple-button simple-button--edit"
            >
            Editar
            </a>
        </li>
        <li>
            <button class="simple-button simple-button--delete" type="button" id="${id}">
            Eliminar
            </button>
        </li>
        </ul>
    </td>
    `
;
    fila.innerHTML = contenido;
    const btn = fila.querySelector("button");

    btn.addEventListener("click", () => {
        const id = btn.id; 
        productService.eliminarProducto(id)
            .then((respuesta) => {
                alert("Eliminado");
                window.location.reload(); 
            })
            .catch((error) => {
                alert("error");
            });
    }); // Aquí se cierra el addEventListener

    return fila;
}

const table = document.querySelector('[data-table]');
productService.listar_productos()
    .then((data) => {
        data.forEach (({nombre, precio, descripcion, id}) =>{
            const nuevafila = crearFila(nombre, precio, descripcion, id)
            table.appendChild(nuevafila)
        });
    }).catch((error) => alert("error"))