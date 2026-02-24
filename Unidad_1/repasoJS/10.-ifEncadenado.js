const paisDestino = "Brasil";
const paisesDisponibles = ["Bolivia", "Peru", "Argentina", "Brasil", "Nueva Guinea", "Mexico"];
let edadPasajero = 17;
let aconpaniado = true;
//logica todo en un solo if 
if ((paisesDisponibles.indexOf(paisDestino)> -1 && (edadPasajero >= 18)|| aconpaniado)){
    console.log("pasaje disponible");
}else {
    console.log("Pasaje no se puede vender");
}
//logica con ===
if (paisDestino === "Brasil"){
    if (edadPasajero >= 18 || acompaniado){
        if(paisesDisponibles.indexOf(paisDestino)>-1){
            console.log("pasaje disponible");
        }else {
            console.log("Pasaje no se puede vender");
        }
    }else{
        console.log("la edad del pasajero no es suficiente para viajar a brasil");
    }
}else{
    console.log("el pais del destino no es Brasil")
}
//logica negativa
if (paisDestino !== "Brasil"){
    if (edadPasajero >= 18 || acompaniado){
        if(paisesDisponibles.indexOf(paisDestino)>-1){
            console.log("pasaje disponible");
        }else {
            console.log("Pasaje no se puede vender");
        }
    }else{
        console.log("la edad del pasajero no es suficiente para viajar a brasil");
    }
}else{
    console.log("el pais del destino no es Brasil")
}