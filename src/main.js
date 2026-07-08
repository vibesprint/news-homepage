const nav = document.querySelector('nav.nav-header-component')
const nav_menu = nav.querySelector('#navigation-menu.menu-component')
const menu_icon = nav.querySelector('#hamburger-menu')

menu_icon.addEventListener('click', () => {
    nav_menu.classList.add('open')
})

const close_menu_btn = nav_menu.querySelector('.heading')
close_menu_btn.addEventListener('click', () => {
    nav_menu.classList.remove('open')
})
