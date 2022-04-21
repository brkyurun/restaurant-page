/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/appCreate.js":
/*!**************************!*\
  !*** ./src/appCreate.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/menu.js");



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
    (0,_home__WEBPACK_IMPORTED_MODULE_0__["default"])();
  });

  menu.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) {
      return;
    }
    setActive(menu);
    (0,_menu__WEBPACK_IMPORTED_MODULE_1__["default"])();
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
  (0,_home__WEBPACK_IMPORTED_MODULE_0__["default"])();
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadApp);


/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _img_hamburger_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/hamburger.jpg */ "./src/img/hamburger.jpg");


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
  hamburgerImg.src = _img_hamburger_jpg__WEBPACK_IMPORTED_MODULE_0__;
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
  container.innerHTML = "";
  container.appendChild(createHomeCard());
  return container;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);


/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createMenu() {
  const menuContainer = document.createElement("div");
  const foodContainer = document.createElement("div");
  const dessertContainer = document.createElement("div");
  const drinksContainer = document.createElement("div");
  foodContainer.classList.add("cardContainer");
  dessertContainer.classList.add("cardContainer");
  drinksContainer.classList.add("cardContainer");
  menuContainer.classList.add("menuContainer");

  foodContainer.appendChild(
    createCard(
      "Big Chris",
      `Big Chris Bun, Beef Patty, Lettuce, Big Chris Sauce, Cheddar
    Cheese, Pickle Slices, and Onions`,
      "3.95"
    )
  );

  foodContainer.appendChild(
    createCard(
      "Gut Wrencher",
      `Gut Wrencher Bun, Quarter Pound Beef Patty, Cheddar Cheese, Ketchup, Pickle Slices, Onions, Mustard`,
      "3.75"
    )
  );

  foodContainer.appendChild(
    createCard(
      "Soul Demolisher",
      `Gut Wrencher Bun, Half Pound Beef Patty, Cheddar Cheese, Ketchup, Pickle Slices, Onions, Mustard`,
      "7.75"
    )
  );

  foodContainer.appendChild(
    createCard(
      "Chris P. Bacon Special",
      `Gut Wrencher Bun, Quarter Pound Beef Patty, Thick Cut Applewood Smoked Bacon, Cheddar Cheese, Ketchup, Pickle Slices, Onions, Mustard`,
      "5.25"
    )
  );

  foodContainer.appendChild(
    createCard(
      "Spicy Grilled Chicken",
      `Potato Roll, Crispy Chicken Fillet, Roma Tomato, Chris P.'s Hellfire Sauce, Lettuce`,
      "4.40"
    )
  );

  foodContainer.appendChild(
    createCard(
      "Sizzlin' Grilled Chicken",
      `Potato Roll, Crispy Chicken Fillet, Crinkle Cut Pickle, Chris P.'s Hellfire Sauce, Butter`,
      "3.60"
    )
  );

  foodContainer.appendChild(
    createCard(
      "Double Trouble",
      `Regular Bun, Smashed Beef Patty, Cheddar Cheese, Pickle Slices, Ketchup, Onions, Mustard`,
      "2.25"
    )
  );

  foodContainer.appendChild(
    createCard(
      "The Classic",
      `Regular Bun, Smashed Beef Patty, Cheddar Cheese, Pickle Slices, Ketchup, Onions, Mustard`,
      "1.55"
    )
  );

  dessertContainer.appendChild(
    createCard(
      "Chris P. Apple Pie",
      `Apple Pie filled with 100% organic apples, and a crispy crust baked to perfection and topped with sprinkled sugar. `,
      "2.50"
    )
  );

  dessertContainer.appendChild(
    createCard(
      "Choccy Chip Cookies",
      `Classic chocolate chip cookies, loaded with chocolate chips. It's a soft baked cookie and warmed to perfection. Treat yourself to one today!`,
      "1.00 / piece"
    )
  );

  dessertContainer.appendChild(
    createCard(
      "Cinnamon Rolls",
      `Cinnamon roll served warm and loaded with cinnamon layered between buttery, flaky pastry dough that is drizzled with a delicious cream cheese icing. Yumms!`,
      "1.50 / piece"
    )
  );

  dessertContainer.appendChild(
    createCard(
      "Apple Frittata",
      `A classic frittata made with cinnamon and apples fried to a golden brown and covered with a sweet glaze icing.`,
      "1.25 / piece"
    )
  );

  drinksContainer.appendChild(
    createCard(
      "Choccy Shake",
      `The perfect sweet treat for any time of the day. Our chocolate shake is made with delicious soft serve, chocolate syrup and finished off with a creamy whipped topping.`,
      "4.49"
    )
  );

  drinksContainer.appendChild(
    createCard(
      "Vanilla Shake",
      `Made with our creamy vanilla soft serve and topped with whipped topping for a cool, tasty treat.`,
      "4.49"
    )
  );

  drinksContainer.appendChild(
    createCard(
      "Strawberry Banana Smoothie",
      `Featuring the perfect combination of fruit purees and fruit juices, such as strawberry and banana, blended with creamy low fat yogurt and ice.`,
      ""
    )
  );

  drinksContainer.appendChild(
    createCard(
      "PPAP",
      `Featuring the sweet combination of fruit juices and purees such as mango and pineapple, blended with creamy low fat yogurt and ice.`,
      ""
    )
  );

  menuContainer.appendChild(createTitle("Burgers"));
  menuContainer.appendChild(foodContainer);

  menuContainer.appendChild(createTitle("Desserts"));
  menuContainer.appendChild(dessertContainer);

  menuContainer.appendChild(createTitle("Drinks"));
  menuContainer.appendChild(drinksContainer);

  return menuContainer;
}

