
const burgerIcon = document.querySelector('#burger');
const navbarMenu = document.querySelector('#nav-links');

burgerIcon.addEventListener('click',() => {
    navbarMenu.classList.toggle('is-active');
})

  
  var typed = new Typed('#typed', {
    strings: ["Tired of post editing videos for hiding sensitive data", "Tired of closing tabs when you are screen sharing","Tired of Shoulder Surfing"],
    typeSpeed: 50
  });