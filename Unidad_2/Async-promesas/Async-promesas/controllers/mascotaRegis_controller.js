import { mascotaService } from "../service/mascota-service.js";
import { clientService } from "../service/client-service.js";

const formulario = document.querySelector('[data-form]');
const selectDueno = document.querySelector("[data-iddueno]");

clientService.listar_clientes()
    .then((clientes) => {
        clientes.forEach(cliente => {
            const option = document.createElement("option");
            option.value = cliente.id;
            option.textContent = cliente.nombre;
            selectDueno.appendChild(option);
        });
    })
    .catch(() => alert("Error al cargar dueños"));

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const nombre  = document.querySelector("[data-nombre]").value;
    const edad    = document.querySelector("[data-edad]").value;
    const raza    = document.querySelector("[data-raza]").value;
    const peso    = document.querySelector("[data-peso]").value;
    const idDueno = document.querySelector("[data-iddueno]").value;

    mascotaService.crearMascota(nombre, edad, raza, peso, idDueno)
        .then((respuesta) => {
            console.log("Todo bien", respuesta);
            window.location.href = "../screens/registro_completado.html";
        })
        .catch((error) => {
            console.log("Todo mal", error);
        });
});