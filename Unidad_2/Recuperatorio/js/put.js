const API = "http://localhost:3002/posts";

const actualizarTarea = (id, datosEditados) => {
    return fetch(`${API}/${id}`, {
        method: "PUT",
        headers: {
            "Content-type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(datosEditados)
    })
    .then(response => response.json());
};

export default actualizarTarea;