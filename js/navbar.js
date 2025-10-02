const menu = document.querySelector('.menu');
const toggle = document.querySelector('.menu-hamburguesa');

toggle.addEventListener('click', () => {
  menu.classList.toggle('show');
});