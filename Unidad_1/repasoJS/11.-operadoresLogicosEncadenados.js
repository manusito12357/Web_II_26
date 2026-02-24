const paisDestino = "Brasil";
const paisesDisponibles = ["Bolivia", "Peru", "Argentina", "Brasil", "Nueva Guinea", "Mexico"];
let edadPasajero = 17;
let aconpaniado = true;
let pasaporte = true;
let casado = false;

console.log(`verificamos si hay pasajes para ${paisDestino}`);

//A && B || C
if(paisesDisponibles.indexOf(paisDestino>-1 &&  edadPasajero >= 18 && pasaporte && !casado)){
    console.log("Disponible tour Solteros");
}else {
    console.log("Pasaje no esta disponible o no cumple con los requisitos")
}
