const projects = [
  {
    id: 1,
    title: "AI Skin Cancer Detector",
    subtitle: "TensorFlow-Powered Medical Diagnostics",
    shortdescription:
      "A locally trained machine learning model using TensorFlow to detect 25 types of skin cancer with 90% accuracy and under 1% false negatives.",
    longdescription:
      "A comprehensive skin cancer detection system built using machine learning and computer vision technologies. Leveraging a dataset of 25 different skin cancer types containing over 250,000 images, I developed both a front-end interface and backend infrastructure powered by TensorFlow. The TensorFlow model underwent 25 training iterations to achieve an impressive 90% recognition accuracy rate. The system's design prioritizes patient safety by maintaining false negatives under 1% - when uncertain, the model consistently recommends users consult a doctor rather than providing false reassurance. This conservative approach ensures reliable medical guidance for users. Built as a 2-week project, this free, at-home skin cancer detector demonstrates the real-world application potential of machine learning in healthcare. The project showcases advanced TensorFlow implementation and computer vision techniques applied to medical diagnostics. Future development plans include expanding the model to detect acne types, wound infections, and bruising patterns to provide comprehensive at-home health monitoring capabilities. *Note: Currently only the front-end is operational at the live link, as the TensorFlow model has been taken down for computing cost considerations.*",
    images: [],
    technologies: [
      "TensorFlow",
      "Python",
      "JavaScript",
      "HTML",
      "CSS",
      "Machine Learning",
      "Computer Vision",
      "Medical AI"
    ],
    link: "https://warm-panda-1f5f57.netlify.app/"
  },

  {
    id: 2,
    title: "Paradise VR Soundscape",
    subtitle: "Immersive WebXR Virtual Reality Experience",
    shortdescription:
      "An immersive WebXR virtual reality experience featuring dynamic 3D environments synchronized with nature sounds and music, accessible on Meta Quest 3 and all WebXR devices.",
    longdescription:
      "An advanced virtual reality project that showcases the full potential of immersive VR technology, specifically developed for the Meta Quest 3 platform. This innovative web application creates a virtual soundscape that mirrors the functionality of Samsung's 2D wall display but extends it into a fully immersive 3D environment. The platform features over 8 integrated nature sounds accessible through APIs, combined with 4 automatically shuffled radio playlists sourced from SoundCloud's free URL service. Using Three.js for sophisticated 3D animations, I developed over 20 distinct immersive experiences ranging from nightclub-style environments to mesmerizing visual displays that respond dynamically to the audio. The application's therapeutic potential is significant - it could be expanded to assist individuals with anxiety by providing calming, meditative environments. The backgrounds rotate in randomized sequences and fully synchronize with the music, creating a seamless audio-visual experience. Built with WebXR compatibility, the application works across all WebXR-enabled devices, with full 2D and 3D music controls. The project demonstrates advanced understanding of VR development, spatial audio integration, and cross-platform compatibility in virtual reality environments. This project represents a significant step in my exploration of VR as a Meta developer and showcases the potential for therapeutic applications in virtual reality experiences.",
    images: [],
    technologies: [
      "WebXR",
      "Three.js",
      "JavaScript",
      "Meta Quest 3",
      "SoundCloud API",
      "HTML",
      "CSS",
      "VR Development",
      "Spatial Audio"
    ],
    link: "https://paradisemh.netlify.app/"
  },

  {
    id: 3,
    title: "Meta OS VR Interface Clone",
    subtitle: "WebXR-Based Virtual Operating System",
    shortdescription:
      "A functional Meta OS replica built in WebXR, featuring movable tabs, window creation, live widgets, and VR system interaction across all VR-enabled devices.",
    longdescription:
      "A comprehensive exploration of Meta OS development that addresses the limitations of the existing ecosystem. While Meta OS presents a clean and modern interface, the development experience is hindered by outdated hardware, closed APIs, and challenging underlying code architecture. Built as a one-week class project, this functional Meta OS replica demonstrates the potential for more accessible VR operating system development. The system successfully implements core Meta OS features including movable tabs, dynamic window creation, live widget functionality, and comprehensive VR space interaction. Developed using WebXR framework, the application ensures cross-platform compatibility, allowing any VR-enabled device to connect and interact with the virtual operating system. This approach overcomes many of the hardware limitations present in the official Meta OS development environment. While the visual polish may not match the original Meta OS aesthetic, the project successfully proves the concept of building accessible VR operating systems using open web technologies. The implementation showcases the potential for developers to create VR interfaces without being constrained by proprietary development tools and closed ecosystems. This project represents a significant step toward democratizing VR operating system development and highlights the possibilities of WebXR as a platform for immersive computing experiences.",
    images: [],
    technologies: [
      "WebXR",
      "JavaScript",
      "HTML",
      "CSS",
      "Three.js",
      "VR Development",
      "Meta OS",
      "Operating Systems"
    ],
    link: "https://part4.netlify.app/"
  },

  {
    id: 4,
    title: "AR Nutrition Scanner",
    subtitle: "Augmented Reality Health & Nutrition Tool",
    shortdescription:
      "An augmented reality barcode scanner with AR overlay that displays nutrition facts, healthiness scores, and product comparisons for informed grocery shopping decisions.",
    longdescription:
      "An innovative solution addressing the challenge of making informed nutritional choices while grocery shopping. Modern nutrition labeling often makes it difficult to quickly assess what's healthy and what isn't, especially when comparing multiple products. This AR-enabled barcode scanner transforms the shopping experience by providing instant, comprehensive nutritional information through augmented reality overlays. Using a phone or VR device, users can scan any product to spawn an interactive AR tab displaying detailed nutrition facts and calculated healthiness scores. The system leverages device orientation data available on most Android and iOS devices to create seamless AR experiences. A standout feature is the ability to scan and compare up to 10 products simultaneously, with each window dynamically generated to show real, accurate information sourced from open-source nutrition APIs. Built as a two-week class project, the application demonstrates the practical application of AR technology in everyday decision-making. The cross-platform compatibility ensures accessibility across all devices, making healthy choices more accessible to a broader audience. Future development plans include integrating machine learning and computer vision capabilities to enable product recognition through simple photography, eliminating the need for barcode scanning while maintaining the same comprehensive nutritional analysis. This project showcases the potential for AR technology to solve real-world problems and empower consumers to make better health decisions through accessible, accurate information.",
    images: [],
    technologies: [
      "Augmented Reality",
      "JavaScript",
      "HTML",
      "CSS",
      "Barcode Scanning",
      "Nutrition APIs",
      "Mobile Development",
      "Computer Vision"
    ],
    link: "https://arfoodnutritionapp.netlify.app/"
  },

  {
    id: 5,
    title: "AI-Powered Hotel Demo Generator",
    subtitle: "Multi-AI Business Automation System",
    shortdescription:
      "An automated demo creation system that reduced hotel demo production time from 2.5 hours to 20 minutes, powered by multiple AI models and enabling 5x faster business scaling.",
    longdescription:
      "A transformative business solution developed during my internship at FreeGuides that addressed the company's critical growth bottleneck: demo creation. Through analysis, I identified that providing hotel demos resulted in an 85% sign-up rate within the first week, but the 2.5-hour creation time severely limited scalability. My AI-powered demo generation system revolutionized this process, reducing creation time to just 20 minutes - a 750% efficiency improvement that enabled 5x more demos per time period. The system leverages a sophisticated multi-AI architecture including GPT-4.0, DALL-E for image generation, and Google's Gemini 2.5 Flash and Gemini 1.5 Pro/Flash models. The streamlined input process requires only basic hotel information: name, location links, city, brand requirements, and on-property restaurants. From this minimal input, the system generates comprehensive hotel compendiums including check-in/check-out times, WiFi details, room accommodations, welcome sections, area history, and hotel background. Integration with Google Places API enables real-world data population, automatically incorporating 27 actual local attractions to create accurate recommendation sections. The image generation component produces custom tour guides, introduction materials, cover photos, tour stops, scripts, and proprietary tour elements - all simultaneously. A secondary AI agent handles data formatting, converting all generated content into proper JSON format and automatically exporting to Firebase for immediate live frontend viewing. The entire pipeline from input to published demo is fully automated. Since implementation two weeks ago (as of July 8th), the system has enabled the onboarding of over 50 additional hotels, demonstrating significant business impact and scalability improvements for the company's growth strategy. *Note: Live demo unavailable due to proprietary use by internship company.*",
    images: [],
    technologies: [
      "GPT-4.0",
      "DALL-E",
      "Google Gemini",
      "Google Places API",
      "Firebase",
      "JavaScript",
      "JSON",
      "AI Automation"
    ]
  },

  {
    id: 6,
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
        link: "https://pleiadesmh.com/mainwebsite/modalitymatching.html" 
      },
      { 
        title: "Personality Matching", 
        description:
          "Personality Matching allows users to complete a Big Five personality assessment. Based on their results, the system matches them with therapists whose personality profiles align, ensuring an optimal therapeutic relationship.",
        skills: ["JavaScript", "CSS", "AI"],
        link: "https://pleiadesmh.com/mainwebsite/personalitytest.html" 
      },
      { 
        title: "Symptom Based Matching", 
        description:
          "Symptom Based Matching enables users to complete a comprehensive mental health screener to identify conditions such as anxiety, depression, BPD, addiction, and eating disorders. Once the symptoms are analyzed, the platform connects users with therapists specialized in addressing their specific needs.",
        skills: ["JavaScript", "AI", "Mental Health"],
        link: "https://pleiadesmh.com/mainwebsite/test.html" 
      },
      { 
        title: "Main Website", 
        description:
          "The main website, built entirely from scratch, provides essential information for users and therapists. It clearly communicates our mission, services, and values through engaging modern web design.",
        skills: ["HTML", "CSS", "JavaScript", "Responsive Design"],
        link: "https://pleiadesmh.com/mainwebsite/home.html" 
      },
      { 
        title: "Functioning Sign In and Sign Ups", 
        description:
          "This project implements a streamlined sign-in and sign-up system that enables therapists and users to securely create accounts. It supports both Google authentication and traditional registration methods, ensuring accurate user information and fraud prevention.",
        skills: ["JavaScript", "Authentication", "Google OAuth", "Security", "Backend Development"],
        link: "https://pleiadesmh.com/Authentication/sign-up-client.html" 
      },
      { 
        title: "Joke API", 
        description:
          "The Joke API integration displays a daily joke on both client and therapist dashboards, offering users a light-hearted moment as they navigate the platform.",
        skills: ["JavaScript", "API Integration", "REST"],
        link: "https://pleiadesmh.com/ClientSide/overview.html" 
      },
      { 
        title: "Compatibility Matching", 
        description:
          "Compatibility Matching enables users to enter basic details—such as interests, location, insurance type, and price range—which are analyzed against our extensive therapist database. The system then returns the top ten therapists ranked by a compatibility score out of 100%.",
        skills: ["JavaScript", "Data Matching", "Algorithm Design", "API Integration"],
        link: "https://pleiadesmh.com/ClientSide/viewcompatibletherapists.html" 
      },
      { 
        title: "Daily Telehealth", 
        description:
          "Daily Telehealth streamlines online therapy sessions by allowing therapists to set up secure, HIPAA-compliant virtual appointments. Clients can quickly join automated telehealth rooms without any setup hassle, ensuring a smooth and safe experience.",
        skills: ["JavaScript", "Video Conferencing", "Telehealth", "HIPAA Compliance"],
      },
      { 
        title: "Scheduling System", 
        description:
          "The Scheduling System enables users to book appointments with therapists for in-person, hybrid, or online sessions. Therapists can integrate their Google or Outlook calendars and manage their availability using a drag-and-drop interface that automatically generates optimal appointment slots with built-in breaks.",
        skills: ["JavaScript", "Calendar Integration", "Drag-and-Drop UI", "Scheduling Algorithms"],
      },
      { 
        title: "Encrypted Messaging System", 
        description:
          "This encrypted messaging system enables secure communication between clients and therapists. It supports the exchange of messages, progress updates, and screening responses while keeping all sensitive information confidential.",
        skills: ["JavaScript", "Encryption", "Messaging", "Security"],
      },
      { 
        title: "Screeners and Progress Checks", 
        description:
          "Therapists can easily send progress checks and screening questionnaires to clients with just a few clicks. The system also allows the creation of custom assessments, the use of pre-designed templates, or access to a shared marketplace of templates for all therapists.",
        skills: ["JavaScript", "UI/UX", "Survey Tools", "Template Management"],
      },
      { 
        title: "Notes", 
        description:
          "The tailored notes system enables therapists to create both templated and custom notes for each client. These notes are automatically saved and organized under the user's profile, simplifying insurance claims and administrative tasks.",
        skills: ["JavaScript", "Notes Management", "UI/UX", "Data Storage"],
      },
      { 
        title: "Goodnews Area", 
        description:
          "The Goodnews Area uses a built-in RSS reader from the Goodnews Network to display the top five uplifting headlines on the main dashboard, providing users with daily inspiration and positive news.",
        skills: ["JavaScript", "RSS Integration", "API Integration", "UI/UX"],
        link: "https://pleiadesmh.com/ClientSide/overview.html" 
      },
      { 
        title: "Weather API", 
        description:
          "The Weather API integration, available on both client and therapist dashboards, displays current weather information in Fahrenheit or Celsius, helping users plan their day with real-time updates.",
        skills: ["JavaScript", "API Integration", "Weather Data", "Responsive Design"],
        link: "https://pleiadesmh.com/ClientSide/overview.html" 
      }
    ],
    link: "https://pleiadesmh.com/mainwebsite/home.html"
  },

  {
    id: 7,
    title: "IvySky",
    shortdescription: "A mental health nonprofit designed by teens for teens.",
    longdescription:
      "As the former CEO and Founder—while still a high school sophomore—I set out to build an app that revolutionizes how people access mental health treatment. This journey led us to create a free resource platform that combines open-source content with in-house materials to help teens develop effective coping mechanisms. At its peak, IvySky—operating as a fully registered 501(c)(3)—assisted teens in need with a team of 55 therapists, developers, marketers, and doctors, securing up to $60,000 in funding and reaching 500 daily active users. We are currently developing a new platform. Click below to learn more about IvySky.",
    images: ["ivysky.png"],
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
    id: 8,
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
    id: 9,
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
    id: 10,
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
    id: 11,
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
    id: 12,
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
    id: 13,
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
    id: 14,
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
    id: 15,
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
    id: 16,
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
    id: 17,
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