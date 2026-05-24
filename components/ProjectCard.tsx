import Link from "next/link";
import { ExternalLink, GitBranch } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  live: string;
  github: string;
  highlights: string[];
  metrics?: {
    features: string;
    accessibility: string;
    performance: string;
    lines_of_code: string;
  };
  tagline?: string;
}

export default function ProjectCard({ 
  title, 
  description, 
  tech, 
  live, 
  github, 
  highlights, 
  metrics,
  tagline 
}: ProjectCardProps) {
  return (
    <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow bg-white">
      <div className="p-8">
        {/* Title and Tagline */}
        <div className="mb-6">
          <h3 className="text-3xl font-bold text-gray-900">{title}</h3>
          {tagline && (
            <p className="text-lg text-blue-600 font-semibold mt-1">{tagline}</p>
          )}
        </div>

        {/* Description */}
        <p className="text-lg text-gray-700 mb-6">{description}</p>

        {/* Key Highlights */}
        <div className="mb-6">
          <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {highlights.map((highlight) => (
              <li key={highlight} className="flex items-start gap-2 text-gray-700">
                <span className="text-blue-600 font-bold mt-1">✓</span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Metrics (if provided) */}
        {metrics && (
          <div className="bg-blue-50 rounded-lg p-4 mb-6">
            <p className="text-sm text-gray-700">
              <span className="font-semibold">{metrics.features}</span> features • 
              <span className="font-semibold ml-2">{metrics.accessibility}</span> accessibility • 
              <span className="font-semibold ml-2">{metrics.performance}</span> performance • 
              <span className="font-semibold ml-2">{metrics.lines_of_code}</span> LOC
            </p>
          </div>
        )}

        {/* Tech Stack Tags */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {tech.map((techItem) => (
              <span
                key={techItem}
                className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium"
              >
                {techItem}
              </span>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-all inline-flex items-center justify-center gap-2"
          >
            <ExternalLink size={18} />
            View Live
          </a>
          <a
            href={github}
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
  );
}