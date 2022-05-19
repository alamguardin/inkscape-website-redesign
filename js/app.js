const btnOpenMenu = document.querySelector('#btn-open-menu'),
      btnCloseMenu = document.querySelector('#btn-close-menu'),
      menu = document.querySelector('.header__menu');

const toggleMenu = () => {
    menu.classList.toggle('active')
}

btnOpenMenu.addEventListener('click', () => toggleMenu())
btnCloseMenu.addEventListener('click', () => toggleMenu())