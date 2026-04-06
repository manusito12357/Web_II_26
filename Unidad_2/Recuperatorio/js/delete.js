const API = "http://localhost:3002/posts";

const eliminarTarea = (id) => {
    return fetch(`${API}/${id}`, {
        method: "DELETE"
    })
    .then(response => {
        if (!response.ok) throw new Error("Error al eliminar");
        return response.ok;
    });
};

export default eliminarTarea;