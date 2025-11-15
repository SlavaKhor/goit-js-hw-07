const form = document.querySelector(".login-form");
form.noValidate = true;

const emailInput = document.querySelector('[name="email"]');
const passwordInput = document.querySelector('[name="password"]');

const submitFunction = (event) => {
  event.preventDefault();

  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  if (email === "" && password === "") {
    window.alert("All form fields must be filled in");
  } else if (email === "") {
    window.alert("Email field required and can not be empty");
  } else if (password === "") {
    window.alert("Password field required and can not be empty");
  } else if (!email.includes("@")) {
    window.alert("Please enter a valid email address");
  } else {
    const submitedInfo = {};

    submitedInfo.email = email.toLowerCase();
    submitedInfo.password = password;

    console.log(submitedInfo);
    form.reset();
  }
};

form.addEventListener("submit", submitFunction);
