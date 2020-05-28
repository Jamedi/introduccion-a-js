//TAREA3: En otro archivo distinto,
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.

let $segundos=0
let $minutos=0
let $horas=0

let $botonHsMemoria = document.querySelectorAll("button");


$botonHsMemoria[0].onclick = function (){
    let usuarioHoras = Number(document.querySelector("#horas").value);
    let usuarioMinutos = Number(document.querySelector("#minutos").value);
    let usuarioSegundos = Number(document.querySelector("#segundos").value);
    
    $segundos = $segundos + usuarioSegundos;
    $minutos = $minutos + usuarioMinutos;
    $horas = $horas + usuarioHoras;


    document.querySelector("#segundos").value = ""
    document.querySelector("#minutos").value = ""
    document.querySelector("#horas").value = ""

    return false;
}

function segundos_a_minutos(){
    let agregarMinutos = Math.floor($segundos/60);
    $minutos = $minutos + agregarMinutos;
    $segundos = $segundos % 60;
}

function minutos_a_horas(){
    let horas_agregar = Math.floor($minutos/60)
    $horas = $horas + horas_agregar;
    $minutos = $minutos % 60;
  }

  $botonHsMemoria[1].onclick = function(){
    segundos_a_minutos()
    minutos_a_horas()
    let crearStrong  = document.createElement("strong");
    document.querySelector("#total-horas").appendChild(crearStrong);
    if($segundos || $horas || $segundos)
    {
      document.querySelector("#total-horas").textContent= `Duracion total de los videos: ${$horas}:${$minutos}:${$segundos}`
    }
    else
    {
      document.querySelector("#videos-agregados").textContent = "No agregaste nada"
    }
    
    return false;
  }
  
  