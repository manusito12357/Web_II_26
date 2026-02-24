//funcion tradicional
function numeroIvertido2(numero){
    if(numero.length === 0){
        return "";
    }else{
    let array = typeof numero === 'string' ? numero.split(''): numero;  
    let ultimo = array.pop();
    return ultimo + numeroIvertido2(array);
    }
}
console.log(numeroIvertido2("54321"));

//funcion flecha
const numeroIvertido = (numero) => {
    if (numero.length === 0) {
        return "";
    } else {
        let array = typeof numero === 'string' ? numero.split('') : numero;
        let num = array.pop();
        return num + numeroIvertido(array);
    }
};

console.log(numeroIvertido("12345"));