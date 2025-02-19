const projects = [
  {
    id: 1,
    title: "Pleiades Mental Health",
    subtitle: "AI-Powered Mental Health Platform",
    shortdescription:
      "Pleiades Mental Health is the leading preventive mental health care platform that helps users receive better therapy and enables therapists to provide superior care.",
    longdescription:
      "As the founder of Pleiades Mental Health, I developed a state-of-the-art preventive mental health platform. Our mission is to onboard clients at the first sign of mental health symptoms, providing treatment and support while teaching effective coping strategies. In addition to a comprehensive suite of self-help and community tools, our platform saves therapists time, streamlines operations, and offers data-driven insights to track client progress and reduce burnout. Click below to learn about all the platform offerings, including a comprehensive analytics dashboard that leverages machine learning for predictive insights and real-time data visualization.",
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
        description:
          "Modality Matching connects users with therapists who specialize in the therapy styles that best suit their individual needs. Leveraging modern JavaScript and AI techniques, the system delivers personalized matches based on therapeutic modalities.",
        skills: ["JavaScript", "AI", "Modality"],
        link: "https://example.com/modality-matching" 
      },
      { 
        title: "Personality Matching", 
        description:
          "Personality Matching allows users to complete a Big Five personality assessment. Based on their results, the system matches them with therapists whose personality profiles align, ensuring an optimal therapeutic relationship.",
        skills: ["JavaScript", "CSS", "AI"],
        link: "https://example.com/personality-matching" 
      },
      { 
        title: "Symptom Based Matching", 
        description:
          "Symptom Based Matching enables users to complete a comprehensive mental health screener to identify conditions such as anxiety, depression, BPD, addiction, and eating disorders. Once the symptoms are analyzed, the platform connects users with therapists specialized in addressing their specific needs.",
        skills: ["JavaScript", "AI", "Mental Health"],
        link: "https://example.com/symptom-based-matching" 
      },
      { 
        title: "Main Website", 
        description:
          "The main website, built entirely from scratch, provides essential information for users and therapists. It clearly communicates our mission, services, and values through engaging modern web design.",
        skills: ["HTML", "CSS", "JavaScript", "Responsive Design"],
        link: "https://example.com/main-website" 
      },
      { 
        title: "Functioning Sign In and Sign Ups", 
        description:
          "This project implements a streamlined sign-in and sign-up system that enables therapists and users to securely create accounts. It supports both Google authentication and traditional registration methods, ensuring accurate user information and fraud prevention.",
        skills: ["JavaScript", "Authentication", "Google OAuth", "Security", "Backend Development"],
        link: "https://example.com/sign-in-sign-ups" 
      },
      { 
        title: "Joke API", 
        description:
          "The Joke API integration displays a daily joke on both client and therapist dashboards, offering users a light-hearted moment as they navigate the platform.",
        skills: ["JavaScript", "API Integration", "REST"],
        link: "https://example.com/joke-api" 
      },
      { 
        title: "Compatibility Matching", 
        description:
          "Compatibility Matching enables users to enter basic details—such as interests, location, insurance type, and price range—which are analyzed against our extensive therapist database. The system then returns the top ten therapists ranked by a compatibility score out of 100%.",
        skills: ["JavaScript", "Data Matching", "Algorithm Design", "API Integration"],
        link: "https://example.com/compatibility-matching" 
      },
      { 
        title: "Daily Telehealth", 
        description:
          "Daily Telehealth streamlines online therapy sessions by allowing therapists to set up secure, HIPAA-compliant virtual appointments. Clients can quickly join automated telehealth rooms without any setup hassle, ensuring a smooth and safe experience.",
        skills: ["JavaScript", "Video Conferencing", "Telehealth", "HIPAA Compliance"],
        link: "https://example.com/daily-telehealth" 
      },
      { 
        title: "Scheduling System", 
        description:
          "The Scheduling System enables users to book appointments with therapists for in-person, hybrid, or online sessions. Therapists can integrate their Google or Outlook calendars and manage their availability using a drag-and-drop interface that automatically generates optimal appointment slots with built-in breaks.",
        skills: ["JavaScript", "Calendar Integration", "Drag-and-Drop UI", "Scheduling Algorithms"],
        link: "https://example.com/scheduling-system" 
      },
      { 
        title: "Encrypted Messaging System", 
        description:
          "This encrypted messaging system enables secure communication between clients and therapists. It supports the exchange of messages, progress updates, and screening responses while keeping all sensitive information confidential.",
        skills: ["JavaScript", "Encryption", "Messaging", "Security"],
        link: "https://example.com/encrypted-messaging-system" 
      },
      { 
        title: "Screeners and Progress Checks", 
        description:
          "Therapists can easily send progress checks and screening questionnaires to clients with just a few clicks. The system also allows the creation of custom assessments, the use of pre-designed templates, or access to a shared marketplace of templates for all therapists.",
        skills: ["JavaScript", "UI/UX", "Survey Tools", "Template Management"],
        link: "https://example.com/screeners-progress-checks" 
      },
      { 
        title: "Notes", 
        description:
          "The tailored notes system enables therapists to create both templated and custom notes for each client. These notes are automatically saved and organized under the user's profile, simplifying insurance claims and administrative tasks.",
        skills: ["JavaScript", "Notes Management", "UI/UX", "Data Storage"],
        link: "https://example.com/notes" 
      },
      { 
        title: "Goodnews Area", 
        description:
          "The Goodnews Area uses a built-in RSS reader from the Goodnews Network to display the top five uplifting headlines on the main dashboard, providing users with daily inspiration and positive news.",
        skills: ["JavaScript", "RSS Integration", "API Integration", "UI/UX"],
        link: "https://example.com/goodness-area" 
      },
      { 
        title: "Weather API", 
        description:
          "The Weather API integration, available on both client and therapist dashboards, displays current weather information in Fahrenheit or Celsius, helping users plan their day with real-time updates.",
        skills: ["JavaScript", "API Integration", "Weather Data", "Responsive Design"],
        link: "https://example.com/weather-api" 
      }
    ],
    link: "https://pleiadesmh.com/mainwebsite/home.html"
  },

  {
    id: 2,
    title: "IvySky",
    shortdescription: "A mental health nonprofit designed by teens for teens.",
    longdescription:
      "As the former CEO and Founder—while still a high school sophomore—I set out to build an app that revolutionizes how people access mental health treatment. This journey led us to create a free resource platform that combines open-source content with in-house materials to help teens develop effective coping mechanisms. At its peak, IvySky—operating as a fully registered 501(c)(3)—assisted teens in need with a team of 55 therapists, developers, marketers, and doctors, securing up to $60,000 in funding and reaching 500 daily active users. We are currently developing a new platform. Click below to learn more about IvySky.",
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
      "State-of-the-art autonomous garden system powered by Arduino",
    longdescription:
      "A fully automated and interactive garden that uses various codes and sensors to grow 35 plants and 15 flowers with automated lighting, watering, and feeding. Built for an Arduino class, the project utilized pumps, relays, breadboards, and 20 water sensors for independent readings in each bed. I purchased and precisely cut wood boards, cut ten 12-inch PVC pipes to exact specifications, and 3D-printed 24 joints designed and scaled in Onshape. The entire garden, including the wiring, was designed and built in Onshape.",
    images: [
      "Garden4.JPG",
      "Garden2.MOV",
      "Garden3.JPG",
      "Garden1.JPG"
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
    skills: [
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
      "Bluetooth-Connected Voice-Activated Desk Lighting System",
    longdescription:
      "A desk lighting system that uses Arduino and Bluetooth to control desk lights. Built for an Arduino class, it supports 25 programmable voice commands that can be trained and reprogrammed. With simple voice commands, you can change the lighting color or setting. Although challenging, integrating Bluetooth and voice recognition enabled complete customization of the system’s placement and functionality.",
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
      "A design challenge to create a new poster for the Colorado Opera that incorporates all text from their schedule.",
    longdescription:
      "Our assignment was to design a unique, colorful poster for the Colorado Opera. We had to incorporate an excessive amount of text from their schedule into an 11.5 x 17-inch layout while ensuring the design remained both readable and visually appealing.",
    images: [
      "text1.png",
      "text2.png"
    ],
    technologies: ["Adobe Illustrator", "Photoshop", "Adobe InDesign"]
  },

  {
    id: 6,
    title: "Soda Cans",
    shortdescription:
      "Brand identity and packaging design challenge for a fictional beverage company",
    longdescription:
      "In a class design challenge, we were tasked with creating a brand identity, packaging, and products within two weeks. I developed a beverage brand called 'UnWind', designed for individuals looking to relax after a long day.",
    images: [
      "soda1.png",
      "soda2.png",
      "soda3.png",
      "soda4.png",
      "soda5.png"
    ],
    technologies: ["Adobe Illustrator", "Photoshop", "Adobe Dimension"]
  },

  {
    id: 7,
    title: "Client Matching System",
    shortdescription:
      "State-of-the-art AI-driven matching system to help clients find the right therapist.",
    longdescription:
      "Using a combination of pattern recognition AI and traditional algorithms, we created a system that allows users to find the right therapist based on whether they are looking for someone who matches their support style, personality, or specializes in the mental health issue they need help with. This system provides users with options and narrows down the list of therapists to find the best match, enabling better support from day one.",
    images: [
      "match1.png",
      "match2.png",
      "match3.png",
      "match4.png",
      "match5.png"
    ],
    technologies: ["React Native", "Python", "TensorFlow", "MongoDB"]
  },

  {
    id: 8,
    title: "Artificial Intelligence Content Moderation System",
    shortdescription:
      "AI-driven content moderation system for a community platform, achieving 98% accuracy and continuously improving with each input.",
    longdescription:
      "Using the OpenAI Content Moderator API and TensorFlow, I developed a multimodal input system capable of analyzing all types of user-generated content—including files, images, audio, video, and text—to accurately determine safe and unsafe content. With 98% accuracy and a continuously learning model, the system automatically updates content guidelines by adding or removing content as needed. This approach fosters safe, user-friendly communication while maintaining community standards.",
    images: [
      "AiModerator.mp4"
    ],
    technologies: ["React Native", "Python", "TensorFlow", "MongoDB"],
    link: "#",
    github: "#"
  },

  {
    id: 9,
    title: "Encrypted Messaging System",
    shortdescription:
      "Proprietary HIPAA-compliant encrypted messaging system for therapists and clients, enabling safe yet accessible communication.",
    longdescription:
      "Using modern encryption standards, we built a messaging system on our platform that enables safe and accessible communication between therapists and clients. This system simplifies support by allowing therapists to send homework, screeners, progress checks, and other essential information directly to clients without relying on email or other insecure methods.",
    images: [
      "message.png"
    ],
    technologies: ["React Native", "Python", "TensorFlow", "MongoDB"],
    link: "#"
  },

  {
    id: 10,
    title: "OpenEMR Patient Management System",
    shortdescription:
      "A proprietary patient management system for Pleiades, built on the open-source OpenEMR system.",
    longdescription:
      "This system facilitates payments, insurance processing, and claim submissions for our clients. It enables our therapists to run faster, more efficient practices while keeping their data secure, allowing them to focus more on patient care.",
    images: [
      "OPENEMR.png",
      "OPENEmr1.png",
      "OPENEMR2.png"
    ],
    technologies: ["React Native", "Python", "TensorFlow", "MongoDB"],
    link: "#"
  },

  {
    id: 11,
    title: "The Oasis",
    shortdescription:
      "Although not publicly available, the Oasis platform—integrated within the Pleiades ecosystem—utilizes over 60 APIs, AI, modern UI/UX dashboard design, and other cutting-edge technologies to deliver unique, state-of-the-art support.",
    longdescription:
      "A comprehensive analytics dashboard that leverages machine learning for predictive insights and real-time data visualization.",
    images: [
      "oasis.png",
      "oasis1.png",
      "oasis2.png",
      "oasis3.png",
      "oasis4.png",
      "oasis5.png"
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
      "Extensive experience with leading AI models and their applications, including API integrations, AI model development, and TensorFlow training.",
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