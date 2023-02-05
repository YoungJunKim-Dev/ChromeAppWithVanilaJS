//login - local storage
const loginForm = document.querySelector("#loginForm");
const idInput = document.querySelector("#idInput");
const passwordInput = document.querySelector("#passwordInput");
const loginButton = document.querySelector("#loginButton");
const greetHeading = document.querySelector("h2");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

const login = (e) => {
  e.preventDefault();
  const userName = idInput.value;

  if (userName === savedUserName) {
    idInput.value = "";
    loginForm.classList.toggle(HIDDEN_CLASSNAME);
    greetToUser(savedUserName);
    greetHeading.classList.toggle(HIDDEN_CLASSNAME);
  }
};
const greetToUser = (userName) => {
  greetHeading.textContent = `Hello ${userName}! You are in ${imageName}.`;
};

const savedUserName = localStorage.getItem(USERNAME_KEY);

//초기상태
loginForm.classList.toggle(HIDDEN_CLASSNAME);
loginForm.addEventListener("submit", login);

localStorage.setItem(USERNAME_KEY, "pi");
