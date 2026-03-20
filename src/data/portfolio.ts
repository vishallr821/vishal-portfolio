export const personalInfo = {
  name: "Vishal L.R",
  title: "AI Engineer & Full-Stack Developer",
  tagline: "Building intelligent, scalable systems at the intersection of AI, Computer Vision & Modern Web.",
  email: "vishallr821@gmail.com",
  phone: "+91 8838748254",
  github: "https://github.com/vishallr821",
  linkedin: "https://www.linkedin.com/in/vishallr821/",
  location: "Trichy, Tamil Nadu, India",
  college: "SRM TRP Engineering College",
  degree: "B.Tech — Artificial Intelligence & Data Science",
  cgpa: "8.45",
  duration: "2024 – 2028",
  bio: `Passionate AI engineer and full-stack developer with a strong foundation in building
  intelligent, scalable systems. I thrive at the intersection of AI, computer vision, and
  modern web technologies — from offline face recognition to LLM-powered platforms.
  Driven by a hands-on approach to problem solving and a track record of competitive
  technical event wins.`,
  openTo: "Internships & Full-time Roles",
};

export const projects = [
  {
    id: 1,
    title: "GD Analyzer — Real-time AI Interview Analysis",
    description:
      "Real-time Group Discussion analyzer evaluating communication and leadership via speaker diarization + Whisper transcription. Multi-threaded pipeline (Audio → Diarization → LLM) generates structured scorecards for reasoning, confidence, and clarity.",
    techStack: ["Python", "Streamlit", "Pyannote", "Whisper", "OpenAI", "Groq", "Multithreading"],
    category: "AI / LLM",
    type: "project",
    githubUrl: "#",
    demoUrl: "",
  },
  {
    id: 2,
    title: "HireVerse — AI Recruitment & Proctored Assessment",
    description:
      "Full-stack recruitment platform with resume screening, proctored tests, and coding evaluation using Docker-isolated execution. AI proctoring (OpenCV) detects head movement, multiple faces, and violations with end-to-end weighted candidate ranking.",
    techStack: ["Django", "FastAPI", "OpenCV", "Docker", "PostgreSQL", "Monaco Editor"],
    category: "Full-Stack AI",
    type: "project",
    githubUrl: "#",
    demoUrl: "",
  },
  {
    id: 3,
    title: "EduVision — Offline Face Recognition Attendance",
    description:
      "Offline-first Android app using FaceNet (TFLite) for on-device face embedding with HNSW vector search via ObjectBox. Features liveness detection + cosine similarity, built with Clean Architecture + MVVM design.",
    techStack: ["Kotlin", "Jetpack Compose", "TensorFlow Lite", "ML Kit", "ObjectBox"],
    category: "Mobile AI",
    type: "project",
    githubUrl: "#",
    demoUrl: "",
  },
  {
    id: 4,
    title: "CareBot Connect — AI Hospital Management System",
    description:
      "Multi-tenant HMS with LLM-powered conversational booking (Groq API) and event-driven SSE streaming for real-time responses. Includes full OPD/IPD, billing, pharmacy, and lab modules.",
    techStack: ["React", "TypeScript", "Node.js", "Express", "Prisma", "SQLite", "Groq API"],
    category: "Full-Stack AI",
    type: "project",
    githubUrl: "#",
    demoUrl: "",
  },
  {
    id: 5,
    title: "Hospital Management System — Next.js",
    description:
      "Role-based modules for Receptionist & Doctor with real-time scheduling, Prisma ORM on Supabase, and automated A4 prescription generation.",
    techStack: ["Next.js", "TypeScript", "Prisma", "Supabase", "TailwindCSS"],
    category: "Full-Stack",
    type: "project",
    githubUrl: "#",
    demoUrl: "",
  },
  {
    id: 6,
    title: "LiFi-Based Vehicle Authentication",
    description:
      "LiFi signal processing system for real-time data transmission via light signals. Demonstrated during NAAC visit and presented at MEDARZT'25 National Symposium.",
    techStack: ["LiFi", "Signal Processing", "Hardware Integration", "Embedded Systems"],
    category: "Hardware / Embedded",
    type: "project",
    githubUrl: "",
    demoUrl: "",
  },
];

