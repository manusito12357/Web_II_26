const valorPasaje = 50;
if (valorPasaje ===50){
    console.log(`El valor del pasaje es correcto`);
}
const paisDestino = "Brasil";
const paisesDisponibles = ["Bolivia", "Peru", "Argentina", "Brasil", "Nueva Guinea", "Mexico"];

let edadPasajero = 17;
let aconpaniado = true;

console.log(`pasajes para ${paisDestino}`);
if ((paisesDisponibles.indexOf(paisDestino)> -1 && (edadPasajero >= 18)|| aconpaniado)){
    console.log("pasaje disponible");
}else {
    console.log("Pasaje no se puede vender");
}
//logica negativa
if (!(paisesDisponibles.indexOf(paisDestino) > -1 && (edadPasajero >= 18 || aconpaniado))) {
    console.log("Pasaje no se puede vender");
} else {
    console.log("pasaje disponible");
}
