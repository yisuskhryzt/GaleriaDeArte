/* Modal para Galeria */

document.addEventListener('DOMContentLoaded', () => {
    /* Detalles */
    document.querySelectorAll('.view-details').forEach(button => {
        button.addEventListener('click', (event) => {
            const title = event.target.getAttribute('data-title');
            const artist = event.target.getAttribute('data-artist');
            const description = event.target.getAttribute('data-description');

            document.getElementById('modalTitle').textContent = title;
            document.getElementById('modalArtist').textContent = artist;
            document.getElementById('modalDescription').textContent = description;

            const detailsModal = new bootstrap.Modal(document.getElementById('detailsModal'));
            detailsModal.show();
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
    form.addEventListener('submit', validateForm);

    function validateForm(event) {
        event.preventDefault();
        const nombre = form.querySelector('input[name="Nombre"]');
        const correo = form.querySelector('input[name="Correo"]');
        const direccion = form.querySelector('input[name="Direccion"]');
        const telefono = form.querySelector('input[name="Telefono"]');
        const mensaje = form.querySelector('textarea[name="mensaje"]');
        const tipoConsulta = form.querySelector('select[name="Tipo de consulta"]');

        const isValid = validateFields([nombre, correo, direccion, telefono, mensaje, tipoConsulta]);

        if (isValid) {
            showSuccessMessage();
            form.submit();
        } else {
            showErrorMessage();
        }
    }

    function validateFields(fields) {
        let valid = true;
        fields.forEach(field => {
            if (!field.value.trim()) {
                field.classList.add('is-invalid');
                valid = false;
            } else {
                field.classList.remove('is-invalid');
            }
        });
        return valid;
    }

    function showSuccessMessage() {
        alert('Éxito: El formulario se ha enviado correctamente.');
    }

    function showErrorMessage() {
        alert('Error: Por favor, complete todos los campos obligatorios.');
    }
});

/* Cambio tipo de consulta */

document.addEventListener('DOMContentLoaded', () => {
    const mensaje = document.querySelector('textarea[name="mensaje"]');
    const tipoConsulta = document.querySelector('select[name="Tipo de consulta"]');

    mensaje.addEventListener('input', updateTipoConsulta);

    function updateTipoConsulta() {
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
