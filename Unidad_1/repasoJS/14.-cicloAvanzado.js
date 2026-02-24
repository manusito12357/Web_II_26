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
const presupuesto = 300;
let i = 0;

let paisSeleccionado = '';
do{
    if(datos[i.precio]<= presupuesto){
        paisSeleccionado = datos[i].pais;
    }
    i++;
}while(i < datos.length && paisSeleccionado == '')
    if (paisSeleccionado == ''){
        console.log(`no existen pasajes disponibles`)
    }else{
        console.log(`puedes comprar el pasaje`)
    }