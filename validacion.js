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
