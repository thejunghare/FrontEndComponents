// catch the desktop header and mobile header
const mobileHeader = document.getElementById('mobile-header')
const desktopHeader = document.getElementById('desktop-header')
const mobileNavbar = document.getElementById('mobile-navbar')
const menuIcon = document.getElementById('mobile-menu-icon')

// show and hide mobile navbar
menuIcon.addEventListener('click', function(){
    let currentState =  mobileNavbar.style.display 
    if (currentState  == 'block') {
        mobileNavbar.style.display = 'none'
    }else {
        mobileNavbar.style.display = 'block'
    }
})

