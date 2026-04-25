import { mascotaService } from "../service/mascota-service.js";

const crearFila = (nombre, edad, raza, peso, idDueno, id) => {
    const fila = document.createElement('tr');
    const contenido = `
    <td class="td" data-td>
        ${nombre}
    </td>
    <td>${edad}</td>
    <td>${raza}</td>
    <td>${peso}</td>
    <td>${idDueno}</td>
    <td>
        <ul class="table__button-control">
        <li>
            <a
            href="../screens/editar_mascota.html?id=${id}"
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
    `;
    fila.innerHTML = contenido;
    const btn = fila.querySelector("button");

    btn.addEventListener("click", () => {
        const id = btn.id;
        mascotaService.eliminarMascota(id)
            .then(() => {
                alert("Eliminado");
                window.location.reload();
            })
            .catch(() => {
                alert("error");
            });
    });

    return fila;
};

const table = document.querySelector('[data-table]');
mascotaService.listar_mascotas()
    .then((data) => {
        data.forEach(({ nombre, edad, raza, peso, idDueno, id }) => {
            const nuevaFila = crearFila(nombre, edad, raza, peso, idDueno, id);
            table.appendChild(nuevaFila);
        });
    }).catch(() => alert("error"));