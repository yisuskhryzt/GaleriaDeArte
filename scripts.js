document.addEventListener('DOMContentLoaded', () => {
    // Ver detalles
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

    // Eliminar imagen
    document.querySelectorAll('.delete-image').forEach(button => {
        button.addEventListener('click', (event) => {
            const card = event.target.closest('.col');
            card.remove();
        });
    });
});

