import Link from "next/link";
import { ExternalLink, GitBranch, Mail } from "lucide-react";
import { siteConfig, projects, techStack } from "@/lib/config";

export default function Home() {
  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
              Full Stack Developer
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-2xl mx-auto">
              {siteConfig.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link
                href="/projects"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all inline-flex items-center justify-center gap-2"
              >
                View All Projects
              </Link>
              <Link
                href="/contact"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg font-semibold transition-all inline-flex items-center justify-center gap-2"
              >
                <Mail size={18} />
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">About Me</h2>

          <div className="space-y-6 text-lg text-gray-700">
            <p>
              I'm a BTech student at <span className="font-semibold">{siteConfig.about.college}</span> ({siteConfig.about.university} - NIRF Rank {siteConfig.about.nifrRank}, NAAC {siteConfig.about.naacGrade} accredited), {siteConfig.graduation.status.toLowerCase()} in {siteConfig.graduation.month} {siteConfig.graduation.year}. 
              Over the past year, I've been working on full-stack projects that solve real business problems, from job portals to AI-powered applications.
            </p>

            <p>
              What excites me most is <span className="font-semibold">backend problem-solving</span> — architecting scalable systems, designing efficient APIs, and handling complex business logic. 
              While I'm proficient in frontend development, my passion lies in building robust, production-ready backends.
            </p>

            <p>
              I lead by example. I've mentored and led a team of two developers on the HirePath project, guiding them through the development process, 
              architecting the full-stack solution, and handling core backend work. We followed an <span className="font-semibold">MVP-iterative model</span>, shipping features incrementally and improving based on feedback.
            </p>

            <p>
              I'm actively solving DSA problems (targeting {siteConfig.leetcode.target}+ on LeetCode) to strengthen my problem-solving skills and prepare for technical interviews. 
              My goal is to secure a junior developer role or internship this semester, with the vision to grow into a senior full-stack engineer.
            </p>
          </div>

          {/* Education Badge */}
          <div className="mt-8 bg-blue-50 border-l-4 border-blue-600 p-6">
            <p className="text-gray-700">
              <span className="font-semibold">Education:</span> BTech Computer Science & Engineering, {siteConfig.about.college}, 
              {siteConfig.about.university} (NIRF Rank {siteConfig.about.nifrRank}, NAAC Grade {siteConfig.about.naacGrade}). {siteConfig.graduation.status}: {siteConfig.graduation.month} {siteConfig.graduation.year}.
            </p>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">Tech Stack</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {techStack.map((stack) => (
              <div key={stack.category} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{stack.category}</h3>
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
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">Featured Projects</h2>

          <div className="space-y-12">
            {projects.filter(p => p.featured).map((project, index) => (
              <div
                key={project.id}
                className={`border rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow ${
                  index % 2 === 0 ? "bg-white" : "bg-gray-50"
                }`}
              >
                <div className="p-8">
                  <div className="mb-6">
                    <h3 className="text-3xl font-bold text-gray-900">{project.title}</h3>
                    <p className="text-lg text-blue-600 font-semibold mt-1">{project.tagline}</p>
                  </div>

                  <p className="text-lg text-gray-700 mb-6">{project.description}</p>

                  {/* Key Highlights */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {project.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-start gap-2 text-gray-700">
                          <span className="text-blue-600 font-bold mt-1">✓</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Metrics (if available) */}
                  {project.metrics && (
                    <div className="bg-blue-50 rounded-lg p-4 mb-6">
                      <p className="text-sm text-gray-700">
                        <span className="font-semibold">{project.metrics.features}</span> features • 
                        <span className="font-semibold ml-2">{project.metrics.accessibility}</span> accessibility score • 
                        <span className="font-semibold ml-2">{project.metrics.lines_of_code}</span> lines of code
                      </p>
                    </div>
                  )}

                  {/* Tech Stack Tags */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-all inline-flex items-center justify-center gap-2"
                    >
                      <ExternalLink size={18} />
                      View Live
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border-2 border-gray-300 hover:border-gray-400 text-gray-700 hover:bg-gray-50 px-6 py-2 rounded-lg font-semibold transition-all inline-flex items-center justify-center gap-2"
                    >
                      <GitBranch size={18} />
                      View Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View All Projects CTA */}
          <div className="mt-12 text-center">
            <Link
              href="/projects"
              className="text-blue-600 hover:text-blue-700 font-semibold text-lg inline-flex items-center gap-2 group"
            >
              View All Projects
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-4xl font-bold text-white">Ready to Work Together?</h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            I'm actively looking for internship and junior developer roles. Let's build something amazing together.
          </p>
          <Link
            href="/contact"
            className="bg-white text-blue-600 hover:bg-gray-50 px-8 py-4 rounded-lg font-bold text-lg transition-all inline-block"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}