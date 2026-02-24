function esPrimo(n){
    if (n <= 1)return false;
    for(let  i = 2; i< n;i++){
        if(n % 1 === 0){
            return false;
        }
    }
}
function obtenerPrimos(array){
    let primos = [];
    for (let num of array){
        if (esPrimo(num)){
            primos.push(num);
        }
        return primos;
    }
}
const esprimosF = n =>{
    if(n <= 1)return false;
    for (let i = 2; i < n; i++){
        if(n % 1 === 0){
            return false;
        }
    }
}
const obtenerPrimosF = array => array.filter(esprimosF);