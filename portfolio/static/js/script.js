// static/js/script.js

document.addEventListener('DOMContentLoaded', function () {
    // --- Mobile Menu Toggle ---
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelectorAll('#nav-links a, #mobile-menu a');

    if (mobileMenuButton && mobileMenu) {
        const mobileMenuIcon = mobileMenuButton.querySelector('i');
        
        mobileMenuButton.addEventListener('click', () => {
            const isHidden = mobileMenu.style.display === 'none' || mobileMenu.style.display === '';
            mobileMenu.style.display = isHidden ? 'block' : 'none';
            mobileMenuIcon.classList.toggle('fa-bars');
            mobileMenuIcon.classList.toggle('fa-times');
        });
    }

    // --- Header shadow on scroll ---
    const header = document.getElementById('header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)';
            } else {
                header.style.boxShadow = 'none';
            }
        });
    }

    // --- Smooth scrolling for anchor links ---
    navLinks.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerOffset = header ? header.offsetHeight : 0;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });

                // Close mobile menu after clicking a link
                if (mobileMenu && mobileMenu.style.display === 'block') {
                    mobileMenu.style.display = 'none';
                    mobileMenuButton.querySelector('i').classList.add('fa-bars');
                    mobileMenuButton.querySelector('i').classList.remove('fa-times');
                }
            }
        });
    });

    // --- Contact Form Validation ---
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        const formMessage = document.getElementById('form-message');

        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = contactForm.querySelector('[name=name]').value.trim();
            const email = contactForm.querySelector('[name=email]').value.trim();
            const message = contactForm.querySelector('[name=message]').value.trim();
            
            if (!name || !email || !message) {
                showFormMessage('Please fill in all fields.', 'error');
                return;
            }
            
            if (!/^\S+@\S+\.\S+$/.test(email)) {
                showFormMessage('Please enter a valid email address.', 'error');
                return;
            }

            // On success (replace with actual form submission logic)
            showFormMessage('Thank you! Your message has been sent.', 'success');
            contactForm.reset();
        });
        
        function showFormMessage(message, type) {
            formMessage.textContent = message;
            formMessage.className = 'form-message'; // Reset classes
            formMessage.classList.add(type); // 'success' or 'error'
            formMessage.style.display = 'block';

            setTimeout(() => {
                formMessage.style.display = 'none';
            }, 5000);
        }
    }
});
// static/js/script.js

document.addEventListener('DOMContentLoaded', function () {
    // --- Mobile Menu Toggle ---
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelectorAll('#nav-links a, #mobile-menu a');

    if (mobileMenuButton && mobileMenu) {
        const mobileMenuIcon = mobileMenuButton.querySelector('i');
        
        mobileMenuButton.addEventListener('click', () => {
            const isHidden = mobileMenu.style.display === 'none' || mobileMenu.style.display === '';
            mobileMenu.style.display = isHidden ? 'block' : 'none';
            mobileMenuIcon.classList.toggle('fa-bars');
            mobileMenuIcon.classList.toggle('fa-times');
        });
    }

    // --- Header shadow on scroll ---
    const header = document.getElementById('header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)';
            } else {
                header.style.boxShadow = 'none';
            }
        });
    }

    // --- Smooth scrolling for anchor links ---
    navLinks.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerOffset = header ? header.offsetHeight : 0;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });

                // Close mobile menu after clicking a link
                if (mobileMenu && mobileMenu.style.display === 'block') {
                    mobileMenu.style.display = 'none';
                    mobileMenuButton.querySelector('i').classList.add('fa-bars');
                    mobileMenuButton.querySelector('i').classList.remove('fa-times');
                }
            }
        });
    });

    // --- Contact Form Validation ---
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        const formMessage = document.getElementById('form-message');

        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = contactForm.querySelector('[name=name]').value.trim();
            const email = contactForm.querySelector('[name=email]').value.trim();
            const message = contactForm.querySelector('[name=message]').value.trim();
            
            if (!name || !email || !message) {
                showFormMessage('Please fill in all fields.', 'error');
                return;
            }
            
            if (!/^\S+@\S+\.\S+$/.test(email)) {
                showFormMessage('Please enter a valid email address.', 'error');
                return;
            }

            // On success (replace with actual form submission logic)
            showFormMessage('Thank you! Your message has been sent.', 'success');
            contactForm.reset();
        });
        
        function showFormMessage(message, type) {
            formMessage.textContent = message;
            formMessage.className = 'form-message'; // Reset classes
            formMessage.classList.add(type); // 'success' or 'error'
            formMessage.style.display = 'block';

            setTimeout(() => {
                formMessage.style.display = 'none';
            }, 5000);
        }
    }
});
