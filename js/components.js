/**
 * LLAMA SEC - Component Loader
 * Dynamically loads HTML components and initializes the page
 */

const components = [
  { id: 'nav-component', file: 'components/nav.html' },
  { id: 'hero-component', file: 'components/hero.html' },
  { id: 'abstract-component', file: 'components/abstract.html' },
  { id: 'methodology-component', file: 'components/methodology.html' },
  { id: 'results-component', file: 'components/results.html' },
  { id: 'technical-component', file: 'components/technical.html' },
  { id: 'resources-component', file: 'components/resources.html' },
  { id: 'footer-component', file: 'components/footer.html' }
];

/**
 * Load a single component
 */
async function loadComponent(component) {
  try {
    const response = await fetch(component.file);
    if (!response.ok) {
      throw new Error(`Failed to load ${component.file}: ${response.status}`);
    }
    const html = await response.text();
    const element = document.getElementById(component.id);
    if (element) {
      element.innerHTML = html;
    }
  } catch (error) {
    console.error(`Error loading component ${component.id}:`, error);
  }
}

/**
 * Load all components and initialize the page
 */
async function loadAllComponents() {
  // Load all components in parallel
  await Promise.all(components.map(loadComponent));
  
  // After all components are loaded, initialize features
  initializeAfterLoad();
}

/**
 * Initialize features after components are loaded
 */
function initializeAfterLoad() {
  // Re-attach language toggle event listeners
  const langBtns = document.querySelectorAll('.lang-btn');
  langBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang');
      if (typeof setLanguage === 'function') {
        setLanguage(lang);
      }
    });
  });

  // Apply saved language if available
  if (typeof setLanguage === 'function') {
    const savedLang = localStorage.getItem('lang') || 'pt';
    setLanguage(savedLang);
  }
  
  // Dispatch custom event for other scripts to hook into
  document.dispatchEvent(new CustomEvent('componentsLoaded'));
}

// Load components when DOM is ready
document.addEventListener('DOMContentLoaded', loadAllComponents);
