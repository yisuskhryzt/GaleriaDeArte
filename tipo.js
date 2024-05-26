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
