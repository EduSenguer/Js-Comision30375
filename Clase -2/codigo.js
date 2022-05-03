//Control de flujos

/* //Condicional simple IF
let nombre = prompt("Cual es el nombre de Messi?")

if (nombre == "Lionel"){
    console.log("Excelente crack!");
} else {
    console.log("De que planeta viniste pelotudo?");
}

//Condicional IF..else
let equipo = prompt("En que equipo de futbol juega Messi?");

if (equipo == "psg"){
    console.log("Buena rocho");
} else {
    console.log("Buena tonto sali de la cueva");
}

//Condicional IF..else if..else
let precioManzana = parseFloat(prompt("Ingrese el precio de el kilo de Manzana!"));
if (precioManzana < 180){
    console.log("Muy barato PA!");
} else if (precioManzana < 260){
    console.log("Ahi nomas perro casi!");
} else{
    console.log("Somos del gremio no hay un descuento?");
} 

//Variables booleanas true-false
let usuarioLog = true;

let edad = parseInt(prompt("Ingrese su edad!"));
let esMayorDeEdad = (edad >= 18); //true

if (esMayorDeEdad){
    console.log("Pelis disponibles:");
    console.log("1.The silence of the lambs 2.Red Dragon 3.Hannibal 4.Hannibal:Begins");
} else{
    console.log("Peliculas disponibles:");
    console.log("1.Nemo 2.The lion king");
} 

//== vs ===
let num1 = 1; //valor numerico
let numUno = "1"; //valor en cadena

let sonIguales = (num1 == numUno); // == compara valores y no tipo de dato
console.log("Las variables son iguales?");
console.log(sonIguales);

let sonEstrictamenteIguales = (num1 === numUno); //compara valor y tipo
console.log("Las variables son estrictamente iguales?");
console.log(sonEstrictamenteIguales);

// && AND
let usuario = "ramon";
let password = "123123";

if ((usuario == "ramon") && (password == "123123")){
    console.log("Bienvenido ramon");
} else{
    console.log("Usuario y/o pass incorrecta");
}

//OR ||
let nombre2 = prompt("Cual es el nombre de Messi?");
if ((nombre2 == "Lionel") || (nombre2 == "LIONEL") || (nombre2 == "lionel")){
    console.log("Niceee");
}

// NOT !
if (!usuarioLogueado){
    console.log("Debes realizar el Login primero");
} */

//Consultar al usuario el anio de su vehiculo (valor numerico)
//Pasarle por alert el valor que tiene su impuesto de patente anual
//Si el auto tiene menos de 10 anios de antiguedad abona $50000
//Si el auto tiene entre 10 y 15 anios de antiguedad abona $35000
//Sino abona $10000 (mayor a 15 anios)

let anio = 2022;
let anioAuto = parseInt(prompt("Ingrese el anio de su vehiculo por favor!"));
if (anio - anioAuto < 10){
    console.log("Usted debera abonar $50000 de patente");
} else if (anio - anioAuto >= 10){
    console.log("Usted debera abonar $35000");
} 

// Hecho por la profesora 
let anioAuto = parseInt(prompt("Ingresa el año de tu vehiculo"));
let antiguedad = 2022 - anioAuto;
let montoMenosDe10 = 50000;
let montoEntre10y15 = 35000;
let montoMasDe15= 10000;

if ((antiguedad >= 0) && (antiguedad <10)){
    alert("Tu vehiculo tiene "+antiguedad+" años\nDebes abonar $"+montoMenosDe10);
}else if((antiguedad>=10) && (antiguedad<=15)){
    alert("Tu vehiculo tiene "+antiguedad+" años\nDebes abonar $"+montoEntre10y15);
}else{
    alert("Tu vehiculo tiene "+antiguedad+" años\nDebes abonar $"+montoMasDe15);
}