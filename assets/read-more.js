document.addEventListener('DOMContentLoaded', (evt) => {
    const btn = document.getElementById('read-more-button');
    const target = document.querySelector('.isolate')
    if (!btn) return;
    btn.addEventListener('click', () => target?.scrollIntoView({
        behavior: 'smooth'
    }));
})