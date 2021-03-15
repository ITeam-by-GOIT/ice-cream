(() => {
  const refs = {
    openModalBtn: document.querySelector('[contacts__modal-open]'),
    closeModalBtn: document.querySelector('[contacts__modal-close]'),
    modal: document.querySelector('[contacts__modal-map]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();