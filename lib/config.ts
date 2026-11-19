export const siteConfig = {
  name: "Akram Guroo",
  title: "Full-Stack Developer (Mobile & Web)",
  description: "Building scalable web and mobile products: React, Node.js, React Native, and Java Spring Boot.",

  graduation: {
    month: "July",
    year: 2026,
    status: "Completed"
  },

  leetcode: {
    target: 100,
    note: "Planning DSA practice in JavaScript and learning system design next"
  },

  about: {
    college: "SSM College of Engineering & Technology",
    university: "University of Kashmir",
    nifrRank: 34,
    naacGrade: "A++",
  },
};

export const techStack = [
  {
    category: "Languages",
    skills: ["JavaScript", "TypeScript", "Python", "C", "C++", "Java"]
  },
  {
    category: "Frontend",
    skills: ["React", "Next.js", "Redux Toolkit", "Tailwind CSS", "HTML5", "CSS3"]
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express.js", "REST APIs", "Socket.io (WebSockets)", "JWT Authentication"]
  },
  {
    category: "Database",
    skills: ["MongoDB", "Mongoose"]
  },
  {
    category: "Tools & DevOps",
    skills: ["Git", "GitHub", "Vercel", "Render", "Cloudinary", "Jest"]
  },
  {
    category: "Expertise",
    skills: ["Full Stack Development", "Real-Time Systems", "Team Leadership"]
  },
];