export const hackathons = [
  {
    id: 1,
    medal: "🥈",
    rank: "2nd Place",
    title: "HackwithMagnus 2026 Grand Finale",
    project: "EduVision — Offline Face Recognition Attendance",
    description:
      "Team 'Pro Bots' won ₹10,000 cash prize for building an offline face recognition attendance system.",
    techStack: ["Kotlin", "TensorFlow Lite", "FaceNet", "ObjectBox"],
    year: "2026",
  },
  {
    id: 2,
    medal: "🥉",
    rank: "3rd Place",
    title: "SRM TRP Ideathon 2025",
    project: "PantryIQ — AI-Powered Smart Kitchen Assistant",
    description: "Competed against 60+ teams with an AI-powered smart kitchen assistant.",
    techStack: ["AI", "LLM", "Python"],
    year: "2025 (Oct)",
  },
  {
    id: 3,
    medal: "🥈",
    rank: "2× 2nd Prize",
    title: "TECHUTSAV'25 PANORAMA — Thiagarajar College of Engineering",
    project: "Cyber Security ('No Way Out') & Creative ('Irungbhai')",
    description:
      "Won 2nd prize in both Cyber Security and Creative events at a national-level symposium.",
    techStack: ["Cyber Security", "Steganography", "Digital Forensics"],
    year: "2025",
  },
  {
    id: 4,
    medal: "🏆",
    rank: "1st Prize",
    title: "Prompt Engineering — TechFlare 2k25",
    project: "Prompt Engineering Competition",
    description:
      "Won 1st prize in the Prompt Engineering competition at Dhanalakshmi Srinivasan University.",
    techStack: ["Prompt Engineering", "LLMs", "Generative AI"],
    year: "2025",
  },
  {
    id: 5,
    medal: "🥉",
    rank: "2nd Runner-Up",
    title: "MEDARZT'25 — SRM Valliammai Engineering College",
    project: "LiFi-Based Vehicle Authentication",
    description: "Presented LiFi-based vehicle authentication at a national symposium.",
    techStack: ["LiFi", "Signal Processing", "Embedded Systems"],
    year: "2025",
  },
];

export const skills = [
  {
    category: "Languages",
    icon: "💻",
    items: [
      { name: "Python", level: "Advanced" },
      { name: "TypeScript", level: "Intermediate" },
      { name: "JavaScript", level: "Intermediate" },
      { name: "Kotlin", level: "Intermediate" },
      { name: "SQL", level: "Intermediate" },
    ],
  },
  {
    category: "AI & ML",
    icon: "🤖",
    items: [
      { name: "LLMs (OpenAI, Groq)", level: "Advanced" },
      { name: "Whisper ASR", level: "Advanced" },
      { name: "Speaker Diarization", level: "Intermediate" },
      { name: "Face Recognition (FaceNet)", level: "Advanced" },
      { name: "TensorFlow Lite", level: "Intermediate" },
      { name: "OpenCV", level: "Advanced" },
      { name: "RAG", level: "Intermediate" },
      { name: "Prompt Engineering", level: "Advanced" },
    ],
  },
  {
    category: "Web & Backend",
    icon: "🌐",
    items: [
      { name: "React", level: "Advanced" },
      { name: "Next.js", level: "Advanced" },
      { name: "Node.js", level: "Intermediate" },
      { name: "FastAPI", level: "Intermediate" },
      { name: "Django", level: "Intermediate" },
      { name: "Express", level: "Intermediate" },
      { name: "Streamlit", level: "Advanced" },
      { name: "REST APIs", level: "Advanced" },
    ],
  },
  {
    category: "Databases & ORM",
    icon: "🗄️",
    items: [
      { name: "PostgreSQL", level: "Intermediate" },
      { name: "Supabase", level: "Intermediate" },
      { name: "SQLite", level: "Intermediate" },
      { name: "Prisma ORM", level: "Intermediate" },
      { name: "ObjectBox (HNSW)", level: "Intermediate" },
    ],
  },
  {
    category: "DevOps & Tools",
    icon: "🛠️",
    items: [
      { name: "Docker", level: "Intermediate" },
      { name: "Git & GitHub", level: "Advanced" },
      { name: "Linux", level: "Intermediate" },
      { name: "Subprocess Isolation", level: "Intermediate" },
    ],
  },
  {
    category: "Mobile",
    icon: "📱",
    items: [
      { name: "Android (Kotlin)", level: "Intermediate" },
      { name: "Jetpack Compose", level: "Intermediate" },
      { name: "MVVM / Clean Architecture", level: "Intermediate" },
      { name: "ML Kit / MediaPipe", level: "Intermediate" },
    ],
  },
];

