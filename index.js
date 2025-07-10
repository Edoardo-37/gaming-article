// hamburger menu
const nav = document.querySelector('nav');
const hamburgerButton = document.querySelector('.hamburger-toggle');
const navLinks = document.querySelectorAll('.nav-links');

hamburgerButton.addEventListener('click', function () {
    nav.classList.toggle('mobile');
    const expanded = hamburgerButton.getAttribute('aria-expanded') === 'true';
    hamburgerButton.setAttribute('aria-expanded', !expanded);
})

const dropdownButton = document.querySelectorAll('.dropdown-button');
const dropdownContent = document.querySelectorAll('.dropdown-content');

// dropdown menu
dropdownButton.forEach(button => {
    button.addEventListener('click', () => {
        const content = button.nextElementSibling;
        dropdownContent.forEach(item => {
            if (item !== content) {
                item.classList.remove('visible');
            } else {
                item.classList.toggle('visible');
            }
        });
    });
});

const progressBar = document.querySelector('.progress-bar');
const backTopBtn = document.querySelector('.back-top');

window.addEventListener('scroll', handleScroll);
function handleScroll() {
    let winscroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winscroll / height) * 100;

    // back to top button appearance
    progressBar.style.width = `${scrolled}%`;
    if (scrolled >= '30') {
        backTopBtn.classList.add('visible');
        nav.classList.add('fixed');
    } else if (scrolled <= '15') {
        backTopBtn.classList.remove('visible');
    }
}

// precise scroll padding top
const navHeight = document.querySelector('nav').offsetHeight;
document.documentElement.style.setProperty('--navHeight', `${navHeight}px`);

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

// lazy load
const images = document.querySelectorAll('.not-loaded');
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const image = entry.target;
            image.src = image.dataset.lazy;
            image.onload = () => {
                image.classList.remove('not-loaded');
                image.classList.add('loaded');
            };
        }
    })
}, { threshold: 0.5 })
images.forEach((image) => {
    observer.observe(image)
})