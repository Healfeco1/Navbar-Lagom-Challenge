const menuIcon = document.querySelector("#menuToggle input");
const navbar = document.querySelector('.menu');
const container = document.querySelector('body');

menuIcon.addEventListener('click' , () => {
  container.classList.toggle('menu-open');
});
$(document).keyup(function(e) {
  // escape key maps to keycode `27`
  if (e.keyCode == 27 && menuIcon.checked == true) 
  { 
    closeNavbar();
  }
});

$('body').click(function (e) { 
  if(!navbar.contains(e.target) && !menuIcon.contains(e.target) && menuIcon.checked == true){
    closeNavbar();
  }
});

// Close the Menu Navbar
function closeNavbar (){
  container.classList.toggle('menu-open');
  menuIcon.checked = false;
}