export const certifications = [
  // ── INFOSYS SPRINGBOARD ──────────────────────────────────────────
  {
    id: 1,
    title: "Introduction to Machine Learning",
    issuer: "Infosys Springboard",
    issuerShort: "Infosys",
    issuerColor: "#007CC3",
    category: "AI & ML",
    date: "February 20, 2026",
    credentialUrl: "/certificates/infosys-intro-ml.pdf",
    credentialId: "",
    note: "Course Completion Certificate",
  },
  {
    id: 2,
    title: "Machine Learning Implementation",
    issuer: "Infosys Springboard",
    issuerShort: "Infosys",
    issuerColor: "#007CC3",
    category: "AI & ML",
    date: "February 20, 2026",
    credentialUrl: "/certificates/infosys-ml-implementation.pdf",
    credentialId: "",
    note: "Course Completion Certificate",
  },

  // ── MONGODB ──────────────────────────────────────────────────────
  {
    id: 3,
    title: "MongoDB Basics for Students",
    issuer: "MongoDB",
    issuerShort: "MongoDB",
    issuerColor: "#00ED64",
    category: "Database",
    date: "June 8, 2025",
    credentialUrl: "/certificates/mongodb-basics.pdf",
    credentialId: "MDBt80wvv9621",
    note: "Proof of Completion",
  },
  {
    id: 4,
    title: "Connecting to MongoDB in Python",
    issuer: "MongoDB",
    issuerShort: "MongoDB",
    issuerColor: "#00ED64",
    category: "Database",
    date: "July 8, 2025",
    credentialUrl: "/certificates/mongodb-connecting.pdf",
    credentialId: "MDBprtz6f4xzb",
    note: "Proof of Completion",
  },
  {
    id: 5,
    title: "MongoDB CRUD Operations in Python",
    issuer: "MongoDB",
    issuerShort: "MongoDB",
    issuerColor: "#00ED64",
    category: "Database",
    date: "July 8, 2025",
    credentialUrl: "/certificates/mongodb-crud.pdf",
    credentialId: "MDBm5yw2v0k1o",
    note: "Proof of Completion",
  },
  {
    id: 6,
    title: "MongoDB Aggregation in Python",
    issuer: "MongoDB",
    issuerShort: "MongoDB",
    issuerColor: "#00ED64",
    category: "Database",
    date: "July 8, 2025",
    credentialUrl: "/certificates/mongodb-aggregation.pdf",
    credentialId: "MDBgdegfja4xm",
    note: "Proof of Completion",
  },
  {
    id: 7,
    title: "Using MongoDB with Python",
    issuer: "MongoDB",
    issuerShort: "MongoDB",
    issuerColor: "#00ED64",
    category: "Database",
    date: "July 8, 2025",
    credentialUrl: "/certificates/mongodb-using.pdf",
    credentialId: "MDBpmdklxc5ft",
    note: "Proof of Completion",
  },

  // ── SIMPLILEARN ──────────────────────────────────────────────────
  {
    id: 8,
    title: "Introduction to Artificial Intelligence",
    issuer: "Simplilearn SkillUp",
    issuerShort: "Simplilearn",
    issuerColor: "#FF6B00",
    category: "AI & ML",
    date: "October 23, 2025",
    credentialUrl: "/certificates/simplilearn-intro-ai.pdf",
    credentialId: "9219993",
    note: "Certificate of Completion",
  },
  {
    id: 9,
    title: "Introduction to Data Visualization",
    issuer: "Simplilearn SkillUp",
    issuerShort: "Simplilearn",
    issuerColor: "#FF6B00",
    category: "Data Science",
    date: "October 26, 2025",
    credentialUrl: "/certificates/simplilearn-data-viz.pdf",
    credentialId: "9242792",
    note: "Certificate of Completion",
  },
  {
    id: 10,
    title: "Power BI Data Modelling Basics",
    issuer: "Simplilearn SkillUp",
    issuerShort: "Simplilearn",
    issuerColor: "#FF6B00",
    category: "Data Science",
    date: "February 20, 2026",
    credentialUrl: "/certificates/simplilearn-powerbi.pdf",
    credentialId: "9869219",
    note: "Certificate of Completion",
  },
];

export const education = [
  {
    degree: "CBSE Secondary (Grade 10)",
    institution: "Sri Vignesh Public School, Trichy",
    duration: "2019",
    grade: "93.6%",
    location: "Trichy, Tamil Nadu",
  },
  {
    degree: "CBSE Higher Secondary (Grade 12)",
    institution: "Sri Vignesh Public School, Trichy",
    duration: "2021",
    grade: "95.4%",
    location: "Trichy, Tamil Nadu",
  },
  {
    degree: "B.Tech — Artificial Intelligence & Data Science",
    institution: "SRM TRP Engineering College",
    duration: "2024 – 2028",
    grade: "CGPA: 8.45 (up to 3rd Semester)",
    location: "Trichy, Tamil Nadu",
  },
];

export const strengths = [
  "Full-stack AI product development from ideation to deployment",
  "Real-time audio/video processing pipelines",
  "LLM integration and prompt engineering",
  "On-device / offline-first mobile AI systems",
  "Clean Architecture & scalable system design",
  "Competitive hackathon performer (multiple national-level wins)",
];

export const stats = {
  projects: "6+",
  hackathonWins: "5+",
  certifications: "3+",
  cgpa: "8.45",
};
