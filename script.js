document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS (Animate On Scroll)
    AOS.init({
        duration: 800,
        once: true,
        offset: 50,
    });

    // Typed.js for the hero section
    if (document.querySelector('.typing')) {
        new Typed('.typing', {
            strings: ['Srivatsav Devarakonda', 'a Cybersecurity Enthusiast', 'an AI Practitioner', 'a Full Stack Developer'],
            typeSpeed: 70,
            backSpeed: 40,
            loop: true,
            showCursor: true,
            cursorChar: '|',
        });
    }

    // Theme Toggle (Light/Dark Mode)
    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;

    // Check for saved theme preference or default to light
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.classList.add(savedTheme);
        updateThemeToggleIcon(savedTheme);
    } else {
        body.classList.add('light-mode'); // Default to light mode
        updateThemeToggleIcon('light-mode');
    }

    themeToggleBtn.addEventListener('click', () => {
        if (body.classList.contains('light-mode')) {
            body.classList.replace('light-mode', 'dark-mode');
            localStorage.setItem('theme', 'dark-mode');
            updateThemeToggleIcon('dark-mode');
        } else {
            body.classList.replace('dark-mode', 'light-mode');
            localStorage.setItem('theme', 'light-mode');
            updateThemeToggleIcon('light-mode');
        }
    });

    function updateThemeToggleIcon(theme) {
        if (theme === 'dark-mode') {
            themeToggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
        } else {
            themeToggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
        }
    }

    // Smooth Scrolling for Navigation Links
    document.querySelectorAll('.navbar-nav .nav-link').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });

            // Close navbar on mobile after clicking a link
            const navbarToggler = document.querySelector('.navbar-toggler');
            const navbarCollapse = document.getElementById('navbarNav');
            if (navbarCollapse.classList.contains('show')) {
                navbarToggler.click(); // Simulate a click to close the navbar
            }
        });
    });

    // Scroll-down icon behavior
    const scrollDownIcon = document.querySelector('.scroll-down a');
    if (scrollDownIcon) {
        scrollDownIcon.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    }
});