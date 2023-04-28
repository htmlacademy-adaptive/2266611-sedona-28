const burgerButton = document.querySelector('.burger');
const pageHeader = document.querySelector('.page-header');

pageHeader.classList.remove('no-js');
burgerButton.addEventListener('click', () => pageHeader.classList.toggle('is-open'));
