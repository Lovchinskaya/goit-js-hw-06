function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnColorChange = document.querySelector('.change-color');
const bgrColor = document.querySelector('body');
const TextColorRef = document.querySelector('.color');

btnColorChange.addEventListener('click', changeBgdColor);

function changeBgdColor() {
  const newColor = "#" + Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)
    .toLowerCase();
  TextColorRef.textContent = newColor;
  bgrColor.style.background = newColor;
  console.dir(newColor);
}


