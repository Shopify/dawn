//  hover/highlighted state for error rows that we cannot do with css due to lack of previous sibling selector

const desktopRowsErrors = Array.from(document.querySelectorAll('.quick-order-list__table tr.desktop-row-error'));

desktopRowsErrors.forEach((row) => {
    row.addEventListener('mouseover', () => {
        row.previousElementSibling.classList.add('hover');
    });
    row.addEventListener('mouseout', () => {
        row.previousElementSibling.classList.remove('hover');
    });
});
