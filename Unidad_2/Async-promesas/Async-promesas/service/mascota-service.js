//recepcion de datos
/*
const crearFila = (nombre, edad, raza, peso, idDueno) => {
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
            
            href="../screens/editar_mascota.html"
            class="simple-button simple-button--edit"
            >
            Editar
            </a>
        </li>
        <li>
            <button class="simple-button simple-button--delete" type="button">
            Eliminar
            </button>
        </li>
        </ul>
    </td>
    `;
    fila.innerHTML = contenido;
    return fila;
}
*/

//const table = document.querySelector('[data-table]');

/*
const listar_mascotas = () => {
    const promesa = new Promise((resolve, reject) => {
        const http = new XMLHttpRequest();
        http.open("GET", "http://localhost:3001/mascotas");
        http.send();
        http.onload = () => {
            const response = JSON.parse(http.response);
            if (http.status >= 400) {
                reject(response);
            } else {
                resolve(response);
            }
        }
    });
    return promesa;
}
listar_mascotas()
    .then((data) => {
        data.forEach((mascota) => {
            const nuevaFila = crearFila(mascota.nombre, mascota.edad, mascota.raza, mascota.peso, mascota.idDueno);
            table.appendChild(nuevaFila);
        });
    })
    .catch((error) => alert("sin conexion"));
*/

//-------optimizado--------//

const listar_mascotas = () => fetch("http://localhost:3001/mascotas")
    .then((respuesta) => respuesta.json());

const crearMascota = (nombre, edad, raza, peso, idDueno) => {
    return fetch("http://localhost:3001/mascotas", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({ nombre, edad, raza, peso, idDueno, id: uuid.v4() })
    });
};

const actualizarMascota = (nombre, edad, raza, peso, idDueno, id) => {
    return fetch(`http://localhost:3001/mascotas/${id}`, {
        method: "PUT",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({ nombre, edad, raza, peso, idDueno })
    })
    .then(respuesta => console.log(respuesta))
    .catch((error) => console.log(error));
};

const eliminarMascota = (id) => {
    console.log("eliminar");
    return fetch(`http://localhost:3001/mascotas/${id}`, {
        method: "DELETE"
    })
    .then(respuesta => console.log(respuesta))
    .catch((error) => console.log(error));
};

const mascota = (id) => {
    return fetch(`http://localhost:3001/mascotas/${id}`)
        .then((respuesta) => respuesta.json());
};

export const mascotaService = {
    listar_mascotas,
    crearMascota,
    eliminarMascota,
    actualizarMascota,
    mascota
};