function createCard(name, description, price) {
  const card = document.createElement("div");
  const foodImage = document.createElement("img");
  const textGroup = document.createElement("div");
  const cardTitle = document.createElement("h2");
  const cardDescription = document.createElement("p");
  const cardPrice = document.createElement("h3");
  const texts = [cardTitle, cardDescription, cardPrice];

  card.classList.add("card");
  foodImage.src = `foods/${name.toLowerCase()}.jpeg`;
  foodImage.alt = name;

  textGroup.classList.add("textGroup");

  cardTitle.classList.add("cardTitle");
  cardTitle.textContent = name;

  cardDescription.classList.add("cardDescription");
  cardDescription.textContent = description;

  cardPrice.classList.add("cardPrice");
  cardPrice.textContent = `$${price}`;

  for (let textElement of texts) {
    textGroup.appendChild(textElement);
  }

  card.appendChild(foodImage);
  card.appendChild(textGroup);

  return card;
}

function createTitle(text) {
  const menuTitle = document.createElement("div");
  const titleText = document.createElement("h2");

  menuTitle.classList.add("menuTitle");
  titleText.textContent = text;
  menuTitle.appendChild(titleText);

  return menuTitle;
}

function loadMenu() {
  const container = document.querySelector("#content");
  container.innerHTML = "";
  container.appendChild(createMenu());
  return container;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);


/***/ }),

/***/ "./src/img/hamburger.jpg":
/*!*******************************!*\
  !*** ./src/img/hamburger.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "abeee13789cc446cd25b.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _appCreate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appCreate */ "./src/appCreate.js");


