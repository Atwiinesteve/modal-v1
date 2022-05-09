(function() {

    const openModal = document.querySelector('.open--modal');
    const closeModal = document.querySelector('.close--modal');
    const modal = document.querySelector('.modal');

    openModal.addEventListener('click', function() {
        modal.style.display = 'block';
    });

    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
    });

})()