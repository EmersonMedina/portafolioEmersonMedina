const toggleMenu = document.querySelector('.toggle-menu'); 
const menu = document.querySelector('.menu'); 
const header = document.querySelector('.header'); 

document.addEventListener('DOMContentLoaded', () => { 
    
    document.addEventListener('click', e => {
        if( e.target.matches('.menu__link') || e.target.matches('.header__name') || e.target.matches('.header__logo')) {
           header.classList.toggle('menu--show');
        }
    })

    toggleMenu.addEventListener('click', () => { 
        header.classList.toggle('menu--show',); 
    }); 

}); 

