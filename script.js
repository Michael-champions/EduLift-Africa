// ==================== SMOOTH SCROLLING & NAV ==================== 
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ==================== CONTACT FORM FUNCTIONS ====================
function scrollToContactWithReason(reason) {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setTimeout(() => {
            const radioButton = document.querySelector(`input[name="reason"][value="${reason}"]`);
            if (radioButton) {
                radioButton.checked = true;
                radioButton.focus();
            }
        }, 500);
    } else {
        window.location.href = `impact.html#contact`;
    }
}

// ==================== FORM HANDLING ==================== 
const contactForm = document.querySelector('.contact-form');
const contactSuccess = document.querySelector('.contact-success');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        // Prevent endless fallback loop
        if (contactForm.dataset.fallback === 'true') {
            return;
        }

        e.preventDefault();

        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        const endpoint = contactForm.action;
        const formData = new FormData(contactForm);

        // Ensure Formsubmit receives a reply-to address
        const emailValue = formData.get('email');
        if (emailValue) {
            formData.set('_replyto', emailValue);
        }

        submitButton.disabled = true;
        submitButton.textContent = 'Sending...';

        try {
            const response = await fetch(endpoint, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (!response.ok) {
                throw new Error('Form submission failed.');
            }

            contactSuccess.textContent = 'Thank you for reaching out. We will get back to you shortly.';
            contactSuccess.classList.add('visible');
            contactForm.reset();

            setTimeout(() => {
                contactSuccess.classList.remove('visible');
                contactSuccess.textContent = '';
            }, 8000);
        } catch (error) {
            console.error(error);
            // Fallback to default form submission if AJAX fails
            contactForm.dataset.fallback = 'true';
            contactForm.submit();
        } finally {
            submitButton.disabled = false;
            submitButton.textContent = originalText;
        }
    });
}

// ==================== BUTTON INTERACTIONS ==================== 
const primaryButtons = document.querySelectorAll('.btn-primary');

primaryButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Add ripple effect
        const ripple = document.createElement('span');
        ripple.style.position = 'absolute';
        ripple.style.borderRadius = '50%';
        ripple.style.backgroundColor = 'rgba(255, 255, 255, 0.6)';
        ripple.style.width = ripple.style.height = '20px';
        ripple.style.animation = 'ripple 0.6s ease-out';
        
        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });
});

// ==================== SCROLL REVEAL ANIMATION ==================== 
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all sections for reveal animation
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// ==================== MOBILE MENU TOGGLE ==================== 
// (Ready for future mobile menu implementation)
const navMenu = document.querySelector('.nav-menu');
const navBrand = document.querySelector('.nav-brand');

// Add touch-friendly interactions for mobile
if (window.innerWidth <= 768) {
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.style.fontSize = '14px';
        link.style.padding = '10px 0';
    });
}

// ==================== KEYBOARD ACCESSIBILITY ==================== 
document.querySelectorAll('button, a[href], input, textarea').forEach(element => {
    element.addEventListener('keydown', (e) => {
        // Enhanced keyboard navigation
        if (e.key === 'Enter' && element.tagName === 'BUTTON') {
            element.click();
        }
    });
});

// ==================== ANIMATIONS KEYFRAMES (CSS) ==================== 
// Note: The main animations are defined in style.css
// This JS file provides interactive enhancements

console.log('EduLift Africa website loaded successfully! ❤️');
