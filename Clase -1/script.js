// aqui va el codigo-comentario corto
/* Comentario
mas 
extenso */

// declaracion variable
let nombre;
let edad;

// inicializacion de variable
nombre="Edu"
edad=29;

// declarar e iniciar al mismo tiempo
let pais="Argentina"

// operaciones basicas
let number1=1450;
let number2=1550;
let suma=number1+number2; //suma=3000
let resta=number1-number2; //resta=-100
let multiplicacion=number1*number2; //multiplicacion=2247500
let division= number1/number2; //divison=0,93

// concatenacion de palabras
let apellido= "senguer"
let nombreCompleto = nombre + apellido; //nombreCompleto= "EduSenguer"

let result= nombre + number1; //result=Edu1450


//mensaje por consola - salida de datos
console.log("variables en JS");
console.log("El resultado de la suma es;"+suma);
console.log("El nombre completo del usuario es; "+nombreCompleto);

//ingreso de datos - prompt
nombre = prompt("Ingresa tu nombre");
console.log("Nombre del usuario actual: "+nombre);

// convertir anio de nacimiento a Entero
let anioNacimiento = parseInt(prompt("Ingrese su anio de nacimiento"));
console.log(nombre +" nacio en: "+anioNacimiento);

//calculando la edad del usuario activo
let edadUsuario=2022-anioNacimiento;
console.log("La edad del usuario es: "+edadUsuario);

//mensaje por alert - salida de datos
alert("Usuario activo: "+nombre);