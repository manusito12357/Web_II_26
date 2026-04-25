
//recepcion de datos
/*
const crearFila = (nombre, email) => {
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
            <button class="simple-button simple-button--delete" type="button">
            Eliminar
            </button>
        </li>
        </ul>
    </td>
    `
;
fila.innerHTML = contenido;
return fila;
}
*/
//const table = document.querySelector('[data-table]');
/*
const listar_clientes = () => {
    const  promesa = new Promise((resolve,reject)=>{
        const http =  new XMLHttpRequest();//esta es una variable para el request http
        http.open("GET", "http://localhost:3001/perfil");
        http.send();
        http.onload = () => {
            const response = JSON.parse(http.response);
            if(http.response >= 400){
                reject(response)
            }else{
                resolve(response)
            }
        }
    })
    return promesa;
}
listar_clientes()
    .then((data) => {
        data.forEach((perfil) =>{
            const nuevafila = crearFila(perfil.nombre, perfil.email);
            table.appendChild(nuevafila)
        });
})
    .catch((error) => alert("sin conexion"));
*/
//-------optimizado--------//
/*
const listar_productos = () => fetch("http://localhost:3001/productos")
.then((respuesta) => respuesta.json());

const crearProducto = (nombre, precio, descripcion) => {
    return fetch("http://localhost:3001/productos",{ 
        method: "POST",
        headers:{
            "Content-type":"application/json"
        },
        body:JSON.stringify({nombre, precio, descripcion, id:uuid.v4()})
    });    
};

const actualizarProducto = (nombre, precio, descripcion,id) => {// Solo aqui el nombre y email menos id
    return fetch(`http://localhost:3001/productos/${id}`, {
        method: "PUT",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({ nombre, precio, descripcion})
    })
    .then(respuesta => console.log(respuesta)) 
    .catch((error) => console.log(error));
};

const eliminarProducto = (id) => {
    console.log("eliminar");
    return fetch(`http://localhost:3001/productos/${id}`,{
        method: "DELETE"
    })
    .then(respuesta => console.log(respuesta)) 
    .catch((error) => console.log(error));
};
const producto = (id) => {
    return fetch(`http://localhost:3001/productos/${id}`)
    .then((respuesta) =>respuesta.json());
}
export const productService = {
    listar_productos,
    crearProducto,
    eliminarProducto,
    actualizarProducto,
    producto
};
*/
/*
//---------CON SUPABASE-----------------
const URL_SUPABASE = 'https://cofqrhpulspgpayihwwb.supabase.co';
const SUPABASE_KEY = 'sb_publishable_ZuznyM9dXtZL6Qbln0bgLg_WokHaTsb';
const table = 'productos';
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

// GET - listar todos los productos
const listar_productos = () => {
    return request(`${API_URL}?select=id,nombre,precio,descripcion`);
};

// GET - obtener producto por id
const producto = (id) => {
    return request(`${API_URL}?id=eq.${id}&select=id,nombre,precio,descripcion`)
        .then(data => data?.[0]);
};

// POST - crear producto
const crearProducto = (nombre, precio, descripcion) => {
    return request(API_URL, {
        method: 'POST',
        body: JSON.stringify({ nombre, precio, descripcion })
    }).then(data => data?.[0]);
};

const actualizarProducto = (id, nombre, precio, descripcion) => {
    return request(`${API_URL}?id=eq.${id}`, {
        method: 'PATCH',
        body: JSON.stringify({ nombre, precio, descripcion })
    }).then(data => data?.[0] ?? Promise.reject(new Error('No se pudo actualizar el producto')));
};

// DELETE - eliminar producto
const eliminarProducto = (id) => {
    return request(`${API_URL}?id=eq.${id}`, {
        method: 'DELETE'
    }).then(data => data?.[0] ?? Promise.reject(new Error('No se pudo eliminar el producto')));
};

export const productService = {
    listar_productos,
    producto,
    crearProducto,
    actualizarProducto,
    eliminarProducto
};*/
const API_BASE_URL = "http://127.0.0.1/API/productos.php";

const listar_productos = () => {
    return fetch(API_BASE_URL).then(response => {
        if (!response.ok) throw new Error('error productos');
        return response.json();
    });
};

const producto = (id) => {
    return fetch(`${API_BASE_URL}?Id=${id}`).then(response => {
        if (!response.ok) throw new Error('error producto');
        return response.json();
    });
};

const crearProducto = (nombre, precio, descripcion) => {
    return fetch(API_BASE_URL, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ nombre, precio, descripcion })
    }).then(response => {
        if (!response.ok) throw new Error('error al crear');
        return response.json();
    });
};

const actualizarProducto = (id, nombre, precio, descripcion) => {
    return fetch(API_BASE_URL, {
        method: "PUT",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ Id: id, nombre, precio, descripcion })
    }).then(response => response.json())
      .catch(err => console.log(err));
};

const eliminarProducto = (id) => {
    return fetch(`${API_BASE_URL}?Id=${id}`, {
        method: "DELETE"
    });
};

export const productService = {
    listar_productos,
    producto,
    crearProducto,
    actualizarProducto,
    eliminarProducto
};