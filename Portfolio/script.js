
/*
  ==========================================================================
  1. GLOBAL VARS & PROJECT DATA
  ==========================================================================
*/
const projects = [
  {
    id: 1,
    title: "Pleiades Mental Health",
    subtitle: "AI-Powered Mental Health Platform",
    shortdescription:
      "Pleiades Mental Health is the leading preventive mental health care platform that allows users to receive better therapy and allows therapists to provide better care.",
    longdescription:
      "As the first founder of Pleiades Mental Health, I was able to develop a state-of-the-art mental health platform. Following the precedent of preventive care, our goal is to onboard clients when they first start experiencing symptoms related to any form of mental health, and while we treat and support the current issues impacting them, we also teach them coping techniques and skills while providing them with a full platform of self-support and community tools to help them in the future. For our therapists, we want to help them get back to what they signed up for, which is helping people. By using our platform, we are able to save them time running their practices, simplify their operations, and show them tangible data to justify the progress their clients are making to help reduce burnout. Click below to learn about all of the platform offerings I built, including a comprehensive analytics dashboard leveraging machine learning for predictive insights and real-time data visualization.",
    images: [
      "pleiades.png",
      "overview.png",
      "pleiadeshome.png",
      "signin.png"
    ],
    technologies: [
      "React",
      "TensorFlow",
      "Node.js",
      "JavaScript",
      "CSS",
      "HTML",
      "firebase",
      "aws",
      "mySQL",
      "php",
      "python",
      "Figma"
    ],
    subprojects: [
      "Modality Matching",
      "Oasis",
      "Scheduling System",
      "Personality Matching",
      "Encrypted Messaging System",
      "Team",
      "Compatibility Matching"
    ],
    link: "pleiadesmh.com",
  },

  {
    id: 2,
    title: "IvySky",
    shortdescription: "A mental health nonprofit designed by teens for teens.",
    longdescription:
      "As the former CEO and Founder, and a high school sophomore, we set out to build a new app that changes the way people seek mental health treatment. This led us on a journey of creating a free app that uses open-source, publicly available content and in-house generated content to build a free resource platform that helped teens develop coping mechanisms. While I have since moved on to creating a platform with more offerings in Pleiades, in IvySky's heyday as a fully registered 501(c)3, we were still able to help teens in need with a team of 55 therapists, coders, marketers, and doctors. We achieved a high of $60,000 in funding and 500 daily active users. We are currently working on a new platform. Click below to learn more about IvySky.",
    images: ["ivyskylogo.png"],
    links: {
      linkedin: "https://www.linkedin.com/company/ivysky",
      appStore: "https://apps.apple.com/us/app/ivysky-mental-health/id1626276102",
      instagram: "https://www.instagram.com/ivyskyofficial",
      caseStudy: "https://geekyants.com/case-studies/mental-health-platform-for-IvySky",
      tiktok: "https://www.tiktok.com/@ivyskyofficial",
      community: "https://www.delts.org/building-community-to-support-mental-health"
    },
    technologies: ["Adobe XD", "React", "Python", "AWS", "Firebase"],
    link: "https://www.linkedin.com/company/ivysky"
  },
  

{
  id: 3,
  title: "Physical Computing Meets Botany",
  shortdescription:
    "A fully automated and interactive garden that, using a wide variety of code and sensors, was able to grow 35 plants and 15 flowers with automated lighting, watering, and feeding. This project was built for a class on the Arduino platform using pumps, relays, breadboards, and 20 water sensors for independent readings of each bed. To build this system, I purchased and correctly cut wood boards, cut ten 12-inch PVC pipes to exact specifications, and 3D-printed 24 joints that I designed and scaled in Onshape. The entire garden, including the wiring, was designed and built in Onshape.",
    images: [
      "pleiades.png",
      "overview.png",
      "pleiadeshome.png",
      "signin.png"
    ],
  technologies: [
    "Arduino",
    "Arduino IDE",
    "Relays",
    "Pumps",
    "Water Sensors",
    "Breadboards",
    "Onshape",
    "3D Printing"
  ],
  Skills: [
    "Electrical Circuits",
    "Soldering",
    "Current Regulation",
    "Wood Shop",
    "CAD",
    "3D Printing"
  ]
},
  {
    id: 4,
    title: "Smart Home Desk Lighting System",
    shortdescription:
      "A desk lighting system that combines Arduino and Bluetooth to control lights on a desk. This was built for a class on the Arduino platform using 25 voice commands that can be programmed, trained, and reprogrammed. With simple voice commands, you can change the lights in the room to any color or setting. Employing Bluetooth and voice recognition was challenging, but it allowed for complete customization of the system’s placement and functionality.",
      images: [
        "light.jpg",
        "light1.jpg",
        "light2.mov",
        "light3.mov",
        "light4.mov"
      ],
    technologies: [
      "NeoPixels",
      "Soldering",
      "Arduino",
      "Bluetooth",
      "Voice Recognition"
    ]
  },
  {
    id: 5,
    title: "Opera Flyer Design",
    shortdescription:
      "Our assignment was to develop a unique, colorful, well-designed poster for the Colorado Opera. We were given too many words to fit on the page and were tasked with creating a readable and colorful design on an 11.5 x 17 inch page.",
      images: [
        "text1.png",
        "text2.png",
      ],
    technologies: ["Adobe Illustrator", "Photoshop", "Adobe InDesign"]
  },
  {
    id: 6,
    title: "Soda Cans",
    shortdescription:
      "Using the design skills from our class, we were tasked with creating a brand identity, packaging, and products within two weeks. With this goal in mind, I crafted a beverage brand called UnWind, designed for those who want to unwind after a long day.",
    longdescription:
      "A comprehensive analytics dashboard leveraging machine learning for predictive insights and real-time data visualization.",
      images: [
        "soda1.png",
        "soda2.png",
        "soda3.png",
        "soda4.png",
        "soda5.png",
      ],
    technologies: ["Adobe Illustrator", "Photoshop", "Adobe Dimension"]
  },
  {
    id: 7,
    title: "Client Matching System",
    shortdescription:
      "A comprehensive analytics dashboard leveraging machine learning for predictive insights and real-time data visualization.",
    longdescription:
      "A comprehensive analytics dashboard leveraging machine learning for predictive insights and real-time data visualization.",
      images: [
        "match1.png",
        "match2.png", 
        "match3.png",
        "match4.png",
        "match5.png",
      ],
    technologies: ["React Native", "Python", "TensorFlow", "MongoDB"]
  },
  {
    id: 8,
    title: "Artificial Intelligence Content Moderation System",
    shortdescription:
      "A comprehensive analytics dashboard leveraging machine learning for predictive insights and real-time data visualization.",
    longdescription:
      "A comprehensive analytics dashboard leveraging machine learning for predictive insights and real-time data visualization.",
      images: [
        "AiModerator.mp4",
      ],
    technologies: ["React Native", "Python", "TensorFlow", "MongoDB"],
    link: "#",
    github: "#"
  },
  {
    id: 9,
    title: "Encrypted Messaging System",
    shortdescription:
      "A comprehensive analytics dashboard leveraging machine learning for predictive insights and real-time data visualization.",
    longdescription:
      "A comprehensive analytics dashboard leveraging machine learning for predictive insights and real-time data visualization.",
      images: [
        "message.png",
      ],
    technologies: ["React Native", "Python", "TensorFlow", "MongoDB"],
    link: "#"
  },
  {
    id: 10,
    title: "OpenEMR Patient Management System",
    shortdescription:
      "A comprehensive analytics dashboard leveraging machine learning for predictive insights and real-time data visualization.",
    longdescription:
      "A comprehensive analytics dashboard leveraging machine learning for predictive insights and real-time data visualization.",
      images: [
        "OPENEMR.png",
        "OPENEmr1.png",
        "OPENEMR2.png",
      ],
    technologies: ["React Native", "Python", "TensorFlow", "MongoDB"],
    link: "#"
  },
  {
    id: 11,
    title: "The Oasis",
    shortdescription:
      "While not publicly available, the Oasis platform — which plugs into the Pleiades Ecosystem — uses over 60 APIs, AI, modern UI/UX dashboard design, and other cutting-edge technologies to provide unique, state-of-the-art support.",
    longdescription:
      "A comprehensive analytics dashboard leveraging machine learning for predictive insights and real-time data visualization.",
      images: [
        "oasis.png",
        "oasis1.png",
        "oasis2.png",
        "oasis3.png",
        "oasis4.png",
        "oasis5.png",
      ],
    technologies: [
      "JavaScript",
      "Python",
      "TensorFlow",
      "Firebase",
      "Meetup API",
      "SoundCloud API",
      "SORA",
      "AWS",
      "HTML",
      "CSS",
      "Figma",
      "ManyOthers"
    ]
  },
  {
    id: 12,
    title: "Prompt Engineering and AI Applications",
    shortdescription:
      "Ample experience and understanding of all leading AI models and their applications, including extensive work on API integrations, AI model development, and TensorFlow training.",
    technologies: [
      "ChatGPT 4.0, 1.0, 1.0 Mini",
      "OpenAI Sora",
      "DALL·E Image Generator",
      "Claude (Sonnet and Claude Projects)",
      "Google Gemini (Multimodal Image Trainer)",
      "TensorFlow",
      "OpenAI API",
      "OpenAI Text Recognition API"
    ]
  }
]



