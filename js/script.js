/**
 * LLAMA SEC - TinyLlama Research Website
 * Interactive Features & Animations
 */

// ========== Navigation & Scroll Behavior ==========

// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
  });
}

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    if (menuToggle && navLinks) {
      menuToggle.classList.remove('active');
      navLinks.classList.remove('active');
    }
  });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const offset = 80; // Account for fixed nav
      const targetPosition = target.offsetTop - offset;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// ========== Active Navigation Highlighting ==========

const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav-links a');

function highlightNavigation() {
  const scrollPosition = window.scrollY + 100;
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    const sectionId = section.getAttribute('id');
    
    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href') === `#${sectionId}`) {
          item.classList.add('active');
        }
      });
    }
  });
}

window.addEventListener('scroll', highlightNavigation);

// ========== Navbar Scroll Effect ==========

const nav = document.querySelector('nav');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  
  // Add scrolled class for styling
  if (currentScroll > 50) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
  
  lastScroll = currentScroll;
});

// ========== Intersection Observer for Fade-in Animations ==========

const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

// Observe all elements with fade-in class
document.querySelectorAll('.fade-in').forEach(el => {
  observer.observe(el);
});

// ========== Animate Stats (Counter Effect) ==========

function animateCounter(element, target, duration = 2000) {
  const start = 0;
  const increment = target / (duration / 16); // 60fps
  let current = start;
  
  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      element.textContent = formatNumber(target);
      clearInterval(timer);
    } else {
      element.textContent = formatNumber(Math.floor(current));
    }
  }, 16);
}

function formatNumber(num) {
  // Format numbers with appropriate suffixes
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M';
  } else if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K';
  }
  return num.toFixed(2);
}

// Animate counters when they become visible
const statObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !entry.target.dataset.animated) {
      const value = parseFloat(entry.target.dataset.value);
      animateCounter(entry.target, value);
      entry.target.dataset.animated = 'true';
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-value[data-value]').forEach(stat => {
  statObserver.observe(stat);
});

// ========== Copy to Clipboard Functionality ==========

function copyToClipboard(text, button) {
  navigator.clipboard.writeText(text).then(() => {
    const originalText = button.innerHTML;
    button.innerHTML = '✓ Copiado!';
    button.style.background = 'linear-gradient(135deg, #00ff88, #00d4ff)';
    
    setTimeout(() => {
      button.innerHTML = originalText;
      button.style.background = '';
    }, 2000);
  }).catch(err => {
    console.error('Erro ao copiar:', err);
  });
}

// Add click handlers to copy buttons
document.querySelectorAll('.copy-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    const targetId = this.dataset.target;
    const target = document.getElementById(targetId);
    if (target) {
      copyToClipboard(target.textContent, this);
    }
  });
});

// ========== Parallax Effect for Hero ==========

window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const heroLogo = document.querySelector('.hero-logo');
  
  if (heroLogo && scrolled < window.innerHeight) {
    heroLogo.style.transform = `translateY(${scrolled * 0.5}px)`;
  }
});

// ========== External Link Handler ==========

// Add target="_blank" and rel="noopener noreferrer" to external links
document.querySelectorAll('a[href^="http"]').forEach(link => {
  if (!link.hostname.includes(window.location.hostname)) {
    link.setAttribute('target', '_blank');
    link.setAttribute('rel', 'noopener noreferrer');
  }
});

// ========== Initialize on Load ==========

document.addEventListener('DOMContentLoaded', () => {
  // Trigger initial navigation highlight
  highlightNavigation();
  
  // Add initial animation to hero elements
  const heroContent = document.querySelector('.hero-content');
  if (heroContent) {
    heroContent.style.opacity = '0';
    setTimeout(() => {
      heroContent.style.opacity = '1';
    }, 100);
  }
  
  console.log('🦙 LLAMA SEC Website loaded successfully!');
});

// ========== Performance: Lazy Load Images ==========

if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
          observer.unobserve(img);
        }
      }
    });
  });
  
  document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
  });
}

// Lightbox Functionality
document.addEventListener('DOMContentLoaded', () => {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const captionText = document.getElementById('caption');
    const closeBtn = document.querySelector('.close-lightbox');
    const zoomableImages = document.querySelectorAll('.zoomable');

    if (lightbox && zoomableImages.length > 0) {
        // Open Lightbox
        zoomableImages.forEach(img => {
            img.addEventListener('click', function() {
                lightbox.style.display = 'flex';
                lightboxImg.src = this.src;
                captionText.innerHTML = (this.alt || '') + '<br><small style="color:#888">Clique na imagem ou no X para fechar</small>';
                
                // Add active class for animation
                setTimeout(() => {
                    lightbox.classList.add('active');
                }, 10);
            });
        });

        // Close Lightbox function
        const closeLightbox = () => {
            lightbox.classList.remove('active');
            setTimeout(() => {
                lightbox.style.display = 'none';
            }, 300); // Wait for transition
        };

        // Close on X click
        if (closeBtn) {
            closeBtn.addEventListener('click', closeLightbox);
        }

        // Close on overlay click
        lightbox.addEventListener('click', function(e) {
            if (e.target !== lightboxImg) {
                closeLightbox();
            }
        });
        
        // Also close on image click (optional but good for UX)
        lightboxImg.addEventListener('click', closeLightbox);
        
        // Close on Escape key
        document.addEventListener('keydown', function(event) {
            if (event.key === "Escape") {
                closeLightbox();
            }
        });
    }
});
