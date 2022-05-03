// Ejercicio 1
let numero = parseInt(prompt("INGRESE UN NUMERO"));
for (let i = 1; i <= 10; i++) {
    let suma = numero + i;
    console.log(numero +"+"+ i +" es igual a : "+ suma);
}

// Ejercicio 2
let heros = prompt("INGRESE NOMBRE DE SUPERHERO");
while (heros != "esc") {
    console.log("su superhero es :" + heros);
    heros = prompt("INGRESE NOMBRE DE SU SUPER");
}

// Ejercicio 3
let saludo = parseInt(prompt("INGRESE NUMERO DE SALUDOS QUE DESEA!"));
for (let i = 1; i <= saludo; i++) {
    console.log("HOLA por " + saludo + " ves!!");
} 