const checkComplete = ()=>{
    const i = document.createElement('i');
    i.classList.add('far', 'fa-check-square', 'icon');//estilos de iconos
    i.addEventListener('click',color);
    return i;
}
const color = (evento) =>{//en esta parte se cambia de color al check
    const element = evento.target;
    if (element.classList.contains('fas')) {
        element.classList.remove('fas');
        element.classList.remove('completeIcon');
        element.classList.add('far'); 
    } else {
        element.classList.add('fas');
        element.classList.add('completeIcon');
        element.classList.remove('far');
    }
};
export default checkComplete