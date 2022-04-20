import hamburgerPhoto from "./img/hamburger.jpg";

function createHomeCard() {
  const homePage = document.createElement("div");
  const home = document.createElement("div");
  const hamburgerImg = document.createElement("img");
  const homeTexts = document.createElement("div");
  const title = "Grilled Delights, Crispy Goods!";
  const firstParagraph = `Lorem ipsum dolor, sit amet consectetur adipisicing elit. In
  possimus quae laborum dicta porro nihil totam saepe at eveniet,
  atque modi ullam ipsa amet. Fugiat, atque excepturi ipsum velit
  deleniti voluptatem illum necessitatibus rerum, tempore sit,
  suscipit accusantium. Consectetur ab velit unde aut amet
  repudiandae eaque veritatis numquam, nam architecto quo, a
  deserunt nihil dolore ducimus! Optio sed saepe hic!`;
  const secondParagraph = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
  distinctio aperiam, sit id accusantium, dolores eum soluta minus
  eius expedita, commodi autem possimus reprehenderit? Adipisci cum
  iusto aut molestiae sit quis aperiam similique sunt
  exercitationem?`;

  homePage.id = "homePage";
  home.id = "home";
  home.className = "home";
  hamburgerImg.src = hamburgerPhoto;
  homeTexts.className = "homeTexts";

  homeTexts.appendChild(createText("h2", title));
  homeTexts.appendChild(createText("p", firstParagraph));
  homeTexts.appendChild(createText("p", secondParagraph));

  home.appendChild(hamburgerImg);
  home.appendChild(homeTexts);
  homePage.appendChild(home);
  return homePage;
}

function createText(type, text) {
  const element = document.createElement(type);
  element.textContent = text;
  return element;
}

function loadHome() {
  const container = document.getElementById("content");
  container.appendChild(createHomeCard());
  return container;
}

export default loadHome;
