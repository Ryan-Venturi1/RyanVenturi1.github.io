
/*
  ==========================================================================
  1. GLOBAL VARS & PROJECT DATA
  ==========================================================================
*/
import { projects, industryProjects, skills } from './projects.js';


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
window.openProjectModal = openProjectModal;
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
window.closeProjectModal = closeProjectModal;

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
  // Create carousel HTML
  let carouselHTML = '';
  if (project.images && project.images.length > 1) {
    carouselHTML = `
      <div class="image-carousel">
        <button class="carousel-btn prev" aria-label="Previous image">
          <i class="fas fa-chevron-left"></i>
        </button>
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
        <button class="carousel-btn next" aria-label="Next image">
          <i class="fas fa-chevron-right"></i>
        </button>
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

  // Create subprojects HTML
  let subprojectsHTML = '';
  if (project.subprojects && project.subprojects.length > 0) {
    subprojectsHTML = `
      <div class="subprojects-carousel">
        <h3>Related Projects</h3>
        <div class="subprojects-container">
          ${project.subprojects.map((sub, index) => `
            <div class="subproject-card" data-project-id="${project.id}" data-subproject-index="${index}">
              <h4>${sub.title}</h4>
              <p>${sub.description}</p>
              ${sub.skills ? `<div class="subproject-skills">
                ${sub.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
              </div>` : ''}
              ${sub.link ? `<a href="${sub.link}" class="subproject-link" target="_blank" rel="noopener">View Live Version</a>` : ''}
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  // Create links HTML (using either a links object or a single link)
  let linksHTML = '';
  if (project.links) {
    linksHTML = Object.entries(project.links)
      .map(([key, url]) => `
        <a href="${url}" target="_blank" rel="noopener noreferrer" class="modal-link">
          <i class="fas fa-external-link-alt"></i> ${key.charAt(0).toUpperCase() + key.slice(1)}
        </a>
      `).join('');
  } else if (project.link) {
    linksHTML = `<a href="${project.link}" class="modal-link" target="_blank" rel="noopener">Visit Project</a>`;
  }

  // Return the final modal content HTML
  return `
    <div class="modal-content">
      <h2>${project.title}</h2>
      ${project.subtitle ? `<h3 class="modal-subtitle">${project.subtitle}</h3>` : ''}
      ${carouselHTML}
      <div class="modal-description">
        <p class="short-desc">${project.shortdescription}</p>
        <p class="long-desc">${project.longdescription || ''}</p>
      </div>
      <div class="modal-tech">
        ${project.technologies ? project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('') : ''}
      </div>
      <div class="modal-links">
        ${linksHTML}
      </div>
      ${subprojectsHTML}
    </div>
  `;
}
function attachSubprojectListeners() {
  const subprojectCards = document.querySelectorAll('.subproject-card');
  subprojectCards.forEach(card => {
    card.addEventListener('click', () => {
      const projectId = card.getAttribute('data-project-id');
      const subIndex = parseInt(card.getAttribute('data-subproject-index'));
      // Assuming "projects" is your projects data array
      const project = projects.find(p => p.id == projectId);
      if (project && project.subprojects && project.subprojects[subIndex]) {
        openSubprojectModal(project.subprojects[subIndex]);
      }
    });
  });
}
function openSubprojectModal(subproject) {
  let modal = document.getElementById('subproject-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'subproject-modal';
    modal.classList.add('modal');
    modal.innerHTML = `
      <div class="modal-content">
        <button class="modal-close" id="subproject-modal-close">&times;</button>
        <div id="subproject-modal-content"></div>
      </div>
    `;
    document.body.appendChild(modal);

    // Attach close events
    modal.querySelector('#subproject-modal-close').addEventListener('click', closeSubprojectModal);
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeSubprojectModal();
      }
    });
  }

  const modalContent = document.getElementById('subproject-modal-content');
  modalContent.innerHTML = `
    <h2>${subproject.title}</h2>
    <p>${subproject.description}</p>
    ${subproject.skills ? `<div class="subproject-skills">
      ${subproject.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
    </div>` : ''}
    <a href="${subproject.link}" class="subproject-link" target="_blank" rel="noopener">Learn More</a>
  `;
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeSubprojectModal() {
  const modal = document.getElementById('subproject-modal');
  if (modal) {
    modal.classList.remove('active');
    // Don't reset overflow since industry modal is still open
  }
}

window.closeSubprojectModal = closeSubprojectModal;



// In updateProjectsGrid function, modify the project card HTML:
function updateProjectsGrid(projectsToShow) {
  const projectsGrid = document.getElementById('projectsGrid');
  
  projectsGrid.innerHTML = projectsToShow.map(project => {
    const firstImage = project.images && project.images.length > 0 ? project.images[0] : null;
    const isVideo = firstImage && (firstImage.endsWith('.mov') || firstImage.endsWith('.mp4'));
    
    // Add a special class for the specified projects
    const fullCoverClass = [1, 2, 6, 7, 9].includes(project.id) ? 'full-cover-image' : '';
    
    return `
      <div class="project-card ${fullCoverClass}" onclick="openProjectModal(${project.id})">
        <div class="project-image">
          ${firstImage ? (isVideo ?
            `<video src="${firstImage}" class="preview-video" muted loop>
              Your browser does not support the video tag.
             </video>` :
            `<div class="image-container" style="background-image: url('${firstImage}')"></div>`
          ) : `<div class="image-container" style="background-color: #1a1a2e;"></div>`}
          <div class="project-overlay">
            <span class="view-project">View Details</span>
          </div>
        </div>
        <div class="project-content">
          <h3 class="project-title">${project.title}</h3>
          <h4 class="project-subtitle">${project.subtitle || ''}</h4>
          <p class="project-description">${project.shortdescription}</p>
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
    { element: ".landing-title", y: 80, delay: 0 },
    { element: ".landing-subtitle", y: 50, delay: 0.3 },
    { element: ".view-work-btn", y: 30, delay: 0.6 }
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
// In script.js
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    window.scrollTo({
      top: section.offsetTop,
      behavior: 'smooth'
    });
  }
  updateActiveSection(sectionId); // if you have this function defined
}

// Expose scrollToSection globally:
window.scrollToSection = scrollToSection;


function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}
window.scrollToTop = scrollToTop;

function updateActiveSection(sectionId) {
  document.querySelectorAll(".nav button").forEach(btn => btn.classList.remove("active"));
  const activeBtn = document.querySelector(`.nav button[data-section="${sectionId}"]`);
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
  const filterContainer = document.querySelector('.project-filters');
  const leftArrow = document.querySelector('.scroll-arrow.left');
  const rightArrow = document.querySelector('.scroll-arrow.right');
  
  // Function to update arrow visibility
  function updateArrowVisibility() {
    if (!filterContainer) return;
    
    const { scrollLeft, scrollWidth, clientWidth } = filterContainer;
    const canScrollLeft = scrollLeft > 0;
    const canScrollRight = scrollLeft < scrollWidth - clientWidth - 1;
    
    // Update arrow visibility
    if (leftArrow) leftArrow.classList.toggle('visible', canScrollLeft);
    if (rightArrow) rightArrow.classList.toggle('visible', canScrollRight);
  }
  
  // Scroll functions
  function scrollLeft() {
    if (filterContainer) {
      filterContainer.scrollBy({ left: -200, behavior: 'smooth' });
    }
  }
  
  function scrollRight() {
    if (filterContainer) {
      filterContainer.scrollBy({ left: 200, behavior: 'smooth' });
    }
  }
  
  // Set up scroll event listeners
  if (filterContainer) {
    // Initial setup
    setTimeout(() => {
      filterContainer.scrollLeft = 0;
      updateArrowVisibility();
    }, 100);
    
    // Update arrow visibility on scroll
    filterContainer.addEventListener('scroll', updateArrowVisibility);
    
    // Update arrow visibility on window resize
    window.addEventListener('resize', updateArrowVisibility);
  }
  
  // Arrow button event listeners
  if (leftArrow) leftArrow.addEventListener('click', scrollLeft);
  if (rightArrow) rightArrow.addEventListener('click', scrollRight);
  
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



// Render Industry Projects Grid
function updateIndustryProjectsGrid() {
  const grid = document.getElementById('industryProjectsGrid');
  if (!grid) return;

  grid.innerHTML = industryProjects.map(project => {
    const firstImage = project.images && project.images.length > 0 ? project.images[0] : null;
    const isVideo = firstImage && (firstImage.endsWith('.mov') || firstImage.endsWith('.mp4'));
    const subprojectCount = project.subprojects ? project.subprojects.length : 0;

    return `
      <div class="industry-project-card" onclick="openIndustryModal(${project.id})">
        ${subprojectCount > 0 ? `
          <div class="industry-badge">
            <i class="fas fa-layer-group"></i>
            <span>${subprojectCount} Projects</span>
          </div>
        ` : ''}
        <div class="project-image">
          ${firstImage ? (isVideo ?
            `<video src="${firstImage}" class="preview-video" muted loop>
              Your browser does not support the video tag.
             </video>` :
            `<div class="image-container" style="background-image: url('${firstImage}')"></div>`
          ) : `<div class="image-container" style="background-color: #1a1a2e;"></div>`}
          <div class="project-overlay">
            <span class="view-project"><i class="fas fa-expand-alt"></i> Explore Projects</span>
          </div>
        </div>
        <div class="project-content">
          <h3 class="project-title">${project.title}</h3>
          <h4 class="project-subtitle">${project.subtitle || ''}</h4>
          <p class="project-description">${project.shortdescription}</p>
          <div class="project-tech">
            ${project.technologies.slice(0, 3).map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
            ${project.technologies.length > 3 ? `<span class="tech-tag">+${project.technologies.length - 3}</span>` : ''}
          </div>
          ${subprojectCount > 0 ? `
            <div class="click-hint">
              <i class="fas fa-hand-pointer"></i> Click to see ${subprojectCount} individual projects
            </div>
          ` : ''}
        </div>
      </div>
    `;
  }).join('');
}

// Open Industry Project Modal
function openIndustryModal(projectId) {
  const project = industryProjects.find(p => p.id === projectId);
  const modal = document.getElementById('industry-modal');
  const modalContent = document.getElementById('industry-modal-content');

  if (!project || !modal) return;

  scrollPosition = window.scrollY;
  document.body.style.position = 'fixed';
  document.body.style.top = `-${scrollPosition}px`;
  document.body.style.width = '100%';

  const hasMultipleImages = project.images && project.images.length > 1;
  const hasSubprojects = project.subprojects && project.subprojects.length > 0;

  modalContent.innerHTML = `
    <div class="modal-grid">
      <div class="modal-image-section">
        ${hasMultipleImages ? `
          <div class="image-carousel">
            ${project.images.map((img, index) => {
              const isVideo = img.endsWith('.mov') || img.endsWith('.mp4');
              return isVideo ?
                `<video src="${img}" class="carousel-image ${index === 0 ? 'active' : ''}" controls>
                   Your browser does not support the video tag.
                 </video>` :
                `<img src="${img}" alt="${project.title}" class="carousel-image ${index === 0 ? 'active' : ''}">`;
            }).join('')}
            <button class="carousel-btn prev"><i class="fas fa-chevron-left"></i></button>
            <button class="carousel-btn next"><i class="fas fa-chevron-right"></i></button>
            <div class="carousel-indicators">
              ${project.images.map((_, index) =>
                `<button class="carousel-indicator ${index === 0 ? 'active' : ''}" data-index="${index}"></button>`
              ).join('')}
            </div>
          </div>
        ` : project.images && project.images.length > 0 ? `
          ${project.images[0].endsWith('.mov') || project.images[0].endsWith('.mp4') ?
            `<video src="${project.images[0]}" class="modal-single-image" controls>
               Your browser does not support the video tag.
             </video>` :
            `<img src="${project.images[0]}" alt="${project.title}" class="modal-single-image">`
          }
        ` : ''}
      </div>
      <div class="modal-details">
        <h2 class="modal-title">${project.title}</h2>
        ${project.subtitle ? `<h3 class="modal-subtitle">${project.subtitle}</h3>` : ''}
        <p class="modal-description">${project.longdescription || project.shortdescription}</p>
        <div class="modal-tech">
          ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
        </div>
        ${project.link ? `
          <a href="${project.link}" target="_blank" class="modal-link">
            <i class="fas fa-external-link-alt"></i> View Live Project
          </a>
        ` : ''}
        ${hasSubprojects ? `
          <div class="subprojects-section">
            <h4 class="subprojects-title">Project Components</h4>
            <div class="subprojects-grid">
              ${project.subprojects.map((sub, index) => `
                <div class="subproject-card" onclick="event.stopPropagation(); openIndustrySubprojectModal(${project.id}, ${index})">
                  <h5 class="subproject-name">${sub.title}</h5>
                  <p class="subproject-desc">${sub.description.substring(0, 100)}...</p>
                  <div class="subproject-skills">
                    ${sub.skills ? sub.skills.slice(0, 3).map(skill => `<span class="skill-tag">${skill}</span>`).join('') : ''}
                  </div>
                  ${sub.link ? `
                    <a href="${sub.link}" target="_blank" class="subproject-link" onclick="event.stopPropagation();">
                      <i class="fas fa-external-link-alt"></i> View Live
                    </a>
                  ` : ''}
                </div>
              `).join('')}
            </div>
          </div>
        ` : ''}
      </div>
    </div>
  `;

  modal.classList.add('active');
  if (hasMultipleImages) {
    initializeCarousel();
  }
}

// Open Industry Subproject Modal
function openIndustrySubprojectModal(projectId, subprojectIndex) {
  const project = industryProjects.find(p => p.id === projectId);
  if (!project || !project.subprojects || !project.subprojects[subprojectIndex]) return;

  const subproject = project.subprojects[subprojectIndex];

  let modal = document.getElementById('subproject-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'subproject-modal';
    modal.innerHTML = `
      <div class="modal-content">
        <button class="modal-close" onclick="closeSubprojectModal()">×</button>
        <div id="subproject-modal-body" style="padding: 1.5rem;"></div>
      </div>
    `;
    document.body.appendChild(modal);

    // Click outside to close
    modal.addEventListener('click', (e) => {
      if (e.target.id === 'subproject-modal') {
        closeSubprojectModal();
      }
    });
  }

  const modalBody = document.getElementById('subproject-modal-body');
  modalBody.innerHTML = `
    <h2 class="subproject-modal-title">${subproject.title}</h2>
    <p class="subproject-modal-desc">${subproject.description}</p>
    ${subproject.skills ? `
      <div class="subproject-modal-tech">
        ${subproject.skills.map(skill => `<span class="tech-tag">${skill}</span>`).join('')}
      </div>
    ` : ''}
    ${subproject.link ? `
      <a href="${subproject.link}" target="_blank" class="modal-link">
        <i class="fas fa-external-link-alt"></i> View Live
      </a>
    ` : ''}
  `;

  modal.classList.add('active');
}

// Close Industry Modal
function closeIndustryModal() {
  const modal = document.getElementById('industry-modal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.width = '';
    window.scrollTo(0, scrollPosition);
  }
}

// Expose functions globally
window.openIndustryModal = openIndustryModal;
window.closeIndustryModal = closeIndustryModal;
window.openIndustrySubprojectModal = openIndustrySubprojectModal;

// Add click outside to close for industry modal
document.addEventListener('DOMContentLoaded', () => {
  const industryModal = document.getElementById('industry-modal');
  if (industryModal) {
    industryModal.addEventListener('click', (e) => {
      if (e.target.id === 'industry-modal') {
        closeIndustryModal();
      }
    });
  }
});

// Timeline Scrolling Feature
let timelineIndex = 0;
const itemsToShow = 2;

function initializeTimeline() {
  const timeline = document.getElementById('experienceTimeline');
  const indicators = document.getElementById('timelineIndicators');
  if (!timeline || !indicators) return;

  const items = timeline.querySelectorAll('.timeline-item');
  const totalPages = Math.ceil(items.length / itemsToShow);

  // Create indicators
  indicators.innerHTML = '';
  for (let i = 0; i < totalPages; i++) {
    const indicator = document.createElement('button');
    indicator.className = `timeline-indicator ${i === 0 ? 'active' : ''}`;
    indicator.onclick = () => goToTimelinePage(i);
    indicators.appendChild(indicator);
  }

  updateTimelineView();
}

function scrollTimeline(direction) {
  const timeline = document.getElementById('experienceTimeline');
  if (!timeline) return;

  const items = timeline.querySelectorAll('.timeline-item');
  const totalPages = Math.ceil(items.length / itemsToShow);

  timelineIndex += direction;
  if (timelineIndex < 0) timelineIndex = 0;
  if (timelineIndex >= totalPages) timelineIndex = totalPages - 1;

  updateTimelineView();
}

function goToTimelinePage(page) {
  timelineIndex = page;
  updateTimelineView();
}

function updateTimelineView() {
  const timeline = document.getElementById('experienceTimeline');
  const indicators = document.querySelectorAll('.timeline-indicator');
  const prevBtn = document.querySelector('.timeline-nav-btn.prev');
  const nextBtn = document.querySelector('.timeline-nav-btn.next');

  if (!timeline) return;

  const items = timeline.querySelectorAll('.timeline-item');
  const totalPages = Math.ceil(items.length / itemsToShow);
  const itemHeight = items[0] ? items[0].offsetHeight + 24 : 140;

  // Scroll to the correct position
  const offset = timelineIndex * itemsToShow * itemHeight;
  timeline.style.transform = `translateY(-${offset}px)`;

  // Update indicators
  indicators.forEach((ind, i) => {
    ind.classList.toggle('active', i === timelineIndex);
  });

  // Update button states
  if (prevBtn) prevBtn.disabled = timelineIndex === 0;
  if (nextBtn) nextBtn.disabled = timelineIndex >= totalPages - 1;
}

window.scrollTimeline = scrollTimeline;
window.goToTimelinePage = goToTimelinePage;

// Initialize projects on page load
document.addEventListener('DOMContentLoaded', () => {
  updateProjectsGrid(projects);
  updateIndustryProjectsGrid();
  initializeTimeline();
});

function initializeObserver() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          updateActiveSection(entry.target.id);
        }
      });
    },
    {
      // This effectively shifts the viewport for the observer’s calculation
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0
    }
  );

  document.querySelectorAll("section").forEach(section => observer.observe(section));
}


