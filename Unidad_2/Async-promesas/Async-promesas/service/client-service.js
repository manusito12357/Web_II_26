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
const listar_clientes = () => fetch("http://localhost:3001/perfil")
.then((respuesta) => respuesta.json());

const crearCliente = (nombre, email) => {
    return fetch("http://localhost:3001/perfil",{ 
        method: "POST",
        headers:{
            "Content-type":"application/json"
        },
        body:JSON.stringify({nombre, email, id:uuid.v4()})
    });    
};  

const actualizarCliente = (nombre, email, id) => {// Solo aqui el nombre y email menos id
    return fetch(`http://localhost:3001/perfil/${id}`, {
        method: "PUT",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({ nombre, email })
    })
    .then(respuesta => console.log(respuesta)) 
    .catch((error) => console.log(error));
};

const eliminarCliente = (id) => {
    console.log("eliminar");
    return fetch(`http://localhost:3001/perfil/${id}`,{
        method: "DELETE"
    })
    .then(respuesta => console.log(respuesta)) 
    .catch((error) => console.log(error));
};
const cliente = (id) => {
    return fetch(`http://localhost:3001/perfil/${id}`)
    .then((respuesta) =>respuesta.json());
}*/


// ESTO ES CON MYSQL
const API_BASE_URL = "http://127.0.0.1/API/conexion.php";

const listar_clientes = () => {
    return fetch(API_BASE_URL).then(response => {
        if (!response.ok) throw new Error('error clientes');
        return response.json();
    });
};

const cliente = (id) => {
    return fetch(`${API_BASE_URL}?Id=${id}`).then(response => {
        if (!response.ok) throw new Error('error cliente');
        return response.json();
    });
};

const crearCliente = (nombre, email) => {
    return fetch(API_BASE_URL, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ nombre, email })
    }).then(response => {
        if (!response.ok) throw new Error('error al crear');
        return response.json();
    });
};

const actualizarCliente = (id, nombre, email) => {
    return fetch(API_BASE_URL, {
        method: "PUT",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ Id: id, nombre, email })
    }).then(response => response.json())
      .catch(err => console.log(err));
};

const eliminarCliente = (id) => {
    return fetch(`${API_BASE_URL}?Id=${id}`, {
        method: "DELETE"
    });
};

export const clientService = {
    listar_clientes,
    cliente,
    crearCliente,
    actualizarCliente,
    eliminarCliente
};
/*
//------------CON SUPABASE-------------

const URL_SUPABASE = 'https://cofqrhpulspgpayihwwb.supabase.co';
const SUPABASE_KEY = 'sb_publishable_ZuznyM9dXtZL6Qbln0bgLg_WokHaTsb';
const table = 'clientes';
const API_URL = `${URL_SUPABASE}/rest/v1/${table}`

const HEADERS = {
    'apikey': SUPABASE_KEY,
    'Authorization':`Bearer ${SUPABASE_KEY}`,
    'Content-Type':'application/json',
    'Prefer':'return=representation'
};
//esta es una respuesta que vamos evitar usar fecth en cada funcion
//conexion y gestion de errores
const request = async(url, option = {}) =>{
    const res = await fetch(url, {headers: HEADERS, ...option});//esta respuesta va ser uan promesa del fecth
    const text = await res.text();
    const data = text ? JSON.parse(text):null;

    if(!res.ok){
        const mensaje = data?.mensaje ?? data?.error ??  text ?? 'Error';
        throw new Error(mensaje);
    }
    return data;
};
/////---------------/////
//este para el get
const listar_clientes = () =>{
    return request(`${API_URL}?select=id,nombre,email`);
}
//este es para el metodo get por id de los clientes
const cliente = (id) =>{
    return request(`${API_URL}?id=eq.${id}&select=id,nombre,email`)
    .then(data =>  data?.[0]);
};
//metodo post
const crearCliente = (nombre,email) => {
    return request(API_URL,{
        method: 'POST',
        body: JSON.stringify({nombre,email})
    }).then(data => data?.[0]);
}
//metodo put que seria patch
const actualizarCliente = (id,nombre,email) =>{
    return request(`${API_URL}?id=eq.${id}`,{
        method: 'PATCH',
        body: JSON.stringify({nombre,email})
    }).then(data => data?.[0] ?? Promise.reject(new Error('No se pudo actualizar los datos')));
}
//metodo delete
const eliminarCliente = (id) => {
    return request(`${API_URL}?id=eq.${id}`,{
        method: 'DELETE',
        body: JSON.stringify({id})
    }).then(data => data?.[0] ?? Promise.reject(new Error('No se pudo eliminar al cliente seleccionado')));
}


export const clientService ={
    listar_clientes,
    crearCliente,
    eliminarCliente,
    actualizarCliente,
    cliente
};
*/