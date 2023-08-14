const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
    imagen: "./img/muzzarella.png",
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
    imagen: "./img/cebolla.png",
  },

  {
    id: 3,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
    imagen: "./img/4quesos.png",
  },

  {
    id: 4,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Rucula", "Jamón"],
    imagen: "./img/especial.png",
  },

  {
    id: 5,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
    imagen: "./img/anana.png",
  },
];

const searchForm = document.getElementById("searchForm");
const pizzaIdInput = document.getElementById("pizzaId");
const resultContainer = document.getElementById("resultContainer");

searchForm.addEventListener("submit", function (event) {
  event.preventDefault();
  resultContainer.innerHTML = "";

  const searchId = parseInt(pizzaIdInput.value);

  if (isNaN(searchId)) {
    showError("Ingrese un número válido.");
    return;
  }

  const pizza = pizzas.find((pizza) => pizza.id === searchId);

  if (pizza) {
    renderPizzaCard(pizza);
    localStorage.setItem("lastSearchedPizza", JSON.stringify(pizza));
  } else {
    showError("No se encontró una pizza con ese ID.");
  }
});

function showError(message) {
  const errorDiv = document.createElement("div");
  errorDiv.classList.add("error");
  errorDiv.textContent = message;
  resultContainer.appendChild(errorDiv);
}

function renderPizzaCard(pizza) {
  const cardDiv = document.createElement("div");
  cardDiv.classList.add("card");

  const nameHeading = document.createElement("h2");
  nameHeading.textContent = pizza.nombre;

  const image = document.createElement("img");
  image.src = pizza.imagen;
  image.alt = pizza.nombre;

  const priceParagraph = document.createElement("p");
  priceParagraph.textContent = `Precio: $${pizza.precio}`;

  cardDiv.appendChild(nameHeading);
  cardDiv.appendChild(image);
  cardDiv.appendChild(priceParagraph);

  resultContainer.appendChild(cardDiv);
}

// Cargar última pizza buscada desde localStorage al cargar la página
const lastSearchedPizza = JSON.parse(localStorage.getItem("lastSearchedPizza"));

if (lastSearchedPizza) {
  renderPizzaCard(lastSearchedPizza);
}
