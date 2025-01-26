
/*
  ==========================================================================
  1. GLOBAL VARS & PROJECT DATA
  ==========================================================================
*/
const projects = [
  {
    id: 1,
    title: "Pleiades Mental Health",
    Subtitle: "AI-Powered Mental Health Platform",
    shortdescription:
      "Pleaides Mental Health is the leading preventive mentla health care paltofrm that allows users to recive better therpay and allows thepriats to provide better care. ",
    longdescription:
      "As the first founder of pleiades Mentla Helath I was able to devlope a state of teh art mental health paltofrm. Follwong the precendt of preventive care our goal is to onboard clietns when they first start ecxpeincing symptosmrelated to any form of entla health adn then while we treat and support the current issues the suers are impacting we then teach them coping techinques and skills while provinging them with a full platform of self support and communtyt tools to help them in the futuere. For our therpaists we want to help them get back to what they signed up for which is helping people by using our paltfom we are able to save the ytime running their practises simiply theri operations., and show them tangible data to jsutfiy the progress their clietns are maiing to help them remove their burnout. Click below to lern about all of the platfom offerings I built. comprehensive analytics dashboard leveraging machine learning for predictive insights and real-time data visualization.",
    // Replace all image URLs like this
    image: `data:image/svg+xml;base64,${btoa('<svg xmlns="http://www.w3.org/2000/svg" width="300" height="300"><rect width="100%" height="100%" fill="#eee"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif">Project Image</text></svg>')}`,    
    technologies: ["React", "TensorFlow", "Node.js", "JavaScript", "CSS", "HTML", "firebase", "aws", "mySQL", "php", "python", "Figma"],
    subprojetcs:[],
    link: "pleiadesmh.com",
  },
  {
    id: 2,
    title: "IvySky",
    shortdescription:
      "A mental health non profit designe dby teens for teens.",
    longdescription:
      "As the former CEO and Founder and a highschool sophmore we set out to build a new app tht changes the way people seek mental health treatmetn. THis lead us on the journey of creating a free app that uses opensource publicly avalible contnet and inhouse genrated content to build a free resoruce paltofrm that helped teens devlope coping mechanisms. While I have since moved on to creating a platform wtith more offerings in Pleiades in IvySky's hayday as a fully registerd 501(c)3 we are still able to help teens in need with a team of 55 therpaist, coders, marketers, and docotres we achvied a high of 60,000 in funding and 500 daily active suers. We are currently working on a new platform that is in the works . Click below to lern more about how IvySky.",
      image: `data:image/svg+xml;base64,${btoa('<svg xmlns="http://www.w3.org/2000/svg" width="300" height="300"><rect width="100%" height="100%" fill="#eee"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif">Project Image</text></svg>')}`,    
      links: {
      linkedin: "https://www.linkedin.com/company/ivysky",
      appStore: "https://apps.apple.com/us/app/ivysky-mental-health/id1626276102",
      instagram: "https://www.instagram.com/ivyskyofficial",
      caseStudy: "https://geekyants.com/case-studies/mental-health-platform-for-IvySky",
      tiktok: "https://www.tiktok.com/@ivyskyofficial",
      community: "https://www.delts.org/building-community-to-support-mental-health"
    },
    
    technologies: ["Adobe XD", "React", "Python", "AWS", 'Firebase'],
    link: "https://www.linkedin.com/company/ivysky",
  
  },
  {
    id: 3,
    title: "Physical Computing Meets Botony",
    shortdescription:
    "A fully automated and interactive garden that using a wide varitey of code and sensors was able to grow 35 palnts and 15 flowers with automated lighting, watering, and feeding. This project was built for a class and built on the Arduino platoform usign pumps relays breadbaords and 20 water sensors giving independt readings of each bed. To build this systme I pursahsed and coreclty cut wood boards, cut 10 12 inch pvc pipes to exact specofcation and 3d printed 24 jpints that i designed and scaled in Onshape. The whole garend including the wirnign was designed and built in OnSHape",
    image: `data:image/svg+xml;base64,${btoa('<svg xmlns="http://www.w3.org/2000/svg" width="300" height="300"><rect width="100%" height="100%" fill="#eee"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif">Project Image</text></svg>')}`,    
    technologies: ["Arduino", "ArdunioIDE"],
    Skills: ["Electircal Circuits", "Soldering", "Current Regulation", "Wood Shop", "CAD", "3D Printing"],

  },
  {
    id: 4,
    title: "Smart Home Desk Lighting System",
    shortdescription:
      "Desk lighting system that combines arduino and bluetooth to control lights on a desk. This was built for a class and built on the Arduino platoform and using 25 voice commands can be programmed trained and reprogrammed. This allows with jsut simiple voice commands the ability to change and the lights in my room to any color or setting I wish. Employing bluetooth and voice recongition was challenging but allowed me to full coustimze where the system is and how it works.",
      image: `data:image/svg+xml;base64,${btoa('<svg xmlns="http://www.w3.org/2000/svg" width="300" height="300"><rect width="100%" height="100%" fill="#eee"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif">Project Image</text></svg>')}`,    
      technologies: ["NeoPixels", "Solidering", "Arduino", "Bluetooth", "Voice Recognition"],
  },
  {
    id: 5,
    title: "Opera FLyer Design",
    shortdescription:
      "Our assignment was to devlope a unique coloful well designed psoter fpr the colorado opera. We were given to many words to fit on the apge and tasked with creaitng a readible and colorful design on an 11.5 by 17 page",
      image: `data:image/svg+xml;base64,${btoa('<svg xmlns="http://www.w3.org/2000/svg" width="300" height="300"><rect width="100%" height="100%" fill="#eee"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif">Project Image</text></svg>')}`,    
      technologies: ["Adobe Illustrator", "Photoshop", "Adove inDesign"],
  },
  {
    id: 6,
    title: "Soda Cans",
    shortdescription:
      "Using the design skills in our class we were designed with creaitng a brand identity and their packagin and prodyucts within 2 weeks of assignmetn. With this goal in mind I crafted a beverage brand called UnWind, designed for those who want to be able top Unwind after a long day",
    longdescription:
      "A comprehensive analytics dashboard leveraging machine learning for predictive insights and real-time data visualization.",
      image: `data:image/svg+xml;base64,${btoa('<svg xmlns="http://www.w3.org/2000/svg" width="300" height="300"><rect width="100%" height="100%" fill="#eee"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif">Project Image</text></svg>')}`,    
      technologies: ["Adobe Illustrator", "Photoshop", "Adove Dimension"],

  },
  {
    id: 7,
    title: "Client Mathing System",
    shortdescription:
      "A comprehensive analytics dashboard leveraging machine learning for predictive insights and real-time data visualization.",
    longdescription:
      "A comprehensive analytics dashboard leveraging machine learning for predictive insights and real-time data visualization.",
      image: `data:image/svg+xml;base64,${btoa('<svg xmlns="http://www.w3.org/2000/svg" width="300" height="300"><rect width="100%" height="100%" fill="#eee"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif">Project Image</text></svg>')}`,    
      technologies: ["React Native", "Python", "TensorFlow", "MongoDB"],
  },
  {
    id: 8,
    title: "Artfical Intelligence Content Moderation System",
    shortdescription:
      "A comprehensive analytics dashboard leveraging machine learning for predictive insights and real-time data visualization.",
    longdescription:
      "A comprehensive analytics dashboard leveraging machine learning for predictive insights and real-time data visualization.",
      image: `data:image/svg+xml;base64,${btoa('<svg xmlns="http://www.w3.org/2000/svg" width="300" height="300"><rect width="100%" height="100%" fill="#eee"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif">Project Image</text></svg>')}`,    
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
      image: `data:image/svg+xml;base64,${btoa('<svg xmlns="http://www.w3.org/2000/svg" width="300" height="300"><rect width="100%" height="100%" fill="#eee"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif">Project Image</text></svg>')}`,    
      technologies: ["React Native", "Python", "TensorFlow", "MongoDB"],
    link: "#",
  },
  {
    id: 10,
    title: "OpenEMR Patient Management System",
    shortdescription:
      "A comprehensive analytics dashboard leveraging machine learning for predictive insights and real-time data visualization.",
    longdescription:
      "A comprehensive analytics dashboard leveraging machine learning for predictive insights and real-time data visualization.",
      image: `data:image/svg+xml;base64,${btoa('<svg xmlns="http://www.w3.org/2000/svg" width="300" height="300"><rect width="100%" height="100%" fill="#eee"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif">Project Image</text></svg>')}`,    
      technologies: ["React Native", "Python", "TensorFlow", "MongoDB"],
    link: "#",
  },
  {
    id: 11,
    title: "The Oasis",
    shortdescription:
      "While not publicliy avlible tge Oasis platform which while plug into the Pleiades Ecosystem uses over 60 apis, AI, Modern UI/UX dashbaord design and many other top of fields technolgy to provide unique state of the art support. ",
    longdescription:
      "A comprehensive analytics dashboard leveraging machine learning for predictive insights and real-time data visualization.",
    image: `data:image/svg+xml;base64,${btoa('<svg xmlns="http://www.w3.org/2000/svg" width="300" height="300"><rect width="100%" height="100%" fill="#eee"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif">Project Image</text></svg>')}`,
    technologies: ["JavaScript", "Python", "TensorFlow", "Firebase", "Meetup API", "Sound CLoud API", "SORA", "AWS", "HTML", "CSS", "Figma","ManyOthers"],
  },
  {
    id: 11,
    title: "Prompt Engineering and AI Applications",
    shortdescription:
      "Ample experince and understanidng of all leading AI models and their applications inculding numerous API building and AI model devolpment and training through Tensorflow.",
    technologies: ["ChatGPT 4o, 1o, 1o Mini", "Open AI Sora and Dall-e Image Generator", "Claude Sonnet and Claude Projetcs", "Google Gemini and Mulitmodl image Trainer", "TensorFlow", "OpenAi API Trained", "OpenAi Text Reconginizng API"],
  }
];

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
  let carouselHTML = '';
  if (project.images) {
    carouselHTML = `
      <div class="image-carousel">
        <button class="carousel-btn prev">&lt;</button>
        <div class="carousel-container">
          ${project.images.map((img, i) => `
            <img src="${img}" alt="${project.title} image ${i + 1}" class="carousel-image ${i === 0 ? 'active' : ''}" />
          `).join('')}
        </div>
        <button class="carousel-btn next">&gt;</button>
      </div>
    `;
  } else {
    carouselHTML = `<img src="${project.image}" alt="${project.title}" class="modal-image" />`;
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

function updateProjectsGrid(projectsToShow) {
  const projectsGrid = document.getElementById('projectsGrid');
  
  projectsGrid.innerHTML = projectsToShow.map(project => `
    <div class="project-card" onclick="openProjectModal(${project.id})">
      <div class="project-image" style="background-image: url('${project.image}')">
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
  `).join('');
}

function openProjectModal(projectId) {
  const project = projects.find(p => p.id === projectId);
  const modal = document.getElementById('project-modal');
  const modalContent = document.getElementById('modal-content');
  
  modalContent.innerHTML = createModalContent(project);
  modal.classList.add('active');
  
  initializeCarousel();
}
function closeProjectModal() {
  const modal = document.getElementById('project-modal');
  modal.classList.remove('active');
}

// Add click event on projects
function updateProjectsGrid(projectsToShow) {
  const projectsGrid = document.getElementById('projectsGrid');
  
  projectsGrid.innerHTML = projectsToShow.map(project => `
    <div class="project-card" onclick="openProjectModal(${project.id})">
      <div class="project-image" style="background-image: url('${project.image}')">
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
  `).join('');
}

// Close modal when clicking outside content
document.getElementById('project-modal').addEventListener('click', (e) => {
  if (e.target.id === 'project-modal') {
    closeProjectModal();
  }
});
function initializeCarousel() {
  const carousel = document.querySelector('.image-carousel');
  if (!carousel) return;

  const images = carousel.querySelectorAll('.carousel-image');
  let currentIndex = 0;

  carousel.querySelector('.prev').addEventListener('click', () => {
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    images[currentIndex].classList.add('active');
  });

  carousel.querySelector('.next').addEventListener('click', () => {
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].classList.add('active');
  });
}
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

function updateProjectsGrid(projectsToShow) {
  const projectsGrid = document.getElementById('projectsGrid');
  
  projectsGrid.innerHTML = projectsToShow.map(project => `
    <div class="project-card">
      <div class="project-image" style="background-image: url('${project.image}')">
        <div class="project-overlay">
          <span class="view-project">View Details</span>
        </div>
      </div>
      <div class="project-content">
        <h3>${project.title}</h3>
        <p>${project.shortdescription}</p>
        <div class="project-tech">
          ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
        </div>
      </div>
    </div>
  `).join('');
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