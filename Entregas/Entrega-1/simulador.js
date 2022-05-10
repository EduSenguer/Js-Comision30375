//Bienvenida
function saludar() {
    let name = prompt("Hola, ingrese su nombre porfavor!");
    alert("Bienvenido a Compumundo Hipermegared " + name);
}
saludar();

//Chequeo de stock
let product = prompt("Que es lo que estas buscando?");
function stock() {
    switch (product) {
        case "placas":
            console.log("Tenemos disponibles las siguientes placas: \n1)RX 580 8GB\n2)GTX 1660 6GB\n3)RX 6700 XT ASUS DUAL 12GB");
            break;
        case "micros":
            console.log("Tenemos disponibles los siguientes micros: \n4)AMD RYZEN 5 5600 4.4GHZ AM4\n5)INTEL I7 10700F\n6)INTEL I9 12900K");
            break;
        case "memorias":
            console.log("Tenemos disponibles las siguientes memorias: \n7)GSKILL TRIDENT DDR4 3200 16GB\n8)CORSAIR 32GB 5600\n9)PATRIOT 16GB DDR4 3600");
            break;
        default:
            alert("Momentaneamente no tenemos stock de ese producto");
            break;
    }
}
stock();

//Seleccion de producto
let precioPlaca1 = 80000;
let precioPlaca2 = 85000;
let precioPlaca3 = 90000;
let precioMicro1 = 40000;
let precioMicro2 = 45000;
let precioMicro3 = 50000;
let precioMemoria1 = 15000;
let precioMemoria2 = 20000;
let precioMemoria3 = 25000;
let selection = "";
if ((product == "placas") || (product == "micros") || (product == "memorias")) {
    selection = prompt("Cual es el numero del producto que le interesa?");
    choose();
} else {
    alert("Esperamos la proxima tener lo que busca!");
}

function choose() {
    while (selection != "ESC") {
        switch (selection) {
            case "1":
                console.log("Esta placa cuesta: $" + precioPlaca1);
                break;
            case "2":
                console.log("Esta placa cuesta: $" + precioPlaca2);
                break;
            case "3":
                console.log("Esta placa cuesta: $" + precioPlaca3);
                break;
            case "4":
                console.log("Este micro cuesta: $" + precioMicro1);
                break;
            case "5":
                console.log("Este micro cuesta: $" + precioMicro2);
                break;
            case "6":
                console.log("Este micro cuesta: $" + precioMicro3);
                break;
            case "7":
                console.log("Esta memoria cuesta: $" + precioMemoria1);
                break;
            case "8":
                console.log("Esta memoria cuesta: $" + precioMemoria2);
                break;
            case "9":
                console.log("Esta memoria cuesta: $" + precioMemoria3);
                break;
            default:
                alert("El numero ingresado no corresponde con ningun producto!!")
                break;
        }
        selection = prompt("Ingrese el numero de un producto!");
    }
    console.log("Aplica un 10% de descuento en efectivo");
let precio = parseFloat(prompt("Ingresa el precio de tu producto y te dire precio en efectivo"));
let precioConDescuento;
while (precio != 0) {
    precioConDescuento = precio * 0.9;
    alert("Si abonas en efectivo pagas $" + precioConDescuento);
    precio = parseFloat(prompt("ingresa el precio de tu producto (0 para salir)"));
}
console.log("Adios! gracias!");
}


