export const siteConfig = {
  name: "Akram Guroo",
  title: "Full Stack Developer",
  description: "Building scalable web applications with React, Node.js, and modern technologies.",
  
  graduation: {
    month: "July",
    year: 2026,
    status: "Graduating"
  },
  
  leetcode: {
    current: 0,
    target: 100,
    status: "In Progress"
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
    skills: ["JavaScript", "TypeScript", "Python", "C", "C++"] 
  },
  { 
    category: "Frontend", 
    skills: ["React", "Next.js", "Tailwind CSS", "HTML5", "CSS3"] 
  },
  { 
    category: "Backend", 
    skills: ["Node.js", "Express.js", "REST APIs", "GraphQL"] 
  },
  { 
    category: "Databases", 
    skills: ["MongoDB", "PostgreSQL", "MySQL"] 
  },
  { 
    category: "Tools & DevOps", 
    skills: ["Git", "Vercel", "Render", "Cloudinary"] 
  },
  { 
    category: "Expertise", 
    skills: ["Full Stack Development", "Problem Solving", "Team Leadership"] 
  },
];

export const projects = [
  {
    id: 1,
    title: "HirePath",
    tagline: "Full-Stack Internship & Job Portal (v1 Live, v2 In Development)",
    description:
      "A production-ready MERN internship and job portal with 50+ features including role-based authentication, Cloudinary uploads, real-time application tracking, and automated job closing on deadlines. Built with a 2-person team using MVP-iterative software development.",
    tech: ["React", "Node.js", "MongoDB", "Express", "Tailwind", "Cloudinary", "JWT", "Socket.io (planned)", "Framer Motion"],
    github: "https://github.com/akramguroo-dev/hirepath",
    live: "https://hirepath-eight.vercel.app",
    backend: "https://hirepath-api.onrender.com",
    status: "v1 Production Live, v2 In Development",
    highlights: [
      "50+ backend endpoints with REST API",
      "Role-based access control & employer verification",
      "Cloudinary integration (photos, resumes, logos)",
      "Auto-closing jobs on deadline (Node cron)",
      "Application tracking with feedback system",
      "Search & filtering by type, location, company",
      "Pagination & responsive mobile design",
      "92/100 Lighthouse accessibility score",
      "Team leadership (mentored 1 developer)"
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
    title: "Smart Chef 🍳",
    tagline: "AI-Powered Recipe Generator",
    description:
      "Full-stack AI recipe generator using Meta's Llama 3.3 model via Groq API. Users input ingredients and receive AI-generated recipes with fast response times and clean UI.",
    tech: ["React", "Node.js", "Groq API", "Llama 3.3", "Vercel", "Render"],
    github: "https://github.com/akramguroo-dev/smart-chef",
    live: "https://smart-chef-react-app.vercel.app",
    backend: "https://smart-chef-backend.onrender.com",
    highlights: [
      "AI recipe generation using Llama 3.3",
      "Fast API responses via Groq infrastructure",
      "Clean React UI with Vite",
      "Full-stack deployment (Vercel + Render)",
      "REST API backend with Node.js",
    ]
  }
];