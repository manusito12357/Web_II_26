//funcion tradicional
function sumarPropiedad (lista, propiedad){
    let total = 0;
    for (let i = 0; i < lista.length ; i++){
        total = total + lista[i][propiedad];
    }
    return total;
}
const carrito = [{ nombre: "Salchipapa" , precio : 45},
                { nombre: "Sopa de mani" , precio : 15},
                { nombre: "Cafe" , precio : 5},
];
console.log("El total es: " + sumarPropiedad(carrito,"precio"));
//funcion flecha
const sumarPropiedad1 = (lista1,propiedad1) =>{
    let total1 = 0;
    for(let i = 0; i < lista1.length; i++){
        total1 = total1 + lista1[i][propiedad1];
    }
    return total1;
}
const carrito1 = [{ nombre: "Salchipapa" , precio : 49},
                { nombre: "Sopa de mani" , precio : 85},
                { nombre: "Cafe" , precio : 99},
];
console.log("El total es: " + sumarPropiedad1(carrito1,"precio"));