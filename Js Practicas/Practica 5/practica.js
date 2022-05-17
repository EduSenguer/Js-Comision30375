// function conParametros (parametro1, parametro2) {
//     console.log(parametro1 + " " + parametro2);
// }
// conParametros("Que onda", "wey?");
// conParametros("Que sale", "hoy?");

// let resultado = 0;
// function suma (number1, number2) {
//     resultado = number1 + number2;
// }
// function mostrar (mensaje) {
//     console.log(mensaje);
// }
// suma(18500, 9458);
// mostrar(resultado);
// suma(245, 390);
// mostrar(resultado);

// function multiplicar (number1, number2) {
//     resultado = number1 * number2;
// }
// multiplicar(9,9);
// mostrar(resultado);
// multiplicar(14, 97);
// mostrar(resultado);

//Funcion flecha
// const suma = (a,b) => {return a + b}
// console.log(suma(45, 45))
// const resta = (a,b) => a - b;
// console.log(resta(1953, 1743))

// const iva = x => x * 0.21;
// console.log(iva(100, 0.21))

//Ejercicios
// function entrada() {
//     return prompt("ingrese un valor!");
// }
// function proceso() {
//     return "El valor es: " + entrada();
// } 
// function salida() {
//     alert(proceso());
// }
// entrada();
// proceso();
// salida();

class Hero {
    constructor(name, heroName, power) {
        this.name = name;
        this.heroName = heroName;
        this.power = power;
        this.presentar = function () { console.log("Este es el poderoso " + this.heroName); };
    }
}

const hero1 = new Hero("Bruce Banner", "HULK", "unlimited power");
const hero2 = new Hero("Thor Odinson", "THOR", "THUNDER GOD");
hero1.presentar();
hero2.presentar();