/*
  ==========================================================================
  1. GLOBAL VARS & PROJECT DATA
  ==========================================================================
*/
const projects = [
  {
    id: 1,
    title: "AI-Powered Analytics Platform",
    description:
      "A comprehensive analytics dashboard leveraging machine learning for predictive insights and real-time data visualization.",
    image:
      "https://via.placeholder.com/600x400.png?text=Analytics+Platform",
    technologies: ["React", "TensorFlow", "Node.js", "D3.js"],
    link: "#",
    github: "#"
  },
  {
    id: 2,
    title: "E-Commerce Solution",
    description:
      "Full-stack e-commerce platform with advanced features including real-time inventory management and AI-powered recommendations.",
    image:
      "https://via.placeholder.com/600x400.png?text=E-Commerce+Solution",
    technologies: ["Vue.js", "Python", "PostgreSQL", "AWS"],
    link: "#",
    github: "#"
  },
  {
    id: 3,
    title: "Smart Home IoT System",
    description:
      "IoT platform for smart home automation with machine learning capabilities for energy optimization.",
    image:
      "https://via.placeholder.com/600x400.png?text=Smart+Home+IoT",
    technologies: ["React Native", "Python", "TensorFlow", "MongoDB"],
    link: "#",
    github: "#"
  }
];

const skills = [
  { name: "Frontend Development", level: 90 },
  { name: "Backend Development", level: 85 },
  { name: "UI/UX Design", level: 80 },
  { name: "Machine Learning", level: 75 },
  { name: "Cloud Architecture", level: 85 }
];

let isDarkMode = false;

/*
  ==========================================================================
  2. ON DOM CONTENT LOADED
  ==========================================================================
*/
document.addEventListener("DOMContentLoaded", () => {
  initializeLoading();
  initializeParticles();
  populateProjects();
  populateSkills();
  initializeAnimations();
  initializeScrolling();
  initializeObserver();
});

/*
  ==========================================================================
  3. LOADING SCREEN
  ==========================================================================
*/
function initializeLoading() {
  window.addEventListener("load", () => {
    const loadingScreen = document.querySelector(".loading-screen");
    loadingScreen.classList.add("hidden");
    setTimeout(() => {
      loadingScreen.style.display = "none";
    }, 500);
  });
}

/*
  ==========================================================================
  4. THREE.JS / PARTICLE BACKGROUND
  ==========================================================================
*/
function initializeParticles() {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  const renderer = new THREE.WebGLRenderer({ alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.getElementById("particles-container").appendChild(renderer.domElement);

  // Create particles
  const particlesGeometry = new THREE.BufferGeometry();
  const particlesCount = 5000;
  const posArray = new Float32Array(particlesCount * 3);

  for (let i = 0; i < particlesCount * 3; i++) {
    posArray[i] = (Math.random() - 0.5) * 7;
  }

  particlesGeometry.setAttribute(
    "position",
    new THREE.BufferAttribute(posArray, 3)
  );
  const particlesMaterial = new THREE.PointsMaterial({
    size: 0.01,
    color: "#3B82F6"
  });

  const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
  scene.add(particlesMesh);

  camera.position.z = 2;

  function animate() {
    requestAnimationFrame(animate);
    particlesMesh.rotation.y += 0.0003;
    particlesMesh.rotation.x += 0.0001;
    renderer.render(scene, camera);
  }
  animate();

  // Handle resize
  window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
}

/*
  ==========================================================================
  5. POPULATE PROJECTS
  ==========================================================================
*/
function populateProjects() {
  const projectsGrid = document.getElementById("projectsGrid");
  projectsGrid.innerHTML = projects
    .map(
      (project) => `
        <div 
          class="project-card" 
          onclick="openProjectModal(${project.id})"
          tabindex="0"
          role="button"
          aria-pressed="false"
          aria-label="Open details for ${project.title}"
        >
          <div 
            class="project-image"
            style="background-image: url('${project.image}')"
          ></div>
          <div class="project-content">
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.description}</p>
            <div class="project-tech">
              ${project.technologies
                .map((tech) => `<span class="tech-tag">${tech}</span>`)
                .join("")}
            </div>
          </div>
        </div>
      `
    )
    .join("");
}

/*
  ==========================================================================
  6. POPULATE SKILLS
  ==========================================================================
*/
function populateSkills() {
  const skillBarsContainer = document.querySelector(".skill-bars");
  skillBarsContainer.innerHTML = skills
    .map(
      (skill) => `
        <div class="skill-bar-container">
          <div class="skill-info">
            <span>${skill.name}</span>
            <span>${skill.level}%</span>
          </div>
          <div class="skill-bar">
            <div class="skill-bar-fill" data-width="${skill.level}"></div>
          </div>
        </div>
      `
    )
    .join("");
}

/*
  ==========================================================================
  7. ANIMATIONS (e.g., GSAP)
  ==========================================================================
*/
function initializeAnimations() {
  gsap.registerPlugin(ScrollTrigger);

  // Hero text animations
  gsap.from(".hero-title", {
    y: 80,
    opacity: 0,
    duration: 1,
    ease: "power4.out"
  });
  gsap.from(".hero-subtitle", {
    y: 50,
    opacity: 0,
    duration: 1,
    delay: 0.3,
    ease: "power4.out"
  });
  gsap.from(".cta-button", {
    y: 30,
    opacity: 0,
    duration: 0.8,
    delay: 0.6,
    ease: "power4.out"
  });

  // Project cards
  const projectCards = gsap.utils.toArray(".project-card");
  projectCards.forEach((card, i) => {
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

  // Skill bars
  const skillFills = gsap.utils.toArray(".skill-bar-fill");
  skillFills.forEach((bar) => {
    const width = bar.getAttribute("data-width");
    gsap.to(bar, {
      scrollTrigger: {
        trigger: bar,
        start: "top bottom-=100",
        toggleActions: "play none none reverse"
      },
      width: width + "%",
      duration: 1.5,
      ease: "power4.out"
    });
  });
}

/*
  ==========================================================================
  8. SCROLLING & NAV
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
  document.querySelectorAll(".nav button").forEach((btn) => {
    btn.classList.remove("active");
  });
  const activeBtn = document.querySelector(
    `.nav button[onclick="scrollToSection('${sectionId}')"]`
  );
  if (activeBtn) {
    activeBtn.classList.add("active");
  }
}

/*
  ==========================================================================
  9. INTERSECTION OBSERVER
  ==========================================================================
*/
function initializeObserver() {
  const options = {
    threshold: 0.5
  };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        updateActiveSection(entry.target.id);
      }
    });
  }, options);

  document.querySelectorAll("section").forEach((sec) => {
    observer.observe(sec);
  });
}

