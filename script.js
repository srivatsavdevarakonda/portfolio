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

    const savedTheme = localStorage.getItem('theme') || 'light-mode';
    applyTheme(savedTheme);

    themeToggleBtn.addEventListener('click', () => {
        const newTheme = body.classList.contains('light-mode') ? 'dark-mode' : 'light-mode';
        applyTheme(newTheme);
    });

    // Smooth Scrolling for Navigation Links
    document.querySelectorAll('.nav-link, .hero-buttons a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetElement = document.querySelector(href);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            }
            const navbarToggler = document.querySelector('.navbar-toggler');
            const navbarCollapse = document.getElementById('navbarNav');
            if (navbarCollapse.classList.contains('show')) {
                navbarToggler.click();
            }
        });
    });

    // Scroll-down icon behavior
    const scrollDownIcon = document.querySelector('.scroll-down a');
    if (scrollDownIcon) {
        scrollDownIcon.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
        });
    }

    // Skill Card Flip functionality
    const skillCards = document.querySelectorAll('.skill-card');
    skillCards.forEach(card => {
        card.addEventListener('click', () => {
            card.classList.toggle('is-flipped');
        });
    });

    // EmailJS Contact Form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        (function() {
            emailjs.init({
                publicKey: "YOUR_PUBLIC_KEY", // <-- PASTE YOUR PUBLIC KEY HERE
            });
        })();

        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const formMessage = document.getElementById('form-message');
            const submitButton = this.querySelector('button[type="submit"]');

            const serviceID = 'YOUR_SERVICE_ID'; // <-- PASTE YOUR SERVICE ID HERE
            const templateID = 'YOUR_TEMPLATE_ID'; // <-- PASTE YOUR TEMPLATE ID HERE

            submitButton.disabled = true;
            submitButton.innerHTML = 'Sending...';
            
            emailjs.sendForm(serviceID, templateID, this)
                .then(() => {
                    formMessage.innerHTML = '<div class="alert alert-success">Message sent successfully!</div>';
                    submitButton.disabled = false;
                    submitButton.innerHTML = 'Send Message';
                    contactForm.reset();
                }, (err) => {
                    formMessage.innerHTML = `<div class="alert alert-danger">Failed to send message. Please try again.</div>`;
                    submitButton.disabled = false;
                    submitButton.innerHTML = 'Send Message';
                    console.error('EmailJS Error:', JSON.stringify(err));
                });
        });
    }
});