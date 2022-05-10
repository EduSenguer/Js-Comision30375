//OBJETOS
//Objetos literales
// const lente1 = {
//     marco:"metalicos",
//     graduacion:0.25,
//     cristales:"vidrio"
// }

// console.log(lente1);
// console.log(lente1.cristales);
// console.log(lente1["marco"]);

// //Modifico las propiedades
// lente1.graduacion = 1;
// console.log(lente1);

// const lente2 = {
//     marco:"plastico",
//     graduacion:1.5,
//     cristales:"plastico"
// }

// console.log(lente2);


// //Funcion constructora
// function Automovil(marca,modelo,anio) {
//     this.marca = marca;
//     this.modelo = modelo;
//     this.anio = anio;
// }

// const auto1 = new Automovil("BMW","M4",2022);
// console.log(auto1);
// //Pido datos de un nuevo auto al usuario
// let marca = prompt("ingresa la marca de tu auto");
// let modelo = prompt("ingrese el modelo de tu auto");
// let anio = parseInt(prompt("ingrese el anio de tu auto"));

// const auto2 = new Automovil(marca,modelo,anio);
// console.log(auto2);

//Metodos de string
// let cadena = "Que lindo dia Wey!!";
// console.log("La longitud del texto ingresado es: " + cadena.length); //length es una propiedad
// console.log(cadena.toLowerCase()); //toLowerCase() es un metodo de string
// console.log(cadena.toUpperCase()); // Es metodo

// //Metodos personalizados
// function Computadora(tipo, sistema) {
//     //Propiedades
//     this.tipo = tipo;
//     this.sistema = sistema;
//     //Metodos
//     this.mostrarSistema = function() {console.log("sistema: " + this.sistema)};
//     this.mostrarTipo = function() {console.log("Tipo: " + this.tipo)}
// }
//  const compu1 = new Computadora("notebook","MacOS");
//  const compu2 = new Computadora("desktop","Windows");

//  compu1.mostrarTipo();
//  compu1.mostrarSistema();
//  console.log("*****************");
//  compu2.mostrarTipo();
//  compu2.mostrarSistema();

//  console.log("*****************");
//  const compu3 = new Computadora(prompt("Tipo ?"), prompt("Sistema ?"));
//  console.log(compu3);
//  compu3.mostrarTipo();
//  compu3.mostrarSistema();

//  //FOR..IN
//  //Vamos a recorrer el objeto compu1 en busca de propiedades ...
//  //El nombre propMet es inventado

//  for (const propMet in compu1) {
//      console.log("Propiedad ..." + propMet);
//      console.log(compu1[propMet]);
//  }

//Clases
class Persona {
    constructor(nombre, edad, calle) {
        this.nombre = nombre;
        this.edad = edad;
        this.calle = calle;
    }
    hablar() {
        console.log("Hola soy: ")
    }
}
const persona1 = 
persona1.hablar();