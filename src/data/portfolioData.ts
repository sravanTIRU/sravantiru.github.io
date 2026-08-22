export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  shortDesc: string;
  longDesc: string;
  technologies: string[];
  features: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  location?: string;
  isCurrent: boolean;
  type: "academic" | "internship" | "industry";
  responsibilities: string[];
  keyHighlights: string[];
  technologies: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  status: string;
  highlights?: string;
  project?: {
    title: string;
    description: string;
    technologies: string[];
  };
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  year: string;
  category:
    | "Full Stack"
    | "Cloud"
    | "Programming"
    | "Academic"
    | "Web Fundamentals";
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: string[];
  iconName: string;
}

export const portfolioData = {
  personal: {
    fullName: "T G Sravan Teja",
    displayName: "T G Sravan Teja",
    headline: "Computer Applications | AI | Software Development",
    roles: [
      "Software Developer",
      "AI & Machine Learning Educator",
      "Postgraduate Scholar",
      "Full-Stack & Cloud Practitioner",
    ],
    currentRole: "Junior Lecturer at Vignan University",
    pursuingDegree: "M.Tech Scholar (2026 – 2028)",
    location: "Andhra Pradesh, India",
    email: "your.email@example.com", // Replace with your actual email
    phone: "+91 98765 43210", // Replace with your actual phone number
    linkedin: "https://linkedin.com/in/your-profile", // Replace with your actual LinkedIn profile
    github: "https://github.com/your-username", // Replace with your actual GitHub username
    resumeFileName: "T_G_Sravan_Teja_Resume.docx",
    resumeDownloadPath: "/T_G_Sravan_Teja_Resume.docx",
    coreStatement:
      "I build software, explore AI, teach technology, and continuously learn through practical projects and research.",
    professionalSummary:
      "Postgraduate in Computer Applications with hands-on experience in software development and teaching Artificial Intelligence. Skilled in modern web technologies, cloud concepts, and data handling. Seeking opportunities to contribute to impactful projects, research, or academic roles while applying strong technical and analytical skills.",
    careerObjective:
      "Open to software development, teaching, or research roles with opportunities for learning and innovation.",
    aboutNarrative: [
      "I am a passionate technologist and educator bridging the worlds of software engineering, artificial intelligence, and academic mentorship. With a Master of Computer Applications (MCA) and currently pursuing my Master of Technology (M.Tech) at Vignan University, my journey centers on building resilient software systems and understanding the mechanics behind intelligent algorithms.",
      "As a Junior Lecturer at Vignan University, I teach Artificial Intelligence to undergraduate engineering students, demystifying machine learning fundamentals and guiding hands-on laboratory implementations. Teaching sharpens my engineering discipline—explaining complex algorithms from first principles deepens my own system design intuition.",
      "My technical foundation spans full-stack engineering with Angular and Spring Boot, algorithmic data processing with Python, Django, and PostgreSQL, as well as cloud-native deployment principles on AWS, Docker, and Jenkins. Whether crafting responsive user interfaces, designing secure REST APIs, or exploring data cleansing algorithms, I am driven by practical problem-solving, clean code, and continuous learning.",
    ],
  },

  careerInterests: [
    {
      title: "Software Development",
      description:
        "Developing robust full-stack applications, scalable backend microservices, RESTful APIs, and responsive frontends using modern frameworks like Spring Boot, Angular, and Python.",
      icon: "Code2",
    },
    {
      title: "Teaching & Mentorship",
      description:
        "Educating aspiring engineers in Artificial Intelligence and Machine Learning fundamentals, creating structured laboratory curricula, and fostering strong programming discipline.",
      icon: "GraduationCap",
    },
    {
      title: "Research & Applied AI",
      description:
        "Investigating algorithmic data cleansing, string similarity metrics, and applied machine learning methodologies to solve real-world data integrity and automation challenges.",
      icon: "Cpu",
    },
  ],

  experiences: [
    {
      id: "vignan-lecturer",
      role: "Junior Lecturer",
      organization: "Vignan University",
      period: "Jun 2025 – Present",
      location: "Guntur, Andhra Pradesh, India",
      isCurrent: true,
      type: "academic",
      responsibilities: [
        "Teaching Artificial Intelligence (AI) to undergraduate students, covering machine learning fundamentals, algorithms, and practical implementations.",
        "Designing lab assignments and mentoring students on AI projects and research.",
        "Promoting programming discipline and effective communication in academic settings.",
      ],
      keyHighlights: [
        "Undergraduate AI Curriculum Delivery",
        "Practical ML & Algorithm Lab Design",
        "Student Research Project Mentorship",
        "Academic & Technical Communication",
      ],
      technologies: [
        "Python",
        "Machine Learning",
        "AI Algorithms",
        "Academic Pedagogy",
      ],
    },
    {
      id: "verizon-cloud",
      role: "Cloud Platform Virtual Internship",
      organization: "Verizon – Forage",
      period: "May 2024 – Jun 2024",
      location: "Virtual",
      isCurrent: false,
      type: "internship",
      responsibilities: [
        "Tested cloud-native traits including redundancy, resiliency, and least-privilege using Python and AWS principles.",
        "Delivered insights through technical presentations and documentation.",
      ],
      keyHighlights: [
        "Cloud-Native Resiliency & Redundancy Testing",
        "Least-Privilege Security Principles",
        "Technical Documentation & Presentation",
      ],
      technologies: [
        "AWS",
        "Python",
        "Cloud Security",
        "IAM",
        "Resiliency Engineering",
      ],
    },
    {
      id: "covalense-intern",
      role: "Intern",
      organization: "Covalense Global",
      period: "Dec 2024 – Jan 2025",
      location: "India",
      isCurrent: false,
      type: "internship",
      responsibilities: [
        "Gained exposure to enterprise workflows, connecting theoretical learning with applied software development.",
      ],
      keyHighlights: [
        "Enterprise Software Development Workflows",
        "Industry Best Practices & Version Control",
        "Applied Systems Integration",
      ],
      technologies: [
        "Enterprise Workflows",
        "Applied Software Engineering",
        "Git",
      ],
    },
  ] as ExperienceItem[],

  education: [
    {
      id: "mtech",
      degree: "Master of Technology (M.Tech)",
      institution: "Vignan University",
      period: "2026 – 2028",
      status: "Pursuing",
      highlights:
        "Advanced postgraduate engineering studies focusing on modern computing systems, artificial intelligence, and applied research methodologies.",
    },
    {
      id: "mca",
      degree: "Master of Computer Applications (MCA)",
      institution: "Acharya Nagarjuna University",
      period: "2022 – 2024",
      status: "Completed",
      highlights:
        "Comprehensive postgraduate degree in computer science, software architectures, database design, and systems engineering.",
      project: {
        title: "String Similarity and Database Cleansing",
        description:
          "Implemented a high-precision hash-based string similarity search algorithm using Python, Django, and PostgreSQL to eliminate duplicate records and cleanse enterprise database entries.",
        technologies: [
          "Python",
          "Django",
          "PostgreSQL",
          "Hash Algorithms",
          "Database Cleansing",
        ],
      },
    },
    {
      id: "bsc",
      degree: "Bachelor of Science (BSc)",
      institution: "Acharya Nagarjuna University",
      period: "2019 – 2022",
      status: "Completed",
      highlights:
        "Undergraduate degree establishing foundational analytical thinking, computational mathematics, and fundamental programming principles.",
    },
  ] as EducationItem[],

  projects: [
    {
      id: "task-management",
      title: "Task Management Application",
      category: "Full-Stack Enterprise App",
      shortDesc:
        "A responsive task orchestration application built with Angular v20 and Spring Boot with JWT authentication.",
      longDesc:
        "Architected a full-stack task management platform utilizing Angular v20 on the frontend and Spring Boot on the backend. Designed secure RESTful API endpoints, stateful user management, and token-based JWT authentication for access control.",
      technologies: [
        "Angular v20",
        "Spring Boot",
        "JWT Authentication",
        "REST APIs",
        "User Management",
        "Java",
        "TypeScript",
      ],
      features: [
        "Responsive SPA user interface built on Angular v20",
        "Secure backend REST APIs engineered with Spring Boot",
        "Stateless JSON Web Token (JWT) authorization & session security",
        "CRUD operations for dynamic task boards and user profile management",
      ],
      featured: true,
    },
    {
      id: "string-similarity",
      title: "String Similarity & Database Cleansing",
      category: "Data Engineering & Algorithms",
      shortDesc:
        "A database cleansing solution leveraging hash-based string similarity algorithms in Python, Django & PostgreSQL.",
      longDesc:
        "Engineered a robust database deduplication and cleansing system designed to identify lexical variations and typographic anomalies in relational databases using hash-based string similarity algorithms.",
      technologies: [
        "Python",
        "Django",
        "PostgreSQL",
        "Hash Algorithms",
        "Database Cleansing",
        "SQL",
      ],
      features: [
        "Hash-based string similarity search for rapid fuzzy record matching",
        "Automated database cleansing pipeline to ensure data integrity",
        "Django ORM architecture interfacing with PostgreSQL",
        "Optimized query execution for large dataset deduplication",
      ],
      featured: true,
    },
    {
      id: "high-card-duel",
      title: "High Card Duel (CLI Game)",
      category: "Game Logic & Python CLI",
      shortDesc:
        "A command-line interactive card simulation implementing turn-based game logic and score tracking.",
      longDesc:
        "Created an interactive terminal-based card duel game in Python, simulating turn-based state management, card deck generation, round scoring logic, and player statistics tracking.",
      technologies: [
        "Python",
        "CLI Architecture",
        "Game Logic",
        "Score Tracking",
        "Object-Oriented Programming",
      ],
      features: [
        "Turn-based game loop simulation with deck distribution",
        "Automated score calculation and victor determination",
        "Formatted terminal display with interactive prompts",
        "Clean object-oriented Python structure",
      ],
      featured: false,
    },
    {
      id: "weather-app",
      title: "Weather App",
      category: "Frontend & API Integration",
      shortDesc:
        "A real-time weather application with device geolocation discovery and temperature-unit toggling.",
      longDesc:
        "Developed a responsive JavaScript web application integrating with the OpenWeatherMap API to provide live atmospheric reports, dynamic location lookup, and seamless temperature-unit conversions.",
      technologies: [
        "JavaScript",
        "OpenWeatherMap API",
        "HTML5",
        "CSS3",
        "Geolocation API",
      ],
      features: [
        "Live weather data consumption from OpenWeatherMap REST API",
        "Browser Geolocation integration for automated current-location weather",
        "Interactive unit toggle between Celsius and Fahrenheit",
        "Dynamic UI with meteorological condition displays",
      ],
      featured: false,
    },
    {
      id: "qr-code-generator",
      title: "QR Code Generator",
      category: "Utility & Tooling",
      shortDesc:
        "A Python utility generating customizable QR codes from URLs for marketing and accessibility.",
      longDesc:
        "Built an efficient Python utility that encodes web URLs into high-fidelity QR codes, aiding digital marketing campaigns, document distribution, and mobile accessibility.",
      technologies: [
        "Python",
        "QR Code Generation",
        "Image Processing",
        "Automation",
      ],
      features: [
        "Instant QR code encoding from arbitrary URLs and data strings",
        "Export capabilities for digital and print distribution",
        "Streamlined script execution for rapid batch or single generation",
        "Utility-focused Python architecture",
      ],
      featured: false,
    },
  ] as ProjectItem[],

  technicalSkills: {
    programming: {
      category: "Programming",
      description:
        "Core languages for software development, algorithmic problem-solving, and system logic.",
      skills: ["Python", "Java", "JavaScript", "SQL"],
      icon: "Code",
    },
    webBackend: {
      category: "Web & Backend",
      description:
        "Frontend frameworks, styling libraries, and enterprise backend architectures.",
      skills: ["Angular", "Spring Boot", "HTML", "CSS", "Bootstrap"],
      icon: "Layers",
    },
    databases: {
      category: "Databases",
      description:
        "Relational database management systems, relational schema design, and query optimization.",
      skills: ["MySQL", "PostgreSQL"],
      icon: "Database",
    },
    cloudDevOps: {
      category: "Cloud & DevOps",
      description:
        "Cloud computing infrastructure, containerization, and continuous integration pipelines.",
      skills: [
        "AWS (EC2, S3, IAM, Route53, Auto Scaling)",
        "Docker",
        "Jenkins",
      ],
      icon: "Cloud",
    },
    toolsPlatforms: {
      category: "Tools & Platforms",
      description:
        "Version control systems, development environments, and operating systems.",
      skills: [
        "Git",
        "GitHub",
        "VS Code",
        "PyCharm",
        "Amazon Linux",
        "Windows",
      ],
      icon: "Terminal",
    },
    softSkills: {
      category: "Professional & Soft Skills",
      description:
        "Interpersonal communication, team leadership, and analytical execution.",
      skills: [
        "Leadership",
        "Collaboration",
        "Time Management",
        "Analytical Thinking",
      ],
      icon: "Sparkles",
    },
  },

  teachingAndResearch: {
    title: "AI & Teaching",
    subtitle: "Educating Future Engineers & Guiding AI Exploration",
    role: "Junior Lecturer at Vignan University",
    tenure: "Jun 2025 – Present",
    overview:
      "In my role as Junior Lecturer at Vignan University, I bridge theoretical concepts and hands-on software development by teaching Artificial Intelligence to undergraduate engineering students.",
    pillars: [
      {
        title: "Artificial Intelligence Foundations",
        description:
          "Teaching core AI principles, search algorithms, decision systems, and foundational machine learning concepts to undergraduate students.",
        icon: "Brain",
      },
      {
        title: "Practical Laboratory Curriculum",
        description:
          "Designing and leading structured laboratory sessions where students implement algorithms, evaluate models, and write clean, maintainable Python code.",
        icon: "FlaskConical",
      },
      {
        title: "Project Mentorship & Research",
        description:
          "Guiding undergraduate student teams through real-world AI projects, code reviews, problem structuring, and research-oriented exploration.",
        icon: "Users",
      },
      {
        title: "Engineering Discipline & Rigor",
        description:
          "Cultivating professional programming standards, version control hygiene, and clear technical communication in academic environments.",
        icon: "Award",
      },
    ],
  },

  certifications: [
    {
      id: "cert-1",
      title: "Java Full Stack with Angular and Spring Boot",
      issuer: "Udemy",
      year: "2024",
      category: "Full Stack",
    },
    {
      id: "cert-2",
      title: "Verizon Cloud Platform Job Simulation",
      issuer: "Forage",
      year: "2024",
      category: "Cloud",
    },
    {
      id: "cert-3",
      title: "Complete Python Bootcamp",
      issuer: "Udemy",
      year: "2024",
      category: "Programming",
    },
    {
      id: "cert-4",
      title: "Life Skills",
      issuer: "Acharya Nagarjuna University",
      year: "2023",
      category: "Academic",
    },
    {
      id: "cert-5",
      title: "Consumer Behaviour and Market Research",
      issuer: "Acharya Nagarjuna University",
      year: "2023",
      category: "Academic",
    },
    {
      id: "cert-6",
      title: "Internet Fundamentals",
      issuer: "Codedamn",
      year: "2022",
      category: "Web Fundamentals",
    },
    {
      id: "cert-7",
      title: "Advanced HTML and CSS Concepts",
      issuer: "Codedamn",
      year: "2022",
      category: "Web Fundamentals",
    },
  ] as CertificationItem[],

  navLinks: [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Teaching", href: "#teaching" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" },
  ],
};
