function loadAbout() {
  const content = document.querySelector("#content");
  content.textContent = "";

  const heading = document.createElement("h2");
  heading.textContent = "About Spice Garden";

  const para1 = document.createElement("p");
  para1.textContent =
    "Spice Garden is a family-run restaurant serving fresh, homemade Indian food. We focus on simple recipes, quality ingredients, and authentic flavors.";

  const para2 = document.createElement("p");
  para2.textContent =
    "Our chefs prepare every dish daily using traditional cooking methods to ensure taste and hygiene. Whether you are dining in or ordering takeaway, we aim to give you a satisfying experience.";

  const para3 = document.createElement("p");
  para3.textContent =
    "We believe good food brings people together, and we are proud to serve our community with love and care.";

  content.appendChild(heading);
  content.appendChild(para1);
  content.appendChild(para2);
  content.appendChild(para3);
}

export { loadAbout };
