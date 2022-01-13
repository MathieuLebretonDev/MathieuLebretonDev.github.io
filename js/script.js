const app = { 
    init() {
        app.handleModals();
    },

    // Ajout des écouteurs sur nos images.
    handleModals() {
        const imgs = document.querySelectorAll('.tags_img');
        for (let img of imgs) {
            // Exécution de la fonction pour montrer la modale
            // de chaque image au passage de la souris.
            img.addEventListener('mouseover', app.showModal);
            img.addEventListener('mouseout', app.hideModal);
        }
    },

    showModal(event) {
        const comment = document.querySelector('.modal');
        comment.classList.remove('hidden');
        console.log('Event trigerred successfully!', event);
    },

    hideModal(event) {
        const comment = document.querySelector('.modal');
        comment.classList.add('hidden');
    }

}

document.addEventListener('DOMContentLoaded', app.init);