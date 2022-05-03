//FUNCIONES

// //Declaracion basica de una funcion
// function mostrarCurso () {
//     console.log("Curso de JavaScript");
// }
// //Invocacion a la funcion
// mostrarCurso ();

// //Diapo 20
// function armarFrase (parametro1, parametro2) {
//     console.log(parametro1 +" "+ parametro2);
// }
// armarFrase("Hola","Ke Ace?");
// armarFrase("Como estas?!","Esta para un terminator!");
// armarFrase("Arranca y gana","taka");


// //Calculo
// function descuento (precioProducto) {
//     let precioFinal = precioProducto * 0.9;
//     console.log("En efectivo $" + precioFinal);
// }

// descuento(parseFloat(prompt("ingrese el precio de su producto")));

// //Diapo 23
// function sumar (primerNumero, segundoNumero) {
//     return primerNumero + segundoNumero;
// }
// let resultado = sumar(5, 8);
// console.log("La suma es :" + resultado);

// resultado = sumar(5505, 1000);
// console.log("La suma es :" + resultado);

// descuento(resultado);

//Diapo 25
// function calculadora (primerNumero, segundoNumero, operacion) {
//     switch (operacion) {
//         case "+":
//             return primerNumero + segundoNumero;
//             break;
//         case "-":
//             return primerNumero - segundoNumero;
//             break;
//         case "*":
//             return primerNumero * segundoNumero;
//             break;
//         case "/":
//             return primerNumero / segundoNumero;
//             break;
//         default:
//             return 0;
//             break;
//     }
// }
// let primerNumero = parseInt(prompt("ingresa el primer numero"));
// let segundoNumero = parseInt(prompt("ingresa el segundo numero"));
// let operacion = prompt(" + para sumar\n- para restar\n* para multiplicar\n/ para division");
// let resultado = calculadora(primerNumero, segundoNumero, operacion);
// console.log(resultado);

//Funciones simplificadas (anonimas y flecha)
// const saludar = () => {
//     let nombre = prompt("ingresa tu nombre");
//     alert("Buenos dias! " + nombre);
// }
// saludar();

const saludar = (nombre) => {
    alert("buenos dias! " + nombre);
}
saludar(prompt("Buenos Dias!"));