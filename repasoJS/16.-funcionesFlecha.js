const saludar = () =>{
    console.log("funcion flecha")
};
saludar();

const duplicar = (numero) =>{
    return numero * 2;
};
console.log(duplicar(5));

const suma = (a , b) =>{
    return a + b;
};
console.log(suma(2,3));

const crearUsuasrio = (nombre , edad) =>({nombre:nombre,edad:edad})
console.log(crearUsuasrio("Juan",28))

const numeros = [3,2,4,5,6,20]
//funcion para filtrar

const procesarNumeros = (numeros) =>{
    return numeros
        .filter(numero => numero > 10)
        .map(numero => numero * 2)
};

const resultado = procesarNumeros(numeros);
console.log(resultado);

const usuarios = [
    {nombre:"Juan", edad:13},
    {nombre:"Luis", edad:35},
    {nombre:"Maria", edad:25},
    {nombre:"Santy", edad:90},
    {nombre:"Felipe", edad:43},
]
const procesarUsuarios = (usuarios) => {
    return usuarios  
    .filter(usuario => usuario.edad > 18)//filtramos que la edad sea mayor a 18
    .map(usuario =>{//transformamos los datos
        const {nombre} = usuario;//reestructurar para obtener el nombre
        return nombre.lenght > 5 ? nombre.toUpperCase() : nombre.toLowerCase();
    });
};
const result2 = procesarUsuarios(usuarios);
console.log(result2);
