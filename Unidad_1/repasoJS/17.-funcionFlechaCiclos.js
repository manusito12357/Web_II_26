const paisesDisponibles = ["Bolivia", "Peru", "Argentina", "Brasil", "Nueva Guinea", "Mexico"];
const preciosPaises = new Array(100, 200, 300, 400, 500, 600);
const presupuesto = 250;
//for
const presupuesto3 = 300;
for( i = 0; i < paisesDisponibles.length; i++){
    if(preciosPaises[i] <= presupuesto3){
        console.log(`Puedes comprar el pasaje`)
    }else{
        console.log(`No puedes comprar el pasaje`)
    }
}
//do while
const datos = [
    {
        'pais':'Bolivia',
        'precio':200
    },
    {
        'pais':'Peru',
        'precio':200
    },
    {
        'pais':'Argentina',
        'precio':200
    },
    {
        'pais':'Brasil',
        'precio':200
    },
    {
        'pais':'Nueva Guinea',
        'precio':200
    },
    {
        'pais':'Mexico',
        'precio':200
    }
];
const presupuesto2 = 300;
let paisSeleccionado = '';
const procesarCompra2 = (presupuesto) =>{
    do{
        if(datos[i.precio]<= presupuesto){
            paisSeleccionado = datos[i].pais;
        }
        i++;
    }while(i < datos.length && paisSeleccionado == '')
        if (paisSeleccionado == ''){
            console.log(`no existen pasajes disponibles`)
        }else{
            console.long(`puedes comprar el pasaje`)
        }
    }
//for
const procesarCompra = (presupuesto) =>{
    for(let i = 0; i < paisesDisponibles.length; i++){
        if(preciosPaises[i] <= presupuesto){
            console.log(`Puedes comprar el pasaje`)
        }else{
            console.log(`No puedes comprar el pasaje`)
        }
    }
}

