const $botonNombresYapellidos = document.querySelector("#mostrar-nombres");

$botonNombresYapellidos.onclick = function(){
    const $primerNombre = document.querySelector("#nombre-usuario1").value;
    const $segundoNombre = document.querySelector("#nombre-usuario2").value;
    const $primerApellido = document.querySelector("#apellido-usuario1").value;
    const $segundoApellido = document.querySelector("#apellido-usuario2").value;

    document.querySelector("h1").innerText = `bienvenido ${$primerNombre} ${$segundoNombre} ${$primerApellido} ${$segundoApellido}`;
    let nombresApellidosUsuarios = document.querySelectorAll("input").value;
    document.querySelector("#resultado").innerText = `${$primerNombre} ${$segundoNombre} ${$primerApellido} ${$segundoApellido}`;
    miTitulo = `bienvenido ${$primerNombre} ${$segundoNombre} ${$primerApellido} ${$segundoApellido}`;
    return false;
}
