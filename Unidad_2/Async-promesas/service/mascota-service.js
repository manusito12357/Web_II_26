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
/*
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
*/
/*
const URL_SUPABASE = 'https://cofqrhpulspgpayihwwb.supabase.co';
const SUPABASE_KEY = 'sb_publishable_ZuznyM9dXtZL6Qbln0bgLg_WokHaTsb';
const table = 'mascotas';
const API_URL = `${URL_SUPABASE}/rest/v1/${table}`;

const HEADERS = {
    'apikey': SUPABASE_KEY,
    'Authorization': `Bearer ${SUPABASE_KEY}`,
    'Content-Type': 'application/json',
    'Prefer': 'return=representation'
};

const request = async (url, option = {}) => {
    const res = await fetch(url, { headers: HEADERS, ...option });
    const text = await res.text();
    const data = text ? JSON.parse(text) : null;

    if (!res.ok) {
        const mensaje = data?.mensaje ?? data?.error ?? text ?? 'Error';
        throw new Error(mensaje);
    }
    return data;
};

// GET - listar todas las mascotas
const listar_mascotas = () => {
    return request(`${API_URL}?select=id,nombre,edad,raza,peso,id_dueno`);
};

// GET - obtener mascota por id
const mascota = (id) => {
    return request(`${API_URL}?id=eq.${id}&select=id,nombre,edad,raza,peso,id_dueno`)
        .then(data => data?.[0]);
};

// POST - crear mascota
const crearMascota = (nombre, edad, raza, peso, id_dueno) => {
    return request(API_URL, {
        method: 'POST',
        body: JSON.stringify({ nombre, edad, raza, peso, id_dueno })
    }).then(data => data?.[0]);
};

// PATCH - actualizar mascota
const actualizarMascota = (id, nombre, edad, raza, peso, id_dueno) => {
    return request(`${API_URL}?id=eq.${id}`, {
        method: 'PATCH',
        body: JSON.stringify({ nombre, edad, raza, peso, id_dueno })
    }).then(data => data?.[0] ?? Promise.reject(new Error('No se pudo actualizar la mascota')));
};

// DELETE - eliminar mascota
const eliminarMascota = (id) => {
    return request(`${API_URL}?id=eq.${id}`, {
        method: 'DELETE',
        headers: { ...HEADERS, 'Prefer': 'return=minimal' }
    }).then(() => true)
      .catch(() => Promise.reject(new Error('No se pudo eliminar la mascota')));
};

export const mascotaService = {
    listar_mascotas,
    mascota,
    crearMascota,
    actualizarMascota,
    eliminarMascota
};*/
/*
//------CON MYSQL---------------
const API_BASE_URL = "http://127.0.0.1/API/mascotas.php";

const listar_mascotas = () => {
    return fetch(API_BASE_URL).then(response => {
        if (!response.ok) throw new Error('error mascotas');
        return response.json();
    });
};

const mascota = (id) => {
    return fetch(`${API_BASE_URL}?Id=${id}`).then(response => {
        if (!response.ok) throw new Error('error mascota');
        return response.json();
    });
};

const crearMascota = (nombre, edad, raza, peso, id_dueno) => {
    return fetch(API_BASE_URL, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ nombre, edad, raza, peso, id_dueno })
    }).then(response => {
        if (!response.ok) throw new Error('error al crear');
        return response.json();
    });
};

const actualizarMascota = (id, nombre, edad, raza, peso, id_dueno) => {
    return fetch(API_BASE_URL, {
        method: "PUT",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ Id: id, nombre, edad, raza, peso, id_dueno })
    }).then(response => response.json())
        .catch(err => console.log(err));
};

const eliminarMascota = (id) => {
    return fetch(`${API_BASE_URL}?Id=${id}`, {
        method: "DELETE"
    });
};

export const mascotaService = {
    listar_mascotas,
    mascota,
    crearMascota,
    actualizarMascota,
    eliminarMascota
};*/
const BASE_URL = "http://localhost:3000";

const mascotaService = {
    // GET - Listar todas las mascotas
    listar_mascotas: async () => {
        const res = await fetch(`${BASE_URL}/mascotas`);
        return res.json();
    },

    // GET POR ID - Obtener una mascota específica
    mascota: async (id) => {
        const res = await fetch(`${BASE_URL}/mascotas/${id}`);
        return res.json();
    },

    // POST - Crear nueva mascota
    // Nota: Agregué 'id' al inicio por si usas UUIDs manuales como en clientes
    crearMascota: async (id, nombre, edad, raza, peso, id_dueno) => {
        const res = await fetch(`${BASE_URL}/mascotas`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ Id: id, nombre, edad, raza, peso, id_dueno })
        });
        return res.json();
    },

    // PUT - Actualizar mascota
    actualizarMascota: async (id, nombre, edad, raza, peso, id_dueno) => {
        const res = await fetch(`${BASE_URL}/mascotas/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ nombre, edad, raza, peso, id_dueno })
        });
        return res.json();
    },

    // DELETE - Eliminar mascota
    eliminarMascota: async (id) => {
        const res = await fetch(`${BASE_URL}/mascotas/${id}`, {
            method: "DELETE"
        });
        return res.json();
    }
};

export { mascotaService };