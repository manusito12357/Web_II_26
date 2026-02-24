function palabrasMasLargas(frase) {
    let palabras = frase.split(" ");
    let larga = "";
    for (let p of palabras) {
        if (p . length > larga. length) larga = p;
        }   
        return larga;
    }
const frase = "las casas son grandes y bonitass";
console.log(palabrasMasLargas(frase));
const palabraMasLarga = (frase) => {
    frase.split(" ").reduce((a, b) => a.length > b.length ? a : b);
}
const frase2 = "las casas son gigantescas y bonitas";
console.log(palabraMasLarga(frase2));