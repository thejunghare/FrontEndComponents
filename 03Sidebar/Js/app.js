// catch the sidebar
const sidebar = document.getElementById('sidebar')
const menuButton = document.getElementById('icon')

menuButton.addEventListener('click', function () {
    console.log(`I was clicked`);
    let currentWidth = sidebar.style.width

    if (currentWidth == '0px') {
        sidebar.style.width = '250px'
        console.log(`opening sidebar`);

    } else {
        sidebar.style.width = '0px'
        console.log(`closing sidebar`);

    }
})