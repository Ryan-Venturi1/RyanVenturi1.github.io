// Initialize GSAP
gsap.registerPlugin(ScrollTrigger);
    
// Project data
const projects = [
    {
        title: "AI-Powered Analytics",
        description: `A comprehensive analytics platform leveraging machine learning for predictive insights. 
                    Features include real-time data visualization, automated reporting, and AI-driven recommendations.`,
        technologies: ["React", "TensorFlow", "Node.js", "D3.js"],
        images: ["project1-1.jpg", "project1-2.jpg"],
        link: "#",
        github: "#"
    },
    // Add more project data...
];

// Loading screen
window.addEventListener('load', () => {
    gsap.to('.loading-screen', {
        opacity: 0,
        duration: 0.5,
        onComplete: () => {
            document.querySelector('.loading-screen').style.display = 'none';
            initializeAnimations();
        }
    });
});

// Initialize all animations
function initializeAnimations() {
    // Hero section animations
    gsap.from('.hero-text', {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power4.out"
    });

    gsap.from('.hero-description', {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        ease: "power4.out"
    });

    // Scroll-triggered animations
    gsap.utils.toArray('.project-card').forEach((card, i) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: "top bottom-=100",
                toggleActions: "play none none reverse"
            },
            y: 100,
            opacity: 0,
            duration: 0.8,
            delay: i * 0.2
        });
    });

    // Skill bars animation
    gsap.utils.toArray('.skill-bar-fill').forEach(bar => {
        const width = bar.getAttribute('data-width');
        gsap.to(bar, {
            scrollTrigger: {
                trigger: bar,
                start: "top bottom-=100",
                toggleActions: "play none none reverse"
            },
            width: width + '%',
            duration: 1.5,
            ease: "power4.out"
        });
    });
}

// Smooth scrolling
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth'
    });
    updateActiveSection(sectionId);
}

// Update active navigation
function updateActiveSection(sectionId) {
    document.querySelectorAll('.nav button').forEach(button => {
        button.classList.remove('active');
    });
    document.querySelector(`button[onclick="scrollToSection('${sectionId}')"]`).classList.add('active');
}

// Project modal
function openProjectModal(index) {
    const project = projects[index];
    const modal = document.getElementById('project-modal');
    const content = document.getElementById('modal-content');

    content.innerHTML = `
        <h2>${project.title}</h2>
        <p>${project.description}</p>
        <div class="project-tech">
            ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
        </div>
        <div class="project-links">
            <a href="${project.link}" target="_blank">Live Demo</a>
            <a href="${project.github}" target="_blank">GitHub</a>
        </div>
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
    const modal = document.getElementById('project-modal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Form handling
function handleSubmit(event) {
    event.preventDefault();
    // Add your form submission logic here
    alert('Message sent! (Demo)');
}

// Intersection Observer for section detection
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            updateActiveSection(entry.target.id);
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Initialize Three.js background
function initThreeBackground() {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('particles-container').appendChild(renderer.domElement);

    // Add particles
    const geometry = new THREE.BufferGeometry();
    const vertices = [];
    for (let i = 0; i < 5000; i++) {
        vertices.push(
            Math.random() * 2000 - 1000,
            Math.random() * 2000 - 1000,
            Math.random() * 2000 - 1000
        );
    }
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
    const material = new THREE.PointsMaterial({ color: 0x8B5CF6, size: 2 });
    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    camera.position.z = 1000;

    function animate() {
        requestAnimationFrame(animate);
        particles.rotation.x += 0.0001;
        particles.rotation.y += 0.0001;
        renderer.render(scene, camera);
    }
    animate();

    // Handle window resize
    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
}

// Initialize everything
document.addEventListener('DOMContentLoaded', () => {
    initThreeBackground();
});