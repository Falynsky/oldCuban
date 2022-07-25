function toggleAccordion(x, elementsInAccordion) {
    let content = x.parentElement.parentElement.getElementsByClassName('content')[0];
    let arrow = x.getElementsByClassName('arrow')[0]

    if (arrow.classList.length === 1) {
        x.style.background = '#EEEEEE';
        arrow.style.padding = '0 0 .889rem 0';
        arrow.style.transform = 'rotate(270deg)';
        content.style.maxHeight = elementsInAccordion * (4 + Math.sqrt(elementsInAccordion)) + 'rem';
    } else {
        x.style.background = '#FFFFFF';
        arrow.style.padding = '.889rem 0 0 0';
        arrow.style.transform = 'rotate(90deg)';
        content.style.maxHeight = '0';
    }

    arrow.classList.toggle('opened');

}
