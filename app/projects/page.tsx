import { projects } from "@/lib/config";
import ProjectCard from "@/components/ProjectCard";

export default function ProjectsPage() {
  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">All Projects</h1>
        
        {/* Grid of projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              tech={project.tech}
              live={project.live}
              github={project.github}
              highlights={project.highlights}
              metrics={project.metrics}
              tagline={project.tagline}
            />
          ))}
        </div>
      </div>
    </div>
  );
}