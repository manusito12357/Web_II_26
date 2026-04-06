const tabla = (() => {
    const cuerpoTabla = document.querySelector('#taskTable tbody');

    const addTask = (datos) => {
        const fila = cuerpoTabla.insertRow();
        
        fila.insertCell(0).textContent = datos.nombre;
        fila.insertCell(1).textContent = datos.curso;
        fila.insertCell(2).textContent = datos.edad;
        fila.insertCell(3).textContent = datos.hermanos;
        fila.insertCell(4).textContent = datos.ciudad;

        const acciones = fila.insertCell(5);
        const btnDel = document.createElement('button');
        btnDel.textContent = "Eliminar";
        btnDel.className = "btn-delete";
        
        // Confirmación para eliminar
        btnDel.addEventListener('click', () => {
            if (confirm("¿De verdad quieres borrar esto después de todo lo que te costó llenarlo?")) {
                fila.remove();
            }
        });

        acciones.appendChild(btnDel);
    };

    return { addTask };
})();

export default tabla;