(0,_appCreate__WEBPACK_IMPORTED_MODULE_0__["default"])();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQThCO0FBQ0E7O0FBRTlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxpREFBUTtBQUNaLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksaURBQVE7QUFDWixHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLGlEQUFRO0FBQ1Y7O0FBRUEsaUVBQWUsT0FBTyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDeEUwQjs7QUFFakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiwrQ0FBYztBQUNuQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxRQUFRLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ2xEeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCLG1CQUFtQjtBQUM5Qzs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSw4QkFBOEIsTUFBTTs7QUFFcEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFFBQVEsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMzTXhCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7QUNma0M7O0FBRWxDLHNEQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2FwcENyZWF0ZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBsb2FkSG9tZSBmcm9tIFwiLi9ob21lXCI7XG5pbXBvcnQgbG9hZE1lbnUgZnJvbSBcIi4vbWVudVwiO1xuXG5mdW5jdGlvbiBjcmVhdGVCdXR0b25Hcm91cCgpIHtcbiAgY29uc3QgYnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjb25zdCBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgbGV0IGJ1dHRvbnMgPSBbaG9tZSwgbWVudSwgY29udGFjdF07XG5cbiAgYnV0dG9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJidXR0b25Hcm91cFwiKTtcbiAgc2V0QWN0aXZlKGhvbWUpO1xuXG4gIGhvbWUudGV4dENvbnRlbnQgPSBcIkhvbWVcIjtcbiAgbWVudS50ZXh0Q29udGVudCA9IFwiTWVudVwiO1xuICBjb250YWN0LnRleHRDb250ZW50ID0gXCJDb250YWN0XCI7XG5cbiAgaG9tZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHNldEFjdGl2ZShob21lKTtcbiAgICBsb2FkSG9tZSgpO1xuICB9KTtcblxuICBtZW51LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgc2V0QWN0aXZlKG1lbnUpO1xuICAgIGxvYWRNZW51KCk7XG4gIH0pO1xuXG4gIGZvciAobGV0IGJ1dHRvbiBvZiBidXR0b25zKSB7XG4gICAgYnV0dG9uLnR5cGUgPSBcImJ1dHRvblwiO1xuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwibmF2QnV0dG9uXCIpO1xuICAgIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChidXR0b24pO1xuICB9XG5cbiAgcmV0dXJuIGJ1dHRvbkNvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlSGVhZGVyKCkge1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpO1xuICBjb25zdCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuXG4gIGhlYWRlci5pZCA9IFwiaGVhZFwiO1xuICBoZWFkZXIuY2xhc3NMaXN0LmFkZChcImhlYWRcIik7XG4gIGxvZ28udGV4dENvbnRlbnQgPSBcIkNocmlzIFAuIEJhY29uJ3NcIjtcblxuICBoZWFkZXIuYXBwZW5kQ2hpbGQobG9nbyk7XG4gIGhlYWRlci5hcHBlbmRDaGlsZChjcmVhdGVCdXR0b25Hcm91cCgpKTtcbiAgcmV0dXJuIGhlYWRlcjtcbn1cblxuZnVuY3Rpb24gc2V0QWN0aXZlKGJ1dHRvbikge1xuICBjb25zdCBidXR0b25zID0gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubmF2QnV0dG9uXCIpXTtcblxuICBmb3IgKGxldCBidG4gb2YgYnV0dG9ucykge1xuICAgIGJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICB9XG5cbiAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG59XG5cbmZ1bmN0aW9uIGxvYWRBcHAoKSB7XG4gIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaHRtbFwiKTtcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuICBodG1sLmluc2VydEJlZm9yZShjcmVhdGVIZWFkZXIoKSwgYm9keSk7XG4gIGxvYWRIb21lKCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRBcHA7XG4iLCJpbXBvcnQgaGFtYnVyZ2VyUGhvdG8gZnJvbSBcIi4vaW1nL2hhbWJ1cmdlci5qcGdcIjtcblxuZnVuY3Rpb24gY3JlYXRlSG9tZUNhcmQoKSB7XG4gIGNvbnN0IGhvbWVQYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGhhbWJ1cmdlckltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGNvbnN0IGhvbWVUZXh0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHRpdGxlID0gXCJHcmlsbGVkIERlbGlnaHRzLCBDcmlzcHkgR29vZHMhXCI7XG4gIGNvbnN0IGZpcnN0UGFyYWdyYXBoID0gYExvcmVtIGlwc3VtIGRvbG9yLCBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBJblxuICBwb3NzaW11cyBxdWFlIGxhYm9ydW0gZGljdGEgcG9ycm8gbmloaWwgdG90YW0gc2FlcGUgYXQgZXZlbmlldCxcbiAgYXRxdWUgbW9kaSB1bGxhbSBpcHNhIGFtZXQuIEZ1Z2lhdCwgYXRxdWUgZXhjZXB0dXJpIGlwc3VtIHZlbGl0XG4gIGRlbGVuaXRpIHZvbHVwdGF0ZW0gaWxsdW0gbmVjZXNzaXRhdGlidXMgcmVydW0sIHRlbXBvcmUgc2l0LFxuICBzdXNjaXBpdCBhY2N1c2FudGl1bS4gQ29uc2VjdGV0dXIgYWIgdmVsaXQgdW5kZSBhdXQgYW1ldFxuICByZXB1ZGlhbmRhZSBlYXF1ZSB2ZXJpdGF0aXMgbnVtcXVhbSwgbmFtIGFyY2hpdGVjdG8gcXVvLCBhXG4gIGRlc2VydW50IG5paGlsIGRvbG9yZSBkdWNpbXVzISBPcHRpbyBzZWQgc2FlcGUgaGljIWA7XG4gIGNvbnN0IHNlY29uZFBhcmFncmFwaCA9IGBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBNYWlvcmVzXG4gIGRpc3RpbmN0aW8gYXBlcmlhbSwgc2l0IGlkIGFjY3VzYW50aXVtLCBkb2xvcmVzIGV1bSBzb2x1dGEgbWludXNcbiAgZWl1cyBleHBlZGl0YSwgY29tbW9kaSBhdXRlbSBwb3NzaW11cyByZXByZWhlbmRlcml0PyBBZGlwaXNjaSBjdW1cbiAgaXVzdG8gYXV0IG1vbGVzdGlhZSBzaXQgcXVpcyBhcGVyaWFtIHNpbWlsaXF1ZSBzdW50XG4gIGV4ZXJjaXRhdGlvbmVtP2A7XG5cbiAgaG9tZVBhZ2UuaWQgPSBcImhvbWVQYWdlXCI7XG4gIGhvbWUuaWQgPSBcImhvbWVcIjtcbiAgaG9tZS5jbGFzc05hbWUgPSBcImhvbWVcIjtcbiAgaGFtYnVyZ2VySW1nLnNyYyA9IGhhbWJ1cmdlclBob3RvO1xuICBob21lVGV4dHMuY2xhc3NOYW1lID0gXCJob21lVGV4dHNcIjtcblxuICBob21lVGV4dHMuYXBwZW5kQ2hpbGQoY3JlYXRlVGV4dChcImgyXCIsIHRpdGxlKSk7XG4gIGhvbWVUZXh0cy5hcHBlbmRDaGlsZChjcmVhdGVUZXh0KFwicFwiLCBmaXJzdFBhcmFncmFwaCkpO1xuICBob21lVGV4dHMuYXBwZW5kQ2hpbGQoY3JlYXRlVGV4dChcInBcIiwgc2Vjb25kUGFyYWdyYXBoKSk7XG5cbiAgaG9tZS5hcHBlbmRDaGlsZChoYW1idXJnZXJJbWcpO1xuICBob21lLmFwcGVuZENoaWxkKGhvbWVUZXh0cyk7XG4gIGhvbWVQYWdlLmFwcGVuZENoaWxkKGhvbWUpO1xuICByZXR1cm4gaG9tZVBhZ2U7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRleHQodHlwZSwgdGV4dCkge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcbiAgZWxlbWVudC50ZXh0Q29udGVudCA9IHRleHQ7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5mdW5jdGlvbiBsb2FkSG9tZSgpIHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuICBjb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUhvbWVDYXJkKCkpO1xuICByZXR1cm4gY29udGFpbmVyO1xufVxuXG5leHBvcnQgZGVmYXVsdCBsb2FkSG9tZTtcbiIsImZ1bmN0aW9uIGNyZWF0ZU1lbnUoKSB7XG4gIGNvbnN0IG1lbnVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBmb29kQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgZGVzc2VydENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGRyaW5rc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGZvb2RDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNhcmRDb250YWluZXJcIik7XG4gIGRlc3NlcnRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNhcmRDb250YWluZXJcIik7XG4gIGRyaW5rc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY2FyZENvbnRhaW5lclwiKTtcbiAgbWVudUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibWVudUNvbnRhaW5lclwiKTtcblxuICBmb29kQ29udGFpbmVyLmFwcGVuZENoaWxkKFxuICAgIGNyZWF0ZUNhcmQoXG4gICAgICBcIkJpZyBDaHJpc1wiLFxuICAgICAgYEJpZyBDaHJpcyBCdW4sIEJlZWYgUGF0dHksIExldHR1Y2UsIEJpZyBDaHJpcyBTYXVjZSwgQ2hlZGRhclxuICAgIENoZWVzZSwgUGlja2xlIFNsaWNlcywgYW5kIE9uaW9uc2AsXG4gICAgICBcIjMuOTVcIlxuICAgIClcbiAgKTtcblxuICBmb29kQ29udGFpbmVyLmFwcGVuZENoaWxkKFxuICAgIGNyZWF0ZUNhcmQoXG4gICAgICBcIkd1dCBXcmVuY2hlclwiLFxuICAgICAgYEd1dCBXcmVuY2hlciBCdW4sIFF1YXJ0ZXIgUG91bmQgQmVlZiBQYXR0eSwgQ2hlZGRhciBDaGVlc2UsIEtldGNodXAsIFBpY2tsZSBTbGljZXMsIE9uaW9ucywgTXVzdGFyZGAsXG4gICAgICBcIjMuNzVcIlxuICAgIClcbiAgKTtcblxuICBmb29kQ29udGFpbmVyLmFwcGVuZENoaWxkKFxuICAgIGNyZWF0ZUNhcmQoXG4gICAgICBcIlNvdWwgRGVtb2xpc2hlclwiLFxuICAgICAgYEd1dCBXcmVuY2hlciBCdW4sIEhhbGYgUG91bmQgQmVlZiBQYXR0eSwgQ2hlZGRhciBDaGVlc2UsIEtldGNodXAsIFBpY2tsZSBTbGljZXMsIE9uaW9ucywgTXVzdGFyZGAsXG4gICAgICBcIjcuNzVcIlxuICAgIClcbiAgKTtcblxuICBmb29kQ29udGFpbmVyLmFwcGVuZENoaWxkKFxuICAgIGNyZWF0ZUNhcmQoXG4gICAgICBcIkNocmlzIFAuIEJhY29uIFNwZWNpYWxcIixcbiAgICAgIGBHdXQgV3JlbmNoZXIgQnVuLCBRdWFydGVyIFBvdW5kIEJlZWYgUGF0dHksIFRoaWNrIEN1dCBBcHBsZXdvb2QgU21va2VkIEJhY29uLCBDaGVkZGFyIENoZWVzZSwgS2V0Y2h1cCwgUGlja2xlIFNsaWNlcywgT25pb25zLCBNdXN0YXJkYCxcbiAgICAgIFwiNS4yNVwiXG4gICAgKVxuICApO1xuXG4gIGZvb2RDb250YWluZXIuYXBwZW5kQ2hpbGQoXG4gICAgY3JlYXRlQ2FyZChcbiAgICAgIFwiU3BpY3kgR3JpbGxlZCBDaGlja2VuXCIsXG4gICAgICBgUG90YXRvIFJvbGwsIENyaXNweSBDaGlja2VuIEZpbGxldCwgUm9tYSBUb21hdG8sIENocmlzIFAuJ3MgSGVsbGZpcmUgU2F1Y2UsIExldHR1Y2VgLFxuICAgICAgXCI0LjQwXCJcbiAgICApXG4gICk7XG5cbiAgZm9vZENvbnRhaW5lci5hcHBlbmRDaGlsZChcbiAgICBjcmVhdGVDYXJkKFxuICAgICAgXCJTaXp6bGluJyBHcmlsbGVkIENoaWNrZW5cIixcbiAgICAgIGBQb3RhdG8gUm9sbCwgQ3Jpc3B5IENoaWNrZW4gRmlsbGV0LCBDcmlua2xlIEN1dCBQaWNrbGUsIENocmlzIFAuJ3MgSGVsbGZpcmUgU2F1Y2UsIEJ1dHRlcmAsXG4gICAgICBcIjMuNjBcIlxuICAgIClcbiAgKTtcblxuICBmb29kQ29udGFpbmVyLmFwcGVuZENoaWxkKFxuICAgIGNyZWF0ZUNhcmQoXG4gICAgICBcIkRvdWJsZSBUcm91YmxlXCIsXG4gICAgICBgUmVndWxhciBCdW4sIFNtYXNoZWQgQmVlZiBQYXR0eSwgQ2hlZGRhciBDaGVlc2UsIFBpY2tsZSBTbGljZXMsIEtldGNodXAsIE9uaW9ucywgTXVzdGFyZGAsXG4gICAgICBcIjIuMjVcIlxuICAgIClcbiAgKTtcblxuICBmb29kQ29udGFpbmVyLmFwcGVuZENoaWxkKFxuICAgIGNyZWF0ZUNhcmQoXG4gICAgICBcIlRoZSBDbGFzc2ljXCIsXG4gICAgICBgUmVndWxhciBCdW4sIFNtYXNoZWQgQmVlZiBQYXR0eSwgQ2hlZGRhciBDaGVlc2UsIFBpY2tsZSBTbGljZXMsIEtldGNodXAsIE9uaW9ucywgTXVzdGFyZGAsXG4gICAgICBcIjEuNTVcIlxuICAgIClcbiAgKTtcblxuICBkZXNzZXJ0Q29udGFpbmVyLmFwcGVuZENoaWxkKFxuICAgIGNyZWF0ZUNhcmQoXG4gICAgICBcIkNocmlzIFAuIEFwcGxlIFBpZVwiLFxuICAgICAgYEFwcGxlIFBpZSBmaWxsZWQgd2l0aCAxMDAlIG9yZ2FuaWMgYXBwbGVzLCBhbmQgYSBjcmlzcHkgY3J1c3QgYmFrZWQgdG8gcGVyZmVjdGlvbiBhbmQgdG9wcGVkIHdpdGggc3ByaW5rbGVkIHN1Z2FyLiBgLFxuICAgICAgXCIyLjUwXCJcbiAgICApXG4gICk7XG5cbiAgZGVzc2VydENvbnRhaW5lci5hcHBlbmRDaGlsZChcbiAgICBjcmVhdGVDYXJkKFxuICAgICAgXCJDaG9jY3kgQ2hpcCBDb29raWVzXCIsXG4gICAgICBgQ2xhc3NpYyBjaG9jb2xhdGUgY2hpcCBjb29raWVzLCBsb2FkZWQgd2l0aCBjaG9jb2xhdGUgY2hpcHMuIEl0J3MgYSBzb2Z0IGJha2VkIGNvb2tpZSBhbmQgd2FybWVkIHRvIHBlcmZlY3Rpb24uIFRyZWF0IHlvdXJzZWxmIHRvIG9uZSB0b2RheSFgLFxuICAgICAgXCIxLjAwIC8gcGllY2VcIlxuICAgIClcbiAgKTtcblxuICBkZXNzZXJ0Q29udGFpbmVyLmFwcGVuZENoaWxkKFxuICAgIGNyZWF0ZUNhcmQoXG4gICAgICBcIkNpbm5hbW9uIFJvbGxzXCIsXG4gICAgICBgQ2lubmFtb24gcm9sbCBzZXJ2ZWQgd2FybSBhbmQgbG9hZGVkIHdpdGggY2lubmFtb24gbGF5ZXJlZCBiZXR3ZWVuIGJ1dHRlcnksIGZsYWt5IHBhc3RyeSBkb3VnaCB0aGF0IGlzIGRyaXp6bGVkIHdpdGggYSBkZWxpY2lvdXMgY3JlYW0gY2hlZXNlIGljaW5nLiBZdW1tcyFgLFxuICAgICAgXCIxLjUwIC8gcGllY2VcIlxuICAgIClcbiAgKTtcblxuICBkZXNzZXJ0Q29udGFpbmVyLmFwcGVuZENoaWxkKFxuICAgIGNyZWF0ZUNhcmQoXG4gICAgICBcIkFwcGxlIEZyaXR0YXRhXCIsXG4gICAgICBgQSBjbGFzc2ljIGZyaXR0YXRhIG1hZGUgd2l0aCBjaW5uYW1vbiBhbmQgYXBwbGVzIGZyaWVkIHRvIGEgZ29sZGVuIGJyb3duIGFuZCBjb3ZlcmVkIHdpdGggYSBzd2VldCBnbGF6ZSBpY2luZy5gLFxuICAgICAgXCIxLjI1IC8gcGllY2VcIlxuICAgIClcbiAgKTtcblxuICBkcmlua3NDb250YWluZXIuYXBwZW5kQ2hpbGQoXG4gICAgY3JlYXRlQ2FyZChcbiAgICAgIFwiQ2hvY2N5IFNoYWtlXCIsXG4gICAgICBgVGhlIHBlcmZlY3Qgc3dlZXQgdHJlYXQgZm9yIGFueSB0aW1lIG9mIHRoZSBkYXkuIE91ciBjaG9jb2xhdGUgc2hha2UgaXMgbWFkZSB3aXRoIGRlbGljaW91cyBzb2Z0IHNlcnZlLCBjaG9jb2xhdGUgc3lydXAgYW5kIGZpbmlzaGVkIG9mZiB3aXRoIGEgY3JlYW15IHdoaXBwZWQgdG9wcGluZy5gLFxuICAgICAgXCI0LjQ5XCJcbiAgICApXG4gICk7XG5cbiAgZHJpbmtzQ29udGFpbmVyLmFwcGVuZENoaWxkKFxuICAgIGNyZWF0ZUNhcmQoXG4gICAgICBcIlZhbmlsbGEgU2hha2VcIixcbiAgICAgIGBNYWRlIHdpdGggb3VyIGNyZWFteSB2YW5pbGxhIHNvZnQgc2VydmUgYW5kIHRvcHBlZCB3aXRoIHdoaXBwZWQgdG9wcGluZyBmb3IgYSBjb29sLCB0YXN0eSB0cmVhdC5gLFxuICAgICAgXCI0LjQ5XCJcbiAgICApXG4gICk7XG5cbiAgZHJpbmtzQ29udGFpbmVyLmFwcGVuZENoaWxkKFxuICAgIGNyZWF0ZUNhcmQoXG4gICAgICBcIlN0cmF3YmVycnkgQmFuYW5hIFNtb290aGllXCIsXG4gICAgICBgRmVhdHVyaW5nIHRoZSBwZXJmZWN0IGNvbWJpbmF0aW9uIG9mIGZydWl0IHB1cmVlcyBhbmQgZnJ1aXQganVpY2VzLCBzdWNoIGFzIHN0cmF3YmVycnkgYW5kIGJhbmFuYSwgYmxlbmRlZCB3aXRoIGNyZWFteSBsb3cgZmF0IHlvZ3VydCBhbmQgaWNlLmAsXG4gICAgICBcIlwiXG4gICAgKVxuICApO1xuXG4gIGRyaW5rc0NvbnRhaW5lci5hcHBlbmRDaGlsZChcbiAgICBjcmVhdGVDYXJkKFxuICAgICAgXCJQUEFQXCIsXG4gICAgICBgRmVhdHVyaW5nIHRoZSBzd2VldCBjb21iaW5hdGlvbiBvZiBmcnVpdCBqdWljZXMgYW5kIHB1cmVlcyBzdWNoIGFzIG1hbmdvIGFuZCBwaW5lYXBwbGUsIGJsZW5kZWQgd2l0aCBjcmVhbXkgbG93IGZhdCB5b2d1cnQgYW5kIGljZS5gLFxuICAgICAgXCJcIlxuICAgIClcbiAgKTtcblxuICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZVRpdGxlKFwiQnVyZ2Vyc1wiKSk7XG4gIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQoZm9vZENvbnRhaW5lcik7XG5cbiAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVUaXRsZShcIkRlc3NlcnRzXCIpKTtcbiAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNzZXJ0Q29udGFpbmVyKTtcblxuICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZVRpdGxlKFwiRHJpbmtzXCIpKTtcbiAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChkcmlua3NDb250YWluZXIpO1xuXG4gIHJldHVybiBtZW51Q29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVDYXJkKG5hbWUsIGRlc2NyaXB0aW9uLCBwcmljZSkge1xuICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgZm9vZEltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgY29uc3QgdGV4dEdyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgY2FyZFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICBjb25zdCBjYXJkRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgY29uc3QgY2FyZFByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICBjb25zdCB0ZXh0cyA9IFtjYXJkVGl0bGUsIGNhcmREZXNjcmlwdGlvbiwgY2FyZFByaWNlXTtcblxuICBjYXJkLmNsYXNzTGlzdC5hZGQoXCJjYXJkXCIpO1xuICBmb29kSW1hZ2Uuc3JjID0gYGZvb2RzLyR7bmFtZS50b0xvd2VyQ2FzZSgpfS5qcGVnYDtcbiAgZm9vZEltYWdlLmFsdCA9IG5hbWU7XG5cbiAgdGV4dEdyb3VwLmNsYXNzTGlzdC5hZGQoXCJ0ZXh0R3JvdXBcIik7XG5cbiAgY2FyZFRpdGxlLmNsYXNzTGlzdC5hZGQoXCJjYXJkVGl0bGVcIik7XG4gIGNhcmRUaXRsZS50ZXh0Q29udGVudCA9IG5hbWU7XG5cbiAgY2FyZERlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJjYXJkRGVzY3JpcHRpb25cIik7XG4gIGNhcmREZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGRlc2NyaXB0aW9uO1xuXG4gIGNhcmRQcmljZS5jbGFzc0xpc3QuYWRkKFwiY2FyZFByaWNlXCIpO1xuICBjYXJkUHJpY2UudGV4dENvbnRlbnQgPSBgJCR7cHJpY2V9YDtcblxuICBmb3IgKGxldCB0ZXh0RWxlbWVudCBvZiB0ZXh0cykge1xuICAgIHRleHRHcm91cC5hcHBlbmRDaGlsZCh0ZXh0RWxlbWVudCk7XG4gIH1cblxuICBjYXJkLmFwcGVuZENoaWxkKGZvb2RJbWFnZSk7XG4gIGNhcmQuYXBwZW5kQ2hpbGQodGV4dEdyb3VwKTtcblxuICByZXR1cm4gY2FyZDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVGl0bGUodGV4dCkge1xuICBjb25zdCBtZW51VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCB0aXRsZVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG5cbiAgbWVudVRpdGxlLmNsYXNzTGlzdC5hZGQoXCJtZW51VGl0bGVcIik7XG4gIHRpdGxlVGV4dC50ZXh0Q29udGVudCA9IHRleHQ7XG4gIG1lbnVUaXRsZS5hcHBlbmRDaGlsZCh0aXRsZVRleHQpO1xuXG4gIHJldHVybiBtZW51VGl0bGU7XG59XG5cbmZ1bmN0aW9uIGxvYWRNZW51KCkge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG4gIGNvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlTWVudSgpKTtcbiAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9hZE1lbnU7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgbG9hZEFwcCBmcm9tIFwiLi9hcHBDcmVhdGVcIjtcblxubG9hZEFwcCgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9