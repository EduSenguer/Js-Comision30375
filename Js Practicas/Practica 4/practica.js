// let nombre = prompt("Ingrese su nombre");
// let talle = prompt("ingrese su talle");
// for (let i = 1; i < talle; i++) {
//     alert(nombre + " Su talle es :" + i);
//     if (i == talle) {
//         break;
//     }
// }

// let lado = prompt("cantidad de lados");
// for (let i = 1; i <= lado; i++) {
//     if (lado >= 5) {
//         break;
//     }
//     console.log("lado numero :" + i);
// }

// let nombres = ""
// for (let i = 1; i <= 10; i++) {
//     nombres += prompt("ingrese el nombre de su alumno") + "\n";
// }
// console.log(nombres);

// let entrada    = prompt("INGRESAR NOMBRE");
// let ingresados = '';
// while (entrada != 'Voldemort') {
//     ingresados += entrada +"\n";
//     entrada     = prompt("INGRESAR NOMBRE");
// }
// alert(ingresados);

let producto = parseInt(prompt("ingrese un numero"));
while (producto != "ESC") {
    switch (producto) {
        case "1":
            alert("tomate");
            break;
        case "2":
            alert("papa");
            break;
        case "3":
            alert("carne");
            break;
        case "4":
            alert("pollo");
            break;
        default:
            alert("producto inexistente");
            break;
    }
    producto = prompt("ingrese un numero");
}