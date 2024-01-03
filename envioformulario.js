

function enviarFormulario() {
    let nombre = document.getElementById("nombre").value;
    let movil = document.getElementById("movil").value;
    let fecha = document.getElementById("fecha").value;

    console.log(nombre+movil+fecha);
}
enviarFormulario();