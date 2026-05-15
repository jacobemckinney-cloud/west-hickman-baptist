const toggleButton = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

if (toggleButton && navMenu) {
  toggleButton.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('open');
    toggleButton.setAttribute('aria-expanded', String(isOpen));
  });
}
