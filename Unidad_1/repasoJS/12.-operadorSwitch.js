const paisDestino = "Brasil";
const paisesDisponibles = ["Bolivia", "Peru", "Argentina", "Brasil", "Nueva Guinea", "Mexico"];
let valorPasaje = 0;
/*
if (paisDestino == "Bolivia"){
    valorPasaje = 50;
}else if (paisDestino == "Peru"){
    valorPasaje = 75;
}*/
switch(paisDestino){
    case "Bolvia":
        valorPasaje = 200;
        break;
    case "Peru":
        valorPasaje = 300;
        break;
    case "Argentina":
        valorPasaje = 400;
        break;
    case "Brasil":
        valorPasaje = 500;
        break;
    case "Nueva Guinea":
        valorPasaje = 600;
        break;
    case "Mexico":
        valorPasaje = 700;
        break;
    default:
        console.log(`no existen paises para la ciudad que ingresa`)
        break;
}
if (valoPasaje > 0){
    console.log(`el valor del pasaje es ${valorPasaje}`)
}