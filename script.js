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
            strings: ['Srivatsav Devarakonda', 'a Cybersecurity Analyst', 'an AI Tools Enthusiast', 'a Full Stack Developer'],
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

    // Function to set the theme and update icon
    function applyTheme(theme) {
        body.classList.remove('light-mode', 'dark-mode');
        body.classList.add(theme);
        localStorage.setItem('theme', theme);
        
        if (theme === 'dark-mode') {
            themeToggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
        } else {
            themeToggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
        }
    }

    // Check for saved theme preference or default to light
    const savedTheme = localStorage.getItem('theme') || 'light-mode';
    applyTheme(savedTheme);

    themeToggleBtn.addEventListener('click', () => {
        const currentTheme = localStorage.getItem('theme') || 'light-mode';
        const newTheme = currentTheme === 'light-mode' ? 'dark-mode' : 'light-mode';
        applyTheme(newTheme);
    });

    // Smooth Scrolling for Navigation Links
    document.querySelectorAll('.nav-link, .hero-buttons a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            // Ensure it's a page anchor before preventing default
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href;
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }

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

    // Skill Card Flip functionality
    const skillCards = document.querySelectorAll('.skill-card');
    skillCards.forEach(card => {
        card.addEventListener('click', () => {
            card.classList.toggle('is-flipped');
        });
    });
});