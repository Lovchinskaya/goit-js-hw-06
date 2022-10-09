const inputElement = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');
const textCont = textEl.textContent;

inputElement.addEventListener('input', ChangeFontsOnInput);
function ChangeFontsOnInput() {
    const fontSizeRange = Number(inputElement.value);
    textEl.style.fontSize = `${fontSizeRange}px`;
}



