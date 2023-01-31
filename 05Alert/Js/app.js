// catch the alert container
const alertContainer = document.querySelector('.alert-container')
// catch the close button
const closeButton = document.querySelector('.icon')

// display none on close button
closeButton.addEventListener('click', function(){
    alertContainer.style.display = 'none'
})