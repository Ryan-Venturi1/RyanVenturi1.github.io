const projects = [
  {
    id: 1,
    title: "AI Skin Cancer Detector",
    subtitle: "TensorFlow-Powered Medical Diagnostics",
    shortdescription:
      "A locally trained machine learning model using TensorFlow to detect 25 types of skin cancer with 90% accuracy and under 1% false negatives.",
    longdescription:
      "A comprehensive skin cancer detection system built using machine learning and computer vision technologies. Leveraging a dataset of 25 different skin cancer types containing over 250,000 images, I developed both a front-end interface and backend infrastructure powered by TensorFlow. The TensorFlow model underwent 25 training iterations to achieve an impressive 90% recognition accuracy rate. The system's design prioritizes patient safety by maintaining false negatives under 1% - when uncertain, the model consistently recommends users consult a doctor rather than providing false reassurance. This conservative approach ensures reliable medical guidance for users. Built as a 2-week project, this free, at-home skin cancer detector demonstrates the real-world application potential of machine learning in healthcare. The project showcases advanced TensorFlow implementation and computer vision techniques applied to medical diagnostics. Future development plans include expanding the model to detect acne types, wound infections, and bruising patterns to provide comprehensive at-home health monitoring capabilities. *Note: Currently only the front-end is operational at the live link, as the TensorFlow model has been taken down for computing cost considerations.*",
    images: ["SkinCancer.png"],
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
    images: ["MagicWall.png"],
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
    images: ["Metaapp.png"],
    technologies: [
      "WebXR",
      "JavaScript",
      "HTML",
      "CSS",
      "Three.js",
      "VR Development",
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
    images: ["ARScan.png"],
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
    title: "Pocket Health – AI At-Home Health Monitoring",
    subtitle: "AI-Powered Daily Health Tracking App",
    shortdescription:
      "An AI-powered app for daily at-home health tests, tracking results, and providing personalized recommendations and alerts for early detection of health changes.",
    longdescription:
      "Pocket Health is an innovative health monitoring application designed to empower users to track and manage their well-being from home. Building on the success of my previous skin cancer detector, I developed this project as a class assignment with the goal of enabling users to perform multiple at-home tests and receive actionable recommendations powered by AI. The app supports over 10 different vital system tests—including eyes, hearing, movement, heart, and more—using existing consumer devices. Users can take these tests daily, and the AI system saves results, analyzes trends, and proactively alerts users to any significant changes, both positive and negative. Advanced AI algorithms provide predictive analytics and pattern recognition, helping users catch potential health issues early and celebrate improvements. The vision for Pocket Health includes expanding compatibility to sync with devices like WHOOP bands and Apple Watches, increasing the breadth and depth of health data available for analysis. Developed in just one week, Pocket Health demonstrates the potential of AI to deliver real-time, personalized health insights and recommendations, making preventive care more accessible and actionable for everyone.",
    images: ["PocketHealth.png"],
    technologies: [
      "TensorFlow",
      "AI/ML",
      "React",
      "Development",
      "RealWorld"
    ],
    link: "https://pockethealth.netlify.app/"
  },

  {
    id: 6,
    title: "Apocalypse Water & Power Gravity Battery",
    subtitle: "Fully Remote Gravity Battery and Water Distribution System",
    shortdescription:
      "A large-scale gravity battery and water distribution system using Arduino, solar, Bluetooth, and 3D printing, designed for apocalypse survival and tested on a campus rooftop.",
    longdescription:
      "For my 'Hacking the Apocalypse' class, my group was tasked with designing a system to collect, store, distribute, and treat water, as well as power the system in a doomsday scenario. While my teammates built a 3D-printed water wheel, my main contribution was engineering a fully remote gravity battery and water tower system. The solution used solar panels to charge batteries, which then powered a pump to move water to the top of a tower. When battery levels dropped below 30%, solenoid valves triggered water to flow down through the waterwheel, reclaiming power and distributing water for use. The system featured 4 Arduino nanos with Bluetooth modules, 4 55-gallon barrels, a 60ft water pump, car battery, solenoid valves, and 100ft of PVC pipe. Bluetooth connections allowed for remote control of water flow, and the system ran independently for 7 days with no solar input, or up to 17 years with minimal sunlight. 3D printing enabled precise, watertight pipe fittings and adapters. The project was successfully tested on the roof of the Atlas building at CU Boulder, demonstrating the viability of scalable, scavenged-material batteries and remote water/power distribution in a survival scenario.\n\nWhile the water wheel broke during testing, calculations showed up to 85% power reclamation was possible. The project proved the effectiveness of 3D printing and remote control in doomsday engineering, and was praised for its scale and ingenuity.",
    images: ["GB1.jpg", "GB2.jpg", "GB3.jpg", "GB4.jpg", "GB5.jpg", "GB6.jpg", "GB7.jpg"],
    technologies: [
      "Arduino",
      "Bluetooth",
      "Solar Power",
      "Gravity Battery",
      "3D Printing",
      "Water Distribution",
      "Remote Control",
      "Survival Engineering",
      "Development",
      "RealWorld"
    ]
  },

  {
    id: 10,
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
    id: 11,
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
    id: 12,
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
    id: 13,
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
    id: 14,
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
    id: 15,
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
    id: 16,
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
    id: 17,
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
    id: 18,
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
    id: 19,
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
    id: 20,
    title: "Prompt Engineering and AI Applications",
    shortdescription:
      "Extensive experience with leading AI models and their applications, including API integrations, AI model development, and TensorFlow training.",
    technologies: [
      "ChatGPT 5.0",
      "OpenAI Sora 1/2",
      "GPT Image Generator",
      "Claude (Sonnet 4.5 and Claude Code)",
      "Google Gemini (Multimodal Image Trainer)",
      "TensorFlow",
      "OpenAI API",
      "OpenAI Text Recognition API"
    ]
  },

]

const industryProjects = [
  {
    id: 101,
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
          "Compatibility Matching enables users to enter basic details, such as interests, location, insurance type, and price range, which are analyzed against our extensive therapist database. The system then returns the top ten therapists ranked by a compatibility score out of 100%.",
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
    id: 102,
    title: "A Lot Media AI Engineering Consulting",
    subtitle: "Revolutionary Automated Sales Proposal Pipeline",
    shortdescription:
      "Built a proprietary AI-powered system that revolutionizes the advertising space, enabling A Lot Media's sales team to generate fully researched RFPs in under 5 minutes, down from 2 weeks.",
    longdescription:
      "As an AI Engineering Consultant at A Lot Media, I created an in-house proprietary system that fundamentally transforms how the company approaches advertising sales. The fully automated sales proposal pipeline empowers the A Lot Media sales team to send out perfectly crafted, research-backed RFPs in under 5 minutes; a process that previously took up to 2 weeks. This unprecedented efficiency gain has unlocked massive scalability for the business, allowing the team to pursue exponentially more opportunities while maintaining exceptional proposal quality. The system integrates multiple data sources, AI-driven insights, and visualization tools to create a seamless end-to-end workflow from prospect identification to polished proposal delivery.",
    images: ["a_lot.jpg"],
    technologies: [
      "Google Gemini",
      "Google Maps API",
      "Firebase",
      "JavaScript",
      "Python",
      "Data Engineering",
      "AI Automation",
      "Geospatial Analysis",
      "Development",
      "RealWorld"
    ],
    subprojects: [
      {
        title: "Data Optimization & Classification",
        description:
          "Ingested and organized data from over 8,000 parking lots and 100,000+ additional points of interest into a unified storage system. Using proximity targeting algorithms, I enriched each location with 15-50 relevant nearby businesses and venues across 20 internal real estate classifications. This enables the A Lot Media team to leverage segmented marketing RFPs that target competitors or complementary businesses near their properties, providing clients with a crystal-clear understanding of the strategic value offered.",
        skills: ["Data Engineering", "Classification", "Proximity Targeting", "Python"]
      },
      {
        title: "Maps API Traffic Analysis",
        description:
          "Leveraging the Google Maps API, I developed a system that compares parking lot locations with surrounding area peak traffic estimates. This allows A Lot Media to dynamically segment digital signage costs based on actual foot traffic and impression potential. This traffic-based pricing model is a first-of-its-kind innovation in the parking lot advertising industry, enabling data-driven pricing that accurately reflects true advertising value.",
        skills: ["Google Maps API", "Traffic Analysis", "Dynamic Pricing", "Geospatial Data"]
      },
      {
        title: "Comprehensive Events Database",
        description:
          "Recognizing that many advertising clients prioritize event-based marketing, I built one of the most comprehensive single-source events databases in the industry. The system tracks exactly when every major event is happening, where it's located, and whether A Lot Media has lots within the venue's clear zone or nearby perimeter. This intelligence empowers the sales team to precisely target the right advertisers at the right time for maximum campaign effectiveness.",
        skills: ["Event Data", "Database Architecture", "Sales Intelligence", "API Integration"]
      },
      {
        title: "SST Interactive Map Visualization",
        description:
          "Developed an interactive SST (Sales Support Tool) map that allows the sales team to visualize and compare all parking lot locations, proximity targets, and real estate classifications in one unified interface. Team members can instantly see where lots are positioned, what business categories surround them, and identify neighboring venues; dramatically accelerating the RFP creation process with actionable geographic intelligence.",
        skills: ["Data Visualization", "Interactive Maps", "UI/UX", "JavaScript"]
      },
      {
        title: "Automated Proposal Generation System",
        description:
          "Using the SST platform and integrated data sources, I created an automated proposal system that generates polished, agency-ready RFP templates from scratch in minutes. The system pulls verified data, formats professional documents, and delivers exactly what advertising agencies need, enabling A Lot Media's ad business to scale at unprecedented rates.",
        skills: ["Automation", "Template Generation", "Document Processing", "Sales Enablement"]
      },
      {
        title: "Gemini Gem Internal AI Assistant",
        description:
          "Developed a private internal Gemini Gem trained on A Lot Media's proprietary company data. This AI assistant can answer any employee question, generate charts and visualizations, create maps, produce documentation, and assist with research tasks on demand. The Gem serves as an always-available knowledge base that accelerates decision-making across the entire organization.",
        skills: ["Google Gemini", "Custom AI Training", "Knowledge Management", "Enterprise AI"]
      }
    ]
  },

  {
    id: 103,
    title: "FreeGuides AI Engineering",
    subtitle: "Hospitality Platform AI Infrastructure",
    shortdescription:
      "Developed three major AI-driven systems for FreeGuides: an automated demo generator, a cost-saving map recommendation system, and an encrypted group chat platform, now deployed across 200+ hotels worldwide.",
    longdescription:
      "During my internship at FreeGuides, I was responsible for building and deploying multiple AI-powered systems that transformed the company's hospitality platform. My work modernized over 50% of the existing codebase, cut API costs by 85%, and contributed to a 50% increase in demos generated. These systems now serve 20,000+ daily guests across 100+ hotels and 25+ brands, demonstrating significant real-world impact and scalability.",
    images: ["freeguide.svg"],
    technologies: [
      "GPT-4.0",
      "Google Gemini",
      "Firebase",
      "React",
      "JavaScript",
      "Google Places API",
      "End-to-End Encryption",
      "AI Automation",
      "Development",
      "RealWorld"
    ],
    subprojects: [
      {
        title: "Agentic AI Hotel Demo Generator",
        description:
          "A transformative business solution that addressed FreeGuides' critical growth bottleneck: demo creation. Through analysis, I identified that providing hotel demos resulted in an 85% sign-up rate within the first week, but the 2.5-hour creation time severely limited scalability. My AI-powered demo generation system revolutionized this process, reducing creation time to just 20 minutes, a 750% efficiency improvement that enabled 5x more demos per time period. The system leverages a sophisticated multi-AI architecture including GPT-4.0, DALL-E for image generation, and Google's Gemini 2.5 Flash and Gemini 1.5 Pro/Flash models. From minimal input (hotel name, location, city, brand requirements, and restaurants), the system generates comprehensive hotel compendiums including check-in/check-out times, WiFi details, room accommodations, welcome sections, area history, and hotel background. Integration with Google Places API enables real-world data population, automatically incorporating 27 actual local attractions. A secondary AI agent handles data formatting, converting all generated content into proper JSON format and automatically exporting to Firebase for immediate live frontend viewing.",
        skills: ["GPT-4.0", "DALL-E", "Google Gemini", "Firebase", "AI Automation"],
        images: ["FreeGuides.png"]
      },
      {
        title: "Map View Recommendation System",
        description:
          "Redesigned the hotel guest-facing recommendation system, which accounted for a fifth of the platform and was the most expensive feature due to repeated API calls. The old UI was poor and each recommendation cost the company around 50 cents, severely limiting scalability. I built a new map view recommendation system that fetches the Google Places API only once per user, caches results, and displays dynamic, filterable pins for satellite view, price, distance, and average rating. The system features a responsive map view for all devices, filter tags, and a modal for each recommendation showing images, name, distance, price, reviews, hours, service options, action buttons, and hotel insights. My caching system ensures data is always up to date, automatically refetching and purging every 3 months, and saving data to Firebase for all users after the first guest views it. This solution eliminated the startup's scalability risk, cut costs by thousands monthly, and is now live in over 100 hotels, serving 20,000+ daily guests and 25,000+ rooms across 25+ brands. The CEO called it the most value-add feature of the platform.",
        skills: ["React", "Firebase", "Google Places API", "Caching", "UI/UX"],
        link: "https://profile.freeguides.com/fZSetuEu14h1IBw9QWm5UKhIaC22",
        images: ["Map.png"]
      },
      {
        title: "Encrypted Group Chat System",
        description:
          "Identified a critical gap in how hotel guests communicate with each other and with property staff. I designed and built a fully encrypted group chat system from the ground up, specifically tailored for the hospitality industry. The platform enables guests to safely connect, share recommendations, coordinate activities, and build community; all within a secure, privacy-first environment. Beyond basic messaging, I developed a comprehensive community reporting system per FreeGuides' specifications, allowing guests and staff to flag inappropriate content while maintaining user anonymity. The moderation pipeline ensures swift response times while protecting guest privacy. After extensive iteration and rigorous testing across multiple properties, the system has been successfully deployed to over 200 hostels and hotels globally. The platform now facilitates thousands of daily conversations, fostering genuine connections between travelers while giving property managers peace of mind through robust security protocols and community guidelines enforcement.",
        skills: ["End-to-End Encryption", "Real-Time Messaging", "Firebase", "Content Moderation"],
        images: ["FreeGuides.png"]
      }
    ]
  },

  {
    id: 104,
    title: "JWM1 Open Source Robotic Platform(Current Project)",
    subtitle: "Autonomous Delivery Robot Built in Partnership with EndOverdose",
    shortdescription:
      "Currently developing an open-source autonomous delivery robot using NVIDIA Omniverse simulation, custom-trained vision models, LIDAR, Cameras, Ultra Sonic Sensors, and Gemini-powered reinforcement learning. Version one is being developed with support from End Overdose to create a robot that responds to overdoses 5 minutes quicker than EMS",
    longdescription:
      "JWM1 is an ambitious open-source robotics project built in partnership with EndOverdose, aimed at creating a fully autonomous sidewalk delivery robot. The project spans hardware design, supply chain navigation, advanced computer vision training, and cutting-edge simulation environments. Using NVIDIA Omniverse, I've created a physics-accurate simulation of the CU Boulder campus by overlaying to-scale Google Maps tiles, integrating OpenStreetMap sidewalk data, and populating the environment with realistic pedestrian, cyclist, and scooter traffic patterns. The simulation models everything from chaotic passing periods to empty nighttime sidewalks, enabling the robot to learn safe navigation across diverse real-world conditions. A key innovation is replacing traditional rule-based reinforcement learning rewards with a comprehensive sidewalk safety manual evaluated by Gemini 3.0 Flash. This AI-judged approach improved overall model accuracy by 7-11%, producing a simulation-ready model prepared for real-world deployment.",
    images: ["JWM1.png"],
    technologies: [
      "NVIDIA Omniverse",
      "Google Gemini",
      "TensorFlow",
      "Python",
      "Computer Vision",
      "Reinforcement Learning",
      "CAD",
      "Robotics",
      "OpenStreetMap",
      "Google Maps API",
      "Development",
      "RealWorld"
    ],
    subprojects: [
      {
        title: "CADing the Robot",
        description:
          "Designed the complete mechanical chassis and housing for the JWM1 robot using professional CAD software. The design optimizes for manufacturability, durability, and modularity, allowing for easy component replacement and future upgrades. Every structural element was engineered to withstand outdoor conditions while maintaining a compact footprint suitable for sidewalk navigation.",
        skills: ["CAD", "Mechanical Design", "3D Modeling", "Prototyping"]
      },
      {
        title: "Navigating Tariffs & Supply Chain",
        description:
          "Managed the complex logistics of sourcing components across international supply chains while navigating evolving tariff landscapes. Identified cost-effective suppliers, negotiated pricing, and developed contingency plans for component availability, ensuring the project remains financially viable and on schedule despite global trade uncertainties.",
        skills: ["Supply Chain Management", "Procurement", "Cost Analysis", "Logistics"]
      },
      {
        title: "BDD100K Dataset Training",
        description:
          "Leveraged the Berkeley DeepDrive BDD100K dataset, one of the largest and most diverse driving datasets available, to pre-train the robot's vision model. This foundation enables robust object detection, lane recognition, and scene understanding across varied weather conditions, lighting scenarios, and urban environments.",
        skills: ["Computer Vision", "Deep Learning", "Dataset Training", "TensorFlow"]
      },
      {
        title: "Cityscapes Training System",
        description:
          "Supplemented BDD100K training with the Cityscapes dataset to enhance semantic segmentation capabilities. This additional training sharpened the model's ability to identify and classify pedestrians, cyclists, vehicles, road surfaces, and sidewalk boundaries with pixel-level precision, critical for safe autonomous navigation.",
        skills: ["Semantic Segmentation", "Computer Vision", "Model Training", "Python"]
      },
      {
        title: "Remote Operating Dashboard",
        description:
          "Built a comprehensive remote monitoring and control dashboard that enables operators to oversee robot status, intervene when necessary, and analyze performance metrics in real-time. The interface provides live video feeds, sensor data visualization, route tracking, and emergency stop capabilities for safe deployment supervision.",
        skills: ["Dashboard Development", "Real-Time Systems", "UI/UX", "JavaScript"]
      },
      {
        title: "NVIDIA Omniverse Simulation Environment",
        description:
          "Created an advanced physics simulation in NVIDIA Omniverse starting with pre-trained vision models from BDD100K and Cityscapes. Overlayed a to-scale Google Maps tile of the CU Boulder campus, then integrated OpenStreetMap data to accurately map sidewalk paths. Populated the environment with asset library models simulating students walking, biking, and riding scooters during chaotic passing periods, empty nighttime conditions, and every scenario in between. Innovatively replaced traditional RL rule sets with a comprehensive sidewalk safety instruction manual evaluated by Gemini 3.0 Flash. The AI judges robot performance and assigns rewards/penalties, improving overall model accuracy by 7-11% and producing a simulation-ready model for real-world testing.",
        skills: ["NVIDIA Omniverse", "Physics Simulation", "Reinforcement Learning", "Google Gemini", "Geospatial Data"]
      },
      {
        title: "Assembly & Integration",
        description:
          "Bringing together all hardware and software components into a functioning autonomous platform. This phase involves precise assembly of mechanical parts, electronic integration, sensor calibration, and software deployment, transforming months of design, training, and simulation work into a physical robot ready for real-world testing.",
        skills: ["Hardware Assembly", "Electronics Integration", "System Calibration", "Testing"]
      }
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

  export { projects, industryProjects, skills };