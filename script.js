// DOM Elements
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const header = document.getElementById('header');

// Mobile Navigation Toggle
navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    const icon = navToggle.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
});

// Close mobile menu when clicking on nav links
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const icon = navToggle.querySelector('i');
        icon.classList.add('fa-bars');
        icon.classList.remove('fa-times');
    });
});

// Theme Toggle
function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    }
}

themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    if (newTheme === 'dark') {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    } else {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    }
});

// Header scroll effect
function handleScroll() {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}

// Smooth scrolling for navigation links
function smoothScroll(target) {
    const element = document.querySelector(target);
    if (element) {
        const headerHeight = header.offsetHeight;
        const elementPosition = element.offsetTop - headerHeight;
        
        window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
        });
    }
}

// Add smooth scroll to all navigation links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = link.getAttribute('href');
        smoothScroll(target);
    });
});

// Add smooth scroll to scroll indicator
const scrollDown = document.querySelector('.scroll-down');
if (scrollDown) {
    scrollDown.addEventListener('click', (e) => {
        e.preventDefault();
        const target = scrollDown.getAttribute('href');
        smoothScroll(target);
    });
}


// start typing
const texts = ["Frontend Developer", "Web Developer", "AI Integrater"];
let count = 0;
const container = document.getElementById('typing-container');

function typeWaveText(callback) {
  container.innerHTML = '';
  const currentText = texts[count];
  const words = currentText.split(" ");

  words.forEach((word, wIndex) => {
    const wordDiv = document.createElement("div");

    [...word].forEach((char, cIndex) => {
      const span = document.createElement("span");
      span.textContent = char;
      span.style.animationDelay = `${(wIndex * 0.5 + cIndex * 0.05)}s`;
      wordDiv.appendChild(span);
    });

    container.appendChild(wordDiv);
  });

  const totalTime = currentText.length * 50 + 2000; // type time + wait
  setTimeout(() => {
    callback(); // start erasing
  }, totalTime);
}

function eraseWaveText(callback) {
  const spans = container.querySelectorAll('span');
  spans.forEach((span, i) => {
    setTimeout(() => {
      span.classList.add('erase');
    }, i * 30);
  });

  setTimeout(() => {
    container.innerHTML = '';
    callback();
  }, spans.length * 30 + 500);
}

function loopTyping() {
  typeWaveText(() => {
    eraseWaveText(() => {
      count = (count + 1) % texts.length;
      loopTyping(); // loop again
    });
  });
}






 


// Add smooth scroll to hero buttons
const heroButtons = document.querySelectorAll('.hero-buttons a');
heroButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        if (button.getAttribute('href').startsWith('#')) {
            e.preventDefault();
            const target = button.getAttribute('href');
            smoothScroll(target);
        }
    });
});

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    window.addEventListener('scroll', handleScroll);
   loopTyping();
    animateSkills();
    initTechIcons();
    initProjectFilters();
    initLoadMore();
    initProjectHoverEffects();
    animateProjectsOnScroll();
    initResumeAnimations();
    initDownloadCV();
    initContactForm();
    animateContactForm();
    initContactInfoHover();
    initSocialLinksHover();
});

// Add active navigation link highlighting
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPos = window.scrollY + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            navLinks.forEach(link => link.classList.remove('active'));
            if (navLink) {
                navLink.classList.add('active');
            }
        }
    });
}

window.addEventListener('scroll', updateActiveNavLink);

// Add some entrance animations on scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.section');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Initialize section animations
document.querySelectorAll('.section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'all 0.6s ease-out';
});

window.addEventListener('scroll', animateOnScroll);
animateOnScroll(); // Run once on load

// Skills Progress Animation
function animateSkills() {
    const skillItems = document.querySelectorAll('.skill-item');
    const skillsSection = document.querySelector('.skills');
    
    if (!skillsSection) return;
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                skillItems.forEach((item, index) => {
                    setTimeout(() => {
                        const progressBar = item.querySelector('.skill-progress');
                        const progress = progressBar.dataset.progress;
                        
                        progressBar.style.setProperty('--progress-width', progress + '%');
                        progressBar.style.width = progress + '%';
                        
                        item.classList.add('animate');
                    }, index * 100);
                });
                
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });
    
    observer.observe(skillsSection);
}

