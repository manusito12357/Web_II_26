const API_URL = 'http://localhost:3001/posts';

export const crearAcciones = (post, refrescar) => {
    const contenedor = document.createElement('div');
    contenedor.style.display = "flex";
    contenedor.style.gap = "8px";

    //boton editar
    const btnEdit = document.createElement('button');
    btnEdit.textContent = 'Editar';
    btnEdit.style.backgroundColor = "#D1E8FF"; 
    btnEdit.style.color = "#004085";
    btnEdit.style.border = "1px solid #B8DAFF";
    btnEdit.style.padding = "5px 10px";
    btnEdit.style.borderRadius = "4px";
    btnEdit.style.cursor = "pointer";

    btnEdit.onclick = () => {
        console.log("Editando ID:", post.id);
        alert("Editar ID: " + post.id);
    };

    //boton delete
    const btnDel = document.createElement('button');
    btnDel.textContent = 'Eliminar';
    btnDel.style.backgroundColor = "#FF4D4D"; 
    btnDel.style.color = "white";
    btnDel.style.border = "none";
    btnDel.style.padding = "5px 10px";
    btnDel.style.borderRadius = "4px";
    btnDel.style.cursor = "pointer";

    btnDel.onclick = () => {
        fetch(`${API_URL}/${post.id}`, { method: 'DELETE' })
            .then(() => refrescar());
    };

    contenedor.appendChild(btnEdit);
    contenedor.appendChild(btnDel);
    return contenedor;
};