// Load header and footer components
document.addEventListener('DOMContentLoaded', function() {
    // Load header
    const headerContainer = document.querySelector('nav .container');
    if (headerContainer) {
        fetch('components/header.html')
            .then(response => response.text())
            .then(data => {
                headerContainer.innerHTML = data;
                setActiveNavLink();
                initializeMobileMenu();
            })
            .catch(error => {
                console.error('Error loading header:', error);
            });
    }
    
    // Load footer
    const footerContainer = document.querySelector('footer .container');
    if (footerContainer) {
        fetch('components/footer.html')
            .then(response => response.text())
            .then(data => {
                footerContainer.innerHTML = data;
            })
            .catch(error => {
                console.error('Error loading footer:', error);
            });
    }
});

// Set active navigation link based on current page
function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        // Remove active class first
        link.classList.remove('active');
        
        // Check if this link matches current page
        if (linkPage === currentPage || 
            (currentPage === '' && linkPage === 'index.html') ||
            (currentPage === 'index.html' && linkPage === 'index.html')) {
            link.classList.add('active');
        }
        
        // Special case for register page
        if (currentPage === 'register.html' && link.classList.contains('btn-primary-nav')) {
            link.classList.add('active');
        }
    });
}

// Initialize mobile menu (moved from main.js to work with dynamically loaded header)
function initializeMobileMenu() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenuToggle && navMenu) {
        // Remove existing listeners if any
        const newToggle = mobileMenuToggle.cloneNode(true);
        mobileMenuToggle.parentNode.replaceChild(newToggle, mobileMenuToggle);
        
        newToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            newToggle.classList.toggle('active');
        });
        
        // Close mobile menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-menu a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                newToggle.classList.remove('active');
            });
        });
    }
}

