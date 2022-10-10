const textInput = document.querySelector('#name-input');
const outPut = document.querySelector("#name-output");

  
function inputValue (event) {
      if (event.currentTarget.value !== "") {
            outPut.textContent = event.currentTarget.value;
      } else {
            outPut.textContent = "Anonymous";
      }
};
textInput.addEventListener('input', inputValue);


