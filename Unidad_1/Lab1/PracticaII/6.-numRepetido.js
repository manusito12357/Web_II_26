//funcion tradicional
function masRepetidoTradicional(array) {
    let mayorConteo = 0;
    let numeroMasRepetido;
    for (let i = 0; i < array.length; i++) {
        let conteoActual = 0;
        for (let j = 0; j < array.length; j++) {
            if (array[i] === array[j]) {
                conteoActual++;
            }
        }
        if (conteoActual > mayorConteo) {
            mayorConteo = conteoActual;
            numeroMasRepetido = array[i];
        }
    }
    return numeroMasRepetido;
}
const numero = [1, 3, 2, 3, 4, 3, 2,2 ,2];
console.log(" El más repetido es: ", masRepetidoTradicional(numero));

//funcion flecha 
const masRepetido = (array) => {
    let mayorConteo = 0;
    let numeroMasRepetido;
    for (let i = 0; i < array.length; i++) {
        let conteoActual = 0;
        
        for (let j = 0; j < array.length; j++) {
            if (array[i] === array[j]) {
                conteoActual++;
            }
        }
        if (conteoActual > mayorConteo) {
            mayorConteo = conteoActual;
            numeroMasRepetido = array[i];
        }
    }
    return numeroMasRepetido;
};

const numeros = [5,5,6,4,3,2,1,10,10,10]
console.log(" El más repetido es:", masRepetido(numeros));