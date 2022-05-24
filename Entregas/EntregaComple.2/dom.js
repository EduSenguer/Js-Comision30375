//ARRAY
const figures = [
  {
    id: 0,
    marca: "Marvel Legend",
    descripcion: "Knull and Venom",
    precio: 80,
    imagen: "./img/knull and venom.jpeg",
  },
  {
    id: 1,
    marca: "Hot toy",
    descripcion: "Hulk",
    precio: 350,
    imagen: "./img/hulk.jpeg",
  },
  {
    id: 2,
    marca: "Marvel Legend",
    descripcion: "Galactus",
    precio: 40,
    imagen: "./img/galactus.webp",
  },
];

//CREACION DE LAS CARDS 
function menu() {
    let contenedor = document.getElementById("contenedor");
    for (const figure of figures) {
        let card = document.createElement("div");
        card.innerHTML = `
        <div class="card text-center" style="width: 18rem;">
        <div class="card-body">
            <img src="${figure.imagen}" id="" class="card-img-top img-fluid" alt="">
            <h2 class="card-title">${figure.marca}</h2>
            <h5 class="card-subtitle mb-2 text-muted">${figure.descripcion}</h5>
            <p class="card-text">$${figure.precio}</p>
            <div class="btn-group" role="group" aria-label="Basic mixed styles example">
                <button id="agregar${figure.id}" type="button" class="btn btn-dark"> Agregar </button>
            </div>
        </div>
      </div>      
        `;
        contenedor.appendChild(card);
      }
}
menu();

//MODIFICACIONES 
contenedor.className = "center"

let lis = document.getElementsByTagName("li");
for (const li of lis) {
    console.log(li.innerHTML);
}

let ulist = document.querySelector("ul");
ulist.className = "center bg-color1"

let links = document.getElementsByClassName("links");
links[1].remove()
links[0].innerText = "ACA DECIA LINK1"
links[1].innerText = "Y ACA LINK3"

let titulo = document.querySelector("h1");
console.log(titulo.innerText)
titulo.innerText = "ESTO ERA DOM!!"

let nuevoTexto = document.createElement("h4");
nuevoTexto.innerHTML = "<strong>THIS IS THE WAY!!</strong>";
document.body.prepend(nuevoTexto);
nuevoTexto.className = "new-font bg-color2 color2"

let titulo3 = document.querySelector("h3");
titulo3.className = "color1"
