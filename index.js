const menuIcon = document.querySelector("#menuToggle input");
const navbar = document.getElementsByTagName('nav');
const container = document.querySelector('body');

menuIcon.addEventListener('click' , () => {
  menuIcon.classList.toggle('change');
  container.classList.toggle('menu-open');
});