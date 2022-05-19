//OBJETOS
class Hardware {
    constructor(hardware) {
        this.id = hardware.id;
        this.marca = hardware.marca;
        this.precio = hardware.precio;
        this.calidad = hardware.calidad;
        this.cantidad = 1;
        this.precioTotal = hardware.precio;
    }
    agregarUnidad() {
        this.cantidad++;
    }
    ActPrecioTotal() {
        this.precioTotal = this.precio * this.cantidad;
    }
}

//ARRAY
const hardwares = [
    {
        id: 0,
        marca: "PLACA ASUS",
        precio: 850,
        calidad: "ALTA"
    },
    {
        id: 1,
        marca: "PLACA EVGA",
        precio: 700,
        calidad: "ALTA"
    },
    {
        id: 2,
        marca: "PLACA GIGABYTE",
        precio: 450,
        calidad: "MEDIA"
    },
    {
        id: 3,
        marca: "MOTHER ASUS TUF",
        precio: 200,
        calidad: "MEDIA"
    },
    {
        id: 4,
        marca: "MOTHER AORUS Z590",
        precio: 350,
        calidad: "ALTA"
    },
    {
        id: 5,
        marca: "MOTHER ASUS PRIME",
        precio: 150,
        calidad: "BAJA"
    },
    {
        id: 6,
        marca: "MICRO INTEL I7",
        precio: 230,
        calidad: "MEDIA"
    },
    {
        id: 7,
        marca: "MICRO INTEL I9",
        precio: 550,
        calidad: "ALTA"
    },
    {
        id: 8,
        marca: "MICRO INTEL I5",
        precio: 140,
        calidad: "MEDIA"
    }
];

let carrito = [];
let precioTotal;

//FUNCIONES
let userName = prompt("Hola que tal! Ingrese su nombre porfavor!");
function bienvenida() {
    alert("Bienvenido a COMPUMUNDO-HIPERMEGARED" + " " + userName + "\nEste es nuestro catalogo!");
}

function catalogo() {
    let listaProductos = "";

    for (const hardware of hardwares) {
        listaProductos += `${hardware.id}: ${hardware.marca}  $${hardware.precio} (Quality:${hardware.calidad}) \n`;
    }

    let idProducto = prompt(`Escriba el numero del producto que desea agregar al carrito, o escriba 'ESC' para finalizar!
    ${listaProductos} \n`);

    while (idProducto !== "ESC") {
        let hardwareSelect = carrito.find((element) => element.id == idProducto);

        if (hardwareSelect) {
            let index = carrito.findIndex((element) => element.id === hardwareSelect.id);
            carrito[index].agregarUnidad();
            carrito[index].ActPrecioTotal();
            alert(`Has agregado otro/a ${carrito[index].marca} al carro!!
            Ya tienes ${carrito[index].cantidad} Unidades`);
            console.table(carrito);
        } else {
            carrito.push(new Hardware(hardwares[idProducto]));
            alert(`Has agregado ${hardwares[idProducto].marca} al carrito de compras!!`);
            console.table(carrito);
        }

        idProducto = prompt(`Quiere seguir comprando?
        Escriba el numero del producto que desea agregar al carrito, o escriba 'ESC' para finalizar!
        ${listaProductos}`);
    }

}

function precioFinal() {
    let precioTotal = 0;
    for (const item of carrito) {
        precioTotal += item.precioTotal;
    }
    return precioTotal;
}

//INVOCACION DE LAS FUNCIONES
bienvenida();
catalogo();
precioTotal = precioFinal();

alert(`El total a pagar de tu compra es ${precioTotal}
Muchas Gracias! que tenga un buen dia!`);
console.table(carrito);



// Método filter()
// Listamos los items con precio menor a $750
// let nuevoArray = hardwares.filter((elemento) => elemento.precio < 750);
// console.log("Nuevo array con precio menor a 750");
// console.table(nuevoArray);

// const listaPrecios = hardwares.map(hardware => hardware.marca + " $" + hardware.precio)
// console.log(listaPrecios);