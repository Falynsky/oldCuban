function toggleAccordion(x) {

    let elementsByClassNameElement = x.getElementsByClassName('arrow')[0];
    if(elementsByClassNameElement.classList.length === 3){
        x.style.background = '#EEEEEE';
    } else {
        x.style.background = '#FFFFFF';
    }
    elementsByClassNameElement.classList.toggle('fa-angle-down');

}
