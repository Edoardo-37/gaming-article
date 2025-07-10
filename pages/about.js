// dark mode
const darkModeButton = document.querySelector('#dark-mode-btn');
const darkModeIcon = document.querySelector('.dark-controller');
darkModeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    darkModeIcon.classList.toggle('active');
});

if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.classList.add('dark')
    darkModeIcon.classList.toggle('active');
    darkModeButton.checked = true;

} else {
    document.body.classList.remove('dark');
    darkModeIcon.classList.remove('active');
    darkModeButton.checked = false;
}