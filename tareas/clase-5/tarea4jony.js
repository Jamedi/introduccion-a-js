//TAREA4: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."


let contadorNumeros = 0;
let numerosLista = document.querySelectorAll("li");
const arrayNumeroLista = [];

for(let i = 0; i < numerosLista.length; i++){
  arrayNumeroLista.push(Number(numerosLista[i].textContent));    
}

function promedioNumeros(){
    for(let i = 0; i < arrayNumeroLista.length; i++){
        contadorNumeros += arrayNumeroLista[i];
    }
    let promedio = "el promedio es " + contadorNumeros / arrayNumeroLista.length;
    document.querySelector("#promedio").textContent = promedio;
}
promedioNumeros();

let mayorCantidadRepeticiones = 0;
let mayorNumero = 0;
let contadorNumeroActual = 0;
let numeroActual;
let menorNumero = 10000;
let numeroMayorRepeticion = 0;


for (let i = 0; i < arrayNumeroLista.length; i++){
    numeroActual = arrayNumeroLista[i];

    for (let i = 0; i < arrayNumeroLista.length; i++){
        if(numeroActual === arrayNumeroLista[i]){
            contadorNumeroActual++;
        }

    }
    

    if(contadorNumeroActual > mayorCantidadRepeticiones){
        mayorCantidadRepeticiones = contadorNumeroActual;
        numeroMayorRepeticion = numeroActual;
        document.querySelector("#mayorRepeticion").textContent = "El numero que mas se Frecuente es " + numeroMayorRepeticion;
    }
    contadorNumeroActual = 0;

    if (numeroActual > mayorNumero){
        mayorNumero = numeroActual
        document.querySelector("#mayorNumero").textContent = "El numero mas grande es " + mayorNumero;
    }
    

    if (numeroActual < menorNumero){
        menorNumero = numeroActual
        document.querySelector("#menorNumero").textContent = "El numero mas pequenio es " + menorNumero;
    }
    

}


