import cards from "./cards.js";
const tabla = (() => {
    const cuerpoTabla = document.getElementById('taskTable');
    const addTask = (task) => {
        const nuevaFila = cuerpoTabla.insertRow();
        nuevaFila.insertCell(0).textContent = task.task;
        nuevaFila.insertCell(1).textContent = task.description;
        nuevaFila.insertCell(2).textContent = task.date;
        nuevaFila.insertCell(3).textContent = task.priority;
        nuevaFila.insertCell(4).textContent = task.email;
        nuevaFila.insertCell(5).textContent = task.number;
        nuevaFila.insertCell(6).textContent = task.time;
        //agregar acciones
        const acctionCel = nuevaFila.insertCell(7);
        const acciones = document.createElement('div');
        acciones.className = 'actions';

        // Botón Hecho
        const completeButton = document.createElement('button');
        completeButton.textContent = 'Hecho';
        completeButton.className = 'btn-complete'; 
        completeButton.addEventListener('click', () => {
            nuevaFila.classList.toggle('completed');
            cards.update(); 
        });

        // Botón Eliminar
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Eliminar'; 
        deleteButton.className = 'btn-delete';
        deleteButton.addEventListener('click', () => {
            cuerpoTabla.deleteRow(nuevaFila.rowIndex-1); 
            cards.update(); 
        });
        //boton editar
        const editButton = document.createElement('button');
        editButton.textContent = 'Editar';
        editButton.className = 'btn-edit';
        editButton.addEventListener('click', () => {
            nuevaFila.classList.toggle('edit');
            cards.update();
        })
        acciones.appendChild(completeButton);
        acciones.appendChild(deleteButton);
        acciones.appendChild(editButton);
        acctionCel.appendChild(acciones);
    };

    const getTask = () => {
        return Array.from(cuerpoTabla.rows).map(row => ({
            task: row.cells[0].textContent,
            description: row.cells[1].textContent,
            date: row.cells[2].textContent,
            priority: row.cells[3].textContent,
            email: row.cells[4].textContent,
            number: row.cells[5].textContent,
            time: row.cells[6].textContent,
            completed: row.classList.contains('completed')
        }));
    };

    return { addTask, getTask };
})();

export default tabla;