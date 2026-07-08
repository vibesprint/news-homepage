const nav = document.querySelector('nav.nav-header-component')
const nav_menu = nav.querySelector('#navigation-menu.menu-component')
const menu_icon = nav.querySelector('#hamburger-menu')

menu_icon.addEventListener('click', () => {
    nav_menu.classList.add('open')
    menu_icon.setAttribute('aria-expanded', "true");
    nav_menu.style.visibility = "visible";

    nav_menu.querySelector('a')?.focus()
})

function closeMenu() {
    nav_menu.classList.remove('open')
    menu_icon.setAttribute('aria-expanded', 'false')
    nav_menu.style.visibility = "hidden";
}

const close_menu_btn = nav_menu.querySelector('.heading')
close_menu_btn.addEventListener('click', () => {
    closeMenu()
})

nav_menu.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        closeMenu()
        menu_icon.focus();
    }
})
