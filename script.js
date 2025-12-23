// ==========================================================================
// COMPLETE PORTFOLIO SCRIPTING.JS
// ==========================================================================

// Wait for DOM + External Libraries
document.addEventListener('DOMContentLoaded', function() {
    // Initialize everything safely
    initAOS();
    initTyped();
    initNavbarScroll();
    initScrollProgress();
    initSmoothScroll();
    initSkillsChart();
    initProjectsSwiper(); 
    initParticles();
    initEmailJS();
    new InteractiveTerminal();
});

// [1] AOS ANIMATION LIBRARY
function initAOS() {
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1200,
            once: true,
            offset: 100,
            easing: 'ease-out-cubic'
        });
    }
}

// [2] TYPING ANIMATION
let typedInstance = null;

function initTyped() {
    const target = document.querySelector('.typing');
    if (!target || typeof Typed === 'undefined') return;

    // Prevent duplicate initialization
    if (typedInstance) {
        typedInstance.destroy();
        typedInstance = null;
    }

    typedInstance = new Typed('.typing', {
        strings: [
        'Data Science &amp; AI Enthusiast',
        'Cybersecurity &amp; VAPT Practitioner',
        'Backend &amp; Systems Developer',
        'Full-Stack Web Developer',
        'Cloud &amp; DevOps Explorer',
        'Security Automation Enthusiast'
        ],

        typeSpeed: 55,        // smoother typing
        backSpeed: 35,        // smoother deleting
        startDelay: 800,      // wait for page load
        backDelay: 1800,      // ⭐ IMPORTANT (was your main issue)

        loop: true,
        smartBackspace: true,
        showCursor: true,
        cursorChar: '_',
    });
}


// [3] NAVBAR SCROLL EFFECT
function initNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;
    
    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 50);
    });
}

// [4] SCROLL PROGRESS BAR
function initScrollProgress() {
    window.addEventListener('scroll', () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        const scrollElement = document.getElementById('scrollProgress');
        if (scrollElement) scrollElement.style.width = scrolled + '%';
    });
}

// [5] SMOOTH SCROLL NAVIGATION
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// [6] SKILLS RADAR CHART (Chart.js)
function initSkillsChart() {
    const skillsCanvas = document.getElementById('skillsChart');
    if (!skillsCanvas || typeof Chart === 'undefined') return;
    
    const ctxChart = skillsCanvas.getContext('2d');
    new Chart(ctxChart, {
        type: 'radar',
        data: {
            labels: [
                'Programming', 'Frontend', 'Backend', 
                'Databases', 'Cybersecurity', 'DevOps/Tools'
            ],
            datasets: [{
                label: 'Skill Maturity',
                data: [80, 90, 70, 60, 90, 75],
                backgroundColor: 'rgba(0, 217, 255, 0.2)',
                borderColor: '#00d9ff',
                borderWidth: 3,
                pointBackgroundColor: '#6366f1',
                pointBorderColor: '#fff',
                pointBorderWidth: 2,
                pointRadius: 6,
                pointHoverRadius: 9,
                tension: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            scales: {
                r: {
                    beginAtZero: true,
                    max: 100,
                    angleLines: { color: 'rgba(0, 217, 255, 0.1)' },
                    grid: { color: 'rgba(0, 217, 255, 0.1)', circular: true },
                    pointLabels: { 
                        color: '#cbd5e1', 
                        font: { size: 12, weight: '600' } 
                    },
                    ticks: { display: false }
                }
            },
            plugins: { 
                legend: { display: false },
                tooltip: {
                    backgroundColor: 'rgba(15, 23, 42, 0.95)',
                    titleColor: '#00d9ff',
                    bodyColor: '#fff',
                    borderColor: '#00d9ff',
                    callbacks: {
                        label: ctx => `${ctx.label}: ${ctx.parsed.r}%`
                    }
                }
            },
            animation: { duration: 2500, easing: 'easeOutQuart' }
        }
    });
}

// [7] PARTICLE BACKGROUND SYSTEM
function initParticles() {
    const canvas = document.getElementById('bg-canvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let particles = [];
    let mouse = { x: null, y: null };

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    function initParticleArray() {
        resizeCanvas();
        particles = [];
        const particleCount = Math.min(100, Math.floor(canvas.width * canvas.height / 10000));
        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                size: Math.random() * 2 + 1,
                opacity: Math.random() * 0.5 + 0.2
            });
        }
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => {
            p.x += p.vx; p.y += p.vy;
            if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
            if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
            
            ctx.fillStyle = `rgba(0, 217, 255, ${p.opacity})`;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fill();
        });
        requestAnimationFrame(animate);
    }

    window.addEventListener('resize', initParticleArray);
    window.addEventListener('mousemove', (e) => { 
        mouse.x = e.clientX; 
        mouse.y = e.clientY; 
    });
    
    initParticleArray();
    animate();
}