const skills = [
  {
    name: "Frontend Development",
    level: 95,
    details: {
      technologies: ["React", "Vue.js", "Tailwind CSS", "JavaScript", "TypeScript", "HTML5", "CSS3"],
      strengths: [
        "Responsive and immersive design implementations",
        "Building interactive 3D dashboards with Three.js",
        "Component-based architecture and clean code structure",
        "Seamless integration of frontend frameworks for smooth user experience",
        "Optimization for accessibility and performance"
      ],
      projects: [
        "Developed an immersive 3D dashboard ('Oasis') using React and Three.js.",
        "Created a mental health platform's UI with dynamic features and clean design.",
        "Designed responsive user interfaces for gig-economy and mental health platforms."
      ]
    }
  },
  {
    name: "Backend Development",
    level: 90,
    details: {
      technologies: ["Node.js", "Express.js", "Firebase", "MongoDB", "PostgreSQL"],
      strengths: [
        "Creating secure and scalable backend systems",
        "Implementing APIs with real-time data processing",
        "Integrating third-party tools (Stripe, pVerify, Google Calendar, Daily.co)",
        "HIPAA-compliant data architecture for sensitive user data",
        "Serverless architecture with Firebase Cloud Functions"
      ],
      projects: [
        "Designed real-time appointment systems for therapists and clients.",
        "Built an API for a subscription-based billing platform using Stripe.",
        "Integrated backend systems for large-scale data handling and user matching."
      ]
    }
  },
  {
    name: "UI/UX Design",
    level: 90,
    details: {
      tools: ["Figma", "Adobe XD", "Photoshop", "Illustrator", "InDesign", "Lightroom Classic"],
      strengths: [
        "Typography and visual storytelling (e.g., typographic accordion books)",
        "Branding and user-centric design for web and mobile platforms",
        "Creating wireframes, mockups, and prototypes for development handoff",
        "Photo and graphics editing for creative and marketing projects",
        "Expertise in layout design for print and digital platforms"
      ],
      projects: [
        "Created a typographic accordion book inspired by 'Three Little Birds.'",
        "Designed clean, modern UI for Pleiades mental health platform.",
        "Developed branding elements and designs for creative projects and presentations."
      ]
    }
  },
  {
    name: "Machine Learning & AI",
    level: 80,
    details: {
      technologies: ["Vertex AI", "Python", "TensorFlow", "Scikit-learn"],
      strengths: [
        "Developing compatibility algorithms for personalized experiences",
        "Integrating AI-driven features into user platforms (e.g., workout models)",
        "Predictive modeling and data analysis for behavioral insights",
        "Utilizing cloud-based AI tools for scalability and performance",
        "Building practical tools for AI-enhanced user engagement"
      ],
      projects: [
        "Developed a compatibility algorithm to match therapists with clients.",
        "Created a personalized AI workout planner integrating multiple user inputs.",
        "Integrated AI-driven features into mental health platforms for user interaction."
      ]
    }
  },
  {
    name: "Hardware & Electronics",
    level: 85,
    details: {
      technologies: ["Arduino", "Relays", "Sensors (e.g., moisture, light)", "Breadboards", "Soldering Tools"],
      strengths: [
        "Prototyping hardware systems using Arduino for automation",
        "Soldering components for robust and efficient hardware setups",
        "Programming relays and sensors for IoT projects",
        "Building smart systems (e.g., plant basins, automated lighting)",
        "Designing and simulating hardware with Tinkercad and related tools"
      ],
      projects: [
        "Built a moisture-controlled irrigation system with Arduino and relays.",
        "Developed voice-activated LED lighting systems using Bluetooth and Arduino.",
        "Prototyped a can-crushing mechanism involving motors, sensors, and Arduino."
      ]
    }
  },
  {
    name: "Data Analysis & Excel",
    level: 85,
    details: {
      tools: ["Excel", "Google Sheets", "Tableau"],
      strengths: [
        "Performing data visualization for insights and decision-making",
        "Creating complex formulas and pivot tables in Excel",
        "Building financial models for forecasting and budgeting",
        "Analyzing large datasets for trends and patterns",
        "Developing custom dashboards and reports"
      ],
      projects: [
        "Conducted financial analyses for a solar energy viability study.",
        "Created Excel models for subscription-based revenue forecasting.",
        "Designed dashboards for tracking client engagement and platform metrics."
      ]
    }
  },
  {
    name: "Creative Design & Marketing",
    level: 88,
    details: {
      tools: ["Photoshop", "Illustrator", "InDesign", "Premiere Pro", "Lightroom Classic"],
      strengths: [
        "Designing high-quality visuals for branding and storytelling",
        "Editing photos and videos for campaigns and creative projects",
        "Creating layouts for books, brochures, and marketing materials",
        "Developing dynamic animations (e.g., TikTok-like 'Life on Film')",
        "Innovating typographic and graphic designs for unique presentations"
      ],
      projects: [
        "Produced a photo-animation series inspired by 'Life on Film.'",
        "Designed a creative shot book for a 21st birthday with unique themes.",
        "Created marketing collateral for events and philanthropic projects."
      ]
    }
  },
  {
    name: "Cloud Architecture & DevOps",
    level: 85,
    details: {
      technologies: ["Firebase", "Google Cloud Platform", "AWS", "Docker"],
      strengths: [
        "Building secure, scalable, and cost-effective cloud systems",
        "Implementing Firestore rules for HIPAA compliance",
        "Streamlining workflows with CI/CD pipelines and Docker",
        "Deploying serverless applications for real-time updates",
        "Managing multi-tiered subscription platforms"
      ],
      projects: [
        "Architected a therapist-client platform with HIPAA-compliant security.",
        "Built a cloud infrastructure for scalable user engagement.",
        "Integrated multiple APIs and managed deployments seamlessly."
      ]
    }
  }
];

let isDarkMode = false;
// Store the initial scroll position
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
  initializeParticles();
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
function initializeParticles() {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ alpha: true });
  
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.getElementById("particles-container").appendChild(renderer.domElement);

  const particlesGeometry = new THREE.BufferGeometry();
  const particlesCount = 5000;
  const posArray = new Float32Array(particlesCount * 3);

  for (let i = 0; i < particlesCount * 3; i++) {
    posArray[i] = (Math.random() - 0.5) * 7;
  }

  particlesGeometry.setAttribute("position", new THREE.BufferAttribute(posArray, 3));
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

  window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
}
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
function filterProjects(category) {
  return category === 'all' ? projects : projects.filter(project => 
    project.technologies.some(tech => tech.toLowerCase().includes(category.toLowerCase()))
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
  document.documentElement.setAttribute("data-theme", isDarkMode ? "dark" : "light");
}

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