/*
  ==========================================================================
  5. DARK MODE
  ==========================================================================
*/
function toggleDarkMode() {
  // Your dark mode toggling logic here
  isDarkMode = !isDarkMode;
  document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
  localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
}

// Expose the function globally so inline handlers can access it
window.toggleDarkMode = toggleDarkMode;

/*
  ==========================================================================
  6. FORM HANDLING WITH EMAILJS
  ==========================================================================
*/

// Initialize EmailJS
(function() {
  // Replace 'YOUR_PUBLIC_KEY' with your actual EmailJS public key
  emailjs.init('mgpPA7bYRE5j1auzp');
})();

function handleSubmit(event) {
  event.preventDefault();
  event.stopPropagation();
  
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  const submitBtn = event.target.querySelector(".submit-btn");
  const originalText = submitBtn.innerHTML;

  // Show loading state
  submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
  submitBtn.disabled = true;

  // EmailJS template parameters
  const templateParams = {
    title: data.message.substring(0, 50) + (data.message.length > 50 ? '...' : ''), // First 50 chars for subject
    name: data.name,
    email: data.email,
    message: data.message,
  };

  // Send email using EmailJS
  emailjs.send('service_qpsmc8g', 'template_1ex61bh', templateParams)
    .then(function(response) {
      console.log('Email sent successfully:', response);
      showEmailModal(true);
      event.target.reset();
      submitBtn.innerHTML = originalText;
      submitBtn.disabled = false;
    })
    .catch(function(error) {
      console.error('Email failed to send:', error);
      showEmailModal(false);
      submitBtn.innerHTML = originalText;
      submitBtn.disabled = false;
    });
  
  return false;
}

