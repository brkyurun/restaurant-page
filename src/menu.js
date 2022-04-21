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

export default loadMenu;
