import { clientService } from "../service/client-service.js";
const crearFila = (nombre, email, id) => {
    const fila = document.createElement('tr');//con esto creamos nua fila
    //html como variable
    const contenido = `
    <td class="td" data-td>
        ${nombre}
    </td>
    <td>${email}</td>
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
        clientService.eliminarCliente(id)
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
clientService.listar_clientes()
    .then((data) => {
        data.forEach (({nombre, email}) =>{
            const nuevafila = crearFila(nombre, email, id)
            table.appendChild(nuevafila)
        });
    }).catch((error) => alert("error"))