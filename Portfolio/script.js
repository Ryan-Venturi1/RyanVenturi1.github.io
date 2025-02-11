
/*
  ==========================================================================
  1. GLOBAL VARS & PROJECT DATA
  ==========================================================================
*/
import { projects, skills } from './projects.js';


let isDarkMode = localStorage.getItem('theme') === 'dark' || 
  window.matchMedia('(prefers-color-scheme: dark)').matches;
let scrollPosition = 0;

function initializeCarousel() {
  const carousel = document.querySelector('.image-carousel');
  if (!carousel) return;

  const images = carousel.querySelectorAll('.carousel-image');
  const indicators = carousel.querySelectorAll('.carousel-indicator');
  const prevBtn = carousel.querySelector('.carousel-btn.prev');
  const nextBtn = carousel.querySelector('.carousel-btn.next');
  let currentIndex = 0;

  function updateCarousel(newIndex) {
    // Update images
    images[currentIndex].classList.remove('active');
    images[newIndex].classList.add('active');
    
    // Update indicators
    if (indicators.length) {
      indicators[currentIndex].classList.remove('active');
      indicators[newIndex].classList.add('active');
    }
    
    currentIndex = newIndex;
  }

  function nextSlide() {
    const newIndex = (currentIndex + 1) % images.length;
    updateCarousel(newIndex);
  }

  function prevSlide() {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    updateCarousel(newIndex);
  }

  // Add event listeners
  if (prevBtn) prevBtn.addEventListener('click', prevSlide);
  if (nextBtn) nextBtn.addEventListener('click', nextSlide);
  
  // Add indicator click handlers
  indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => updateCarousel(index));
  });

  // Add keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (!carousel.closest('.modal').classList.contains('active')) return;
    
    if (e.key === 'ArrowLeft') prevSlide();
    if (e.key === 'ArrowRight') nextSlide();
  });

  // Optional: Auto advance
  let autoAdvance;
  
  function startAutoAdvance() {
    autoAdvance = setInterval(nextSlide, 5000);
  }
  
  function stopAutoAdvance() {
    clearInterval(autoAdvance);
  }

  carousel.addEventListener('mouseenter', stopAutoAdvance);
  carousel.addEventListener('mouseleave', startAutoAdvance);
  
  startAutoAdvance();
}

// Call this after creating modal content
document.getElementById('project-modal').addEventListener('click', (e) => {
  if (e.target.id === 'project-modal') {
    closeProjectModal();
  }
});

// Update your openProjectModal function to initialize carousel
function openProjectModal(projectId) {
  const project = projects.find(p => p.id === projectId);
  const modal = document.getElementById('project-modal');
  const modalContent = document.getElementById('modal-content');
  
  if (!project || !modal) return;

  // Store current scroll position
  scrollPosition = window.scrollY;
  document.body.style.position = 'fixed';
  document.body.style.top = `-${scrollPosition}px`;
  document.body.style.width = '100%';

  modalContent.innerHTML = createModalContent(project);
  modal.classList.add('active');
  
  // Initialize carousel after content is added
  initializeCarousel();
}

function closeProjectModal() {
  const modal = document.getElementById('project-modal');
  
  if (!modal) return;
  
  modal.classList.remove('active');
  
  // Remove styles from body and restore scroll position
  document.body.style.position = '';
  document.body.style.top = '';
  document.body.style.width = '';
  window.scrollTo(0, scrollPosition);
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
  // Close modal when clicking outside content
  const modal = document.getElementById('project-modal');
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeProjectModal();
      }
    });
  }

  // Close modal with Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeProjectModal();
    }
  });
});
/*
  ==========================================================================
  1. INITIALIZATION
  ==========================================================================
*/
document.addEventListener("DOMContentLoaded", () => {
  initializeLoading();
  initializeAnimations();
  initializeScrolling();
  initializeObserver();
  initializeFilters();
});

function initializeLoading() {
  window.addEventListener("load", () => {
    const loadingScreen = document.querySelector(".loading-screen");
    loadingScreen.classList.add("hidden");
    setTimeout(() => loadingScreen.style.display = "none", 500);
  });
}

