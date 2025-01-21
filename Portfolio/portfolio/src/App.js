// App.js
import React, { useState, useRef } from 'react';
import { Camera, Mail, User, Briefcase, Home, Github, Linkedin, Twitter, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Project Modal Component
const ProjectModal = ({ project, onClose }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-gray-900 rounded-xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={e => e.stopPropagation()}
      >
        <div className="mb-6">
          <div className={`h-64 rounded-lg mb-4 ${project.color}`} />
          <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
          <p className="text-gray-300 mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map(tech => (
              <span key={tech} className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300">
                {tech}
              </span>
            ))}
          </div>
          <div className="flex gap-4">
            <a href={project.liveLink} target="_blank" rel="noopener noreferrer" 
               className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg text-white transition-colors">
              <ExternalLink size={16} /> Live Demo
            </a>
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer"
               className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-white transition-colors">
              <Github size={16} /> View Code
            </a>
          </div>
        </div>
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          ×
        </button>
      </motion.div>
    </motion.div>
  );
};

// Navigation Component
const Navigation = ({ currentSection, setCurrentSection }) => {
  return (
    <nav className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-black/20 backdrop-blur-lg rounded-full p-4 z-50">
      <ul className="flex space-x-8">
        {[
          { icon: <Home />, section: 'home' },
          { icon: <Briefcase />, section: 'projects' },
          { icon: <User />, section: 'about' },
          { icon: <Mail />, section: 'contact' }
        ].map(({ icon, section }) => (
          <li key={section}>
            <button
              onClick={() => {
                setCurrentSection(section);
                document.getElementById(section).scrollIntoView({ behavior: 'smooth' });
              }}
              className={`p-2 rounded-full transition-all duration-300 ${
                currentSection === section 
                  ? 'bg-purple-600 text-white scale-110' 
                  : 'text-gray-400 hover:text-white hover:scale-105'
              }`}
            >
              {icon}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

// Home Page Component
const HomePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden"
      id="home"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-black to-blue-600 z-0" />
      
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        className="z-10 text-center"
      >
        <h1 className="text-6xl font-bold text-white mb-6">
          Creative
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            {" "}Tech Designer
          </span>
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-12">
          Crafting digital experiences that blend creativity with functionality
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
          className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full font-bold transition-colors"
        >
          View My Work
        </motion.button>
      </motion.div>

      <motion.div
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-32 text-white opacity-50 cursor-pointer"
        onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
      >
        <p>Scroll to explore</p>
      </motion.div>
    </motion.div>
  );
};
const AboutPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen p-8 pt-16 bg-gradient-to-br from-gray-900 to-black"
      id="about"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ x: -50 }}
          animate={{ x: 0 }}
          className="mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-6">About Me</h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            I'm a creative technologist and designer passionate about bringing innovative ideas to life through code and design. With a background in both development and user experience, I create digital solutions that are both beautiful and functional.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <div className="bg-gray-800/50 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4">Skills</h3>
            <div className="space-y-4">
              {[
                { skill: "Frontend Development", level: 90 },
                { skill: "UI/UX Design", level: 85 },
                { skill: "Creative Coding", level: 80 },
                { skill: "3D Modeling", level: 75 }
              ].map(({ skill, level }) => (
                <div key={skill}>
                  <div className="flex justify-between text-gray-300 mb-2">
                    <span>{skill}</span>
                    <span>{level}%</span>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${level}%` }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-800/50 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4">Experience</h3>
            <div className="space-y-6">
              {[
                {
                  role: "Senior Designer",
                  company: "Creative Tech Co",
                  period: "2022 - Present",
                  description: "Leading design initiatives and collaborating with development teams."
                },
                {
                  role: "UI Developer",
                  company: "Digital Solutions Inc",
                  period: "2020 - 2022",
                  description: "Developed responsive web applications and interactive interfaces."
                }
              ].map(({ role, company, period, description }) => (
                <motion.div
                  key={role}
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="border-l-2 border-purple-500 pl-4"
                >
                  <h4 className="text-white font-bold">{role}</h4>
                  <p className="text-gray-400">{company}</p>
                  <p className="text-gray-500 text-sm">{period}</p>
                  <p className="text-gray-400 mt-2">{description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

// Contact Page Component
const ContactPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen p-8 pt-16 bg-gradient-to-br from-purple-900 to-black"
      id="contact"
    >
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Get in Touch</h2>
          <p className="text-gray-300">Let's collaborate on something amazing</p>
        </motion.div>

        <motion.form
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          className="space-y-6"
          onSubmit={(e) => {
            e.preventDefault();
            // Add your form submission logic here
          }}
        >
          <div className="space-y-4">
            <div>
              <label className="block text-gray-300 mb-2">Name</label>
              <input
                type="text"
                className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors"
                placeholder="Your name"
                required
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-2">Email</label>
              <input
                type="email"
                className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors"
                placeholder="your.email@example.com"
                required
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-2">Message</label>
              <textarea
                className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors h-32"
                placeholder="Your message..."
                required
              />
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-3 rounded-lg hover:opacity-90 transition-opacity"
            type="submit"
          >
            Send Message
          </motion.button>

          <div className="flex justify-center space-x-6 mt-12">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
               className="text-gray-400 hover:text-white transition-colors">
              <Github size={24} />
            </a>
            <a href="mailto:your.email@example.com"
               className="text-gray-400 hover:text-white transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </motion.form>
      </div>
    </motion.div>
  );
};

// Projects Page Component
const ProjectsPage = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  
  const projects = [
    {
      title: "Interactive Dashboard",
      description: "A real-time analytics dashboard with dynamic data visualization. Features include customizable widgets, real-time data updates, and responsive design.",
      tech: ["React", "D3.js", "Node.js", "Socket.IO"],
      color: "bg-gradient-to-r from-purple-500 to-pink-500",
      liveLink: "#",
      githubLink: "#"
    },
    {
      title: "Mobile App Design",
      description: "User-centered design for a meditation and wellness application. Includes features for guided meditation, sleep tracking, and mood journaling.",
      tech: ["Figma", "Adobe XD", "Protopie"],
      color: "bg-gradient-to-r from-blue-500 to-teal-500",
      liveLink: "#",
      githubLink: "#"
    },
    {
      title: "E-commerce Platform",
      description: "Full-stack development of a modern e-commerce solution with features like real-time inventory management, secure payments, and admin dashboard.",
      tech: ["Next.js", "Tailwind", "Stripe"],
      color: "bg-gradient-to-r from-orange-500 to-red-500",
      liveLink: "#",
      githubLink: "#"
    },
    {
      title: "AI Image Generator",
      description: "A web application that uses machine learning to generate unique artwork based on text descriptions.",
      tech: ["Python", "TensorFlow", "React", "Flask"],
      color: "bg-gradient-to-r from-green-500 to-teal-500",
      liveLink: "#",
      githubLink: "#"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen p-8 pt-16 bg-black"
      id="projects"
    >
      <h2 className="text-4xl font-bold text-white mb-12">Featured Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="bg-gray-900 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer"
            onClick={() => setSelectedProject(project)}
          >
            <div className={`h-48 ${project.color}`} />
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map(tech => (
                  <span key={tech} className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// About Page Component (Rest of the components remain the same...)

// Main App Component
const Portfolio = () => {
  const [currentSection, setCurrentSection] = useState('home');

  // Update active section based on scroll position
  React.useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'projects', 'about', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setCurrentSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-black">
      <HomePage />
      <ProjectsPage />
      <AboutPage />
      <ContactPage />
      <Navigation currentSection={currentSection} setCurrentSection={setCurrentSection} />
    </div>
  );
};

export default Portfolio;