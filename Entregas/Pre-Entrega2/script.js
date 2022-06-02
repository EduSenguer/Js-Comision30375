let carrito;
let cards = document.getElementById("contenedor");
let body = document.querySelector("body");
body.className = ("container bg-warning");
let priceContainer = document.getElementById("priceContainer");

//RECUPERO DEL STORAGE LOS PRODUCTOS PREVIAMENTE SELECCIONADOS
//y LOS VUELVO A IMPRIMIR EN LA TABLA
recuperarDelStorage();

function recuperarDelStorage() {
  if (localStorage.getItem("carrito") == null) {
    carrito = [];
  } else {
    carrito = JSON.parse(localStorage.getItem("carrito"));
    carrito.forEach(figuraBuyed => {
      tableBody.innerHTML += `
      <tr>
      <td>${figuraBuyed.id}</td>
      <td>${figuraBuyed.name}</td>
      <td>${figuraBuyed.group}</td>
      <td>${figuraBuyed.Price}</td>
  </tr>
      `;
    })
  }
}

//invocar las cards!
crearCards();

function crearCards() {
  for (figura of figuras) {
    cards.innerHTML += `
        <div class="card my-3 bg-light border border-secondary" style="width: 18rem;">
  <img src="${figura.imagen}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${figura.name}</h5>
    <h6 class="card-subtitle mb-2 text-muted">${figura.group}</h6>
    <h6 class="card-subtitle mb-2 text-muted">${figura.Year}</h6>
    <p class="card-text">${figura.Price}</p>
    <button class="btn btn-dark" id="btn${figura.id}">COMPRAR!</button>
  </div>
</div>`;
  }
  //Asigna un evento a cada boton
  figuras.forEach(figura => {
    document.getElementById(`btn${figura.id}`).addEventListener('click', function() {
      agregarCarrito(figura);
    });
  });
}
//Agrega al carrito-creando una grilla nueva por cada producto seleccionado
function agregarCarrito(figuraBuyed) {
  carrito.push(figuraBuyed);
  document.getElementById("tableBody").innerHTML+=`
  <tr>
      <td>${figuraBuyed.id}</td>
      <td>${figuraBuyed.name}</td>
      <td>${figuraBuyed.group}</td>
      <td>${figuraBuyed.Price}</td>
  </tr>`;
  
  actPrecioCarrito();
  //Guarda cada producto elejido en el storage
  localStorage.setItem("carrito",JSON.stringify(carrito));
}
//SUMA LOS PRECIOS DE CADA PRODUCTO SELECCIONADO
function actPrecioCarrito() {
  let total = carrito.reduce((acc, el) => acc + el.Price, 0);
  priceContainer.innerHTML = `
  <h5><strong>PRECIO TOTAL:</strong> ${total}$</h5>
  `;
}





















