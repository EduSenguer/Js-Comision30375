// //FUNCIONES DE ORDEN SUPERIOR
// //Funcion que retorna funcion
// function mayorQue(n) {
//     return (m) => m > n
// }

// //Es lo mismo que 
// // function mayorQue(n) {
// //     return function(m) {
// //         return m>n;
// //    }
// // }

// let mayorQueDiez = mayorQue(10)

// console.log(mayorQueDiez(12))  //  true
// console.log(mayorQueDiez(8))  //  false

// let mayorDeEdad = mayorQue(21);
// if (mayorDeEdad(parseInt(prompt("ingrese su edad!")))) {
//     console.log("puede ingresar al bar");
// } else {
//     console.log("no pueden ingresar menores");
// }

// //Funcion que recibe funcion como parametro
// const precioProductos = [1500, 2500, 3500, 5000, 6999.99, 8000, 9999.99];

// function realizar(operacion, lista) {
//     for (const elemento of lista) {
//         operacion(elemento);
//     }
// }

// let total = 0;
// function sumarTotal(precio) {
//     total += precio;
// }

// function calcularIva(precio) {
//     console.log("Precio $" + precio + " con iva:$" + precio * 1.21);
// }
// realizar(sumarTotal, precioProductos);
// console.log("Total de la compra $" + total);

// realizar(calcularIva, precioProductos);

// //Parametros con funciones flecha
// function porCadaUno(arr, fn) {
//     for (const el of arr) {
//         fn(el)
//     }
// }

// const listaDeViaje = ["abrigo", "remeras", "jogging", "zapatillas"];

// const aMayusculas = [];

// porCadaUno(listaDeViaje, (prenda) => {
//     aMayusculas.push(prenda.toUpperCase());
// });

// console.log(aMayusculas);

const libros = [
    {
        isbn: "2345123",
        titulo: "Harry Potter",
        genero: "Aventuras",
        precio: 230.90
    },

    {
        isbn: "9099777",
        titulo: "Elige tu propia aventura",
        genero: "Aventuras",
        precio: 199.00
    },

    {
        isbn: "12121212",
        titulo: "JS para principiantes",
        genero: "Educacion",
        precio: 290.00
    },

    {
        isbn: "3333333",
        titulo: "Diccionario de Frances-Español",
        genero: "Diccionario",
        precio: 99.90

    },

];

//ForEach
//Imprimir el titulo de cada libro
console.log("Uso del forEach");
libros.forEach((libro)=>{console.log("titulo:" + libro.titulo)});

//Find 
//Buscamos si existe un libro que se llame "JS para principiantes"
let encontrado = libros.find((libro)=> libro.titulo == "JS para principiantes");
console.log(encontrado);
//Uno que no existe
encontrado = libros.find((libro)=>libro.titulo == "JS para avanzados");
console.log(encontrado);

//Filter
//Filtra un conjunto de elementos que cumplan con una condicion en un nuevo array
const listaBaratos = libros.filter((libro)=>libro.precio<200);
console.log(listaBaratos);

//Some
//Informa true si existe / false si no existe
const existe = libros.some((libro)=>libro.genero == "novela");
console.log("existe novela? " + existe);

//Map
//Nuevo array con la transformacion solicitada
const preciosConIva = libros.map((libro)=>libro.precio * 1.21);
console.log("CON IVA");
console.log(preciosConIva);

const preciosEnEfectivo = libros.map((libro)=> libro.precio * 0.9);
console.log("CON DESCUENTO");
console.log(preciosEnEfectivo);

const librosConIva = libros.map((libro)=>{
    return {
        isbn:libro.isbn,
        titulo:libro.titulo.toUpperCase(),
        genero:libro.genero,
        precio:libro.precio * 1.21,
        vendido: false
    }
})

console.log(librosConIva);

//Reduce
//Sumador de precios
const totalPrecios = librosConIva.reduce((acumulador,libro)=>acumulador+libro.precio,0);
console.log("Total de precios con IVA incl. $" + totalPrecios);

//Sort
//Ordenamiento
const edades = [54,12,57,84,34,23];
edades.sort((a,b)=>a-b); //de menor a mayor
console.log(edades);

edades.sort((a,b)=>b-a); //de mayor a menor
console.log(edades);

