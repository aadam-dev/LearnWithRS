// Learn With RS - Main JavaScript

// FAQ Accordion
document.addEventListener('DOMContentLoaded', function() {
    // FAQ Accordion
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            const isActive = this.classList.contains('active');
            
            // Close all other FAQs
            faqQuestions.forEach(q => {
                if (q !== this) {
                    q.classList.remove('active');
                    q.nextElementSibling.classList.remove('active');
                }
            });
            
            // Toggle current FAQ
            if (isActive) {
                this.classList.remove('active');
                answer.classList.remove('active');
            } else {
                this.classList.add('active');
                answer.classList.add('active');
            }
        });
    });
    
    // Form Validation and Submission
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic validation
            const requiredFields = form.querySelectorAll('[required]');
            let isValid = true;
            
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.style.borderColor = '#E76F51';
                } else {
                    field.style.borderColor = '';
                }
            });
            
            if (isValid) {
                const formId = form.id;
                const formData = new FormData(form);
                
                // Handle different forms
                if (formId === 'contactForm') {
                    // Build WhatsApp message for contact form
                    let whatsappMessage = buildContactWhatsAppMessage(formData);
                    openWhatsApp(whatsappMessage);
                    showFormSuccess(form, 'WhatsApp will open with your message. Please click send to complete your submission.');
                } else if (formId === 'partnershipForm') {
                    // Build WhatsApp message for partnership form
                    let whatsappMessage = buildPartnershipWhatsAppMessage(formData);
                    openWhatsApp(whatsappMessage);
                    showFormSuccess(form, 'WhatsApp will open with your message. Please click send to complete your submission.');
                } else {
                    // For any other forms, just show success
                    showFormSuccess(form);
                }
                
                // Log for debugging
                console.log('Form submitted:', Object.fromEntries(formData));
            }
        });
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href.length > 1) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
});

// Show form success message
function showFormSuccess(form, customMessage = null) {
    // Remove any existing success message
    const existingMessage = form.querySelector('.form-success');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    const successMessage = document.createElement('div');
    successMessage.className = 'form-success';
    successMessage.style.cssText = `
        background-color: #2D9CDB;
        color: white;
        padding: 1rem;
        border-radius: 8px;
        margin-top: 1rem;
        text-align: center;
        font-weight: 500;
        animation: slideDown 0.3s ease-out;
    `;
    successMessage.textContent = customMessage || 'Thank you! Your form has been submitted successfully. We will contact you soon.';
    
    form.appendChild(successMessage);
    
    // Remove message after 8 seconds (longer for WhatsApp instructions)
    setTimeout(() => {
        successMessage.style.opacity = '0';
        successMessage.style.transition = 'opacity 0.3s ease-out';
        setTimeout(() => {
            successMessage.remove();
        }, 300);
    }, customMessage ? 8000 : 5000);
    
    // Reset form after a delay
    setTimeout(() => {
        form.reset();
    }, 1000);
}

// Build WhatsApp message for contact form
function buildContactWhatsAppMessage(formData) {
    let message = '💬 *New Contact Form Submission*\n\n';
    message += `*Name:* ${formData.get('contactName') || 'Not provided'}\n`;
    message += `*Email:* ${formData.get('contactEmail') || 'Not provided'}\n`;
    if (formData.get('contactPhone')) {
        message += `*Phone:* ${formData.get('contactPhone')}\n`;
    }
    if (formData.get('subject')) {
        const subjectMap = {
            'course-inquiry': 'Course Inquiry',
            'enrollment': 'Enrollment Question',
            'partnership': 'Partnership Opportunity',
            'support': 'Technical Support',
            'other': 'Other'
        };
        const subjectValue = formData.get('subject');
        message += `*Subject:* ${subjectMap[subjectValue] || subjectValue}\n`;
    }
    message += `\n*Message:*\n${formData.get('contactMessage') || 'Not provided'}\n`;
    message += '\n---\n';
    message += 'Submitted from Learn With RS website';
    
    return message;
}

// Build WhatsApp message for partnership form
function buildPartnershipWhatsAppMessage(formData) {
    let message = '🤝 *New Partnership/Volunteer Form Submission*\n\n';
    message += `*Name/Organization:* ${formData.get('partnerName') || 'Not provided'}\n`;
    message += `*Email:* ${formData.get('partnerEmail') || 'Not provided'}\n`;
    if (formData.get('partnerPhone')) {
        message += `*Phone:* ${formData.get('partnerPhone')}\n`;
    }
    if (formData.get('interestType')) {
        const interestMap = {
            'partnership': 'Partnership Opportunity',
            'volunteer': 'Volunteering',
            'both': 'Both Partnership and Volunteering',
            'other': 'Other'
        };
        const interestValue = formData.get('interestType');
        message += `*Interest Type:* ${interestMap[interestValue] || interestValue}\n`;
    }
    message += `\n*Message:*\n${formData.get('partnerMessage') || 'Not provided'}\n`;
    message += '\n---\n';
    message += 'Submitted from Learn With RS website';
    
    return message;
}

// Open WhatsApp with pre-filled message
function openWhatsApp(message) {
    const whatsappNumber = '233545452326'; // Learn With RS WhatsApp number
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.course-card, .benefit-card, .testimonial-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