// Tech Icons Hover Effect
function initTechIcons() {
    const techIcons = document.querySelectorAll('.tech-icon');
    
    techIcons.forEach(icon => {
        icon.addEventListener('mouseenter', () => {
            icon.style.transform = 'translateY(-5px) scale(1.05)';
        });
        
        icon.addEventListener('mouseleave', () => {
            icon.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Project Filter Functionality
function initProjectFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    if (!filterBtns.length || !projectCards.length) return;
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');
            
            const filter = btn.getAttribute('data-filter');
            
            projectCards.forEach(card => {
                const category = card.getAttribute('data-category');
                
                if (filter === 'all' || category === filter) {
                    card.classList.remove('hidden');
                    card.classList.add('visible');
                    card.style.display = 'block';
                } else {
                    card.classList.add('hidden');
                    card.classList.remove('visible');
                    setTimeout(() => {
                        if (card.classList.contains('hidden')) {
                            card.style.display = 'none';
                        }
                    }, 300);
                }
            });
        });
    });
}

// Load More Projects Functionality
function initLoadMore() {
    const loadMoreBtn = document.querySelector('.load-more-btn');
    
    if (!loadMoreBtn) return;
    
    loadMoreBtn.addEventListener('click', () => {
        // Simulate loading more projects
        loadMoreBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading...';
        
        setTimeout(() => {
            loadMoreBtn.innerHTML = '<i class="fas fa-check"></i> All Projects Loaded';
            loadMoreBtn.disabled = true;
            loadMoreBtn.style.opacity = '0.6';
        }, 2000);
    });
}

// Project Card Hover Effects
function initProjectHoverEffects() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        const overlay = card.querySelector('.project-overlay');
        const links = card.querySelectorAll('.project-link');
        
        card.addEventListener('mouseenter', () => {
            links.forEach((link, index) => {
                setTimeout(() => {
                    link.style.transform = 'scale(1) translateY(0)';
                    link.style.opacity = '1';
                }, index * 100);
            });
        });
        
        card.addEventListener('mouseleave', () => {
            links.forEach(link => {
                link.style.transform = 'scale(0.8) translateY(10px)';
                link.style.opacity = '0.8';
            });
        });
    });
}

// Initialize project animations on scroll
function animateProjectsOnScroll() {
    const projectCards = document.querySelectorAll('.project-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    projectCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s ease-out';
        observer.observe(card);
    });
}

// Resume Animations
function initResumeAnimations() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    const resumeSection = document.querySelector('.resume');
    
    if (!resumeSection) return;
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                timelineItems.forEach((item, index) => {
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'translateY(0)';
                    }, index * 200);
                });
                
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.3
    });
    
    observer.observe(resumeSection);
    
    // Initialize timeline items as hidden
    timelineItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = 'all 0.6s ease-out';
    });
}

// Download CV Functionality
function initDownloadCV() {
    const downloadBtn = document.querySelector('.download-cv-btn');
    
    if (!downloadBtn) return;
    
    downloadBtn.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Add loading state
        const originalContent = downloadBtn.innerHTML;
        downloadBtn.classList.add('loading');
        downloadBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Preparing Download...';
        
        // Simulate download preparation
        setTimeout(() => {
            downloadBtn.innerHTML = '<i class="fas fa-check"></i> Download Ready';
            
            // Reset after 2 seconds
            setTimeout(() => {
                downloadBtn.classList.remove('loading');
                downloadBtn.innerHTML = originalContent;
            }, 2000);
            
            // Here you would normally trigger actual file download
            // window.open('path/to/your/cv.pdf', '_blank');
            console.log('CV download initiated');
        }, 1500);
    });
}

// Timeline Item Hover Effects
function initTimelineHoverEffects() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    timelineItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            const highlightTags = item.querySelectorAll('.highlight-tag');
            highlightTags.forEach((tag, index) => {
                setTimeout(() => {
                    tag.style.transform = 'translateY(-2px)';
                    tag.style.boxShadow = '0 4px 12px rgba(59, 130, 246, 0.3)';
                }, index * 50);
            });
        });
        
        item.addEventListener('mouseleave', () => {
            const highlightTags = item.querySelectorAll('.highlight-tag');
            highlightTags.forEach(tag => {
                tag.style.transform = 'translateY(0)';
                tag.style.boxShadow = 'none';
            });
        });
    });
}

