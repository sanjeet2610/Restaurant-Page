function loadMenu() {
  const content = document.querySelector("#content");
  content.textContent = "";

  const dishes = document.createElement("h2");
  dishes.textContent = "Dishes we serve :";
  content.appendChild(dishes);

  const list = document.createElement("ul");

  const paneer = document.createElement("li");
  paneer.textContent = "Saahi Paneer -- 80 Rs";
  list.appendChild(paneer);

  const dal = document.createElement("li");
  dal.textContent = "Dal Makhni -- 60 Rs";
  list.appendChild(dal);

  const chole = document.createElement("li");
  chole.textContent = "Chole Bhature -- 70 Rs";
  list.appendChild(chole);

  const rajma = document.createElement("li");
  rajma.textContent = "Rajma Chawal -- 65 Rs";
  list.appendChild(rajma);

  const biryani = document.createElement("li");
  biryani.textContent = "Veg Biryani -- 90 Rs";
  list.appendChild(biryani);

  content.appendChild(list);
}

export { loadMenu };
