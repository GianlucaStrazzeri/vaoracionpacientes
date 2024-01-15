

function enviarFormulario() {
patientinformation=[];

    let nombre = document.getElementById("nombre").value;
    let movil = document.getElementById("movil").value;
    let fecha = document.getElementById("fecha").value;
    let dni = document.getElementById("dni").value;
    let email = document.getElementById("email").value;
    let formaDePago=document.getElementById("Forma_de_Pago").value;
    let zonaDeDolor = document.getElementById("zona_de_dolor").value;
    let eva = document.getElementById("Eva").value;
    let duraciónsintomas = document.getElementById("Duraciónsintomas").value;
    let descripciónPaciente = document.getElementById("Descripción_paciente").value;
    let diagnosticoMedico = document.getElementById("DiagnosticoMedico").value;
    let caracteristicasTemporales = document.getElementById("caracteristicasTemporales").value;
    let banderaRoja = document.getElementById("banderaRoja").value;
    let banderaAmarilla = document.getElementById("banderaAmarilla").value;
    let banderaBlue = document.getElementById("banderaBlue").value;
    let banderaBlack = document.getElementById("banderaBlack").value;
    let banderaNaranja = document.getElementById("banderaNaranja").value;
    let preferenciasDelTratamiento = document.getElementById("preferenciasDelTratamiento").value;
    let tratamientosDeOtros = document.getElementById("tratamientosDeOtros").value;
    let medicación = document.getElementById("medicación").value;

patientinformation.push(nombre+movil+fecha+dni+email+formaDePago+zonaDeDolor+eva+duraciónsintomas+descripciónPaciente +diagnosticoMedico+caracteristicasTemporales+banderaRoja+banderaAmarilla+banderaBlue+banderaBlack+banderaNaranja+preferenciasDelTratamiento+tratamientosDeOtros+medicación)
    
console.log(nombre+movil+fecha+dni+email+formaDePago+zonaDeDolor+eva+duraciónsintomas+descripciónPaciente +diagnosticoMedico+caracteristicasTemporales+banderaRoja+banderaAmarilla+banderaBlue+banderaBlack+banderaNaranja+preferenciasDelTratamiento+tratamientosDeOtros+medicación);
console.log(patientinformation);
}
enviarFormulario();



