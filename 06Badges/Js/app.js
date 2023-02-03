// catch the button
const button = document.querySelector('.badge-link')
// catch the badge
const count = document.querySelector('.badge-icon')


// Increment the counter and show display count in badge
button.addEventListener('click', function () {
    count.innerHTML++;
    console.log(count.innerHTML) // to verfy the counter
    button.classList.add('space') // add space class to button elemneet
    count.style.display = 'inline-block'
})