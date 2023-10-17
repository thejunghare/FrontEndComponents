'use strict'

const copy = (sourceElement, targetElement) => {
    
        // copy style attribute
        let styles = sourceElement.getAttribute('class')
        targetElement.setAttribute("class", styles)
    
        // copy name attribute
        let name = sourceElement.getAttribute('name')
        targetElement.setAttribute('name', name)
   

    /* 
        // more optimized way to do the same
        const attributeToCopy = ['class', 'name']
        attributeToCopy.forEach(attribute => {
            const value = sourceElement.getAttribute(attribute)
            if (value !== null) {
                targetElement.setAttribute(attribute, value)
            }
        }) 
    */
}

const addAnotherElement = () => {
    const inputContainer = document.getElementById('inputContainer')

    // Create a new input element of type 'file'
    const duplicateFileInput = document.createElement('input')
    duplicateFileInput.type = 'file'
    copy(document.getElementById('fileInput'), duplicateFileInput)

    // Create a new input element of type 'text'
    const duplicateTextInput = document.createElement('input')
    duplicateTextInput.type = 'text'
    copy(document.getElementById('textInput'), duplicateTextInput)

    // Append the new input elements to the container
    inputContainer.appendChild(duplicateTextInput)
    inputContainer.appendChild(duplicateFileInput)
};

const addButton = document.getElementById('addInput')
if (addButton) {
    addButton.addEventListener('click', addAnotherElement)
}
