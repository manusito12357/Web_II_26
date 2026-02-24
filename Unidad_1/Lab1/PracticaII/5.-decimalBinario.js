function decimalaBinario(decimal){
    if (decimal === 0){
        return "0";
    }
    let binario = "";
    for (let i = decimal; i > 0; i = Math.floor(i / 2)){
        binario = (i % 2) + binario;
    }
    return binario;
}
console.log(decimalaBinario(13));

const decimalaBinario2 = (decimal) =>{
    if (decimal === 0){
        return "0";
    }
    let binario = "";
    for (let i = decimal; i > 0; i = Math.floor(i / 2)){
        binario = (i % 2) + binario;
    }
}
console.log(decimalaBinario2(19));