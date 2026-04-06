import Form from "./components/formulario.js";
import tabla from "./components/tabla.js";
import cards from "./components/cards.js";
import guardarTarea from "./js/post.js";
import obtenerTareas from "./js/get.js";
(()=>{
    obtenerTareas().then((tareas) => {
        tareas.forEach((task) => {
            tabla.addTask(task); 
        });
        cards.update(); 
    });
    
    Form.setDatos((task)=>{
        guardarTarea(task)
        .then((taskID)=>{
            tabla.addTask(taskID);
            cards.update();
        })
    });
})();