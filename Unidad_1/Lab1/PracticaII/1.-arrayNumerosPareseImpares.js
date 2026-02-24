
//funcion tradicional
function numerosParesImpares(numeros){
    let par1 = 0;
    let impar1 = 0;
    
    for (let i = 0; i < numeros.length; i++){
        if(numeros[i]%2 == 0){
            par1++;
        }else{
            impar1++;
        }
    }   
    return {par1, impar1};
};
const numeros = [1,2,3,4,5,6,7,8,9,10,
        11,12,13,14,15,16,17,18,19,20,
        21,22,23,24,25,26,27,28,29,30];
console.log(numerosParesImpares(numeros));

//funcion flecha
let par = 0;
let impar = 0;
const verificarPareseImpares = () =>{
    for (let i = 0 ; i < numArray.length; i++){
        if(numArray[i] % 2 === 0){
            par++;
        }else {
            impar++;
        }        
    }
    return {par, impar};
};
const numArray = [1,2,3,4,5,6,,7,8,9,10
    ,11,12,13,14,15,16,17,18,19,20,
    30,31,32,33,34,35,36,37,38,39,40,];
console.log(verificarPareseImpares(numArray));