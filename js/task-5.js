function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorButton = document.querySelector(".change-color");
const body = document.querySelector("body");
const colorSpan = document.querySelector(".color");

const clickHandler = () => {
  const colorHex = getRandomHexColor();
  body.style.backgroundColor = colorHex;
  colorSpan.textContent = colorHex;
};

changeColorButton.addEventListener("click", clickHandler);
