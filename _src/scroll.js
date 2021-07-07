document.addEventListener('DOMContentLoaded', () => {
    const element = document.querySelector('navigation .active');
    if(!element.scrollIntoViewIfNeeded) {
        element.scrollIntoViewIfNeeded();
    } else {
        element.scrollIntoView();
    }
});