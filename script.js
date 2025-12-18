// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
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

// Update active nav link on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - 60) {
            current = section.getAttribute('id');
        }
    });
    
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Add animation to elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInDown 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe stat cards and project cards
document.querySelectorAll('.stat-card, .project-card, .skill-category, .about-stat').forEach(element => {
    observer.observe(element);
});

// Copy to clipboard functionality
const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
        alert('Copied to clipboard!');
    }).catch(err => {
        console.error('Failed to copy:', err);
    });
};

// Add keyboard shortcuts
document.addEventListener('keydown', (e) => {
    if (e.key === '?') {
        alert('Keyboard Shortcuts:\nH - Home\nD - Dashboard\nP - Projects\nA - About\nC - Contact');
    }
    if (e.key.toLowerCase() === 'h') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
});

// Initialize on page load
window.addEventListener('load', () => {
    console.log('Portfolio loaded successfully!');
    document.body.style.opacity = '1';
});

// Navbar scroll effect
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop) {
        // Scrolling down
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.2)';
    } else {
        // Scrolling up
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
});

// Function to handle form submission (if needed)
const handleContactForm = (e) => {
    e.preventDefault();
    // Add your form handling logic here
    console.log('Contact form submitted');
};

// Export functions if needed
window.copyToClipboard = copyToClipboard;
window.handleContactForm = handleContactForm;
