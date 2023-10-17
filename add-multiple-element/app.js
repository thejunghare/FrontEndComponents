'use strict'

const addAnotherElement = () => {
    const inputContainer = document.getElementById('inputContainer');

    // Create a new input element of type 'file'
    const inputFile = document.createElement('input');
    inputFile.type = 'file';

    // Create a new input element of type 'text '
    const inputText = document.createElement('input');
    inputText.type = 'text';

    // Append the new input to the container
    inputContainer.appendChild(inputText);
    inputContainer.appendChild(inputFile);
}


const addButton = document.getElementById('addInput')
if (addButton) {
    addButton.addEventListener('click', addAnotherElement);
}
