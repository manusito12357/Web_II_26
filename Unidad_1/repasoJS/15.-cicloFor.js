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
for(i = 0; i < datos.length && paisSeleccionado == ''; i++){
    if([datos.precio] <= pais.precio){
        console.log(`Puedes comprar el pasaje`)
    }else{
        console.log(`No puedes comprar el pasasje`)
    }
}