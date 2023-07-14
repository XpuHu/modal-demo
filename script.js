'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsShowModal = document.querySelectorAll('.show-modal');

btnsShowModal.forEach((btn) => btn.addEventListener('click', showModals));

btnCloseModal.addEventListener('click', hideModals);

overlay.addEventListener('click', hideModals);

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !checkHidden(modal)) {
        hideModals();
    }
});

function showModals() {
    showElement(modal);
    showElement(overlay);
}

function showElement(element) {
    element.classList.remove('hidden');
}

function hideModals() {
    hideElement(modal);
    hideElement(overlay);
}

function hideElement(element) {
    element.classList.add('hidden');
}

function checkHidden(element) {
    return element.classList.contains('hidden');
}
