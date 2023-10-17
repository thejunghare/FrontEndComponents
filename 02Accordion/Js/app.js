/* 
// catch the elements
const accordionTitle = document.getElementsByClassName('accordion-title')
const button = document.getElementsByClassName('accordion-expand-button')
const description = document.getElementsByClassName('accordion-description')

// show and hide accordion content
for (let i = 0; i < accordionTitle.length; i++) {
    accordionTitle[i].addEventListener("click", function () {
        this.classList.toggle("active");
        let content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}
 */

const accordionTitles = document.querySelectorAll('.accordion-title')

const toggleContent = (event) => {
    const title = event.currentTarget;
    const content = title.nextElementSibling

    title.classList.toggle('active')
    content.style.display = content.style.display === 'block' ? 'none' : 'block';
}

accordionTitles.forEach(title => {
    title.addEventListener('click', toggleContent)
});
