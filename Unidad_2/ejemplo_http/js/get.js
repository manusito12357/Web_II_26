import { crearAcciones } from '../components/card.js';

const API_URL = 'http://localhost:3001/posts';

const btnGet = document.querySelector('.btn-get');
const resultado = document.getElementById('result');

btnGet.addEventListener('click', () => {
    fetch(API_URL)
        .then(res => res.json())
        .then(data => {
            resultado.innerHTML = ''; 

            const tabla = document.createElement('table');
            tabla.style.width = "100%";
            tabla.style.borderCollapse = "collapse";
            tabla.style.marginTop = "20px";
            
            tabla.innerHTML = `
                <thead style="background-color: #f8f9fa;">
                    <tr>
                        <th style="padding: 12px; border: 1px solid #ddd; text-align: left;">ID</th>
                        <th style="padding: 12px; border: 1px solid #ddd; text-align: left;">Título</th>
                        <th style="padding: 12px; border: 1px solid #ddd; text-align: left;">Descripción</th>
                        <th style="padding: 12px; border: 1px solid #ddd; text-align: left;">Fecha</th>
                        <th style="padding: 12px; border: 1px solid #ddd; text-align: left;">Acciones</th>
                    </tr>
                </thead>
                <tbody></tbody>
            `;
            const cuerpo = tabla.querySelector('tbody');
            data.forEach(post => {
                const fila = cuerpo.insertRow();
                const c1 = fila.insertCell(0);
                c1.textContent = post.id;
                c1.style.padding = "10px"; c1.style.border = "1px solid #ddd";
                const c2 = fila.insertCell(1);
                c2.textContent = post.titulo;
                c2.style.padding = "10px"; c2.style.border = "1px solid #ddd";
                const c3 = fila.insertCell(2);
                c3.textContent = post.descripcion;
                c3.style.padding = "10px"; c3.style.border = "1px solid #ddd";
                const c4 = fila.insertCell(3);
                c4.textContent = post.fecha || 'Sin fecha';
                c4.style.padding = "10px"; c4.style.border = "1px solid #ddd";
                const c5 = fila.insertCell(4);
                c5.style.padding = "10px"; c5.style.border = "1px solid #ddd";
                c5.appendChild(crearAcciones(post, () => btnGet.click()));
            });

            resultado.appendChild(tabla);
        })
        .catch(err => console.error("Error:", err));
});