/*
  ==========================================================================
  10. PROJECT MODAL
  ==========================================================================
*/
function openProjectModal(projectId) {
  const project = projects.find((p) => p.id === projectId);
  const modal = document.getElementById("project-modal");
  const modalContent = document.getElementById("modal-content");

  modalContent.innerHTML = `
    <h2 id="modal-title" class="modal-title">${project.title}</h2>
    <img 
      src="${project.image}" 
      alt="${project.title} image" 
      class="modal-image" 
    />
    <p 
      id="modal-content-desc" 
      class="modal-description"
    >
      ${project.description}
    </p>
    <div class="modal-tech">
      ${project.technologies
        .map((tech) => `<span class="tech-tag">${tech}</span>`)
        .join("")}
    </div>
    <div class="modal-links">
      <a href="${project.link}" target="_blank" rel="noopener">
        <i class="fas fa-external-link-alt"></i> Live Demo
      </a>
      <a href="${project.github}" target="_blank" rel="noopener">
        <i class="fab fa-github"></i> View Code
      </a>
    </div>
  `;
  modal.classList.add("active");
  document.body.style.overflow = "hidden"; // lock body scroll
}

function closeProjectModal() {
  const modal = document.getElementById("project-modal");
  modal.classList.remove("active");
  document.body.style.overflow = "auto";
}

/*
  ==========================================================================
  11. FORM HANDLING
  ==========================================================================
*/
function handleSubmit(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  // Simulate form submission logic
  console.log("Form submitted:", data);

  // Show success message
  const submitBtn = event.target.querySelector(".submit-btn");
  const originalText = submitBtn.innerHTML;
  submitBtn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
  submitBtn.disabled = true;

  setTimeout(() => {
    submitBtn.innerHTML = originalText;
    submitBtn.disabled = false;
    event.target.reset();
  }, 3000);
}

/*
  ==========================================================================
  12. DARK MODE TOGGLE
  ==========================================================================
*/
function toggleDarkMode() {
  const htmlEl = document.documentElement;
  if (!isDarkMode) {
    htmlEl.setAttribute("data-theme", "dark");
    isDarkMode = true;
  } else {
    htmlEl.setAttribute("data-theme", "light");
    isDarkMode = false;
  }
}

/*
  ==========================================================================
  13. BACK TO TOP VISIBILITY
  ==========================================================================
*/
window.addEventListener("scroll", () => {
  const backToTopBtn = document.getElementById("backToTop");
  if (window.scrollY > 300) {
    backToTopBtn.classList.add("show");
  } else {
    backToTopBtn.classList.remove("show");
  }
});
