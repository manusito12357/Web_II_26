const Form = (() => {
    const btnEnviar = document.getElementById('btn-submit');
    const inputNombre = document.getElementById('nombre');
    const inputCurso = document.getElementById('curso');
    const textoCurso = document.getElementById('val-curso');
    const Checks = document.getElementsByName('hermanos');

    let vecesBorrado = 0;
    let faseConfirmacion = 0;

    inputCurso.addEventListener('input', () => {
        let v = parseInt(inputCurso.value);
        let nombre = (v <= 6) ? `${v}ro Primaria` : `${v - 6}ro Secundaria`;
        
        if (v === 2 || v === 8) {
            nombre = nombre.replace("ro", "do");
        }
        if (v === 3 || v === 9) {
            nombre = nombre.replace("ro", "er");
        }
        textoCurso.innerText = nombre;
    });

    Checks.forEach(item => {
        item.addEventListener('change', () => {
            Checks.forEach(c => { 
                if (c !== item) c.checked = false; });
            setTimeout(() => { item.checked = false; }, 2000);
        });
    });

    inputNombre.addEventListener('input', () => {
        if (vecesBorrado < 3 && inputNombre.value.length === 10) {
            inputNombre.value = "";
            vecesBorrado++;
        }
    });

    const getDatos = () => {
        let h = "0";
        Checks.forEach(c => { 
            if (c.checked) h = c.value; 
        });
        return {
            nombre: inputNombre.value,
            curso: textoCurso.innerText,
            edad: document.getElementById('edad').value,
            hermanos: h,
            ciudad: document.getElementById('ciudad').value
        };
    };

    const setDatos = (callback) => {
        btnEnviar.addEventListener('click', (e) => {
            e.preventDefault();
            
            if (faseConfirmacion === 0) {
                btnEnviar.innerText = "¿Seguro?";
                faseConfirmacion++;
            } else if (faseConfirmacion === 1) {
                btnEnviar.innerText = "¿Segurísimo?";
                faseConfirmacion++;
            } else if (faseConfirmacion === 2) {
                btnEnviar.innerText = "¿Seguro seguro segurísimo?";
                faseConfirmacion++;
            } else {
                callback(getDatos());
                document.getElementById('formulario-hostil').reset();
                btnEnviar.innerText = "ENVIAR";
                faseConfirmacion = 0;
                vecesBorrado = 0;
                textoCurso.innerText = "1ro Primaria";
            }
        });
    };

    return { setDatos };
})();

export default Form;