// Make handleSubmit globally available
window.handleSubmit = handleSubmit;

// Email confirmation modal
function showEmailModal(success) {
  // Remove existing modal if present
  const existingModal = document.getElementById('email-modal');
  if (existingModal) {
    existingModal.remove();
  }

  // Create modal element
  const modal = document.createElement('div');
  modal.id = 'email-modal';
  modal.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10000;
    opacity: 0;
    transition: opacity 0.3s ease;
  `;

  const modalContent = document.createElement('div');
  modalContent.style.cssText = `
    background: var(--surface);
    padding: 3rem 2rem;
    border-radius: 24px;
    text-align: center;
    max-width: 400px;
    width: 90%;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
    transform: scale(0.8);
    transition: transform 0.3s ease;
  `;

  if (success) {
    modalContent.innerHTML = `
      <div style="color: #10b981; font-size: 4rem; margin-bottom: 1rem;">
        <i class="fas fa-check-circle"></i>
      </div>
      <h2 style="color: var(--text); margin-bottom: 0.5rem; font-size: 1.5rem;">Email Sent Successfully!</h2>
      <p style="color: var(--text-secondary); font-size: 1rem;">Thank you for your message. I'll get back to you soon!</p>
      <div style="margin-top: 2rem; color: var(--text-secondary); font-size: 0.9rem;">
        Returning to portfolio in <span id="countdown">4</span> seconds...
      </div>
    `;
  } else {
    modalContent.innerHTML = `
      <div style="color: #ef4444; font-size: 4rem; margin-bottom: 1rem;">
        <i class="fas fa-times-circle"></i>
      </div>
      <h2 style="color: var(--text); margin-bottom: 0.5rem; font-size: 1.5rem;">Email Failed to Send</h2>
      <p style="color: var(--text-secondary); font-size: 1rem;">Sorry, there was an error sending your message. Please try again.</p>
      <div style="margin-top: 2rem; color: var(--text-secondary); font-size: 0.9rem;">
        Returning to portfolio in <span id="countdown">4</span> seconds...
      </div>
    `;
  }

  modal.appendChild(modalContent);
  document.body.appendChild(modal);

  // Animate in
  setTimeout(() => {
    modal.style.opacity = '1';
    modalContent.style.transform = 'scale(1)';
  }, 10);

  // Countdown and close
  let timeLeft = 4;
  const countdownEl = document.getElementById('countdown');
  const countdownInterval = setInterval(() => {
    timeLeft--;
    if (countdownEl) {
      countdownEl.textContent = timeLeft;
    }
    
    if (timeLeft <= 0) {
      clearInterval(countdownInterval);
      modal.style.opacity = '0';
      modalContent.style.transform = 'scale(0.8)';
      setTimeout(() => {
        modal.remove();
      }, 300);
    }
  }, 1000);

  // Allow clicking to close early
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      clearInterval(countdownInterval);
      modal.style.opacity = '0';
      modalContent.style.transform = 'scale(0.8)';
      setTimeout(() => {
        modal.remove();
      }, 300);
    }
  });
}