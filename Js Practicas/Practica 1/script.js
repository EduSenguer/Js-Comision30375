let userName = prompt("Ingrese su nombre");
console.log("Bienvenido " + userName);

let year = 1993;
let userAge = parseInt(prompt("Ingrese su edad"));
let result = year + userAge;
console.log("Estamos en el " + result);

let text1 = prompt("Mejor movie?");
let text2 = prompt("Cual?");
let text3 = prompt("A donde?");

alert(text1 + " " + text2 + " " + text3);

let numero = 0;
while (numero <= 12) {
    console.log(numero);
    numero = numero + 2;
}