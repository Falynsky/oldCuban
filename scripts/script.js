function toggleAccordion(x, elementsInAccordion, deepness) {
    let content = x.parentElement.parentElement.getElementsByClassName('content')[0];
    let arrow = x.getElementsByClassName('arrow')[0]
    let dotDotLevel = ''
    while (deepness-- > 0) {
        dotDotLevel += '../'
    }
    if (arrow.classList.length === 1) {
        x.style.background = '#EEEEEE';
        arrow.src = dotDotLevel + 'assets/hide.svg'
        content.style.maxHeight = elementsInAccordion * (4 + Math.sqrt(elementsInAccordion)) + 'rem';
    } else {
        x.style.background = '#FFFFFF';
        arrow.src = dotDotLevel + 'assets/expand.svg'
        content.style.maxHeight = '0';
    }

    arrow.classList.toggle('opened');

}
