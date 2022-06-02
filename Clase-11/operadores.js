//Globales
let miSuerte;
//DOM
const boton = document.getElementById("botonDados");
const dado1 = document.getElementById("dado1");
const dado2 =  document.getElementById("dado2");
const resultado = document.getElementById("resultado");
//Funcion flecha
const arrojarDados=()=> {
    let dado1 = Math.round(Math.random()*5+1);
    let dado2 = Math.round(Math.random()*5+1);
    return [dado1,dado2];
}
boton.onclick=()=>{
    miSuerte = arrojarDados();
    dado1.value = miSuerte[0];
    dado2.value = miSuerte[1];
    let total = miSuerte.reduce((acu,dado)=>acu+dado,0);
    //console.log(total)
    ((total==7)||(total==11))?resultado.innerText="Ganaste 100 dolares":resultado.innerText="Perdiste 20 dolares";
}

//&&
console.log("\n Operador &&");
let numero = 9;
let resul = numero > 8 && new Date();
//si la condicion es falsa, devuelve false
//si es verdadera, devuelve la fecha
console.log(resul);

//|| (OR)
console.log("\n Operador ||");
let valores = [{},true,false,"","pepe",0,23,undefined,NaN,null];
for (valor of valores) {
    let salida = valor || "OTRO VALOR IMPUESTO"
    console.log(salida);
}

//?? (NULLISH)
console.log("\n Operador ??");
for (valor of valores) {
    let salida = valor ?? "OTRO VALOR IMPUESTO"
    console.log(salida);
}

//Diapo 33
const usuario = null

// console.log( usuario.nombre || "El usuario no existe" )
// Error: "No se pueden leer propiedades de NULL"

console.log( usuario?.nombre || "El usuario no existe")
// "El usuario no existe"