// Initialize timeline hover effects
document.addEventListener('DOMContentLoaded', () => {
    initTimelineHoverEffects();
});

// Contact Form Functionality
function initContactForm() {
    const contactForm = document.getElementById('contact-form');

    if (!contactForm) return;

    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const submitBtn = contactForm.querySelector('.form-submit-btn');
        const originalContent = submitBtn.innerHTML;

        const formData = new FormData(contactForm);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            subject: formData.get('subject'),
            message: formData.get('message')
        };

        // Basic validation
        if (!data.name || !data.email || !data.subject || !data.message) {
            showFormMessage('Please fill in all required fields.', 'error');
            return;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(data.email)) {
            showFormMessage('Please enter a valid email address.', 'error');
            return;
        }

        // Button loading state
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitBtn.disabled = true;

        // Send with EmailJS
        emailjs.send("service_eq0y5tw", "template_rb2eysm", {
            from_name: data.name,
            from_email: data.email,
            subject: data.subject,
            message: data.message
        })
        .then(() => {
            showFormMessage('Thank you! Message sent successfully.', 'success');
            contactForm.reset();
        })
        .catch((error) => {
            showFormMessage('Failed to send message. Please try again.', 'error');
            console.error("EmailJS Error:", error);
        })
        .finally(() => {
            submitBtn.innerHTML = originalContent;
            submitBtn.disabled = false;
        });
    });
}


// Show message helper
function showFormMessage(msg, type = 'success') {
    alert(msg); // You can replace this with your own styled message
}


// Show form message
function showFormMessage(message, type) {
    const contactForm = document.getElementById('contact-form');
    
    // Remove existing messages
    const existingMessage = contactForm.querySelector('.form-success, .form-error');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    // Create new message
    const messageDiv = document.createElement('div');
    messageDiv.className = type === 'success' ? 'form-success' : 'form-error';
    messageDiv.textContent = message;
    messageDiv.style.opacity = '0';
    messageDiv.style.transform = 'translateY(10px)';
    
    // Add message to form
    contactForm.appendChild(messageDiv);
    
    // Animate message in
    setTimeout(() => {
        messageDiv.style.transition = 'all 0.3s ease';
        messageDiv.style.opacity = '1';
        messageDiv.style.transform = 'translateY(0)';
    }, 100);
    
    // Remove message after 5 seconds
    setTimeout(() => {
        if (messageDiv.parentNode) {
            messageDiv.style.opacity = '0';
            messageDiv.style.transform = 'translateY(-10px)';
            setTimeout(() => {
                messageDiv.remove();
            }, 300);
        }
    }, 5000);
}

// Animate contact form groups on scroll
function animateContactForm() {
    const formGroups = document.querySelectorAll('.form-group');
    const contactSection = document.querySelector('.contact');
    
    if (!contactSection) return;
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                formGroups.forEach((group, index) => {
                    setTimeout(() => {
                        group.style.opacity = '1';
                        group.style.transform = 'translateY(0)';
                    }, index * 100);
                });
                
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.3
    });
    
    observer.observe(contactSection);
}

// Contact info cards hover effects
function initContactInfoHover() {
    const contactCards = document.querySelectorAll('.contact-info-card');
    
    contactCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            const icon = card.querySelector('.contact-icon i');
            icon.style.transform = 'scale(1.1) rotate(5deg)';
        });
        
        card.addEventListener('mouseleave', () => {
            const icon = card.querySelector('.contact-icon i');
            icon.style.transform = 'scale(1) rotate(0deg)';
        });
    });
}

// Social links hover effects
function initSocialLinksHover() {
    const socialLinks = document.querySelectorAll('.contact-social-link');
    
    socialLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            const icon = link.querySelector('i');
            icon.style.transform = 'scale(1.2)';
        });
        
        link.addEventListener('mouseleave', () => {
            const icon = link.querySelector('i');
            icon.style.transform = 'scale(1)';
        });
    });
}