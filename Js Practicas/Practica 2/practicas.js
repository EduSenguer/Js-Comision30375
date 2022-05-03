let name = "Homero";
let lastName = "Simpson";
let age = 40;
console.log(name);
console.log(lastName);
console.log(age);

const city1 = "New York";
const city2 = "Los Angeles";
const city3 = "San Francisco";
const city4 = "Miami";
const city5 = "Brooklin";
console.log(city1);
console.log(city2);
console.log(city3);
console.log(city4);
console.log(city5);

let licenseName = "Bart";
let licenseAdress = "Calle falsa 123";
let licenseCountry = "United States";
let license = licenseName + licenseAdress + licenseCountry;
console.log(license);

// let name1 = prompt("ingrese el primer nombre");
// let name2 = prompt("ingrese el segundo nombre");
// let name3 = prompt("ingrese el tercer nombre");
// let name4 = prompt("ingrese el cuarto nombre");
// let name5 = prompt("ingrese el quinto nombre");
// let family = name1 + name2 + name3 + name4 + name5;
// console.log(family);

let precio = parseInt(prompt("Ingrese el precio de su articulo!!"));
let descuento25 = precio - (precio * 0.25);
let descuento30 = precio - (precio * 0.3);
console.log("Con el 25% de descuento le queda en :" + descuento25 + "$");
console.log("Con el 30% de descuento le queda en :" + descuento30 + "$");
