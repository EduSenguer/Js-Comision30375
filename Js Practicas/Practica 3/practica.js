// let nombre = "juancarlos";
// let ingreseNombre = prompt("ingrese un nombre");
// if (ingreseNombre == nombre) {
//     alert("fui yo");
// } else {
//     alert("yo no fui");
// }

// let tecla = prompt("presione una tecla");
// if ((tecla == "y") || (tecla == "Y")) {
//     alert("CORRECTO CRACK");
// } else {
//     alert("ERRRRORR");
// }

// let personaje = parseInt(prompt("ingrese un numero"));
// if (personaje == 1) {
//     alert("Elegiste a HOMERO");
// } else if (personaje == 2) {
//     alert("Elegiste a MARGE");
// } else if (personaje == 3) {
//     alert("Elegiste a BART");
// } else if (personaje == 4) {
//     alert("Elegiste a LISA");
// } else {
//     alert("ERROOOOR");
// }

// let presupuesto = parseInt(prompt("ingrese su numero"));
// if ((presupuesto >= 0) && (presupuesto <= 1000)) {
//     console.log("Presupuesto bajo");
// } else if ((presupuesto >= 1001) && (presupuesto <= 3000)) {
//     console.log("Presupuesto medio");
// } else if (presupuesto > 3000) {
//     console.log("Presupuesto alto")
// } else {
//     console.log("INVALIDO");
// }

let producto1 = prompt("ingrese el primer producto");
let producto2 = prompt("ingrese el segundo producto");
let producto3 = prompt("ingrese el tercer producto");
let producto4 = prompt("ingrese el cuarto producto");
let listaProductos = producto1 +" "+ producto2 +" "+ producto3 +" "+ producto4;

if ((producto1 != "") && (producto2 != "") && (producto3 != "") && (producto4 != "")) {
    console.log(listaProductos);
} else {
    console.log("Error: es necesario cargar todos los productos");
}