// [8] INTERACTIVE TERMINAL - THE REFACTORED MOBILE FIX
class InteractiveTerminal {
    constructor() {
        this.prompt = document.getElementById('terminalPrompt');
        this.cursor = document.getElementById('cursor');
        this.commandInput = document.getElementById('commandInput');
        this.terminal = document.getElementById('interactiveTerminal');
        this.mobileInput = document.getElementById('mobileTerminalInput');

        if (!this.prompt || !this.mobileInput) return;

        // Force mobile settings to prevent "reverse typing" and predictive interference
        this.mobileInput.setAttribute('autocomplete', 'off');
        this.mobileInput.setAttribute('autocorrect', 'off');
        this.mobileInput.setAttribute('autocapitalize', 'none');
        this.mobileInput.setAttribute('spellcheck', 'false');
        this.mobileInput.setAttribute('inputmode', 'search'); 

        this.fileSystem = {
            'about.txt': 'Computer Science student | Data Science + Cybersecurity',
            'contact.info': 'devarakondasrivatsav@gmail.com',
            'skills.md': 'Python, JS, React, Docker, Nmap, Splunk, Flask'
        };

        this.commands = {
            about: { section: '#about', response: '→ About Me section opened!' },
            skills: { section: '#skills', response: '→ Technical Arsenal loaded!' },
            experience: { section: '#experience', response: '→ Professional Journey accessed!' },
            projects: { section: '#projects', response: '→ Featured Work deployed!' },
            education: { section: '#education', response: '→ Education verified!' },
            certifications: { section: '#certifications', response: '→ Certifications unlocked!' },
            achievements: { section: '#achievements', response: '→ Achievements displayed!' },
            help: { response: '📋 NAV: about, skills, projects, experience, education, certifications, achievements | ⚙️ UTIL: cls, ls, help' }
        };

        this.showWelcomeGuide();
        this.init();
    }

    showWelcomeGuide() {
        setTimeout(() => {
            this.addOutputLine('<span class="text-success">[BOOT]</span> Srivatsav_D Terminal v2.1');
            this.addOutputLine('<span class="text-cyan">💡 TIP:</span> Tap here and type commands');
        }, 400);
    }

    init() {
        this.mobileInput.value = '';

        this.terminal.addEventListener('click', () => {
            this.mobileInput.focus();
        });

        this.mobileInput.addEventListener('input', () => {
            // Mirroring the raw value to fix the "flipped character" issue
            this.commandInput.textContent = this.mobileInput.value;
        });

        this.mobileInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                this.executeCommand();
            }
        });
    }

    executeCommand() {
        const fullInput = this.mobileInput.value;
        const cmd = fullInput.trim().toLowerCase();

        this.addOutputLine(`<span class="text-info">srivatsav@GVP:~$</span> <span class="text-white">${fullInput}</span>`);

        if (cmd === 'cls' || cmd === 'clear') {
            this.terminal.querySelectorAll('.terminal-line').forEach(l => l.remove());
            this.showWelcomeGuide();
        } else if (cmd === 'ls') {
            this.addOutputLine(`<span class="text-cyan">📁 ${Object.keys(this.fileSystem).join('  ')}</span>`);
        } else if (this.commands[cmd]) {
            this.addOutputLine(`<span class="text-success">[✓] ${this.commands[cmd].response}</span>`);
            if (this.commands[cmd].section) {
                setTimeout(() => {
                    document.querySelector(this.commands[cmd].section)?.scrollIntoView({ behavior: 'smooth' });
                }, 500);
            }
        } else if (cmd !== '') {
            this.addOutputLine(`<span class="text-danger">[❌] Command '${cmd}' not found. Try <span class="text-white">help</span></span>`);
        }

        this.mobileInput.value = '';
        this.commandInput.textContent = '';
        this.terminal.scrollTop = this.terminal.scrollHeight;
    }

    addOutputLine(html) {
        const line = document.createElement('div');
        line.className = 'terminal-line';
        line.innerHTML = html;
        this.terminal.insertBefore(line, this.prompt);
    }
}


// [9] EMAILJS CONTACT FORM (META TAG METHOD - SECURE)
function initEmailJS() {
    const contactForm = document.getElementById('contactForm');
    if (!contactForm || typeof emailjs === 'undefined') return;
    
    // Get from META tags (Secure - no hardcoding)
    const publicKey = document.querySelector('meta[name="emailjs-public-key"]')?.content;
    const serviceID = document.querySelector('meta[name="emailjs-service-id"]')?.content;
    const templateID = document.querySelector('meta[name="emailjs-template-id"]')?.content;
    
    if (!publicKey || !serviceID || !templateID) {
        console.warn('EmailJS: Missing config in meta tags');
        return;
    }

    emailjs.init({ publicKey });

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const formMessage = document.getElementById('form-message');
        const submitButton = this.querySelector('button[type="submit"]');

        submitButton.disabled = true;
        submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        
        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                formMessage.innerHTML = '<div class="alert alert-success"><i class="fas fa-check-circle"></i> Message sent! Reply within 24hrs.</div>';
                submitButton.disabled = false;
                submitButton.innerHTML = '<i class="fas fa-paper-plane"></i> Sent!';
                this.reset();
                setTimeout(() => submitButton.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message', 3000);
            }, (err) => {
                formMessage.innerHTML = '<div class="alert alert-danger"><i class="fas fa-exclamation-triangle"></i> Failed. Email directly.</div>';
                submitButton.disabled = false;
                submitButton.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
                console.error('EmailJS Error:', err);
            });
    });
}
// [10] FEATURED WORK - SWIPER SLIDER
function initProjectsSwiper() {
    if (typeof Swiper === 'undefined') return;

    new Swiper(".myProjects", {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,

        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
        },

        speed: 900,

        pagination: {
            el: ".swiper-pagination",
            clickable: true
        },

        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },

        breakpoints: {
            0: {
                slidesPerView: 1
            },
            768: {
                slidesPerView: 2
            },
            1200: {
                slidesPerView: 3
            }
        }
    });
}
