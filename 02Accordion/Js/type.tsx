const accordionTitle = document.querySelectorAll('.accordion-title')

const toggle_content = (event: Event) => {
    const title = event.currentTarget as HTMLElement
    const content = title.nextElementSibling as HTMLElement

    title.classList.toggle('active')
    content.classList.toggle('hidden')
}

accordionTitle.forEach((title) => {
    title.addEventListener('click', toggle_content)
})
