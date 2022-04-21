import loadHome from "./home";
import loadMenu from "./menu";

function createButtonGroup() {
  const buttonContainer = document.createElement("div");
  const home = document.createElement("button");
  const menu = document.createElement("button");
  const contact = document.createElement("button");
  let buttons = [home, menu, contact];

  buttonContainer.classList.add("buttonGroup");
  setActive(home);

  home.textContent = "Home";
  menu.textContent = "Menu";
  contact.textContent = "Contact";

  home.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) {
      return;
    }
    setActive(home);
    loadHome();
  });

  menu.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) {
      return;
    }
    setActive(menu);
    loadMenu();
  });

  for (let button of buttons) {
    button.type = "button";
    button.classList.add("navButton");
    buttonContainer.appendChild(button);
  }

  return buttonContainer;
}

function createHeader() {
  const header = document.createElement("header");
  const logo = document.createElement("h1");

  header.id = "head";
  header.classList.add("head");
  logo.textContent = "Chris P. Bacon's";

  header.appendChild(logo);
  header.appendChild(createButtonGroup());
  return header;
}

function setActive(button) {
  const buttons = [...document.querySelectorAll(".navButton")];

  for (let btn of buttons) {
    btn.classList.remove("active");
  }

  button.classList.add("active");
}

function loadApp() {
  const html = document.querySelector("html");
  const body = document.querySelector("body");
  html.insertBefore(createHeader(), body);
  loadHome();
}

export default loadApp;
