
        
(() => {
  const refs = {
    openModalBtn: document.querySelector('[contacts__modal-open-fr]'),
    closeModalBtn: document.querySelector('[contacts__modal-close-fr]'),
    modal: document.querySelector('[contacts__modal-fr]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();