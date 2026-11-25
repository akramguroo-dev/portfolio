'use client';

import Link from "next/link";
import { siteConfig, techStack, certifications } from "@/lib/config";
import { Award, Briefcase, Book, Target, ArrowRight, BadgeCheck } from "lucide-react";

export default function AboutPage() {
  const experiences = [
    {
      id: 1,
      type: "course",
      title: "Frontend Fundamentals",
      company: "SuperSimpleDev",
      period: "December 2024 - April 2025",
      duration: "~4 months",
      description:
        "Mastered the fundamentals of web development with HTML5, CSS3, and JavaScript. Built 5 practical projects including YouTube Clone, Calculator, Rock Paper Scissors Game, To-Do List, and Amazon Clone.",
      skills: ["HTML5", "CSS3", "JavaScript", "Git", "GitHub"],
      icon: "📚",
    },
    {
      id: 2,
      type: "course",
      title: "React Development",
      company: "freeCodeCamp",
      period: "May - July 2025",
      duration: "~2 months",
      description:
        "Deep dive into React fundamentals and advanced concepts. Built multiple production-ready projects including Smart Chef (AI-powered recipe generator) and a Meme Generator app.",
      skills: ["React", "Hooks", "State Management", "Component Design"],
      icon: "⚛️",
    },
    {
      id: 4,
      type: "project",
      title: "HirePath - Full-Stack Developer Lead",
      company: "Final Year Project",
      period: "March 2026 - Present",
      duration: "v1 & v2 Live",
      description:
        "Led a 3-person team to build a production MERN job portal. Architected and built approximately 95% of the system myself; teammates built the frontend UI pages, developed 50+ backend endpoints, implemented security features (JWT, role-based access), integrated Cloudinary for file uploads, and shipped a real-time messaging system (v2) using JWT-authenticated Socket.io — supporting live delivery, typing indicators, and read receipts.",
      skills: [
        "MERN Stack",
        "Socket.io",
        "Architecture Design",
        "Team Leadership",
        "DevOps",
        "Security",
      ],
      icon: "🚀",
    },
    {
      id: 5,
      type: "internship",
      title: "Full-Stack Developer Intern",
      company: "Saiteja Infotech Private Limited",
      period: "August 2026 - September 2026",
      duration: "Completed",
      description:
        "Rebuilt the company website from WordPress into a React/Vite single-page application with client-side routing and reusable components. Built a Spring Boot and MySQL backend with a validated REST API for quotation requests. Presented sprint reviews to the CEO and management, and handed the repository over to the company's GitHub organization, where the DevOps team deployed it on the existing domain.",
      skills: ["React", "Vite", "Java", "Spring Boot", "MySQL", "Docker", "REST APIs"],
      icon: "🌐",
    },
    {
      id: 6,
      type: "internship",
      title: "Full-Stack Developer Intern (Mobile)",
      company: "ANS Oceanverse Technologies Private Limited",
      period: "September 2026 - Present",
      duration: "Remote · 6-month internship",
      description:
        "Work on OneBuddy, a service app for six merchant and partner categories: restaurants and food, grocery stores, ride captains (auto, car, bike), pharmacy and healthcare providers, home-service professionals, and delivery partners. Built with React Native, Expo Router, TypeScript, and Firebase. Set up the repository's modular folder and routing foundation, trained a 6-member intern cohort on Git workflows, and now work across the front end, back end, and end-to-end testing ahead of production rollout.",
      skills: ["React Native", "Expo", "TypeScript", "Firebase", "Firestore", "Git Workflows"],
      icon: "📱",
    },
  ];

  const achievements = [
    { title: "HirePath v1 & v2 Live", icon: Target,
      description: "Led a 3-person team to ship a production MERN job portal, then independently added a real-time Socket.io messaging system." },
    { title: "Company Website Delivered", icon: Briefcase,
      description: "Rebuilt a company website from WordPress into a React/Vite app with a Spring Boot backend. The repo was handed over and deployed by the company's DevOps team." },
    { title: "Interns Mentored", icon: Award,
      description: "Trained a 6-member intern cohort at ANS Oceanverse on Git workflows, feature branching, and PR reviews." },
    { title: "Backend Security", icon: Award,
      description: "Implemented JWT authentication, role-based access control, rate limiting, and input validation across production APIs." },
  ];

  return (
    <div className="py-20 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Hero Section */}
        <section>
          <div className="flex items-center gap-6 mb-6">
            <img src="/profile.png" alt="Akram Guroo"
              className="w-28 h-28 rounded-full object-cover object-[50%_25%] border-4 border-white shadow-lg flex-shrink-0" />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">About Me</h1>
          </div>
          <div className="space-y-4 text-lg text-gray-700">
            <p>
              I'm a full-stack developer who recently completed my degree at{" "}
              <span className="font-semibold">{siteConfig.about.college}</span>.
              My journey into tech started with curiosity about how systems work, and it has evolved into a deep
              passion for solving real-world problems through clean, scalable
              code.
            </p>
            <p>
              What excites me most is <span className="font-semibold">backend problem-solving</span> —
              architecting secure, scalable systems and designing efficient APIs that power real applications.
              While I'm proficient in frontend development, my true passion lies in building robust,
              production-ready backends that can handle complexity and scale.
            </p>
          </div>
        </section>

        {/* Education Section */}
        <section className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Book size={28} className="text-blue-600" />
            Education
          </h2>

          <div className="space-y-6">
            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-xl font-bold text-gray-900">
                BTech Computer Science & Engineering
              </h3>
              <p className="text-gray-600 font-semibold">
                {siteConfig.about.college}
              </p>
              <p className="text-gray-500 text-sm">
                {siteConfig.about.university} (NIRF Rank{" "}
                {siteConfig.about.nifrRank}, NAAC Grade{" "}
                {siteConfig.about.naacGrade})
              </p>
              <p className="text-gray-600 mt-2">
                2022 – 2026 · Final semester completed, degree conferral pending
              </p>
              <p className="text-gray-600 mt-2">
                <span className="font-semibold">Core Subjects:</span> Data
                Structures & Algorithms, Object-Oriented Programming (Java, C++), DBMS (SQL), Operating Systems, Computer
                Networks, Software Engineering, Algorithm Analysis & Design, Python Programming
              </p>
              <p className="text-gray-600 mt-2">
                <span className="font-semibold">Electives & Open Courses:</span> Artificial Intelligence & Machine Learning, Data
                Mining, IoT, E-commerce & Cyber Laws, Data Science,
                Entrepreneurship Development, Wireless & Mobile Communication
              </p>
            </div>
          </div>
        </section>

        {/* Learning & Experience Timeline */}
        <section className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-2">
            <Briefcase size={28} className="text-blue-600" />
            Learning Journey & Experience
          </h2>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`border-l-4 pl-6 pb-6 ${index !== experiences.length - 1 ? "border-b border-gray-200" : ""
                  } ${exp.type === "project" ? "border-l-green-600" : "border-l-blue-600"}`}
              >
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <div className="text-2xl mb-2">{exp.icon}</div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {exp.title}
                    </h3>
                    <p className="text-lg text-gray-600 font-semibold">
                      {exp.company}
                    </p>
                  </div>
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold whitespace-nowrap ml-4">
                    {exp.duration}
                  </span>
                </div>

                <p className="text-gray-500 text-sm mb-3">{exp.period}</p>
                <p className="text-gray-700 mb-4">{exp.description}</p>

                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* HirePath Deep Dive */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-8 border border-blue-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            HirePath: My Biggest Challenge & Achievement
          </h2>

          <div className="space-y-4 text-gray-700">
            <p>
              HirePath is more than just a final-year project — it's my demonstration of full-stack
              mastery and leadership. Starting in March 2026, I architected a complete MERN job portal
              from scratch, leading a 3-person team through coding, system design, and deployment — then
              went on to independently design and ship a real-time messaging system (v2) using Socket.io.
            </p>

            <div className="bg-white rounded-lg p-6 mt-4">
              <p className="font-semibold text-gray-900 mb-3">Key Challenges Overcome:</p>
              <p className="text-gray-700 mb-4">
                <span className="font-semibold">Backend Security:</span> Implementing JWT authentication,
                role-based access control (Student/Employer), protected APIs, and secure file uploads with Cloudinary.
                These real-world security challenges taught me how to build applications that protect user data.
              </p>
              <p className="text-gray-700 mb-4">
                <span className="font-semibold">System Architecture:</span> Designing scalable APIs, implementing
                pagination, filtering, search functionality, and cron jobs for automated job closing. This deepened my
                understanding of production-grade system design.
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">Real-Time Systems:</span> Building a JWT-authenticated Socket.io
                messaging layer from scratch — including live delivery, typing indicators, and read receipts — and
                debugging genuinely tricky production issues along the way (WebSocket auth payload mismatches,
                MongoDB ObjectId comparison bugs, deployment configuration errors).
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 mt-4">
              <p className="font-semibold text-gray-900 mb-3">My Role & Impact:</p>
              <ul className="space-y-2 text-gray-700">
                <li>✓ <span className="font-semibold">Full-Stack Developer Lead:</span> Architected and built ~95% of the system; owned backend and integrations, assigned and reviewed team tasks</li>
                <li>✓ <span className="font-semibold">Backend Specialist:</span> Developed 50+ REST API endpoints</li>
                <li>✓ <span className="font-semibold">Team Leader:</span> Led a 3-person team, mentored a 6-member intern cohort on Git workflows, and took full ownership of a company website rebuild</li>
                <li>✓ <span className="font-semibold">DevOps Engineer:</span> Deployed to Vercel (frontend) & Render (backend)</li>
                <li>✓ <span className="font-semibold">Documentation:</span> Maintained comprehensive code documentation</li>
                <li>✓ <span className="font-semibold">Issue Management:</span> Assigned and tracked team tasks</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-2">
            <Award size={28} className="text-blue-600" />
            Achievements & Recognition
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement) => {
              const IconComponent = achievement.icon;
              return (
                <div
                  key={achievement.title}
                  className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-200"
                >
                  <IconComponent size={32} className="text-blue-600 mb-3" />
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{achievement.description}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Certifications */}
        <section className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-2">
            <BadgeCheck size={28} className="text-blue-600" />
            Certifications
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {certifications.map((cert) => (
              <div
                key={cert.title}
                className="border border-gray-200 rounded-lg p-5"
              >
                <h3 className="font-bold text-gray-900">{cert.title}</h3>
                <p className="text-gray-600 text-sm mt-1">
                  {cert.issuer} · {cert.date}
                </p>
                {cert.note && (
                  <p className="text-gray-500 text-xs mt-1">{cert.note}</p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Tech Stack */}
        <section className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Tech Stack</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techStack.map((stack) => (
              <div key={stack.category} className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  {stack.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {stack.skills.map((skill) => (
                    <span
                      key={skill}
                      className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Why I'm Different */}
        <section className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg p-8 text-white">
          <h2 className="text-3xl font-bold mb-6">Why Work With Me?</h2>

          <div className="space-y-4 text-lg">
            <p>
              <span className="font-bold">🎯 Problem Solver:</span> {" "}
              I'm building DSA fundamentals in JavaScript and learning system design step by step, alongside my mobile product work.
            </p>
            <p>
              <span className="font-bold">👥 Team Leader:</span> I lead by example. I took full ownership of a company website rebuild, presented it to the CEO, and mentored a 6-member intern cohort on Git workflows and collaboration.
            </p>
            <p>
              <span className="font-bold">🔒 Security-Conscious:</span> I understand the importance of secure,
              scalable backend systems. I've implemented real-world security patterns (JWT, RBAC, encrypted APIs).
            </p>
            <p>
              <span className="font-bold">🚀 Growth Mindset:</span> {" "}
              I'm constantly learning, building, and pushing myself to master new technologies and tackle harder problems.
            </p>
          </div>
        </section>

        {/* Current Focus */}
        <section className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Target size={28} className="text-blue-600" />
            Current Focus & Goals
          </h2>

          <div className="space-y-4 text-gray-700 text-lg">
            <p>
              Right now, I'm focused on mastering <span className="font-semibold">mobile development</span> with React Native, Expo, TypeScript, and Firebase through my work at ANS Oceanverse on OneBuddy. I'm also learning <span className="font-semibold">system design from scratch</span>, practicing <span className="font-semibold">DSA in JavaScript</span>, and building my <span className="font-semibold">Python</span> skills.
            </p>
            <p>
              My vision is to become a <span className="font-semibold">senior full-stack engineer</span> who can
              architect scalable systems, lead technical teams, and solve complex real-world problems.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Let's Build Something Great</h2>
          <p className="text-xl text-blue-100 mb-8">
            I'm open to full-stack and mobile developer roles where I can keep owning features end to end.
            If you think I'd be a good fit for your team, let's talk!
          </p>
          <Link
            href="/contact"
            className="bg-white text-blue-600 hover:bg-gray-50 px-8 py-4 rounded-lg font-bold text-lg transition-all inline-flex items-center gap-2"
          >
            Get in Touch
            <ArrowRight size={20} />
          </Link>
        </section>
      </div>
    </div>
  );
}