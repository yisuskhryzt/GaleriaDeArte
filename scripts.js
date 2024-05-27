/* Modal para Galeria */

document.addEventListener('DOMContentLoaded', () => {
    /* Detalles */
    document.querySelectorAll('.view-details').forEach(button => {
        button.addEventListener('click', (event) => {
            const titulo = event.target.getAttribute('titulo');
            const artista = event.target.getAttribute('artista');
            const descripcion = event.target.getAttribute('descripcion');

            document.getElementById('tituloModal').textContent = titulo;
            document.getElementById('artistaModal').textContent = artista;
            document.getElementById('descripcionModal').textContent = descripcion;

            const modalDetalles = new bootstrap.Modal(document.getElementById('modalDetalles'));
            modalDetalles.show();
        });
    });

    /* Botón "Eliminar" */
    document.querySelectorAll('.delete-image').forEach(button => {
        button.addEventListener('click', (event) => {
            const card = event.target.closest('.col');
            card.remove();
        });
    });
});


// ****************************************************************************************************** //

/* Validación de formulario */

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    form.addEventListener('submit', validarForm);

    function validarForm(event) {
        event.preventDefault();
        const nombre = form.querySelector('input[name="Nombre"]');
        const correo = form.querySelector('input[name="Correo"]');
        const direccion = form.querySelector('input[name="Direccion"]');
        const telefono = form.querySelector('input[name="Telefono"]');
        const mensaje = form.querySelector('textarea[name="mensaje"]');
        const tipoConsulta = form.querySelector('select[name="Tipo de consulta"]');

        const esValido = validarCampos([nombre, correo, direccion, telefono, mensaje, tipoConsulta]);

        if (esValido) {
            formularioEnviado();
            form.submit();
        } else {
            formularioNoEnviado();
        }
    }

    function validarCampos(campos) {
        let valido = true;
        campos.forEach(campos => {
            if (!campos.value.trim()) {
                campos.classList.add('is-invalid');
                valido = false;
            } else {
                campos.classList.remove('is-invalid');
            }
        });
        return valido;
    }

    function formularioEnviado() {
        alert('Éxito: El formulario se ha enviado correctamente.');
    }

    function formularioNoEnviado() {
        alert('Error: Por favor, complete todos los campos obligatorios.');
    }
});

/* Cambio tipo de consulta */

document.addEventListener('DOMContentLoaded', () => {
    const mensaje = document.querySelector('textarea[name="mensaje"]');
    const tipoConsulta = document.querySelector('select[name="Tipo de consulta"]');

    mensaje.addEventListener('input', cambiarTipoConsulta);

    function cambiarTipoConsulta() {
        const mensajeValue = mensaje.value.toLowerCase();
        if (mensajeValue.includes('compra')) {
            tipoConsulta.value = 'Compra';
        } else if (mensajeValue.includes('venta')) {
            tipoConsulta.value = 'Venta';
        } else if (mensajeValue.includes('consulta')) {
            tipoConsulta.value = 'Consultas';
        }
    }
});
