// //Arrays en JS
// const listaAsado = ["tira de asado","chinchulines","vacio","chori","pan","mollejas","malbec","coca cola","fernet","carbon","ensalada","lenia"];
// console.log(listaAsado);
// console.log(listaAsado[2]);
// console.log(listaAsado[4].toUpperCase());

// //Recorrido del array
// for (let i=0; i<12; i++) {
//     console.log("Insumo nro "+i+" :"+listaAsado[i]);
// }

// console.log("La longitud de la lista es de "+ listaAsado.length + " elementos");

// // for (let i=0; i<listaAsado.length; i++) {
// //     console.log("Insumo nro "+i+" :"+listaAsado[i]);
// // }

// //Metodo push para agregar elementos
// listaAsado.push("torta de cumple");
// console.log(listaAsado);

// //Metodo unshift para agregar elementos al principio
// listaAsado.unshift("chimichurri");
// console.log(listaAsado);

// //Metodo pop para sacar elementos al final
// listaAsado.pop();

// //Metodo shift para sacar elementos del principio
// listaAsado.shift();

// console.log(listaAsado);

// //Splice elimina elementos en cualquier posicion de la lista
// listaAsado.splice(5,2);
// console.log(listaAsado);

// //Metodo join une todos los elementos del array en un solo string
// let listaConJoin = listaAsado.join(' , ');
// console.log(listaConJoin.toUpperCase());

// //Metodo concat crea un array con dos arrays
// const perros = ["pupy", "ronnie"]
// const gatos = ["mishi", "garfield", "zuri"]
// const mascotas = perros.concat(gatos);
// const mascotas2 = gatos.concat(perros);
// console.log(mascotas);
// console.log(mascotas2);

// //Slice copia una porcion del array en otro array
// const nombres = ["rita", "pedro", "miguel", "ana", "vanesa"];
// const masculinos = nombres.slice(1, 3); //Nuevo array desde la posicion 1 a 3
// console.log(masculinos);

// //IndexOf busca la existencia de un elemento del array y devuelve el indice del mismo
// const listaAprobados = ["Gomez", "Perez", "Alvarez", "Montoya"];
// let indice = listaAprobados.indexOf("Perez");
// console.log(indice);

//Array de objetos
const libros=[
    {
        isbn:"2345123",
        titulo:"Harry Potter",
        genero:"Aventuras",
        precio:230.90
    },
    {
        isbn:"9099777",
        titulo:"Elige tu propia aventura",
        genero:"Aventuras",
        precio:199.00
    },
    {
        isbn:"12121212",
        titulo:"JS para principiantes",
        genero:"Educacion",
        precio:290.00
    },
    {
        isbn:"3333333",
        titulo:"Diccionario de Frances-Español",
        genero:"Diccionario",
        precio:99.90
    },
];

//Diapo 41
class Producto {
    constructor(nombre, precio) {
        this.nombre  = nombre.toUpperCase();
        this.precio  = parseFloat(precio);
        this.vendido = false;
    }
    sumaIva() {
        this.precio = this.precio * 1.21;
    }
}
//Declaramos un array de productos para almacenar objetos
const productos = [];
productos.push(new Producto("arroz", "125"));
productos.push(new Producto("fideo", "70"));
productos.push(new Producto("pan", "50"));
//Iteramos el array con for...of para modificarlos a todos
for (const producto of productos)
    producto.sumaIva();
