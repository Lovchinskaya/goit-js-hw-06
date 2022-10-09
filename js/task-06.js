const inputField = document.querySelector('#validation-input');
inputField.addEventListener('blur', outOfFocusInputName);
console.dir(inputField);

function outOfFocusInputName(event) {
    inputField.classList.remove('valid');
    inputField.classList.remove('invalid');
    console.log(event.currentTarget.value);
    if (event.currentTarget.value.length === 6) {
        //inputName.classList.remove('invalid');
        inputField.classList.add('valid');
    } else {
        // inputName.classList.remove('valid');
        inputField.classList.add('invalid');
    }
    return inputField;
}