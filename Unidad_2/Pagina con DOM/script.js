import Form from "./components/formulario.js";
import tabla from "./components/tabla.js";

(() => {
    Form.setDatos((datosRecibidos) => {
        tabla.addTask(datosRecibidos);
    });
})();