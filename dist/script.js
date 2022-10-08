const navMobile = document.querySelector('#nav-mobile');
const hamburger = document.querySelector('#hamburger');

hamburger.addEventListener('click', () => {
  navMobile.classList.toggle('hidden');
});
