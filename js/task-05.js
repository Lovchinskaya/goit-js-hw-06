const textInput = document.querySelector('#name-input');
const output = document.querySelector("#name-output");

    
const inputValue = function (event) {
    if (event.currentTarget.value !== "") {
          output.textContent = event.currentTarget.value;
    } else {
         textOutputEl.textContent = "Anonymous";
      }
  
};

textInput.addEventListener('input', inputValue);

