// catch the elements
const expandButton = document.getElementById('accordion-expand-btn')
const description = document.getElementById('accordion-description')

expandButton.addEventListener('click', function(){
    let currentState = description.style.display

    console.log(`I was called`);

    if (currentState == 'block') {
        description.style.display = 'none'
    } else {
        description.style.display = 'block'
    }
})