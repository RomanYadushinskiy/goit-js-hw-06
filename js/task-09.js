function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonRef = document.querySelector('.change-color');
const textRef = document.querySelector('.color');

buttonRef.addEventListener('click', (event) => {
  document.body.style.backgroundColor = getRandomHexColor();
  textRef.textContent = getRandomHexColor();
});