export const projects = [
  {
    id: 1,
    title: "HirePath",
    featured: true,
    tagline: "Full-Stack Internship & Job Portal (v1 & v2 Live)",
    description:
      "A production MERN internship and job portal with 50+ features including role-based authentication, Cloudinary uploads, real-time application tracking, and automated job closing on deadlines. Built with a 3-person team using an MVP-iterative development model.",
    tech: ["React", "Node.js", "MongoDB", "Express", "Tailwind", "Cloudinary", "JWT", "Socket.io", "Framer Motion"],
    github: "https://github.com/akramguroo-dev/hirepath",
    live: "https://hirepath-eight.vercel.app",
    backend: "https://hirepath-api.onrender.com",
    status: "v1 & v2 Production Live",
    highlights: [
      "50+ backend endpoints with REST API",
      "Role-based access control & employer verification",
      "Real-time messaging with Socket.io (JWT-authenticated WebSockets, typing indicators, read receipts)",
      "Cloudinary integration (photos, resumes, logos)",
      "Auto-closing jobs on deadline (Node cron)",
      "Application tracking with feedback system",
      "Search & filtering by type, location, company",
      "Pagination & responsive mobile design",
      "92/100 Lighthouse accessibility score",
      "Team leadership (mentored 2 developers)"
    ],
    metrics: {
      features: "50+",
      accessibility: "92/100",
      performance: "54/100",
      lines_of_code: "5000+"
    }
  },
  {
    id: 2,
    title: "Real-Time Chat Application",
    featured: true,
    tagline: "Multi-Room Live Messaging App",
    description:
      "A standalone real-time chat application supporting multiple chat rooms, live message broadcast, and online/offline presence indicators, with full message history persisted in MongoDB.",
    tech: ["React", "Node.js", "Express", "Socket.io", "MongoDB"],
    github: "https://github.com/akramguroo-dev/chat-app",
    live: "https://chat-app-seven-self-31.vercel.app",
    backend: "https://chat-app-backend-jued.onrender.com",
    highlights: [
      "Multi-room support with live message broadcast",
      "MongoDB-backed message persistence and history loading",
      "Online/offline presence indicators",
      "Deployed frontend and backend separately with cross-origin Socket.io configuration"
    ]
  },
  {
    id: 3,
    title: "Smart Chef 🍳",
    featured: true,
    tagline: "AI-Powered Recipe Generator",
    description:
      "Full-stack AI recipe generator using Meta's Llama 3.3 model via Groq API. Users input ingredients and receive AI-generated recipes with fast response times and a clean UI.",
    tech: ["React", "Node.js", "Groq API", "Llama 3.3", "Vercel", "Render"],
    github: "https://github.com/akramguroo-dev/smart-chef-react-app",
    live: "https://smart-chef-react-app.vercel.app",
    highlights: [
      "AI recipe generation using Llama 3.3",
      "Fast API responses via Groq infrastructure",
      "Clean React UI with Vite",
      "Full-stack deployment (Vercel + Render)",
      "REST API backend with Node.js",
    ]
  },
  {
    id: 4,
    title: "Task Dashboard",
    featured: false,
    tagline: "Redux Toolkit + TypeScript + Full Test Coverage",
    description:
      "A task management dashboard built with Redux Toolkit and full TypeScript typing across the store and components, backed by a 25-test suite covering reducer logic and component integration.",
    tech: ["React", "Redux Toolkit", "TypeScript", "Jest", "React Testing Library"],
    github: "https://github.com/akramguroo-dev/dashboard",
    live: "https://dashboard-gold-theta-32.vercel.app",
    highlights: [
      "Redux Toolkit state management with full TypeScript typing",
      "25 automated tests (16 unit + 9 integration)",
      "Task filtering (All / Active / Completed)",
      "Responsive, tested UI"
    ]
  },
  {
    id: 5,
    title: "Amazon Clone",
    featured: false,
    tagline: "Multi-Page E-Commerce Frontend Simulation",
    description:
      "A multi-page Amazon-style e-commerce frontend simulating a full shopping flow — browsing, cart management, checkout, and order tracking — powered by a REST backend.",
    tech: ["HTML", "CSS", "JavaScript", "REST API"],
    github: "https://github.com/akramguroo-dev/amazon-clone-ecommerce-site",
    live: "https://akramguroo-dev.github.io/amazon-clone-ecommerce-site/",
    highlights: [
      "Browse products, add/remove/update cart items",
      "Place orders and track deliveries via backend API",
      "Fully interactive, multi-page structure"
    ]
  },
  {
    id: 6,
    title: "Developer Portfolio",
    featured: false,
    tagline: "This Site — Next.js + TypeScript",
    description:
      "This personal portfolio, built with Next.js 15 file-based routing and TypeScript, with a config-driven project data layer and a Formspree-integrated contact form.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Formspree"],
    github: "https://github.com/akramguroo-dev/portfolio",
    live: "https://portfolio-puce-six-nm8nojm82f.vercel.app",
    highlights: [
      "Next.js 15 App Router with file-based routing",
      "Centralized, config-driven project data",
      "Formspree-integrated contact form"
    ]
  },
  {
    id: 7,
    title: "Meme Generator",
    featured: false,
    tagline: "React + Imgflip API",
    description:
      "A fun meme generator built with React that lets users add custom text to random meme images fetched from the Imgflip API.",
    tech: ["React", "Vite", "Imgflip API"],
    github: "https://github.com/akramguroo-dev/meme-generator-app",
    live: "https://meme-generator-app-cyan.vercel.app/",
    highlights: [
      "Random meme images via Imgflip API",
      "Custom text overlay editor"
    ]
  },
  {
    id: 8,
    title: "To-Do List App",
    featured: false,
    tagline: "Vanilla JavaScript",
    description: "A simple to-do list application to manage daily tasks, built with HTML, CSS, and JavaScript.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/akramguroo-dev/todo-list-js",
    live: "https://akramguroo-dev.github.io/todo-list-js/",
    highlights: []
  },
  {
    id: 9,
    title: "Rock Paper Scissors Game",
    featured: false,
    tagline: "Vanilla JavaScript",
    description: "An interactive Rock-Paper-Scissors game with an autoplay feature, built with HTML, CSS, and JavaScript.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/akramguroo-dev/rock-paper-scissors-game",
    live: "https://akramguroo-dev.github.io/rock-paper-scissors-game/",
    highlights: []
  },
  {
    id: 10,
    title: "Calculator App",
    featured: false,
    tagline: "Vanilla JavaScript",
    description: "A simple web-based calculator built with HTML, CSS, and JavaScript.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/akramguroo-dev/calculator-html-css-js",
    live: "https://akramguroo-dev.github.io/calculator-html-css-js/",
    highlights: []
  },
  {
    id: 11,
    title: "YouTube Clone",
    featured: false,
    tagline: "HTML & CSS",
    description: "A static clone of the YouTube homepage, built with HTML and CSS.",
    tech: ["HTML", "CSS"],
    github: "https://github.com/akramguroo-dev/youtube-clone-html-css",
    live: "https://akramguroo-dev.github.io/youtube-clone-html-css/",
    highlights: []
  },
];

export const certifications = [
  {
    title: "Front End Development Libraries (React)",
    issuer: "freeCodeCamp",
    date: "July 2025",
    note: "~300-hour developer certification"
  },
  {
    title: "JavaScript Full Course",
    issuer: "supersimple.dev",
    date: "April 2025",
    note: ""
  },
  {
    title: "HTML & CSS Full Course",
    issuer: "supersimple.dev",
    date: "January 2025",
    note: ""
  },
  {
    title: "AI Tools & ChatGPT Workshop",
    issuer: "be10X",
    date: "July 2026",
    note: ""
  },
];