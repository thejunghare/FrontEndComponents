const childs = document.querySelectorAll('.slideShowChild')

let slideIndex = 1;

function nextSlide(n) {
    showSlides(slideIndex += n)
}

// show slides
function showSlides(n) {
    if (n > childs.length) {
        slideIndex = 1
    }

    if (n < 1) {
        slideIndex = childs.length
    }

    for (let index = 0; index < childs.length; index++) {
        childs[index].style.display = 'none'
    }

    childs[slideIndex - 1].style.display = 'block'
}