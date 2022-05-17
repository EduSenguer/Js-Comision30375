//OBJETOS
class Placa {
    constructor(marca,precio,calidad,garantia) {
        this.marca=marca;
        this.precio=precio;
        this.calidad=calidad;
        this.garantia=garantia;
    }
}
class Mother {
    constructor(marca,precio,calidad,garantia) {
        this.marca=marca;
        this.precio=precio;
        this.calidad=calidad;
        this.garantia=garantia;
    }
}
class Micro {
    constructor(marca,precio,calidad,garantia) {
        this.marca=marca;
        this.precio=precio;
        this.calidad=calidad;
        this.garantia=garantia;
    }
}

const placa1 = new Placa("ASUS",850,"ALTA","24 MESES");
const placa2 = new Placa("EVGA",700,"ALTA","24 MESES");
const placa3 = new Placa("GIGABYTE",450,"MEDIA","12 MESES");
const mother1 = new Mother("ASUS TUF",200,"MEDIA","18 MESES");
const mother2 = new Mother("AORUS Z590",350,"ALTA","24 MESES");
const mother3 = new Mother("ASUS PRIME",150,"BAJA","12 MESES");
const micro1 = new Micro("INTEL I7",230,"MEDIA","36 MESES");
const micro2 = new Micro("INTEL I9",550,"ALTA","36 MESES");
const micro3 = new Micro("INTEL I5",140,"MEDIA","24 MESES");

//ARRAY
const hardwares = [placa1,placa2,placa3,mother1,mother2,mother3,micro1,micro2,micro3];

//FUNCIONES
function saludo() {
    let nombreUsuario = prompt("Hola! Que tal! Ingrese su nombre porfavor!!");
    console.log("Bienvenido a COMPUMUNDO HIPERMEGARED " + nombreUsuario);
}
saludo();
let pregunta = prompt("Le gustaria ver nuestra lista de productos?").toLowerCase();
function consulta() {
    if (pregunta == "si") {
        for (const hardware of hardwares) {
            console.log(hardware);
        }
    } else {
        alert("Que tenga un buen dia!");
    }
}
consulta();
