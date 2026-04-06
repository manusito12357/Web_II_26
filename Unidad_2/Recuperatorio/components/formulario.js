const Form =(()=>{
        const form = document.querySelector('[data-form]');//aqui estamos accediendo al formulario
        const inputTask = document.querySelector('[data-input-task]');//recupero input nombre de tareas
        const inputDescription = document.querySelector('[data-input-descripcion]');
        const inputFecha  = document.querySelector('[data-input-fecha]');//fecha
        const inputPrioridad = document.querySelector('[data-input-prioridad]');//prioridad
        const inputCorreo = document.querySelector('[data-input-email]');//correo
        const inputNumero = document.querySelector('[data-input-number]')//numero
        const inputHora = document.querySelector('[data-input-time]');//hora

        const datosForm = () =>{
            return{
                task: inputTask.value.trim(),
                description: inputDescription.value.trim(),
                date: inputFecha.value.trim(),
                priority: inputPrioridad.value.trim(),
                email: inputCorreo.value.trim(),
                number: inputNumero.value.trim(),
                time: inputHora.value.trim()
            }
        };
        const reset = () =>{
            inputTask.value = "";
            inputDescription.value = "";
            inputFecha.value = "";
            inputPrioridad.value  = "";
            inputCorreo.value  = "";
            inputNumero.value = "";
            inputHora.value = "";
        }
        const setDatos = (callback) =>{
            form.addEventListener('submit',(event)=>{
                event.preventDefault();
                callback(datosForm());
                reset();
            });

        };
return {setDatos,}
})();
export default Form;