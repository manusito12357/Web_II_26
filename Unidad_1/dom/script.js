import checkComplete from "./components/checkComplete.js";
import deletIcon from "./components/deletIcon.js";
(()=>{
    const btn = document.querySelector('[data-form-btn]')//es para emepezar a recoger los eventos
    console.log(btn)

    const createTask=(evento) =>{
        evento.preventDefault();
        const input = document.querySelector('[data-form-input]');//este va crear los eventos o las tareas
        const value = input.value;//recupero el valor del input
        const list = document.querySelector('[data-list]')
        const task = document.createElement('li')
        task.classList.add('card')//para agregar de la li 
        input.value = '';
        const contTask = document.createElement('div')//para crear el div
        const titleTask = document.createElement('span')
        titleTask.classList.add('task');
        titleTask.innerText = value;
        contTask.appendChild(checkComplete());//esto lo que hace es agregar el ckeck al div//cada ves que vea algo diferente debo hacerlo en una funcion diferente
        contTask.appendChild(titleTask);
        task.appendChild(contTask);
        task.appendChild(deletIcon());
        list.appendChild(task);
    }
//lamar a crear task
btn.addEventListener('click',createTask);
/*
const checkComplete = ()=>{
    const i = document.createElement('i');
    i.classList.add('far', 'fa-check-square', 'icon');//estilos de iconos
    i.addEventListener('click',color);
    return i;
}
const color = (evento) =>{//en esta parte se cambia de color al check
    const element = evento.target;
    element.classList.add('fas');
    element.classList.add('completeIcon');
    element.classList.remove('far')
};

const deletIcon =() =>{
    const i = document.createElement('i');
    i.classList.add('fas', 'fa-trash-alt', 'trashIcon', 'icon');
    i.addEventListener('click',deteleTask);
    return i;
}
const deteleTask = (evento)=>{
    const parent = evento.target.parentElement;
    parent.remove();
}
*/
})();