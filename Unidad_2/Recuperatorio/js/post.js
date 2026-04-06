const API = "http://localhost:3002/posts";

const guardarTarea = (datos) => {
    return fetch(API, {
        method: "POST",
        headers: {
            "Content-type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(datos)
    })
    .then(response => response.json());
};

export default guardarTarea;