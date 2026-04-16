
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

const listar_productos = () => fetch("http://localhost:3001/productos")
.then((respuesta) => respuesta.json());

const crearProducto = (nombre, precio) => {
    return fetch("http://localhost:3001/productos",{ 
        method: "POST",
        headers:{
            "Content-type":"application/json"
        },
        body:JSON.stringify({nombre, precio, id:uuid.v4()})
    });    
};

const actualizarProducto = (nombre, precio, id) => {// Solo aqui el nombre y email menos id
    return fetch(`http://localhost:3001/productos/${id}`, {
        method: "PUT",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({ nombre, precio})
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