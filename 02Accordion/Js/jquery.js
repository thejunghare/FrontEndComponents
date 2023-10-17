$(document).ready(function () {
    $('.accordion-title').click(function () {
        $(this).toggleClass('active')
        $(this).next('.accordion-description').slideToggle()
    })
})
