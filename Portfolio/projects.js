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
        { 
          title: "Modality Matching", 
          description: "Modality Matching allows users to connect with therapists who practice a style of therapy best suited to an individual’s needs. The platform leverages modern JavaScript and AI techniques to deliver personalized matches based on therapeutic modalities.",
          skills: ["JavaScript", "AI", "Modality"],
          link: "https://example.com/modality-matching" 
        },
        { 
          title: "Personality Matching", 
          description: "Personality Matching enables users to take the Big Five personality screener. Based on the traits they exhibit, the system matches them with therapists whose personality profiles align scientifically, ensuring the best possible therapeutic relationship.",
          skills: ["JavaScript", "CSS", "AI"],
          link: "https://example.com/personality-matching" 
        },
        { 
          title: "Symptom Based Matching", 
          description: "Symptom Based Matching allows users to complete a comprehensive mental health screener that helps diagnose conditions such as anxiety, depression, BPD, addiction, and eating disorders. Once the symptoms are analyzed, the platform connects users with therapists who specialize in addressing their specific needs.",
          skills: ["JavaScript", "AI", "Mental Health"],
          link: "https://example.com/symptom-based-matching" 
        },
        { 
          title: "Main Website", 
          description: "The main website, built entirely from scratch, provides vital information for users and therapists interested in joining our platform. It clearly communicates who we are, what we do, and offers an engaging overview of our services using modern web design practices.",
          skills: ["HTML", "CSS", "JavaScript", "Responsive Design"],
          link: "https://example.com/main-website" 
        },
        { 
          title: "Functioning Sign In and Sign Ups", 
          description: "This project implements a streamlined sign-in and sign-up system that allows therapists and users to create accounts securely. It supports both Google authentication and traditional registration methods, ensuring accurate user information while preventing fraud.",
          skills: ["JavaScript", "Authentication", "Google OAuth", "Security", "Backend Development"],
          link: "https://example.com/sign-in-sign-ups" 
        },
        { 
          title: "Joke API", 
          description: "The Joke API integration displays a daily joke on both client and therapist dashboards, providing users with a quick moment of levity while navigating the platform.",
          skills: ["JavaScript", "API Integration", "REST"],
          link: "https://example.com/joke-api" 
        },
        { 
          title: "Compatibility Matching", 
          description: "Compatibility Matching allows users to input basic information—such as interests, state, insurance type, and price range—which is then analyzed against our extensive therapist database. The system returns the top ten therapists, ranked by a compatibility score out of 100%.",
          skills: ["JavaScript", "Data Matching", "Algorithm Design", "API Integration"],
          link: "https://example.com/compatibility-matching" 
        },
        { 
          title: "Daily Telehealth", 
          description: "Daily Telehealth streamlines online therapy sessions by enabling therapists to set up secure, HIPAA-compliant virtual appointments. Clients can quickly join automated telehealth rooms without any setup hassle, ensuring a smooth and safe experience.",
          skills: ["JavaScript", "Video Conferencing", "Telehealth", "HIPAA Compliance"],
          link: "https://example.com/daily-telehealth" 
        },
        { 
          title: "Scheduling System", 
          description: "The Scheduling System allows users to book appointments with therapists for in-person, hybrid, or online sessions. Therapists can integrate their Google or Outlook calendars and manage their availability using a drag-and-drop interface that automatically generates optimal appointment slots with built-in breaks.",
          skills: ["JavaScript", "Calendar Integration", "Drag-and-Drop UI", "Scheduling Algorithms"],
          link: "https://example.com/scheduling-system" 
        },
        { 
          title: "Encrypted Messaging System", 
          description: "This encrypted messaging system facilitates secure communication between clients and therapists. It enables the exchange of messages, progress updates, and screening responses while ensuring that all sensitive information remains confidential.",
          skills: ["JavaScript", "Encryption", "Messaging", "Security"],
          link: "https://example.com/encrypted-messaging-system" 
        },
        { 
          title: "Screeners and Progress Checks", 
          description: "With just a few clicks, therapists can send progress checks and screening questionnaires to clients. The system also allows for the creation of custom assessments, the use of pre-provided templates, or access to a shared marketplace of templates available to all therapists.",
          skills: ["JavaScript", "UI/UX", "Survey Tools", "Template Management"],
          link: "https://example.com/screeners-progress-checks" 
        },
        { 
          title: "Notes", 
          description: "The tailored notes system enables therapists to create both templated and custom notes for each client. These notes are automatically saved and organized under the user's profile, simplifying the process of attaching them to insurance claims and streamlining administrative tasks.",
          skills: ["JavaScript", "Notes Management", "UI/UX", "Data Storage"],
          link: "https://example.com/notes" 
        },
        { 
          title: "Goodnews Area", 
          description: "Using a built-in RSS reader from the Goodnews Network, the Goodnews Area displays the top five uplifting headlines on the main dashboard. This feature provides users with daily inspiration and access to positive, encouraging news.",
          skills: ["JavaScript", "RSS Integration", "API Integration", "UI/UX"],
          link: "https://example.com/goodness-area" 
        },
        { 
          title: "Weather API", 
          description: "The Weather API integration, available on both client and therapist dashboards, displays current weather information in either Fahrenheit or Celsius. This feature helps users plan their day effectively with real-time weather updates.",
          skills: ["JavaScript", "API Integration", "Weather Data", "Responsive Design"],
          link: "https://example.com/weather-api" 
        }
      ],
      link: "https://pleiadesmh.com/mainwebsite/home.html",
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
        "Garden4.JPG",
        "Garden2.MOV",
        "Garden3.JPG",
        "Garden1.JPG",
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

  export { projects, skills };