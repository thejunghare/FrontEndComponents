// catch the button
const button = document.getElementById('button');

// catch the navbar
const dropdown = document.getElementById('drop-down');

button.addEventListener('click', function () {
    if (dropdown.style.display == 'none') {
        dropdown.style.display = 'block';
    } else {
        dropdown.style.display = 'none';
    }
})

window.onclick = function (event) {
    if (event.target == dropdown) {
        dropdown.style.display = 'none'
    }
}