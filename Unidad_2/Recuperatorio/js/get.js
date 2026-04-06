const API = "http://localhost:3002/posts";

const obtenerTareas = () => {
    return fetch(API)
        .then(response => response.json());
};

export default obtenerTareas;