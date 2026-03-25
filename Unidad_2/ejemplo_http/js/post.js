const API_URL = 'http://localhost:3001/posts';

const btnPost = document.querySelector('.btn-post');

btnPost.addEventListener('click', () => {
    const newPost = {
        titulo: "nuevo post",
        descripcion: "es un nuevo post creado",
        fecha: new Date().toISOString()
    };

    fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(newPost)
    })
    .then(res => res.json())
    .then(() => {
        const btnGet = document.querySelector('.btn-get');
        if (btnGet) btnGet.click();
    })
    .catch(error => console.error("Error:", error));
});