'use client';

import Link from "next/link";
import { siteConfig, techStack } from "@/lib/config";
import { Award, Briefcase, Book, Target, ArrowRight } from "lucide-react";

export default function AboutPage() {
  const experiences = [
    {
      id: 1,
      type: "course",
      title: "Frontend Fundamentals",
      company: "SuperSimpleDev",
      period: "April 2025",
      duration: "2 months",
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
      period: "May 2025",
      duration: "1-2 months",
      description:
        "Deep dive into React fundamentals and advanced concepts. Built multiple production-ready projects including Smart Chef (AI-powered recipe generator) and Meme Generator app.",
      skills: ["React", "Hooks", "State Management", "Component Design"],
      icon: "⚛️",
    },
    {
      id: 3,
      type: "internship",
      title: "Full Stack Developer Internship",
      company: "Null Classes (EdTech)",
      period: "September 2025 - December 2025",
      duration: "3+ months",
      description:
        "Developed a complete MERN stack internship/job portal. Gained hands-on experience in full-stack development, API design, and database management. This project led to an internship offer.",
      skills: ["MERN Stack", "MongoDB", "Express", "React", "Node.js"],
      icon: "💼",
    },
    {
      id: 4,
      type: "project",
      title: "HirePath - Lead Full Stack Developer",
      company: "Final Year Project",
      period: "March 2026 - Ongoing",
      duration: "Ongoing",
      description:
        "Leading a 2-person team to build a production-ready MERN job portal. Architected the entire system, developed 50+ backend endpoints, implemented security features (JWT, role-based access), integrated Cloudinary for file uploads, managed deployment, and mentored team members.",
      skills: [
        "MERN Stack",
        "Architecture Design",
        "Team Leadership",
        "DevOps",
        "Security",
      ],
      icon: "🚀",
    },
  ];

  const achievements = [
    {
      title: "First Position - Final Year Project",
      description: "Ranked #1 in final year MERN project among all students",
      icon: Award,
    },
    {
      title: "100 LeetCode Problems",
      description: "Solved almost 100 DSA problems (started March 2026)",
      icon: Target,
    },
    {
      title: "Backend Security Mastery",
      description:
        "Overcame the challenge of implementing JWT, role-based access control, and secure APIs",
      icon: Briefcase,
    },
  ];

  return (
    <div className="py-20 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Hero Section */}
        <section>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Me
          </h1>
          <div className="space-y-4 text-lg text-gray-700">
            <p>
              I'm a passionate full-stack developer currently in my final year at{" "}
              <span className="font-semibold">{siteConfig.about.college}</span>,
              graduating in {siteConfig.graduation.month}{" "}
              {siteConfig.graduation.year}. My journey into tech started with
              curiosity about how systems work, and it has evolved into a deep
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
                Graduating: {siteConfig.graduation.month}{" "}
                {siteConfig.graduation.year}
              </p>
              <p className="text-gray-600 mt-2">
                <span className="font-semibold">Core Subjects:</span> Data
                Structures, Algorithms, DBMS, Operating Systems, Computer
                Networks, Software Engineering, Python, OOP (Java, C++)
              </p>
              <p className="text-gray-600 mt-2">
                <span className="font-semibold">Electives & Open Courses:</span> Data
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
                className={`border-l-4 pl-6 pb-6 ${
                  index !== experiences.length - 1 ? "border-b border-gray-200" : ""
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
              from scratch, handling not just coding but team leadership, system design, and deployment.
            </p>

            <div className="bg-white rounded-lg p-6 mt-4">
              <p className="font-semibold text-gray-900 mb-3">Key Challenges Overcome:</p>
              <p className="text-gray-700 mb-4">
                <span className="font-semibold">Backend Security:</span> Implementing JWT authentication, 
                role-based access control (Student/Employer), protected APIs, and secure file uploads with Cloudinary. 
                These real-world security challenges taught me how to build applications that protect user data.
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">System Architecture:</span> Designing scalable APIs, implementing 
                pagination, filtering, search functionality, and cron jobs for automated job closing. This deepened my 
                understanding of production-grade system design.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 mt-4">
              <p className="font-semibold text-gray-900 mb-3">My Role & Impact:</p>
              <ul className="space-y-2 text-gray-700">
                <li>✓ <span className="font-semibold">Lead Full Stack Developer:</span> Architected entire system</li>
                <li>✓ <span className="font-semibold">Backend Specialist:</span> Developed 50+ REST API endpoints</li>
                <li>✓ <span className="font-semibold">Team Leader:</span> Mentored 1 frontend developer</li>
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
              {siteConfig.leetcode.status === "In Progress" && (
                <>I'm actively solving DSA problems on LeetCode (almost 100 solved) to strengthen my 
                algorithmic thinking and technical interview skills.</>
              )}
            </p>
            <p>
              <span className="font-bold">👥 Team Leader:</span> I don't just code — I mentor, architect, and 
              inspire. I've led my HirePath team through complex challenges and shipped production code.
            </p>
            <p>
              <span className="font-bold">🔒 Security-Conscious:</span> I understand the importance of secure, 
              scalable backend systems. I've implemented real-world security patterns (JWT, RBAC, encrypted APIs).
            </p>
            <p>
              <span className="font-bold">🚀 Growth Mindset:</span> {" "}
              {siteConfig.graduation.status}: I'm constantly learning, 
              building, and pushing myself to master new technologies and tackle harder problems.
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
              Right now, I'm focused on two things: <span className="font-semibold">completing HirePath</span> with 
              all v2 features (real-time messaging, college integration) and{" "}
              <span className="font-semibold">securing my first internship/junior developer role</span> to apply my 
              skills in a professional environment.
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
            I'm actively looking for internship and junior developer roles. If you think I'd be a great fit for 
            your team, let's talk!
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