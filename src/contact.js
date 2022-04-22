function createContactPage() {
  const contactContainer = document.createElement("div");
  contactContainer.classList.add("contactContainer");

  contactContainer.appendChild(createLocationBox());
  contactContainer.appendChild(createContactInfo());

  return contactContainer;
}

function createQuestionBox(question, answer) {
  const contactQuestion = document.createElement("div");
  const questionElement = document.createElement("h3");
  const answerElement = document.createElement("p");

  contactQuestion.classList.add("contactQuestion");
  questionElement.textContent = question;
  answerElement.textContent = answer;

  contactQuestion.appendChild(questionElement);
  contactQuestion.appendChild(answerElement);

  return contactQuestion;
}

function createContactInfo() {
  const contactInfo = document.createElement("div");
  const contactTitle = document.createElement("h2");

  contactInfo.classList.add("contactInfo");
  contactTitle.textContent = "Chris P. Bacon's Delicious Creations";

  contactInfo.appendChild(contactTitle);
  contactInfo.appendChild(
    createQuestionBox(
      "Where to grab a bite?",
      `Vorgartenstraße 204, 1020 Wien, Austria`
    )
  );
  contactInfo.appendChild(
    createQuestionBox("Order online!", `+58 111 222 33 55`)
  );

  return contactInfo;
}

function createLocationBox() {
  const locationContainer = document.createElement("div");
  const locationMap = document.createElement("iframe");

  locationContainer.classList.add("locationContainer");

  locationMap.src = `https://www.google.com/maps/embed/v1/place?q=place_id:ChIJdQYrcBgHbUcRgQS2tm34aTA&key=AIzaSyDaFeITveC1uEg3Rf6FQ7HInnr0krVtIXk`;
  locationMap.referrerPolicy = "no-referrer-when-downgrade";

  locationContainer.appendChild(locationMap);

  return locationContainer;
}

function loadContact() {
  const container = document.querySelector("#content");
  container.innerHTML = "";
  container.appendChild(createContactPage());
  return container;
}

export default loadContact;
