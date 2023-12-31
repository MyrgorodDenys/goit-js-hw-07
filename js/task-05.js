const changeColorButton = document.querySelector('.change-color');
const bodyElement = document.querySelector('body');
const colorElement = document.querySelector('.color');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

changeColorButton.addEventListener('click', function () {
  const newColor = getRandomHexColor();
  bodyElement.style.backgroundColor = newColor;
  colorElement.textContent = newColor;
});
