//Ciclos

//FOR
for(let i = 0; i <= 3; i++) {
    console.log("coders");
}

// //Diapo 17-Tabla de multiplicar
// //Solicitamos un valor al usuario
// let ingresarNumero = parseInt(prompt("Ingresar numero"));
// //En cada repeticion, calculamos el numero ingresado x el numero de repeticiones
// for(let i = 1; i <= 10; i++) {
//     let resultado = ingresarNumero * i;
//     alert(ingresarNumero +" X "+ i +" = "+ resultado);
// }

// //Diapo 18
// for (let i = 1; i <= 5; i++) {
//     // En cada repetición solicitamos un nombre.
//     let ingresarNombre = prompt("Ingresar nombre");
//     // Informamos el turno asignado usando el número de repetición (i).
//     console.log(" Turno  N° "+i+" Nombre: "+ingresarNombre);
// }

// //Diapo 19
// for (let i = 1; i <= 10; i++) {
//     //Si la variable i es igual 5 interrumpo el for. 
//     if(i == 5){
//         break;
//     }
//     console.log(i);
// }

// for (let i = 1; i < 4; i++) {
//     let ingresarName = prompt("Ingrese el nombre de Messi!");
//     if (ingresarName == "Lio") {
//         console.log("Niceee");
//         break;
//     }
//     alert("Mal guacho, te quedan "+(3-i)+" "+"intentos");
// }

// //Diapo 26 While
// let entrada = prompt("Ingresar un dato");
// //Repetimos con While hasta que el usuario ingresa "ESC"
// while(entrada != "ESC" ){
//     alert("El usuario ingresó "+ entrada);
//     //Volvemos a solicitar un dato. En la próxima iteración se evalúa si no es ESC.
//     entrada = prompt("Ingresar otro dato");
// }


// //Descuentos
// console.log("Programa calculador de descuentos- 10% en efectivo");
// let precio = parseFloat(prompt("Ingresa el precio de tu producto y te dire precio en efectivo"));
// let precioConDescuento;
// while (precio != 0) {
//     precioConDescuento = precio * 0.9;
//     alert("Si abonas en efectivo pagas $" + precioConDescuento);
//     precio = parseFloat(prompt("ingresa el precio de tu producto (0 para salir)"));
// }
// console.log("Adios! gracias!");

//Diapo 29
// let numero = 0;
// do{
//    //Repetimos con do...while mientras el usuario ingresa un n°
//    numero = prompt("Ingresar Número");
//    console.log(numero);
// //Si el parseo no resulta un número se interrumpe el bucle.   
// }while(parseInt(numero));

//Condicional-Switch

let producto = prompt("Ingrese la figura que desea comprar para saber el precio!");

switch (producto) {
    case "spiderman":
        alert("El spiderman vale 50$");
        break;
    case "dococt":
        alert("El dococt vale 55$");
        break;
    case "greengoblin":
        alert("El greengoblin vale 45$");
        break;
    case "venom":
        alert("El venom vale 60$");
        break;
    default:
        alert("Volaron ps! No hay!!");
        break;
}