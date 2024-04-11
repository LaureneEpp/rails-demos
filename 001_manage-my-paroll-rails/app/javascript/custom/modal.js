// get all links
const openModalButtons = document.querySelectorAll('.taxation-button');
const closeModalButtons = document.querySelectorAll('.closeModalButton');
const modals = document.querySelectorAll('.taxation-modal');
const overlay = document.querySelector('#overlay');

// Close modal : not visible, bg-opacity 

function closeModal() {
    modals.forEach(modal => {
        modal.classList.add('hidden');
        overlay.classList.add('hidden');
        document.body.classList.remove('overflow-hidden');
        document.removeEventListener('keydown', handleKeyDown);      
    })
    // console.log('Test for modal on closed button');
}

// escape when click on X/close
function handleKeyDown(event) {
    if (event.key === 'Escape') {
      closeModal();
    }
}

closeModalButtons.forEach(close => close.addEventListener('click', closeModal))

// Open modal : visible
// if click on allowance name in side bar 
openModalButtons.forEach(btn => btn.addEventListener('click', (e) => {
    const selectBox = btn.dataset.box;
    // console.log(selectBox)
    const targetModal = document.querySelector('[data-modal="' + selectBox + '"]');
    // console.log(targetModal);
    targetModal.classList.remove('hidden');
    targetModal.classList.add('z-40')
    overlay.classList.remove('hidden');
    document.body.classList.add('overflow-hidden');
    document.addEventListener('keydown', handleKeyDown);
    // console.log('Test for modal on open button');
} ))