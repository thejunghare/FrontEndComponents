// catch the modal content
const modalContent = document.querySelector('.modal-content')

// catch the modal button
const modalButton = document.querySelector('.modal-button')


// Modal close button
const closeButton = document.querySelector('.ri-close-line')

modalButton.addEventListener('click', function () {
    modalContent.style.display = 'block'
})


closeButton.addEventListener('click', function(){
    modalContent.style.display = 'none'
})