const deletIcon =() =>{
    const i = document.createElement('i');
    i.classList.add('fas', 'fa-trash-alt', 'trashIcon', 'icon');
    i.addEventListener('click',deteleTask);
    return i;
}
const deteleTask = (evento)=>{
    const parent = evento.target.parentElement;
    parent.remove();
}
export default deletIcon;