/*
  ==========================================================================
  2. PARTICLES BACKGROUND
  ==========================================================================
*/
function createModalContent(project) {
// In createModalContent function, replace the carouselHTML section with:
let carouselHTML = '';
if (project.images && project.images.length > 1) {
  carouselHTML = `
    <div class="image-carousel">
      <button class="carousel-btn prev" aria-label="Previous image"><i class="fas fa-chevron-left"></i></button>
      <div class="carousel-container">
        ${project.images.map((img, i) => {
          const isVideo = img.endsWith('.mov') || img.endsWith('.mp4');
          return isVideo ? `
            <video src="${img}" class="carousel-image ${i === 0 ? 'active' : ''}" controls>
              Your browser does not support the video tag.
            </video>
          ` : `
            <img src="${img}" alt="${project.title} image ${i + 1}" class="carousel-image ${i === 0 ? 'active' : ''}" />
          `;
        }).join('')}
      </div>
      <button class="carousel-btn next" aria-label="Next image"><i class="fas fa-chevron-right"></i></button>
    </div>
  `;
} else if (project.images && project.images.length === 1) {
  const singleAsset = project.images[0];
  const isVideo = singleAsset.endsWith('.mov') || singleAsset.endsWith('.mp4');
  carouselHTML = isVideo ? `
    <video src="${singleAsset}" class="modal-single-video" controls>
      Your browser does not support the video tag.
    </video>
  ` : `
    <img src="${singleAsset}" alt="${project.title}" class="modal-single-image" />
  `;
}

  let subprojectsHTML = '';
  if (project.subprojects?.length) {
    subprojectsHTML = `
      <div class="subprojects-carousel">
        <h3>Related Projects</h3>
        <div class="subprojects-container">
          ${project.subprojects.map(sub => `
            <div class="subproject-card">
              <img src="${sub.image}" alt="${sub.title}" />
              <h4>${sub.title}</h4>
              <p>${sub.description}</p>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  let linksHTML = '';
  if (project.links) {
    linksHTML = Object.entries(project.links)
      .map(([key, url]) => `
        <a href="${url}" target="_blank" rel="noopener noreferrer" class="modal-link">
          <i class="fas fa-external-link-alt"></i> ${key.charAt(0).toUpperCase() + key.slice(1)}
        </a>
      `).join('');
  }

  return `
    <div class="modal-content">
      <h2>${project.title}</h2>
      ${carouselHTML}
      <div class="modal-description">
        <p class="short-desc">${project.shortdescription}</p>
        <p class="long-desc">${project.longdescription || ''}</p>
      </div>
      <div class="modal-tech">
        ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
      </div>
      <div class="modal-links">
        ${linksHTML}
      </div>
      ${subprojectsHTML}
    </div>
  `;
}

// In updateProjectsGrid function, modify the project card HTML:
function updateProjectsGrid(projectsToShow) {
  const projectsGrid = document.getElementById('projectsGrid');
  
  projectsGrid.innerHTML = projectsToShow.map(project => {
    const firstImage = project.images && project.images.length > 0 ? project.images[0] : null;
    const isVideo = firstImage && (firstImage.endsWith('.mov') || firstImage.endsWith('.mp4'));
    
    return `
      <div class="project-card" onclick="openProjectModal(${project.id})">
        <div class="project-image">
          ${isVideo ? 
            `<video src="${firstImage}" class="preview-video" muted loop>
              Your browser does not support the video tag.
             </video>` :
            `<div class="image-container" style="background-image: url('${firstImage}')"></div>`
          }
          <div class="project-overlay">
            <span class="view-project">View Details</span>
          </div>
        </div>
        <div class="project-content">
          <h3>${project.title}</h3>
          <p>${project.shortdescription}</p>
          <div class="project-tech">
            ${project.technologies.slice(0, 3).map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
            ${project.technologies.length > 3 ? `<span class="tech-tag">+${project.technologies.length - 3}</span>` : ''}
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// Close modal when clicking outside content
document.getElementById('project-modal').addEventListener('click', (e) => {
  if (e.target.id === 'project-modal') {
    closeProjectModal();
  }
});

/*
  ==========================================================================
  3. ANIMATIONS
  ==========================================================================
*/
function initializeAnimations() {
  gsap.registerPlugin(ScrollTrigger);

  // Hero animations
  const heroAnimations = [
    { element: ".hero-title", y: 80, delay: 0 },
    { element: ".hero-subtitle", y: 50, delay: 0.3 },
    { element: ".cta-button", y: 30, delay: 0.6 }
  ];

  heroAnimations.forEach(({ element, y, delay }) => {
    gsap.from(element, {
      y,
      opacity: 0,
      duration: 1,
      delay,
      ease: "power4.out"
    });
  });

  // Project cards animation
  gsap.utils.toArray(".project-card").forEach((card, i) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: "top bottom-=100",
        toggleActions: "play none none reverse"
      },
      y: 80,
      opacity: 0,
      duration: 0.8,
      delay: i * 0.1
    });
  });
}

/*
  ==========================================================================
  4. NAVIGATION & SCROLLING
  ==========================================================================
*/
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  window.scrollTo({
    top: section.offsetTop,
    behavior: "smooth"
  });
  updateActiveSection(sectionId);
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

function updateActiveSection(sectionId) {
  document.querySelectorAll(".nav button").forEach(btn => btn.classList.remove("active"));
  const activeBtn = document.querySelector(`.nav button[onclick="scrollToSection('${sectionId}')"]`);
  if (activeBtn) activeBtn.classList.add("active");
}

function initializeScrolling() {
  window.addEventListener("scroll", () => {
    const backToTopBtn = document.getElementById("backToTop");
    backToTopBtn?.classList.toggle("show", window.scrollY > 300);
  });
}
function initializeFilters() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active class from all buttons
      filterButtons.forEach(b => b.classList.remove('active'));
      // Add active class to clicked button
      btn.classList.add('active');
      
      const category = btn.dataset.filter;
      const filteredProjects = filterProjects(category);
      
      // Update the projects grid
      updateProjectsGrid(filteredProjects);
    });
  });
}
const categoryKeywords = {
  'web development': ['react', 'javascript', 'html', 'css', 'node.js'],
  'physical computing': ['arduino'],
  'ai/ml': ['tensorflow', 'ai', 'machine learning'],
  'design': ['adobe', 'illustrator', 'photoshop', 'indesign'],
  'ui/ux': ['figma', 'ui', 'ux']
};

function filterProjects(category) {
  if (category === 'all') return projects;

  // Get the keywords for the given category; if none found, fall back to the raw value.
  const keywords = categoryKeywords[category.toLowerCase()] || [category.toLowerCase()];
  
  return projects.filter(project =>
    project.technologies &&
    project.technologies.some(tech =>
      keywords.some(keyword => tech.toLowerCase().includes(keyword))
    )
  );
}



// Initialize projects on page load
document.addEventListener('DOMContentLoaded', () => {
  updateProjectsGrid(projects);
});

function initializeObserver() {
  const observer = new IntersectionObserver(
    entries => entries.forEach(entry => {
      if (entry.isIntersecting) updateActiveSection(entry.target.id);
    }),
    { threshold: 0.5 }
  );

  document.querySelectorAll("section").forEach(section => observer.observe(section));
}

/*
  ==========================================================================
  5. DARK MODE
  ==========================================================================
*/
function toggleDarkMode() {
  isDarkMode = !isDarkMode;
  document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
  localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
}
document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');

/*
  ==========================================================================
  6. FORM HANDLING
  ==========================================================================
*/
function handleSubmit(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  const submitBtn = event.target.querySelector(".submit-btn");
  const originalText = submitBtn.innerHTML;

  console.log("Form submitted:", data);
  
  submitBtn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
  submitBtn.disabled = true;

  setTimeout(() => {
    submitBtn.innerHTML = originalText;
    submitBtn.disabled = false;
    event.target.reset();
  }, 3000);
}