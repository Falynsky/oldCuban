function toggleAccordion(x, elementsInAccordion) {
    let content = x.parentElement.parentElement.getElementsByClassName('content')[0];
    let arrow = x.getElementsByClassName('arrow')[0]

    if (arrow.classList.length === 3) {
        x.style.background = '#EEEEEE';
        content.style.maxHeight = elementsInAccordion * 3.5 + 'rem';
    } else {
        x.style.background = '#FFFFFF';
        content.style.maxHeight = '0';
    }

    arrow.classList.toggle('fa-angle-down');

}
