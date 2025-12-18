function loadHome() {
  const content = document.querySelector("#content");
  content.textContent = "";

  const heading = document.createElement("h1");
  heading.textContent = "Spice Garden";

  const para1 = document.createElement("p");
  para1.textContent =
    "Welcome to Spice Garden, where traditional Indian flavors meet a warm and comfortable dining experience.";

  const para2 = document.createElement("p");
  para2.textContent =
    "We serve freshly prepared vegetarian dishes made with handpicked ingredients and authentic spices. Every meal is cooked with care to give you the taste of home.";

  const para3 = document.createElement("p");
  para3.textContent =
    "Whether you are visiting with family, friends, or ordering a quick meal, Spice Garden is the perfect place to enjoy delicious food at affordable prices.";

  content.appendChild(heading);
  content.appendChild(para1);
  content.appendChild(para2);
  content.appendChild(para3);
}

export { loadHome };
