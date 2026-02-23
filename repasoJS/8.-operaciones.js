const ciudades = new Array("La Paz", "Cochabamba", "Santa Cruz");

//definir un array abreviado
const paises = ["Bolivia", "Peru", "Argentina", "Brasil", "Nueva Guinea", "Mexico"];

let conteoCiudades = ciudades.length;
console.log(`el conteo total de todlas ciuedades es ${conteoCiudades}`);
//ejercicios con arrays
ciudades.shift();//elimina el primer elemento del array
console.log(ciudades);
ciudades.pop();//elimina el ultimo elemento del array
console.log(ciudades);

console.log(paises.join("-"));
console.log(paises.sort());