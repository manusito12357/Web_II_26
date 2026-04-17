import { mascotaService } from "../service/mascota-service.js";
import { clientService } from "../service/client-service.js";

const formulario = document.querySelector("[data-form]");

const obInfo = async () => {
    const url = new URL(window.location);
    const id = url.searchParams.get("id");
    if (id == null) {
        window.location.href = "/screens/error.html";
    }

    const nombre  = document.querySelector("[data-nombre]");
    const edad    = document.querySelector("[data-edad]");
    const raza    = document.querySelector("[data-raza]");
    const peso    = document.querySelector("[data-peso]");
    const selecionarDueno = document.querySelector("[data-iddueno]");

    // Primero cargamos los dueños en el select
    try {
        const clientes = await clientService.listar_clientes();
        clientes.forEach(cliente => {
            const option = document.createElement("option");
            option.value = cliente.id;
            option.textContent = cliente.nombre;
            selectDueno.appendChild(option);
        });
    } catch (error) {
        alert("Error al cargar dueños");
    }

    try {
        const mascota = await mascotaService.mascota(id);
        if (mascota.nombre) {
            nombre.value = mascota.nombre;
            edad.value   = mascota.edad;
            raza.value   = mascota.raza;
            peso.value   = mascota.peso;
            seleccionarDueno.value = mascota.idDueno;//para selecionar el id del dueño
        } else {
            throw new Error();
        }
    } catch (error) {
        window.location.href = "/screens/error.html";
    }
};
obInfo();

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    const nombre  = document.querySelector("[data-nombre]").value;
    const edad    = document.querySelector("[data-edad]").value;
    const raza    = document.querySelector("[data-raza]").value;
    const peso    = document.querySelector("[data-peso]").value;
    const idDueno = document.querySelector("[data-iddueno]").value;

    mascotaService.actualizarMascota(nombre, edad, raza, peso, idDueno, id)
        .then(() => {
            window.location.href = "/screens/edicion_concluida.html";
        });
});