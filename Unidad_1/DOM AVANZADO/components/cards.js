import tabla from "./tabla.js";
const cards = (() => {
    const taskCards = document.getElementById('taskCards');

    const update = () => {
        const tasks = tabla.getTask(); 
        taskCards.innerHTML = ''; 

        tasks.forEach(task => { 
            const card = document.createElement('div');
            card.className = 'taskCard';
            card.innerHTML = `
                <p><strong>Nombre:</strong> ${task.task}</p>
                <p><strong>Descripción:</strong> ${task.description}</p>
                <p><strong>Fecha:</strong> ${task.date}</p>
                <p><strong>Prioridad:</strong> ${task.priority}</p>
                <p><strong>Correo:</strong> ${task.email}</p>
                <p><strong>Numero:</strong> ${task.number}</p>
                <p><strong>Hora:</strong> ${task.time}</p>
                <p><strong>Estado:</strong> ${task.completed ? 'Completada' : 'Pendiente'}</p>
            `;
            taskCards.appendChild(card);
        });
    };

    return { update };
})();

export default cards;