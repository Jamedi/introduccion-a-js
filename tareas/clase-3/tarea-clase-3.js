// Tarea 1:
// Preguntarle al usuario su nombre.
// Si el nombre del usuario es el mismo que  el  de ustedes
// Imprimir "Hola, Tocayo! Yo también me llamo " y su nombre.
// Elijan otro nombre, puede ser de un pariente, amigo, conocido.
// Si el nombe del usuario es el mismo que el que nombre que eligieron
// Imprimir "Hola " y el nombre, " te llamás igual que mi ..."
// Si no, simplemente imprimir "Hola " + nombre!

/*
let nombreUsuario = prompt("cual es tu nombre?");
let miNombre = "jonatan"
let nombrePariente = "pilar"
if (miNombre === nombreUsuario.toLowerCase()){
    console.log("hola, toyaco! yo tambien me llamo " + miNombre);
}
else if (nombrePariente === nombreUsuario.toLowerCase()){
    console.log("hola " + nombreUsuario + " te llamas igual que " + nombrePariente);
}
else {
    console.log(`hola ${nombreUsuario}`);
}
*/

//Tarea 2:
// Preguntar la edad del usuario
// Hacerle saber si tiene más, menos ó la misma edad que nosotros.

/*
let edadUsuario = Number(prompt("ingrese su edad"));
let miEdad = 22;
if (miEdad === edadUsuario){
    console.log("tenemos la misma edad");
}
else if (miEdad > edadUsuario){
    console.log("tengo mas edad que vos");
}
else if (miEdad < edadUsuario){
    console.log("tengo menos edad que vos ");
}
*/

//Tarea 3:
// Preguntarle al usuario si tiene documento, y que conteste con "si" o "no".
// Si dice si, preguntarle la edad.
// Si la edad es mayor a 18, dejarlo entrar al bar.
// Si la edad es menor a 18, no dejarlo entrar al bar.
// Si no tiene documento, no dejarlo entrar al bar.
// Si no entendemos la respuesta, le decimos que no entendimos la respuesta.
// Punto bonus: SI, NO, Si, No, si, no.


function preguntarDocumentoUsuario(){
    let DocumentoUsuario = prompt("Tenes documento?");

    if (DocumentoUsuario.toLowerCase() === "si"){
        return PreguntarEdad();
    }
    else if (DocumentoUsuario.toLowerCase() === "no"){
        console.log("No podes ingresar al bar sin documento");
    }
    else {
        console.log("No te entiendo");
        return preguntarDocumentoUsuario();
    }
}

function PreguntarEdad(){
    let preguntarEdadUsuario = Number(prompt("Ingrese su edad"));
    if (preguntarEdadUsuario >= 18){
        alert("Podes entrar al bar");
        console.log("Podes entrar al bar");
    }
    else if (preguntarEdadUsuario < 18){
        alert("No podes entrar al bar");
        console.log("no podes entrar lal bar");
    }
    else {
        console.log("no entiendo la respuesta");
    }

}

preguntarDocumentoUsuario();