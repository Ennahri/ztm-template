const toggleIcon = document.getElementsByClassName('toggle-menu')[0];
const menuItem = document.getElementsByClassName('menu-items')[0];
const menuIcon = document.getElementsByClassName('menu-icon')[0];
const subMenu = document.getElementsByClassName('sub-menu')[0];
toggleIcon.addEventListener("click", () => {
    menuItem.classList.toggle('active');
})
menuItem.addEventListener("click", () => {
    subMenu.classList.toggle('.open');
})