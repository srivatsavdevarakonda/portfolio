document.addEventListener('DOMContentLoaded', () => {
    // Initialize AOS - Animate On Scroll
    AOS.init({
        duration: 1000,
        once: true, // Whether animation should happen only once - while scrolling down
        mirror: false, // Whether elements should animate out and in while scrolling past them
    });

    // Theme Toggle Functionality
    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;

    // Check for saved theme in localStorage
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        body.setAttribute('data-theme', currentTheme); // Use data-theme for CSS variables
        if (currentTheme === 'dark') {
            themeToggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
            body.classList.add('dark-mode'); // Also add dark-mode class for general CSS compatibility
        } else {
            themeToggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
            body.classList.remove('dark-mode'); // Remove dark-mode class if not dark
        }
    } else {
        // Default to light mode if no theme is saved
        body.setAttribute('data-theme', 'light');
        themeToggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
        body.classList.remove('dark-mode');
    }

    themeToggleBtn.addEventListener('click', () => {
        if (body.getAttribute('data-theme') === 'dark') {
            body.setAttribute('data-theme', 'light');
            themeToggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
            localStorage.setItem('theme', 'light');
            body.classList.remove('dark-mode'); // Ensure this class is removed
        } else {
            body.setAttribute('data-theme', 'dark');
            themeToggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
            localStorage.setItem('theme', 'dark');
            body.classList.add('dark-mode'); // Ensure this class is added
        }
    });

    // Typed.js for the hero section
    const typingElement = document.querySelector('.typing');
    if (typingElement) {
        new Typed(typingElement, {
            strings: ['Srivatsav Devarakonda', 'A Cybersecurity Enthusiast', 'An AI & ML Learner', 'A Full Stack Developer'],
            typeSpeed: 60,
            backSpeed: 30,
            loop: true,
            showCursor: true,
            cursorChar: '|',
        });
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('.navbar-nav .nav-link').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                window.scrollTo({
                    top: targetElement.offsetTop - navbarHeight,
                    behavior: 'smooth'
                });

                // Close the navbar on mobile after clicking a link
                const navbarCollapse = document.getElementById('navbarNav');
                const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse); // Get Bootstrap collapse instance
                if (navbarCollapse.classList.contains('show')) {
                    bsCollapse.hide();
                }
            }
        });
    });

    // Highlight active nav link on scroll
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    function highlightNavLink() {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - document.querySelector('.navbar').offsetHeight;
            const sectionHeight = section.clientHeight;
            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                current = '#' + section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === current) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', highlightNavLink);
    highlightNavLink(); // Call on load to set initial active link

    // Back to Top button functionality
    // Create and append the button if it doesn't exist
    let backToTopButton = document.getElementById('back-to-top');
    if (!backToTopButton) {
        backToTopButton = document.createElement('a');
        backToTopButton.setAttribute('href', '#home');
        backToTopButton.setAttribute('id', 'back-to-top');
        backToTopButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
        document.body.appendChild(backToTopButton);
    }

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) { // Show button after scrolling 300px
            backToTopButton.classList.add('show');
        } else {
            backToTopButton.classList.remove('show');
        }
    });

    backToTopButton.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Animate Skill Bars when they come into view
    const skillProgressBars = document.querySelectorAll('.skill-progress');

    const animateSkills = () => {
        skillProgressBars.forEach(bar => {
            const section = bar.closest('#about'); // Assuming skills are in #about section
            if (section) {
                const sectionTop = section.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;

                // Animate if the section is in view (and has scrolled into view significantly)
                if (sectionTop < windowHeight * 0.75 && sectionTop > -section.offsetHeight) {
                    const width = bar.getAttribute('data-width');
                    bar.style.width = width;
                } else {
                    // Optionally reset animation if scrolled out of view, for repeat animations
                    // If you want them to animate every time the user scrolls back to the section
                    // uncomment the line below. Otherwise, they animate once.
                    // bar.style.width = '0%';
                }
            }
        });
    };

    window.addEventListener('scroll', animateSkills);
    animateSkills(); // Call on load to check initial state (if skills are visible on page load)

    // Contact Form Submission (Example - replace with actual backend logic)
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! I will get back to you soon.');
            this.reset(); // Reset the form after submission
            // In a real application, you'd send this data to a server using fetch() or XMLHttpRequest
            // Example:
            /*
            const formData = new FormData(this);
            fetch('/submit-form', { // Replace with your actual endpoint
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                alert('Message sent successfully!');
                this.reset();
            })
            .catch((error) => {
                console.error('Error:', error);
                alert('There was an error sending your message.');
            });
            */
        });
    }
});