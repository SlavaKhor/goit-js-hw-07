const inputFiled = document.querySelector("#name-input");
const nameField = document.querySelector("#name-output");

const upadateName = (event) => {
  const name = event.target.value.trim();
  if (name === "") {
    nameField.textContent = "Anonymous";
  } else {
    nameField.textContent = name;
  }
};

inputFiled.addEventListener("input", upadateName);
